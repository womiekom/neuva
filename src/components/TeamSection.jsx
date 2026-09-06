import React from 'react';
import { Users, Code, Palette, BookOpen, Sparkles, ExternalLink, Instagram } from 'lucide-react';
import { teamMembers, studioInfo } from '../data/neuvaData';

export default function TeamSection() {
  const getRoleIcon = (role) => {
    if (role.includes("Programmer")) {
      return <Code size={16} className="text-dream-cyan" />;
    }
    if (role.includes("Designer")) {
      return <Palette size={16} className="text-dream-magenta" />;
    }
    return <BookOpen size={16} className="text-dream-gold" />;
  };

  return (
    <section id="team" className="py-20 relative stars-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/25 text-dream-magenta text-xs font-mono uppercase tracking-wider mb-3">
            <Users size={12} />
            <span>The Creators</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Team NEUVA
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            An independent team of four student creators from <strong className="text-purple-100">SMAN 81 Jakarta</strong>,
            combining programming architecture, 3D worldcraft, and psychological storytelling.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/20">
            <span>“Choose Your Player”</span>
            <span>•</span>
            <a
              href={studioInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-dream-magenta hover:underline flex items-center gap-1"
            >
              <span>{studioInfo.instagram}</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="nocturne-glass-card rounded-3xl overflow-hidden p-5 flex flex-col justify-between group border border-purple-500/20"
            >
              <div>
                {/* Member Portrait */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-purple-950/60 border border-purple-500/30">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nocturne-950/90 via-transparent to-transparent" />
                  
                  {/* Role badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-nocturne-950/90 border border-purple-500/40 text-purple-200 backdrop-blur-md flex items-center gap-1">
                      {getRoleIcon(member.role)}
                      <span>{member.role}</span>
                    </span>
                    <span className="text-[10px] font-mono text-purple-400/80">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-dream-magenta transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-dream-lavender mb-3">
                  {member.tag}
                </div>
                <p className="text-xs text-purple-200/75 leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-400">
                <span>SMAN 81 Jakarta</span>
                <span className="text-dream-magenta font-semibold">NEUVA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Culture & Krafton Context Banner */}
        <div className="nocturne-glass rounded-3xl p-6 sm:p-8 border border-purple-500/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-500/30 flex items-center justify-center text-dream-magenta flex-shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Independent Game Development Team
              </h4>
              <p className="text-xs text-purple-200/80 mt-0.5">
                Representing SMAN 81 Jakarta in the Krafton challenge and global indie development.
              </p>
            </div>
          </div>

          <a
            href={studioInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-500/30 hover:border-dream-magenta/50 text-purple-200 hover:text-white text-xs font-semibold tracking-wide transition-all shadow-md flex-shrink-0"
          >
            <Instagram size={16} />
            <span>Follow Neuva on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
