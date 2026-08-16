import React, { useState } from 'react';
import { BrandLogo } from '../brand/BrandLogo';
import { Shield, Sparkles, Heart, ArrowRight, CheckCircle2, BookOpen, Compass, Layers } from 'lucide-react';
import { PILLARS } from '../../data/pillarsData';
import { PillarId } from '../../types';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuiz }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#171614] text-[#FAF8F4] pt-16 pb-12 border-t border-[#BF953F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FAF8F4]/10">
          {/* Brand Column (2 cols wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="master" size="lg" theme="dark" />
            <p className="text-sm text-[#FAF8F4]/70 max-w-md leading-relaxed mt-2">
              Wiki de acompañamiento, alquimia interna (Nei Gong) y sabiduría daoísta aplicada a la vida cotidiana. Un espacio consagrado a cultivar la calma de un templo en medio del caos moderno.
            </p>
            <div className="pt-2 text-xs font-accent text-[#BF953F]">
              «El Tao del Corazón: No es meditación, es integración profunda.»
            </div>

            {/* Quick Diagnostic Quiz Mini CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#BF953F]/15 hover:bg-[#BF953F]/25 text-xs text-[#BF953F] border border-[#BF953F]/30 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hacer Test: ¿Qué bloquea tu energía hoy?</span>
              </button>
            </div>
          </div>

          {/* Los 4 Caminos */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#BF953F]">
              Los 4 Caminos
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F4]/80">
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigate('pillar', p.id)}
                    className="hover:text-[#BF953F] transition-colors text-left font-medium"
                  >
                    {p.brandName}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('reto-7-dias')}
                  className="text-[#BF953F] hover:text-[#C9A863] font-semibold flex items-center gap-1.5 mt-3 text-xs uppercase tracking-wider"
                >
                  <span>Reto 7 Días (Gratis)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Explorar Wiki */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#BF953F]">
              Explorar Wiki
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F4]/80">
              <li>
                <button
                  onClick={() => onNavigate('empieza-aqui')}
                  className="hover:text-[#BF953F] transition-colors text-left flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Empieza Aquí (Guía)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glosario')}
                  className="hover:text-[#BF953F] transition-colors text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Glosario Nei Gong (17 Términos)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#BF953F] transition-colors text-left"
                >
                  Notas de Estudio & Artículos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seguridad')}
                  className="hover:text-[#BF953F] transition-colors text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Seguridad & Contraindicaciones</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-[#BF953F] transition-colors text-left"
                >
                  Historia de Dao Chang Consciente
                </button>
              </li>
            </ul>
          </div>

          {/* Captura de Leads / Boletín */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#BF953F]">
              Sabiduría en tu Correo
            </h4>
            <p className="text-xs text-[#FAF8F4]/70 leading-relaxed">
              Recibe una práctica semanal de Nei Gong y reflexiones del Tao. Cero spam, cero venta agresiva.
            </p>

            {subscribed ? (
              <div className="bg-[#BF953F]/20 border border-[#BF953F]/40 p-4 rounded-2xl text-xs text-[#FAF8F4] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BF953F] shrink-0" />
                <span>¡Gracias! Te hemos enviado la bienvenida a tu correo.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#FAF8F4]/10 border border-[#FAF8F4]/20 rounded-full text-[#FAF8F4] placeholder-[#FAF8F4]/50 focus:outline-hidden focus:border-[#BF953F]"
                />
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#FAF8F4]/10 border border-[#FAF8F4]/20 rounded-full text-[#FAF8F4] placeholder-[#FAF8F4]/50 focus:outline-hidden focus:border-[#BF953F]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-widest bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-full transition-all cursor-pointer shadow-md"
                >
                  Suscribirme Gratis
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Safety Disclaimer Banner */}
        <div className="my-6 p-4 rounded-xl bg-[#FAF8F4]/5 border border-[#FAF8F4]/10 text-xs text-[#FAF8F4]/60 leading-relaxed">
          <strong className="text-[#FAF8F4]/90 block mb-1">Aviso de Responsabilidad y Salud:</strong>
          El contenido, ejercicios y prácticas de Nei Gong y Qigong presentados en Dao Chang Consciente y Fluir Consciente tienen carácter puramente educativo y de cultivo personal. No constituyen asesoramiento médico, diagnóstico ni tratamiento psicológico. Consulta a un profesional sanitario antes de comenzar cualquier práctica si tienes condiciones médicas preexistentes o estás embarazada. Consulta nuestra página de{' '}
          <button
            onClick={() => onNavigate('seguridad')}
            className="text-[#BF953F] underline hover:text-[#C9A863]"
          >
            Seguridad y Contraindicaciones
          </button>.
        </div>

        {/* Bottom Bar with Copyright & Phase Scaffolding Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F4]/60 border-t border-[#FAF8F4]/10">
          <div>
            © {new Date().getFullYear()} Dao Chang Consciente · El Tao del Corazón. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('seguridad')}
              className="hover:text-[#FAF8F4] transition-colors"
            >
              Aviso Legal & Salud
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('scaffolded-phases')}
              className="hover:text-[#BF953F] transition-colors flex items-center gap-1 text-[#BF953F]"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Arquitectura Fases 2, 3 y 4</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
