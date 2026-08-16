import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface StickyChallengeBarProps {
  onJoinChallenge: () => void;
  onOpenQuiz: () => void;
}

export const StickyChallengeBar: React.FC<StickyChallengeBarProps> = ({
  onJoinChallenge,
  onOpenQuiz
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Invitación al Reto Gratuito de 7 Días"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-[#171614] text-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#BF953F]/20 flex items-center justify-center shrink-0 border border-[#BF953F]/40">
            <Sparkles className="w-4 h-4 text-[#BF953F]" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#BF953F]">
              Reto Gratuito · 50% Mente / 50% Cuerpo
            </div>
            <h4 className="text-sm font-display font-medium text-[#FAF8F4] mt-0.5">
              Fluir Consciente en 7 Días
            </h4>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-[#FAF8F4]/50 hover:text-[#FAF8F4] p-1 rounded-md transition-colors"
          aria-label="Cerrar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-[#FAF8F4]/80 mt-2 leading-relaxed">
        10 minutos al día para calmar tu mente, alinear tu postura y sellar tus fugas de energía vital.
      </p>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={onJoinChallenge}
          className="flex-1 py-2 px-3 text-xs font-semibold bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <span>Comenzar Día 1 Gratis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onOpenQuiz}
          className="py-2 px-3 text-xs font-medium text-[#FAF8F4]/90 hover:text-[#FAF8F4] hover:bg-[#FAF8F4]/10 border border-[#FAF8F4]/20 rounded-lg transition-colors cursor-pointer"
        >
          Hacer Test
        </button>
      </div>
    </aside>
  );
};
