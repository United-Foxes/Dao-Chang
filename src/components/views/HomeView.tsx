import React from 'react';
import { PILLARS } from '../../data/pillarsData';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Heart,
  Leaf,
  Sparkles,
  Sun
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenQuiz: () => void;
  onSelectTerm: (slug: string) => void;
}

const palette = {
  ink: '#171614',
  paper: '#FAF8F4',
  muted: '#6E6962',
  gold: '#BF953F',
  green: '#4F6B57',
  greenSoft: '#E8EEE8'
};

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuiz,
  onSelectTerm
}) => {
  return (
    <main className="bg-[#FAF8F4] text-[#171614]">
      {/* 01 — HERO: entering the territory */}
      <section className="relative min-h-[78vh] overflow-hidden border-b border-[#171614]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-[#4F6B57]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#BF953F]/8 blur-3xl" />
          <div className="absolute inset-y-8 left-1/2 hidden w-px -translate-x-1/2 bg-[#171614]/8 lg:block" />
        </div>

        <div className="absolute right-6 top-8 hidden h-[34rem] w-64 border border-[#4F6B57]/20 lg:block">
          <div className="absolute -right-3 top-16 h-24 w-24 border-r border-t border-[#BF953F]/45" />
          <div className="absolute bottom-16 -left-3 h-24 w-24 border-b border-l border-[#BF953F]/45" />
          <div className="absolute inset-x-10 top-1/2 h-px bg-[#4F6B57]/20" />
        </div>

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col justify-between border-r border-[#171614]/10 px-6 py-10 sm:px-10 lg:col-span-8 lg:px-16 lg:py-16">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F6B57]">
              <span className="h-px w-10 bg-[#4F6B57]" />
              <span>Dao Chang Consciente</span>
              <span className="text-[#BF953F]">/</span>
              <span>Fluir Consciente</span>
            </div>

            <div className="max-w-4xl py-16">
              <p className="mb-5 font-accent text-xl italic text-[#4F6B57] sm:text-2xl">
                Un camino hacia dentro.
              </p>
              <h1 className="font-display text-[clamp(4rem,9vw,8.6rem)] leading-[0.82] tracking-[-0.055em]">
                El Tao del
                <br />
                <span className="text-[#BF953F]">Corazón.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-base leading-8 text-[#6E6962] sm:text-lg">
                Dao Chang es camino y mapa: un territorio de práctica para observarte, habitarte y descubrir qué necesita crecer en ti.
                Mente, energía, cuerpo y vínculo no son destinos separados. Son puertas hacia un mismo centro.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => onNavigate('empieza-aqui')}
                  className="group inline-flex items-center gap-3 border-b border-[#171614] pb-2 text-sm font-semibold tracking-wide transition-colors hover:border-[#4F6B57] hover:text-[#4F6B57]"
                >
                  <span>Comenzar la exploración</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('reto-7-dias')}
                  className="inline-flex items-center gap-2 text-sm text-[#6E6962] transition-colors hover:text-[#BF953F]"
                >
                  <span>Probar el Reto de 7 Días</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[#171614]/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-[#6E6962]">
              <span>Presencia</span>
              <span className="text-[#BF953F]">•</span>
              <span>Práctica</span>
              <span className="text-[#4F6B57]">•</span>
              <span>Autodescubrimiento</span>
              <span className="text-[#BF953F]">•</span>
              <span>Fluir</span>
            </div>
          </div>

          <aside className="relative flex flex-col justify-between px-6 py-10 sm:px-10 lg:col-span-4 lg:px-10 lg:py-16">
            <div>
              <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#6E6962]">
                <Compass className="h-4 w-4 text-[#4F6B57]" />
                <span>El mapa</span>
              </div>
              <p className="font-accent text-2xl leading-snug text-[#171614]">
                No tienes que saber todavía hacia dónde ir.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#6E6962]">
                Empieza por reconocer dónde estás. El camino se abre desde ahí.
              </p>
            </div>

            <div className="relative my-12 flex justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#4F6B57]/30">
                <div className="absolute inset-4 rounded-full border border-[#BF953F]/35" />
                <div className="absolute inset-12 rounded-full border border-[#171614]/10" />
                <span className="font-display text-7xl text-[#171614]/85">道</span>
                <span className="absolute bottom-9 text-[9px] uppercase tracking-[0.3em] text-[#4F6B57]">camino</span>
              </div>
            </div>

            <div className="border-t border-[#171614]/10 pt-6">
              <p className="font-accent text-sm italic leading-6 text-[#6E6962]">
                “El mapa no camina por ti. Te ayuda a reconocerte mientras caminas.”
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* 02 — THE FOUR PATHS: one territory, four entrances */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F6B57]">
                Cuatro puertas · un territorio
              </p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl">
                Explora
                <br />
                <span className="text-[#BF953F]">en ti.</span>
              </h2>
              <p className="mt-7 max-w-sm text-sm leading-7 text-[#6E6962]">
                Cada vía comienza en un lugar distinto. Todas conducen a una relación más consciente contigo mismo y con la vida.
              </p>
            </div>

            <div className="relative lg:col-span-8">
              <div className="absolute left-4 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#4F6B57]/25 sm:block" />
              <div className="space-y-0">
                {PILLARS.map((pillar, idx) => (
                  <button
                    key={pillar.id}
                    onClick={() => onNavigate('pillar', pillar.id)}
                    className="group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-5 border-t border-[#171614]/10 py-8 text-left transition-all last:border-b hover:bg-white/60 sm:grid-cols-[3.5rem_1fr_auto] sm:pl-8"
                  >
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#4F6B57]/35 bg-[#FAF8F4] text-[10px] font-semibold text-[#4F6B57] transition-colors group-hover:border-[#BF953F] group-hover:text-[#BF953F]">
                      0{idx + 1}
                    </span>
                    <span>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#6E6962]">
                        {idx === 0 ? 'Mente' : idx === 1 ? 'Energía' : idx === 2 ? 'Cuerpo' : 'Vínculo'}
                        <span className="mx-2 text-[#BF953F]">/</span>
                        {pillar.element}
                      </span>
                      <span className="block font-display text-2xl leading-tight sm:text-3xl group-hover:text-[#4F6B57]">
                        {pillar.brandName}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-6 text-[#6E6962]">
                        {pillar.subName}
                      </span>
                      <span className="mt-4 block max-w-xl font-accent text-sm italic leading-6 text-[#171614]/70">
                        {pillar.tagline}
                      </span>
                    </span>
                    <ArrowRight className="mt-2 h-5 w-5 text-[#BF953F] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — BODY / ADAPTIVE FORCE statement */}
      <section className="border-y border-[#171614]/10 bg-[#4F6B57] text-[#FAF8F4]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="relative overflow-hidden border-b border-[#FAF8F4]/15 p-8 sm:p-12 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-16">
            <div className="absolute -bottom-16 -left-10 font-display text-[15rem] leading-none text-[#FAF8F4]/5">身</div>
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#E4C978]">Academia Cuerpo Consciente</p>
              <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl">
                Fuerza
                <br />
                <span className="text-[#E4C978]">adaptativa.</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-7 lg:p-16">
            <p className="max-w-2xl text-xl leading-9 sm:text-2xl">
              No buscamos una fuerza rígida. Buscamos un cuerpo que pueda sostener, ceder, desplazarse y volver al centro.
            </p>
            <p className="mt-7 max-w-xl text-sm leading-7 text-[#FAF8F4]/75">
              Movimiento funcional, movilidad y calma activa: la fuerza aparece cuando la estructura deja de luchar contra sí misma.
            </p>
            <button
              onClick={() => onNavigate('pillar', 'cuerpo')}
              className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-[#E4C978]/60 pb-2 text-sm font-semibold text-[#E4C978]"
            >
              <span>Entrar en Cuerpo Consciente</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 04 — SELF-DISCOVERY / DIAGNOSTIC */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F6B57]">
                <Sparkles className="h-4 w-4" />
                Una primera brújula
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                ¿Dónde estás
                <br />
                <span className="text-[#BF953F]">ahora?</span>
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#6E6962]">
                Un diagnóstico breve para observar mente, respiración, cuerpo y vínculos. No para ponerte una etiqueta, sino para ofrecerte un punto de partida.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <button
                  onClick={onOpenQuiz}
                  className="group inline-flex items-center gap-3 bg-[#171614] px-7 py-4 text-sm font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4F6B57]"
                >
                  <span>Encontrar mi punto de partida</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-[#6E6962]">5 preguntas · 2 minutos</span>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-sm border border-[#4F6B57]/25 p-5">
                <div className="border border-[#BF953F]/35 bg-white p-8">
                  <div className="mb-8 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#6E6962]">
                    <span>Mapa interior</span>
                    <span className="text-[#4F6B57]">01 / 04</span>
                  </div>
                  <div className="space-y-6">
                    {['Mente', 'Energía', 'Cuerpo', 'Vínculo'].map((label, idx) => (
                      <div key={label} className="flex items-center gap-4">
                        <span className={`h-2.5 w-2.5 rounded-full ${idx === 0 ? 'bg-[#4F6B57]' : idx === 1 ? 'bg-[#BF953F]' : 'bg-[#171614]/20'}`} />
                        <span className="text-sm text-[#171614]">{label}</span>
                        <span className="ml-auto h-px flex-1 bg-[#171614]/10" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 border-t border-[#171614]/10 pt-5 font-accent text-sm italic leading-6 text-[#6E6962]">
                    El punto de partida cambia. El camino sigue abierto.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — KNOWLEDGE / GLOSSARY */}
      <section className="border-t border-[#171614]/10 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 border-b border-[#171614]/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F6B57]">Mapa de sabiduría</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Glosario esencial</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#6E6962]">
                Conceptos para orientarte. Prácticas para llevarlos del mapa a la experiencia.
              </p>
            </div>
            <button
              onClick={() => onNavigate('glosario')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4F6B57]"
            >
              <span>Ver el mapa completo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-[#171614]/10 bg-[#171614]/10 sm:grid-cols-2 lg:grid-cols-3">
            {GLOSSARY_TERMS.slice(0, 6).map((term) => (
              <button
                key={term.slug}
                onClick={() => onSelectTerm(term.slug)}
                className="group bg-[#FAF8F4] p-7 text-left transition-colors hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl text-[#BF953F]">{term.chinese}</span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#6E6962]">{term.pinyin}</span>
                </div>
                <h3 className="mt-5 font-display text-xl group-hover:text-[#4F6B57]">{term.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#6E6962]">{term.shortDefinition}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4F6B57]">
                  <span>Entrar</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — GENTLE INVITATION */}
      <section className="border-t border-[#171614]/10 bg-[#171614] text-[#FAF8F4]">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <Heart className="h-5 w-5 text-[#E4C978]" />
          <p className="mt-6 font-accent text-xl italic text-[#E4C978]">El camino empieza donde estás.</p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            Haz espacio para
            <br />
            <span className="text-[#E4C978]">encontrarte.</span>
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#FAF8F4]/70">
            El Reto de 7 Días es una primera práctica: diez minutos al día para empezar a observar, sentir y mover algo dentro de ti.
          </p>
          <button
            onClick={() => onNavigate('reto-7-dias')}
            className="group mt-9 inline-flex items-center gap-3 border border-[#E4C978]/60 px-7 py-4 text-sm font-semibold text-[#E4C978] transition-colors hover:bg-[#E4C978] hover:text-[#171614]"
          >
            <span>Comenzar el Reto de 7 Días</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-[#FAF8F4]/40">
            <Leaf className="h-3.5 w-3.5" />
            <span>Bienestar · Conexión · Consciencia · Equilibrio · Evolución</span>
            <Sun className="h-3.5 w-3.5" />
          </div>
        </div>
      </section>
    </main>
  );
};
