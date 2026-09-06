import React, { useState, useEffect } from 'react';

export default function NeuvaAtmosphere() {
  const [clipTop, setClipTop] = useState(0);
  const [clipBottom, setClipBottom] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateAtmosphereBounds = () => {
      const sheet = document.getElementById('neuva-content-sheet');
      const footer = document.querySelector('footer');

      let top = 0;
      let bottom = 0;

      if (sheet) {
        const sheetRect = sheet.getBoundingClientRect();
        top = Math.max(0, Math.floor(sheetRect.top));
      }

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          bottom = Math.max(0, Math.floor(window.innerHeight - footerRect.top));
        }
      }

      setClipTop(top);
      setClipBottom(bottom);
      setIsVisible(top < window.innerHeight && bottom < window.innerHeight);
    };

    updateAtmosphereBounds();
    window.addEventListener('scroll', updateAtmosphereBounds, { passive: true });
    window.addEventListener('resize', updateAtmosphereBounds, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateAtmosphereBounds);
      window.removeEventListener('resize', updateAtmosphereBounds);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-20' : 'opacity-0'
      }`}
      style={{
        clipPath: `inset(${clipTop}px 0 ${clipBottom}px 0)`,
        WebkitClipPath: `inset(${clipTop}px 0 ${clipBottom}px 0)`
      }}
    >
      {/* 1. Deep Ethereal Aurora Glow Meshes */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-800/25 via-pink-900/15 to-transparent blur-[140px]" />
      <div className="absolute top-[35%] right-[-10%] w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-fuchsia-700/20 via-purple-950/15 to-transparent blur-[150px]" />
      <div className="absolute top-[65%] left-[0%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-700/20 via-pink-800/15 to-transparent blur-[140px]" />
      <div className="absolute top-[85%] right-[2%] w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-purple-900/25 via-fuchsia-950/15 to-transparent blur-[150px]" />

      {/* SVG Global Filters & Gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="neuvaSimpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="neuvaWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="neuvaSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* 2. Top-Right Stylized Neural Arbor Motif */}
      <div className="absolute top-16 right-[3%] sm:right-[6%] opacity-60">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" filter="url(#neuvaSoftGlow)">
          <circle cx="120" cy="120" r="14" fill="#1b1233" stroke="url(#neuvaSimpleGrad)" strokeWidth="2" />
          <circle cx="120" cy="120" r="6" fill="#f472b6" />
          <circle cx="120" cy="120" r="2" fill="#ffffff" />
          
          <path
            d="M 120 106 C 115 80, 80 60, 50 45 M 120 106 C 125 80, 160 60, 190 45 M 106 120 C 80 115, 60 145, 40 170 M 134 120 C 160 115, 180 145, 200 170 M 120 134 C 120 165, 105 190, 95 215 M 120 134 C 125 165, 140 190, 150 215"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="50" cy="45" r="3" fill="#f472b6" />
          <circle cx="190" cy="45" r="3" fill="#c084fc" />
          <circle cx="40" cy="170" r="2.5" fill="#ec4899" />
          <circle cx="200" cy="170" r="2.5" fill="#818cf8" />
          <circle cx="95" cy="215" r="2.5" fill="#38bdf8" />
          <circle cx="150" cy="215" r="2.5" fill="#e879f9" />
        </svg>
      </div>

      {/* 3. Mid-Left Stylized Synaptic Constellation */}
      <div className="absolute top-[40%] left-[2%] sm:left-[4%] opacity-55">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" filter="url(#neuvaSoftGlow)">
          <circle cx="100" cy="100" r="12" fill="#1b1233" stroke="#c084fc" strokeWidth="2" />
          <circle cx="100" cy="100" r="5" fill="#c084fc" />

          <path
            d="M 100 88 C 95 65, 65 50, 40 40 M 100 88 C 115 65, 145 50, 175 40 M 88 100 C 65 105, 45 130, 30 155 M 112 100 C 135 105, 160 130, 180 155 M 100 112 C 95 140, 85 165, 75 190 M 100 112 C 110 140, 125 165, 135 190"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="40" cy="40" r="3" fill="#f472b6" />
          <circle cx="175" cy="40" r="3" fill="#c084fc" />
          <circle cx="30" cy="155" r="2.5" fill="#38bdf8" />
          <circle cx="180" cy="155" r="2.5" fill="#e879f9" />
          <circle cx="75" cy="190" r="2.5" fill="#ec4899" />
          <circle cx="135" cy="190" r="2.5" fill="#818cf8" />
        </svg>
      </div>

      {/* 4. Lower-Right Neural Constellation */}
      <div className="absolute top-[72%] right-[2%] sm:right-[5%] opacity-60">
        <svg width="230" height="230" viewBox="0 0 230 230" fill="none" filter="url(#neuvaSoftGlow)">
          <circle cx="115" cy="115" r="12" fill="#1b1233" stroke="#f472b6" strokeWidth="2" />
          <circle cx="115" cy="115" r="5" fill="#f472b6" />

          <path
            d="M 115 103 C 110 75, 80 55, 55 40 M 115 103 C 125 75, 155 55, 180 40 M 103 115 C 75 110, 55 140, 35 165 M 127 115 C 155 110, 175 140, 195 165 M 115 127 C 110 155, 95 180, 85 205 M 115 127 C 120 155, 135 180, 145 205"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="55" cy="40" r="3" fill="#c084fc" />
          <circle cx="180" cy="40" r="3" fill="#f472b6" />
          <circle cx="35" cy="165" r="2.5" fill="#818cf8" />
          <circle cx="195" cy="165" r="2.5" fill="#38bdf8" />
          <circle cx="85" cy="205" r="2.5" fill="#e879f9" />
          <circle cx="145" cy="205" r="2.5" fill="#ec4899" />
        </svg>
      </div>

      {/* 5. Clean Stylized Neuron (Top-Left) */}
      <div className="absolute top-24 left-[3%] sm:left-[5%] opacity-60">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" filter="url(#neuvaSoftGlow)">
          <circle cx="90" cy="75" r="9" fill="#1b1233" stroke="#f472b6" strokeWidth="2" />
          <circle cx="90" cy="75" r="4" fill="#ffffff" />

          <path
            d="M 90 66 C 85 45, 60 30, 45 20 M 90 66 C 95 45, 120 30, 135 20 M 82 72 C 60 70, 45 55, 30 50 M 98 72 C 120 70, 135 55, 150 50"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="45" cy="20" r="2.5" fill="#f472b6" />
          <circle cx="135" cy="20" r="2.5" fill="#c084fc" />
          <circle cx="30" cy="50" r="2" fill="#ec4899" />
          <circle cx="150" cy="50" r="2" fill="#818cf8" />

          <path
            d="M 90 84 C 90 110, 95 130, 85 155"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="91" cy="110" r="2" fill="#ffffff" />
          <circle cx="92" cy="135" r="2" fill="#ffffff" />
          <path
            d="M 85 155 C 75 165, 65 170, 55 172 M 85 155 C 95 165, 105 170, 115 172"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="55" cy="172" r="2" fill="#f472b6" />
          <circle cx="115" cy="172" r="2" fill="#c084fc" />
        </svg>
      </div>

      {/* 6. Simple, Sleek Brainwave Rhythm (Top Mid-Right) */}
      <div className="absolute top-28 right-[18%] sm:right-[24%] opacity-55 hidden md:block">
        <svg width="220" height="70" viewBox="0 0 220 70" fill="none" filter="url(#neuvaSoftGlow)">
          <line x1="10" y1="35" x2="210" y2="35" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="3 4" />
          <path
            d="M 10 35 L 45 35 Q 60 15, 75 35 T 105 35 Q 115 5, 125 55 Q 135 15, 145 35 L 210 35"
            stroke="url(#neuvaWaveGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="125" cy="55" r="2.5" fill="#38bdf8" />
          <circle cx="120" cy="10" r="2.5" fill="#f472b6" />
        </svg>
      </div>

      {/* 7. Synapse Node Spark (Upper-Mid Left) */}
      <div className="absolute top-[28%] left-[2%] sm:left-[4%] opacity-55">
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" filter="url(#neuvaSoftGlow)">
          <circle cx="45" cy="45" r="10" stroke="#f472b6" strokeWidth="1.8" fill="#1b1233" />
          <circle cx="45" cy="45" r="4" fill="#f472b6" />

          <circle cx="85" cy="85" r="10" stroke="#c084fc" strokeWidth="1.8" fill="#1b1233" />
          <circle cx="85" cy="85" r="4" fill="#c084fc" />

          <path
            d="M 52 52 L 78 78"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />
          <circle cx="65" cy="65" r="3" fill="#ffffff" />
        </svg>
      </div>

      {/* 8. Graceful Art Nouveau Swirls */}
      <div className="absolute top-[20%] left-[16%] opacity-45">
        <svg width="140" height="140" viewBox="0 0 160 160" fill="none">
          <path
            d="M 10 140 C 30 80, 80 30, 130 40 C 155 45, 150 80, 125 90 C 100 100, 90 70, 105 60 C 120 50, 130 65, 120 75"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="120" cy="75" r="3.5" fill="#f472b6" />
        </svg>
      </div>

      <div className="absolute top-[65%] right-[8%] opacity-45">
        <svg width="140" height="140" viewBox="0 0 160 160" fill="none">
          <path
            d="M 150 140 C 130 80, 80 30, 30 40 C 5 45, 10 80, 35 90 C 60 100, 70 70, 55 60 C 40 50, 30 65, 40 75"
            stroke="url(#neuvaSimpleGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="40" cy="75" r="3.5" fill="#c084fc" />
        </svg>
      </div>
    </div>
  );
}
