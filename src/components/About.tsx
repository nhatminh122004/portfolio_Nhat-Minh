import React from 'react';
import { Cpu, Server, Blocks, RefreshCw, Quote, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playHover } from '../utils/soundEffects';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Cpu,
      title: { vi: 'Trí Tuệ Nhân Tạo Ứng Dụng', en: 'Applied AI Solutions' },
      desc: {
        vi: 'Khai thác Generative AI, Prompt Engineering và tự động hóa quy trình để tối ưu năng suất thực tế.',
        en: 'Harnessing Generative AI, advanced Prompt Engineering, and automated pipelines for practical enterprise gains.',
      },
      tag: 'Core Focus',
      color: 'from-cyan to-blue-500',
    },
    {
      icon: Server,
      title: { vi: 'Vận Hành & Hạ Tầng IT', en: 'IT Infrastructure & Ops' },
      desc: {
        vi: 'Duy trì sự ổn định, an toàn và tối ưu kỹ thuật cho các hệ thống công nghệ giáo dục và tổ chức.',
        en: 'Ensuring uptime, system integrity, and technical optimization for institutional educational frameworks.',
      },
      tag: 'Operations',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: RefreshCw,
      title: { vi: 'Chuyển Đổi Số Toàn Diện', en: 'Digital Transformation' },
      desc: {
        vi: 'Phân tích quy trình truyền thống và triển khai các giải pháp phần mềm hiện đại, tinh gọn hóa thao tác.',
        en: 'Analyzing legacy workflows to deploy streamlined, agile software solutions that eliminate operational friction.',
      },
      tag: 'Digitization',
      color: 'from-sky-400 to-cyan',
    },
    {
      icon: Blocks,
      title: { vi: 'Nghiên Cứu Công Nghệ Blockchain', en: 'Blockchain & Web3 Research' },
      desc: {
        vi: 'Khảo sát hạ tầng DeFi, Layer 1/2 và Zero-Knowledge Proofs với tư duy phân tích dữ liệu on-chain.',
        en: 'Investigating DeFi protocols, Layer 1/2 throughput, and ZKP scaling with structured on-chain telemetry.',
      },
      tag: 'Research',
      color: 'from-violet-accent to-purple-400',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950/60 border-t border-space-800/80">
      {/* Giant Ambient Watermark Background */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 text-[14vw] font-display font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-space-800/80">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 text-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-6 sm:w-8 h-px bg-cyan" />
              <span>01 / {lang === 'vi' ? 'MỤC TIÊU & TẦM NHÌN' : 'PHILOSOPHY & VISION'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {lang === 'vi' ? 'Mục Tiêu Nghề Nghiệp' : 'Professional Objective'}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan via-sky-400 to-cyan/30 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] select-none">
              01
            </span>
          </div>
        </div>

        {/* Asymmetric Grid: Left Quote, Right 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT: Philosophy Manifest Quote Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-b from-space-900/90 to-space-950/90 border border-cyan/25 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/20 transition-all duration-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-cyan/50" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-cyan px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20">
                  {lang === 'vi' ? 'Kim Chỉ Nam' : 'Core Statement'}
                </span>
              </div>

              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed font-light text-left sm:text-justify">
                {personal.aboutQuote[lang]}
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-space-800 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-white text-base">
                  {lang === 'vi' ? personal.name : personal.englishName}
                </p>
                <p className="text-xs font-mono text-cyan">Technical Specialist • ISIEE</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-space-800 border border-cyan/30 flex items-center justify-center text-cyan shadow-sm">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Tech Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={playHover}
                  className="p-6 rounded-2xl bg-space-900/60 border border-space-800 hover:border-cyan/40 hover:bg-space-850/80 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-lg"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-space-800 border border-cyan/20 group-hover:border-cyan/50 flex items-center justify-center text-cyan transition-colors duration-300">
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-cyan transition-colors">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan transition-colors">
                      {pillar.title[lang]}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-space-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan transition-colors">
                    <span>PILLAR 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/40 group-hover:bg-cyan group-hover:shadow-[0_0_6px_#00e5ff] transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
