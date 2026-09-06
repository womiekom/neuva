import React from 'react';
import { studioDevelopers } from '../data/neuvaData';

export default function StudioCollective() {

  return (
    <section id="developers" className="py-20 relative overflow-hidden">
      {/* Anchor support for collective */}
      <span id="collective" className="absolute -top-24" />
      {/* Parabolic / Squared-curve wide top and bottom black fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-spinnenkop text-4xl sm:text-6xl text-white tracking-wide mb-4">
            The NEUVA Collective
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light">
            Four high-school students from <strong className="text-white font-medium">SMAN 81 Jakarta</strong> united by a shared passion
            for psychological storytelling, programming architecture, and 3D worldcraft.
          </p>
        </div>

        {/* 4 Reverted Dark Editorial Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {studioDevelopers.map((dev, idx) => (
            <div
              key={idx}
              className="editorial-panel rounded-3xl overflow-hidden p-5 flex flex-col justify-between group border border-white/10 hover:border-nocturne-glow/40 transition-all duration-300"
            >
              <div>
                {/* Transparent Team Photograph Cutout */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-b from-purple-950/20 via-obsidian-900/80 to-obsidian-950 flex items-center justify-center p-2 transition-all">
                  <img
                    src={dev.photo}
                    alt={dev.name}
                    className="w-full h-full object-contain object-bottom filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Developer Info */}
                <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-nocturne-lavender transition-colors">
                  {dev.name}
                </h3>
                <div className="text-xs font-mono text-white mb-2.5 font-medium">
                  {dev.role}
                </div>
                <p className="text-xs text-slate-300/80 leading-relaxed font-light font-sans">
                  {dev.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
