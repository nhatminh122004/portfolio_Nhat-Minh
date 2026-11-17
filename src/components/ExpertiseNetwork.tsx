import React, { useState } from 'react';
import { Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover } from '../utils/soundEffects';
import { localize } from '../utils/i18n';

interface ExpertiseNetworkProps {
  lang: Language;
}

export const ExpertiseNetwork: React.FC<ExpertiseNetworkProps> = ({ lang }) => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { vi: 'Tất Cả Kỹ Năng', en: 'All Disciplines' } },
    ...skillCategories.map((c) => ({ id: c.id, label: c.title })),
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="expertise" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950/60 border-t border-space-800/80">
      {/* Giant Background Typo */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 text-[14vw] font-display font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        CAPABILITIES
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-space-800/80">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 text-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-6 sm:w-8 h-px bg-cyan" />
              <span>03 / {lang === 'vi' ? 'HỆ THỐNG NĂNG LỰC' : 'COMPETENCY MATRIX'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {lang === 'vi' ? 'Kỹ Năng & Công Nghệ' : 'Expertise & Capabilities'}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan via-sky-400 to-cyan/30 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] select-none">
              03
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={playHover}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-cyan text-space-950 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105'
                    : 'bg-space-900/80 border border-space-800 text-slate-400 hover:text-white hover:border-space-700'
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 sm:p-7 md:p-8 rounded-2xl bg-space-900/80 border border-space-800 hover:border-cyan/30 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-space-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {cat.title[lang]}
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan bg-cyan/10 px-2.5 py-1 rounded-md border border-cyan/20">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Skills List as high-tech interactive chips */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    onMouseEnter={playHover}
                    className="p-3.5 rounded-xl bg-space-850/60 border border-space-800/80 hover:border-cyan/40 hover:bg-space-800 transition-all duration-200 flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan/70 group-hover/item:text-cyan transition-colors" />
                      <span className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors">
                        {localize(skill.name, lang)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {skill.highlight && (
                        <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                          <Sparkles className="w-2.5 h-2.5" />
                          Key
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-slate-400 group-hover/item:text-cyan transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
