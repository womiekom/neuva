import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronRight } from 'lucide-react';
import { studioMeta } from '../data/neuvaData';

export default function Navigation({ currentPage = 'neuva', onSelectPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (currentPage === 'neuva') {
        const sections = ['home', 'about', 'achievement', 'developers'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navItems = [
    { label: "Home", page: "neuva", sectionId: "home" },
    { label: "About Us", page: "neuva", sectionId: "about" },
    { label: "Achievement", page: "neuva", sectionId: "achievement" },
    { label: "Developers", page: "neuva", sectionId: "developers" },
    { label: "Projects", page: "projects", sectionId: "projects" },
  ];

  const handleNavClick = (item, e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (item.page === 'neuva') {
      setActiveSection(item.sectionId);
    }
    if (onSelectPage) {
      onSelectPage(item.page, item.sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/40 to-transparent py-5'
      }`}
    >
      {/* Top subtle ambient light bar */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-nocturne-glow/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Brandmark - Maximized Neuva Logo (No live pulsing dot or STUDIO text) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick({ page: 'neuva', sectionId: 'home' }, e)}
          className="flex items-center group py-0.5 cursor-pointer select-none"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-white/20 blur-lg rounded-full scale-125 pointer-events-none group-hover:bg-white/40 transition-all duration-500" />
            <img
              src="/assets/logo/neuva-logo.webp"
              alt="NEUVA Logo"
              className="h-11 sm:h-13 w-auto object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] drop-shadow-[0_0_4px_rgba(255,255,255,1)] group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </a>

        {/* Center Navigation - Clean architectural text links with animated bottom gradient line hover */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isProjects = item.page === 'projects';
            const isActive = isProjects
              ? currentPage === 'projects'
              : currentPage === 'neuva' && activeSection === item.sectionId;

            return (
              <a
                key={item.label}
                href={`#${item.sectionId}`}
                onClick={(e) => handleNavClick(item, e)}
                className={`relative px-4 py-2 text-xs font-mono tracking-wider transition-colors duration-300 group cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {/* Label text without purple dot */}
                <span className="relative z-10">
                  {item.label}
                </span>

                {/* Animated Bottom Gradient Line on Hover and when Active */}
                <div
                  className={`absolute bottom-0 inset-x-2 h-[2px] bg-gradient-to-r from-transparent via-nocturne-lavender to-transparent shadow-[0_0_10px_#c084fc] transition-all duration-300 origin-center ${
                    isActive
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={studioMeta.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-nocturne-lavender/40 text-xs font-mono text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(192,132,252,0.25)] group"
            title="Instagram @helloneuva"
          >
            <Instagram size={14} className="text-slate-400 group-hover:text-nocturne-lavender transition-colors" />
            <span>@helloneuva</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 cursor-pointer transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-obsidian-950/98 border-b border-white/10 px-6 py-6 space-y-2 backdrop-blur-2xl animate-fade-in shadow-2xl">
          {navItems.map((item) => {
            const isProjects = item.page === 'projects';
            const isActive = isProjects
              ? currentPage === 'projects'
              : currentPage === 'neuva' && activeSection === item.sectionId;

            return (
              <a
                key={item.label}
                href={`#${item.sectionId}`}
                onClick={(e) => handleNavClick(item, e)}
                className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-mono transition-colors cursor-pointer border-l-2 ${
                  isActive
                    ? 'border-nocturne-lavender text-white bg-white/5 font-semibold'
                    : 'border-transparent text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight size={14} className={isActive ? 'text-nocturne-lavender' : 'text-slate-600'} />
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={studioMeta.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 text-xs font-mono text-slate-300 bg-white/5 border border-white/10"
            >
              <span>@helloneuva</span>
              <Instagram size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
