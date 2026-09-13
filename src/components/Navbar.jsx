import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Instagram, Sparkles } from 'lucide-react';
import { studioInfo } from '../data/neuvaData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "The Game", href: "#nemuri" },
    { label: "The Energeons", href: "#energeons" },
    { label: "Brain Chapters", href: "#chapters" },
    { label: "Systems & Tech", href: "#systems" },
    { label: "Neuva Team", href: "#team" }
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-nocturne-950/85 backdrop-blur-md border-b border-purple-500/15 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Studio Identity */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-dream-magenta via-purple-600 to-indigo-800 shadow-lg shadow-purple-900/30">
            <img
              src="/assets/logo/neuva-logo.webp"
              alt="NEUVA Logo"
              className="w-full h-full object-contain rounded-lg bg-nocturne-950 p-1 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold tracking-wider text-xl text-white group-hover:text-dream-magenta transition-colors">
                NEUVA
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-900/60 border border-purple-500/30 text-purple-300 font-mono">
                INDIE
              </span>
            </div>
            <span className="text-[11px] text-purple-300/70 font-sans tracking-wide">
              SMAN 81 Jakarta
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-purple-200/80 hover:text-white hover:bg-purple-900/30 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bit.ly/NeuvaDesigns"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-dream-magenta hover:text-white hover:bg-dream-magenta/20 rounded-lg transition-all border border-dream-magenta/30 ml-2"
          >
            <span>Drive Assets</span>
            <ExternalLink size={12} />
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={studioInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-300 hover:text-white hover:border-dream-magenta/50 transition-all shadow-sm"
            title="Follow @helloneuva"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#nemuri"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-dream-magenta to-dream-violet text-white text-xs font-semibold tracking-wide shadow-lg shadow-dream-magenta/25 hover:shadow-dream-magenta/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles size={14} />
            <span>DISCOVER NEMURI</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-nocturne-950/98 border-b border-purple-500/20 px-5 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="text-xs font-mono text-purple-400 px-3 py-1">NAVIGATION</div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm text-purple-100 hover:bg-purple-900/40 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-purple-900/50 flex flex-col gap-2">
            <a
              href="https://bit.ly/NeuvaDesigns"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs font-mono text-dream-magenta bg-purple-950/50 rounded-lg border border-dream-magenta/30"
            >
              <span>View Google Drive Repository</span>
              <ExternalLink size={14} />
            </a>
            <a
              href={studioInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs text-purple-300 bg-purple-950/40 rounded-lg border border-purple-500/20"
            >
              <span>Follow {studioInfo.instagram}</span>
              <Instagram size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
