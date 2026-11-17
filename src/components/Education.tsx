import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Clock,
  Building,
  Sparkles,
  Eye,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { Language, CertificationItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { playClick, playHover } from '../utils/soundEffects';
import { GoogleIcon } from './ui/Icons';
import { CertificateModal } from './ui/CertificateModal';

interface EducationProps {
  lang: Language;
}

export const Education: React.FC<EducationProps> = ({ lang }) => {
  const { education, certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const featuredGoogleCerts = certifications.filter((c) => c.isFeatured);
  const otherCerts = certifications.filter((c) => !c.isFeatured);

  const handleOpenCert = (cert: CertificationItem) => {
    playClick();
    setSelectedCert(cert);
  };

  const handleCloseCert = () => {
    playClick();
    setSelectedCert(null);
  };

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950">
      {/* Giant Background Typo */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-[14vw] font-display font-extrabold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        ACADEMIA
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-space-800/80">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 text-cyan font-mono text-xs tracking-widest uppercase mb-2">
              <span className="w-6 sm:w-8 h-px bg-cyan" />
              <span>06 / {lang === 'vi' ? 'HỌC VẤN & BẰNG CẤP' : 'ACADEMIC PROFILE'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {lang === 'vi' ? 'Học Vấn & Chứng Chỉ' : 'Education & Certifications'}
            </h2>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan via-sky-400 to-cyan/30 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] select-none">
              06
            </span>
          </div>
        </div>

        {/* 1. UNIVERSITY DEGREE CARD */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-space-900 via-space-900 to-space-850 border border-cyan/30 shadow-2xl relative overflow-hidden group">
          {/* Top Accent Flare */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/20 transition-all duration-500" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                      {lang === 'vi' ? 'Bậc Đại Học Chính Quy' : 'Undergraduate Degree Program'}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white">
                      {education.institution[lang]}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan/15 border border-cyan/40 text-xs font-mono text-cyan font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? '2022 - 2026 (Đã tốt nghiệp)' : '2022 - 2026 (Graduated)'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 my-2 border-y border-space-800">
                <div>
                  <span className="text-slate-400 font-mono text-xs block mb-1">
                    {lang === 'vi' ? 'Ngành:' : 'Major:'}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {education.major[lang]}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono text-xs block mb-1">
                    {lang === 'vi' ? 'Chuyên ngành:' : 'Specialization:'}
                  </span>
                  <span className="text-cyan font-semibold text-sm sm:text-base">
                    {education.specialization[lang]}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono text-xs block mb-1">
                    {lang === 'vi' ? 'Trạng thái tốt nghiệp:' : 'Status:'}
                  </span>
                  <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    {lang === 'vi' ? 'Đã tốt nghiệp' : 'Graduated'}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {education.statusNote[lang]}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3 pt-4 lg:pt-0 lg:border-l lg:border-space-800 lg:pl-8">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Building className="w-4 h-4 text-cyan" />
                <span>{lang === 'vi' ? 'Khoa Công Nghệ Thông Tin • HUFLIT' : 'Faculty of Information Technology • HUFLIT'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{lang === 'vi' ? 'Bằng Cử Nhân Công Nghệ Thông Tin' : 'Bachelor of Information Technology'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FEATURED GOOGLE CERTIFICATIONS SHOWCASE (COURSERA 07/2026) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan tracking-wider mb-1">
                <GoogleIcon className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Chứng Chỉ Chuyên Ngành Google' : 'Google Professional Credentials'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {lang === 'vi'
                  ? 'Chuyên Ngành & Chứng Chỉ Chuyên Môn Google'
                  : 'Google Specializations & Professional Certificates'}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
                {featuredGoogleCerts.length} Google Credentials
              </span>
              <span className="text-xs font-mono text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                07/2026
              </span>
            </div>
          </div>

          {/* 4 Cards Grid - Layout matching the user's Coursera/Google screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGoogleCerts.map((cert) => (
              <div
                key={cert.id}
                onMouseEnter={playHover}
                className="rounded-2xl bg-space-900 border border-cyan/30 hover:border-cyan shadow-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Certificate Preview Image */}
                  <div
                    onClick={() => handleOpenCert(cert)}
                    className="relative bg-white/95 p-3 cursor-pointer overflow-hidden border-b border-space-800 flex items-center justify-center min-h-[175px]"
                  >
                    {cert.image && (
                      <img
                        src={cert.image}
                        alt={cert.title[lang]}
                        className="w-full h-auto object-contain max-h-[155px] rounded transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-space-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-3 py-1.5 rounded-lg bg-cyan text-space-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        {lang === 'vi' ? 'Xem Chứng Chỉ' : 'Inspect'}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <h4
                      onClick={() => handleOpenCert(cert)}
                      className="font-display font-bold text-white text-base leading-snug group-hover:text-cyan transition-colors cursor-pointer"
                    >
                      {cert.title[lang]}
                    </h4>

                    {/* Action: Xem chứng chỉ */}
                    <div className="pt-1">
                      <button
                        onClick={() => handleOpenCert(cert)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:text-white transition-colors group/btn font-sans"
                      >
                        <FileCheck2 className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        <span className="underline underline-offset-4 decoration-cyan/40 group-hover/btn:decoration-white">
                          {lang === 'vi' ? 'Xem chứng chỉ' : 'View credential'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Footer (Google & Completion Date) */}
                <div className="p-5 pt-0 border-t border-space-800/80 mt-2">
                  <div className="pt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>Google</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.completedDate ? cert.completedDate[lang] : cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. COMPLEMENTARY GOOGLE ANALYTICS & TECHNICAL CERTIFICATIONS */}
        <div className="pt-6 border-t border-space-800/80">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan" />
              <span>
                {lang === 'vi'
                  ? 'Chứng Chỉ Google Analytics & Đào Tạo Bổ Trợ'
                  : 'Google Analytics & Complementary Certifications'}
              </span>
            </h3>
            <span className="text-xs font-mono text-cyan bg-cyan/10 px-2.5 py-1 rounded-md border border-cyan/20">
              {otherCerts.length} certifications
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCerts.map((cert) => (
              <div
                key={cert.id}
                onMouseEnter={playHover}
                className="p-5 rounded-2xl bg-space-900/80 border border-space-800 hover:border-cyan/40 hover:bg-space-850/90 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-space-800 border border-space-700 group-hover:border-cyan/40 flex-shrink-0 flex items-center justify-center">
                      {cert.isGoogle ? <GoogleIcon className="w-4 h-4" /> : <BookOpen className="w-4 h-4 text-cyan" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {cert.category[lang]}
                      </span>
                      <h4 className="font-display font-bold text-white text-sm group-hover:text-cyan transition-colors leading-snug mt-0.5">
                        {cert.title[lang]}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{cert.issuer}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-space-800/80 text-xs">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                      cert.isGoogle
                        ? 'bg-blue-500/15 border border-blue-400/40 text-blue-300'
                        : 'bg-cyan/10 border border-cyan/30 text-cyan'
                    }`}
                  >
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal cert={selectedCert} onClose={handleCloseCert} lang={lang} />
    </section>
  );
};
