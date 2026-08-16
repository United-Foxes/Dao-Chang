import { QuizQuestion, QuizResult, PillarId } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cómo te sientes habitualmente al despertar por la mañana?',
    context: 'Tu estado al despertar es el termómetro más preciso de cómo tus calderos energéticos procesaron la noche.',
    options: [
      {
        text: 'Con la cabeza acelerada repasando listas de pendientes antes de salir de la cama.',
        subtext: 'Mente hiperactiva, Shen agitado desde primera hora.',
        pillarScores: { mente: 3, energia: 1, cuerpo: 0, relaciones: 0 }
      },
      {
        text: 'Cansado y pesado, como si el sueño no hubiera alcanzado a reparar mi vitalidad biológica.',
        subtext: 'Fuga de Jing (esencia) y falta de calor metabólico en riñones.',
        pillarScores: { mente: 0, energia: 3, cuerpo: 1, relaciones: 0 }
      },
      {
        text: 'Con rigidez física, cuello tenso o dolor lumbar que tarda en aflojarse.',
        subtext: 'Falta de alineación en el eje Zhong Ding y falta de elasticidad Song.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 3, relaciones: 0 }
      },
      {
        text: 'Con una sensación de agobio emocional o anticipando tensiones con otras personas.',
        subtext: 'Sobrecarga en el Xin (corazón) por dinámicas de relación no resueltas.',
        pillarScores: { mente: 1, energia: 0, cuerpo: 0, relaciones: 3 }
      }
    ]
  },
  {
    id: 2,
    question: 'Cuando enfrentas una situación de estrés imprevista, ¿cuál es tu primera reacción física?',
    context: 'El cuerpo reacciona milisegundos antes de que la mente consciente pueda formular un pensamiento.',
    options: [
      {
        text: 'Aprieto la mandíbula o encojo los hombros hacia las orejas de forma automática.',
        subtext: 'Tensión fascial y contracción del eje corporal.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 3, relaciones: 0 }
      },
      {
        text: 'Empiezo a sobrepensar escenarios catastróficos buscando controlar cada variable.',
        subtext: 'Pérdida del principio de Wu Wei y dispersión mental.',
        pillarScores: { mente: 3, energia: 0, cuerpo: 0, relaciones: 1 }
      },
      {
        text: 'Siento un vacío repentino en el estómago o una bajada drástica de energía física.',
        subtext: 'Fuga instantánea de Qi en el Dan Tian Inferior.',
        pillarScores: { mente: 0, energia: 3, cuerpo: 1, relaciones: 0 }
      },
      {
        text: 'Me cierro emocionalmente o respondo con reactividad e irritabilidad hacia quien esté cerca.',
        subtext: 'Cierre del Xin (corazón) y desbalance en la polaridad Yin/Yang.',
        pillarScores: { mente: 0, energia: 1, cuerpo: 0, relaciones: 3 }
      }
    ]
  },
  {
    id: 3,
    question: 'Si intentas sentarte en silencio 5 minutos con los ojos cerrados, ¿qué experimentas?',
    context: 'La quietud revela lo que el ruido cotidiano suele enmascarar.',
    options: [
      {
        text: 'Un torbellino incesante de pensamientos que me genera culpa o desesperación.',
        subtext: 'Necesitas el método daoísta Zuo Wang en lugar de meditación rígida.',
        pillarScores: { mente: 3, energia: 0, cuerpo: 0, relaciones: 0 }
      },
      {
        text: 'Siento frío en las manos/pies o una inquietud energética difícil de calmar.',
        subtext: 'El Qi está estancado en la parte superior del cuerpo y no baja al vientre.',
        pillarScores: { mente: 1, energia: 3, cuerpo: 0, relaciones: 0 }
      },
      {
        text: 'Mi espalda me duele, no encuentro una postura cómoda y me muevo constantemente.',
        subtext: 'Tu estructura ósea y muscular necesita recuperar su centro de gravedad.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 3, relaciones: 0 }
      },
      {
        text: 'Me asaltan conversaciones pendientes, reproches o sensación de soledad/desconexión.',
        subtext: 'El Xin está procesando vínculos y necesita un espacio de digestión emocional.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 0, relaciones: 3 }
      }
    ]
  },
  {
    id: 4,
    question: '¿Cuál es el hábito que más sospechas que está saboteando tu bienestar actual?',
    context: 'Tus sospechas intuitivas suelen acertar el 90% de las veces.',
    options: [
      {
        text: 'La sobreestimulación con pantallas, noticias y multitarea hasta altas horas.',
        subtext: 'Perturbación continua del Shen y del descanso profundo.',
        pillarScores: { mente: 3, energia: 1, cuerpo: 0, relaciones: 0 }
      },
      {
        text: 'Horarios irregulares de comida/sueño y falta de momentos de recarga bioenergética.',
        subtext: 'Consumo acelerado de las reservas de Jing de tus riñones.',
        pillarScores: { mente: 0, energia: 3, cuerpo: 1, relaciones: 0 }
      },
      {
        text: 'Pasar demasiadas horas sentado en mala postura sin mover las articulaciones.',
        subtext: 'Rigidez fascial y compresión de la columna Zhong Ding.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 3, relaciones: 0 }
      },
      {
        text: 'Dar de más a otros sin poner límites claros o evitar conversaciones difíciles.',
        subtext: 'Desgaste del Xin por desconexión de tus propias necesidades auténticas.',
        pillarScores: { mente: 0, energia: 1, cuerpo: 0, relaciones: 3 }
      }
    ]
  },
  {
    id: 5,
    question: 'Si pudieras resolver una sola cosa en los próximos 7 días, ¿cuál transformaría más tu vida?',
    context: 'Tu objetivo prioritario definirá el punto de entrada a tu práctica.',
    options: [
      {
        text: 'Tener una mente serena, con foco claro y sin ansiedad por el futuro.',
        subtext: 'Camino: Dojo Mente Presente & Shen.',
        pillarScores: { mente: 4, energia: 1, cuerpo: 0, relaciones: 0 }
      },
      {
        text: 'Recuperar mi vitalidad física y no sentirme exhausto a mitad de la tarde.',
        subtext: 'Camino: Zendo Energía Consciente & Jing/Dan Tian.',
        pillarScores: { mente: 0, energia: 4, cuerpo: 1, relaciones: 0 }
      },
      {
        text: 'Sentir mi cuerpo ligero, sin dolores posturales y con soltura al moverme.',
        subtext: 'Camino: Academia Cuerpo Consciente & Eje Zhong Ding.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 4, relaciones: 0 }
      },
      {
        text: 'Mejorar la calidad de mis vínculos, comunicarme con amor y sentir mayor complicidad.',
        subtext: 'Camino: Studio Relaciones Conscientes & El Tao del Corazón.',
        pillarScores: { mente: 0, energia: 0, cuerpo: 0, relaciones: 4 }
      }
    ]
  }
];

export const QUIZ_RESULTS: Record<PillarId, QuizResult> = {
  mente: {
    dominantPillar: 'mente',
    title: 'Sobrecarga Cognitiva & Dispersión del Shen',
    diagnosis: 'Tu principal bloqueo no es físico ni de falta de voluntad: tu mente prefrontal está agotada por exceso de Yang (sobreestimulación, control y diálogo interno). Estás intentando resolver el cansancio pensando más, lo que genera un bucle de ansiedad.',
    recommendation: 'Necesitas el camino de Zuo Wang ("Sentarse y Olvidar") y el principio de Wu Wei. Deja de intentar forzar la mente en blanco; aprende a ser el observador espacioso.',
    suggestedPractice: 'Práctica guiada de 7 minutos de Zuo Wang + Respiración del Vacío.',
    suggestedGlossaryTerms: ['shen', 'zuo-wang', 'wu-wei', 'tao', 'fluir-consciente']
  },
  energia: {
    dominantPillar: 'energia',
    title: 'Fuga de Jing & Estancamiento del Qi',
    diagnosis: 'Tu reserva biológica primordial (el Jing de los riñones) está agotada. Tienes la sensación de que tu batería no carga al 100% aun cuando duermes. El Qi está bloqueado en el pecho o la cabeza y no nutre el Dan Tian Inferior.',
    recommendation: 'Antes de emprender nuevos proyectos o ejercicios extenuantes, necesitas sellar las fugas energéticas. El calentamiento de la Puerta de la Vida (Ming Men) y la respiración hacia el bajo vientre serán tu mejor medicina.',
    suggestedPractice: 'Activación del Caldero Inferior (Dan Tian) + Frotado de Riñones (Ming Men).',
    suggestedGlossaryTerms: ['jing', 'qi', 'dan-tian', 'ming-men', 'qigong']
  },
  cuerpo: {
    dominantPillar: 'cuerpo',
    title: 'Pérdida del Eje Zhong Ding & Tensión Fascial',
    diagnosis: 'Tu cuerpo físico está cargando con el peso del estrés a través de micro-contracciones crónicas (cuello, espalda, pelvis). Al perder tu eje vertical, el sistema nervioso interpreta tu postura como estado de peligro constante.',
    recommendation: 'Tu puerta de entrada más rápida al bienestar no es sentarte a meditar inmóvil, sino restablecer tu estructura física con Zhan Zhuang (la postura del árbol) y el cultivo de la soltura elástica (Song).',
    suggestedPractice: 'Zhan Zhuang: Postura del Árbol (5 min) + Reset de Song para escritorio.',
    suggestedGlossaryTerms: ['zhong-ding', 'song', 'neigong', 'bai-hui', 'dan-tian']
  },
  relaciones: {
    dominantPillar: 'relaciones',
    title: 'Contracción del Xin & Desbalance de Polaridad',
    diagnosis: 'Estás acumulando tensiones en el territorio de tus vínculos. Tu Corazón-Mente (Xin) ha levantado muros de protección inconscientes tras situaciones de roce o falta de escucha, lo que drena tu energía anímica.',
    recommendation: 'El cultivo del Tao del Corazón te enseñará a escuchar y comunicar sin defenderte, equilibrando la firmeza clara (Yang) con la receptividad amorosa (Yin) para que el amor vuelva a fluir.',
    suggestedPractice: 'Escucha Profunda desde el Xin + Respiración de Polaridad Yin-Yang.',
    suggestedGlossaryTerms: ['xin', 'yin-yang', 'wu-wei', 'tao', 'song']
  }
};
