import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { Language, CertificationItem } from '../../types';
import { GoogleIcon } from './Icons';
import { playClick } from '../../utils/soundEffects';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
  lang: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (cert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-space-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-space-900 border border-cyan/40 shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-space-800 bg-space-950/70 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/30 flex items-center justify-center">
              {cert.isGoogle ? <GoogleIcon className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4 text-cyan" />}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'vi' ? 'Chứng Chỉ Đã Xác Thực' : 'Verified Credential'}
              </span>
              <p className="text-xs text-slate-400 font-mono">ID: {cert.id}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-xl bg-space-800 border border-space-700 text-slate-400 hover:text-white hover:border-cyan/40 hover:bg-space-750 transition-all flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Certificate Image Frame */}
          {cert.image && (
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-space-700/80 bg-white/95 p-3 sm:p-5 flex items-center justify-center shadow-inner group">
              <img
                src={cert.image}
                alt={cert.title[lang]}
                className="max-h-60 sm:max-h-72 w-auto object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-space-950/80 text-[10px] font-mono text-cyan backdrop-blur-sm">
                Google Certified
              </div>
            </div>
          )}

          {/* Certificate Title & Status */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/15 border border-blue-400/40 text-blue-300 flex items-center gap-1.5">
                {cert.isGoogle && <GoogleIcon className="w-3.5 h-3.5" />}
                {lang === 'vi' ? cert.badge : cert.badgeEn || cert.badge}
              </span>
              {cert.isNew && (
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {lang === 'vi' ? 'Mới 2026' : 'New 2026'}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white leading-tight">
              {cert.title[lang]}
            </h3>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-space-950/60 border border-space-800">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase">
                {lang === 'vi' ? 'Học Viên' : 'Recipient'}
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                {lang === 'vi' ? 'Nguyễn Nhất Minh' : 'Nguyen Nhat Minh'}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase">
                {lang === 'vi' ? 'Tổ Chức Cấp' : 'Issuer'}
              </span>
              <p className="text-sm font-semibold text-cyan mt-0.5 flex items-center gap-1.5">
                {cert.isGoogle && <GoogleIcon className="w-3.5 h-3.5 inline" />}
                {cert.issuer}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {lang === 'vi' ? 'Thời Gian Hoàn Thành' : 'Completed'}
              </span>
              <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                {cert.completedDate ? cert.completedDate[lang] : cert.year}
              </p>
            </div>
          </div>

          {/* Description */}
          {cert.description && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                {lang === 'vi' ? 'Nội Dung & Giá Trị Đào Tạo' : 'Curriculum & Competency Overview'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-space-950/40 p-4 rounded-xl border border-space-800/80">
                {cert.description[lang]}
              </p>
            </div>
          )}

          {/* Verified Skills */}
          {cert.skills && cert.skills.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                {lang === 'vi' ? 'Kỹ Năng & Năng Lực Đã Xác Thực' : 'Verified Skills & Capabilities'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-space-800 bg-space-950/70 flex items-center justify-end gap-3 flex-shrink-0">
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-space-800 border border-space-700 hover:border-cyan/50 text-white hover:text-cyan transition-all text-xs font-semibold shadow-md"
          >
            {lang === 'vi' ? 'Đóng cửa sổ' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
