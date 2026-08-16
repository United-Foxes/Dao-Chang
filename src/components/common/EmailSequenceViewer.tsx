import React, { useState } from 'react';
import { EMAIL_SEQUENCE } from '../../data/challengeData';
import { Mail, Clock, Gift, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export const EmailSequenceViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentEmail = EMAIL_SEQUENCE.find((item) => item.step === activeStep) || EMAIL_SEQUENCE[0];

  return (
    <div className="bg-white border border-[#BF953F]/25 rounded-2xl p-6 sm:p-8 shadow-xs text-[#171614]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#171614]/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
            <Mail className="w-4 h-4" />
            <span>Secuencia Automatizada de Acompañamiento (5 Emails)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-medium text-[#171614] mt-1">
            Nutrición y Autoridad sin Venta Agresiva
          </h3>
        </div>
        <div className="text-xs text-[#6E6962] bg-[#FAF8F4] px-3 py-1.5 rounded-lg border border-[#171614]/10 self-start sm:self-auto">
          Protocolo: 100% Educación & Confianza
        </div>
      </div>

      {/* Step Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
        {EMAIL_SEQUENCE.map((item) => (
          <button
            key={item.step}
            onClick={() => setActiveStep(item.step)}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              activeStep === item.step
                ? 'bg-[#171614] text-[#FAF8F4] border-[#171614] shadow-md'
                : 'bg-[#FAF8F4] text-[#171614] border-[#171614]/10 hover:border-[#BF953F]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                activeStep === item.step ? 'text-[#BF953F]' : 'text-[#6E6962]'
              }`}>
                Email {item.step}
              </span>
              <span className="text-[10px] opacity-70">{item.delay.split(' ')[0]}</span>
            </div>
            <div className="text-xs font-semibold mt-1 line-clamp-1">
              {item.subject.replace(/^[^\w\s]+/, '').trim()}
            </div>
          </button>
        ))}
      </div>

      {/* Email Preview Box */}
      <div className="bg-[#FAF8F4] border border-[#BF953F]/20 rounded-xl p-5 sm:p-6 space-y-4">
        {/* Email Header Simulation */}
        <div className="space-y-2 pb-4 border-b border-[#171614]/10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-[#171614]">
              De: <span className="font-normal text-[#6E6962]">Dao Chang Consciente &lt;hola@daochang.org&gt;</span>
            </span>
            <span className="text-[#BF953F] flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Envío: {currentEmail.delay}</span>
            </span>
          </div>

          <div className="text-sm font-semibold text-[#171614]">
            Asunto: <span className="font-normal">{currentEmail.subject}</span>
          </div>

          <div className="text-xs text-[#6E6962] italic">
            Objetivo estratégico: {currentEmail.purpose}
          </div>
        </div>

        {/* Email Body */}
        <div className="space-y-3 text-sm text-[#171614] leading-relaxed font-sans">
          {currentEmail.bodyParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Gift / Action Footer */}
        <div className="pt-4 border-t border-[#171614]/10 flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#BF953F]/30">
          <div className="w-8 h-8 rounded-full bg-[#BF953F]/15 flex items-center justify-center shrink-0 text-[#BF953F]">
            <Gift className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#171614] uppercase tracking-wider">
              Recurso Incluido en este Correo:
            </div>
            <div className="text-xs text-[#6E6962] mt-0.5">
              {currentEmail.giftOrAction}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
