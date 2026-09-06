import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import HeroPrologue from './HeroPrologue';
import NocturneWorld from './NocturneWorld';
import EnergeonsStage from './EnergeonsStage';
import BrainExpedition from './BrainExpedition';

export default function ProjectsView({ onBackToHome }) {
  const [isDiscovered, setIsDiscovered] = useState(false);

  const handleDiscoverMore = () => {
    setIsDiscovered(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjectsOverview = () => {
    setIsDiscovered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {!isDiscovered ? (
        /* ========================================================================= */
        /* STUDIO PROJECTS & FEATURED CARD OVERVIEW */
        /* ========================================================================= */
        <div className="pt-24 pb-20 relative overflow-hidden">
          {/* Parabolic / Squared-curve wide top black fade */}
          <div className="section-fade-top" />

          {/* Ambient glowing radial orbs */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nocturne-glow/10 blur-[180px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Page Top Breadcrumb / Return to Studio Home */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all duration-200 cursor-pointer group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to NEUVA Studio</span>
              </button>
            </div>

            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <h1 className="font-spinnenkop text-4xl sm:text-6xl md:text-7xl text-white tracking-wide mb-4">
                Studio Projects
              </h1>
              <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-sans font-light">
                Interactive worlds engineered by NEUVA. Explore our award-winning productions, gameplay systems, and narrative worldbuilding.
              </p>
            </div>

            {/* Featured Project Banner with DISCOVER MORE */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-16 group bg-obsidian-950">
              {/* Background Image: The user's second image with Kael, Clock & Moons */}
              <div className="relative aspect-[16/8] sm:aspect-[21/9] md:aspect-[2.4/1] w-full overflow-hidden">
                <img
                  src="/assets/projects/nemuri_banner.png"
                  alt="NEMURI — Wander Through The Mind That Cannot Rest"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Subtle Gradient Overlays for High Readability & Cinematic Framing */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/80 via-transparent to-obsidian-950/60" />
                <div className="absolute inset-0 bg-black/25 backdrop-brightness-95" />

                {/* Banner Content Container (Center / Hero styled) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 z-10">
                  {/* Game Title: Significantly Larger Nemuri Brand Logo */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/assets/logo/nemuri-logo.png"
                      alt="NEMURI"
                      className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
                    />
                  </div>

                  {/* Subtitle / Logline */}
                  <p className="font-sans text-xs sm:text-sm md:text-base text-slate-200 font-light max-w-xl mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-relaxed px-4">
                    A 3D low-poly psychological exploration game about chronic insomnia, fragmented memory, and the journey of self-acceptance.
                  </p>

                  {/* DISCOVER MORE Button */}
                  <button
                    onClick={handleDiscoverMore}
                    className="inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-mono tracking-widest text-xs sm:text-sm font-semibold uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md group/btn shadow-xl"
                  >
                    <span>DISCOVER MORE</span>
                    <ChevronDown
                      size={16}
                      className="group-hover/btn:translate-y-1 transition-transform duration-300 text-slate-300 group-hover/btn:text-white"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* FULL NEMURI EXPERIENCE (Edge-to-edge full web layout, no card wrappers) */
        /* ========================================================================= */
        <div className="relative animate-fade-in transition-all duration-500">
          {/* 01 // Prologue with integrated Back to Projects Overview */}
          <HeroPrologue onBackToOverview={handleBackToProjectsOverview} />

          {/* 02 // The World of Nocturne & Video Transition (Full bleed edge-to-edge) */}
          <NocturneWorld />

          {/* 03 // 3D Character Exhibition (Kael + 4 Energeons) */}
          <EnergeonsStage />

          {/* 04 // The 3 Brain Chapters (Pineal, Hippocampus, Amygdala) */}
          <BrainExpedition />

          {/* 05 // Bottom Action (Seamlessly covered by bottom fade) */}
          <section className="pt-6 pb-24 relative overflow-hidden">
            {/* Parabolic / Squared-curve wide bottom black fade */}
            <div className="section-fade-bottom" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <button
                onClick={handleBackToProjectsOverview}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-xs font-mono text-white tracking-wider transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-md shadow-xl"
              >
                <ArrowLeft size={15} />
                <span>Back to Projects Overview</span>
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
