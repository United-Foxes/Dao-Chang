import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/blogData';
import { BlogPost, PillarId } from '../../types';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import { PILLARS } from '../../data/pillarsData';
import {
  FileText,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles,
  Share2,
  Check,
  Quote
} from 'lucide-react';

interface BlogViewProps {
  selectedPostSlug?: string | null;
  onSelectPost: (slug: string) => void;
  onSelectTerm: (slug: string) => void;
  onNavigateToPillar: (pillarId: PillarId) => void;
  onJoinChallenge: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  selectedPostSlug,
  onSelectPost,
  onSelectTerm,
  onNavigateToPillar,
  onJoinChallenge
}) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(
    selectedPostSlug
      ? BLOG_POSTS.find((p) => p.slug === selectedPostSlug) || null
      : null
  );
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (selectedPostSlug) {
      const found = BLOG_POSTS.find((p) => p.slug === selectedPostSlug);
      if (found) {
        setActivePost(found);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [selectedPostSlug]);

  const handleOpenPost = (post: BlogPost) => {
    setActivePost(post);
    onSelectPost(post.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPillarName = (pillarId: PillarId) => {
    const p = PILLARS.find((item) => item.id === pillarId);
    return p ? p.brandName : 'Dao Chang Consciente';
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* If viewing a single article */}
      {activePost ? (
        <article className="space-y-8 animate-in fade-in duration-200">
          <div className="space-y-4 pb-6 border-b border-[#171614]/10">
            <button
              onClick={() => setActivePost(null)}
              className="text-xs font-semibold text-[#6E6962] hover:text-[#171614] flex items-center gap-1 cursor-pointer"
            >
              ← Volver al Índice de Notas de Estudio
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#6E6962]">
              <span className="font-semibold uppercase tracking-wider text-[#BF953F]">
                {getPillarName(activePost.pillarId)}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{activePost.readTime}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{activePost.author}</span>
              </span>
              <span>·</span>
              <span>{activePost.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#171614] leading-tight">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-[#6E6962] font-accent italic">
              {activePost.subtitle}
            </p>
          </div>

          {/* Article Structured Content */}
          <div className="space-y-6 text-base sm:text-lg text-[#171614] leading-relaxed font-sans max-w-3xl">
            {activePost.content.map((block, idx) => {
              if (block.type === 'paragraph') {
                return <p key={idx}>{block.text}</p>;
              }
              if (block.type === 'heading') {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-display font-medium text-[#171614] pt-4">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'list' && block.items) {
                return (
                  <ul key={idx} className="space-y-2.5 my-4 pl-2 text-sm sm:text-base text-[#171614]">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#BF953F] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'quote') {
                return (
                  <div key={idx} className="bg-white border border-[#BF953F]/30 rounded-2xl p-6 space-y-2 relative my-6">
                    <Quote className="w-6 h-6 text-[#BF953F]/30 absolute top-4 right-4" />
                    <p className="font-accent text-lg text-[#171614] italic leading-relaxed">
                      «{block.text}»
                    </p>
                    {block.author && (
                      <div className="text-xs font-semibold text-[#BF953F]">
                        — {block.author}
                      </div>
                    )}
                  </div>
                );
              }
              if (block.type === 'callout') {
                return (
                  <div key={idx} className="bg-[#BF953F]/10 border-l-4 border-[#BF953F] p-5 rounded-r-xl my-6 text-sm sm:text-base text-[#171614]">
                    <strong className="block text-xs font-bold uppercase tracking-wider text-[#BF953F] mb-1">
                      Ejercicio Recomendado:
                    </strong>
                    <p>{block.text}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Glossary Cross-Links Box */}
          <div className="bg-white border border-[#BF953F]/30 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171614]">
              <BookOpen className="w-4 h-4 text-[#BF953F]" />
              <span>Términos del Glosario Mencionados en este Ensayo:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activePost.relatedGlossarySlugs.map((slug) => {
                const term = GLOSSARY_TERMS.find((t) => t.slug === slug);
                if (!term) return null;
                return (
                  <button
                    key={slug}
                    onClick={() => onSelectTerm(slug)}
                    className="px-3 py-1.5 rounded-lg bg-[#FAF8F4] border border-[#171614]/15 hover:border-[#BF953F] hover:bg-[#BF953F]/10 text-xs font-medium text-[#171614] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-[#BF953F]">{term.chinese}</span>
                    <span>{term.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Article Lead Magnet CTA */}
          <div className="bg-[#171614] text-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF953F]">
                Práctica Directa
              </span>
              <button
                onClick={handleShare}
                className="text-xs text-[#FAF8F4]/70 hover:text-[#FAF8F4] flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Enlace copiado' : 'Compartir artículo'}</span>
              </button>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#FAF8F4]">
              Lleva estos conceptos a la experiencia viva de tu cuerpo
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F4]/80 max-w-xl">
              Únete al Reto de 7 Días de Fluir Consciente y practica 10 minutos al día guiados por audio.
            </p>
            <button
              onClick={onJoinChallenge}
              className="px-5 py-2.5 text-xs font-semibold bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Acceder al Reto Gratuito</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      ) : (
        /* Blog Index */
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 text-xs font-semibold text-[#BF953F]">
              <FileText className="w-3.5 h-3.5" />
              <span>Notas de Estudio & Ensayos Daoístas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
              Bitácora del Cultivo Interno
            </h1>

            <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed">
              Ensayos reflexivos sobre alquimia interna, neurobiología de la presencia, postura física y el arte de la no-resistencia en la vida contemporánea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                onClick={() => handleOpenPost(post)}
                className="bg-white border border-[#171614]/10 hover:border-[#BF953F] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6E6962]">
                    <span className="font-semibold uppercase tracking-wider text-[#BF953F]">
                      {getPillarName(post.pillarId)}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-[#171614] group-hover:text-[#BF953F] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#6E6962] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#171614]/5 flex items-center justify-between text-xs text-[#171614] font-semibold group-hover:text-[#BF953F] transition-colors">
                  <span>Leer Ensayo Completo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
