import { Download } from 'lucide-react';

export const DownloadResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1dlo1a0j7Ctm0IdrexWFJdihU8mrNYdel"
      download
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors"
      style={{ textDecoration: 'none' }}
    >
      <Download size={18} className="shrink-0" />
      <span>Resume</span>
    </a>
  );
};
