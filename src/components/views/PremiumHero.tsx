import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PILLARS } from '../../data/pillarsData';
import { BrandLogo } from '../brand/BrandLogo';

interface PremiumHeroProps {
  onNavigate: (view: string, param?: string) => void;
}

const GOLD = '#C49A3A';

export const PremiumHero: React.FC<PremiumHeroProps> = ({ onNavigate }) => (
  <section className="relative overflow-hidden border-b border-[#203D32]/10 bg-[#dce9df]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_35%,rgba(255,250,235,.98),rgba(247,244,236,.88)_30%,transparent_53%),linear-gradient(112deg,#f7f4ec_0%,#e9eee4_34%,#8eafa2_61%,#365f54_100%)]" />
    <div className="absolute inset-0 opacity-70" style={{background:'radial-gradient(ellipse at 74% 50%,rgba(245,225,167,.55),transparent 24%),radial-gradient(ellipse at 80% 72%,rgba(75,151,143,.7),transparent 38%)'}} />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 820" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="hero-current" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#F7F4EC" stopOpacity=".08"/><stop offset=".32" stopColor="#F3E3AA" stopOpacity=".82"/><stop offset=".62" stopColor="#B8E5DC" stopOpacity=".9"/><stop offset="1" stopColor="#D6F0E7" stopOpacity=".18"/></linearGradient></defs>
      <g fill="none" stroke="url(#hero-current)" strokeLinecap="round">
        <path d="M330 160 C560 55 690 265 850 215 C1030 158 1050 35 1250 105 C1430 168 1510 260 1600 210" strokeWidth="7"/>
        <path d="M350 198 C580 90 700 295 865 248 C1040 200 1090 78 1280 142 C1440 195 1515 302 1600 260" strokeWidth="3.5"/>
        <path d="M390 232 C610 130 735 330 885 278 C1050 222 1140 130 1320 185 C1460 230 1530 350 1600 320" strokeWidth="2.4"/>
        <path d="M470 490 C700 350 845 425 1000 500 C1160 580 1280 610 1425 530 C1515 480 1560 525 1600 565" strokeWidth="11" opacity=".62"/>
        <path d="M455 535 C700 395 850 475 1015 540 C1160 600 1300 650 1440 570 C1525 520 1570 565 1600 610" strokeWidth="5"/>
        <path d="M440 575 C690 435 850 520 1030 575 C1190 625 1310 690 1460 610 C1530 575 1570 605 1600 650" strokeWidth="2.2"/>
      </g>
      <g fill="none" stroke="#F7E9B8" strokeWidth="2" opacity=".72"><path d="M650 285 C810 205 905 300 1035 270 C1180 238 1230 325 1380 300 C1490 280 1550 325 1600 350"/><path d="M675 315 C825 245 915 330 1048 300 C1190 270 1250 355 1390 330 C1500 310 1560 355 1600 380"/></g>
      <g opacity=".65"><path d="M1210 0 C1260 90 1240 180 1200 250" fill="none" stroke="#426B58" strokeWidth="9"/><path d="M1215 80 C1290 25 1360 28 1410 60 C1360 112 1280 120 1215 80Z" fill="#557C63"/><path d="M1205 160 C1280 112 1350 120 1390 160 C1330 202 1260 205 1205 160Z" fill="#557C63"/></g>
    </svg>

    <div className="relative z-10 mx-auto grid min-h-[min(780px,calc(100vh-120px))] max-w-[1600px] grid-cols-12 px-6 sm:px-10 lg:px-16">
      <div className="col-span-12 flex items-center lg:col-span-7"><div className="max-w-2xl py-20 lg:py-24">
        <p className="font-accent text-lg italic text-[#2F5C4D]">Un camino hacia dentro.</p>
        <h1 className="mt-4 font-display text-[clamp(4.4rem,8vw,8.8rem)] leading-[.84] tracking-[-.055em] text-[#183B30]">El Tao del<br/><span style={{color:GOLD}}>Corazón.</span></h1>
        <div className="mt-8 h-px w-16 bg-[#C49A3A]" />
        <p className="mt-7 max-w-xl text-base leading-8 text-[#31473D] sm:text-lg">Dao Chang es camino y mapa: un territorio de práctica para observarte, habitarte y descubrir qué necesita crecer en ti. Mente, energía, cuerpo y vínculo no son destinos separados. Son puertas hacia un mismo centro.</p>
        <div className="mt-9 flex flex-wrap items-center gap-5"><button onClick={() => onNavigate('empieza-aqui')} className="group rounded-full bg-[#315A49] px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#234839]">Comenzar la exploración <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1"/></button><button onClick={() => onNavigate('reto-7-dias')} className="border-b border-[#C49A3A] px-1 py-3 text-sm font-semibold tracking-wide text-[#31473D]">Probar el Reto de 7 Días</button></div>
      </div></div>
      <div className="col-span-12 flex items-center justify-end pb-24 lg:col-span-5 lg:pb-0"><div className="max-w-sm border-l border-[#C49A3A]/75 pl-7"><p className="font-accent text-xl italic leading-relaxed text-[#29463B]">No tienes que saber todavía hacia dónde ir.<br/><br/>Empieza por reconocer dónde estás.<br/><br/>El camino se abre desde ahí.</p><div className="mt-8 flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C49A3A] bg-[#F7F4EC]/65 font-serif text-2xl text-[#315A49]">道</span><span className="text-[10px] uppercase tracking-[.28em] text-[#65756D]">Camino</span></div></div></div>
    </div>

    <div className="absolute bottom-[145px] right-[8%] z-10 hidden h-48 w-[470px] md:block" aria-hidden="true"><svg viewBox="0 0 470 210" className="h-full w-full"><g fill="#49473F"><path d="M48 110 C74 76 124 70 172 82 C208 91 240 102 268 112 C237 132 197 143 150 139 C106 136 72 129 48 110Z"/><ellipse cx="54" cy="107" rx="18" ry="14"/><path d="M177 82 C191 58 213 47 229 58 C237 64 237 76 229 87 C214 100 194 99 177 82Z"/><path d="M262 112 C294 126 324 138 347 154 C328 160 302 157 279 145 C263 137 253 125 262 112Z"/><circle cx="51" cy="104" r="2.8" fill="#EDE7D8"/></g><g fill="#3D3B36"><path d="M250 150 C277 122 323 119 363 131 C395 141 423 152 447 163 C414 180 375 184 335 178 C299 173 270 165 250 150Z"/><ellipse cx="252" cy="148" rx="16" ry="13"/><path d="M366 132 C380 111 400 104 414 113 C421 118 421 129 413 138 C401 148 382 147 366 132Z"/><path d="M444 163 C455 166 463 170 469 176 C456 182 447 179 438 172Z"/><circle cx="249" cy="145" r="2.5" fill="#EDE7D8"/></g><g fill="none" stroke="#E8DEC0" strokeWidth="2" opacity=".8"><ellipse cx="150" cy="113" rx="120" ry="46"/><ellipse cx="354" cy="154" rx="96" ry="38"/></g></svg></div>

    <div className="relative z-20 border-t border-white/45 bg-[#F7F4EC]/82 backdrop-blur-md"><div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">{PILLARS.map((pillar, idx) => <button key={pillar.id} onClick={() => onNavigate('pillar', pillar.id)} className={`group flex min-h-[132px] items-center gap-4 px-6 py-5 text-left transition hover:bg-white/35 ${idx < 3 ? 'lg:border-r border-[#24342D]/15' : ''}`}><div className="shrink-0"><BrandLogo variant={pillar.id} size="md" showWordmark={false}/></div><div><div className="text-[10px] uppercase tracking-[.25em] text-[#6C766F]">{pillar.element}</div><div className="mt-1 font-display text-lg text-[#203D32] group-hover:text-[#C49A3A]">{pillar.brandName}</div><div className="mt-1 text-xs leading-relaxed text-[#526159]">{pillar.subName}</div></div></button>)}</div></div>
  </section>
);
