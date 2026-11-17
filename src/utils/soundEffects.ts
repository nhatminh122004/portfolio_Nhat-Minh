// Web Audio API procedural sound engine - zero external asset dependencies
let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (soundEnabled) {
    playHoloBeep(880, 0.08, 'sine');
  }
  return soundEnabled;
};

export const isSoundEnabled = (): boolean => soundEnabled;

export const playHoloBeep = (freq = 640, duration = 0.05, type: OscillatorType = 'sine', gainVal = 0.03) => {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Ignore audio permission or playback restrictions
  }
};

export const playClick = () => playHoloBeep(520, 0.04, 'triangle', 0.02);
export const playHover = () => playHoloBeep(800, 0.025, 'sine', 0.015);
export const playSuccess = () => {
  if (!soundEnabled) return;
  playHoloBeep(600, 0.06, 'sine', 0.025);
  setTimeout(() => playHoloBeep(900, 0.09, 'sine', 0.03), 70);
};
