import React from 'react';
import { studioPillars } from '../data/neuvaData';

// Custom Hand-Crafted Unique SVGs (No library icons)
const CustomNeuralSynapse = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
    <circle cx="24" cy="24" r="5" fill="#f472b6" fillOpacity="0.9" />
    <circle cx="10" cy="14" r="3" fill="#f472b6" fillOpacity="0.7" />
    <circle cx="38" cy="14" r="3" fill="#f472b6" fillOpacity="0.7" />
    <circle cx="12" cy="36" r="3" fill="#f472b6" fillOpacity="0.7" />
    <circle cx="36" cy="36" r="3" fill="#f472b6" fillOpacity="0.7" />
    <circle cx="24" cy="8" r="2" fill="#f472b6" fillOpacity="0.5" />
    <circle cx="24" cy="40" r="2" fill="#f472b6" fillOpacity="0.5" />
    <line x1="24" y1="24" x2="10" y2="14" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 2" />
    <line x1="24" y1="24" x2="38" y2="14" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 2" />
    <line x1="24" y1="24" x2="12" y2="36" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 2" />
    <line x1="24" y1="24" x2="36" y2="36" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 2" />
    <line x1="10" y1="14" x2="24" y2="8" stroke="#f472b6" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="38" y1="14" x2="24" y2="8" stroke="#f472b6" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="12" y1="36" x2="24" y2="40" stroke="#f472b6" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="36" y1="36" x2="24" y2="40" stroke="#f472b6" strokeWidth="1" strokeOpacity="0.5" />
  </svg>
);

const CustomLowPolyPrism = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
    <polygon points="24,6 38,18 24,28 10,18" fill="#38bdf8" fillOpacity="0.8" stroke="#7dd3fc" strokeWidth="1" />
    <polygon points="10,18 24,28 24,42 10,32" fill="#0284c7" fillOpacity="0.9" stroke="#7dd3fc" strokeWidth="1" />
    <polygon points="38,18 24,28 24,42 38,32" fill="#0369a1" fillOpacity="0.85" stroke="#7dd3fc" strokeWidth="1" />
    <polygon points="24,6 24,28 38,18" fill="#bae6fd" fillOpacity="0.3" />
  </svg>
);

const CustomEngineMatrix = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
    <rect x="8" y="8" width="32" height="32" rx="6" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.6" />
    <rect x="18" y="18" width="12" height="12" rx="2" fill="#10b981" fillOpacity="0.9" />
    <line x1="24" y1="8" x2="24" y2="18" stroke="#34d399" strokeWidth="2" />
    <line x1="24" y1="30" x2="24" y2="40" stroke="#34d399" strokeWidth="2" />
    <line x1="8" y1="24" x2="18" y2="24" stroke="#34d399" strokeWidth="2" />
    <line x1="30" y1="24" x2="40" y2="24" stroke="#34d399" strokeWidth="2" />
    <circle cx="24" cy="8" r="2" fill="#34d399" />
    <circle cx="24" cy="40" r="2" fill="#34d399" />
    <circle cx="8" cy="24" r="2" fill="#34d399" />
    <circle cx="40" cy="24" r="2" fill="#34d399" />
  </svg>
);

const CustomHealingEmpathy = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform duration-300">
    <path
      d="M24 40 C14 30 6 22 6 15 C6 9 10 5 16 5 C20 5 22.5 7 24 10 C25.5 7 28 5 32 5 C38 5 42 9 42 15 C42 22 34 30 24 40 Z"
      fill="#c084fc"
      fillOpacity="0.8"
      stroke="#e9d5ff"
      strokeWidth="1.5"
    />
    <path d="M16 12 L24 20 L20 28 L28 36" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
    <circle cx="24" cy="20" r="2" fill="#ffffff" />
  </svg>
);

const uniqueCustomIcons = [
  <CustomNeuralSynapse key="neural" />,
  <CustomLowPolyPrism key="prism" />,
  <CustomEngineMatrix key="engine" />,
  <CustomHealingEmpathy key="empathy" />
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Parabolic / Squared-curve wide top and bottom black fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      {/* Ambient background light */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-purple-900/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide mb-4">
            About NEUVA Studio
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light font-sans">
            Independent student game development driven by psychological storytelling, technical experimentation, and low-poly 3D worldbuilding.
          </p>
        </div>

        {/* Studio Manifesto / Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Story Panel */}
          <div className="lg:col-span-7 editorial-panel rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                Turning High-School Ambition into National Recognition
              </h3>
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans font-light">
                NEUVA was founded by four high-school students from <strong className="text-white">SMAN 81 Jakarta</strong> who shared a mutual fascination with game engineering, 3D computer graphics, and cognitive science.
              </p>
              <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed font-sans font-light">
                Selected for the competitive <strong className="text-white">Krafton Better Ground Game Development Program</strong>, NEUVA underwent rigorous mentoring from industry veterans at Krafton and Prestasi Junior Indonesia. Through countless iterations of C# gameplay code and Blender assets, our collective developed <strong className="text-nocturne-lavender">NEMURI</strong>, ultimately clinching the <strong>1st Place Championship</strong> nationwide.
              </p>
            </div>
          </div>

          {/* Philosophy Statement Card */}
          <div className="lg:col-span-5 editorial-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between bg-gradient-to-br from-purple-950/40 via-obsidian-900 to-obsidian-950 shadow-2xl">
            <div className="space-y-5">
              <blockquote className="font-spinnenkop text-2xl sm:text-3xl text-slate-100 leading-snug tracking-wide">
                “Healing is not the erasure of suffering, but the courageous integration of every fragmented part of who we are.”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans font-light">
                Instead of conventional power-fantasies, we seek to construct worlds where gameplay mechanics mirror genuine psychological states—confronting exhaustion, rebuilding lost memories, and finding tranquility within oneself.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-6">
          <h3 className="font-spinnenkop text-2xl sm:text-3xl text-white tracking-wider mb-8 text-center sm:text-left">
            The Pillars of Our Craft
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="editorial-panel rounded-3xl p-6 border border-white/10 hover:border-nocturne-glow/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Direct unique custom SVG icon with NO box around it */}
                  <div className="mb-4">
                    {uniqueCustomIcons[idx]}
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-3 group-hover:text-nocturne-lavender transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
