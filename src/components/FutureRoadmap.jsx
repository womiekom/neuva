import React from 'react';
import { Rocket, Monitor, Globe, Sparkles, ExternalLink, QrCode, Download } from 'lucide-react';
import { studioInfo } from '../data/neuvaData';

export default function FutureRoadmap() {
  const milestones = [
    {
      phase: "PHASE 01",
      title: "Windows PC Prototype",
      status: "Completed",
      details: "Core framework, 3D low-poly environment in Unity 6, Kael's walk mechanics, and the Somnolune Shrine crystal quest."
    },
    {
      phase: "PHASE 02",
      title: "All 3 Chapters & Boss Encounter",
      status: "In Development",
      details: "Complete integration of Pineal Gland, Hippocampus, and Amygdala. Corrupted Ferry boss battle and the 4 Energeon abilities."
    },
    {
      phase: "PHASE 03",
      title: "Global Store Expansion",
      status: "Upcoming",
      details: "Official distribution launch on Steam and Epic Games Store for the international indie psychological RPG community."
    },
    {
      phase: "PHASE 04",
      title: "Publisher & Industry Collaboration",
      status: "Vision",
      details: "Strategic partnerships with game publishers, community events, and cross-platform accessibility."
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-nocturne-900 to-nocturne-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-magenta text-xs font-mono uppercase tracking-wider mb-3">
            <Rocket size={12} />
            <span>Project Horizon</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Roadmap & Global Expansion
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            From an SMAN 81 student prototype to a globally accessible indie release on Steam and Epic Games Store.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className="nocturne-glass-card p-6 rounded-3xl flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-dream-lavender font-bold">
                    {ms.phase}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                      ms.status === 'Completed'
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                        : ms.status === 'In Development'
                        ? 'bg-purple-950/60 border-dream-magenta/50 text-dream-magenta'
                        : 'bg-purple-950/30 border-purple-500/20 text-purple-400'
                    }`}
                  >
                    {ms.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {ms.title}
                </h3>
                <p className="text-xs text-purple-200/75 leading-relaxed font-sans">
                  {ms.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-purple-500/10 text-[10px] font-mono text-purple-500">
                MILESTONE // 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Box: Design Repo & PC Download */}
        <div className="nocturne-glass rounded-3xl border border-purple-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dream-magenta/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-dream-cyan">
                <Monitor size={14} />
                <span>NATIVE WINDOWS PC BUILD</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Discover the Complete Design & Asset Repository
              </h3>
              <p className="text-sm text-purple-200/80 max-w-2xl leading-relaxed">
                Explore the complete collection of 3D models, Blender fbx files, character pixel sheets, 
                audio directions, and high-resolution concept art hosted on our official project drive.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={studioInfo.designRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-dream-magenta to-dream-violet hover:from-fuchsia-500 hover:to-purple-600 text-white font-semibold text-xs tracking-wider shadow-lg shadow-dream-magenta/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>ACCESS BIT.LY/NEUVADESIGNS</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={studioInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-semibold tracking-wider transition-all"
                >
                  <span>CONNECT @HELLONEUVA</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-purple-950/50 border border-purple-500/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-nocturne-950 border border-purple-500/30 flex items-center justify-center text-dream-lavender mb-3 shadow-inner">
                <Globe size={28} />
              </div>
              <div className="text-sm font-bold text-white">Target Stores</div>
              <div className="text-xs text-purple-300 font-mono mt-0.5">Steam & Epic Games Store</div>
              <span className="mt-3 inline-block text-[11px] px-2.5 py-1 rounded bg-purple-900/60 border border-purple-500/30 text-purple-200 font-mono">
                Windows PC Devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
