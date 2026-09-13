import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageCircle, Play, Pause, Compass } from 'lucide-react';

const QUOTES = [
  "“Wander through the mind that cannot rest...”",
  "“The Somnolune Shrine has lost its crystals... we have to find them.”",
  "“I can hear Ferry’s guidance through the dream forest.”",
  "“Keiko, help me perceive the hidden paths ahead.”",
  "“If we stabilize the Nocturne Heart, will the insomnia finally end?”",
  "“True healing comes from accepting every fragmented part of ourselves.”"
];

const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

const SPRITES = {
  idleFront: `${BASE_PATH}/assets/sprites/kael-idle-front.webp`,
  idleRight: `${BASE_PATH}/assets/sprites/kael-idle-right.webp`,
  walkR1: `${BASE_PATH}/assets/sprites/kael-walk-r1.webp`,
  walkR2: `${BASE_PATH}/assets/sprites/kael-walk-r2.webp`,
};

export default function KaelWalker() {
  const [posX, setPosX] = useState(20); // 0% to 85%
  const [direction, setDirection] = useState('right'); // 'right' | 'left'
  const [isWalking, setIsWalking] = useState(true);
  const [walkFrame, setWalkFrame] = useState(1);
  const [isInteracting, setIsInteracting] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(QUOTES[0]);
  const [walkSpeed, setWalkSpeed] = useState(0.25); // percentage step per tick
  const trackRef = useRef(null);
  const dirRef = useRef('right');

  // Preload all sprites on initial mount
  useEffect(() => {
    Object.values(SPRITES).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Sync ref with direction
  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  // Animation cycle for sprite frames (180ms per frame when walking)
  useEffect(() => {
    if (!isWalking || isInteracting) return;
    const frameInterval = setInterval(() => {
      setWalkFrame((prev) => (prev === 1 ? 2 : 1));
    }, 180);
    return () => clearInterval(frameInterval);
  }, [isWalking, isInteracting]);

  // Movement interval across the pathway
  useEffect(() => {
    if (!isWalking || isInteracting) return;

    const moveInterval = setInterval(() => {
      setPosX((prevX) => {
        const currentDir = dirRef.current;
        let newX = prevX + (currentDir === 'right' ? walkSpeed : -walkSpeed);

        if (newX >= 84) {
          dirRef.current = 'left';
          setDirection('left');
          return 84;
        } else if (newX <= 4) {
          dirRef.current = 'right';
          setDirection('right');
          return 4;
        }
        return newX;
      });
    }, 40);

    return () => clearInterval(moveInterval);
  }, [isWalking, isInteracting, walkSpeed]);

  // Sprite image determination
  const getSpriteSrc = () => {
    if (isInteracting) {
      return SPRITES.idleFront;
    }
    if (!isWalking) {
      return SPRITES.idleRight;
    }
    return walkFrame === 1 ? SPRITES.walkR1 : SPRITES.walkR2;
  };

  // Click on pathway to walk Kael to that position
  const handleTrackClick = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const targetPercent = Math.max(4, Math.min(84, (clickX / rect.width) * 100));

    if (targetPercent > posX) {
      setDirection('right');
    } else {
      setDirection('left');
    }
    setPosX(targetPercent);
    setIsWalking(true);
    setIsInteracting(false);
  };

  // Interacting directly with Kael
  const handleKaelClick = (e) => {
    e.stopPropagation();
    setIsInteracting((prev) => !prev);
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setCurrentQuote(randomQuote);
  };

  return (
    <div className="w-full relative my-8 select-none">
      {/* Interactive Control Header */}
      <div className="flex items-center justify-between px-4 py-2 mb-2 max-w-6xl mx-auto text-xs text-purple-300/80 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-dream-magenta animate-ping" />
          <span className="font-semibold text-purple-200">NOCTURNE TRANSIT</span>
          <span className="text-purple-400/50">|</span>
          <span className="hidden sm:inline text-purple-300/60">Click anywhere on the dream pathway to guide Kael</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsWalking(!isWalking)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-purple-200 transition"
            title={isWalking ? "Pause Kael" : "Resume Walking"}
          >
            {isWalking ? <Pause size={12} /> : <Play size={12} />}
            <span>{isWalking ? "PAUSE" : "WALK"}</span>
          </button>

          <button
            onClick={() => setWalkSpeed((prev) => (prev === 0.25 ? 0.5 : 0.25))}
            className="px-2 py-1 rounded bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-purple-200 transition"
            title="Toggle Pace"
          >
            {walkSpeed === 0.25 ? "1x PACE" : "2x PACE"}
          </button>
        </div>
      </div>

      {/* The Nocturne Walking Track */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative h-28 sm:h-32 max-w-6xl mx-auto rounded-2xl overflow-hidden cursor-crosshair border border-purple-500/20 bg-gradient-to-r from-nocturne-950 via-nocturne-900 to-nocturne-950 shadow-inner group"
      >
        {/* Ambient dream gradient glow & background ruins */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent pointer-events-none" />
        
        {/* Floating dust motes */}
        <div className="absolute top-3 left-1/4 w-1.5 h-1.5 rounded-full bg-dream-lavender/40 animate-pulse pointer-events-none" />
        <div className="absolute top-6 right-1/3 w-1 h-1 rounded-full bg-dream-magenta/40 animate-ping pointer-events-none" />
        <div className="absolute top-4 right-1/6 w-2 h-2 rounded-full bg-dream-cyan/30 animate-pulse pointer-events-none" />

        {/* Pathway Platform (Cobblestones of Nocturne) */}
        <div className="absolute bottom-0 inset-x-0 h-7 bg-gradient-to-t from-purple-950/90 via-purple-900/40 to-transparent border-t border-purple-500/20 flex items-center justify-between px-6 pointer-events-none">
          <div className="flex gap-4 opacity-40 text-[9px] font-mono text-purple-300">
            <span>SOMNOLUNE SHRINE</span>
            <span>•</span>
            <span>CIRCADIAN ISLE</span>
            <span>•</span>
            <span>AMYGDALA CORE</span>
          </div>
          <div className="text-[10px] font-mono text-dream-lavender/60 flex items-center gap-1">
            <Sparkles size={10} />
            <span>Kael's Subconscious Trail</span>
          </div>
        </div>

        {/* Walking Kael Entity */}
        <div
          onClick={handleKaelClick}
          style={{ left: `${posX}%` }}
          className="absolute bottom-4 transform -translate-x-1/2 transition-[left] duration-75 ease-linear cursor-pointer group/kael z-20 flex flex-col items-center"
        >
          {/* Interactive Speech / Thought Bubble */}
          {(isInteracting || !isWalking) && (
            <div className="absolute -top-16 sm:-top-14 w-60 sm:w-72 -left-28 sm:-left-32 bg-nocturne-900/95 border border-dream-magenta/50 text-purple-100 p-2.5 rounded-xl shadow-2xl backdrop-blur-md text-[11px] font-sans leading-snug animate-fade-in z-30 pointer-events-auto">
              <div className="flex items-center gap-1 text-[10px] text-dream-magenta font-mono uppercase mb-0.5">
                <MessageCircle size={11} />
                <span>Kael's Inner Thought</span>
              </div>
              <p className="italic text-purple-200">{currentQuote}</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-nocturne-900 border-r border-b border-dream-magenta/50 transform rotate-45" />
            </div>
          )}

          {/* Hover Prompt */}
          {!isInteracting && isWalking && (
            <div className="opacity-0 group-hover/kael:opacity-100 transition-opacity absolute -top-7 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-purple-200 whitespace-nowrap border border-purple-500/40 pointer-events-none">
              Click to talk
            </div>
          )}

          {/* Kael Pixel Sprite (Zero-Latency Pre-Mounted DOM Stack) */}
          <div className="relative">
            <div
              className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 aspect-square filter drop-shadow-[0_4px_12px_rgba(217,70,239,0.35)] transition-transform group-hover/kael:scale-110 ${
                !isInteracting && direction === 'left' ? '-scale-x-100' : 'scale-x-100'
              }`}
            >
              <img
                src={SPRITES.idleFront}
                alt="Kael Idle Front"
                className={`absolute inset-0 w-full h-full object-contain pixelated select-none pointer-events-none transition-opacity duration-0 ${
                  isInteracting ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ imageRendering: 'pixelated' }}
              />
              <img
                src={SPRITES.idleRight}
                alt="Kael Idle Right"
                className={`absolute inset-0 w-full h-full object-contain pixelated select-none pointer-events-none transition-opacity duration-0 ${
                  !isInteracting && !isWalking ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ imageRendering: 'pixelated' }}
              />
              <img
                src={SPRITES.walkR1}
                alt="Kael Walk 1"
                className={`absolute inset-0 w-full h-full object-contain pixelated select-none pointer-events-none transition-opacity duration-0 ${
                  !isInteracting && isWalking && walkFrame === 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ imageRendering: 'pixelated' }}
              />
              <img
                src={SPRITES.walkR2}
                alt="Kael Walk 2"
                className={`absolute inset-0 w-full h-full object-contain pixelated select-none pointer-events-none transition-opacity duration-0 ${
                  !isInteracting && isWalking && walkFrame === 2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            {/* Ground shadow */}
            <div className="w-10 h-2 bg-black/50 rounded-full blur-[2px] mx-auto -mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
