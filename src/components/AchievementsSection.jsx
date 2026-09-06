import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { achievementsData } from '../data/neuvaData';

const achievementPhotos = [
  {
    id: 'school',
    src: '/assets/achievements/krafton_school_trophy.jpg',
    alt: 'SMAN 81 Jakarta School Trophy Presentation',
    title: 'SMAN 81 Jakarta',
    subtitle: 'National Championship Trophy, Gold Medals & Certificates',
    description: 'The four student developers holding the official Krafton Better Ground championship trophy and certificates in the SMAN 81 Jakarta lobby.'
  },
  {
    id: 'studio',
    src: '/assets/achievements/krafton_studio_trophy.png',
    alt: 'NEUVA Team Formal Championship Photo',
    title: 'NEUVA Collective',
    subtitle: 'Formal Championship Portrait in Traditional Indonesian Batik',
    description: 'Studio photoshoot commemorating NEUVA’s 1st place victory in the nationwide game development championship.'
  },
  {
    id: 'ceremony',
    src: '/assets/achievements/krafton_winner_announcement.png',
    alt: 'Krafton Better Ground Challenges Live Ceremony Announcement',
    title: 'Krafton Better Ground 2026',
    subtitle: 'Official 1st Place National Winner Live Stream Announcement',
    description: 'The live stream moment NEUVA - SMAN 81 Jakarta was officially crowned 1st Place Winner by Krafton and Prestasi Junior Indonesia.'
  }
];

// Quadruple array for seamless infinite looping
const loopPhotos = [
  ...achievementPhotos,
  ...achievementPhotos,
  ...achievementPhotos,
  ...achievementPhotos
];

export default function AchievementsSection() {
  const feat = achievementsData[0];
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState(null);

  const containerRef = useRef(null);
  const singleLoopWidthRef = useRef(0);
  const animFrameId = useRef(null);

  // Measure width of one cycle (3 images + gaps)
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Average cycle length is 1/4 of total scrollWidth
        singleLoopWidthRef.current = containerRef.current.scrollWidth / 4;
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Continuous smooth marquee glide
  useEffect(() => {
    if (isHovered || activeLightboxPhoto) return;

    let lastTime = performance.now();

    const step = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      // ~45px per second smooth glide
      const move = (delta / 1000) * 45;

      setScrollOffset((prev) => {
        const next = prev + move;
        const loopWidth = singleLoopWidthRef.current;
        if (loopWidth > 0 && next >= loopWidth) {
          return next - loopWidth;
        }
        return next;
      });

      animFrameId.current = requestAnimationFrame(step);
    };

    animFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isHovered, activeLightboxPhoto]);

  return (
    <section id="achievement" className="py-24 relative overflow-hidden">
      {/* Anchor support for plural */}
      <span id="achievements" className="absolute -top-24" />

      {/* Parabolic / Squared-curve wide top and bottom black fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      {/* Subtle celebratory ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide">
            Official Recognition
          </h2>
        </div>

        {/* Editorial Achievement Card (Cleaned of all requested extra wordings) */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden bg-obsidian-900/85 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-yellow-500/25 transition-all duration-500">
          {/* Inner ambient glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-nocturne-glow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Main Award Title */}
            <h3 className="font-spinnenkop text-3xl sm:text-5xl lg:text-6xl text-yellow-400 tracking-wider mb-3 leading-tight">
              {feat.title}
            </h3>

            {/* Organization & Category */}
            <div className="text-xs sm:text-sm font-mono text-slate-200 font-medium mb-5">
              {feat.organization} <span className="text-white/40">•</span> {feat.category}
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans font-light max-w-3xl mb-6">
              {feat.description}
            </p>

            {/* ========================================================================= */}
            {/* CONNECTED SEAMLESS CAROUSEL WITH AURORA SIDES & ZERO GAPFILL */}
            {/* ========================================================================= */}
            <div
              className="relative w-full overflow-hidden rounded-2xl mt-8 pt-4 select-none group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* 4-Way Smooth Black Edge Fades (Left, Right, Top, Bottom) */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 pointer-events-none bg-gradient-to-r from-obsidian-900 via-obsidian-900/80 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 pointer-events-none bg-gradient-to-l from-obsidian-900 via-obsidian-900/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 z-20 pointer-events-none bg-gradient-to-b from-obsidian-900 via-obsidian-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 z-20 pointer-events-none bg-gradient-to-t from-obsidian-900 via-obsidian-900/70 to-transparent" />

              {/* Connected Images Track (All images exact same height, connected side-by-side, no border line, no gapfill) */}
              <div
                ref={containerRef}
                className="flex items-center gap-4 sm:gap-6 will-change-transform py-2"
                style={{ transform: `translateX(-${scrollOffset}px)` }}
              >
                {loopPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveLightboxPhoto(photo)}
                    className="relative flex-shrink-0 h-[380px] sm:h-[460px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer group/item transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {/* Pure, uncropped, clean image — identical height, natural aspect ratio, zero gapfill */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-auto max-w-none object-contain rounded-2xl filter contrast-[1.02]"
                    />

                    {/* Subtle bottom caption on hover */}
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <h4 className="text-sm font-bold text-white truncate">{photo.title}</h4>
                      <p className="text-xs text-slate-300 truncate">{photo.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX PREVIEW */}
      {/* ========================================================================= */}
      {activeLightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveLightboxPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-obsidian-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxPhoto(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-20"
              aria-label="Close image preview"
            >
              <X size={18} />
            </button>

            {/* Enlarged Image Display */}
            <div className="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-2xl bg-black/70 mb-4 p-2">
              <img
                src={activeLightboxPhoto.src}
                alt={activeLightboxPhoto.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Image Meta & Clean Caption */}
            <div className="w-full text-left px-2">
              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                {activeLightboxPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-light">
                {activeLightboxPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
