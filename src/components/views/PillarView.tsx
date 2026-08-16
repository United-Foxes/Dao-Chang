import React, { useState } from 'react';
import { PILLARS } from '../../data/pillarsData';
import { PillarId, Practice } from '../../types';
import { BrandLogo } from '../brand/BrandLogo';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import {
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  ShieldCheck,
  Download,
  Users,
  ChevronRight
} from 'lucide-react';

interface PillarViewProps {
  pillarId: PillarId;
  onNavigateToPillar: (pillarId: PillarId) => void;
  onNavigateToGlossaryTerm: (slug: string) => void;
  onJoinChallenge: () => void;
}

export const PillarView: React.FC<PillarViewProps> = ({
  pillarId,
  onNavigateToPillar,
  onNavigateToGlossaryTerm,
  onJoinChallenge
}) => {
  const pillar = PILLARS.find((p) => p.id === pillarId) || PILLARS[0];
  const [activePracticeModal, setActivePracticeModal] = useState<Practice | null>(null);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Pillar Lead Magnet Form State
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Timer interval
  React.useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleStartPractice = (practice: Practice) => {
    setActivePracticeModal(practice);
    setTimerSeconds(0);
    setTimerRunning(false);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim() || !leadEmail.includes('@')) return;
    setLeadSubmitted(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Pillar Switcher Ribbon */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-[#171614]/10">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#6E6962] mr-2">
          Los 4 Caminos:
        </span>
        {PILLARS.map((p) => (
          <button
            key={p.id}
            onClick={() => onNavigateToPillar(p.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              p.id === pillar.id
                ? 'bg-[#171614] text-[#FAF8F4] shadow-xs'
                : 'bg-white text-[#6E6962] hover:text-[#171614] border border-[#171614]/10'
            }`}
          >
            <BrandLogo variant={p.id} size="sm" showWordmark={false} />
            <span>{p.brandName}</span>
          </button>
        ))}
      </div>

      {/* Hero Header for this Sub-brand */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-center">
          <BrandLogo variant={pillar.id} size="lg" stacked={true} />
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
          {pillar.tagline}
        </h1>

        <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed font-sans">
          {pillar.description}
        </p>
      </div>

      {/* 2-Column: Para Quién es & Principios Esenciales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
            <Users className="w-4 h-4" />
            <span>¿Para Quién es este Camino?</span>
          </div>
          <h3 className="text-xl font-display font-medium text-[#171614]">
            Diseñado para personas que experimentan:
          </h3>
          <ul className="space-y-3 pt-2">
            {pillar.targetAudience.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171614]">
                <CheckCircle2 className="w-4 h-4 text-[#BF953F] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
            <Compass className="w-4 h-4" />
            <span>Principios Fundamentales</span>
          </div>
          <h3 className="text-xl font-display font-medium text-[#171614]">
            La Sabiduría Daoísta del Camino:
          </h3>
          <ul className="space-y-3 pt-2">
            {pillar.corePrinciples.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171614]">
                <span className="w-5 h-5 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed font-accent italic text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sample Interactive Guided Practices (3-4 Sample Practices) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
              Prácticas Gratuitas de Muestra
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#171614] mt-1">
              Comienza a Entrenar Ahora Mismo
            </h2>
          </div>
          <span className="text-xs text-[#6E6962]">
            Haz clic en "Iniciar Práctica" para seguir el temporizador y los pasos guiados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillar.practices.map((practice) => (
            <div
              key={practice.id}
              className="bg-white border border-[#171614]/10 hover:border-[#BF953F] rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#BF953F] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{practice.duration}</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#FAF8F4] text-[#6E6962]">
                    {practice.level}
                  </span>
                </div>

                <h3 className="text-base font-display font-medium text-[#171614]">
                  {practice.title}
                </h3>

                <p className="text-xs text-[#6E6962] leading-relaxed">
                  {practice.description}
                </p>

                <div className="p-2.5 rounded-lg bg-[#FAF8F4] border border-[#171614]/5 text-[11px] text-[#171614]">
                  <strong className="text-[#BF953F] block mb-0.5">Beneficio Biológico:</strong>
                  {practice.keyBenefit}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#171614]/5">
                <button
                  onClick={() => handleStartPractice(practice)}
                  className="w-full py-2 px-3 text-xs font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Realizar Práctica Guiada</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar-Specific High-Converting Lead Magnet */}
      <div className="bg-[#171614] text-[#FAF8F4] border border-[#BF953F]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BF953F]/20 text-xs font-semibold text-[#BF953F]">
              <Download className="w-3.5 h-3.5" />
              <span>Recurso Exclusivo de {pillar.brandName}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#FAF8F4] leading-tight">
              {pillar.leadMagnet.title}
            </h2>

            <p className="text-sm text-[#FAF8F4]/80 leading-relaxed font-sans">
              {pillar.leadMagnet.description} Entregado de forma inmediata a tu correo junto con las instrucciones de uso para integrar en tu rutina diaria.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#FAF8F4]/60 pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#BF953F]" />
                <span>Formato: {pillar.leadMagnet.format}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BF953F]" />
                <span>100% Gratuito</span>
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#FAF8F4] text-[#171614] p-6 sm:p-8 rounded-2xl border border-[#BF953F]/40 shadow-lg">
            {!leadSubmitted ? (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <h4 className="text-base font-display font-medium text-[#171614]">
                  Solicitar Acceso Inmediato
                </h4>

                <div>
                  <label htmlFor="pillar-lead-name" className="block text-xs font-semibold text-[#171614] mb-1">
                    Tu Nombre
                  </label>
                  <input
                    id="pillar-lead-name"
                    type="text"
                    required
                    placeholder="Ej. Lucas"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#171614]/20 rounded-lg focus:outline-hidden focus:border-[#BF953F]"
                  />
                </div>

                <div>
                  <label htmlFor="pillar-lead-email" className="block text-xs font-semibold text-[#171614] mb-1">
                    Tu Correo Electrónico
                  </label>
                  <input
                    id="pillar-lead-email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#171614]/20 rounded-lg focus:outline-hidden focus:border-[#BF953F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs sm:text-sm font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{pillar.leadMagnet.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#BF953F]" />
                </button>

                <div className="text-[11px] text-[#6E6962] text-center">
                  Al registrarte también recibes acceso al Reto de 7 Días Fluir Consciente.
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-medium text-[#171614]">
                  ¡Recurso enviado a {leadEmail}!
                </h4>
                <p className="text-xs text-[#6E6962]">
                  Revisa tu bandeja de entrada para descargar tu <strong>{pillar.leadMagnet.title}</strong> y comenzar tu práctica.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Glossary Terms */}
      <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
          <BookOpen className="w-4 h-4" />
          <span>Glosario Relacionado con {pillar.brandName}</span>
        </div>
        <h3 className="text-xl font-display font-medium text-[#171614]">
          Profundiza en la Filosofía de este Pilar:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {pillar.recommendedGlossarySlugs.map((slug) => {
            const term = GLOSSARY_TERMS.find((t) => t.slug === slug);
            if (!term) return null;
            return (
              <button
                key={slug}
                onClick={() => onNavigateToGlossaryTerm(slug)}
                className="p-3 rounded-xl border border-[#171614]/10 hover:border-[#BF953F] hover:bg-[#BF953F]/10 text-left transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-sm text-[#BF953F]">{term.chinese}</span>
                    <span className="text-xs font-semibold text-[#171614] group-hover:text-[#BF953F] transition-colors">
                      {term.title}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6E6962] line-clamp-1 mt-0.5">
                    {term.shortDefinition}
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#BF953F]" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Practice Step-by-Step Modal */}
      {activePracticeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="practice-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171614]/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-[#FAF8F4] border border-[#BF953F]/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#171614]">
            <div className="p-6 bg-white border-b border-[#171614]/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
                  Sesión Guiada · {pillar.brandName}
                </span>
                <h3 id="practice-modal-title" className="text-xl font-display font-medium text-[#171614]">
                  {activePracticeModal.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setActivePracticeModal(null);
                  setTimerRunning(false);
                }}
                className="p-1.5 text-[#6E6962] hover:text-[#171614] rounded-lg hover:bg-[#171614]/5"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Practice Timer */}
              <div className="bg-[#171614] text-[#FAF8F4] rounded-2xl p-5 text-center space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#BF953F] font-semibold">
                  Temporizador de Presencia
                </div>
                <div className="text-4xl sm:text-5xl font-mono font-bold tracking-wider text-[#FAF8F4]">
                  {formatTime(timerSeconds)}
                </div>
                <div className="flex items-center justify-center gap-3 pt-1">
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="py-1.5 px-4 rounded-lg bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{timerRunning ? 'Pausar' : 'Iniciar'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimerSeconds(0);
                    }}
                    className="py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF8F4] text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reiniciar</span>
                  </button>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#171614]">
                  Pasos de la Práctica:
                </h4>
                <div className="space-y-2.5">
                  {activePracticeModal.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#171614]/10 text-xs sm:text-sm text-[#171614]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefit reminder */}
              <div className="bg-[#BF953F]/10 border border-[#BF953F]/20 p-3.5 rounded-xl text-xs text-[#171614]">
                <strong className="text-[#BF953F] block mb-0.5">Efecto en tu fisiología:</strong>
                {activePracticeModal.keyBenefit}
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#171614]/10 flex items-center justify-between">
              <span className="text-xs text-[#6E6962]">
                Recomendación: Practicar a diario durante 7 días consecutivos.
              </span>
              <button
                onClick={() => {
                  setActivePracticeModal(null);
                  setTimerRunning(false);
                }}
                className="px-4 py-2 text-xs font-semibold bg-[#171614] text-[#FAF8F4] rounded-lg"
              >
                Completar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
