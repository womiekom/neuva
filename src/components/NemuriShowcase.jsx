import React from 'react';
import { Eye, Heart, Brain, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { gameInfo } from '../data/neuvaData';

export default function NemuriShowcase() {
  const coreValues = [
    {
      title: "Surreal Mind Exploration",
      description: "Navigate symbolic brain regions (Pineal Gland, Hippocampus, Amygdala) rendered through dreamlike low-poly landscapes.",
      icon: <Brain className="text-dream-magenta" size={20} />
    },
    {
      title: "Distinctive Color Contrasts",
      description: "Atmospheric nocturne palettes balancing deep shadow with vibrant magenta, lavender, and celestial illumination.",
      icon: <Sparkles className="text-dream-lavender" size={20} />
    },
    {
      title: "Psychological Storytelling",
      description: "A profound narrative addressing chronic insomnia, emotional imbalance, vulnerability, and self-acceptance without jump scares.",
      icon: <Heart className="text-dream-rose" size={20} />
    },
    {
      title: "Companion Collaboration",
      description: "Switch between four distinct Energeons—each representing a facet of Kael's psyche—to solve layered environmental puzzles.",
      icon: <Layers className="text-dream-cyan" size={20} />
    }
  ];

  return (
    <section id="nemuri" className="py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-dream-magenta/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-lavender text-xs font-mono uppercase tracking-wider mb-3">
            <Eye size={12} />
            <span>The Flagship Project</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Step Inside the Nocturne World
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Where neuroscience concepts meet indie game craft. Explore the deep subconscious
            struggles of an insomniac mind seeking serenity and balance.
          </p>
        </div>

        {/* Two-Column Story & Character Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Kael Splash Art Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-dream-magenta/30 to-purple-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-b from-purple-950/80 to-nocturne-950 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 border-b border-purple-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-dream-cyan animate-pulse" />
                  <span className="font-mono text-xs text-purple-300 font-semibold tracking-wider">PROTAGONIST DOSSIER</span>
                </div>
                <span className="text-[11px] font-mono text-purple-400">NOCTURNE // SUBJECT 01</span>
              </div>

              {/* Kael Splash Art */}
              <div className="relative h-72 sm:h-80 w-full flex items-center justify-center my-4 overflow-hidden rounded-xl bg-purple-950/40">
                <img
                  src="/assets/sprites/kael-splash.webp"
                  alt="Kael Splash Art"
                  className="max-h-full object-contain filter drop-shadow-[0_10px_20px_rgba(192,132,252,0.4)] transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Character Details */}
              <div className="space-y-3 mt-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-white font-display">KAEL</h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-purple-900/60 text-purple-200 font-mono border border-purple-500/30">
                    Insomniac Traveler
                  </span>
                </div>
                <p className="text-sm text-purple-200/80 leading-relaxed font-sans">
                  Suffering from chronic insomnia that drains his physical and emotional vitality, 
                  Kael makes a desperate choice to consume a mysterious pill. The substance plunges him 
                  into the labyrinthine depths of his own subconscious mind.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-dream-lavender">
                  <Sparkles size={14} />
                  <span>Objective: Reconnect with the Energeons & Heal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Lore & Premise */}
          <div className="lg:col-span-7 space-y-6">
            <div className="nocturne-glass p-6 sm:p-8 rounded-2xl border border-purple-500/20">
              <span className="text-xs font-mono text-dream-magenta uppercase tracking-wider block mb-2">
                Narrative Foundation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                The Descent Into Nocturne
              </h3>
              <p className="text-purple-200/80 leading-relaxed text-sm sm:text-base mb-4">
                {gameInfo.synopsis}
              </p>
              <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/30 border-l-4 border-l-dream-magenta">
                <div className="text-xs font-mono text-dream-magenta font-semibold uppercase mb-1">
                  Core Philosophical Message
                </div>
                <p className="text-sm text-purple-100 italic">
                  “{gameInfo.moral}”
                </p>
              </div>
            </div>

            {/* Target Audience & Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="nocturne-glass p-5 rounded-xl border border-purple-500/20">
                <div className="text-xs font-mono text-purple-400 uppercase mb-1">Atmosphere</div>
                <div className="text-sm font-bold text-white mb-1">Comfort Exploration</div>
                <p className="text-xs text-purple-300/70 leading-relaxed">
                  While set in a dark and surreal world, NEMURI features zero jumpscares or gore. 
                  Focused on introspection, puzzle-solving, and emotional catharsis.
                </p>
              </div>

              <div className="nocturne-glass p-5 rounded-xl border border-purple-500/20">
                <div className="text-xs font-mono text-purple-400 uppercase mb-1">Audience Alignment</div>
                <div className="text-sm font-bold text-white mb-1">Teenagers & Young Adults</div>
                <p className="text-xs text-purple-300/70 leading-relaxed">
                  Tailored for story-driven RPG enthusiasts, indie adventurers, and fans of 
                  emotionally reflective experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="nocturne-glass-card p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-purple-300/75 leading-relaxed">
                  {val.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/10 text-[11px] font-mono text-purple-400/60 flex items-center justify-between">
                <span>PILLAR 0{idx + 1}</span>
                <ShieldCheck size={12} className="text-purple-400/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
