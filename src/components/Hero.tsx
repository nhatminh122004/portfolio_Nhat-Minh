import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone, Sparkles, Terminal, ChevronRight, Award, GraduationCap, Cpu, Layers } from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover } from '../utils/soundEffects';
import { LinkedInIcon, FacebookIcon } from './ui/Icons';

interface HeroProps {
  lang: Language;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreClick, onContactClick }) => {
  const { personal } = portfolioData;
  const roles = personal.roles[lang];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 30 : 70;
      timer = setTimeout(() => {
        const nextChar = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }, delta);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const quickMetrics = [
    {
      icon: Cpu,
      label: { vi: 'Chuyên Viên Kỹ Thuật', en: 'Technical Specialist' },
      sub: { vi: 'ISIEE', en: 'ISIEE' },
    },
    {
      icon: GraduationCap,
      label: { vi: 'Cử Nhân Công nghệ Thông Tin', en: 'Bachelor of Information Technology' },
      sub: {
        vi: 'Trường Đại học Ngoại Ngữ - Tin học TPHCM (HUFLIT)',
        en: 'HUFLIT University',
      },
    },
    {
      icon: Award,
      label: { vi: '7 Thành Tích & Khen Thưởng', en: '7 Honors & Awards' },
      sub: { vi: '2024 - 2026', en: '2024 - 2026' },
    },
    {
      icon: Layers,
      label: { vi: 'AI & Prompt Engineering', en: 'Applied AI & Web3' },
      sub: { vi: 'Enterprise Focus', en: 'Enterprise Focus' },
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Background Cyber Gradients (Soft subtle mist) */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-cyan/[0.04] rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-violet-accent/[0.05] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: HERO TYPOGRAPHY & CTAS */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Status & 3D Core Active Badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/90 border border-cyan/40 text-xs font-mono text-cyan backdrop-blur-xl shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00e5ff] animate-ping" />
              <span className="font-semibold tracking-wide">{personal.status[lang]}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-900/80 border border-violet-500/30 text-[11px] font-mono text-violet-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>3D Quantum Neural Core</span>
            </div>
          </div>

          {/* Tagline Small Header */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
            <Terminal className="w-4 h-4 text-cyan" />
            <span className="text-cyan font-bold">~/portfolio $</span>
            <span>{personal.taglines[lang]}</span>
          </div>

          {/* Main Massive Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-display text-white !leading-[1.2] break-words">
            <span className="block py-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 drop-shadow-lg">
              {lang === 'vi' ? personal.name : personal.englishName}
            </span>
          </h1>

          {/* Dynamic Role Ticker with Cyber Box Container */}
          <div className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-space-900/80 border border-cyan/30 backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.15)] max-w-full">
            <span className="py-0.5 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan via-sky-300 to-violet-accent truncate">
              {displayText}
              <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-7 ml-1 bg-cyan animate-pulse align-middle" />
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
            {personal.heroDesc[lang]}
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
            <button
              onClick={() => {
                playClick();
                onExploreClick();
              }}
              onMouseEnter={playHover}
              className="w-full sm:w-auto relative group overflow-hidden px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-space-950 bg-gradient-to-r from-cyan via-sky-400 to-cyan shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_45px_rgba(0,229,255,0.8)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">{lang === 'vi' ? 'Khám Phá Hành Trình' : 'Explore My Journey'}</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              {/* Button Shimmer Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform ease-out pointer-events-none" />
            </button>

            <button
              onClick={() => {
                playClick();
                onContactClick();
              }}
              onMouseEnter={playHover}
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-white bg-space-900/90 border border-cyan/40 hover:border-cyan hover:bg-space-850 shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan" />
              <span>{lang === 'vi' ? 'Hợp Tác Cùng Tôi' : 'Get In Touch'}</span>
            </button>
          </div>

          {/* Social Quick Connect Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-3.5 pt-4 text-slate-400">
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="p-3 rounded-xl bg-space-900/90 border border-space-700/80 hover:border-cyan hover:text-cyan hover:scale-110 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="p-3 rounded-xl bg-space-900/90 border border-space-700/80 hover:border-cyan hover:text-cyan hover:scale-110 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              aria-label="Facebook Profile"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.contact.email}`}
              onMouseEnter={playHover}
              className="p-3 rounded-xl bg-space-900/90 border border-space-700/80 hover:border-cyan hover:text-cyan hover:scale-110 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personal.contact.phone}`}
              onMouseEnter={playHover}
              className="p-3 rounded-xl bg-space-900/90 border border-space-700/80 hover:border-cyan hover:text-cyan hover:scale-110 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: REFINED PROFILE AVATAR WITH HOLOGRAPHIC FRAME & GLOW */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end my-4 lg:my-0">
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 group">
            {/* Outer Holographic Glow Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan via-sky-500 to-violet-accent opacity-35 filter blur-2xl sm:blur-3xl group-hover:opacity-70 transition-opacity duration-700 animate-pulse-slow" />

            {/* Orbiting Ring Indicator with ticks */}
            <div className="absolute -inset-2 sm:-inset-4 rounded-full border border-dashed border-cyan/40 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-4 sm:-inset-7 rounded-full border border-space-700/40 pointer-events-none" />

            {/* Main Cybernetic Frame */}
            <div className="relative w-full h-full rounded-full p-2 sm:p-3 bg-gradient-to-b from-cyan/50 via-space-850 to-violet-accent/50 border-2 border-cyan/60 shadow-[0_0_35px_rgba(0,229,255,0.35)] group-hover:shadow-[0_0_70px_rgba(0,229,255,0.6)] transition-all duration-500 overflow-hidden">
              <img
                src="./1766512773841.jpg"
                alt="Nguyễn Nhất Minh"
                className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://ui-avatars.com/api/?name=Nguyen+Nhat+Minh&size=512&background=0A1024&color=00E5FF';
                }}
              />

              {/* Holographic Scanline Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-cyan/5 to-transparent pointer-events-none" />
            </div>

            {/* Floating Status Pill */}
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-space-950/95 border-2 border-cyan/50 text-[10px] sm:text-xs font-mono text-cyan backdrop-blur-xl shadow-2xl flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan animate-spin-slow" />
              <span className="font-bold">ISIEE • HUFLIT ALUMNI</span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK HIGHLIGHT METRIC STRIP (High-tech studio look) */}
      <div className="max-w-7xl mx-auto w-full mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-space-800/80 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {quickMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-space-900/60 border border-space-800/80 hover:border-cyan/40 hover:bg-space-850/80 transition-all duration-300 flex items-start gap-3.5 group shadow-md"
            >
              <div className="p-2.5 rounded-xl bg-cyan/10 border border-cyan/20 text-cyan group-hover:scale-110 group-hover:bg-cyan group-hover:text-space-950 transition-all duration-300 flex-shrink-0 mt-0.5">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan transition-colors leading-snug">
                  {item.label[lang]}
                </p>
                <p className="text-[11px] font-mono text-slate-400 leading-snug mt-1 break-words">
                  {item.sub[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="mt-12 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-75 hover:opacity-100 transition-opacity">
        <button
          onClick={() => {
            playClick();
            onExploreClick();
          }}
          className="flex flex-col items-center gap-2 group"
          aria-label="Scroll Down"
        >
          <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-cyan uppercase">
            SCROLL DOWN
          </span>
          <div className="w-5 h-8 rounded-full border border-cyan/40 flex items-start justify-center p-1 group-hover:border-cyan transition-colors">
            <div className="w-1 h-2 rounded-full bg-cyan animate-bounce" />
          </div>
          <ArrowDown className="w-3 h-3 text-cyan animate-pulse" />
        </button>
      </div>
    </section>
  );
};
