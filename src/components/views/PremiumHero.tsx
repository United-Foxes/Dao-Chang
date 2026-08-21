import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PILLARS } from '../../data/pillarsData';
import { BrandLogo } from '../brand/BrandLogo';

interface PremiumHeroProps {
  onNavigate: (view: string, param?: string) => void;
}

const GOLD = '#C49A3A';
const HERO_ART = 'https://raw.githubusercontent.com/United-Foxes/Dao-Chang/main/public/dao-chang-hero-premium.svg';

export const PremiumHero: React.FC<PremiumHeroProps> = ({ onNavigate }) => (
  <section className="relative overflow-hidden border-b border-[#203D32]/10 bg-[#F7F4EC]">
    {/* Designed artwork: use the approved river / otter composition instead of the previous abstract recreation. */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_ART})` }}
      aria-hidden="true"
    />
    {/* Preserve the cream reading field of the design over the left copy area. */}
    <div
      className="absolute inset-y-0 left-0 w-[58%]"
      style={{ background: 'linear-gradient(90deg, rgba(247,244,236,.98) 0%, rgba(247,244,236,.94) 48%, rgba(247,244,236,.58) 78%, rgba(247,244,236,0) 100%)' }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F4EC]/35" aria-hidden="true" />

    <div className="relative z-10 mx-auto grid min-h-[min(690px,calc(100vh-120px))] max-w-[1600px] grid-cols-12 px-6 sm:px-10 lg:px-16">
      <div className="col-span-12 flex items-center lg:col-span-7">
        <div className="max-w-2xl py-20 lg:py-24">
          <p className="font-accent text-lg italic text-[#2F5C4D]">Un camino hacia dentro.</p>
          <h1 className="mt-4 font-display text-[clamp(4.4rem,8vw,8.8rem)] leading-[.84] tracking-[-.055em] text-[#183B30]">
            El Tao del<br/><span style={{ color: GOLD }}>Corazón.</span>
          </h1>
          <div className="mt-8 h-px w-16 bg-[#C49A3A]" />
          <p className="mt-7 max-w-xl text-base leading-8 text-[#31473D] sm:text-lg">
            Dao Chang es camino y mapa: un territorio de práctica para observarte, habitarte y descubrir qué necesita crecer en ti. Mente, energía, cuerpo y vínculo no son destinos separados. Son puertas hacia un mismo centro.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button onClick={() => onNavigate('empieza-aqui')} className="group rounded-full bg-[#315A49] px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#234839]">
              Comenzar la exploración <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1"/>
            </button>
            <button onClick={() => onNavigate('reto-7-dias')} className="border-b border-[#C49A3A] px-1 py-3 text-sm font-semibold tracking-wide text-[#31473D]">
              Probar el Reto de 7 Días
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-12 flex items-center justify-end pb-24 lg:col-span-5 lg:pb-0">
        <div className="max-w-sm border-l border-[#C49A3A]/75 pl-7">
          <p className="font-accent text-xl italic leading-relaxed text-[#29463B]">
            No tienes que saber todavía hacia dónde ir.<br/><br/>
            Empieza por reconocer dónde estás.<br/><br/>
            El camino se abre desde ahí.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C49A3A] bg-[#F7F4EC]/70 font-serif text-2xl text-[#315A49]">道</span>
            <span className="text-[10px] uppercase tracking-[.28em] text-[#65756D]">Camino</span>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-20 border-t border-white/45 bg-[#F7F4EC]/82 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, idx) => (
          <button
            key={pillar.id}
            onClick={() => onNavigate('pillar', pillar.id)}
            className={`group flex min-h-[132px] items-center gap-4 px-6 py-5 text-left transition hover:bg-white/35 ${idx < 3 ? 'lg:border-r border-[#24342D]/15' : ''}`}
          >
            <div className="shrink-0"><BrandLogo variant={pillar.id} size="md" showWordmark={false}/></div>
            <div>
              <div className="text-[10px] uppercase tracking-[.25em] text-[#6C766F]">{pillar.element}</div>
              <div className="mt-1 font-display text-lg text-[#203D32] group-hover:text-[#C49A3A]">{pillar.brandName}</div>
              <div className="mt-1 text-xs leading-relaxed text-[#526159]">{pillar.subName}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);
