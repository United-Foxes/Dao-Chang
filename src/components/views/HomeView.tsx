import React from 'react';
import { BrandLogo } from '../brand/BrandLogo';
import { PILLARS } from '../../data/pillarsData';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import { PillarId } from '../../types';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Compass,
  CheckCircle2,
  Shield,
  Heart,
  ChevronRight,
  Users,
  Feather,
  Sun,
  Quote
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenQuiz: () => void;
  onSelectTerm: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuiz,
  onSelectTerm
}) => {
  // Power glossary quick terms
  const powerTerms = [
    { slug: 'jing', name: 'Jing', desc: 'Esencia vital y raíz física.' },
    { slug: 'qi', name: 'Qi', desc: 'Aliento y energía en movimiento.' },
    { slug: 'wu-wei', name: 'Wu Wei', desc: 'Acción sin esfuerzo forzado.' },
    { slug: 'dan-tian', name: 'Dan Tian', desc: 'Centros de transformación.' },
    { slug: 'shen', name: 'Shen', desc: 'Consciencia y espíritu iluminado.' }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Master Main Grid: Left Power Glossary Aside + Right Hero Experience */}
      <section className="border-b border-[#171614]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          {/* Left Aside: Glosario de Poder & Daoist Quote */}
          <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#171614]/10 p-8 sm:p-10 flex flex-col justify-between bg-[#FAF8F4]/50">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#6E6962] font-bold">
                  Glosario de Poder
                </h3>
                <button
                  onClick={() => onNavigate('glosario')}
                  className="text-[10px] text-[#BF953F] hover:underline font-semibold uppercase tracking-wider"
                >
                  Ver 17 →
                </button>
              </div>

              <ul className="space-y-6">
                {powerTerms.map((term) => (
                  <li key={term.slug}>
                    <button
                      onClick={() => onSelectTerm(term.slug)}
                      className="group text-left w-full cursor-pointer focus:outline-hidden"
                    >
                      <span className="block text-xl font-accent text-[#BF953F] group-hover:translate-x-1 transition-transform">
                        {term.name}
                      </span>
                      <span className="text-xs text-[#6E6962] block mt-0.5 leading-snug">
                        {term.desc}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Classical Tao Quote */}
            <div className="pt-8 mt-8 border-t border-[#171614]/10">
              <p className="text-xs italic leading-relaxed text-[#6E6962] font-accent">
                «El Tao que puede ser expresado no es el Tao eterno. El camino se transita en el silencio del cuerpo.»
              </p>
              <span className="block text-[10px] uppercase tracking-widest text-[#BF953F] font-bold mt-2">
                — Lao Zi (Dao De Jing)
              </span>
            </div>
          </aside>

          {/* Right Main Hero Stage */}
          <div className="lg:col-span-9 flex flex-col justify-between relative overflow-hidden">
            {/* Watermark Calligraphy */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-5 pointer-events-none select-none">
              <span className="font-serif text-[280px] text-[#BF953F] leading-none">道</span>
            </div>

            {/* Hero Main Content */}
            <div className="p-8 sm:p-14 lg:p-16 flex-1 flex flex-col justify-center max-w-3xl space-y-6 relative z-10">
              <div className="space-y-2">
                <h4 className="text-[#BF953F] font-accent text-2xl sm:text-3xl tracking-normal">
                  Fluir Consciente
                </h4>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display leading-[0.92] tracking-tighter text-[#171614]">
                  El Tao del <br />
                  <span className="text-[#BF953F]">Corazón.</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed max-w-xl font-sans">
                Una infraestructura viva para la maestría personal y el Nei Gong. No es meditación abstracta: es integración bioenergética para navegar el caos moderno con la calma de un templo.
              </p>

              {/* Action Buttons: Artistic Flair Pills */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('reto-7-dias')}
                  className="px-8 py-4 bg-[#BF953F] hover:bg-[#C9A863] text-white rounded-full text-sm font-bold shadow-lg shadow-[#BF953F]/25 hover:scale-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Iniciar Reto de 7 Días</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('empieza-aqui')}
                  className="px-8 py-4 border border-[#171614] rounded-full text-sm font-bold text-[#171614] hover:bg-[#171614] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explorar los 4 Caminos</span>
                </button>
              </div>

              {/* Social Proof Tags */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#6E6962]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BF953F]" />
                  <span>Sabiduría 100% Abierta</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BF953F]" />
                  <span>Método Progresivo Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BF953F]" />
                  <span>Audios Guiados Diarios</span>
                </div>
              </div>
            </div>

            {/* Bottom 4 Architectural Columns on Hero Base */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#171614]/10 bg-[#FAF8F4]/80">
              {PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  onClick={() => onNavigate('pillar', pillar.id)}
                  className={`p-6 flex flex-col justify-between hover:bg-white transition-colors cursor-pointer group ${
                    idx < 3 ? 'lg:border-r border-[#171614]/10' : ''
                  } ${idx % 2 === 0 ? 'sm:border-r border-[#171614]/10 lg:border-r' : ''} border-b sm:border-b-0`}
                >
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6E6962] font-bold block">
                      {pillar.element}
                    </span>
                    <h2 className="font-display text-lg leading-snug text-[#171614] group-hover:text-[#BF953F] transition-colors">
                      {pillar.brandName}
                    </h2>
                    <p className="text-xs text-[#6E6962] line-clamp-2 leading-relaxed">
                      {pillar.subName}
                    </p>
                  </div>

                  <div className="mt-4 pt-2">
                    {/* Animated Gold Underline from Design */}
                    <div className="w-6 h-[1.5px] bg-[#BF953F] group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Diagnostic Banner with Artistic Borders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171614] text-[#FAF8F4] border border-[#BF953F]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none select-none">
            <span className="font-serif text-[220px] text-[#BF953F]">氣</span>
          </div>

          <div className="max-w-2xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BF953F]/20 text-xs font-semibold text-[#BF953F] border border-[#BF953F]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test Adaptativo de 5 Preguntas · Diagnóstico Inmediato</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#FAF8F4] leading-tight">
              ¿Qué centro energético necesita tu atención hoy?
            </h3>

            <p className="text-sm sm:text-base text-[#FAF8F4]/80 leading-relaxed font-sans">
              Evalúa mente, respiración, postura corporal y vínculos relacionales para recibir tu prescripción personalizada de Nei Gong.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuiz}
                className="px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Hacer Test Gratuito</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#FAF8F4]/60">
                100% Libre de Costo · 2 Minutos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Glossary Engine Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#171614]/10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#BF953F]">
              Motor de Sabiduría Tradicional
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#171614] mt-1">
              Glosario Esencial de Nei Gong
            </h2>
            <p className="text-sm text-[#6E6962] mt-1 max-w-xl">
              17 términos fundamentales descritos con precisión técnica, caligrafía tradicional y aplicación viva.
            </p>
          </div>

          <button
            onClick={() => onNavigate('glosario')}
            className="self-start md:self-auto px-6 py-2.5 text-xs uppercase tracking-widest font-bold bg-white border border-[#171614] hover:bg-[#171614] hover:text-white rounded-full transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Ver Índice Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOSSARY_TERMS.slice(0, 6).map((term) => (
            <div
              key={term.slug}
              onClick={() => onSelectTerm(term.slug)}
              className="bg-white border border-[#171614]/10 hover:border-[#BF953F] rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#BF953F] group-hover:scale-105 transition-transform">
                    {term.chinese}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#FAF8F4] text-[#6E6962] border border-[#171614]/10">
                    {term.pinyin}
                  </span>
                </div>

                <h3 className="text-lg font-display font-medium text-[#171614] group-hover:text-[#BF953F] transition-colors">
                  {term.title}
                </h3>

                <p className="text-xs text-[#6E6962] line-clamp-3 leading-relaxed">
                  {term.shortDefinition}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#171614]/5 flex items-center justify-between text-xs text-[#BF953F] font-semibold">
                <span>Leer significado & práctica</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reto 7 Días Highlight Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#171614]/10 hover:border-[#BF953F]/40 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#BF953F]/10 text-xs font-semibold text-[#BF953F]">
            <Sun className="w-3.5 h-3.5" />
            <span>Reto de 7 Días · 50% Mente / 50% Cuerpo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] max-w-2xl mx-auto">
            Fluir Consciente: 10 Minutos al Día
          </h2>

          <p className="text-sm sm:text-base text-[#6E6962] max-w-xl mx-auto leading-relaxed">
            Una experiencia diaria guiada por audio para reajustar tu postura, desbloquear el diafragma y calmar la mente sin exigencias insostenibles.
          </p>

          <div className="pt-3">
            <button
              onClick={() => onNavigate('reto-7-dias')}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest bg-[#171614] hover:bg-[#BF953F] text-white rounded-full transition-all shadow-lg hover:scale-105 inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Inscribirme Gratis al Reto</span>
              <ArrowRight className="w-4 h-4 text-[#BF953F] group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

