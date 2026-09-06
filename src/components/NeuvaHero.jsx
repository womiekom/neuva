import React from 'react';
import { studioMeta } from '../data/neuvaData';

export default function NeuvaHero() {
  return (
    <section id="home" className="relative h-screen min-h-[650px] w-full flex flex-col justify-center items-center overflow-hidden text-center select-none">
      {/* 01 // Background Video Playing Main Screen Menu */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.68] contrast-105"
        >
          <source src="/assets/videos/main_screen_menu.mp4" type="video/mp4" />
          <source src="/assets/videos/main_screen_menu.mov" type="video/quicktime" />
        </video>

        {/* Ambient Dark Gradient Overlays for High Contrast & Cinematic Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-transparent to-obsidian-950/70" />
        <div className="absolute inset-0 bg-black/25 backdrop-brightness-95" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,3,10,0.6)_100%)]" />
      </div>

      {/* 02 // Hero Brand & Typography Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Neuva Brandmark */}
        <div className="relative mb-5 sm:mb-7 group">
          <div className="absolute -inset-6 bg-white/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          <img
            src="/assets/logo/neuva-logo.png"
            alt="NEUVA Studio Brandmark"
            className="h-20 sm:h-28 md:h-36 w-auto object-contain relative filter drop-shadow-[0_0_25px_rgba(255,255,255,0.85)] drop-shadow-[0_0_10px_rgba(255,255,255,1)] group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Big Bold Studio Headline (Playground Games Inspired) */}
        <h1 className="font-spinnenkop text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-white mb-4 sm:mb-6 leading-none select-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          We are NEUVA
        </h1>

        {/* Studio Tagline — Spinnenkop in Pink */}
        <p className="font-spinnenkop text-2xl sm:text-4xl md:text-5xl text-pink-400 tracking-wide select-none drop-shadow-[0_4px_25px_rgba(244,114,182,0.4)]">
          We light the path for brilliant youth!
        </p>
      </div>
    </section>
  );
}
