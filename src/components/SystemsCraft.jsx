import React from 'react';
import { Terminal, Gamepad2 } from 'lucide-react';
import { controlsMatrix } from '../data/neuvaData';

export default function SystemsCraft() {
  const tools = [
    { label: "Game Engine", name: "Unity 6", version: "6000.4.0f1", desc: "Core physics, lighting, and scene transitions." },
    { label: "Render Pipeline", name: "Universal Render Pipeline", version: "URP 3D", desc: "Volumetric fog, custom post-processing, and surreal tone mapping." },
    { label: "3D Asset Modeling", name: "Blender", version: "Self-Authored Meshes", desc: "Low-poly geometry, UV mapping, rigging, and FBX exports." },
    { label: "Concept & UI/UX", name: "Procreate", version: "Hand-Drawn 2D Art", desc: "Character turnarounds, color scripts, dialogue boxes, and sprite sheets." },
    { label: "Narrative Engine", name: "Google Docs", version: "Script & Lore", desc: "Psychological pacing, character voices, and puzzle documentation." },
    { label: "Code Architecture", name: "Visual Studio Code", version: "C# Systems", desc: "Input handling, state machines, and inventory integration." },
  ];

  return (
    <section id="craft" className="py-20 relative bg-obsidian-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide mb-4">
            Production Pipeline & Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light">
            Engineered by student developers, pairing custom low-poly artistry with 
            modular Unity 6 C# architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Matrix - Filled Color Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 space-y-6 bg-gradient-to-br from-[#701a75]/95 via-[#4a044e]/95 to-[#1f0a2e]/95 border border-white/25 shadow-2xl backdrop-blur-md text-white">
            <div className="flex items-center gap-3 pb-4 border-b border-white/20">
              <div className="p-2.5 rounded-2xl bg-white/15 border border-white/25 text-white">
                <Gamepad2 size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Input Architecture</h3>
                <p className="text-xs text-pink-200 font-mono">PC Keyboard & Mouse</p>
              </div>
            </div>

            <div className="space-y-3">
              {controlsMatrix.map((ctrl, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 border border-white/15 hover:border-white/25 transition-colors"
                >
                  <span className="font-mono text-xs px-3 py-1 rounded-lg bg-white text-purple-950 font-bold shadow-md">
                    {ctrl.input}
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-light text-right">
                    {ctrl.function}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Pipeline - Filled Color Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#701a75]/95 via-[#4a044e]/95 to-[#1f0a2e]/95 border border-white/25 shadow-2xl backdrop-blur-md text-white">
            <div className="flex items-center gap-3 pb-4 border-b border-white/20 mb-6">
              <div className="p-2.5 rounded-2xl bg-white/15 border border-white/25 text-white">
                <Terminal size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Development Toolchain</h3>
                <p className="text-xs text-pink-200 font-mono">Student Engineering Stack</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((t, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                  <div className="text-[10px] font-mono text-pink-200 uppercase tracking-wider">
                    {t.label}
                  </div>
                  <div className="text-sm font-bold text-white font-display">
                    {t.name}
                  </div>
                  <p className="text-xs text-white/85 font-light leading-relaxed pt-1">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
