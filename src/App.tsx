import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/common/Footer';
import { StickyChallengeBar } from './components/common/StickyChallengeBar';
import { ExitIntentModal } from './components/common/ExitIntentModal';
import { SearchModal } from './components/common/SearchModal';
import { InteractiveQuizModal } from './components/views/InteractiveQuizModal';
import { PremiumHero } from './components/views/PremiumHero';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleNavigate = (view: string, param?: string) => {
    if (view === 'pillar' && param) setSelectedPillarId(param as PillarId);
    if (view === 'glosario' && param) setSelectedGlossarySlug(param);
    if (view === 'blog' && param) setSelectedBlogSlug(param);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTerm={(slug) => handleNavigate('glosario', slug)}
        onSelectPillar={(pillarId) => handleNavigate('pillar', pillarId)}
        onSelectArticle={(slug) => handleNavigate('blog', slug)}
      />
      <InteractiveQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onNavigateToPillar={(pId) => handleNavigate('pillar', pId)}
        onNavigateToGlossaryTerm={(slug) => handleNavigate('glosario', slug)}
        onJoinChallenge={() => handleNavigate('reto-7-dias')}
      />
      <ExitIntentModal onJoinChallenge={() => handleNavigate('reto-7-dias')} currentView={currentView} />

      {currentView === 'reto-7-dias' ? (
        <ChallengeLandingView onBackToWiki={() => handleNavigate('home')} />
      ) : (
        <>
          <Navbar
            currentView={currentView}
            selectedPillar={selectedPillarId}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />

          <main className="flex-1">
            {currentView === 'home' && (
              <>
                <PremiumHero onNavigate={handleNavigate} />
                <div className="[&>div>section:first-child]:hidden">
                  <HomeView
                    onNavigate={handleNavigate}
                    onOpenQuiz={() => setIsQuizOpen(true)}
                    onSelectTerm={(slug) => handleNavigate('glosario', slug)}
                  />
                </div>
              </>
            )}
            {currentView === 'empieza-aqui' && <StartHereView onNavigate={handleNavigate} onOpenQuiz={() => setIsQuizOpen(true)} />}
            {currentView === 'glosario' && <GlossaryView selectedTermSlug={selectedGlossarySlug} onSelectTerm={(slug) => setSelectedGlossarySlug(slug)} onNavigateToPillar={(pId) => handleNavigate('pillar', pId)} onJoinChallenge={() => handleNavigate('reto-7-dias')} />}
            {currentView === 'pillar' && <PillarView pillarId={selectedPillarId} onNavigateToPillar={(pId) => { setSelectedPillarId(pId); window.scrollTo({ top: 0, behavior: 'smooth' }); }} onNavigateToGlossaryTerm={(slug) => handleNavigate('glosario', slug)} onJoinChallenge={() => handleNavigate('reto-7-dias')} />}
            {currentView === 'seguridad' && <SafetyView onNavigate={handleNavigate} onJoinChallenge={() => handleNavigate('reto-7-dias')} />}
            {currentView === 'blog' && <BlogView selectedPostSlug={selectedBlogSlug} onSelectPost={(slug) => setSelectedBlogSlug(slug)} onSelectTerm={(slug) => handleNavigate('glosario', slug)} onNavigateToPillar={(pId) => handleNavigate('pillar', pId)} onJoinChallenge={() => handleNavigate('reto-7-dias')} />}
            {currentView === 'sobre' && <AboutView onNavigate={handleNavigate} onJoinChallenge={() => handleNavigate('reto-7-dias')} />}
            {currentView === 'scaffolded-phases' && <ScaffoldedPhasesView />}
          </main>

          <Footer onNavigate={handleNavigate} onOpenQuiz={() => setIsQuizOpen(true)} />
          <StickyChallengeBar onJoinChallenge={() => handleNavigate('reto-7-dias')} />
        </>
      )}
    </div>
  );
}
