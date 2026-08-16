import React, { useState } from 'react';
import { CHALLENGE_DAYS, EMAIL_SEQUENCE } from '../../data/challengeData';
import { BrandLogo } from '../brand/BrandLogo';
import { EmailSequenceViewer } from '../common/EmailSequenceViewer';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Play,
  Clock,
  Download,
  Flame,
  Calendar,
  Lock,
  ChevronDown,
  Volume2
} from 'lucide-react';

interface ChallengeLandingViewProps {
  onBackToWiki?: () => void;
}

export const ChallengeLandingView: React.FC<ChallengeLandingViewProps> = ({
  onBackToWiki
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeDayPreview, setActiveDayPreview] = useState(1);
  const [showSequenceDetails, setShowSequenceDetails] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentDay = CHALLENGE_DAYS.find((d) => d.day === activeDayPreview) || CHALLENGE_DAYS[0];

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#171614] pb-24">
      {/* Focused Top Header with Minimal Distraction */}
      <header className="py-4 border-b border-[#171614]/10 bg-white/70 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <BrandLogo variant="master" size="sm" />
          {onBackToWiki && (
            <button
              onClick={onBackToWiki}
              className="text-xs font-semibold text-[#6E6962] hover:text-[#171614] transition-colors"
            >
              ← Volver a la Wiki
            </button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 space-y-16">
        {/* Main Hero & Lead Capture Area */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BF953F]/15 border border-[#BF953F]/30 text-xs font-semibold text-[#171614]">
            <Sparkles className="w-3.5 h-3.5 text-[#BF953F]" />
            <span>Reto Gratuito por Email · 50% Mente / 50% Cuerpo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#171614] leading-[1.15] max-w-3xl mx-auto">
            Aprende a Fluir en 7 Días.{' '}
            <span className="block font-normal italic font-accent text-[#BF953F] mt-1">
              10 minutos al día para resetear tu mente y habitar tu cuerpo.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6E6962] max-w-2xl mx-auto leading-relaxed">
            Sin posturas dolorosas, sin dogmas y sin necesidad de sentarte horas en silencio. Un protocolo daoísta paso a paso para el ritmo del siglo XXI.
          </p>

          {/* Registration Form Box or Success State */}
          <div className="max-w-xl mx-auto bg-white border border-[#BF953F]/30 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1 pb-2">
                  <h3 className="text-xl font-display font-medium text-[#171614]">
                    Comienza el Día 1 Hoy Mismo (100% Gratis)
                  </h3>
                  <p className="text-xs text-[#6E6962]">
                    Recibirás tu primer audio guiado y el Cuaderno de Bitácora al instante.
                  </p>
                </div>

                <div>
                  <label htmlFor="landing-name" className="block text-xs font-semibold text-[#171614] mb-1">
                    Tu Nombre
                  </label>
                  <input
                    id="landing-name"
                    type="text"
                    required
                    placeholder="Ej. Carmen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#171614]/20 rounded-xl focus:outline-hidden focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F]"
                  />
                </div>

                <div>
                  <label htmlFor="landing-email" className="block text-xs font-semibold text-[#171614] mb-1">
                    Tu Correo Electrónico
                  </label>
                  <input
                    id="landing-email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#171614]/20 rounded-xl focus:outline-hidden focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Inscribirme y Recibir el Día 1</span>
                  <ArrowRight className="w-4 h-4 text-[#BF953F] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#6E6962] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Respetamos tu privacidad. Cero spam. Te das de baja cuando quieras.</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-[#BF953F]/15 border border-[#BF953F] text-[#BF953F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-medium text-[#171614]">
                  ¡Todo Listo, {name}!
                </h3>
                <p className="text-sm text-[#6E6962] max-w-sm mx-auto leading-relaxed">
                  Hemos enviado las instrucciones del Día 1 y tu Cuaderno de Bitácora a <strong className="text-[#171614]">{email}</strong>.
                </p>

                {/* Instant Day 1 Preview Player */}
                <div className="bg-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl p-5 text-left space-y-3 mt-4">
                  <div className="flex items-center justify-between text-xs text-[#BF953F] font-bold uppercase tracking-wider">
                    <span>Sesión de Hoy · Día 1</span>
                    <span>10 minutos</span>
                  </div>
                  <h4 className="text-base font-display font-medium text-[#171614]">
                    {CHALLENGE_DAYS[0].title}
                  </h4>
                  <p className="text-xs text-[#6E6962]">
                    {CHALLENGE_DAYS[0].practicalAction}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-[#171614]/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#171614] text-[#FAF8F4] flex items-center justify-center shrink-0">
                      <Volume2 className="w-4 h-4 text-[#BF953F]" />
                    </div>
                    <div className="text-xs flex-1">
                      <div className="font-semibold text-[#171614]">Audio Guiado Día 1: El Despertar del Eje</div>
                      <div className="text-[#6E6962]">Voz del Instructor · 10:24 min</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 7-Day Curriculum Breakdown with Interactive Day Tabs */}
        <section className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
              Mapa de los 7 Días
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#171614]">
              ¿Qué vas a experimentar cada día?
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6962]">
              Un balance exacto: 50% trabajo con la mente y 50% alineación con el cuerpo.
            </p>
          </div>

          {/* Day Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
            {CHALLENGE_DAYS.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDayPreview(d.day)}
                className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                  activeDayPreview === d.day
                    ? 'bg-[#171614] text-[#FAF8F4] border-[#171614] shadow-md'
                    : 'bg-white text-[#171614] border-[#171614]/10 hover:border-[#BF953F]'
                }`}
              >
                <div className={`text-[10px] uppercase font-bold ${
                  activeDayPreview === d.day ? 'text-[#BF953F]' : 'text-[#6E6962]'
                }`}>
                  Día {d.day}
                </div>
                <div className="text-xs font-semibold mt-0.5 line-clamp-1">
                  {d.theme.split(' ')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Day Detail Card */}
          <div className="bg-white border border-[#BF953F]/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-[#BF953F]">
                Día {currentDay.day} · {currentDay.theme}
              </span>
              <span className="text-xs text-[#6E6962] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentDay.duration}</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#171614]">
              {currentDay.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#171614]/10 space-y-1 text-xs">
                <strong className="text-[#171614] font-semibold block">
                  Dimensión Mental (50%):
                </strong>
                <p className="text-[#6E6962] leading-relaxed">{currentDay.mindAspect}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#171614]/10 space-y-1 text-xs">
                <strong className="text-[#171614] font-semibold block">
                  Dimensión Corporal (50%):
                </strong>
                <p className="text-[#6E6962] leading-relaxed">{currentDay.bodyAspect}</p>
              </div>
            </div>

            <div className="bg-[#BF953F]/10 border border-[#BF953F]/20 p-4 rounded-xl text-xs space-y-1">
              <strong className="text-[#171614] block">Práctica de Hoy:</strong>
              <p className="text-[#6E6962]">{currentDay.practicalAction}</p>
            </div>

            <p className="font-accent italic text-xs sm:text-sm text-[#BF953F] pt-2 text-center">
              «{currentDay.quote}»
            </p>
          </div>
        </section>

        {/* 5-Email Nurturing Sequence Viewer Toggle */}
        <section className="space-y-4">
          <div className="text-center">
            <button
              onClick={() => setShowSequenceDetails(!showSequenceDetails)}
              className="text-xs font-semibold text-[#BF953F] hover:text-[#C9A863] underline flex items-center gap-1 mx-auto cursor-pointer"
            >
              <span>{showSequenceDetails ? 'Ocultar' : 'Ver'} el Protocolo de los 5 Emails Automatizados</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showSequenceDetails ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showSequenceDetails && (
            <div className="animate-in fade-in duration-200">
              <EmailSequenceViewer />
            </div>
          )}
        </section>

        {/* Bottom CTA to ensure high conversion */}
        {!submitted && (
          <section className="text-center pt-6">
            <button
              onClick={() => {
                window.scrollTo({ top: 150, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-sm font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-xl transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Quiero Acceder al Reto de 7 Días Gratis</span>
              <ArrowRight className="w-4 h-4 text-[#BF953F]" />
            </button>
          </section>
        )}
      </main>
    </div>
  );
};
