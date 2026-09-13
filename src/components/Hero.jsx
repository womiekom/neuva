import React from 'react';
import { Sparkles, Gamepad2, ArrowDown, Compass, PlayCircle } from 'lucide-react';
import { gameInfo, studioInfo } from '../data/neuvaData';
import KaelWalker from './KaelWalker';

export default function Hero() {
  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden stars-bg">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-900/30 via-dream-magenta/15 to-indigo-900/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-dream-lavender/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-dream-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Studio Tag & Badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-dream-magenta animate-pulse" />
            <span className="font-semibold tracking-wide text-white">NEUVA STUDIO</span>
            <span className="text-purple-500">•</span>
            <span>SMAN 81 Jakarta</span>
            <span className="text-purple-500">•</span>
            <span className="text-dream-lavender">Krafton Competition</span>
          </div>

          {/* Official Game Logo & Title */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-dream-magenta/20 via-purple-600/20 to-dream-cyan/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-700 rounded-full" />
            <img
              src="/assets/logo/nemuri-logo.webp"
              alt="NEMURI — Wander Through The Mind That Cannot Rest"
              className="h-28 sm:h-36 md:h-44 object-contain relative filter drop-shadow-[0_10px_25px_rgba(217,70,239,0.35)] animate-float-slow"
            />
          </div>

          {/* Official Logline */}
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 mb-4 leading-tight">
            “Wander Through The Mind That Cannot Rest”
          </h1>

          {/* Narrative Premise */}
          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl font-sans leading-relaxed mb-8">
            A neuroscience-inspired 3D psychological exploration game. Plagued by chronic insomnia, 
            Kael descends into <span className="text-dream-lavender font-semibold">Nocturne</span> — 
            a surreal dreamscape of his own psyche — guided by four emotional Energeons to solve mind-puzzles, 
            overcome deep fears, and restore the corrupted Nocturne Heart.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="#nemuri"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-dream-magenta to-dream-violet hover:from-fuchsia-500 hover:to-purple-600 text-white font-semibold text-sm shadow-xl shadow-dream-magenta/25 hover:shadow-dream-magenta/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Compass size={18} />
              <span>EXPLORE NOCTURNE</span>
            </a>

            <a
              href="#energeons"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-950/70 hover:bg-purple-900/80 border border-purple-500/30 hover:border-dream-magenta/50 text-purple-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all duration-200"
            >
              <Sparkles size={18} className="text-dream-lavender" />
              <span>THE 4 ENERGEONS</span>
            </a>

            <a
              href="#team"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 hover:border-purple-500/40 text-purple-300 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <span>MEET NEUVA TEAM</span>
            </a>
          </div>

          {/* Quick Pillars strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl text-left">
            <div className="nocturne-glass p-3.5 rounded-xl border border-purple-500/20">
              <div className="text-[10px] font-mono text-purple-400 uppercase">Engine & Tech</div>
              <div className="text-xs font-semibold text-white mt-0.5">Unity 6 (URP 3D)</div>
            </div>
            <div className="nocturne-glass p-3.5 rounded-xl border border-purple-500/20">
              <div className="text-[10px] font-mono text-purple-400 uppercase">Playthrough</div>
              <div className="text-xs font-semibold text-white mt-0.5">40 – 60 Minutes</div>
            </div>
            <div className="nocturne-glass p-3.5 rounded-xl border border-purple-500/20">
              <div className="text-[10px] font-mono text-purple-400 uppercase">Art Style</div>
              <div className="text-xs font-semibold text-white mt-0.5">Low-Poly Surrealist</div>
            </div>
            <div className="nocturne-glass p-3.5 rounded-xl border border-purple-500/20">
              <div className="text-[10px] font-mono text-purple-400 uppercase">Target Platform</div>
              <div className="text-xs font-semibold text-white mt-0.5">PC: Windows Native</div>
            </div>
          </div>
        </div>

        {/* Dynamic Kael 2D Pixel Walking Strip */}
        <div className="mt-12">
          <KaelWalker />
        </div>
      </div>
    </section>
  );
}
