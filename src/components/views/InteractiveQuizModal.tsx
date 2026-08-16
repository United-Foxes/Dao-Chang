import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../../data/quizData';
import { PillarId, QuizResult } from '../../types';
import { PILLARS } from '../../data/pillarsData';
import { BrandLogo } from '../brand/BrandLogo';
import { X, Sparkles, ArrowRight, CheckCircle2, RotateCcw, BookOpen, Compass, ShieldCheck } from 'lucide-react';

interface InteractiveQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPillar: (pillarId: PillarId) => void;
  onNavigateToGlossaryTerm: (slug: string) => void;
  onJoinChallenge: () => void;
}

export const InteractiveQuizModal: React.FC<InteractiveQuizModalProps> = ({
  isOpen,
  onClose,
  onNavigateToPillar,
  onNavigateToGlossaryTerm,
  onJoinChallenge
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<PillarId, number>>({
    mente: 0,
    energia: 0,
    cuerpo: 0,
    relaciones: 0
  });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [submittedLead, setSubmittedLead] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelectOption = (option: (typeof QUIZ_QUESTIONS)[0]['options'][0]) => {
    const updatedScores = { ...scores };
    (Object.keys(option.pillarScores) as PillarId[]).forEach((pillar) => {
      updatedScores[pillar] = (updatedScores[pillar] || 0) + option.pillarScores[pillar];
    });
    setScores(updatedScores);

    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate dominant pillar
      let highestPillar: PillarId = 'mente';
      let maxScore = -1;
      (Object.keys(updatedScores) as PillarId[]).forEach((p) => {
        if (updatedScores[p] > maxScore) {
          maxScore = updatedScores[p];
          highestPillar = p;
        }
      });
      setResult(QUIZ_RESULTS[highestPillar]);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScores({ mente: 0, energia: 0, cuerpo: 0, relaciones: 0 });
    setResult(null);
    setSubmittedLead(false);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim() || !leadEmail.includes('@')) return;
    setSubmittedLead(true);
  };

  const dominantPillarData = result ? PILLARS.find((p) => p.id === result.dominantPillar) : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171614]/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#171614]">
        {/* Header */}
        <div className="p-5 border-b border-[#171614]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#BF953F]/15 flex items-center justify-center text-[#BF953F] border border-[#BF953F]/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#BF953F]">
                Test de Diagnóstico Energético Daoísta
              </span>
              <h3 id="quiz-modal-title" className="text-base font-display font-medium text-[#171614]">
                ¿Qué bloquea tu energía vital hoy?
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6E6962] hover:text-[#171614] rounded-lg hover:bg-[#171614]/5 transition-colors"
            aria-label="Cerrar test"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar if not finished */}
        {!result && (
          <div className="w-full bg-[#171614]/10 h-1.5">
            <div
              className="bg-[#BF953F] h-1.5 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {!result ? (
            /* Questions Flow */
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs text-[#6E6962]">
                <span>Pregunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="font-semibold text-[#BF953F]">Dao Chang Consciente</span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-display font-medium text-[#171614] leading-snug">
                  {currentQ.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6962] mt-1.5 italic">
                  {currentQ.context}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full text-left p-4 rounded-xl border border-[#171614]/15 bg-white hover:border-[#BF953F] hover:bg-[#BF953F]/10 transition-all cursor-pointer group shadow-xs hover:shadow-md"
                  >
                    <div className="text-sm sm:text-base font-medium text-[#171614] group-hover:text-[#BF953F] transition-colors leading-snug">
                      {opt.text}
                    </div>
                    <div className="text-xs text-[#6E6962] mt-1">
                      {opt.subtext}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-2 pb-4 border-b border-[#171614]/10">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
                  Tu Diagnóstico Personalizado
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-medium text-[#171614]">
                  {result.title}
                </h4>
                <p className="text-sm text-[#6E6962] max-w-lg mx-auto leading-relaxed">
                  {result.diagnosis}
                </p>
              </div>

              {/* Recommendation Box */}
              <div className="bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171614]">
                  <Compass className="w-4 h-4 text-[#BF953F]" />
                  <span>Camino Recomendado: {dominantPillarData?.brandName}</span>
                </div>
                <p className="text-sm text-[#171614] leading-relaxed">
                  {result.recommendation}
                </p>
                <div className="text-xs bg-white p-3 rounded-lg border border-[#BF953F]/20 text-[#171614]">
                  <strong className="text-[#BF953F] block mb-0.5">Práctica de Emergencia:</strong>
                  {result.suggestedPractice}
                </div>
              </div>

              {/* Lead Magnet Capture for this Result */}
              {!submittedLead ? (
                <div className="bg-white border border-[#171614]/15 rounded-xl p-5 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#BF953F]" />
                    <h5 className="text-sm font-bold text-[#171614]">
                      Recibe tu {dominantPillarData?.leadMagnet.title} gratis
                    </h5>
                  </div>
                  <p className="text-xs text-[#6E6962]">
                    {dominantPillarData?.leadMagnet.description} Además, te incluimos el acceso al Reto de 7 Días.
                  </p>

                  <form onSubmit={handleLeadSubmit} className="space-y-2.5 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Tu Nombre"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF8F4] border border-[#171614]/20 rounded-lg focus:outline-hidden focus:border-[#BF953F]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Tu Correo Electrónico"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-[#FAF8F4] border border-[#171614]/20 rounded-lg focus:outline-hidden focus:border-[#BF953F]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 text-xs font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Enviar Guía Personalizada a mi Correo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#BF953F]" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-center space-y-1 text-emerald-900 animate-in fade-in">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <div className="text-sm font-semibold">¡Guía enviada con éxito a {leadEmail}!</div>
                  <div className="text-xs text-emerald-700">Revisa tu bandeja de entrada en los próximos 2 minutos.</div>
                </div>
              )}

              {/* Related Glossary Terms Links */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#6E6962] font-semibold mb-2 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Conceptos clave para tu diagnóstico:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedGlossaryTerms.map((slug) => (
                    <button
                      key={slug}
                      onClick={() => {
                        onClose();
                        onNavigateToGlossaryTerm(slug);
                      }}
                      className="px-2.5 py-1 bg-white border border-[#171614]/15 rounded-md text-xs font-medium text-[#171614] hover:border-[#BF953F] transition-colors cursor-pointer"
                    >
                      Ver en Glosario: {slug.replace('-', ' ').toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#171614]/10">
                <button
                  onClick={handleRestart}
                  className="text-xs text-[#6E6962] hover:text-[#171614] flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir el Test</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {dominantPillarData && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToPillar(dominantPillarData.id);
                      }}
                      className="flex-1 sm:flex-none py-2 px-3 text-xs font-semibold bg-white border border-[#BF953F] text-[#171614] hover:bg-[#BF953F]/10 rounded-lg transition-colors cursor-pointer"
                    >
                      Explorar {dominantPillarData.brandName}
                    </button>
                  )}
                  <button
                    onClick={() => {
                      onClose();
                      onJoinChallenge();
                    }}
                    className="flex-1 sm:flex-none py-2 px-3 text-xs font-semibold bg-[#171614] text-[#FAF8F4] hover:bg-[#2A2723] rounded-lg transition-colors cursor-pointer"
                  >
                    Ir al Reto de 7 Días
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
