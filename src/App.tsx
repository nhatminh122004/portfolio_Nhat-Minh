import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CustomCursor } from './components/ui/CustomCursor';
import { NeuralCoreCanvas } from './components/3d/NeuralCoreCanvas';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ExpertiseNetwork } from './components/ExpertiseNetwork';
import { SelectedWork } from './components/SelectedWork';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { backgroundMusic } from './utils/backgroundMusic';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('preferredLang');
    return saved === 'en' ? 'en' : 'vi';
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    void backgroundMusic.initAutoplay();
    return () => {
      backgroundMusic.destroy();
    };
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('preferredLang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'expertise', 'focus', 'achievements', 'education', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 font-sans selection:bg-cyan selection:text-space-950 overflow-x-hidden">
      {/* Precision Trailing Custom Cursor */}
      <CustomCursor />

      {/* Global Real Three.js 3D Neural Core Canvas Background (Refined soft contrast) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-75">
        <NeuralCoreCanvas />
        {/* Subtle Cyber Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Vignette Gradients */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-90" />
      </div>

      {/* Navigation Header */}
      <Navigation
        lang={lang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          lang={lang}
          onExploreClick={() => scrollToSection('about')}
          onContactClick={() => scrollToSection('contact')}
        />
        <About lang={lang} />
        <ExperienceTimeline lang={lang} />
        <ExpertiseNetwork lang={lang} />
        <SelectedWork lang={lang} />
        <Achievements lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
};
export default App;
