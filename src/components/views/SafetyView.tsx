import React from 'react';
import { Shield, AlertTriangle, CheckCircle2, HeartPulse, Info, HelpCircle, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';

interface SafetyViewProps {
  onNavigate: (view: string, param?: string) => void;
  onJoinChallenge: () => void;
}

export const SafetyView: React.FC<SafetyViewProps> = ({
  onNavigate,
  onJoinChallenge
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-700">
          <Shield className="w-3.5 h-3.5" />
          <span>Ética, Transparencia & Cuidado del Practicante</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
          Seguridad, Salud & Contraindicaciones
        </h1>

        <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed">
          En Dao Chang Consciente el primer principio es la no-violencia hacia el propio cuerpo (Wu Wei). Lee estas pautas para practicar con absoluta tranquilidad y discernimiento.
        </p>
      </div>

      {/* Primary Medical Disclaimer Box */}
      <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-amber-800 font-bold text-sm uppercase tracking-wider">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Aviso Médico y Legal Importante</span>
        </div>

        <p className="text-sm text-[#171614] leading-relaxed font-sans">
          El contenido, guías, audios, artículos y ejercicios de Nei Gong y Qigong presentados en <strong>Dao Chang Consciente</strong> y <strong>Fluir Consciente</strong> tienen un propósito exclusivamente educativo, de cultivo personal y desarrollo del bienestar.
        </p>

        <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed">
          <strong>No constituyen bajo ninguna circunstancia diagnóstico, tratamiento médico, prescripción farmacológica ni psicoterapia.</strong> Si padeces de alguna enfermedad física o psicológica diagnosticada, estás bajo tratamiento médico, embarazada o recuperándote de una cirugía reciente, consulta siempre con tu médico o especialista de salud antes de iniciar cualquier nueva práctica corporal o respiratoria.
        </p>
      </div>

      {/* The 70% Nei Gong Safety Rule */}
      <div className="bg-white border border-[#BF953F]/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#BF953F]/15 text-[#BF953F] flex items-center justify-center font-bold text-base">
            70%
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-medium text-[#171614]">
              La Regla de Oro del 70%: La Sabiduría de No Forzar
            </h2>
            <div className="text-xs text-[#BF953F] font-accent italic">
              «Si empleas el 100% de tu esfuerzo, el 30% restante es tensión rígida.»
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#6E6962] leading-relaxed">
          En las artes internas daoístas nunca buscamos llegar al límite del dolor o la fatiga muscular extrema. Si una postura te pide estiramiento o retención de aire, realiza solo el 70% de tu capacidad máxima. Ese 30% de margen es el espacio donde el sistema nervioso se siente seguro y el Qi puede fluir y sanar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#171614]/10 text-xs space-y-1">
            <strong className="text-[#171614] block">Nunca busques dolor:</strong>
            <span className="text-[#6E6962]">Si sientes un pinchazo articular agudo o tirón muscular, detente y suaviza la postura de inmediato.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#171614]/10 text-xs space-y-1">
            <strong className="text-[#171614] block">Respiración natural:</strong>
            <span className="text-[#6E6962]">El aire debe entrar y salir sin jadeo, sin forzar la caja torácica ni apretar la garganta.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#171614]/10 text-xs space-y-1">
            <strong className="text-[#171614] block">Postura relajada (Song):</strong>
            <span className="text-[#6E6962]">La columna se mantiene erguida pero sin rigidez militar; los hombros siempre caídos y sueltos.</span>
          </div>
        </div>
      </div>

      {/* Specific Contraindications Table */}
      <div className="space-y-6">
        <h2 className="text-2xl font-display font-medium text-[#171614]">
          Contraindicaciones Específicas por Condición
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700">
              <HeartPulse className="w-4 h-4 text-red-600" />
              <span>Hipertensión & Problemas Cardíacos</span>
            </div>
            <p className="text-xs text-[#6E6962] leading-relaxed">
              <strong>Evitar:</strong> Retenciones de aire a pulmón lleno prolongadas (Kumbhaka) o inversiones bruscas de cabeza.
            </p>
            <p className="text-xs text-[#171614] leading-relaxed">
              <strong>Práctica segura:</strong> Respiración continua y suave hacia el Dan Tian Inferior, exhalaciones lentas y relajación de hombros.
            </p>
          </div>

          <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Info className="w-4 h-4 text-amber-600" />
              <span>Embarazo (Todos los Trimestres)</span>
            </div>
            <p className="text-xs text-[#6E6962] leading-relaxed">
              <strong>Evitar:</strong> Contracciones abdominales intensas, frotado enérgico sobre la zona lumbar baja o posturas de equilibrio inestables.
            </p>
            <p className="text-xs text-[#171614] leading-relaxed">
              <strong>Práctica segura:</strong> Meditación Zuo Wang sentada con apoyo lumbar, respiración diafragmática suave y visualización de calma.
            </p>
          </div>

          <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Info className="w-4 h-4 text-amber-600" />
              <span>Lesiones de Columna / Hernias Discales</span>
            </div>
            <p className="text-xs text-[#6E6962] leading-relaxed">
              <strong>Evitar:</strong> Torsiones forzadas del tronco o flexiones hacia adelante con piernas completamente rígidas.
            </p>
            <p className="text-xs text-[#171614] leading-relaxed">
              <strong>Práctica segura:</strong> Alineación del eje Zhong Ding sentado en una silla firme con apoyo en pies y descompresión de Bai Hui.
            </p>
          </div>

          <div className="bg-white border border-[#171614]/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Trastornos de Ansiedad & Pánico</span>
            </div>
            <p className="text-xs text-[#6E6962] leading-relaxed">
              <strong>Evitar:</strong> Intentar "dejar la mente en blanco a la fuerza" (suele disparar más ansiedad).
            </p>
            <p className="text-xs text-[#171614] leading-relaxed">
              <strong>Práctica segura:</strong> Anclar la atención en el contacto de los pies con el suelo y en la exhalación por la boca con suspiro inaudible.
            </p>
          </div>
        </div>
      </div>

      {/* Protocol when to stop */}
      <div className="bg-[#FAF8F4] border border-[#171614]/10 rounded-2xl p-6 sm:p-8 space-y-3">
        <h3 className="text-lg font-display font-medium text-[#171614]">
          ¿Cuándo debes pausar la práctica de inmediato?
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-[#6E6962]">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Sensación de mareo, visión borrosa o aturdimiento en la cabeza.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Palpitaciones aceleradas o dificultad para recuperar el aliento normal.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Dolor punzante en articulaciones (rodillas, lumbares, cuello).</span>
          </li>
        </ul>
        <p className="text-xs text-[#171614] pt-2">
          Si experimentas cualquiera de estos síntomas, siéntate cómodamente, abre los ojos, bebe un vaso de agua tibia y descansa 10 minutos.
        </p>
      </div>

      {/* CTA back to safe practices */}
      <div className="text-center pt-4">
        <button
          onClick={onJoinChallenge}
          className="px-6 py-3 text-xs sm:text-sm font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Comenzar el Reto de 7 Días (100% Adaptado y Seguro)</span>
          <ArrowRight className="w-4 h-4 text-[#BF953F]" />
        </button>
      </div>
    </div>
  );
};
