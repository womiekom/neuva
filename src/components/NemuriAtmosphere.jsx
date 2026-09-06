import React from 'react';

export default function NemuriAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Organic Purple and White Gradient Meshes */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-fuchsia-600/15 via-purple-600/10 to-transparent blur-[120px]" />
      <div className="absolute top-[28%] right-[-8%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-pink-500/15 via-purple-900/15 to-transparent blur-[140px]" />
      <div className="absolute top-[52%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-500/12 via-white/5 to-transparent blur-[110px]" />
      <div className="absolute top-[75%] right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-fuchsia-500/15 via-violet-900/15 to-transparent blur-[130px]" />
      <div className="absolute top-[40%] left-[45%] w-[350px] h-[350px] rounded-full bg-white/[0.04] blur-[90px]" />

      {/* 2. White Crescent Moons (Nemuri Logo Motif) */}
      {/* Top Right Hero Crescent Moon */}
      <div className="absolute top-28 right-[12%] opacity-60 transform rotate-[-20deg] animate-pulse" style={{ animationDuration: '6s' }}>
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="moonGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#e2e8f0" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
            </linearGradient>
            <filter id="moonBlur1" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 65 15 C 32 15 15 42 20 72 C 22 84 28 92 34 96 C 16 88 8 68 12 48 C 16 28 35 12 65 15 Z"
            fill="url(#moonGlow1)"
            filter="url(#moonBlur1)"
          />
        </svg>
      </div>

      {/* Mid Left Chapters Crescent Moon */}
      <div className="absolute top-[48%] left-[6%] opacity-45 transform rotate-[25deg]">
        <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
          <path
            d="M 65 15 C 32 15 15 42 20 72 C 22 84 28 92 34 96 C 16 88 8 68 12 48 C 16 28 35 12 65 15 Z"
            fill="url(#moonGlow1)"
          />
        </svg>
      </div>

      {/* Bottom Right Collective Crescent Moon */}
      <div className="absolute top-[82%] right-[8%] opacity-50 transform rotate-[-35deg]">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path
            d="M 65 15 C 32 15 15 42 20 72 C 22 84 28 92 34 96 C 16 88 8 68 12 48 C 16 28 35 12 65 15 Z"
            fill="url(#moonGlow1)"
          />
        </svg>
      </div>

      {/* 3. Fluffy Pink Dream Clouds (Nemuri Logo Cloud Palette) */}
      {/* Cloud 1 - Top Left */}
      <div className="absolute top-36 left-[3%] opacity-40 blur-[1px]">
        <svg width="220" height="110" viewBox="0 0 260 130" fill="none">
          <defs>
            <linearGradient id="cloudPink1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#db2777" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M 40 90 C 20 90 5 75 5 55 C 5 38 18 25 35 22 C 45 8 65 0 88 0 C 115 0 138 12 148 30 C 158 24 172 22 185 24 C 210 28 228 48 228 72 C 242 75 252 86 252 100 C 252 116 238 128 220 128 L 45 128 C 22 128 5 112 5 95 C 5 92 10 90 40 90 Z"
            fill="url(#cloudPink1)"
          />
        </svg>
      </div>

      {/* Cloud 2 - Right Mid Section */}
      <div className="absolute top-[35%] right-[2%] opacity-35 blur-[1px]">
        <svg width="260" height="130" viewBox="0 0 260 130" fill="none">
          <defs>
            <linearGradient id="cloudPink2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#d946ef" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M 40 90 C 20 90 5 75 5 55 C 5 38 18 25 35 22 C 45 8 65 0 88 0 C 115 0 138 12 148 30 C 158 24 172 22 185 24 C 210 28 228 48 228 72 C 242 75 252 86 252 100 C 252 116 238 128 220 128 L 45 128 C 22 128 5 112 5 95 C 5 92 10 90 40 90 Z"
            fill="url(#cloudPink2)"
          />
        </svg>
      </div>

      {/* Cloud 3 - Lower Left */}
      <div className="absolute top-[68%] left-[2%] opacity-35 blur-[1px]">
        <svg width="240" height="120" viewBox="0 0 260 130" fill="none">
          <path
            d="M 40 90 C 20 90 5 75 5 55 C 5 38 18 25 35 22 C 45 8 65 0 88 0 C 115 0 138 12 148 30 C 158 24 172 22 185 24 C 210 28 228 48 228 72 C 242 75 252 86 252 100 C 252 116 238 128 220 128 L 45 128 C 22 128 5 112 5 95 C 5 92 10 90 40 90 Z"
            fill="url(#cloudPink1)"
          />
        </svg>
      </div>

      {/* 4. Delicate Constellations (Nemuri Logo Motif) */}
      <div className="absolute top-44 left-[18%] opacity-30">
        <svg width="120" height="70" viewBox="0 0 120 70" stroke="#f472b6" strokeWidth="1" fill="#f472b6">
          <line x1="10" y1="50" x2="45" y2="25" />
          <line x1="45" y1="25" x2="85" y2="40" />
          <line x1="85" y1="40" x2="110" y2="15" />
          <circle cx="10" cy="50" r="2.5" />
          <circle cx="45" cy="25" r="3" />
          <circle cx="85" cy="40" r="2.5" />
          <circle cx="110" cy="15" r="3" />
        </svg>
      </div>

      <div className="absolute top-[60%] right-[15%] opacity-25">
        <svg width="100" height="60" viewBox="0 0 100 60" stroke="#c084fc" strokeWidth="1" fill="#c084fc">
          <line x1="15" y1="20" x2="50" y2="45" />
          <line x1="50" y1="45" x2="85" y2="15" />
          <circle cx="15" cy="20" r="2.5" />
          <circle cx="50" cy="45" r="3" />
          <circle cx="85" cy="15" r="2.5" />
        </svg>
      </div>
    </div>
  );
}
