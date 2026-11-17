import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { Language, FocusArea } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover } from '../utils/soundEffects';
import { localize } from '../utils/i18n';

interface SelectedWorkProps {
  lang: Language;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ lang }) => {
  const { focusAreas } = portfolioData;
  const [activeModalItem, setActiveModalItem] = useState<FocusArea | null>(null);

  const handleOpenModal = (item: FocusArea) => {
    playClick();
    setActiveModalItem(item);
  };

  const handleCloseModal = () => {
    playClick();
    setActiveModalItem(null);
  };

  /** Renders "Lead-in: detail" highlights with a subtle bold prefix when present. */
  const renderHighlight = (text: string) => {
    const colonIdx = text.indexOf(':');
    if (colonIdx > 0 && colonIdx < 65 && !text.startsWith('http')) {
      return (
        <>
          <strong className="text-slate-200 font-semibold">{text.slice(0, colonIdx + 1)}</strong>
          {text.slice(colonIdx + 1)}
        </>
      );
    }
    return text;
  };

  return (
    <section id="focus" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950">
      {/* Ambient background typography */}
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 text-[14vw] font-display font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        INITIATIVES
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-space-800/80">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 text-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-6 sm:w-8 h-px bg-cyan" />
              <span>04 / {lang === 'vi' ? 'TRỌNG TÂM TRIỂN KHAI' : 'VERIFIED INITIATIVES'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {lang === 'vi' ? 'Dự Án & Lĩnh Vực Trọng Tâm' : 'Professional Focus & Work'}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan via-sky-400 to-cyan/30 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] select-none">
              04
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.id}
              onMouseEnter={playHover}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-space-900/90 to-space-950/90 border border-space-800 hover:border-cyan/40 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(0,229,255,0.15)]"
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan/5 rounded-full blur-2xl group-hover:bg-cyan/15 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan px-2.5 py-1 rounded-full bg-cyan/10 border border-cyan/20">
                    {area.tag[lang]}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{localize(area.period, lang)}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan transition-colors mb-3">
                  {area.title[lang]}
                </h3>

                <p className="text-xs font-mono text-sky-400 mb-4 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{localize(area.organization, lang)}</span>
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {area.summary[lang]}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {area.highlights[lang].map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan flex-shrink-0 mt-0.5" />
                      <span>{renderHighlight(hl)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-space-800/80 mb-6">
                  {area.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-space-850 text-slate-300 text-[11px] font-mono border border-space-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Inspect Action */}
                <button
                  onClick={() => handleOpenModal(area)}
                  className="w-full py-2.5 px-4 rounded-xl bg-space-850 hover:bg-cyan/15 text-slate-300 hover:text-cyan border border-space-700 hover:border-cyan/40 text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>{lang === 'vi' ? 'Xem Chi Tiết Sáng Kiến' : 'Inspect Initiative'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-space-900 border border-cyan/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.25)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-space-800">
              <div>
                <span className="text-xs font-mono text-cyan uppercase tracking-wider">
                  {activeModalItem.tag[lang]} • {localize(activeModalItem.organization, lang)}
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  {activeModalItem.title[lang]}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-space-800"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalItem.summary[lang]}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan mb-2">
                  {lang === 'vi' ? 'Kết quả & Đóng góp chính' : 'Key Outcomes & Contributions'}
                </h4>
                <ul className="space-y-2">
                  {activeModalItem.highlights[lang].map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 flex-shrink-0" />
                      <span>{renderHighlight(h)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan mb-2">
                  {lang === 'vi' ? 'Công nghệ ứng dụng' : 'Technologies & Stack'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded bg-space-800 text-xs font-mono text-cyan border border-cyan/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-space-800 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 rounded-full bg-cyan text-space-950 text-xs font-mono font-bold uppercase tracking-wider"
              >
                {lang === 'vi' ? 'Đóng' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
