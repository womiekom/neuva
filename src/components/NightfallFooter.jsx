import React from 'react';
import { Instagram, ExternalLink, ArrowUp } from 'lucide-react';
import { studioMeta } from '../data/neuvaData';

export default function NightfallFooter({ onSelectPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", page: "neuva", sectionId: "home" },
    { label: "About Us", page: "neuva", sectionId: "about" },
    { label: "Achievement", page: "neuva", sectionId: "achievement" },
    { label: "Developers", page: "neuva", sectionId: "developers" },
    { label: "Projects", page: "projects", sectionId: "projects" },
  ];

  const handleLinkClick = (item, e) => {
    e.preventDefault();
    if (onSelectPage) {
      onSelectPage(item.page, item.sectionId);
    }
  };

  return (
    <footer className="relative z-20 bg-[#040207] pt-16 pb-12 overflow-hidden border-t border-white/10">
      {/* Parabolic / Squared-curve wide top black fade */}
      <div className="section-fade-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Studio Mission */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/neuva-logo.png"
                alt="NEUVA Logo"
                className="h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              />
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-md leading-relaxed font-light">
              Official website of NEUVA — an independent game development collective from <strong className="text-slate-200">SMAN 81 Jakarta</strong>.
              Creators of <strong className="text-white">NEMURI</strong>.
            </p>
            <p className="text-xs font-spinnenkop text-nocturne-lavender tracking-wider">
              “{studioMeta.tagline}”
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.sectionId}`}
                    onClick={(e) => handleLinkClick(item, e)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Assets & Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Social
            </div>
            <div className="space-y-2">
              <a
                href={studioMeta.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 hover:text-white hover:border-white/15 transition-all"
              >
                <Instagram size={13} className="text-nocturne-lavender" />
                <span>Instagram @helloneuva</span>
                <ExternalLink size={12} className="ml-auto text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 NEUVA Studio • SMAN 81 Jakarta. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-[11px] cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}
