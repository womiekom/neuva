import React, { useState, useEffect, useRef } from 'react';

const MONOLOGUES = [
  "“Wander through the mind that cannot rest...”",
  "“The Somnolune Shrine has lost its sacred crystals... we have to restore them.”",
  "“Is that Ferry waiting for us through the dream forest?”",
  "“Keiko, lend me your Soul Sight... reveal the hidden path.”",
  "“The Nocturne Heart pulses softly... it needs to be stabilized.”",
  "“True healing comes from accepting every fragmented part of who we are.”"
];

// Exact 4-step cycle: Walk1 -> Neutral -> Walk2 -> Neutral
const RIGHT_CYCLE = [
  "/assets/sprites/kael-walk-r1.png",
  "/assets/sprites/kael-idle-right.png",
  "/assets/sprites/kael-walk-r2.png",
  "/assets/sprites/kael-idle-right.png"
];

const LEFT_CYCLE = [
  "/assets/sprites/kael-walk-l1.png",
  "/assets/sprites/kael-idle-left.png",
  "/assets/sprites/kael-walk-l2.png",
  "/assets/sprites/kael-idle-left.png"
];

// =========================================================================
// HAND-CRAFTED DREAMWAY ARTWORKS (Dark Pink Trees, Pink Grass & Nocturne Heart)
// =========================================================================

// Handcrafted Dark Pink Nocturne Dream Tree
const DarkPinkTree = ({ scale = 1, flip = false }) => (
  <svg
    width={90 * scale}
    height={120 * scale}
    viewBox="0 0 90 120"
    fill="none"
    style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    className="pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
  >
    <defs>
      <linearGradient id={`foliageDark1_${scale}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#db2777" />
        <stop offset="50%" stopColor="#9d174d" />
        <stop offset="100%" stopColor="#500724" />
      </linearGradient>
      <linearGradient id={`foliageDark2_${scale}`} x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#831843" />
        <stop offset="100%" stopColor="#370517" />
      </linearGradient>
      <linearGradient id={`trunkGrad_${scale}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1a0624" />
        <stop offset="50%" stopColor="#300d3d" />
        <stop offset="100%" stopColor="#12031a" />
      </linearGradient>
    </defs>

    {/* Twisted Gnarled Dream Trunk */}
    <path
      d="M 45 118 C 42 100, 38 80, 42 65 C 44 55, 36 48, 32 40 M 43 68 C 47 58, 56 50, 60 42 M 45 118 C 50 108, 52 95, 48 80"
      stroke={`url(#trunkGrad_${scale})`}
      strokeWidth={7 * scale}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Base root flares */}
    <path
      d="M 36 120 C 40 114, 45 112, 45 118 C 45 112, 53 115, 56 120"
      stroke="#12031a"
      strokeWidth={4 * scale}
      strokeLinecap="round"
    />

    {/* Back Canopy Layer (Darker Wine Pink) */}
    <ellipse cx="44" cy="38" rx="28" ry="24" fill={`url(#foliageDark1_${scale})`} />
    <ellipse cx="62" cy="46" rx="18" ry="16" fill="#700936" />
    <ellipse cx="26" cy="46" rx="18" ry="16" fill="#500724" />

    {/* Mid Canopy Clustered Blooms */}
    <path
      d="M 22 42 C 22 26, 40 18, 48 20 C 58 16, 72 26, 70 40 C 76 52, 64 62, 52 60 C 42 66, 26 62, 22 42 Z"
      fill={`url(#foliageDark2_${scale})`}
    />

    {/* Soft Highlights on Top Canopy */}
    <ellipse cx="44" cy="26" rx="16" ry="10" fill="#f472b6" fillOpacity="0.25" />
    <circle cx="56" cy="34" r="5" fill="#fbcfe8" fillOpacity="0.2" />
  </svg>
);

// Handcrafted Pink Bioluminescent Grass Tufts
const PinkGrassPatch = ({ width = 36, height = 22, density = 5 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 24"
    fill="none"
    className="pointer-events-none drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]"
  >
    <defs>
      <linearGradient id="pinkGrassGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#831843" stopOpacity="0.4" />
        <stop offset="60%" stopColor="#ec4899" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#fbcfe8" />
      </linearGradient>
    </defs>

    {/* Grass blades sprouting upward */}
    <path d="M 4 24 Q 8 12 6 2" stroke="url(#pinkGrassGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M 12 24 Q 14 10 18 4" stroke="url(#pinkGrassGrad)" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M 20 24 Q 21 8 20 1" stroke="url(#pinkGrassGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M 26 24 Q 28 11 34 5" stroke="url(#pinkGrassGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M 33 24 Q 37 14 38 8" stroke="url(#pinkGrassGrad)" strokeWidth="1.8" strokeLinecap="round" />
    {density > 5 && (
      <>
        <path d="M 8 24 Q 10 15 13 8" stroke="url(#pinkGrassGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 24 24 Q 23 14 26 9" stroke="url(#pinkGrassGrad)" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
    {/* Micro glowing dew/pollen tips */}
    <circle cx="6" cy="2" r="1.2" fill="#ffffff" fillOpacity="0.9" />
    <circle cx="20" cy="1" r="1.4" fill="#ffffff" fillOpacity="0.9" />
    <circle cx="34" cy="5" r="1.2" fill="#ffffff" fillOpacity="0.9" />
  </svg>
);

// Handcrafted Nocturne Heart (Created after user's reference image)
const NocturneHeart = () => (
  <div className="relative flex flex-col items-center group/heart cursor-pointer">
    {/* Ambient Heart Aura Glow */}
    <div className="absolute -inset-3 bg-fuchsia-600/30 blur-xl rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

    <svg
      width="56"
      height="62"
      viewBox="0 0 100 110"
      fill="none"
      className="relative z-10 filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)] transform group-hover/heart:scale-110 transition-transform duration-500"
    >
      <defs>
        {/* Outer Dark Violet Petal Gradient */}
        <linearGradient id="heartOuterPetals" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#2e0854" />
          <stop offset="40%" stopColor="#4c1d95" />
          <stop offset="80%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>

        {/* Inner Soft Lilac/Pink Petal Gradient */}
        <linearGradient id="heartInnerPetals" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6b21a8" />
          <stop offset="40%" stopColor="#c084fc" />
          <stop offset="85%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fdf2f8" />
        </linearGradient>

        {/* Luminous Pearl / Core Orb Radial Glow */}
        <radialGradient id="heartOrbGlow" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fff1f2" />
          <stop offset="70%" stopColor="#f472b6" />
          <stop offset="95%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#be123c" />
        </radialGradient>

        {/* Soft Pink Orb Halo */}
        <filter id="orbBloom" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>

      {/* Floating Glowing Pink Pearl Orb hovering in the center above the chalice */}
      <g className="animate-float-slow">
        {/* Soft Outer Halo Ring */}
        <circle cx="50" cy="22" r="14" fill="#f472b6" fillOpacity="0.25" filter="url(#orbBloom)" />
        {/* Main Spherical Pearl */}
        <circle cx="50" cy="22" r="11" fill="url(#heartOrbGlow)" />
        {/* Primary Specular Glint */}
        <ellipse cx="46" cy="18" rx="3.5" ry="2" fill="#ffffff" fillOpacity="0.9" transform="rotate(-30 46 18)" />
      </g>

      {/* Chalice / Lotus Petals of the Nocturne Heart */}
      {/* Back Layer Wing Petals */}
      <path
        d="M 28 50 C 14 42, 10 56, 16 70 C 22 84, 40 98, 50 102 C 60 98, 78 84, 84 70 C 90 56, 86 42, 72 50 C 78 60, 72 74, 64 80 C 58 70, 56 60, 50 62 C 44 60, 42 70, 36 80 C 28 74, 22 60, 28 50 Z"
        fill="#260447"
      />

      {/* Left Outer Violet Petal */}
      <path
        d="M 18 52 C 12 60, 14 74, 24 88 C 34 98, 46 104, 50 105 C 44 98, 32 90, 28 78 C 24 68, 28 58, 34 52 C 26 50, 20 50, 18 52 Z"
        fill="url(#heartOuterPetals)"
      />

      {/* Right Outer Violet Petal */}
      <path
        d="M 82 52 C 88 60, 86 74, 76 88 C 66 98, 54 104, 50 105 C 56 98, 68 90, 72 78 C 76 68, 72 58, 66 52 C 74 50, 80 50, 82 52 Z"
        fill="url(#heartOuterPetals)"
      />

      {/* Center Soft Lavender / Pink Blossom Core Petals */}
      <path
        d="M 30 52 C 24 62, 30 76, 42 86 C 46 89, 50 90, 54 86 C 66 76, 72 62, 66 52 C 60 58, 56 70, 50 72 C 44 70, 40 58, 30 52 Z"
        fill="url(#heartInnerPetals)"
      />

      {/* Front Crest Petal Lips with Shimmer */}
      <path
        d="M 34 68 C 38 78, 46 82, 50 82 C 54 82, 62 78, 66 68 C 60 74, 54 75, 50 75 C 46 75, 40 74, 34 68 Z"
        fill="#fbcfe8"
        fillOpacity="0.8"
      />
    </svg>
  </div>
);

export default function KaelJourney() {
  const [posX, setPosX] = useState(15);
  const [direction, setDirection] = useState('right');
  const [stepIndex, setStepIndex] = useState(0);
  const [isWalking, setIsWalking] = useState(true);
  const [isTalking, setIsTalking] = useState(false);
  const [quote, setQuote] = useState(MONOLOGUES[0]);
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  // Cycle through 4-step animation sequence (160ms per frame)
  useEffect(() => {
    if (!isWalking || isTalking) return;
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % 4);
    }, 160);
    return () => clearInterval(interval);
  }, [isWalking, isTalking]);

  // Movement translation interval
  useEffect(() => {
    if (!isWalking || isTalking) return;
    const speed = 0.22;
    const moveInterval = setInterval(() => {
      setPosX((prev) => {
        let next = prev + (direction === 'right' ? speed : -speed);
        if (next >= 88) {
          setDirection('left');
          return 88;
        } else if (next <= 6) {
          setDirection('right');
          return 6;
        }
        return next;
      });
    }, 35);
    return () => clearInterval(moveInterval);
  }, [isWalking, direction, isTalking]);

  const getSpriteImage = () => {
    if (isTalking) return "/assets/sprites/kael-idle-front.png";
    if (!isWalking) {
      return direction === 'right'
        ? "/assets/sprites/kael-idle-right.png"
        : "/assets/sprites/kael-idle-left.png";
    }
    return direction === 'right' ? RIGHT_CYCLE[stepIndex] : LEFT_CYCLE[stepIndex];
  };

  const handleTrackClick = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const targetPercent = Math.max(6, Math.min(88, (clickX / rect.width) * 100));

    // Spawn click ripple
    const id = Date.now();
    setRipples((prev) => [...prev.slice(-3), { id, x: clickX, y: clickY }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);

    setDirection(targetPercent > posX ? 'right' : 'left');
    setPosX(targetPercent);
    setIsWalking(true);
    setIsTalking(false);
  };

  const toggleTalk = (e) => {
    e.stopPropagation();
    setIsTalking((prev) => !prev);
    const random = MONOLOGUES[Math.floor(Math.random() * MONOLOGUES.length)];
    setQuote(random);
  };

  return (
    <div className="w-full relative my-10 select-none">
      {/* Living Nemuri Dreamway Container */}
      <div
        ref={containerRef}
        onClick={handleTrackClick}
        className="relative h-48 sm:h-56 max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-fuchsia-500/20 bg-gradient-to-b from-[#0e0720] via-[#090414] to-[#040108] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(236,72,153,0.12)] cursor-pointer group transition-all duration-500 hover:border-fuchsia-400/40"
      >
        {/* Background Ambient Dream Sky Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_var(--tw-gradient-stops))] from-fuchsia-900/25 via-purple-950/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent pointer-events-none" />

        {/* 1. Luminous Crescent Moon in Dreamway Sky */}
        <div className="absolute top-4 right-12 opacity-80 pointer-events-none transform rotate-[-15deg] transition-transform duration-700 group-hover:scale-105">
          <svg width="46" height="46" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="trackMoonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#fdf2f8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.5" />
              </linearGradient>
              <filter id="trackMoonBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path
              d="M 65 15 C 32 15 15 42 20 72 C 22 84 28 92 34 96 C 16 88 8 68 12 48 C 16 28 35 12 65 15 Z"
              fill="url(#trackMoonGlow)"
              filter="url(#trackMoonBlur)"
            />
          </svg>
        </div>

        {/* 2. Soft Pink Dream Clouds (Layered Backdrops) */}
        <div className="absolute top-2 left-6 opacity-30 pointer-events-none">
          <svg width="140" height="70" viewBox="0 0 260 130" fill="none">
            <path
              d="M 40 90 C 20 90 5 75 5 55 C 5 38 18 25 35 22 C 45 8 65 0 88 0 C 115 0 138 12 148 30 C 158 24 172 22 185 24 C 210 28 228 48 228 72 C 242 75 252 86 252 100 C 252 116 238 128 220 128 L 45 128 C 22 128 5 112 5 95 C 5 92 10 90 40 90 Z"
              fill="url(#trackMoonGlow)"
            />
          </svg>
        </div>
        <div className="absolute top-6 right-1/3 opacity-20 pointer-events-none">
          <svg width="180" height="90" viewBox="0 0 260 130" fill="none">
            <path
              d="M 40 90 C 20 90 5 75 5 55 C 5 38 18 25 35 22 C 45 8 65 0 88 0 C 115 0 138 12 148 30 C 158 24 172 22 185 24 C 210 28 228 48 228 72 C 242 75 252 86 252 100 C 252 116 238 128 220 128 L 45 128 C 22 128 5 112 5 95 C 5 92 10 90 40 90 Z"
              fill="#ec4899"
            />
          </svg>
        </div>

        {/* 3. Distant Dream Spire Silhouettes */}
        <div className="absolute bottom-10 inset-x-0 h-28 pointer-events-none opacity-25">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              d="M0,120 L0,75 Q150,45 300,80 T600,60 T900,70 Q1050,40 1200,85 L1200,120 Z"
              fill="#180b33"
            />
            <path
              d="M0,120 L0,90 Q200,70 420,95 T850,78 Q1020,65 1200,95 L1200,120 Z"
              fill="#110724"
            />
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* 4. REPLACED ELEMENTS: Dark Pink Trees, Pink Grass & The Nocturne Heart */}
        {/* ========================================================================= */}

        {/* Left Dark Pink Tree */}
        <div className="absolute bottom-8 left-4 pointer-events-none z-10 opacity-90">
          <DarkPinkTree scale={0.9} />
        </div>

        {/* Far-Left Pink Grass Tuft */}
        <div className="absolute bottom-9 left-[15%] pointer-events-none z-10">
          <PinkGrassPatch width={40} height={22} density={6} />
        </div>

        {/* Mid-Left Pink Grass Patch */}
        <div className="absolute bottom-9 left-[32%] pointer-events-none z-10">
          <PinkGrassPatch width={34} height={18} density={4} />
        </div>

        {/* Center-Right: THE NOCTURNE HEART (With Floating Glowing Pearl Orb) */}
        <div className="absolute bottom-9 left-[58%] pointer-events-none z-15">
          <NocturneHeart />
        </div>

        {/* Grass nestled right next to Nocturne Heart */}
        <div className="absolute bottom-9 left-[54%] pointer-events-none z-10 opacity-80">
          <PinkGrassPatch width={28} height={16} density={4} />
        </div>
        <div className="absolute bottom-9 left-[64%] pointer-events-none z-10 opacity-80">
          <PinkGrassPatch width={32} height={18} density={5} />
        </div>

        {/* Mid-Right Pink Grass Patch */}
        <div className="absolute bottom-9 right-[22%] pointer-events-none z-10">
          <PinkGrassPatch width={36} height={20} density={5} />
        </div>

        {/* Right Dark Pink Tree */}
        <div className="absolute bottom-8 right-6 pointer-events-none z-10 opacity-90">
          <DarkPinkTree scale={0.95} flip={true} />
        </div>

        {/* Far-Right Pink Grass Tuft */}
        <div className="absolute bottom-9 right-[14%] pointer-events-none z-10">
          <PinkGrassPatch width={30} height={18} density={4} />
        </div>

        {/* 5. Living Floating Pathway Surface (Organic Bioluminescent Terrain) */}
        <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none">
          {/* Ethereal glowing upper border of the path */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
          {/* Subtle celestial path fill */}
          <div className="h-full bg-gradient-to-t from-[#05020a] via-[#100722] to-transparent border-t border-pink-500/20" />
        </div>

        {/* 6. Rolling Pink/Violet Dream Mist along the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-8 pointer-events-none bg-gradient-to-t from-pink-900/25 via-purple-900/10 to-transparent blur-sm" />

        {/* 7. Click Ripple Feedback */}
        {ripples.map((r) => (
          <span
            key={r.id}
            style={{ left: r.x, top: r.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-fuchsia-300/80 bg-pink-400/20 animate-ping pointer-events-none z-10"
          />
        ))}

        {/* 8. Substantially Enlarged Kael Entity Traversing the Dreamway */}
        <div
          onClick={toggleTalk}
          style={{ left: `${posX}%` }}
          className="absolute bottom-4 transform -translate-x-1/2 transition-[left] duration-75 ease-linear cursor-pointer group/kael z-20 flex flex-col items-center"
        >
          {/* Inner Monologue Speech Bubble */}
          {(isTalking || !isWalking) && (
            <div className="absolute -top-20 sm:-top-16 w-64 sm:w-80 -left-28 sm:-left-36 bg-[#0c0618]/95 border border-fuchsia-400/40 text-slate-100 p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(217,70,239,0.25)] backdrop-blur-xl text-xs font-sans leading-relaxed animate-fade-in z-30">
              <p className="italic text-slate-200">{quote}</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0c0618] border-r border-b border-fuchsia-400/40 transform rotate-45" />
            </div>
          )}

          {/* Large Kael Sprite */}
          <div className="relative">
            <img
              src={getSpriteImage()}
              alt="Kael Walking Sprite"
              className="w-24 h-24 sm:w-28 sm:h-28 pixelated transform transition-transform group-hover/kael:scale-105"
              style={{
                imageRendering: 'pixelated',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
