import {
  ScaffoldedCourse,
  ScaffoldedMembershipTier,
  ScaffoldedConsultation,
  ScaffoldedAffiliateItem
} from '../types';

export const SCAFFOLDED_COURSES: ScaffoldedCourse[] = [
  {
    id: 'curso-fluir-consciente-fundacional',
    title: 'Fluir Consciente: Los Fundamentos del Tao Cotidiano',
    subtitle: 'El curso de iniciación para personas con mente inquieta y poco tiempo.',
    level: 'Iniciación (Fluir Consciente)',
    modulesCount: 6,
    durationHours: 8,
    hotmartCheckoutUrl: 'https://pay.hotmart.com/PLACEHOLDER_FLUIR_CONSCIENTE',
    status: 'scaffolded_phase2',
    description: 'Aprende las 12 micro-prácticas fundamentales para regular tu sistema nervioso, mejorar tu postura y recuperar tu energía sin complicadas posturas ni teorías inaccesibles.',
    syllabus: [
      'Módulo 1: El Despertar del Eje Zhong Ding y Postura sin Dolor',
      'Módulo 2: Respiración 360 y Descompresión del Diafragma',
      'Módulo 3: Zuo Wang: Meditación para Mentes que no se Callan',
      'Módulo 4: Sellar las Fugas de Jing en la Rutina Diaria',
      'Módulo 5: Wu Wei en el Trabajo y Toma de Decisiones',
      'Módulo 6: Integración: Tu Rutina Matutina de 10 Minutos'
    ]
  },
  {
    id: 'curso-dao-chang-neigong-avanzado',
    title: 'Nei Gong Daoísta: El Despertar del Caldero & Alquimia Interna',
    subtitle: 'El programa avanzado de transformación bioenergética y cultivo de los Tres Tesoros.',
    level: 'Avanzado (Dao Chang Consciente)',
    modulesCount: 10,
    durationHours: 24,
    hotmartCheckoutUrl: 'https://pay.hotmart.com/PLACEHOLDER_NEIGONG_AVANZADO',
    status: 'scaffolded_phase2',
    description: 'Inmersión profunda en la alquimia interna tradicional: apertura de canales sutiles, acumulación de Qi en el Dan Tian Inferior, trabajo con la médula ósea y refinamiento del Shen.',
    syllabus: [
      'Módulo 1: Anatomía Sutil y Fascial en el Nei Gong Tradicional',
      'Módulo 2: Sellado del Suelo Pélvico y Preservación del Jing Prenatal',
      'Módulo 3: El Encendido de Ming Men y la Respiración de Fuelle',
      'Módulo 4: Apertura de la Órbita Microcósmica (Xiao Zhou Tian)',
      'Módulo 5: Transformación del Jing en Qi y Purificación de Órganos',
      'Módulo 6: El Caldero Medio: Alquimia del Xin y las Emociones',
      'Módulo 7: Zuo Wang Avanzado y Despertar del Shen en Bai Hui',
      'Módulo 8: El Trabajo de los Huesos y Tendones (Yi Jin Jing)',
      'Módulo 9: Transmutación y Preservación de la Energía Sexual',
      'Módulo 10: Integración Permanente: El Hombre y la Mujer Sabios en el Mundo'
    ]
  }
];

export const SCAFFOLDED_MEMBERSHIP: ScaffoldedMembershipTier[] = [
  {
    id: 'comunidad-templo-dao-chang',
    name: 'El Templo Virtual Dao Chang',
    tagline: 'Tu refugio semanal de práctica en vivo, biblioteca de meditaciones guiadas y acompañamiento.',
    status: 'scaffolded_phase3',
    features: [
      '2 Sesiones semanales de práctica de Nei Gong & Qigong en vivo con preguntas y respuestas',
      'Biblioteca On-Demand con más de 80 prácticas guiadas de 5, 10 y 20 minutos',
      'Círculo mensual de sabiduría daoísta aplicada y estudio del Tao Te Ching',
      'Comunidad privada sin algoritmos tóxicos para compartir procesos y avances',
      'Acceso con descuento prioritario a retiros presenciales'
    ]
  }
];

export const SCAFFOLDED_CONSULTATIONS: ScaffoldedConsultation[] = [
  {
    id: 'consultoria-1-a-1-diagnostico',
    title: 'Sesión de Diagnóstico Energético & Diseño de Práctica Personal (1:1)',
    duration: '60 minutos vía Zoom',
    status: 'scaffolded_phase3',
    description: 'Evaluación individualizada de tu postura, tus calderos energéticos (Jing/Qi/Shen) y diseño de una rutina de Nei Gong a medida de tus horarios y necesidades de salud.',
    includes: [
      'Lectura postural del eje Zhong Ding y análisis de bloqueos fasciales',
      'Detección precisa de tus fugas energéticas principales',
      'Plan en video personalizado de 3 micro-prácticas para tu caso',
      'Grabación completa de la sesión + seguimiento por audio durante 14 días'
    ]
  }
];

export const SCAFFOLDED_AFFILIATES: ScaffoldedAffiliateItem[] = [
  {
    id: 'zafu-meditacion-ergonomico',
    title: 'Cojín Zafu Ergonómico de Trigo Sarraceno Orgánico',
    category: 'Herramienta de Meditación',
    reasonWhy: 'Permite elevar la pelvis 8-12 cm manteniendo la lordosis lumbar neutra, facilitando el eje Zhong Ding sin tensión en las rodillas.',
    affiliateUrl: 'https://amzn.to/PLACEHOLDER_ZAFU',
    status: 'scaffolded_phase4'
  },
  {
    id: 'te-roca-wuyi-da-hong-pao',
    title: 'Té Oolong de Roca Wuyi (Da Hong Pao Tradicional)',
    category: 'Té & Hierbas',
    reasonWhy: 'Cosechado en las montañas sagradas del Tao; calienta el bazo, tonifica el Qi del Dan Tian y aquieta el Shen tras la práctica.',
    affiliateUrl: 'https://amzn.to/PLACEHOLDER_TEA',
    status: 'scaffolded_phase4'
  },
  {
    id: 'libro-tao-te-ching-traduccion-maestro',
    title: 'Tao Te Ching (Traducción Directa y Comentarios de Maestros Internos)',
    category: 'Literatura Taoísta',
    reasonWhy: 'La edición más fiel y libre de dogmas occidentales para comprender el Wu Wei y el cultivo del Corazón.',
    affiliateUrl: 'https://amzn.to/PLACEHOLDER_BOOK',
    status: 'scaffolded_phase4'
  }
];
