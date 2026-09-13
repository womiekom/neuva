import React from 'react';
import { ArrowLeft } from 'lucide-react';
import KaelJourney from './KaelJourney';

export default function HeroPrologue({ onBackToOverview }) {
  return (
    <section id="prologue" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Parabolic / Squared-curve wide top and bottom black fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      {/* Ambient center radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-nocturne-glow/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Back Action seamlessly integrated inside the fade */}
        {onBackToOverview && (
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all duration-200 cursor-pointer group backdrop-blur-md"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects Overview</span>
            </button>
          </div>
        )}

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          {/* Official Nemuri Logo - Enlarged with reduced top gap */}
          <div className="relative mb-6">
            <img
              src="/assets/logo/nemuri-logo.webp"
              alt="NEMURI Official Brand Logo"
              className="h-28 sm:h-36 md:h-44 object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Spinnenkop Display Logline */}
          <h1 className="font-spinnenkop text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-slate-100 mb-6 leading-tight select-none">
            “Wander Through The Mind That Cannot Rest”
          </h1>

          {/* Narrative Premise */}
          <p className="text-base sm:text-lg text-slate-300/85 max-w-2xl font-sans leading-relaxed mb-10 font-light">
            A 3D psychological exploration game. Follow <strong className="text-white font-medium">Kael</strong> as he descends into <strong className="text-nocturne-lavender font-medium">Nocturne</strong> — 
            a surreal dreamscape mapped onto human brain anatomy, guided by four Energeons to cure his chronic insomnia.
          </p>
        </div>

        {/* Transparent Kael Splash Art Feature */}
        <div className="relative max-w-5xl mx-auto my-8">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
            {/* Left Narrative Card */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="editorial-panel p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-nocturne-glow/30 transition-all">
                <h3 className="text-xl font-bold text-white font-display mb-2.5">Kael’s Insomnia</h3>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                  Chronic sleeplessness has fractured Kael’s waking life. Desperate for rest, 
                  he consumes an experimental pill, descending into the deep corridors of his subconscious.
                </p>
              </div>
            </div>

            {/* Center: Transparent Kael Splash Art */}
            <div className="w-full lg:w-1/3 flex items-center justify-center relative order-1 lg:order-2 group">
              <div className="absolute inset-0 bg-nocturne-glow/15 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              <img
                src="/assets/sprites/kael-splash-transparent.webp"
                alt="Kael Official Splash Art"
                className="w-72 sm:w-80 md:w-96 max-h-[480px] object-contain relative z-20 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Narrative Card */}
            <div className="w-full lg:w-1/3 order-3">
              <div className="editorial-panel p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-nocturne-glow/30 transition-all">
                <h3 className="text-xl font-bold text-white font-display mb-2.5">The Brain Chapters</h3>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                  Nocturne is segmented into the Pineal Gland, Hippocampus, and Amygdala.
                  Every puzzle and companion is a neuroscience metaphor for emotional healing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kael's 4-Step Animated Physical Walk Across Nocturne */}
        <div className="mt-4">
          <KaelJourney />
        </div>
      </div>
    </section>
  );
}
