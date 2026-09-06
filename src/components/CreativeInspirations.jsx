import React from 'react';
import { BookOpen, Sparkles, Heart, Film, Gamepad } from 'lucide-react';
import { inspirations } from '../data/neuvaData';

export default function CreativeInspirations() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Gamepad className="text-dream-magenta" size={22} />;
      case 1:
        return <Sparkles className="text-dream-cyan" size={22} />;
      case 2:
        return <Film className="text-dream-gold" size={22} />;
      default:
        return <BookOpen size={22} />;
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-nocturne-950 to-nocturne-900 border-t border-b border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-lavender text-xs font-mono uppercase tracking-wider mb-3">
            <BookOpen size={12} />
            <span>Creative Lineage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Artistic & Narrative Inspirations
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            NEMURI synthesizes narrative vulnerability, atmospheric discovery, and psychological
            personification inspired by pioneering indie games and cinema.
          </p>
        </div>

        {/* 3 Influences Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {inspirations.map((insp, idx) => (
            <div
              key={idx}
              className="nocturne-glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono text-purple-400 px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/20">
                    {insp.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {insp.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-sans">
                  {insp.influence}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 text-[11px] font-mono text-dream-lavender flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>NEMURI Synthesis Focus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Banner */}
        <div className="nocturne-glass p-6 sm:p-8 rounded-3xl border border-purple-500/25 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-dream-magenta to-dream-violet flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-purple-950">
            <Heart size={26} />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              From Emotional Metaphor to Cognitive Anatomy
            </h4>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              Unlike traditional fantasy RPG dungeons, every single puzzle and biome in NEMURI is grounded
              in real neuroscience: the <strong className="text-dream-lavender">Pineal Gland</strong> (circadian rhythm),
              the <strong className="text-dream-cyan">Hippocampus</strong> (memory processing), and the <strong className="text-dream-rose">Amygdala</strong> (fear response).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
