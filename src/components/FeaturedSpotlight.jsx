import React from 'react';
import { ArrowRight } from 'lucide-react';
import { studioProjects } from '../data/neuvaData';

export default function FeaturedSpotlight({ onNavigateToProjects }) {
  const flagship = studioProjects[0];

  return (
    <section className="pt-16 pb-12 relative overflow-hidden">
      {/* Parabolic / Squared-curve wide top and bottom black fades */}
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Studio Statement (Matching Playground Games Image 5 style) */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-2xl md:text-3xl text-slate-100 font-sans font-light leading-relaxed">
            Rather than building conventional fantasy escapism, <strong className="text-white font-medium">NEUVA</strong> crafts narrative 3D experiences grounded in human cognitive neuroscience, emotional vulnerability, and reflective game design.
          </p>
        </div>

        {/* Featured Production Spotlight Card */}
        {flagship && (
          <div className="max-w-5xl mx-auto">
            <div className="editorial-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden group shadow-2xl hover:border-nocturne-glow/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-nocturne-glow/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Thumbnail with Kael and Moons Render */}
                <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 relative aspect-[16/9] shadow-xl">
                  <img
                    src={flagship.bannerImage}
                    alt={flagship.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                </div>

                {/* Right: Highlights & Navigation CTA */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-nocturne-lavender tracking-wider uppercase">
                    Featured Production
                  </div>

                  {/* Nemuri Logo */}
                  <div className="py-0.5">
                    <img
                      src="/assets/logo/nemuri-logo.png"
                      alt="NEMURI"
                      className="h-14 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans font-light">
                    {flagship.description}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={onNavigateToProjects}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-xs font-mono text-white tracking-wider transition-all duration-300 group/btn cursor-pointer shadow-lg hover:scale-105"
                    >
                      <span>Explore In Projects</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
