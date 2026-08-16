import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email: string) => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Por favor introduce tu nombre y un correo electrónico válido.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(name, email);
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171614]/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FAF8F4] border border-[#BF953F]/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-[#171614]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6E6962] hover:text-[#171614] p-1.5 rounded-lg hover:bg-[#171614]/5 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#BF953F]/15 border border-[#BF953F] text-[#BF953F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-medium text-[#171614]">
              ¡Bienvenido a Fluir Consciente, {name}!
            </h3>
            <p className="text-sm text-[#6E6962] max-w-sm mx-auto leading-relaxed">
              Hemos enviado tu acceso al Día 1 y tu Cuaderno de Bitácora a <strong className="text-[#171614]">{email}</strong>.
            </p>
            <div className="text-xs text-[#BF953F] font-semibold">
              Redirigiendo a tu espacio de bienvenida...
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo variant="master" size="sm" showWordmark={false} />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#BF953F]">
                Antes de marcharte · Regalo Daoísta
              </span>
            </div>

            <h3 id="exit-intent-title" className="text-2xl font-display font-medium text-[#171614] leading-tight">
              No te vayas con la batería en rojo.
            </h3>
            <p className="text-sm text-[#6E6962] mt-2 leading-relaxed">
              Únete gratis a nuestro <strong className="text-[#171614]">Reto de 7 Días Fluir Consciente</strong>. Diez minutos al día para armonizar 50% tu mente y 50% tu cuerpo con el Nei Gong.
            </p>

            <div className="bg-[#BF953F]/10 border border-[#BF953F]/20 rounded-xl p-3.5 my-5 space-y-2 text-xs text-[#171614]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#BF953F] shrink-0" />
                <span>Audio diario guiado de 10 min (sin dogmas ni mística vacía).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BF953F] shrink-0" />
                <span>Cuaderno de Bitácora + Infografía de los 3 Tesoros (Jing, Qi, Shen).</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {error && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="exit-name" className="block text-xs font-semibold text-[#171614] mb-1">
                  Tu Nombre
                </label>
                <input
                  id="exit-name"
                  type="text"
                  required
                  placeholder="Ej. Sofía"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-lg focus:outline-hidden focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all"
                />
              </div>

              <div>
                <label htmlFor="exit-email" className="block text-xs font-semibold text-[#171614] mb-1">
                  Tu Correo Electrónico
                </label>
                <input
                  id="exit-email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-lg focus:outline-hidden focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-semibold bg-[#171614] hover:bg-[#2A2723] text-[#FAF8F4] rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Acceder Gratis al Reto de 7 Días</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#BF953F] text-[#171614] rounded-sm font-bold">100% GRATIS</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6E6962] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BF953F]" />
                <span>Cero spam. Tus datos están 100% protegidos. Puedes darte de baja en 1 clic.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
