import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import NeuvaHero from './components/NeuvaHero';
import FeaturedSpotlight from './components/FeaturedSpotlight';
import AboutUsSection from './components/AboutUsSection';
import AchievementsSection from './components/AchievementsSection';
import StudioCollective from './components/StudioCollective';
import ProjectsView from './components/ProjectsView';
import NightfallFooter from './components/NightfallFooter';
import NemuriAtmosphere from './components/NemuriAtmosphere';
import NeuvaAtmosphere from './components/NeuvaAtmosphere';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase().startsWith('#project')) {
      return 'projects';
    }
    return 'neuva';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#project')) {
        setCurrentPage('projects');
      } else {
        setCurrentPage('neuva');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPage = (page, sectionId) => {
    if (page === 'projects') {
      setCurrentPage('projects');
      window.location.hash = '#projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('neuva');
      if (sectionId && sectionId !== 'home') {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-nocturne-glow selection:text-white relative overflow-x-clip">
      {/* Dynamic Ambient Atmosphere for Projects Page */}
      {currentPage === 'projects' && <NemuriAtmosphere />}

      {/* Global Minimalist Navigation */}
      <Navigation currentPage={currentPage} onSelectPage={handleSelectPage} />

      {/* Main Routed Views */}
      <main className="flex-grow relative">
        {currentPage === 'neuva' ? (
          <div className="relative">
            {/* 01 // Sticky Fullscreen Hero with Main Screen Menu Video Background (Pure Video, No Atmosphere) */}
            <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
              <NeuvaHero />
            </div>

            {/* 02 // Covering Content Sheet (Slides UP over the Hero on scroll, matching Playground Games) */}
            <div
              id="neuva-content-sheet"
              className="relative z-10 bg-obsidian-950 shadow-[0_-30px_90px_rgba(0,0,0,0.95)] border-t border-white/10"
            >
              {/* NEUVA Atmosphere inside covering sheet: fixed in place, behind content, neuroscience elements */}
              <NeuvaAtmosphere />

              {/* Content layers (z-10 above the atmosphere) */}
              <div className="relative z-10">
                {/* Featured Production / Studio Statement */}
                <FeaturedSpotlight
                  onNavigateToProjects={() => handleSelectPage('projects')}
                />

                {/* About Neuva Studio (Story, Mission, Pillars, Tech) */}
                <AboutUsSection />

                {/* Publicly Verified Achievements & Krafton Better Ground */}
                <AchievementsSection />

                {/* The 4 Student Developers from SMAN 81 Jakarta */}
                <StudioCollective />
              </div>
            </div>
          </div>
        ) : (
          /* Projects Standalone Page */
          <ProjectsView onBackToHome={() => handleSelectPage('neuva', 'home')} />
        )}
      </main>

      {/* Nightfall Footer */}
      <NightfallFooter onSelectPage={handleSelectPage} />
    </div>
  );
}
