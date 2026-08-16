import React, { useState } from 'react';
import {
  SCAFFOLDED_COURSES,
  SCAFFOLDED_MEMBERSHIP,
  SCAFFOLDED_CONSULTATIONS,
  SCAFFOLDED_AFFILIATES
} from '../../data/scaffoldedProductsData';
import {
  Layers,
  Sparkles,
  Lock,
  Calendar,
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

export const ScaffoldedPhasesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fase2' | 'fase3' | 'fase4'>('fase2');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BF953F]/15 border border-[#BF953F]/30 text-xs font-semibold text-[#171614]">
          <Layers className="w-3.5 h-3.5 text-[#BF953F]" />
          <span>Arquitectura & Escalabilidad Modular (Fases 2, 3 y 4)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
          Hoja de Ruta Tecnológica & Monetización
        </h1>

        <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed">
          El sitio está estructurado desde el día 1 para albergar cursos de pago (Hotmart), membresía recurrente, agenda de consultorías 1:1 y tienda de afiliados sin requerir reescritura de código.
        </p>

        {/* Phase 1 Constraint Badge */}
        <div className="p-3 bg-white border border-[#BF953F]/40 rounded-xl text-xs text-[#6E6962] flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#BF953F] shrink-0" />
          <span>
            <strong>Nota de Fase 1:</strong> En la experiencia pública principal, los botones de compra directa están desactivados para priorizar la autoridad, captación de leads y confianza orgánica.
          </span>
        </div>
      </div>

      {/* Phase Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveTab('fase2')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'fase2'
              ? 'bg-[#171614] text-[#FAF8F4] shadow-md'
              : 'bg-white text-[#6E6962] hover:text-[#171614] border border-[#171614]/10'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-[#BF953F]" />
          <span>Fase 2: Cursos & Infoproductos (Hotmart)</span>
        </button>

        <button
          onClick={() => setActiveTab('fase3')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'fase3'
              ? 'bg-[#171614] text-[#FAF8F4] shadow-md'
              : 'bg-white text-[#6E6962] hover:text-[#171614] border border-[#171614]/10'
          }`}
        >
          <Lock className="w-4 h-4 text-[#BF953F]" />
          <span>Fase 3: Membresía & Consultoría 1:1</span>
        </button>

        <button
          onClick={() => setActiveTab('fase4')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'fase4'
              ? 'bg-[#171614] text-[#FAF8F4] shadow-md'
              : 'bg-white text-[#6E6962] hover:text-[#171614] border border-[#171614]/10'
          }`}
        >
          <ShoppingBag className="w-4 h-4 text-[#BF953F]" />
          <span>Fase 4: Tienda & Afiliados</span>
        </button>
      </div>

      {/* Tab Content 1: Fase 2 (Hotmart Infoproducts) */}
      {activeTab === 'fase2' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-display font-medium text-[#171614]">
                Catálogo de Cursos & Masterclasses en Video
              </h3>
              <p className="text-xs text-[#6E6962]">
                Estructura lista para vincular pasarela Hotmart Pay sin modificar el frontend.
              </p>
            </div>
            <span className="text-xs px-3 py-1 bg-[#BF953F]/15 text-[#BF953F] border border-[#BF953F]/30 rounded-full font-semibold self-start sm:self-auto">
              Scaffolded Ready · Hotmart Schema
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCAFFOLDED_COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-[#171614]/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#BF953F] uppercase tracking-wider">
                      {course.level}
                    </span>
                    <span className="text-[#6E6962] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.durationHours}h grabadas ({course.modulesCount} módulos)</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-medium text-[#171614]">
                    {course.title}
                  </h4>

                  <p className="text-xs text-[#6E6962] leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-semibold text-[#171614] uppercase tracking-wider">
                      Temario del Curso:
                    </div>
                    {course.syllabus.slice(0, 4).map((m, idx) => (
                      <div key={idx} className="text-xs text-[#6E6962] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BF953F] shrink-0" />
                        <span className="line-clamp-1">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#171614]/5 space-y-2">
                  <button
                    disabled
                    className="w-full py-2.5 px-3 text-xs font-semibold bg-[#171614]/10 text-[#6E6962] rounded-lg cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Integración Activa en Fase 2 (Hotmart)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 2: Fase 3 (Membership & Consults) */}
      {activeTab === 'fase3' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          {/* Membership Section */}
          <div className="space-y-6">
            <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-display font-medium text-[#171614]">
                  Comunidad & Membresía "El Templo"
                </h3>
                <p className="text-xs text-[#6E6962]">
                  Suscripción mensual y anual con gating de contenido y sesiones de práctica en vivo.
                </p>
              </div>
              <span className="text-xs px-3 py-1 bg-[#BF953F]/15 text-[#BF953F] border border-[#BF953F]/30 rounded-full font-semibold self-start sm:self-auto">
                Gating & Subscription Ready
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {SCAFFOLDED_MEMBERSHIP.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-[#171614] text-[#FAF8F4] border border-[#BF953F] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-display font-medium">
                        {tier.name}
                      </h4>
                      <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#BF953F] text-[#171614]">
                        Suscripción Recurrente
                      </span>
                    </div>

                    <p className="text-xs text-[#FAF8F4]/80">
                      {tier.tagline}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-[#FAF8F4]/10">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BF953F] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4">
                    <button
                      disabled
                      className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#BF953F]/20 text-[#BF953F] border border-[#BF953F]/40 cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Activable en Fase 3</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1:1 Consults Section */}
          <div className="space-y-6 pt-6 border-t border-[#171614]/10">
            <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-display font-medium text-[#171614]">
                  Consultorías Privadas 1:1 con Instructor
                </h3>
                <p className="text-xs text-[#6E6962]">
                  Agendamiento automatizado mediante Calendly para evaluación y prescripción de práctica individual.
                </p>
              </div>
              <span className="text-xs px-3 py-1 bg-[#BF953F]/15 text-[#BF953F] border border-[#BF953F]/30 rounded-full font-semibold self-start sm:self-auto">
                Calendly Ready
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {SCAFFOLDED_CONSULTATIONS.map((cons) => (
                <div key={cons.id} className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-display font-medium text-[#171614]">
                      {cons.title}
                    </h4>
                    <span className="text-xs font-bold text-[#BF953F]">
                      {cons.duration}
                    </span>
                  </div>

                  <p className="text-xs text-[#6E6962] leading-relaxed">
                    {cons.description}
                  </p>

                  <div className="space-y-1 text-xs text-[#171614]">
                    <strong className="block text-[#BF953F]">Incluye:</strong>
                    {cons.includes.map((inc, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#6E6962]">
                        <CheckCircle2 className="w-3 h-3 text-[#BF953F]" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    disabled
                    className="w-full py-2 px-3 text-xs font-semibold bg-[#FAF8F4] text-[#6E6962] border border-[#171614]/10 rounded-lg cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#BF953F]" />
                    <span>Agendamiento en Fase 3 (Calendly)</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Fase 4 (Affiliate & Physical Shop) */}
      {activeTab === 'fase4' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-display font-medium text-[#171614]">
                Equipamiento & Herramientas de Práctica
              </h3>
              <p className="text-xs text-[#6E6962]">
                Selección curada de cojines de meditación (Zafus), té de roca daoísta y literatura especializada.
              </p>
            </div>
            <span className="text-xs px-3 py-1 bg-[#BF953F]/15 text-[#BF953F] border border-[#BF953F]/30 rounded-full font-semibold self-start sm:self-auto">
              Affiliate / E-commerce Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SCAFFOLDED_AFFILIATES.map((prod) => (
              <div key={prod.id} className="bg-white border border-[#171614]/10 rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#FAF8F4] text-[#6E6962]">
                    {prod.category}
                  </span>
                  <h4 className="text-sm font-display font-medium text-[#171614]">
                    {prod.title}
                  </h4>
                  <p className="text-xs text-[#6E6962] line-clamp-3">
                    {prod.reasonWhy}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#171614]/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#BF953F] font-semibold flex items-center gap-1">
                    <span>Enlace de Afiliado (Fase 4)</span>
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
