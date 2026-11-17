import React from 'react';
import { Star, Award, Trophy, Medal, Crown, FileText, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, AchievementItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover, playSuccess } from '../utils/soundEffects';

interface AchievementsProps {
  lang: Language;
}

export const Achievements: React.FC<AchievementsProps> = ({ lang }) => {
  const { achievements } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return Sparkles;
      case 'star':
        return Star;
      case 'award':
        return Award;
      case 'trophy':
        return Trophy;
      case 'medal':
        return Medal;
      case 'crown':
        return Crown;
      default:
        return FileText;
    }
  };

  const handleCardClick = (_achv: AchievementItem) => {
    playClick();
    playSuccess();
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#00e5ff', '#38bdf8', '#8b5cf6', '#ffd700', '#f59e0b'],
    });
  };

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950/70 border-t border-space-800/80">
      {/* Giant Background Typo */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 text-[14vw] font-display font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        HONORS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-space-800/80">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 text-amber-400 font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-6 sm:w-8 h-px bg-amber-400" />
              <span>05 / {lang === 'vi' ? 'DANH HIỆU & KHEN THƯỞNG' : 'HONORS & RECOGNITION'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {lang === 'vi' ? 'Thành Tích & Giải Thưởng' : 'Achievements & Awards'}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500/30 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] select-none">
              05
            </span>
          </div>
        </div>

        {/* Featured Masterpiece Banner for 2026 Latest Award (No modal or invitation button) */}
        {achievements[0]?.isNew && (
          <div
            onClick={() => handleCardClick(achievements[0])}
            onMouseEnter={playHover}
            className="mb-8 sm:mb-12 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/15 via-space-900 to-cyan/15 border-2 border-amber-400/50 hover:border-amber-300 shadow-[0_0_50px_rgba(245,158,11,0.2)] hover:shadow-[0_0_60px_rgba(245,158,11,0.35)] transition-all duration-500 relative overflow-hidden group cursor-pointer"
          >
            {/* Ambient Background Flare */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/20 transition-all duration-500" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-amber-300" />
                    <span>{lang === 'vi' ? 'Thành Tích Mới Nhất • 2026' : 'Latest Honor • 2026'}</span>
                  </span>
                  <span className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
                    {achievements[0].category[lang]}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {achievements[0].title[lang]}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-amber-300/90 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  <span>{achievements[0].organization[lang]}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed font-light pt-1">
                  {achievements[0].details?.[lang]}
                </p>
              </div>

              {/* Award Trophy Badge Emblem */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-400/20 via-space-850 to-amber-500/20 border-2 border-amber-400/60 flex flex-col items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-500">
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 mt-1 uppercase">2026</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achv, idx) => {
            const Icon = getIcon(achv.icon);
            const isFeatured = achv.isNew;

            return (
              <div
                key={achv.id}
                onClick={() => handleCardClick(achv)}
                onMouseEnter={playHover}
                className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden border ${
                  isFeatured
                    ? 'bg-gradient-to-b from-space-900 via-space-850 to-space-950 border-amber-400/40 hover:border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:-translate-y-1'
                    : 'bg-space-900/60 border-space-800 hover:border-cyan/40 hover:bg-space-850/80 shadow-lg hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isFeatured
                          ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30'
                          : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 group-hover:border-yellow-500/50'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold text-amber-300/90 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      {achv.year}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1.5">
                    {achv.category[lang]}
                  </span>

                  <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2 group-hover:text-cyan transition-colors leading-snug">
                    {achv.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {achv.organization[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-space-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan transition-colors">
                  <span>HONOR 0{idx + 1}</span>
                  <span className="text-cyan text-xs group-hover:scale-125 transition-transform">
                    ★
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
