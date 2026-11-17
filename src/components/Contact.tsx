import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover, playSuccess } from '../utils/soundEffects';
import { LinkedInIcon, FacebookIcon } from './ui/Icons';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    playClick();
    navigator.clipboard.writeText(text);
    playSuccess();
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950 border-t border-cyan/20">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-violet-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cinematic Closing Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900 border border-cyan/30 text-xs font-mono text-cyan">
            <Sparkles className="w-3.5 h-3.5 text-cyan animate-pulse" />
            <span>07 / {lang === 'vi' ? 'SẴN SÀNG KẾT NỐI' : 'INITIATE CONTACT'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight !leading-[1.3]">
            <span className="block py-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan to-sky-300">
              {lang === 'vi' ? 'CÙNG KIẾN TẠO TƯƠNG LAI.' : "LET'S BUILD WHAT'S NEXT."}
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {lang === 'vi'
              ? 'Tôi luôn chào đón cơ hội trao đổi về các dự án AI ứng dụng, chuyển đổi số quy trình và hợp tác công nghệ thực tiễn.'
              : 'Always open to discussing applied AI innovations, operational digitalization, and high-impact technology initiatives.'}
          </p>

          {/* Primary High-Impact Email Button */}
          <div className="pt-4 flex justify-center">
            <a
              href={`mailto:${personal.contact.email}`}
              onMouseEnter={playHover}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-12 py-3.5 sm:py-5 rounded-full bg-gradient-to-r from-cyan via-sky-400 to-cyan hover:from-sky-300 hover:to-cyan text-space-950 font-mono text-xs sm:text-base font-bold uppercase tracking-wider shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:shadow-[0_0_60px_rgba(0,229,255,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <Send className="w-5 h-5" />
              <span>{lang === 'vi' ? 'Gửi Email Trực Tiếp Cho Tôi' : 'Send Direct Message'}</span>
            </a>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Card 1: Email */}
          <div
            onMouseEnter={playHover}
            className="p-6 sm:p-8 rounded-2xl bg-space-900/80 border border-space-800 hover:border-cyan/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-space-800 text-cyan border border-space-700 group-hover:border-cyan/40">
                <Mail className="w-6 h-6" />
              </div>
              <button
                onClick={() => copyToClipboard(personal.contact.email, 'email')}
                className="p-2 rounded-lg bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                EMAIL DISPATCH
              </span>
              <a
                href={`mailto:${personal.contact.email}`}
                className="text-base sm:text-lg font-bold text-white group-hover:text-cyan transition-colors break-all"
              >
                {personal.contact.email}
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div
            onMouseEnter={playHover}
            className="p-6 sm:p-8 rounded-2xl bg-space-900/80 border border-space-800 hover:border-cyan/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-space-800 text-cyan border border-space-700 group-hover:border-cyan/40">
                <Phone className="w-6 h-6" />
              </div>
              <button
                onClick={() => copyToClipboard(personal.contact.phone, 'phone')}
                className="p-2 rounded-lg bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                TELEPHONE LINE
              </span>
              <a
                href={`tel:${personal.contact.phone}`}
                className="text-base sm:text-lg font-bold text-white group-hover:text-cyan transition-colors font-mono"
              >
                {personal.contact.phone}
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div
            onMouseEnter={playHover}
            className="p-6 sm:p-8 rounded-2xl bg-space-900/80 border border-space-800 hover:border-cyan/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-space-800 text-cyan border border-space-700 group-hover:border-cyan/40">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                BASE LOCATION
              </span>
              <p className="text-base sm:text-lg font-bold text-white group-hover:text-cyan transition-colors">
                {personal.contact.location[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Social Connect Strip */}
        <div className="pt-8 pb-12 border-t border-space-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="./logo-tachne.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-display font-bold text-white text-base">
              {lang === 'vi' ? personal.name : personal.englishName}
            </span>
            <span className="text-xs font-mono text-slate-500">| Portfolio 2026</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-space-900 border border-space-800 text-xs font-mono text-slate-300 hover:text-cyan hover:border-cyan/40 transition-all shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-space-900 border border-space-800 text-xs font-mono text-slate-300 hover:text-cyan hover:border-cyan/40 transition-all shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-[#1877f2]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Footer Sub-Note */}
        <div className="text-center text-xs font-mono text-slate-500 border-t border-space-900 pt-6">
          <p>© 2026 {lang === 'vi' ? personal.name : personal.englishName}. Engineered with React, TypeScript & Three.js 3D Neural Core.</p>
        </div>
      </div>
    </footer>
  );
};
