import React, { useEffect } from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import { playClick } from '../../utils/soundEffects';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  organization: string;
  details?: string;
  lang: 'vi' | 'en';
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  organization,
  details,
  lang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-space-900 border border-cyan/40 rounded-2xl p-4 sm:p-6 shadow-[0_0_50px_rgba(0,229,255,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-accent/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-space-700 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-cyan">
                {lang === 'vi' ? 'Minh chứng & Giấy mời chính thức' : 'Official Citation & Invitation'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-snug">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">{organization}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-space-800 hover:bg-space-700 text-slate-400 hover:text-white transition-colors border border-space-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="my-4 relative z-10 max-h-[68vh] overflow-y-auto rounded-xl border border-space-700/60 bg-black/60 flex items-center justify-center p-2">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[62vh] w-auto object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Details & Footer */}
        {details && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-space-850/80 p-3 rounded-lg border border-space-700/80 relative z-10 mb-3">
            {details}
          </p>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-space-800 text-xs text-slate-400 relative z-10">
          <span className="font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {lang === 'vi' ? 'Tài liệu xác thực' : 'Verified Document'}
          </span>
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan hover:underline font-mono text-xs"
          >
            {lang === 'vi' ? 'Mở kích thước gốc' : 'Open Full Image'} <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
