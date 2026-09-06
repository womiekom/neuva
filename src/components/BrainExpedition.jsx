import React, { useState } from 'react';
import { brainChapters } from '../data/neuvaData';

export default function BrainExpedition() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const chapter = brainChapters[selectedIdx];

  return (
    <section id="chapters" className="pt-20 pb-12 relative overflow-hidden">
      {/* Parabolic / Squared-curve wide top black fade */}
      <div className="section-fade-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide mb-4">
            The Three Chapters of the Mind
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light">
            Every region in NEMURI is modeled after human brain structures. As Kael descends deeper,
            the psychological stakes elevate from sleep regulation to trauma integration.
          </p>
        </div>

        {/* Chapter Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-4xl mx-auto mb-10">
          {brainChapters.map((ch, idx) => {
            const isActive = selectedIdx === idx;
            return (
              <button
                key={ch.chapter}
                onClick={() => setSelectedIdx(idx)}
                className={`flex-1 p-5 rounded-3xl border text-center sm:text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 border-white/40 text-white'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200 hover:bg-white/8'
                }`}
              >
                <div className="font-spinnenkop text-xl sm:text-2xl tracking-wider text-white">
                  {ch.region}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Details */}
        <div className="editorial-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-spinnenkop text-4xl sm:text-5xl text-white tracking-wider mb-3">
                  {chapter.region}
                </h3>
                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-light font-sans">
                  {chapter.lore}
                </p>
              </div>
            </div>

            {/* Right Media Display */}
            <div className="lg:col-span-6">
              {chapter.videoAmbient ? (
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <video
                    key={chapter.videoAmbient}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full aspect-video object-cover"
                  >
                    <source src={chapter.videoAmbient} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <img
                    src="/assets/chapters/chapter-hippocampus.png"
                    alt="Hippocampus Realm Capture"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
