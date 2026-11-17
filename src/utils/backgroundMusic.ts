// Persistent singleton controller for Vastness — Andrew Ev background music

const AUDIO_SRC = './audio/vastness-andrew-ev.mp3';
const MAX_VOLUME = 0.15;
const FADE_IN_MS = 1500;
const FADE_OUT_MS = 1000;
const LOOP_FADE_OUT_WINDOW_SEC = 0.35;
const LOOP_FADE_IN_MS = 600;

type Listener = (isPlaying: boolean) => void;

class BackgroundMusicController {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private mediaSource: MediaElementAudioSourceNode | null = null;
  private webAudioFailed = false;

  private playing = false;
  private listeners = new Set<Listener>();
  private epoch = 0;
  private unlockArmed = false;

  // Fade envelope tracking for accurate mid-fade interruption across all browsers
  private currentGain = 0;
  private fadeStartGain = 0;
  private fadeTargetGain = 0;
  private fadeStartTimestamp = 0;
  private fadeDurationMs = 0;

  private fadeRafId: number | null = null;
  private pauseTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private loopState: 'idle' | 'fading-out' | 'fading-in' = 'idle';

  private onTimeUpdateBound = () => this.handleTimeUpdate();
  private onEndedBound = () => this.handleEnded();
  private onErrorBound = () => this.handleAudioError();
  private onFirstGestureBound = (e: Event) => this.handleFirstGesture(e);

  public getIsPlaying(): boolean {
    return this.playing;
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.playing);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((fn) => fn(this.playing));
  }

  private ensureAudioElement(): HTMLAudioElement | null {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return null;

    if (!this.audio) {
      const el = new Audio(AUDIO_SRC);
      el.loop = true;
      el.preload = 'auto';
      el.setAttribute('playsinline', '');
      el.addEventListener('timeupdate', this.onTimeUpdateBound);
      el.addEventListener('ended', this.onEndedBound);
      el.addEventListener('error', this.onErrorBound);
      this.audio = el;
    }

    return this.audio;
  }

  private ensureAudioGraph(el: HTMLAudioElement): void {
    if (this.webAudioFailed || this.gainNode) return;

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        this.webAudioFailed = true;
        return;
      }

      const ctx = new AudioCtx();
      const source = ctx.createMediaElementSource(el);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(this.currentGain, ctx.currentTime);

      source.connect(gain);
      gain.connect(ctx.destination);

      // On iOS Safari audio.volume is read-only (1), so GainNode enforces the 15% cap
      el.volume = 1;

      this.audioCtx = ctx;
      this.mediaSource = source;
      this.gainNode = gain;
    } catch {
      this.webAudioFailed = true;
    }
  }

  private getInstantaneousGain(): number {
    if (this.fadeDurationMs <= 0) return this.currentGain;
    const progress = Math.min(
      1,
      Math.max(0, (performance.now() - this.fadeStartTimestamp) / this.fadeDurationMs)
    );
    const val = this.fadeStartGain + (this.fadeTargetGain - this.fadeStartGain) * progress;
    if (progress >= 1) {
      this.currentGain = this.fadeTargetGain;
      this.fadeDurationMs = 0;
    }
    return val;
  }

  private cancelFade(): number {
    const instant = this.getInstantaneousGain();
    this.currentGain = instant;
    this.fadeStartGain = instant;
    this.fadeTargetGain = instant;
    this.fadeDurationMs = 0;

    if (this.fadeRafId !== null) {
      cancelAnimationFrame(this.fadeRafId);
      this.fadeRafId = null;
    }

    if (this.gainNode && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.gainNode.gain.cancelScheduledValues(now);
      this.gainNode.gain.setValueAtTime(instant, now);
    }

    return instant;
  }

  private setGainImmediate(value: number): void {
    const clamped = Math.min(MAX_VOLUME, Math.max(0, value));
    this.cancelFade();
    this.currentGain = clamped;
    this.fadeStartGain = clamped;
    this.fadeTargetGain = clamped;

    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(clamped, this.audioCtx.currentTime);
    } else if (this.audio) {
      this.audio.volume = clamped;
    }
  }

  private fadeTo(target: number, durationMs: number, onComplete?: () => void): void {
    const clampedTarget = Math.min(MAX_VOLUME, Math.max(0, target));
    const startVal = this.cancelFade();

    if (this.pauseTimeoutId !== null) {
      clearTimeout(this.pauseTimeoutId);
      this.pauseTimeoutId = null;
    }

    if (durationMs <= 0) {
      this.setGainImmediate(clampedTarget);
      onComplete?.();
      return;
    }

    this.fadeStartGain = startVal;
    this.fadeTargetGain = clampedTarget;
    this.fadeStartTimestamp = performance.now();
    this.fadeDurationMs = durationMs;

    if (this.gainNode && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.gainNode.gain.cancelScheduledValues(now);
      this.gainNode.gain.setValueAtTime(startVal, now);
      this.gainNode.gain.linearRampToValueAtTime(clampedTarget, now + durationMs / 1000);

      this.pauseTimeoutId = setTimeout(() => {
        this.pauseTimeoutId = null;
        this.currentGain = clampedTarget;
        this.fadeDurationMs = 0;
        onComplete?.();
      }, onComplete ? durationMs + 25 : durationMs);
      return;
    }

    // Fallback linear fade via rAF when Web Audio API is unavailable
    const step = () => {
      const elapsed = performance.now() - this.fadeStartTimestamp;
      const progress = Math.min(1, elapsed / durationMs);
      const val = startVal + (clampedTarget - startVal) * progress;
      this.currentGain = val;
      if (this.audio) {
        this.audio.volume = Math.min(MAX_VOLUME, Math.max(0, val));
      }

      if (progress < 1) {
        this.fadeRafId = requestAnimationFrame(step);
      } else {
        this.fadeRafId = null;
        this.fadeDurationMs = 0;
        onComplete?.();
      }
    };
    this.fadeRafId = requestAnimationFrame(step);
  }

  private handleTimeUpdate(): void {
    if (!this.playing || !this.audio) return;
    const { currentTime, duration } = this.audio;
    if (!Number.isFinite(duration) || duration <= 2) return;

    const remaining = duration - currentTime;
    if (remaining <= LOOP_FADE_OUT_WINDOW_SEC && remaining > 0.02 && this.loopState === 'idle') {
      this.loopState = 'fading-out';
      const fadeOutMs = Math.max(120, (remaining - 0.02) * 1000);
      this.fadeTo(0, fadeOutMs);
    } else if (currentTime < 1.0 && this.loopState === 'fading-out') {
      this.loopState = 'fading-in';
      this.setGainImmediate(0);
      this.fadeTo(MAX_VOLUME, LOOP_FADE_IN_MS);
    } else if (currentTime >= 1.5 && currentTime < duration - 1.0 && this.loopState !== 'idle') {
      this.loopState = 'idle';
    }
  }

  private async handleEnded(): Promise<void> {
    if (!this.playing || !this.audio) return;
    try {
      this.audio.currentTime = 0;
      this.setGainImmediate(0);
      await this.audio.play();
      if (this.playing) {
        this.loopState = 'fading-in';
        this.fadeTo(MAX_VOLUME, LOOP_FADE_IN_MS);
      }
    } catch {
      this.playing = false;
      this.notifyListeners();
    }
  }

  private handleAudioError(): void {
    this.disarmUnlockListeners();
    this.cancelFade();
    if (this.pauseTimeoutId !== null) {
      clearTimeout(this.pauseTimeoutId);
      this.pauseTimeoutId = null;
    }
    this.playing = false;
    this.loopState = 'idle';
    this.notifyListeners();
  }

  private armUnlockListeners(): void {
    if (this.unlockArmed || typeof window === 'undefined') return;
    this.unlockArmed = true;
    window.addEventListener('click', this.onFirstGestureBound, { capture: true, passive: true });
    window.addEventListener('touchend', this.onFirstGestureBound, { capture: true, passive: true });
    window.addEventListener('keydown', this.onFirstGestureBound, { capture: true, passive: true });
  }

  private disarmUnlockListeners(): void {
    if (!this.unlockArmed || typeof window === 'undefined') return;
    this.unlockArmed = false;
    window.removeEventListener('click', this.onFirstGestureBound, { capture: true });
    window.removeEventListener('touchend', this.onFirstGestureBound, { capture: true });
    window.removeEventListener('keydown', this.onFirstGestureBound, { capture: true });
  }

  private handleFirstGesture(e: Event): void {
    this.disarmUnlockListeners();
    const target = e.target as Element | null;
    // Let the speaker toggle button's own onClick handle play/pause directly
    if (target?.closest?.('[data-music-toggle="true"]')) return;
    if (!this.playing) {
      void this.play();
    }
  }

  /** Attempts autoplay immediately on page load, falling back to first-interaction unlock if blocked. */
  public async initAutoplay(): Promise<boolean> {
    if (this.playing) return true;
    const currentEpoch = this.epoch;
    const el = this.ensureAudioElement();
    if (!el) return false;

    try {
      el.volume = 0;
      this.setGainImmediate(0);
      this.loopState = 'idle';
      this.playing = true;

      await el.play();

      if (currentEpoch !== this.epoch || !this.playing || el.paused) {
        if (currentEpoch === this.epoch) {
          this.playing = false;
          this.notifyListeners();
        }
        return false;
      }

      this.disarmUnlockListeners();
      this.notifyListeners();
      this.fadeTo(MAX_VOLUME, FADE_IN_MS);
      return true;
    } catch {
      if (currentEpoch !== this.epoch) return false;
      this.playing = false;
      el.pause();
      this.setGainImmediate(0);
      this.notifyListeners();
      this.armUnlockListeners();
      return false;
    }
  }

  public async toggle(): Promise<boolean> {
    this.disarmUnlockListeners();
    if (this.playing) {
      this.pause();
      return false;
    }
    return this.play();
  }

  public async play(): Promise<boolean> {
    this.disarmUnlockListeners();
    const currentEpoch = this.epoch;
    const el = this.ensureAudioElement();
    if (!el) return false;

    this.ensureAudioGraph(el);

    if (this.pauseTimeoutId !== null) {
      clearTimeout(this.pauseTimeoutId);
      this.pauseTimeoutId = null;
    }

    this.loopState = 'idle';
    this.playing = true;
    this.notifyListeners();

    try {
      if (
        this.audioCtx &&
        (this.audioCtx.state === 'suspended' || (this.audioCtx.state as string) === 'interrupted')
      ) {
        void this.audioCtx.resume().catch(() => {});
      }

      // Freeze any in-progress fade-out synchronously before play() yields; zero gain if paused
      const startingGain = el.paused ? 0 : this.cancelFade();
      if (el.paused) {
        this.setGainImmediate(0);
      }

      await el.play();

      // Guard if user toggled pause or controller tore down while play() promise was pending
      if (currentEpoch !== this.epoch || !this.playing || el.paused) return false;

      this.setGainImmediate(startingGain);
      this.fadeTo(MAX_VOLUME, FADE_IN_MS);
      return true;
    } catch {
      if (currentEpoch !== this.epoch) return false;
      this.playing = false;
      this.setGainImmediate(0);
      this.notifyListeners();
      return false;
    }
  }

  public pause(): void {
    this.disarmUnlockListeners();
    this.playing = false;
    this.loopState = 'idle';
    this.notifyListeners();

    if (!this.audio) return;

    this.fadeTo(0, FADE_OUT_MS, () => {
      if (!this.playing && this.audio && !this.audio.paused) {
        // Pauses without resetting audio.currentTime so playback resumes from the same position
        this.audio.pause();
      }
    });
  }

  public destroy(): void {
    this.epoch += 1;
    this.disarmUnlockListeners();
    this.cancelFade();
    if (this.pauseTimeoutId !== null) {
      clearTimeout(this.pauseTimeoutId);
      this.pauseTimeoutId = null;
    }

    if (this.audio) {
      this.audio.pause();
      this.audio.removeEventListener('timeupdate', this.onTimeUpdateBound);
      this.audio.removeEventListener('ended', this.onEndedBound);
      this.audio.removeEventListener('error', this.onErrorBound);
      this.audio.src = '';
      this.audio = null;
    }

    if (this.mediaSource) {
      try {
        this.mediaSource.disconnect();
      } catch {
        // Ignore disconnect errors during teardown
      }
      this.mediaSource = null;
    }

    if (this.gainNode) {
      try {
        this.gainNode.disconnect();
      } catch {
        // Ignore disconnect errors during teardown
      }
      this.gainNode = null;
    }

    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      void this.audioCtx.close().catch(() => {});
      this.audioCtx = null;
    }

    this.playing = false;
    this.currentGain = 0;
    this.loopState = 'idle';
    this.notifyListeners();
  }
}

export const backgroundMusic = new BackgroundMusicController();
