import React from 'react';
import daoChangMasterIcon from '../../assets/brand/dao-chang-master-icon.png';

interface BrandLogoProps {
  variant?: 'master' | 'fluir' | 'mente' | 'energia' | 'cuerpo' | 'relaciones';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  stacked?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'master',
  size = 'md',
  showWordmark = true,
  stacked = false,
  className = '',
  theme = 'light'
}) => {
  const sizeMap = {
    sm: { icon: 28, titleSize: 'text-sm', subSize: 'text-[10px]' },
    md: { icon: 40, titleSize: 'text-base', subSize: 'text-xs' },
    lg: { icon: 54, titleSize: 'text-xl', subSize: 'text-sm' },
    xl: { icon: 72, titleSize: 'text-2xl', subSize: 'text-base' },
  };

  const currentSize = sizeMap[size];
  const isDark = theme === 'dark';

  // Render SVG Icon depending on variant
  const renderIcon = () => {
    const s = currentSize.icon;
    const inkColor = isDark ? '#FAF8F4' : '#171614';
    const goldColor = '#BF953F';
    const goldSoftColor = '#C9A863';

    switch (variant) {
      case 'master':
      default:
        return (
          <img
            src={daoChangMasterIcon}
            width={s}
            height={s}
            alt="Dao Chang Consciente"
            className="shrink-0 transition-transform duration-300 hover:scale-105 object-contain"
          />
        );

      case 'fluir':
        return (
          <svg
            width={s}
            height={s}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 transition-transform duration-300 hover:scale-105"
            aria-label="Fluir Consciente Logo"
          >
            {/* Temple Roof */}
            <path
              d="M 50 10 L 84 28 C 74 27, 66 29, 60 33 L 40 33 C 34 29, 26 27, 16 28 Z"
              fill={goldColor}
            />
            {/* Dual Fluid Waves Intertwined */}
            <path
              d="M 22 55 C 32 40, 44 70, 58 52 C 68 40, 78 60, 80 50"
              stroke={inkColor}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 20 68 C 34 52, 48 80, 62 64 C 72 52, 78 72, 82 66"
              stroke={goldColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Heart Drop in Center */}
            <path
              d="M 50 36 C 45 42, 40 48, 50 60 C 60 48, 55 42, 50 36 Z"
              fill={goldSoftColor}
            />
            <line x1="24" y1="92" x2="76" y2="92" stroke={inkColor} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      case 'mente':
        return (
          <svg
            width={s}
            height={s}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-label="Dojo Mente Presente Logo"
          >
            {/* Temple Frame */}
            <path d="M 50 12 L 82 28 C 72 27, 64 29, 58 33 L 42 33 C 36 29, 28 27, 18 28 Z" fill={goldColor} />
            {/* Eye of Shen / Lotus of Stillness */}
            <path
              d="M 22 56 C 36 40, 64 40, 78 56 C 64 72, 36 72, 22 56 Z"
              stroke={inkColor}
              strokeWidth="3"
            />
            {/* Inner Clear Pupil / Golden Spark */}
            <circle cx="50" cy="56" r="8" fill={goldColor} />
            <circle cx="50" cy="56" r="3" fill="#FAF8F4" />
            <line x1="26" y1="92" x2="74" y2="92" stroke={goldSoftColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'energia':
        return (
          <svg
            width={s}
            height={s}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-label="Zendo Energía Consciente Logo"
          >
            {/* Temple Roof */}
            <path d="M 50 12 L 82 28 C 72 27, 64 29, 58 33 L 42 33 C 36 29, 28 27, 18 28 Z" fill={goldColor} />
            {/* Spiral of Qi / Flame of Ming Men */}
            <path
              d="M 50 82 C 34 76, 28 58, 38 46 C 46 36, 62 40, 64 54 C 66 66, 52 70, 46 64 C 42 60, 46 52, 52 52"
              stroke={goldColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="50" cy="50" r="4" fill={inkColor} />
            <line x1="26" y1="92" x2="74" y2="92" stroke={inkColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'cuerpo':
        return (
          <svg
            width={s}
            height={s}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-label="Academia Cuerpo Consciente Logo"
          >
            {/* Temple Roof */}
            <path d="M 50 12 L 82 28 C 72 27, 64 29, 58 33 L 42 33 C 36 29, 28 27, 18 28 Z" fill={goldColor} />
            {/* Central Vertical Pillar (Zhong Ding) with Rooting Base */}
            <path d="M 50 32 L 50 86" stroke={inkColor} strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 32 50 Q 50 44 68 50" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M 28 72 Q 50 64 72 72" stroke={goldSoftColor} strokeWidth="3" strokeLinecap="round" />
            <line x1="24" y1="92" x2="76" y2="92" stroke={inkColor} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      case 'relaciones':
        return (
          <svg
            width={s}
            height={s}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-label="Studio Relaciones Conscientes Logo"
          >
            {/* Temple Roof */}
            <path d="M 50 12 L 82 28 C 72 27, 64 29, 58 33 L 42 33 C 36 29, 28 27, 18 28 Z" fill={goldColor} />
            {/* Two Intertwined Heart Rings (Yin & Yang) */}
            <circle cx="42" cy="58" r="16" stroke={inkColor} strokeWidth="3" />
            <circle cx="58" cy="58" r="16" stroke={goldColor} strokeWidth="3" />
            <circle cx="50" cy="58" r="3" fill={goldSoftColor} />
            <line x1="24" y1="92" x2="76" y2="92" stroke={inkColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };

  const getWordmark = () => {
    switch (variant) {
      case 'master':
        return {
          title: 'Dao Chang Consciente',
          subtitle: 'El Tao del Corazón',
        };
      case 'fluir':
        return {
          title: 'Fluir Consciente',
          subtitle: 'Iniciación al Tao Cotidiano',
        };
      case 'mente':
        return {
          title: 'Dojo Mente Presente',
          subtitle: 'Mente, Meditación & Silencio',
        };
      case 'energia':
        return {
          title: 'Zendo Energía Consciente',
          subtitle: 'Jing, Qi & Vitalidad Biológica',
        };
      case 'cuerpo':
        return {
          title: 'Academia Cuerpo Consciente',
          subtitle: 'Movimiento, Postura & Fascias',
        };
      case 'relaciones':
        return {
          title: 'Studio Relaciones Conscientes',
          subtitle: 'Vínculos, Pareja & Polaridad',
        };
    }
  };

  const { title, subtitle } = getWordmark();

  return (
    <div
      className={`flex ${
        stacked ? 'flex-col items-center text-center' : 'flex-row items-center text-left'
      } gap-3 ${className}`}
    >
      <div className="shrink-0">{renderIcon()}</div>
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-display font-medium leading-none tracking-tight ${
              currentSize.titleSize
            } ${isDark ? 'text-[#FAF8F4]' : 'text-[#171614]'}`}
          >
            {title}
          </span>
          <span
            className={`font-accent leading-tight mt-0.5 tracking-normal ${
              currentSize.subSize
            } text-[#BF953F]`}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};
