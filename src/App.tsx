import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/common/Footer';
import { StickyChallengeBar } from './components/common/StickyChallengeBar';
import { ExitIntentModal } from './components/common/ExitIntentModal';
import { SearchModal } from './components/common/SearchModal';
import { InteractiveQuizModal } from './components/views/InteractiveQuizModal';

// Views
import { HomeView } from './components/views/HomeView';
import { StartHereView } from './components/views/StartHereView';
import { GlossaryView } from './components/views/GlossaryView';
import { PillarView } from './components/views/PillarView';
import { SafetyView } from './components/views/SafetyView';
import { ChallengeLandingView } from './components/views/ChallengeLandingView';
import { BlogView } from './components/views/BlogView';
import { AboutView } from './components/views/AboutView';
import { ScaffoldedPhasesView } from './components/views/ScaffoldedPhasesView';

import { PillarId } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedPillarId, setSelectedPillarId] = useState<PillarId>('mente');
  const [selectedGlossarySlug, setSelectedGlossarySlug] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Scroll to top on navigation
  const handleNavigate = (view: string, param?: string) => {
    if (view === 'pillar' && param) {
      setSelectedPillarId(param as PillarId);
    }
    if (view === 'glosario' && param) {
      setSelectedGlossarySlug(param);
    }
    if (view === 'blog' && param) {
      setSelectedBlogSlug(param);
    }

    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#171614] selection:bg-[#BF953F]/30 selection:text-[#171614]">
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTerm={(slug) => handleNavigate('glosario', slug)}
        onSelectPillar={(pillarId) => handleNavigate('pillar', pillarId)}
        onSelectArticle={(slug) => handleNavigate('blog', slug)}
      />

      {/* Diagnostic 5-Question Quiz Modal */}
      <InteractiveQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onNavigateToPillar={(pId) => handleNavigate('pillar', pId)}
        onNavigateToGlossaryTerm={(slug) => handleNavigate('glosario', slug)}
        onJoinChallenge={() => handleNavigate('reto-7-dias')}
      />

      {/* Exit Intent Lead Capture Modal for Glossary & Blog */}
      <ExitIntentModal
        onJoinChallenge={() => handleNavigate('reto-7-dias')}
        currentView={currentView}
      />

      {/* If inside dedicated Challenge Landing, show focused view with minimal distraction */}
      {currentView === 'reto-7-dias' ? (
        <ChallengeLandingView onBackToWiki={() => handleNavigate('home')} />
      ) : (
        <>
          {/* Main Global Navigation */}
          <Navbar
            currentView={currentView}
            selectedPillar={selectedPillarId}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />

          {/* Main Content Area */}
          <main className="flex-1">
            {currentView === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenQuiz={() => setIsQuizOpen(true)}
                onSelectTerm={(slug) => handleNavigate('glosario', slug)}
              />
            )}

            {currentView === 'empieza-aqui' && (
              <StartHereView
                onNavigate={handleNavigate}
                onOpenQuiz={() => setIsQuizOpen(true)}
              />
            )}

            {currentView === 'glosario' && (
              <GlossaryView
                selectedTermSlug={selectedGlossarySlug}
                onSelectTerm={(slug) => setSelectedGlossarySlug(slug)}
                onNavigateToPillar={(pId) => handleNavigate('pillar', pId)}
                onJoinChallenge={() => handleNavigate('reto-7-dias')}
              />
            )}

            {currentView === 'pillar' && (
              <PillarView
                pillarId={selectedPillarId}
                onNavigateToPillar={(pId) => {
                  setSelectedPillarId(pId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateToGlossaryTerm={(slug) => handleNavigate('glosario', slug)}
                onJoinChallenge={() => handleNavigate('reto-7-dias')}
              />
            )}

            {currentView === 'seguridad' && (
              <SafetyView
                onNavigate={handleNavigate}
                onJoinChallenge={() => handleNavigate('reto-7-dias')}
              />
            )}

            {currentView === 'blog' && (
              <BlogView
                selectedPostSlug={selectedBlogSlug}
                onSelectPost={(slug) => setSelectedBlogSlug(slug)}
                onSelectTerm={(slug) => handleNavigate('glosario', slug)}
                onNavigateToPillar={(pId) => handleNavigate('pillar', pId)}
                onJoinChallenge={() => handleNavigate('reto-7-dias')}
              />
            )}

            {currentView === 'sobre' && (
              <AboutView
                onNavigate={handleNavigate}
                onJoinChallenge={() => handleNavigate('reto-7-dias')}
              />
            )}

            {currentView === 'scaffolded-phases' && <ScaffoldedPhasesView />}
          </main>

          {/* Global Authoritative Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />

          {/* Persistent Lead Magnet Sticky Bar */}
          <StickyChallengeBar
            onJoinChallenge={() => handleNavigate('reto-7-dias')}
          />
        </>
      )}
    </div>
  );
}
