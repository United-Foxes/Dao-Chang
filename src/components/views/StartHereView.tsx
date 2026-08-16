import React, { useState } from 'react';
import { PILLARS } from '../../data/pillarsData';
import { PillarId } from '../../types';
import { BrandLogo } from '../brand/BrandLogo';
import {
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Shield,
  BookOpen,
  Brain,
  Zap,
  Activity,
  HeartHandshake
} from 'lucide-react';

interface StartHereViewProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenQuiz: () => void;
}

export const StartHereView: React.FC<StartHereViewProps> = ({
  onNavigate,
  onOpenQuiz
}) => {
  const [selectedObjective, setSelectedObjective] = useState<PillarId>('mente');

  const objectiveMap: Record<
    PillarId,
    {
      title: string;
      desc: string;
      icon: React.ReactNode;
      firstSteps: string[];
      recommendedPillar: (typeof PILLARS)[0];
    }
  > = {
    mente: {
      title: 'Calma Mental & Foco Lúcido',
      desc: 'Para quienes sufren de sobrepensamiento, insomnio por ideas en bucle o agotamiento por decisiones.',
      icon: <Brain className="w-5 h-5 text-[#BF953F]" />,
      firstSteps: [
        'Aprende la diferencia entre forzar la mente y dejarla en Zuo Wang (Sentarse y olvidar).',
        'Practica la Respiración del Vacío de 5 minutos al terminar tu jornada de trabajo.',
        'Lee el término "Shen" y "Wu Wei" en nuestro Glosario.'
      ],
      recommendedPillar: PILLARS.find((p) => p.id === 'mente')!
    },
    energia: {
      title: 'Vitalidad Biológica & Fugas de Energía',
      desc: 'Para quienes despiertan con cansancio crónico, pesadez o sienten que su cuerpo no retiene la vitalidad.',
      icon: <Zap className="w-5 h-5 text-[#BF953F]" />,
      firstSteps: [
        'Comprende el mapa de los Tres Tesoros: Jing (materia), Qi (energía) y Shen (espíritu).',
        'Haz el frotado lumbar de Ming Men cada noche antes de dormir.',
        'Aprende a respirar inflando suavemente el Dan Tian Inferior en 360 grados.'
      ],
      recommendedPillar: PILLARS.find((p) => p.id === 'energia')!
    },
    cuerpo: {
      title: 'Postura, Fascias & Alivio del Dolor',
      desc: 'Para quienes pasan muchas horas sentados, con dolor cervical, lumbar o rigidez muscular general.',
      icon: <Activity className="w-5 h-5 text-[#BF953F]" />,
      firstSteps: [
        'Corrige la altura de tu coronilla Bai Hui para alinear el eje vertical Zhong Ding.',
        'Aplica el principio de relajación activa (Song): firmeza sin tensión rígida.',
        'Realiza 5 minutos de Zhan Zhuang (la postura del árbol) por la mañana.'
      ],
      recommendedPillar: PILLARS.find((p) => p.id === 'cuerpo')!
    },
    relaciones: {
      title: 'Vínculos Conscientes & El Tao del Corazón',
      desc: 'Para quienes desean mejorar su comunicación de pareja, poner límites con calma y disolver la reactividad.',
      icon: <HeartHandshake className="w-5 h-5 text-[#BF953F]" />,
      firstSteps: [
        'Descubre qué es el Xin (la mente-corazón unificada en el Nei Gong).',
        'Practica la regla de los 3 minutos de escucha sagrada sin preparar tu defensa.',
        'Equilibra las polaridades Yin (receptividad) y Yang (claridad) en tus conversaciones.'
      ],
      recommendedPillar: PILLARS.find((p) => p.id === 'relaciones')!
    }
  };

  const currentObj = objectiveMap[selectedObjective];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/20 text-xs font-semibold text-[#BF953F]">
          <Compass className="w-3.5 h-3.5" />
          <span>Guía de Orientación para Principiantes</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
          ¿Primera vez en el Tao y el Nei Gong?
        </h1>

        <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed">
          Bienvenido al templo. No necesitas conocimientos previos, flexibilidad física ni horas de tiempo libre. Aquí te explicamos exactamente qué es esto y por dónde empezar según lo que necesitas hoy.
        </p>
      </div>

      {/* 3 Simple Questions Explained */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h3 className="text-lg font-display font-medium text-[#171614]">
            ¿Qué es el Tao?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed">
            Es la forma natural en que la vida funciona cuando dejamos de resistirnos. No es una religión; es el arte de fluir como el agua, con máxima eficacia y mínimo desgaste nervioso.
          </p>
        </div>

        <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h3 className="text-lg font-display font-medium text-[#171614]">
            ¿Qué es el Nei Gong?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed">
            Es la tecnología tradicional de alquimia interna: un mapa metódico y seguro que une la postura física, la respiración, la bioenergía y la mente lúcida.
          </p>
        </div>

        <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h3 className="text-lg font-display font-medium text-[#171614]">
            ¿Cómo se practica?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed">
            Con micro-hábitos de 5 a 10 minutos al día integrados en tu vida cotidiana: en tu escritorio, al despertar o antes de una conversación importante.
          </p>
        </div>
      </div>

      {/* Interactive Concierge: Por Dónde Empiezo Según Mi Objetivo */}
      <div className="bg-white border border-[#BF953F]/30 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
            Paso 2 · Selecciona tu prioridad actual
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#171614]">
            ¿Cuál es tu principal objetivo en este momento?
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6962]">
            Haz clic en una opción para ver tu ruta recomendada y tus primeros 3 pasos prácticos:
          </p>
        </div>

        {/* 4 Objective Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {(Object.keys(objectiveMap) as PillarId[]).map((key) => {
            const item = objectiveMap[key];
            const isSelected = selectedObjective === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedObjective(key)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#171614] text-[#FAF8F4] border-[#171614] shadow-md ring-2 ring-[#BF953F]'
                    : 'bg-[#FAF8F4] text-[#171614] border-[#171614]/10 hover:border-[#BF953F]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="p-1.5 rounded-lg bg-white/10 text-[#BF953F]">
                      {item.icon}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#BF953F]" />
                    )}
                  </div>
                  <div className="text-sm font-semibold leading-tight">
                    {item.title}
                  </div>
                </div>
                <div className={`text-[11px] mt-3 ${isSelected ? 'text-[#FAF8F4]/70' : 'text-[#6E6962]'}`}>
                  {key === 'mente' && 'Dojo Mente'}
                  {key === 'energia' && 'Zendo Energía'}
                  {key === 'cuerpo' && 'Academia Cuerpo'}
                  {key === 'relaciones' && 'Studio Relaciones'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Concierge Outcome Card */}
        <div className="bg-[#FAF8F4] border border-[#BF953F]/20 rounded-2xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#171614]/10">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
                Tu Camino Recomendado
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#171614] mt-0.5">
                {currentObj.recommendedPillar.brandName}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6962] mt-1">
                {currentObj.desc}
              </p>
            </div>

            <button
              onClick={() => onNavigate('pillar', currentObj.recommendedPillar.id)}
              className="px-4 py-2.5 text-xs font-semibold bg-[#171614] text-[#FAF8F4] hover:bg-[#2A2723] rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <span>Ver Prácticas de este Camino</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#BF953F]" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-[#171614] uppercase tracking-wider">
              Tus Primeros 3 Pasos Recomendados:
            </div>
            <div className="space-y-2">
              {currentObj.firstSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#171614]/5 text-xs sm:text-sm text-[#171614]">
                  <span className="w-5 h-5 rounded-full bg-[#BF953F]/20 text-[#BF953F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Magnet CTA for this pillar */}
          <div className="bg-[#BF953F]/10 border border-[#BF953F]/30 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <strong className="text-xs font-bold text-[#171614] block">
                Recurso Gratuito de este Pilar:
              </strong>
              <span className="text-xs text-[#6E6962]">
                {currentObj.recommendedPillar.leadMagnet.title}
              </span>
            </div>
            <button
              onClick={() => onNavigate('pillar', currentObj.recommendedPillar.id)}
              className="px-3.5 py-2 text-xs font-semibold bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-lg transition-colors cursor-pointer shrink-0"
            >
              {currentObj.recommendedPillar.leadMagnet.ctaLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Reto 7 Días & Safety Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#171614] text-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
            <Sparkles className="w-4 h-4" />
            <span>La Ruta Más Sencilla</span>
          </div>
          <h3 className="text-xl font-display font-medium text-[#FAF8F4]">
            El Reto de 7 Días Fluir Consciente
          </h3>
          <p className="text-xs text-[#FAF8F4]/80 leading-relaxed">
            Si no quieres elegir un solo pilar ahora, el reto de 7 días te da una muestra equilibrada del 50% de mente y 50% de cuerpo directamente en tu correo.
          </p>
          <button
            onClick={() => onNavigate('reto-7-dias')}
            className="w-full py-2.5 px-4 text-xs font-semibold bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Unirme al Reto Gratuito (Día 1 Hoy)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#6E6962]">
            <Shield className="w-4 h-4 text-[#BF953F]" />
            <span>Práctica Ética y Responsable</span>
          </div>
          <h3 className="text-xl font-display font-medium text-[#171614]">
            Seguridad y Contraindicaciones
          </h3>
          <p className="text-xs text-[#6E6962] leading-relaxed">
            Antes de realizar retenciones de aire profundas o posturas exigentes, revisa quién debe adaptar las prácticas (embarazo, hipertensión o cirugías recientes).
          </p>
          <button
            onClick={() => onNavigate('seguridad')}
            className="w-full py-2.5 px-4 text-xs font-semibold bg-[#FAF8F4] hover:bg-[#171614]/5 text-[#171614] border border-[#171614]/15 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Leer Protocolo de Seguridad Médica</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#BF953F]" />
          </button>
        </div>
      </div>
    </div>
  );
};
