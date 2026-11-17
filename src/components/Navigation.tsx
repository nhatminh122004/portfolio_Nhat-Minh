import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { playClick, playHover } from '../utils/soundEffects';
import { backgroundMusic } from '../utils/backgroundMusic';

interface NavigationProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  lang,
  onLanguageChange,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState<boolean>(() => backgroundMusic.getIsPlaying());
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => backgroundMusic.subscribe(setSoundOn), []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: { vi: 'Tầm nhìn', en: 'Vision' } },
    { id: 'experience', label: { vi: 'Hành trình', en: 'Journey' } },
    { id: 'expertise', label: { vi: 'Năng lực', en: 'Capabilities' } },
    { id: 'focus', label: { vi: 'Đóng góp', en: 'Impact' } },
    { id: 'achievements', label: { vi: 'Dấu ấn', en: 'Recognition' }, isSpecial: true },
    { id: 'education', label: { vi: 'Nền tảng', en: 'Foundation' } },
    { id: 'contact', label: { vi: 'Kết nối', en: 'Connect' }, isCta: true },
  ];

  const handleNavClick = (id: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    void backgroundMusic.toggle();
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan via-sky-400 to-violet-accent transition-all duration-150 ease-out shadow-[0_0_8px_#00e5ff]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-950/85 backdrop-blur-xl border-b border-cyan/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              onMouseEnter={playHover}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-1 bg-space-900 border border-cyan/40 group-hover:border-cyan transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:shadow-[0_0_22px_rgba(0,229,255,0.5)]">
                <img
                  src="./logo-tachne.png"
                  alt="Neural Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5">
                  N.N.<span className="text-cyan text-glow">MINH</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block">
                  AI & Tech Specialist
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                if (item.isCta) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      onMouseEnter={playHover}
                      className="ml-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-space-950 bg-gradient-to-r from-cyan to-sky-400 hover:from-sky-300 hover:to-cyan shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {item.label[lang]}
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    onMouseEnter={playHover}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'text-cyan bg-cyan/10 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-space-800/60'
                    }`}
                  >
                    {item.isSpecial && (
                      <Sparkles className="w-3 h-3 inline mr-1 text-amber-400 animate-pulse" />
                    )}
                    {item.label[lang]}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan rounded-full shadow-[0_0_6px_#00e5ff]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CONTROLS (SOUND + LANG + MOBILE TOGGLE) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Background Music Toggle */}
              <button
                data-music-toggle="true"
                onClick={handleSoundToggle}
                onMouseEnter={playHover}
                title={lang === 'vi' ? 'Bật / Tắt nhạc nền' : 'Toggle background music'}
                className={`p-2 rounded-lg border transition-all duration-200 text-xs flex items-center justify-center ${
                  soundOn
                    ? 'border-cyan/60 bg-cyan/15 text-cyan shadow-[0_0_12px_rgba(0,229,255,0.3)]'
                    : 'border-space-700 bg-space-900/80 text-slate-400 hover:text-white hover:border-slate-500'
                }`}
                aria-label={
                  lang === 'vi'
                    ? soundOn
                      ? 'Tắt nhạc nền Vastness'
                      : 'Bật nhạc nền Vastness'
                    : soundOn
                    ? 'Pause Vastness background music'
                    : 'Play Vastness background music'
                }
                aria-pressed={soundOn}
              >
                {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Bilingual Language Switcher */}
              <button
                onClick={() => {
                  playClick();
                  onLanguageChange(lang === 'vi' ? 'en' : 'vi');
                }}
                onMouseEnter={playHover}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan/40 bg-space-900/80 hover:bg-cyan/10 text-xs font-mono text-cyan transition-all shadow-[0_0_10px_rgba(0,229,255,0.15)] group"
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-bold tracking-wider">{lang === 'vi' ? 'VI' : 'EN'}</span>
                <span className="text-[10px] text-slate-400">/ {lang === 'vi' ? 'EN' : 'VI'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="lg:hidden p-2 rounded-lg border border-space-700 bg-space-900 text-slate-300 hover:text-white"
                aria-label="Open Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-space-950/95 backdrop-blur-2xl border-b border-cyan/20 px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-mono uppercase tracking-wider flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-cyan/15 text-cyan border border-cyan/30'
                    : 'text-slate-300 hover:bg-space-850 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.isSpecial && <Sparkles className="w-4 h-4 text-amber-400" />}
                  {item.label[lang]}
                </span>
                <span className="text-xs text-slate-500 font-mono">0{navItems.indexOf(item) + 1}</span>
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
