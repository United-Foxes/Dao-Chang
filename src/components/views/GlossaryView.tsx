import React, { useState, useMemo } from 'react';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import { GlossaryTerm, PillarId } from '../../types';
import { PILLARS } from '../../data/pillarsData';
import {
  BookOpen,
  Search,
  ArrowRight,
  Sparkles,
  Quote,
  X,
  Compass,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Volume2
} from 'lucide-react';

interface GlossaryViewProps {
  selectedTermSlug?: string | null;
  onSelectTerm: (slug: string) => void;
  onNavigateToPillar: (pillarId: PillarId) => void;
  onJoinChallenge: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  selectedTermSlug,
  onSelectTerm,
  onNavigateToPillar,
  onJoinChallenge
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeTermModal, setActiveTermModal] = useState<GlossaryTerm | null>(
    selectedTermSlug
      ? GLOSSARY_TERMS.find((t) => t.slug === selectedTermSlug) || null
      : null
  );

  // Update modal if selectedTermSlug changes from outside
  React.useEffect(() => {
    if (selectedTermSlug) {
      const found = GLOSSARY_TERMS.find((t) => t.slug === selectedTermSlug);
      if (found) setActiveTermModal(found);
    }
  }, [selectedTermSlug]);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      const matchesCategory =
        selectedCategory === 'todos' || term.pillarId === selectedCategory;
      const matchesSearch =
        term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.chinese.includes(searchQuery) ||
        term.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenTerm = (term: GlossaryTerm) => {
    setActiveTermModal(term);
    onSelectTerm(term.slug);
  };

  const handleCloseModal = () => {
    setActiveTermModal(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Glossary Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 text-xs font-semibold text-[#BF953F]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Motor de Sabiduría & SEO de Cola Larga</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
          Glosario Esencial de Nei Gong & Tao
        </h1>

        <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed">
          17 conceptos fundamentales de la alquimia interna y la filosofía daoísta traducidos a un lenguaje claro y accionable para tu práctica diaria.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white border border-[#171614]/10 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#BF953F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por término (ej. Jing, Qi, Shen, Wu Wei, Dan Tian...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F4] border border-[#171614]/15 rounded-xl text-[#171614] placeholder-[#6E6962]/70 focus:outline-hidden focus:border-[#BF953F]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6E6962] hover:text-[#171614]"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === 'todos'
                  ? 'bg-[#171614] text-[#FAF8F4]'
                  : 'bg-[#FAF8F4] text-[#6E6962] hover:text-[#171614]'
              }`}
            >
              Todos (17)
            </button>
            <button
              onClick={() => setSelectedCategory('mente')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === 'mente'
                  ? 'bg-[#171614] text-[#FAF8F4]'
                  : 'bg-[#FAF8F4] text-[#6E6962] hover:text-[#171614]'
              }`}
            >
              Mente & Shen
            </button>
            <button
              onClick={() => setSelectedCategory('energia')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === 'energia'
                  ? 'bg-[#171614] text-[#FAF8F4]'
                  : 'bg-[#FAF8F4] text-[#6E6962] hover:text-[#171614]'
              }`}
            >
              Energía & Jing/Qi
            </button>
            <button
              onClick={() => setSelectedCategory('cuerpo')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === 'cuerpo'
                  ? 'bg-[#171614] text-[#FAF8F4]'
                  : 'bg-[#FAF8F4] text-[#6E6962] hover:text-[#171614]'
              }`}
            >
              Cuerpo & Eje
            </button>
            <button
              onClick={() => setSelectedCategory('relaciones')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === 'relaciones'
                  ? 'bg-[#171614] text-[#FAF8F4]'
                  : 'bg-[#FAF8F4] text-[#6E6962] hover:text-[#171614]'
              }`}
            >
              Relaciones & Xin
            </button>
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs text-[#6E6962] flex items-center justify-between pt-1">
          <span>Mostrando <strong>{filteredTerms.length}</strong> términos</span>
          <span className="italic">Haz clic en cualquier término para leer la explicación completa</span>
        </div>
      </div>

      {/* Glossary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map((term) => (
          <article
            key={term.slug}
            onClick={() => handleOpenTerm(term)}
            className="bg-white border border-[#171614]/10 hover:border-[#BF953F] rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-serif text-3xl text-[#BF953F] group-hover:scale-110 transition-transform block">
                    {term.chinese}
                  </span>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#6E6962] mt-0.5 block">
                    {term.pinyin}
                  </span>
                </div>

                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#FAF8F4] text-[#6E6962] border border-[#171614]/10">
                  {term.pillarName.split(' ')[0]}
                </span>
              </div>

              <h3 className="text-lg font-display font-medium text-[#171614] group-hover:text-[#BF953F] transition-colors">
                {term.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed line-clamp-3">
                {term.shortDefinition}
              </p>

              {/* Related terms pills */}
              <div className="pt-2 flex flex-wrap gap-1">
                {term.relatedTerms.slice(0, 3).map((rSlug) => (
                  <span
                    key={rSlug}
                    className="text-[10px] px-1.5 py-0.5 rounded-sm bg-[#FAF8F4] text-[#6E6962] border border-[#171614]/5"
                  >
                    #{rSlug}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#171614]/5 flex items-center justify-between text-xs text-[#BF953F] font-semibold group-hover:translate-x-0.5 transition-transform">
              <span>Leer Guía Completa</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </article>
        ))}
      </div>

      {/* Deep-Dive Term Modal / Drawer */}
      {activeTermModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="term-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171614]/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FAF8F4] border border-[#BF953F]/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#171614]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-white border-b border-[#171614]/10 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl text-[#BF953F]">
                    {activeTermModal.chinese}
                  </span>
                  <div>
                    <h2 id="term-modal-title" className="text-2xl sm:text-3xl font-display font-medium text-[#171614]">
                      {activeTermModal.title}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-[#6E6962]">
                      <span className="font-semibold">{activeTermModal.pinyin}</span>
                      <span>·</span>
                      <span className="italic">{activeTermModal.pronunciation}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-2 text-[#6E6962] hover:text-[#171614] rounded-lg hover:bg-[#171614]/5 transition-colors"
                aria-label="Cerrar detalle de término"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Definition summary */}
              <div className="bg-[#BF953F]/10 border-l-4 border-[#BF953F] p-4 rounded-r-xl">
                <p className="text-sm font-medium text-[#171614] leading-relaxed">
                  {activeTermModal.shortDefinition}
                </p>
              </div>

              {/* Full Content Paragraphs */}
              <div className="space-y-4 text-sm text-[#171614] leading-relaxed font-sans">
                {activeTermModal.fullContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Classic Taoist Quote */}
              {activeTermModal.quote && (
                <div className="bg-white border border-[#171614]/10 rounded-2xl p-5 space-y-2 relative">
                  <Quote className="w-6 h-6 text-[#BF953F]/30 absolute top-4 right-4" />
                  <p className="font-accent text-base text-[#171614] italic leading-relaxed">
                    «{activeTermModal.quote.text}»
                  </p>
                  <div className="text-xs font-semibold text-[#BF953F]">
                    — {activeTermModal.quote.source}
                  </div>
                </div>
              )}

              {/* Practical Application Box */}
              <div className="bg-white border border-[#BF953F]/30 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171614]">
                  <Sparkles className="w-4 h-4 text-[#BF953F]" />
                  <span>Aplicación Práctica en tu Vida Cotidiana:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed">
                  {activeTermModal.practicalApplication}
                </p>
              </div>

              {/* Related Terms Interlinking */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#6E6962] mb-2">
                  Términos Relacionados (Interlinking):
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeTermModal.relatedTerms.map((rSlug) => {
                    const relatedObj = GLOSSARY_TERMS.find((t) => t.slug === rSlug);
                    if (!relatedObj) return null;
                    return (
                      <button
                        key={rSlug}
                        onClick={() => handleOpenTerm(relatedObj)}
                        className="px-3 py-1.5 bg-white border border-[#171614]/15 hover:border-[#BF953F] hover:bg-[#BF953F]/10 rounded-lg text-xs font-medium text-[#171614] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span className="text-[#BF953F] font-serif">{relatedObj.chinese}</span>
                        <span>{relatedObj.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA to the Pillar & Challenge */}
            <div className="p-4 sm:p-6 bg-white border-t border-[#171614]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#6E6962] text-center sm:text-left">
                Pilar formativo: <strong className="text-[#171614]">{activeTermModal.pillarName}</strong>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    handleCloseModal();
                    onNavigateToPillar(activeTermModal.pillarId);
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold bg-[#FAF8F4] hover:bg-[#171614]/5 text-[#171614] border border-[#171614]/15 rounded-lg transition-colors cursor-pointer"
                >
                  Explorar {activeTermModal.pillarName}
                </button>

                <button
                  onClick={() => {
                    handleCloseModal();
                    onJoinChallenge();
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Reto 7 Días (Gratis)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BF953F]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
