import React from 'react';
import { BrandLogo } from '../brand/BrandLogo';
import { Heart, Compass, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';
import { PILLARS } from '../../data/pillarsData';

interface AboutViewProps {
  onNavigate: (view: string, param?: string) => void;
  onJoinChallenge: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onJoinChallenge }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="flex justify-center">
          <BrandLogo variant="master" size="lg" stacked={true} />
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#171614] leading-tight">
          El Tao del Corazón
        </h1>

        <p className="text-base sm:text-lg text-[#6E6962] leading-relaxed font-sans">
          Una casa abierta para cultivar la calma, la bioenergía y la coherencia corporal sin desconectarse del mundo moderno.
        </p>
      </div>

      {/* Story & Philosophy */}
      <div className="space-y-6 text-sm sm:text-base text-[#171614] leading-relaxed font-sans bg-white border border-[#171614]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
        <h2 className="text-2xl font-display font-medium text-[#171614]">
          Por Qué Existe Dao Chang Consciente
        </h2>

        <p>
          En la antigüedad, un <em>Dao Chang</em> (道場) era un lugar consagrado a la práctica del Camino: un espacio de estudio, alineación y silencio. Sin embargo, en el siglo XXI no todos pueden retirarse a una montaña o a un monasterio.
        </p>

        <p>
          <strong>Dao Chang Consciente</strong> nace para traer la pureza del Nei Gong (alquimia interna) y la sabiduría del Tao a la vida de quien trabaja en un escritorio, cuida de su familia y navega el estrés de una ciudad moderna.
        </p>

        <div className="p-4 rounded-xl bg-[#BF953F]/10 border border-[#BF953F]/30 text-xs sm:text-sm text-[#171614]">
          <strong className="text-[#BF953F] block mb-1">Nuestra Marca Hermana: Fluir Consciente</strong>
          Para quienes se inician y aún no conocen la terminología del Tao, creamos <strong>Fluir Consciente</strong> como puerta de entrada directa, amable y práctica. <strong>Dao Chang Consciente</strong> es la casa matriz de nivel avanzado para quienes deciden profundizar en el mapa completo de la alquimia interna.
        </div>
      </div>

      {/* The 4 Sub-brands Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-display font-medium text-[#171614] text-center">
          El Ecosistema de los 4 Caminos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              onClick={() => onNavigate('pillar', p.id)}
              className="bg-white border border-[#171614]/10 hover:border-[#BF953F] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-start gap-4"
            >
              <div className="mt-1">
                <BrandLogo variant={p.id} size="sm" showWordmark={false} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-display font-medium text-[#171614]">
                  {p.brandName}
                </h3>
                <div className="text-xs font-accent text-[#BF953F]">
                  {p.subName}
                </div>
                <p className="text-xs text-[#6E6962] line-clamp-2">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#171614] text-[#FAF8F4] border border-[#BF953F]/30 rounded-3xl p-6 sm:p-10 text-center space-y-4">
        <h3 className="text-2xl font-display font-medium text-[#FAF8F4]">
          Comienza Hoy tu Camino de Cultivo
        </h3>
        <p className="text-xs sm:text-sm text-[#FAF8F4]/80 max-w-lg mx-auto leading-relaxed">
          El primer paso no cuesta nada y solo toma 10 minutos al día. Inscríbete en el Reto de 7 Días de Fluir Consciente.
        </p>
        <button
          onClick={onJoinChallenge}
          className="px-6 py-3 text-xs sm:text-sm font-semibold bg-[#BF953F] hover:bg-[#C9A863] text-[#171614] rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Unirme al Reto Gratuito de 7 Días</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
