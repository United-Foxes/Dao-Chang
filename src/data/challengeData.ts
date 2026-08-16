import { ChallengeDay, EmailSequenceItem } from '../types';

export const CHALLENGE_DAYS: ChallengeDay[] = [
  {
    day: 1,
    title: 'El Despertar del Eje: Postura y Presencia',
    theme: 'Cuerpo y Enraizamiento',
    pillar: 'cuerpo',
    duration: '10 min',
    mindAspect: 'Observar cómo la postura física moldea de inmediato el estado mental y reduce el diálogo ansioso.',
    bodyAspect: 'Alineación de coronilla Bai Hui y enraizamiento de pies en el eje vertical Zhong Ding.',
    practicalAction: '5 minutos de Zhan Zhuang (Postura del Árbol básica) + 5 minutos de respiración abdominal conectada.',
    quote: 'El árbol que resiste las tempestades no es el más rígido, sino el que tiene raíces más profundas en la tierra.'
  },
  {
    day: 2,
    title: 'Respirar hacia el Caldero: Despertar el Dan Tian',
    theme: 'Energía y Respiración',
    pillar: 'energia',
    duration: '10 min',
    mindAspect: 'Llevar la mente desde el torbellino de la cabeza hacia la tranquilidad sólida del bajo vientre.',
    bodyAspect: 'Respiración diafragmática 360 grados para masajear órganos internos y calmar el nervio vago.',
    practicalAction: '10 minutos sintiendo la expansión del Dan Tian Inferior con ambas manos sobre el abdomen.',
    quote: 'Donde descansa tu respiración, allí se aquieta tu mente.'
  },
  {
    day: 3,
    title: 'El Arte de Soltar: Song en la Vida Cotidiana',
    theme: 'Relajación Activa & Fascias',
    pillar: 'cuerpo',
    duration: '12 min',
    mindAspect: 'Reconocer los micro-espasmos de control y tensión que activamos inconscientemente durante el día.',
    bodyAspect: 'Liberación de hombros, mandíbula, entrecejo y suelo pélvico sin desplomar la postura.',
    practicalAction: 'Secuencia de sacudida suave de articulaciones (Fa Song Gong) + escaneo corporal de descompresión.',
    quote: 'Lo flexible vence a lo rígido. Quien aprende a soltar nunca puede ser atrapado por la angustia.'
  },
  {
    day: 4,
    title: 'Zuo Wang: Sentarse y Disolver el Ruido',
    theme: 'Mente y Vacío Lúcido',
    pillar: 'mente',
    duration: '10 min',
    mindAspect: 'Dejar de pelear con los pensamientos: contemplarlos como nubes pasajeras en el cielo del Shen.',
    bodyAspect: 'Inmovilidad relajada y cómoda con ojos semicerrados para aquietar la corteza visual.',
    practicalAction: '7 minutos de Zuo Wang guiado + 3 minutos de integración con respiración suave.',
    quote: 'El agua turbia se aclara sola cuando dejas de agitarla con la mano.'
  },
  {
    day: 5,
    title: 'Sellar las Fugas de Jing: Recuperar tu Batería',
    theme: 'Bioenergética y Vitalidad',
    pillar: 'energia',
    duration: '12 min',
    mindAspect: 'Aprender a decir "no" sin culpa y reconocer qué situaciones o hábitos drenan tu vitalidad diaria.',
    bodyAspect: 'Activación de la Puerta de la Vida (Ming Men) con masaje de calor en la zona lumbar.',
    practicalAction: 'Frotado bioenergético de riñones + apagado digital 1 hora antes de dormir esta noche.',
    quote: 'Preservar tu Jing no es egoísmo; es el combustible indispensable para iluminar a quienes amas.'
  },
  {
    day: 6,
    title: 'El Templo del Xin: Escuchar desde el Corazón',
    theme: 'Relaciones y Conexión',
    pillar: 'relaciones',
    duration: '10 min',
    mindAspect: 'Sanar la reactividad defensiva en nuestras conversaciones y abrir un espacio de empatía auténtica.',
    bodyAspect: 'Apertura del Dan Tian Medio (pecho) y respiración coordinada con la variabilidad cardíaca.',
    practicalAction: 'Ejercicio de escucha profunda sin interrumpir con alguien cercano o práctica de auto-perdón.',
    quote: 'Cuando el corazón está en paz, cada mirada se vuelve un abrazo silencioso.'
  },
  {
    day: 7,
    title: 'La Integración del Fluir: El Tao en el Caos',
    theme: 'Wu Wei e Integración Total',
    pillar: 'mente',
    duration: '15 min',
    mindAspect: 'Vivir en Wu Wei: actuar con precisión y gracia sin forzar los acontecimientos.',
    bodyAspect: 'Micro-rutina de 7 minutos que combina mente, energía y cuerpo para comenzar cada mañana.',
    practicalAction: 'Realizar la rutina completa de 7 minutos "Fluir Consciente" y fijar tu nuevo ancla matutina.',
    quote: 'El río ha llegado al mar. Ahora la práctica no es algo que haces; es el modo en que caminas por el mundo.'
  }
];

export const EMAIL_SEQUENCE: EmailSequenceItem[] = [
  {
    step: 1,
    delay: 'Inmediato tras registrarse',
    subject: '🌿 Tu Reto de 7 Días ya comenzó (Día 1: El Despertar del Eje)',
    purpose: 'Entrega inmediata del recurso prometido + instrucciones claras de cómo usarlo sin abrumarse.',
    previewText: 'Bienvenido al Templo. Tu acceso al Día 1 y tu Guía en PDF están listos aquí dentro...',
    bodyParagraphs: [
      '¡Hola! Te damos una cálida bienvenida a Fluir Consciente y al espacio de Dao Chang Consciente.',
      'Tu decisión de regalarte 10 minutos al día para reconectar con tu cuerpo y serenar tu mente marca un punto de inflexión. Aquí no encontrarás dogmas ni disciplinas agotadoras: solo sabiduría práctica de 2.500 años adaptada a tu vida moderna.',
      'Hoy empezamos con el Día 1: "El Despertar del Eje". Aprenderás por qué tu postura física es el interruptor maestro de tu ansiedad o tu calma.'
    ],
    giftOrAction: 'Enlace al video/audio guiado de 10 min del Día 1 + PDF "Cuaderno de Bitácora del Reto".'
  },
  {
    step: 2,
    delay: 'Día 2 (24 horas después)',
    subject: '⚡ Una micro-práctica de 2 minutos para cuando sientas que no puedes más',
    purpose: 'Generosidad pura: entregar una herramienta de alto valor que resuelva un dolor inmediato sin pedir nada a cambio.',
    previewText: 'Si hoy tu mente va a 100 por hora, no intentes meditar. Haz este ajuste bioenergético...',
    bodyParagraphs: [
      'Ayer sentamos las bases de la estructura. Hoy quiero compartir contigo un "secreto de pasillo" del Nei Gong daoísta que me salvó en mis momentos de mayor sobrecarga laboral.',
      'Cuando el cerebro está saturado, el peor error es sentarse a "intentar poner la mente en blanco". Eso solo genera frustración. El camino inteligente no es pelear con la mente, sino bajar la energía al Dan Tian con la respiración 360.',
      'Pruébalo durante 2 minutos antes de tu próxima comida: apoya las palmas en tu vientre bajo e inhala sintiendo calor.'
    ],
    giftOrAction: 'Audio exclusivo de respiración guiada exprés de 3 minutos para el teléfono.'
  },
  {
    step: 3,
    delay: 'Día 4 (Mitad del reto)',
    subject: '🏮 Por qué nació Dao Chang Consciente (y por qué dejamos de creer en la productividad tóxica)',
    purpose: 'Historia de origen, vulnerabilidad, conexión humana y diferenciación de marca (el Tao del Corazón vs modas de bienestar superficial).',
    previewText: 'Hace unos años estaba en la cima laboral, pero por dentro mi energía vital (Jing) estaba completamente quemada...',
    bodyParagraphs: [
      'Durante mucho tiempo creí que la solución al cansancio era esforzarse más: más café, más técnicas de productividad, más disciplina férrea. El resultado fue un colapso físico que me obligó a parar por completo.',
      'Fue en las montañas sagradas del Tao donde comprendí que la verdadera fuerza no nace de la rigidez, sino de la capacidad de fluir (Wu Wei). No necesitábamos más teorías; necesitábamos un "Dao Chang" (un lugar de cultivo) que pudiéramos llevar en el bolsillo en medio de la ciudad.',
      'Por eso creamos este espacio: para que nunca tengas que elegir entre tener éxito en el mundo y vivir con el corazón en paz.'
    ],
    giftOrAction: 'Reflexión profunda + acceso al glosario de términos clave sobre el Jing y el Shen.'
  },
  {
    step: 4,
    delay: 'Día 6',
    subject: '✨ Lo que le ocurrió a Carlos cuando dejó de empujar el río (Caso Real)',
    purpose: 'Prueba social, transformación tangible y demostración de que el método funciona en personas comunes.',
    previewText: 'Carlos dormía 4 horas y sufría de contracturas crónicas. En 3 semanas su vida dio un giro radical...',
    bodyParagraphs: [
      'Quiero contarte la historia de Carlos, arquitecto y padre de dos hijos. Llegó a nosotros escéptico: decía que "su cabeza iba demasiado rápido para la meditación tradicional".',
      'En lugar de obligarlo a sentarse en silencio por horas, le enseñamos a regular primero su eje corporal (Zhong Ding) y a sellar sus fugas de energía con la respiración del Dan Tian 10 minutos al día.',
      'A las tres semanas, no solo sus dolores cervicales habían desaparecido: sus relaciones familiares cambiaron por completo porque aprendió a escuchar desde el Xin (el corazón), sin reactividad.'
    ],
    giftOrAction: 'Plantilla de autodiagnóstico de fugas de energía cotidiana.'
  },
  {
    step: 5,
    delay: 'Día 7 (Cierre del reto)',
    subject: '🌊 Tu viaje apenas comienza: cómo seguir cultivando tu Templo Interior',
    purpose: 'Celebración del logro, invitación suave y sin presión a seguir en comunidad o estar atento a futuras aperturas.',
    previewText: '¡Felicidades por completar los 7 días! Aquí tienes tu mapa de integración para que esto no quede en una semana bonita...',
    bodyParagraphs: [
      '¡Enhorabuena! Has completado el Reto de 7 Días de Fluir Consciente. Has demostrado que cuando te comprometes con tu templo interno, la vida alrededor responde con mayor armonía.',
      'Muchos nos preguntan: "¿Y ahora qué sigue?". La clave no es hacer cosas más difíciles, sino mantener la llama viva con constancia suave.',
      'En las próximas semanas estaremos abriendo las primeras plazas para el Curso Completo de Nei Gong & Fluir Consciente en nuestra plataforma Dao Chang. Si quieres ser de los primeros en enterarte con condiciones exclusivas para nuestra comunidad pionera, mantente atento a tu correo.'
    ],
    giftOrAction: 'Póster descargable en alta resolución "Los 7 Principios del Tao del Corazón" + Invitación prioritaria a la lista de espera del curso.'
  }
];
