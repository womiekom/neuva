import React, { useState, useRef, useEffect } from 'react';
import { gameMeta } from '../data/neuvaData';

const DRIVE_VIDEOS = [
  { webm: "/assets/videos/mindlit_beginning.webm", mp4: "/assets/videos/mindlit_beginning.mov" },
  { webm: "/assets/videos/teleport_pineal.webm", mp4: "/assets/videos/teleport_pineal.mov" },
  { webm: "/assets/videos/ch1_to_2.webm", mp4: "/assets/videos/ch1_to_2.mp4" },
  { webm: "/assets/videos/ch3_ferry.webm", mp4: "/assets/videos/ch3_ferry.mp4" },
  { webm: "/assets/videos/cutscene_ending.webm", mp4: "/assets/videos/cutscene_ending.mp4" }
];

export default function NocturneWorld() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);
  const transitionTimeout = useRef(null);

  const transitionToNext = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % DRIVE_VIDEOS.length);
    }, 700);
  };

  const handleLoadedData = () => {
    // Reveal once new video starts rendering
    setTimeout(() => {
      setIsFading(false);
    }, 150);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    // For long cutscenes, transition after 14 seconds to cycle through all showcase videos
    if (videoRef.current && videoRef.current.currentTime >= 14) {
      transitionToNext();
    }
  };

  const handleError = () => {
    // Gracefully skip to next video if codec unsupported
    setCurrentIdx((prev) => (prev + 1) % DRIVE_VIDEOS.length);
    setIsFading(false);
  };

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);

  return (
    <section id="nocturne" className="py-24 relative overflow-hidden">
      {/* Background Multi-Video Showcase with Black Fade In / Fade Out Transitions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          key={DRIVE_VIDEOS[currentIdx].webm}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={transitionToNext}
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
          onError={handleError}
          className="w-full h-full object-cover filter brightness-95 opacity-35"
        >
          <source src={DRIVE_VIDEOS[currentIdx].webm} type="video/webm" />
          <source src={DRIVE_VIDEOS[currentIdx].mp4} />
        </video>

        {/* Soft dark readability layer */}
        <div className="absolute inset-0 bg-obsidian-950/40" />

        {/* Black Fade In / Fade Out Overlay Between Video Transitions */}
        <div
          className={`absolute inset-0 bg-[#05030a] transition-opacity duration-700 ease-in-out ${
            isFading ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Parabolic / Squared-curve wide top and bottom black fades */}
        <div className="section-fade-top" />
        <div className="section-fade-bottom" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide mb-4">
            Entering the Nocturne Realm
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light">
            When sleep is denied, the mind turns inward. Nocturne is the subconscious architecture 
            of an insomniac seeking to put his fragmented self to rest.
          </p>
        </div>

        {/* Narrative Block (Clean Editorial Panel) */}
        <div className="editorial-panel rounded-3xl p-8 sm:p-14 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white leading-snug">
              A Journey of Self-Reconstruction
            </h3>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-light font-sans">
              {gameMeta.premise}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
