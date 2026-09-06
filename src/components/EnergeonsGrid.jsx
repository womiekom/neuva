import React, { useState } from 'react';
import { Sparkles, Wand2, Shield, Eye, Flame, Hammer, Activity } from 'lucide-react';
import { energeonsData } from '../data/neuvaData';

export default function EnergeonsGrid() {
  const [activeEnergeon, setActiveEnergeon] = useState(energeonsData[0]);

  const getEnergeonIcon = (id) => {
    switch (id) {
      case 'rona':
        return <Activity size={18} className="text-amber-400" />;
      case 'keiko':
        return <Eye size={18} className="text-cyan-400" />;
      case 'feanor':
        return <Flame size={18} className="text-rose-400" />;
      case 'murial':
        return <Hammer size={18} className="text-emerald-400" />;
      default:
        return <Wand2 size={18} />;
    }
  };

  return (
    <section id="energeons" className="py-20 relative bg-gradient-to-b from-nocturne-950 via-nocturne-900 to-nocturne-950">
      {/* Glow aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/15 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-magenta text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>The Four Companions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Energeons of Kael's Psyche
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Living manifestations of Kael's internal cognitive states. In order to solve the puzzles
            of Nocturne, Kael must harmonize with all four aspects of his mind.
          </p>
        </div>

        {/* Tab Selection on Mobile/Tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {energeonsData.map((ene) => {
            const isSelected = activeEnergeon.id === ene.id;
            return (
              <button
                key={ene.id}
                onClick={() => setActiveEnergeon(ene)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 relative overflow-hidden ${
                  isSelected
                    ? 'bg-purple-900/40 border-dream-magenta/60 shadow-lg shadow-purple-950/50 scale-[1.02]'
                    : 'bg-nocturne-950/60 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-950/40'
                }`}
              >
                {/* Pixel Art Icon */}
                <div className="w-10 h-10 rounded-lg bg-black/40 border border-purple-500/30 flex items-center justify-center p-1 flex-shrink-0">
                  <img
                    src={ene.pixel}
                    alt={ene.name}
                    className="w-full h-full object-contain pixelated"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{ene.name}</span>
                    {getEnergeonIcon(ene.id)}
                  </div>
                  <div className="text-[11px] font-mono text-purple-300/70 truncate">
                    {ene.title}
                  </div>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-dream-magenta to-dream-cyan" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Energeon Spotlight Card */}
        <div className="nocturne-glass rounded-3xl border border-purple-500/25 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Subtle colored glow behind splash art */}
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none"
            style={{ backgroundColor: activeEnergeon.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border uppercase"
                    style={{
                      color: activeEnergeon.accent,
                      borderColor: `${activeEnergeon.accent}40`,
                      backgroundColor: `${activeEnergeon.accent}15`
                    }}
                  >
                    {activeEnergeon.title}
                  </span>
                  <span className="text-xs font-mono text-purple-400">
                    // ENERGEON ARCHETYPE
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-2">
                  {activeEnergeon.name}
                </h3>
                <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed font-sans">
                  {activeEnergeon.description}
                </p>
              </div>

              {/* Psychological Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/20">
                  <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wide mb-1">
                    Psychological State
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeEnergeon.accent }} />
                    <span>{activeEnergeon.psyche}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/20">
                  <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wide mb-1">
                    Nocturne In-Game Role
                  </div>
                  <div className="text-sm font-bold text-purple-200">
                    {activeEnergeon.badge}
                  </div>
                </div>
              </div>

              {/* In-Game Ability Details */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/90 to-nocturne-900 border border-purple-500/30">
                <div className="text-xs font-mono text-dream-lavender font-semibold uppercase mb-1.5 flex items-center gap-1.5">
                  <Wand2 size={14} />
                  <span>Unique Gameplay Ability</span>
                </div>
                <p className="text-sm text-white font-medium">
                  {activeEnergeon.ability}
                </p>
                <div className="mt-3 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-purple-300/70">
                  <span>Input: Hold Action Key</span>
                  <span>Companion Switch: Tab / 1-4</span>
                </div>
              </div>
            </div>

            {/* Right Splash Art Column */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-md h-80 sm:h-96 flex items-center justify-center p-4">
                {/* Glow ring */}
                <div
                  className="absolute inset-4 rounded-3xl opacity-20 filter blur-xl transition-all duration-500"
                  style={{ backgroundColor: activeEnergeon.accent }}
                />
                <img
                  key={activeEnergeon.id}
                  src={activeEnergeon.splash}
                  alt={activeEnergeon.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-all duration-500 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
