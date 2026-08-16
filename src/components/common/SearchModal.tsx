import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Compass, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import { PILLARS } from '../../data/pillarsData';
import { BLOG_POSTS } from '../../data/blogData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTerm: (slug: string) => void;
  onSelectPillar: (pillarId: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTerm,
  onSelectPillar,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return { terms: [], pillars: [], posts: [] };
    const q = query.toLowerCase();

    const terms = GLOSSARY_TERMS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.chinese.includes(q) ||
        t.pinyin.toLowerCase().includes(q) ||
        t.shortDefinition.toLowerCase().includes(q)
    );

    const pillars = PILLARS.filter(
      (p) =>
        p.brandName.toLowerCase().includes(q) ||
        p.subName.toLowerCase().includes(q) ||
        p.focus.toLowerCase().includes(q)
    );

    const posts = BLOG_POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
    );

    return { terms, pillars, posts };
  }, [query]);

  if (!isOpen) return null;

  const hasResults =
    filteredResults.terms.length > 0 ||
    filteredResults.pillars.length > 0 ||
    filteredResults.posts.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-dialog-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-[#171614]/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-[#171614]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#171614]/10 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#BF953F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar términos (ej. Jing, Qi, Wu Wei, Dan Tian, Zhong Ding, estrés...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base bg-transparent text-[#171614] placeholder-[#6E6962]/70 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#6E6962] hover:text-[#171614] rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-[#6E6962] hover:text-[#171614] border border-[#171614]/15 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results / Default State */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="space-y-4 py-2">
              <div className="text-xs uppercase tracking-wider text-[#6E6962] font-semibold">
                Términos Populares de Nei Gong (SEO Engine)
              </div>
              <div className="flex flex-wrap gap-2">
                {GLOSSARY_TERMS.slice(0, 8).map((term) => (
                  <button
                    key={term.slug}
                    onClick={() => {
                      onSelectTerm(term.slug);
                      onClose();
                    }}
                    className="px-3 py-1.5 bg-white border border-[#171614]/10 rounded-lg text-xs font-medium text-[#171614] hover:border-[#BF953F] hover:bg-[#BF953F]/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#BF953F] font-serif font-normal">{term.chinese}</span>
                    <span>{term.title}</span>
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-[#171614]/10">
                <div className="text-xs uppercase tracking-wider text-[#6E6962] font-semibold mb-2">
                  Los 4 Caminos
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PILLARS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onSelectPillar(p.id);
                        onClose();
                      }}
                      className="p-2.5 rounded-lg border border-[#171614]/10 hover:border-[#BF953F] bg-white text-left transition-colors cursor-pointer"
                    >
                      <div className="text-xs font-semibold text-[#171614]">{p.brandName}</div>
                      <div className="text-[11px] text-[#6E6962]">{p.subName}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : !hasResults ? (
            <div className="text-center py-10 space-y-2">
              <div className="text-sm font-medium text-[#171614]">
                No encontramos coincidencias para "{query}"
              </div>
              <p className="text-xs text-[#6E6962]">
                Intenta buscar términos como <em>Jing, Shen, Wu Wei, Dan Tian</em> o conceptos como <em>estrés, respiración, postura</em>.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Glossary Results */}
              {filteredResults.terms.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#BF953F] font-semibold mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Glosario ({filteredResults.terms.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredResults.terms.map((term) => (
                      <button
                        key={term.slug}
                        onClick={() => {
                          onSelectTerm(term.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-white rounded-lg border border-[#171614]/10 hover:border-[#BF953F] hover:bg-[#BF953F]/10 transition-colors flex items-start justify-between gap-3 cursor-pointer group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-sm font-medium text-[#BF953F]">
                              {term.chinese}
                            </span>
                            <span className="text-sm font-semibold text-[#171614] group-hover:text-[#BF953F] transition-colors">
                              {term.title}
                            </span>
                            <span className="text-[11px] px-1.5 py-0.5 bg-[#171614]/5 rounded text-[#6E6962]">
                              {term.pinyin}
                            </span>
                          </div>
                          <p className="text-xs text-[#6E6962] mt-1 line-clamp-1">
                            {term.shortDefinition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#BF953F] shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pillars Results */}
              {filteredResults.pillars.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#BF953F] font-semibold mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Caminos & Submarcas ({filteredResults.pillars.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredResults.pillars.map((pillar) => (
                      <button
                        key={pillar.id}
                        onClick={() => {
                          onSelectPillar(pillar.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-white rounded-lg border border-[#171614]/10 hover:border-[#BF953F] hover:bg-[#BF953F]/10 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-semibold text-[#171614]">
                            {pillar.brandName}
                          </div>
                          <div className="text-xs text-[#6E6962]">{pillar.focus}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#BF953F]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog / Notes Results */}
              {filteredResults.posts.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#BF953F] font-semibold mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Notas de Estudio ({filteredResults.posts.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredResults.posts.map((post) => (
                      <button
                        key={post.slug}
                        onClick={() => {
                          onSelectArticle(post.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 bg-white rounded-lg border border-[#171614]/10 hover:border-[#BF953F] hover:bg-[#BF953F]/10 transition-colors flex items-start justify-between gap-3 cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-medium text-[#171614]">
                            {post.title}
                          </div>
                          <div className="text-xs text-[#6E6962] line-clamp-1">{post.excerpt}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#BF953F] shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
