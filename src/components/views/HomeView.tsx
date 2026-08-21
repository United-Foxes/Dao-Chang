import React from 'react';
import { PILLARS } from '../../data/pillarsData';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Sun } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenQuiz: () => void;
  onSelectTerm: (slug: string) => void;
}

const GOLD = '#C49A3A';
const GREEN = '#486B59';
const DEEP_GREEN = '#203D32';
const CREAM = '#F7F4EC';

const EnergyMark: React.FC = () => (
  <svg viewBox="0 0 92 110" className="h-20 w-16 sm:h-24 sm:w-20" aria-label="Zendo Energía Consciente">
    <ellipse cx="46" cy="55" rx="34" ry="49" fill="none" stroke={GOLD} strokeWidth="2.4" />
    <g stroke={GOLD} strokeWidth="1.4" strokeLinecap="round">
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (-110 + i * (220 / 23)) * Math.PI / 180;
        return <line key={i} x1={46 + Math.cos(a) * 30} y1={56 + Math.sin(a) * 44} x2={46 + Math.cos(a) * 24} y2={56 + Math.sin(a) * 36} />;
      })}
    </g>
    <circle cx="46" cy="30" r="6" fill="#171614" />
    <path d="M39 37 C34 43 34 53 38 60 L40 72 L35 91 C34 95 38 97 40 93 L46 77 L52 93 C54 97 58 95 57 91 L52 72 L54 60 C58 53 58 43 53 37 C49 35 43 35 39 37Z" fill="#171614" />
    <path d="M40 47 L32 59 M52 47 L60 59" stroke="#171614" strokeWidth="5" strokeLinecap="round" />
    <path d="M42 51 C46 46 50 46 54 51 C50 57 46 59 42 51Z" fill={GOLD} />
  </svg>
);

const PillarMark: React.FC<{ index: number }> = ({ index }) => {
  if (index === 1) return <EnergyMark />;
  if (index === 0) return <div className="flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-[#52725F] border-r-transparent"><span className="text-2xl text-[#3E5E4F]">☯</span></div>;
  if (index === 2) return <div className="flex h-16 w-20 items-center justify-center"><svg viewBox="0 0 90 60" className="h-full w-full"><path d="M12 45 C20 24 32 18 44 28 C50 12 65 12 68 27 C78 22 84 30 76 39 C65 52 39 52 12 45Z" fill="none" stroke="#3E5E4F" strokeWidth="3" strokeLinecap="round" /><circle cx="43" cy="29" r="3" fill={GOLD} /></svg></div>;
  return <div className="flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-[#B59A56]"><span className="text-2xl text-[#3E5E4F]">∞</span></div>;
};

const WaterArtwork: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(255,250,222,.9),transparent_28%),linear-gradient(115deg,#edf1df_0%,#dbe8dd_32%,#7ca6a0_58%,#345e57_100%)]" />
    <div className="absolute inset-y-0 right-0 w-[72%] opacity-80" style={{ background: 'radial-gradient(ellipse at 55% 55%, rgba(104,169,165,.95) 0%, rgba(54,103,96,.75) 36%, rgba(20,55,47,.75) 76%, transparent 100%)' }} />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 760" preserveAspectRatio="none">
      <defs><linearGradient id="current" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F8F1D6" stopOpacity="0"/><stop offset=".35" stopColor="#F5E5A8" stopOpacity=".75"/><stop offset=".62" stopColor="#8FD3CC" stopOpacity=".9"/><stop offset="1" stopColor="#B7E6DD" stopOpacity=".15"/></linearGradient></defs>
      <g fill="none" stroke="url(#current)" strokeLinecap="round">
        <path d="M360 105 C610 20 690 220 850 185 C1040 145 1010 25 1260 90 C1430 135 1500 225 1600 195" strokeWidth="8" opacity=".62"/>
        <path d="M390 140 C610 55 720 245 860 205 C1050 150 1070 55 1280 120 C1440 170 1510 270 1600 235" strokeWidth="4" opacity=".82"/>
        <path d="M410 172 C640 100 710 270 875 228 C1050 185 1110 90 1310 155 C1450 205 1530 310 1600 280" strokeWidth="3" opacity=".72"/>
        <path d="M560 420 C760 310 875 380 1000 445 C1120 508 1230 530 1390 460 C1490 415 1550 470 1600 520" strokeWidth="10" opacity=".58"/>
        <path d="M520 460 C750 350 850 425 1005 482 C1130 528 1240 570 1410 505 C1500 470 1560 520 1600 565" strokeWidth="5" opacity=".8"/>
        <path d="M480 500 C710 390 840 470 1010 520 C1160 565 1280 610 1440 545 C1520 515 1570 555 1600 590" strokeWidth="2" opacity=".8"/>
      </g>
      <g fill="none" stroke="#F6E6B0" strokeWidth="2" opacity=".7"><path d="M660 240 C820 165 900 250 1030 230 C1180 205 1220 300 1370 275 C1480 257 1540 300 1600 320"/><path d="M690 270 C830 210 910 285 1045 260 C1190 235 1240 325 1380 300 C1490 280 1550 325 1600 345"/></g>
    </svg>
    <svg className="absolute right-[7%] top-[48%] h-[210px] w-[470px] opacity-90" viewBox="0 0 470 210">
      <g fill="#433F37"><path d="M48 110 C74 76 124 70 172 82 C208 91 240 102 268 112 C237 132 197 143 150 139 C106 136 72 129 48 110Z"/><ellipse cx="54" cy="107" rx="18" ry="14"/><path d="M177 82 C191 58 213 47 229 58 C237 64 237 76 229 87 C214 100 194 99 177 82Z"/><path d="M262 112 C294 126 324 138 347 154 C328 160 302 157 279 145 C263 137 253 125 262 112Z"/><circle cx="51" cy="104" r="2.8" fill="#E8E2D2"/></g>
      <g fill="#3B3934"><path d="M250 150 C277 122 323 119 363 131 C395 141 423 152 447 163 C414 180 375 184 335 178 C299 173 270 165 250 150Z"/><ellipse cx="252" cy="148" rx="16" ry="13"/><path d="M366 132 C380 111 400 104 414 113 C421 118 421 129 413 138 C401 148 382 147 366 132Z"/><path d="M444 163 C455 166 463 170 469 176 C456 182 447 179 438 172Z"/><circle cx="249" cy="145" r="2.5" fill="#E8E2D2"/></g>
      <g fill="none" stroke="#E9E0C7" strokeWidth="2" opacity=".8"><ellipse cx="150" cy="113" rx="120" ry="46"/><ellipse cx="354" cy="154" rx="96" ry="38"/></g>
    </svg>
    <svg className="absolute left-0 top-0 h-full w-48 opacity-70" viewBox="0 0 190 760" preserveAspectRatio="none"><g fill="none" stroke="#557A61" strokeWidth="8" strokeLinecap="round"><path d="M36 760 C45 610 28 430 48 260 C56 185 45 92 62 10"/><path d="M92 760 C105 570 78 440 103 300 C119 210 103 120 123 48"/></g><g fill="#6F9275" opacity=".8"><path d="M55 170 C18 140 8 108 16 91 C51 100 73 126 55 170Z"/><path d="M48 265 C12 250 0 220 6 204 C38 207 61 228 48 265Z"/><path d="M101 340 C141 300 165 294 179 304 C159 339 129 351 101 340Z"/><path d="M98 475 C58 444 43 416 51 400 C86 409 107 435 98 475Z"/><path d="M125 160 C151 126 173 116 186 124 C176 153 154 170 125 160Z"/></g></svg>
    <svg className="absolute right-0 top-0 h-52 w-56 opacity-65" viewBox="0 0 230 210"><g fill="#5E8267"><path d="M130 0 C150 55 150 105 128 160" stroke="#557A61" strokeWidth="7" fill="none"/><path d="M135 54 C174 22 207 18 226 30 C208 60 171 72 135 54Z"/><path d="M130 95 C169 73 201 78 218 94 C197 119 160 120 130 95Z"/><path d="M126 145 C158 129 192 137 207 155 C182 177 150 172 126 145Z"/></g></svg>
  </div>
);

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuiz, onSelectTerm }) => (
  <div className="space-y-16 pb-16 bg-[#F7F4EC] text-[#24342D]">
    <section className="relative min-h-[760px] overflow-hidden border-b border-[#24342D]/10">
      <WaterArtwork />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EC] via-[#F7F4EC]/92 via-40% to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 lg:grid-cols-12 px-6 sm:px-10 lg:px-12">
        <div className="lg:col-span-7 flex flex-col justify-center py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 font-accent text-lg sm:text-xl italic text-[#486B59]">Un camino hacia dentro.</p>
            <h1 className="font-display text-6xl leading-[.9] tracking-[-.045em] text-[#203D32] sm:text-7xl lg:text-[7.2rem]">El Tao del<br/><span className="text-[#C49A3A]">Corazón.</span></h1>
            <div className="mt-7 h-px w-16 bg-[#C49A3A]" />
            <p className="mt-7 max-w-xl text-base leading-8 text-[#40534A] sm:text-lg">Dao Chang es camino y mapa: un territorio de práctica para observarte, habitarte y descubrir qué necesita crecer en ti. Mente, energía, cuerpo y vínculo no son destinos separados. Son puertas hacia un mismo centro.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5"><button onClick={() => onNavigate('empieza-aqui')} className="group rounded-full bg-[#3F604F] px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#294A3B]">Comenzar la exploración <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1"/></button><button onClick={() => onNavigate('reto-7-dias')} className="border-b border-[#C49A3A] px-1 py-3 text-sm font-semibold tracking-wide text-[#31473D] hover:text-[#C49A3A]">Probar el Reto de 7 Días</button></div>
          </div>
        </div>
        <div className="lg:col-span-5 flex items-center justify-end pb-20 lg:pb-0"><div className="max-w-xs border-l border-[#C49A3A]/70 pl-7 text-[#24342D] sm:max-w-sm"><p className="font-accent text-xl italic leading-relaxed text-[#344A40]">No tienes que saber todavía hacia dónde ir.<br/><br/>Empieza por reconocer dónde estás.<br/><br/>El camino se abre desde ahí.</p><div className="mt-8 flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C49A3A] bg-[#F7F4EC]/70 font-serif text-2xl text-[#3E5E4F]">道</span><span className="text-[10px] uppercase tracking-[.28em] text-[#6C766F]">Camino</span></div></div></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/30 bg-[#F7F4EC]/78 backdrop-blur-md"><div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">{PILLARS.map((pillar, idx) => <button key={pillar.id} onClick={() => onNavigate('pillar', pillar.id)} className={`group flex min-h-[132px] items-center gap-4 px-6 py-5 text-left transition hover:bg-white/35 ${idx < 3 ? 'lg:border-r border-[#24342D]/15' : ''}`}><div className="shrink-0"><PillarMark index={idx}/></div><div><div className="text-[10px] uppercase tracking-[.25em] text-[#6C766F]">{pillar.element}</div><div className="mt-1 font-display text-lg text-[#203D32] group-hover:text-[#C49A3A]">{pillar.brandName}</div><div className="mt-1 text-xs leading-relaxed text-[#526159]">{pillar.subName}</div></div></button>)}</div></div>
    </section>

    <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"><div className="grid gap-8 rounded-3xl border border-[#3F604F]/20 bg-[#203D32] p-8 text-[#F7F4EC] shadow-xl sm:p-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center"><div><div className="inline-flex items-center gap-2 rounded-full border border-[#C49A3A]/40 bg-[#C49A3A]/10 px-4 py-1.5 text-xs font-semibold text-[#E2C878]"><Sparkles className="h-3.5 w-3.5"/> Exploración guiada</div><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Un mapa para reconocerte mientras caminas.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">El sitio no pretende decirte quién eres. Abre puertas para que observes, practiques y descubras por experiencia propia qué necesita tu atención.</p></div><div className="flex justify-start lg:justify-end"><button onClick={onOpenQuiz} className="rounded-full bg-[#C49A3A] px-7 py-4 text-sm font-bold text-[#203D32] transition hover:bg-[#D5B55F]">Hacer el test <ArrowRight className="ml-2 inline h-4 w-4"/></button></div></div></section>

    <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"><div className="flex flex-col justify-between gap-4 border-b border-[#24342D]/10 pb-5 md:flex-row md:items-end"><div><div className="text-[10px] font-bold uppercase tracking-[.25em] text-[#486B59]">Glosario</div><h2 className="mt-1 font-display text-4xl text-[#203D32]">Palabras para entrar en el camino</h2></div><button onClick={() => onNavigate('glosario')} className="text-sm font-semibold text-[#486B59] hover:text-[#C49A3A]">Ver glosario completo <ArrowRight className="ml-1 inline h-4 w-4"/></button></div><div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{GLOSSARY_TERMS.slice(0,6).map(term => <button key={term.slug} onClick={() => onSelectTerm(term.slug)} className="group rounded-2xl border border-[#24342D]/10 bg-white/55 p-6 text-left transition hover:-translate-y-1 hover:border-[#C49A3A]/60 hover:bg-white"><div className="flex items-center justify-between"><span className="font-serif text-3xl text-[#C49A3A]">{term.chinese}</span><span className="text-[10px] font-bold uppercase tracking-widest text-[#718078]">{term.pinyin}</span></div><h3 className="mt-5 font-display text-xl text-[#203D32] group-hover:text-[#486B59]">{term.title}</h3><p className="mt-2 text-sm leading-6 text-[#607069]">{term.shortDefinition}</p><div className="mt-5 border-t border-[#24342D]/10 pt-4 text-xs font-semibold text-[#486B59]">Explorar <ChevronRight className="inline h-4 w-4 transition group-hover:translate-x-1"/></div></button>)}</div></section>

    <section className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12"><div className="rounded-3xl border border-[#C49A3A]/30 bg-[#F1E9D8] p-8 text-center sm:p-12"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#C49A3A] text-[#C49A3A]"><Sun className="h-5 w-5"/></div><h2 className="mt-5 font-display text-4xl text-[#203D32] sm:text-5xl">Reto de 7 Días</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#59685F] sm:text-base">Una primera experiencia breve para empezar a observar cómo mente, energía, cuerpo y vínculo pueden conversar en una misma dirección.</p><button onClick={() => onNavigate('reto-7-dias')} className="mt-7 rounded-full bg-[#3F604F] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#294A3B]">Comenzar <ArrowRight className="ml-2 inline h-4 w-4"/></button></div></section>

    <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"><div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[.2em] text-[#6B786F]"><ShieldCheck className="h-4 w-4 text-[#486B59]"/> Práctica responsable · seguridad antes que intensidad</div></section>
  </div>
);
