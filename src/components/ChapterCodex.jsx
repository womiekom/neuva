import React, { useState } from 'react';
import { Compass, Music, CheckCircle2, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { chaptersData } from '../data/neuvaData';

export default function ChapterCodex() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const chapter = chaptersData[activeChapterIndex];

  return (
    <section id="chapters" className="py-20 relative overflow-hidden stars-bg">
      {/* Glow aura */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[350px] bg-purple-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Compass size={12} />
            <span>Brain-Inspired World Regions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Three Chapters of Nocturne
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Each region of Nocturne corresponds directly to an anatomical region of the human brain,
            mirroring specific psychological functions and struggles on Kael's path to rest.
          </p>
        </div>

        {/* Chapter Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-4xl mx-auto mb-10">
          {chaptersData.map((ch, idx) => {
            const isActive = activeChapterIndex === idx;
            return (
              <button
                key={ch.number}
                onClick={() => setActiveChapterIndex(idx)}
                className={`flex-1 p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-purple-900/40 border-dream-magenta/50 shadow-xl shadow-purple-950/60 scale-[1.02]'
                    : 'bg-nocturne-950/70 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-950/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase">
                    {ch.number}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 font-mono border border-purple-500/20">
                    {ch.region}
                  </span>
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {ch.focus}
                </div>
                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-dream-magenta via-dream-lavender to-dream-cyan" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Chapter Details Container */}
        <div className="nocturne-glass rounded-3xl border border-purple-500/25 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-dream-magenta uppercase tracking-wider">
                    {chapter.number} // REGION
                  </span>
                  <span className="text-purple-500">•</span>
                  <span className="text-xs font-mono text-purple-300">
                    {chapter.region}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white font-display mb-2">
                  {chapter.region}
                </h3>
                <div className="text-sm font-mono text-dream-lavender mb-3 flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>Cognitive Function: {chapter.focus}</span>
                </div>
                <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed font-sans">
                  {chapter.summary}
                </p>
              </div>

              {/* Objectives / Milestones */}
              <div className="p-5 rounded-2xl bg-purple-950/60 border border-purple-500/20">
                <div className="text-xs font-mono text-purple-300 font-semibold uppercase mb-3 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-dream-magenta" />
                  <span>Key Objectives & Milestones</span>
                </div>
                <ul className="space-y-2.5">
                  {chapter.milestones.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-purple-100">
                      <ChevronRight size={14} className="text-dream-magenta flex-shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audio Atmosphere Note (From Game Proposal) */}
              <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-950 border border-purple-500/30 text-dream-cyan flex-shrink-0 mt-0.5">
                  <Music size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-300 uppercase font-semibold">
                    Sound Direction & Ambience
                  </div>
                  <p className="text-xs text-purple-200/80 leading-relaxed mt-0.5">
                    {chapter.audioAtmosphere}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Slide / Map Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-nocturne-950/80 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={chapter.image}
                  alt={`${chapter.region} gameplay slide`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono text-purple-200 bg-nocturne-950/80 p-2.5 rounded-xl backdrop-blur-md border border-purple-500/30">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={12} className="text-dream-lavender" />
                    <span>In-Engine Unity 6 Capture</span>
                  </span>
                  <span className="text-purple-400">SMAN 81 // NEUVA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
