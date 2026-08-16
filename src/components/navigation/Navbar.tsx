import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../brand/BrandLogo';
import {
  Search,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Shield,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PILLARS } from '../../data/pillarsData';
import { PillarId } from '../../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenSearch: () => void;
  onOpenQuiz: () => void;
  activePhase: number;
  onSelectPhase: (phase: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenQuiz,
  activePhase,
  onSelectPhase
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillarsDropdownOpen, setPillarsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPhaseModal, setShowPhaseModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePillarClick = (pillarId: PillarId) => {
    setPillarsDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate('pillar', pillarId);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md shadow-xs border-b border-[#171614]/10 py-3'
            : 'bg-[#FAF8F4] border-b border-[#171614]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left focus:outline-hidden group"
            aria-label="Ir a Inicio"
          >
            <BrandLogo variant="master" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6 text-xs uppercase tracking-widest font-medium">
            <button
              onClick={() => onNavigate('home')}
              className={`px-2 py-1 transition-colors ${
                currentView === 'home'
                  ? 'text-[#BF953F] font-bold'
                  : 'text-[#171614] hover:text-[#BF953F]'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => onNavigate('empieza-aqui')}
              className={`px-2 py-1 transition-colors flex items-center gap-1.5 ${
                currentView === 'empieza-aqui'
                  ? 'text-[#BF953F] font-bold'
                  : 'text-[#171614] hover:text-[#BF953F]'
              }`}
            >
              Empieza Aquí
            </button>

            {/* Los 4 Caminos Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPillarsDropdownOpen(!pillarsDropdownOpen)}
                onMouseEnter={() => setPillarsDropdownOpen(true)}
                className={`px-2 py-1 transition-colors flex items-center gap-1 ${
                  currentView === 'pillar'
                    ? 'text-[#BF953F] font-bold'
                    : 'text-[#171614] hover:text-[#BF953F]'
                }`}
              >
                4 Caminos
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${pillarsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {pillarsDropdownOpen && (
                <div
                  onMouseLeave={() => setPillarsDropdownOpen(false)}
                  className="absolute left-0 top-full mt-2 w-72 bg-[#FAF8F4] border border-[#171614]/15 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#6E6962] px-3 py-1 font-bold">
                    Submarcas & Pilares
                  </div>
                  {PILLARS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handlePillarClick(p.id)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white transition-colors flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 shrink-0">
                        <BrandLogo variant={p.id} size="sm" showWordmark={false} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#171614] group-hover:text-[#BF953F] transition-colors">
                          {p.brandName}
                        </div>
                        <div className="text-[11px] text-[#6E6962] normal-case tracking-normal">
                          {p.subName}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('glosario')}
              className={`px-2 py-1 transition-colors flex items-center gap-1.5 ${
                currentView === 'glosario'
                  ? 'text-[#BF953F] font-bold'
                  : 'text-[#171614] hover:text-[#BF953F]'
              }`}
            >
              Glosario
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`px-2 py-1 transition-colors ${
                currentView === 'blog'
                  ? 'text-[#BF953F] font-bold'
                  : 'text-[#171614] hover:text-[#BF953F]'
              }`}
            >
              Notas
            </button>

            <button
              onClick={() => onNavigate('seguridad')}
              className={`px-2 py-1 transition-colors flex items-center gap-1.5 ${
                currentView === 'seguridad'
                  ? 'text-[#BF953F] font-bold'
                  : 'text-[#171614] hover:text-[#BF953F]'
              }`}
            >
              Seguridad
            </button>
          </nav>

          {/* Action CTAs & Search */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#6E6962] hover:text-[#171614] hover:bg-[#171614]/5 rounded-full transition-colors"
              title="Buscar en la wiki (Ctrl + K)"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Interactive Energy Diagnostic Quiz Trigger */}
            <button
              onClick={onOpenQuiz}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#171614] bg-[#BF953F]/15 hover:bg-[#BF953F]/25 border border-[#BF953F]/40 rounded-full transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#BF953F]" />
              <span>Test Energía</span>
            </button>

            {/* Primary High-Converting CTA (Reto 7 Días) */}
            <button
              onClick={() => onNavigate('reto-7-dias')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest font-bold text-white bg-[#171614] hover:bg-[#BF953F] rounded-full transition-all shadow-md group cursor-pointer"
            >
              <span>Reto 7 Días</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171614] lg:hidden hover:bg-[#171614]/5 rounded-full transition-colors"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF8F4] animate-in fade-in duration-200">
          <div className="p-4 border-b border-[#171614]/10 flex items-center justify-between">
            <BrandLogo variant="master" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#171614] hover:bg-[#171614]/10 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium hover:bg-[#BF953F]/10 text-[#171614]"
              >
                Inicio
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('empieza-aqui');
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium hover:bg-[#BF953F]/10 text-[#171614] flex items-center justify-between"
              >
                <span>Empieza Aquí (Guía)</span>
                <Compass className="w-4 h-4 text-[#BF953F]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('glosario');
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium hover:bg-[#BF953F]/10 text-[#171614] flex items-center justify-between"
              >
                <span>Glosario Nei Gong (17 Términos)</span>
                <BookOpen className="w-4 h-4 text-[#BF953F]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('blog');
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium hover:bg-[#BF953F]/10 text-[#171614]"
              >
                Notas de Estudio / Artículos
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('seguridad');
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium hover:bg-[#BF953F]/10 text-[#171614] flex items-center justify-between"
              >
                <span>Seguridad y Responsabilidad</span>
                <Shield className="w-4 h-4 text-[#6E6962]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('sobre');
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium hover:bg-[#BF953F]/10 text-[#171614]"
              >
                Sobre Dao Chang & Fluir Consciente
              </button>
            </div>

            {/* Los 4 Caminos en Mobile */}
            <div className="pt-4 border-t border-[#171614]/10">
              <div className="text-xs uppercase tracking-wider text-[#6E6962] font-semibold mb-3 px-3">
                Los 4 Caminos (Submarcas)
              </div>
              <div className="space-y-1">
                {PILLARS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePillarClick(p.id)}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#BF953F]/10 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <BrandLogo variant={p.id} size="sm" showWordmark={false} />
                      <div>
                        <div className="text-sm font-medium text-[#171614]">{p.brandName}</div>
                        <div className="text-xs text-[#6E6962]">{p.subName}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#BF953F]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-[#171614]/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-medium bg-[#BF953F]/15 border border-[#BF953F]/30 text-[#171614] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#BF953F]" />
                Test: ¿Qué bloquea tu energía hoy?
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('reto-7-dias');
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold bg-[#171614] text-[#FAF8F4] flex items-center justify-center gap-2 shadow-md"
              >
                <span>Unirme al Reto de 7 Días (Gratis)</span>
                <ArrowRight className="w-4 h-4 text-[#BF953F]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discrete Phase Roadmap Preview Tool for Stakeholder / Verification */}
      <div className="bg-[#171614] text-[#FAF8F4] py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] text-[#FAF8F4]/80">
              <strong className="text-[#BF953F]">Fase Activa: Fase 1 (MVP Autoridad & Captación)</strong> — Cero fricción de venta.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#FAF8F4]/60 hidden md:inline">
              Arquitectura lista para 4 fases:
            </span>
            <button
              onClick={() => onNavigate('scaffolded-phases')}
              className="text-[11px] text-[#BF953F] hover:text-[#C9A863] underline underline-offset-2 flex items-center gap-1 font-medium cursor-pointer"
            >
              <Layers className="w-3 h-3" />
              <span>Ver Scaffolding Fases 2, 3 y 4 (Hotmart, Membresía, Consultoría)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
