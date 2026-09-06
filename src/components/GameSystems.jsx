import React from 'react';
import { Gamepad2, Cpu, Headphones, Sliders, Monitor, Layers, Terminal } from 'lucide-react';
import { controlGuide, gameInfo } from '../data/neuvaData';

export default function GameSystems() {
  const techSpecs = [
    { label: "Game Engine", val: "Unity 6 (6000.4.0f1)" },
    { label: "Rendering Pipeline", val: "Universal Render Pipeline (URP) 3D" },
    { label: "3D Asset Modeling", val: "Blender (Self-Made Low-Poly)" },
    { label: "2D Art & UI/UX", val: "Procreate" },
    { label: "Script & Narrative", val: "Google Docs" },
    { label: "Code Editor", val: "Visual Studio Code" },
    { label: "Target Platform", val: "PC Windows Native" },
    { label: "Playthrough Time", val: "40 – 60 Minutes" }
  ];

  const audioTracks = [
    {
      region: "Chapter 1: Pineal Gland",
      motif: "Eerie Forest & Gentle Melodies",
      desc: "Realistic nature rustling and ambient wind layered over soft, mystical music box and chime motifs."
    },
    {
      region: "Chapter 2: Hippocampus",
      motif: "Soft Dark-Fantasy Lullaby",
      desc: "Faded, nostalgic piano and melancholic acoustic reverberations evoking bittersweet forgotten memories."
    },
    {
      region: "Chapter 3: Amygdala",
      motif: "Tense Cello into Cathartic Peace",
      desc: "Urgent, driving strings during the Corrupted Ferry confrontation, blossoming into serene harmony upon restoration."
    }
  ];

  return (
    <section id="systems" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-violet text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu size={12} />
            <span>Under the Hood</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Architecture & Systems
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Engineered from the ground up in Unity 6 by Neuva's student programmers, 
            combining responsive input mapping with tailored audio design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Controls Scheme */}
          <div className="lg:col-span-6 nocturne-glass p-6 sm:p-8 rounded-3xl border border-purple-500/25">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-900/50 border border-purple-500/30 text-dream-magenta">
                  <Gamepad2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Keyboard & Mouse Controls</h3>
                  <p className="text-xs text-purple-300/70 font-mono">Native Unity Input Mapping</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 font-mono border border-purple-500/30">
                PC WINDOWS
              </span>
            </div>

            <div className="space-y-3">
              {controlGuide.map((ctrl, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/15 hover:border-purple-500/30 transition-colors"
                >
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-purple-900/60 border border-purple-500/40 text-purple-100 font-bold shadow-sm">
                    {ctrl.key}
                  </span>
                  <span className="text-xs sm:text-sm text-purple-200/80 font-sans text-right">
                    {ctrl.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Direction */}
          <div className="lg:col-span-6 nocturne-glass p-6 sm:p-8 rounded-3xl border border-purple-500/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-900/50 border border-purple-500/30 text-dream-cyan">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Audio & Soundscape Direction</h3>
                    <p className="text-xs text-purple-300/70 font-mono">Dynamic Psychological Scoring</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-dream-cyan font-mono border border-cyan-500/30">
                  ATMOSPHERIC
                </span>
              </div>

              <div className="space-y-4">
                {audioTracks.map((trk, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/15">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-mono text-dream-lavender font-semibold">
                        {trk.region}
                      </span>
                      <span className="text-[11px] text-purple-400 font-mono">
                        {trk.motif}
                      </span>
                    </div>
                    <p className="text-xs text-purple-200/75 leading-relaxed">
                      {trk.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-purple-900/20 border border-purple-500/20 text-xs text-purple-300 font-mono flex items-center justify-between">
              <span>Unique Energeon SFX: Chimes, air swish, tinkling, world rumbling</span>
              <Sliders size={14} className="text-purple-400" />
            </div>
          </div>
        </div>

        {/* Development Tooling Grid */}
        <div className="nocturne-glass p-6 sm:p-8 rounded-3xl border border-purple-500/25">
          <div className="flex items-center gap-2 mb-6">
            <Terminal size={18} className="text-dream-magenta" />
            <h3 className="text-lg font-bold text-white font-display">Development Pipeline & Specifications</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techSpecs.map((spec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/15">
                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-1">
                  {spec.label}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {spec.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
