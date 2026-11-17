import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover } from '../utils/soundEffects';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const { experiences } = portfolioData;
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  const toggleExpand = (id: string) => {
    playClick();
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950/80">
      {/* Giant Background Typo */}
      <div className="absolute top-1/3 -right-16 text-[15vw] font-display font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        TRAJECTORY
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-space-800/80">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 text-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-6 sm:w-8 h-px bg-cyan" />
              <span>02 / {lang === 'vi' ? 'HÀNH TRÌNH CHUYÊN MÔN' : 'CAREER TRAJECTORY'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {lang === 'vi' ? 'Kinh Nghiệm Làm Việc' : 'Professional Experience'}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan via-sky-400 to-cyan/30 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] select-none">
              02
            </span>
          </div>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l-2 border-space-700 ml-2.5 sm:ml-6 md:ml-10 space-y-8 sm:space-y-10">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.isCurrent;

            return (
              <div key={exp.id} className="relative pl-5 sm:pl-8 md:pl-12 group">
                {/* Milestone Node on timeline */}
                <div
                  className={`absolute -left-[17px] top-6 w-8 h-8 rounded-full border-4 border-space-950 flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-cyan shadow-[0_0_20px_#00e5ff] scale-110'
                      : 'bg-space-800 border-space-700 group-hover:border-cyan group-hover:bg-cyan/30'
                  }`}
                >
                  {isCurrent ? (
                    <Sparkles className="w-3.5 h-3.5 text-space-950 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-cyan" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  onMouseEnter={playHover}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isCurrent
                      ? 'bg-gradient-to-r from-space-900 via-space-850 to-space-900 border-cyan/40 shadow-[0_0_30px_rgba(0,229,255,0.15)]'
                      : 'bg-space-900/70 border-space-800 hover:border-space-700 hover:bg-space-850/80 shadow-md'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-4 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan/20 border border-cyan/40 text-cyan text-[10px] font-mono uppercase tracking-wider font-semibold animate-pulse">
                            {lang === 'vi' ? 'Đang công tác' : 'Current Role'}
                          </span>
                        )}
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-space-800">
                          {exp.tag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan transition-colors">
                        {exp.role[lang]}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-cyan font-medium">
                        <Building2 className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.company[lang]}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-space-800/80 px-3.5 py-1.5 rounded-full border border-space-700">
                        <Calendar className="w-3.5 h-3.5 text-cyan" />
                        <span>{exp.time[lang]}</span>
                      </div>

                      <button
                        className="p-2 rounded-xl bg-space-800 text-slate-400 group-hover:text-cyan transition-colors"
                        aria-label="Expand details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Description Body */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-space-800/70 animate-fadeIn">
                      <ul className="space-y-3 text-sm text-slate-300 leading-relaxed font-light">
                        {exp.descriptions[lang].map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0 shadow-[0_0_6px_#00e5ff]" />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: desc,
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
