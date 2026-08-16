import { Pillar } from '../types';

export const PILLARS: Pillar[] = [
  {
    id: 'mente',
    slug: 'dojo-mente-presente',
    brandName: 'Dojo Mente Presente',
    subName: 'Mente, Meditación & Silencio Interior',
    tagline: 'Despeja el ruido mental y reposa en la quietud lúcida del Shen.',
    element: 'Espacio / Vacío',
    focus: 'Aquietar el diálogo interno, regular el sistema nervioso y cultivar el Shen (mente clara).',
    colorAccent: '#C9A863',
    iconType: 'temple-mind',
    description: 'El Dojo Mente Presente es tu espacio de entrenamiento para entrenar la atención y disolver el agotamiento cognitivo. A través de la meditación daoísta clásica (Zuo Wang) y la respiración del vacío, aprendes a observar tus pensamientos sin quedar atrapado en ellos.',
    targetAudience: [
      'Personas con mente hiperactiva que "no logran meditar" con métodos convencionales',
      'Profesionales con sobrecarga de decisiones y niebla mental al final del día',
      'Practicantes que buscan una meditación basada en la no-resistencia y el Wu Wei'
    ],
    corePrinciples: [
      'No luches contra los pensamientos: conviértete en el cielo que los contiene.',
      'El silencio no es la ausencia de sonido, sino la ausencia de resistencia.',
      'Menos esfuerzo produce mayor claridad (el principio de Wu Wei).'
    ],
    practices: [
      {
        id: 'zuo-wang-iniciacion',
        title: 'Zuo Wang: Sentarse y Olvidar (7 Minutos)',
        duration: '7 min',
        level: 'Iniciación',
        description: 'La práctica madre de la meditación daoísta. Sin visualizaciones complejas ni mantras forzados.',
        steps: [
          'Siéntate con la espalda erguida y los hombros sueltos.',
          'Cierra los ojos en un 80%, dejando entrar una pequeña rendija de luz.',
          'Observa el fluir del aire en la punta de la nariz.',
          'Cuando aparezca un pensamiento, di mentalmente "gracias por pasar" y déjalo seguir sin evaluarlo.'
        ],
        keyBenefit: 'Disminuye la actividad de la red neuronal por defecto (DMN), reduciendo la rumia mental.'
      },
      {
        id: 'respiracion-vacio',
        title: 'Respiración del Vacío y Descompresión Mental',
        duration: '5 min',
        level: 'Iniciación',
        description: 'Técnica de exhalación prolongada para activar el nervio vago y frenar el tren de pensamientos.',
        steps: [
          'Inhala por la nariz en 4 tiempos llenando el vientre bajo.',
          'Pausa suave de 2 tiempos sin cerrar la garganta.',
          'Exhala por la boca entreabierta en 8 tiempos con un suspiro inaudible.',
          'Repite 10 ciclos.'
        ],
        keyBenefit: 'Induce ondas alfa cerebrales y resetea la respuesta al estrés en menos de 3 minutos.'
      },
      {
        id: 'limpieza-espejo-shen',
        title: 'La Limpieza del Espejo Interior (Shen)',
        duration: '10 min',
        level: 'Intermedio',
        description: 'Práctica de contemplación en el centro de la cabeza para disolver la reactividad emocional.',
        steps: [
          'Lleva la mirada interna hacia el centro del cráneo (punto Bai Hui hacia abajo).',
          'Siente ese espacio como una cueva cristalina y fresca.',
          'Permite que todas las preocupaciones del día se evaporen como gotas de agua sobre una piedra tibia.',
          'Descansa en esa sensación de ligereza.'
        ],
        keyBenefit: 'Restaura la intuición y la capacidad de tomar decisiones desde la serenidad.'
      }
    ],
    leadMagnet: {
      title: 'Checklist de Meditación para Personas Inquietas',
      format: 'Guía Rápida Interactiva + Audio de 5 min',
      description: 'El protocolo exacto de 3 pasos para sentarte a meditar sin frustrarte si tu mente nunca se calla.',
      ctaLabel: 'Descargar Checklist de Mente en Calma',
      resourceName: 'Checklist_Mente_Inquieta_DaoChang.pdf'
    },
    recommendedGlossarySlugs: ['shen', 'zuo-wang', 'wu-wei', 'tao', 'fluir-consciente']
  },
  {
    id: 'energia',
    slug: 'zendo-energia-consciente',
    brandName: 'Zendo Energía Consciente',
    subName: 'Energía, Jing, Qi & Los Tres Tesoros',
    tagline: 'Restaura tu vitalidad biológica y sella las fugas de energía cotidiana.',
    element: 'Fuego / Agua (Alquimia)',
    focus: 'Preservar el Jing (esencia), movilizar el Qi estancado y nutrir los calderos energéticos.',
    colorAccent: '#BF953F',
    iconType: 'temple-energy',
    description: 'El Zendo Energía Consciente enseña los secretos de la bioenergética daoísta. Aprende a distinguir entre estar físicamente cansado y estar energéticamente drenado, sellando las fugas que agotan tu vitalidad día tras día.',
    targetAudience: [
      'Personas con fatiga crónica que despiertan cansadas aun habiendo dormido',
      'Practicantes que sienten pesadez corporal, frío en extremidades o bloqueos emocionales',
      'Quienes desean aprender Qigong y Nei Gong con fundamentos fisiológicos y sutiles claros'
    ],
    corePrinciples: [
      'No puedes generar energía duradera sobre un cuerpo que tiene fugas de Jing.',
      'El calor en el Dan Tian es el termostato de tu sistema inmunológico.',
      'Donde colocas tu atención, allí se reúne tu energía vital.'
    ],
    practices: [
      {
        id: 'activacion-dan-tian',
        title: 'Despertar del Caldero Inferior (Dan Tian)',
        duration: '8 min',
        level: 'Iniciación',
        description: 'Técnica para concentrar la energía dispersa en el centro de gravedad del cuerpo.',
        steps: [
          'De pie con pies al ancho de hombros, rodillas ligeramente microflexionadas.',
          'Coloca la mano derecha sobre el vientre bajo y la izquierda encima.',
          'Inhala enviando el aire hacia tus manos sintiendo que el abdomen se expande en 360 grados.',
          'Al exhalar, visualiza una esfera dorada tibia en el centro exacto de la pelvis.'
        ],
        keyBenefit: 'Aumenta la estabilidad corporal, mejora la digestión y calma la ansiedad flotante.'
      },
      {
        id: 'frotado-ming-men',
        title: 'Encendido de la Puerta de la Vida (Ming Men)',
        duration: '4 min',
        level: 'Iniciación',
        description: 'Masaje bioenergético sobre los riñones para recargar el fuego metabólico.',
        steps: [
          'Frota enérgicamente las palmas hasta que estén muy calientes.',
          'Colócalas sobre la zona lumbar baja (a nivel de las costillas flotantes).',
          'Haz 36 círculos suaves hacia afuera y 36 círculos hacia adentro.',
          'Respira sintiendo cómo el calor penetra hacia los riñones.'
        ],
        keyBenefit: 'Elimina la sensación de frío lumbar y recarga la reserva de Jing diario.'
      },
      {
        id: 'sostener-cielo-qigong',
        title: 'Sostener el Cielo con Ambas Manos (Ba Duan Jin)',
        duration: '6 min',
        level: 'Iniciación',
        description: 'El primer movimiento de los célebres 8 Brocados de Seda para desbloquear los canales del torso.',
        steps: [
          'Entrelaza los dedos a la altura del vientre.',
          'Inhala elevando las manos por el centro del pecho, gira las palmas hacia arriba al pasar la cara y empuja el cielo.',
          'Mira suavemente hacia arriba manteniendo los hombros relajados.',
          'Exhala bajando los brazos por los costados en un arco amplio y armonioso.'
        ],
        keyBenefit: 'Regula el Triple Calentador, oxigena órganos internos y alivia la pesadez diafragmática.'
      }
    ],
    leadMagnet: {
      title: 'Mapa Interactivo de los 3 Tesoros (Jing, Qi, Shen)',
      format: 'Infografía Exclusiva + Test de Fugas Energéticas',
      description: 'Descubre en 2 minutos cuál de tus tres calderos está perdiendo vitalidad y cómo sellarlo hoy mismo.',
      ctaLabel: 'Descargar Mapa de los 3 Tesoros',
      resourceName: 'Mapa_3_Tesoros_DaoChang.pdf'
    },
    recommendedGlossarySlugs: ['jing', 'qi', 'shen', 'dan-tian', 'ming-men', 'qigong']
  },
  {
    id: 'cuerpo',
    slug: 'academia-cuerpo-consciente',
    brandName: 'Academia Cuerpo Consciente',
    subName: 'Movimiento, Postura, Fascias & Enraizamiento',
    tagline: 'Habita tu estructura física con gracia, soltura (Song) y fuerza sin esfuerzo.',
    element: 'Tierra / Madera',
    focus: 'Alineación del eje vertical Zhong Ding, descompresión fascial y soltura de tensiones crónicas.',
    colorAccent: '#BF953F',
    iconType: 'temple-body',
    description: 'La Academia Cuerpo Consciente recupera la sabiduría biomecánica del Nei Gong tradicional. Nuestro cuerpo no es una máquina que reparar, sino un templo que habitar con presencia, alineación natural y relajación activa (Song).',
    targetAudience: [
      'Personas con dolor cervical o lumbar derivado de largas horas de trabajo en escritorio',
      'Practicantes de yoga, pilates o danza que buscan entender la conexión interna fascial',
      'Quienes quieren ganar flexibilidad y fuerza sin tensión muscular excesiva'
    ],
    corePrinciples: [
      'La fuerza verdadera nace del enraizamiento, no de la contracción muscular rígida.',
      'La estructura correcta permite que la gravedad trabaje a tu favor y no en tu contra.',
      'El cuerpo recuerda todo lo que la mente intenta olvidar; al soltar el cuerpo, liberas la mente.'
    ],
    practices: [
      {
        id: 'postura-arbol-zhan-zhuang',
        title: 'Zhan Zhuang: La Postura del Árbol (5 Minutos)',
        duration: '5 min',
        level: 'Iniciación',
        description: 'La práctica postural más poderosa de las artes internas chinas para reconstruir el eje corporal.',
        steps: [
          'De pie con pies paralelos al ancho de caderas. Rodillas desbloqueadas.',
          'Pelvis neutra como si fueras a sentarte en un taburete alto.',
          'Abraza un árbol imaginario frente al pecho con los codos caídos.',
          'Siente la coronilla empujar suavemente el cielo y las plantas de los pies hundirse en la tierra.'
        ],
        keyBenefit: 'Reajusta la postura vertebral, fortalece tendones profundos y aquieta el pulso cardíaco.'
      },
      {
        id: 'soltar-song-escritorio',
        title: 'El Reset de Song para la Oficina (3 Minutos)',
        duration: '3 min',
        level: 'Iniciación',
        description: 'Secuencia rápida de descompresión cervical y escapular sin levantarte de la silla.',
        steps: [
          'Separa la espalda del respaldo de la silla y apoya ambos pies planos en el suelo.',
          'Inhala elevando los hombros hacia las orejas; exhala dejándolos caer por completo con sonido "haaa".',
          'Gira suavemente la barbilla hacia el hombro derecho y luego al izquierdo dibujando una media luna.',
          'Abre y cierra las manos 10 veces sacudiendo las muñecas.'
        ],
        keyBenefit: 'Descomprime el trapecio y reactiva el riego sanguíneo hacia el cerebro de inmediato.'
      },
      {
        id: 'apertura-kua',
        title: 'Apertura del Kua (Articulación Coxofemoral)',
        duration: '7 min',
        level: 'Intermedio',
        description: 'Desbloqueo de la pelvis para liberar el flujo de energía hacia las piernas.',
        steps: [
          'Pies ligeramente más anchos que los hombros.',
          'Realiza giros lentos de cadera como si dibujaras círculos en el suelo con el coxis.',
          'Mantén el torso vertical sin inclinarte hacia adelante.',
          'Siente cómo se aflojan las ingles y la zona lumbar.'
        ],
        keyBenefit: 'Libera la tensión acumulada en el músculo psoas (el músculo del alma y del estrés).'
      }
    ],
    leadMagnet: {
      title: 'Guía de Alineación y Postura para el Trabajo Sentado',
      format: 'Póster Digital Descargable + Micro-Rutina',
      description: '5 ajustes ergonómicos daoístas que eliminan el dolor de espalda sin comprar sillas caras.',
      ctaLabel: 'Descargar Guía de Alineación Corporal',
      resourceName: 'Guia_Postura_DaoChang.pdf'
    },
    recommendedGlossarySlugs: ['zhong-ding', 'song', 'neigong', 'bai-hui', 'dan-tian']
  },
  {
    id: 'relaciones',
    slug: 'studio-relaciones-conscientes',
    brandName: 'Studio Relaciones Conscientes',
    subName: 'Vínculos, Pareja, Polaridad & El Tao del Corazón',
    tagline: 'Aprende a comunicarte desde el Xin (corazón lúcido) y danzar con las polaridades.',
    element: 'Agua / Fuego (Encuentro)',
    focus: 'Sanar el vínculo con uno mismo, equilibrar el Yin/Yang en la pareja y cultivar empatía profunda.',
    colorAccent: '#C9A863',
    iconType: 'temple-relations',
    description: 'El Studio Relaciones Conscientes traslada la alquimia interna al territorio de los vínculos humanos. Cuando cultivas un corazón en paz (Xin), dejas de relacionarte desde la carencia o el miedo y comienzas a crear encuentros sagrados y armónicos.',
    targetAudience: [
      'Parejas que desean profundizar su intimidad y superar dinámicas de conflicto repetitivas',
      'Personas que buscan entender la polaridad masculina (Yang) y femenina (Yin) en sus vínculos',
      'Quienes desean comunicarse con asertividad sin endurecerse ni volverse complacientes'
    ],
    corePrinciples: [
      'No puedes conectar verdaderamente con el otro si estás desconectado de tu propio centro.',
      'La polaridad Yin/Yang crea atracción y vitalidad; la falta de polaridad genera estancamiento.',
      'Escuchar desde el Xin es escuchar sin preparar mentalmente tu defensa o respuesta.'
    ],
    practices: [
      {
        id: 'escucha-desde-xin',
        title: 'Escucha Profunda desde el Corazón (Xin)',
        duration: '6 min',
        level: 'Iniciación',
        description: 'Dinámica para parejas o amigos: escuchar 3 minutos sin interrumpir ni dar consejos.',
        steps: [
          'Siéntense frente a frente a una distancia cómoda.',
          'La persona A habla durante 3 minutos sobre cómo se siente hoy.',
          'La persona B escucha manteniendo la atención en su propio pecho, asintiendo solo con la mirada sin hablar.',
          'Cambien de rol.'
        ],
        keyBenefit: 'Crea un espacio de seguridad psicológica donde las defensas del ego se desvanecen.'
      },
      {
        id: 'respiracion-polaridad',
        title: 'Respiración de Alineación Yin-Yang en Pareja',
        duration: '8 min',
        level: 'Iniciación',
        description: 'Sincronización respiratoria para disolver tensiones tras una discusión o día difícil.',
        steps: [
          'Siéntense espalda con espalda sintiendo el contacto de las columnas vertebrales.',
          'Cierren los ojos y sientan el ritmo respiratorio del otro.',
          'Gradualmente, sincronicen la respiración: cuando uno inhala, el otro exhala con suavidad.',
          'Permitan que la calidez del contacto disuelva las barreras defensivas.'
        ],
        keyBenefit: 'Sincroniza la variabilidad cardíaca (HRV) entre ambos, restaurando la intimidad.'
      },
      {
        id: 'limpieza-rencores-tao',
        title: 'Práctica de Soltar Resentimientos Pasados',
        duration: '10 min',
        level: 'Intermedio',
        description: 'Visualización daoísta del agua para disolver reproches acumulados.',
        steps: [
          'Respira llevando las manos al centro del pecho (Dan Tian Medio).',
          'Trae a la mente una herida o reclamo que guardas hacia alguien cercano.',
          'Imagina que ese dolor es un bloque de hielo en tu pecho y tu respiración es un sol tibio.',
          'Con cada exhalación, el hielo se derrite y se convierte en agua clara que fluye hacia la tierra.'
        ],
        keyBenefit: 'Libera la carga emocional acumulada que enferma el corazón y cierra la comunicación.'
      }
    ],
    leadMagnet: {
      title: 'Test Interactivo: ¿Tu Vínculo Fluye o se Estanca?',
      format: 'Cuestionario de Diagnóstico de Pareja + Guía de Polaridad',
      description: 'Identifica los 3 patrones inconscientes que están bloqueando la complicidad en tu relación.',
      ctaLabel: 'Hacer Test de Relaciones Conscientes',
      resourceName: 'Test_Relaciones_DaoChang.pdf'
    },
    recommendedGlossarySlugs: ['xin', 'yin-yang', 'wu-wei', 'tao', 'song']
  }
];
