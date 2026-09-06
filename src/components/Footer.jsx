import React from 'react';
import { Sparkles, Instagram, ExternalLink, ArrowUp } from 'lucide-react';
import { studioInfo } from '../data/neuvaData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-nocturne-950 border-t border-purple-500/15 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-dream-magenta to-indigo-800">
                <img
                  src="/assets/logo/neuva-logo.png"
                  alt="NEUVA Logo"
                  className="w-full h-full object-contain rounded-lg bg-nocturne-950 p-1"
                />
              </div>
              <span className="font-display font-bold tracking-wider text-xl text-white">
                NEUVA
              </span>
            </div>
            <p className="text-xs text-purple-200/70 font-sans max-w-sm leading-relaxed">
              Independent game development team from <strong className="text-purple-100">SMAN 81 Jakarta</strong>.
              Creators of <strong className="text-white">NEMURI</strong> — a 3D low-poly psychological adventure 
              exploring insomnia, internal psyche, and emotional healing.
            </p>
            <p className="text-xs font-mono text-dream-lavender italic">
              “Wander Through The Mind That Cannot Rest”
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="text-purple-300 hover:text-white transition-colors">
                  Overview & Kael Transit
                </a>
              </li>
              <li>
                <a href="#nemuri" className="text-purple-300 hover:text-white transition-colors">
                  The Flagship Game
                </a>
              </li>
              <li>
                <a href="#energeons" className="text-purple-300 hover:text-white transition-colors">
                  The 4 Energeons
                </a>
              </li>
              <li>
                <a href="#chapters" className="text-purple-300 hover:text-white transition-colors">
                  Brain-Inspired Chapters
                </a>
              </li>
              <li>
                <a href="#systems" className="text-purple-300 hover:text-white transition-colors">
                  Systems & Controls
                </a>
              </li>
              <li>
                <a href="#team" className="text-purple-300 hover:text-white transition-colors">
                  Meet Team Neuva
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Assets Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
              Community & Assets
            </div>
            <div className="space-y-2.5">
              <a
                href={studioInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-purple-200 hover:text-white transition-colors p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/15 hover:border-purple-500/30"
              >
                <Instagram size={14} className="text-dream-magenta" />
                <span>Instagram: {studioInfo.instagram}</span>
                <ExternalLink size={11} className="ml-auto text-purple-400" />
              </a>

              <a
                href={studioInfo.designRepoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-purple-200 hover:text-white transition-colors p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/15 hover:border-purple-500/30"
              >
                <Sparkles size={14} className="text-dream-lavender" />
                <span>Official Drive: {studioInfo.designRepo}</span>
                <ExternalLink size={11} className="ml-auto text-purple-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-purple-400/70">
          <div>
            © 2026 NEUVA Studio • SMAN 81 Jakarta. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/70 border border-purple-500/20 text-purple-200 hover:text-white hover:bg-purple-900 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
