import React, { useState } from 'react';
import { characters3D } from '../data/neuvaData';

export default function EnergeonsStage() {
  const [activeChar, setActiveChar] = useState(characters3D[0]);

  return (
    <section id="entities" className="py-20 relative overflow-hidden">
      {/* Parabolic / Squared-curve wide top and bottom black fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide mb-4">
            The Inhabitants of Nocturne
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light">
            Meet Kael and the four psychological Energeons who guide his journey.
          </p>
        </div>

        {/* Character Navigation Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {characters3D.map((c) => {
            const isSelected = activeChar.id === c.id;

            // Vibrant, high-contrast gradient backgrounds per character:
            // Kael: gray, Rona: pink, Keiko: purple, Feanor: blue, Murial: yellow
            const gradientMap = {
              kael: isSelected
                ? 'bg-gradient-to-r from-neutral-700 via-stone-500 to-neutral-400 border-stone-300 text-white shadow-lg shadow-neutral-500/25 scale-105'
                : 'bg-gradient-to-r from-neutral-900/90 to-stone-800/80 border-neutral-700/70 text-neutral-300 hover:text-white hover:border-neutral-400 hover:scale-105',
              rona: isSelected
                ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400 border-pink-300 text-white shadow-lg shadow-pink-500/30 scale-105'
                : 'bg-gradient-to-r from-pink-950/90 to-rose-900/80 border-pink-800/70 text-pink-200 hover:text-white hover:border-pink-400 hover:scale-105',
              keiko: isSelected
                ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-violet-500 border-purple-300 text-white shadow-lg shadow-purple-500/30 scale-105'
                : 'bg-gradient-to-r from-purple-950/90 to-indigo-950/80 border-purple-800/70 text-purple-200 hover:text-white hover:border-purple-400 hover:scale-105',
              feanor: isSelected
                ? 'bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 border-cyan-300 text-white shadow-lg shadow-blue-500/30 scale-105'
                : 'bg-gradient-to-r from-blue-950/90 to-cyan-950/80 border-blue-800/70 text-blue-200 hover:text-white hover:border-blue-400 hover:scale-105',
              murial: isSelected
                ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 border-yellow-200 text-slate-950 font-bold shadow-lg shadow-yellow-500/30 scale-105'
                : 'bg-gradient-to-r from-amber-950/90 to-yellow-950/80 border-yellow-700/70 text-yellow-200 hover:text-white hover:border-yellow-400 hover:scale-105'
            };

            const buttonStyle = gradientMap[c.id] || (
              isSelected
                ? 'bg-white/15 border-white/40 text-white shadow-lg scale-105'
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:scale-105'
            );

            return (
              <button
                key={c.id}
                onClick={() => setActiveChar(c)}
                title={c.name}
                aria-label={c.name}
                className={`px-6 py-2 rounded-2xl border font-spinnenkop text-base sm:text-lg tracking-wider transition-all duration-300 flex items-center justify-center ${buttonStyle}`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        {/* 3D Character Stage */}
        <div className="editorial-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-700">
          {/* Ambient Character Specific Gradient Background */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-25"
            style={{
              background: {
                kael: 'radial-gradient(circle at 65% 50%, #9ca3af 0%, rgba(107,114,128,0.3) 40%, transparent 75%)',
                rona: 'radial-gradient(circle at 65% 50%, #ec4899 0%, rgba(244,63,94,0.3) 40%, transparent 75%)',
                keiko: 'radial-gradient(circle at 65% 50%, #a855f7 0%, rgba(168,85,247,0.3) 40%, transparent 75%)',
                feanor: 'radial-gradient(circle at 65% 50%, #3b82f6 0%, rgba(6,182,212,0.3) 40%, transparent 75%)',
                murial: 'radial-gradient(circle at 65% 50%, #eab308 0%, rgba(245,158,11,0.3) 40%, transparent 75%)'
              }[activeChar.id] || 'none'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-spinnenkop text-4xl sm:text-5xl text-white tracking-wider mb-3">
                  {activeChar.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-light font-sans">
                  {activeChar.summary}
                </p>
              </div>
            </div>

            {/* Right: Large 3D Character Model */}
            <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
              <div className="relative flex items-center justify-center w-full max-w-sm">
                <img
                  key={activeChar.id}
                  src={activeChar.model3d}
                  alt={`${activeChar.name} 3D Model`}
                  className="max-h-[420px] sm:max-h-[500px] w-auto object-contain animate-fade-in transition-all duration-500 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
