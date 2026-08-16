import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: 'tao',
    title: 'Tao (Dao)',
    chinese: '道',
    pinyin: 'Dào',
    pronunciation: 'Dáo (como "dau" con tono que baja y sube)',
    shortDefinition: 'El principio primordial, el orden cósmico natural y el flujo inmanente que sostiene toda la existencia.',
    fullContent: [
      'El Tao no es un dios personificado ni un dogma filosófico; es la matriz viva y dinámica del universo. Es la fuerza subyacente que mueve las estaciones, guía los ríos y regula el latido de la vida sin esfuerzo ni coerción.',
      'En la tradición daoísta del Nei Gong, "armonizarse con el Tao" significa alinear la propia respiración, mente y cuerpo con los ritmos de la naturaleza, disolviendo la resistencia del ego para entrar en un estado de coherencia interna.',
      'Vivir en el Tao no es pasividad; es la más alta forma de eficacia: la sabiduría de actuar en el momento preciso con el mínimo gasto energético.'
    ],
    pillarId: 'mente',
    pillarName: 'Dojo Mente Presente',
    relatedTerms: ['wu-wei', 'yin-yang', 'xin', 'neigong'],
    quote: {
      text: 'El Tao que puede ser expresado no es el Tao eterno. El camino se hace al fluir sin forzar.',
      source: 'Tao Te Ching, Cap. 1'
    },
    practicalApplication: 'Cuando sientas que empujas una situación con ansiedad o fuerza bruta, haz una pausa de 3 respiraciones profundas, suelta los hombros y pregúntate: "¿Cómo se movería el agua aquí?".'
  },
  {
    slug: 'jing',
    title: 'Jing (Esencia Vital)',
    chinese: '精',
    pinyin: 'Jīng',
    pronunciation: 'Ying (como "Yin" con g suave al final)',
    shortDefinition: 'La reserva biológica primordial de energía física, vitalidad celular y sustancia regenerativa del cuerpo.',
    fullContent: [
      'El Jing es el primero de los "Tres Tesoros" (San Bao) en el Nei Gong daoísta. Representa la energía material condensada con la que nacemos (Jing Prenatal) y la que obtenemos a través del aire, el descanso y los alimentos limpios (Jing Posnatal).',
      'Reside principalmente en los riñones y en el Dan Tian Inferior. Cuando sufrimos de estrés crónico, falta de sueño, exceso de eyaculación o sobreexigencia emocional, consumimos nuestra reserva de Jing a un ritmo acelerado, generando envejecimiento prematuro y fatiga profunda.',
      'El Nei Gong enseña cómo sellar las fugas energéticas del cuerpo, conservar el Jing y refinarlo para transformarlo en Qi (energía activa).'
    ],
    pillarId: 'energia',
    pillarName: 'Zendo Energía Consciente',
    relatedTerms: ['qi', 'shen', 'dan-tian', 'ming-men', 'neigong'],
    quote: {
      text: 'Si el Jing es abundante, la vida es sólida. Si el Jing se dispersa, la llama se extingue.',
      source: 'Tratado de Alquimia Interna del Monte Wudang'
    },
    practicalApplication: 'Descansar antes de las 11:00 PM (hora de recarga de la Vesícula y el Hígado) y practicar 10 minutos de respiración abdominal baja preserva directamente tu Jing diario.'
  },
  {
    slug: 'qi',
    title: 'Qi (Chi / Energía Vital)',
    chinese: '氣',
    pinyin: 'Qì',
    pronunciation: 'Chi (con ch seca y tono descendente)',
    shortDefinition: 'El aliento vital, la fuerza animadora y la corriente bioeléctrica que circula por todo el organismo.',
    fullContent: [
      'El Qi es la energía en movimiento que conecta la materia física (Jing) con la consciencia espiritual (Shen). Circula a través de los meridianos y canales sutiles del cuerpo, regulando cada función fisiológica y anímica.',
      'Cuando el Qi está estancado o bloqueado (comúnmente por emociones no procesadas o mala postura), sentimos rigidez, dolor muscular, irritabilidad o apatía. Cuando el Qi fluye libremente, experimentamos ligereza, claridad mental y una vitalidad cálida.',
      'A través de la respiración consciente y el movimiento suave del Qigong, aprendemos a sentir, movilizar y almacenar Qi en los centros energéticos del cuerpo.'
    ],
    pillarId: 'energia',
    pillarName: 'Zendo Energía Consciente',
    relatedTerms: ['jing', 'shen', 'qigong', 'dan-tian', 'song'],
    quote: {
      text: 'Donde va la intención (Yi), va el Qi. Donde va el Qi, fluye la sangre y la vida.',
      source: 'Proverbio Clásico de Medicina Tradicional China'
    },
    practicalApplication: 'Frota las palmas de tus manos vigorosamente durante 20 segundos hasta que sientas calor, luego sepáralas 5 centímetros y respira suavemente: percibirás una sutil pulsación electromagnética; eso es tu Qi.'
  },
  {
    slug: 'shen',
    title: 'Shen (Espíritu / Consciencia)',
    chinese: '神',
    pinyin: 'Shén',
    pronunciation: 'Shen (con tono ascendente, como una pregunta)',
    shortDefinition: 'La claridad mental superior, el espíritu despierto y la presencia lúcida que reside en el Corazón.',
    fullContent: [
      'El Shen es el tercer Tesoro del ser humano. Mientras el Jing es la tierra fértil y el Qi es el viento que la recorre, el Shen es la luz del sol: la consciencia pura, la sabiduría intuitiva y la capacidad de amar y conectar.',
      'En la medicina daoísta se dice que el Shen reside en el corazón (Xin) y se manifiesta a través del brillo en los ojos. Una mente dispersa, llena de ansiedad y sobreestimulación digital tiene el "Shen perturbado".',
      'A través de la meditación silenciosa (Zuo Wang), el Shen se aquieta y regresa a su hogar en el corazón, restaurando la paz interior profunda.'
    ],
    pillarId: 'mente',
    pillarName: 'Dojo Mente Presente',
    relatedTerms: ['xin', 'zuo-wang', 'jing', 'qi', 'dan-tian'],
    quote: {
      text: 'Cuando el corazón está en silencio, el Shen brilla como la luna en un lago sin olas.',
      source: 'Huainanzi'
    },
    practicalApplication: 'Evita pantallas durante los primeros 30 minutos al despertar. Deja que tu Shen despierte con la luz natural y el silencio interior antes de recibir información del mundo.'
  },
  {
    slug: 'dan-tian',
    title: 'Dan Tian (Campos de Cinabrio)',
    chinese: '丹田',
    pinyin: 'Dān Tián',
    pronunciation: 'Dan Tien (con tono plano en Dan y ascendente en Tian)',
    shortDefinition: 'Los tres calderos o vórtices principales de cultivo y almacenamiento energético en el cuerpo.',
    fullContent: [
      'Literalmente traducido como "campo del elixir", el cuerpo humano posee tres Dan Tians principales:',
      '1. Dan Tian Inferior (Bajo el ombligo): El centro de gravedad físico, almacén del Jing y cimiento de la fuerza vital y la estabilidad emocional.',
      '2. Dan Tian Medio (En el centro del pecho / corazón): El centro del Qi, de la empatía, el amor compasivo y la regulación emocional.',
      '3. Dan Tian Superior (En el entrecejo / centro de la cabeza): La sede del Shen, de la percepción intuitiva y la claridad mental trascendente.',
      'Todo practicante de Nei Gong comienza enraizando su atención en el Dan Tian Inferior para evitar sobrecargar la cabeza de tensión.'
    ],
    pillarId: 'cuerpo',
    pillarName: 'Academia Cuerpo Consciente',
    relatedTerms: ['jing', 'qi', 'neigong', 'zhong-ding', 'ming-men'],
    quote: {
      text: 'Regresa la mente al caldero inferior. El árbol que tiene raíces profundas nunca teme a la tormenta.',
      source: 'Guía Práctica del Caldero Dorado'
    },
    practicalApplication: 'Coloca ambas palmas sobre tu abdomen, dos dedos por debajo del ombligo. Inhala dejando que el vientre se expanda suavemente como un globo y exhala sintiendo calor en ese punto.'
  },
  {
    slug: 'wu-wei',
    title: 'Wu Wei (La No-Acción Forzada)',
    chinese: '無為',
    pinyin: 'Wú Wéi',
    pronunciation: 'Wu Uei (tono ascendente en Wu y Wei)',
    shortDefinition: 'El arte de actuar en sintonía con el flujo natural sin resistencia, imposición ni esfuerzo forzado.',
    fullContent: [
      'A menudo malentendido como indolencia o pasividad, Wu Wei significa en realidad "no forzar". Es la acción sin ego, la habilidad de responder espontáneamente a la realidad tal como es.',
      'Así como el agua no lucha contra la roca sino que la rodea o la moldea con paciencia, la persona que cultiva Wu Wei logra resultados extraordinarios sin desgastar su sistema nervioso en peleas innecesarias.',
      'En las relaciones y en el trabajo moderno, Wu Wei es el antídoto contra el "burnout" y la obsesión por controlar lo incontrolable.'
    ],
    pillarId: 'mente',
    pillarName: 'Dojo Mente Presente',
    relatedTerms: ['tao', 'song', 'xin', 'fluir-consciente'],
    quote: {
      text: 'Practica la no-acción y todo caerá en su lugar. Nada se hace, pero nada queda sin hacer.',
      source: 'Lao Tse - Tao Te Ching'
    },
    practicalApplication: 'Identifica una decisión que llevas días sobrepensando. Deja de intentar resolverla mentalmente por 24 horas. Observa cómo el camino se aclara cuando dejas de agitar el agua.'
  },
  {
    slug: 'yin-yang',
    title: 'Yin & Yang (Polaridad Dinámica)',
    chinese: '陰陽',
    pinyin: 'Yīn Yáng',
    pronunciation: 'Yin Yang (Yin plano, Yang ascendente)',
    shortDefinition: 'Los dos principios complementarios e interdependientes que generan el ciclo continuo de la vida.',
    fullContent: [
      'Yin y Yang no son el bien y el mal, sino polaridades naturales: reposo y actividad, noche y día, receptividad y dirección, frío y calor.',
      'La sociedad contemporánea sufre de un exceso crónico de Yang: hiperproductividad, estimulación constante, velocidad y control. Esto agota el Yin (el descanso, la quietud profunda, la capacidad de regeneración celular).',
      'El cultivo de relaciones conscientes y el Nei Gong restauran este balance: saber cuándo abrirse (Yin) y cuándo actuar con claridad (Yang).'
    ],
    pillarId: 'relaciones',
    pillarName: 'Studio Relaciones Conscientes',
    relatedTerms: ['tao', 'zhong-ding', 'song', 'fluir-consciente'],
    quote: {
      text: 'El Yin engendra al Yang; el Yang nutre al Yin. Quien comprende su danza comprende el universo.',
      source: 'I Ching (Libro de las Mutaciones)'
    },
    practicalApplication: 'Si tu día fue 90% Yang (reuniones, pantallas, esfuerzo físico), equilibra tu noche con Yin: luz tenue, infusión caliente, respiración lenta y sin pantallas.'
  },
  {
    slug: 'neigong',
    title: 'Nei Gong (Alquimia y Trabajo Interno)',
    chinese: '內功',
    pinyin: 'Nèi Gōng',
    pronunciation: 'Nei Gong (Nei con tono descendente, Gong plano)',
    shortDefinition: 'El sistema tradicional y metódico de transformación interna: cuerpo físico → respiración → mente → energía.',
    fullContent: [
      'A diferencia del ejercicio físico externo (Wai Gong) que busca hipertrofia o rendimiento superficial, el Nei Gong trabaja con la estructura profunda: fascias, tendones, médula ósea, sistema nervioso y canales energéticos.',
      'Es un proceso progresivo y seguro: primero se corrige la alineación postural (Zhong Ding) y la relajación activa (Song), luego se regula la respiración para calmar el corazón (Xin), y finalmente se cultivan los Tres Tesoros.',
      'Dao Chang Consciente utiliza el mapa clásico de Nei Gong adaptado a la vida del practicante moderno para generar vitalidad sostenible y paz interna.'
    ],
    pillarId: 'cuerpo',
    pillarName: 'Academia Cuerpo Consciente',
    relatedTerms: ['qigong', 'dan-tian', 'jing', 'qi', 'shen', 'song'],
    quote: {
      text: 'El trabajo interno no añade nada nuevo; solo remueve las obstrucciones para que tu luz original emerja.',
      source: 'Maestro Wang Liping'
    },
    practicalApplication: 'El Nei Gong se practica desde la gentileza: nunca fuerces un estiramiento o una retención de aire. Si hay tensión, da un paso atrás y respira hacia la zona tensa.'
  },
  {
    slug: 'qigong',
    title: 'Qi Gong (Cultivo de la Energía)',
    chinese: '氣功',
    pinyin: 'Qì Gōng',
    pronunciation: 'Chi Kung',
    shortDefinition: 'Práctica coordinada de movimientos fluidos, posturas estáticas y respiración para armonizar el Qi.',
    fullContent: [
      'El Qigong es la expresión dinámica y terapéutica del trabajo con la energía. A través de series de movimientos suaves y rítmicos, abre las articulaciones y desatasca los meridianos de acupuntura.',
      'Es accesible para personas de cualquier edad y condición física. Entre sus beneficios comprobados están la reducción del cortisol, el fortalecimiento inmunológico y el incremento de la densidad ósea.',
      'Mientras que el Qigong suele enfocarse en la salud y el flujo de energía diario, el Nei Gong profundiza en la transformación estructural y la alquimia espiritual del ser.'
    ],
    pillarId: 'energia',
    pillarName: 'Zendo Energía Consciente',
    relatedTerms: ['qi', 'neigong', 'song', 'zhong-ding'],
    quote: {
      text: 'Mueve el cuerpo como un río que fluye sin prisa; mantén la mente inmóvil como una montaña sabia.',
      source: 'Tratado de los 8 Brocados de Seda'
    },
    practicalApplication: 'Realiza 5 minutos diarios del ejercicio "Sostener el Cielo con ambas manos" por la mañana para expandir la caja torácica y activar el meridiano del Triple Calentador.'
  },
  {
    slug: 'zuo-wang',
    title: 'Zuo Wang (Sentarse y Olvidar)',
    chinese: '坐忘',
    pinyin: 'Zuò Wàng',
    pronunciation: 'Dzuo Uang',
    shortDefinition: 'La forma más pura de meditación daoísta: disolver el sentido de separación y reposar en el silencio original.',
    fullContent: [
      'Literalmente "sentarse y olvidar", Zuo Wang es una práctica de no-esfuerzo donde no se intenta controlar los pensamientos ni visualizar objetos complejos.',
      'El practicante se sienta con la columna erguida pero relajada, "olvida" sus títulos, preocupaciones, juicios y límites corporales, permitiendo que la consciencia se funda con la inmensidad del Tao.',
      'Es un descanso supremo para el cerebro prefrontal y una medicina profunda contra la ansiedad contemporánea.'
    ],
    pillarId: 'mente',
    pillarName: 'Dojo Mente Presente',
    relatedTerms: ['shen', 'xin', 'wu-wei', 'tao'],
    quote: {
      text: 'Dejo caer mis miembros y mi cuerpo, desecho mi inteligencia, me libero de mi forma y me fundo con el Gran Vacío. A esto llamo Zuo Wang.',
      source: 'Zhuangzi (Chuang Tzu)'
    },
    practicalApplication: 'Siéntate 7 minutos al día sin meta. Cada vez que surja un pensamiento, no luches con él: solo nómbralo mentalmente como "nube pasajera" y regresa al espacio silencioso que lo observa.'
  },
  {
    slug: 'xin',
    title: 'Xin (El Corazón-Mente)',
    chinese: '心',
    pinyin: 'Xīn',
    pronunciation: 'Shin (con sh suave)',
    shortDefinition: 'El centro unificado donde residen las emociones, la mente consciente y la sabiduría intuitiva.',
    fullContent: [
      'En la cosmovisión oriental, la mente y el corazón no están separados: se utiliza una sola palabra (Xin) para designar la totalidad de nuestro mundo interior afectivo y cognitivo.',
      'El Xin es considerado el "Emperador" del cuerpo. Si el Emperador está en pánico o agitado, todos los órganos y sistemas entran en caos. Si el Xin está en paz (Ping Xin), la salud florece naturalmente.',
      'Cultivar el "Tao del Corazón" es aprender a limpiar el espejo del Xin de miedos y rencores para reflejar la realidad con amor lúcido y verdad.'
    ],
    pillarId: 'relaciones',
    pillarName: 'Studio Relaciones Conscientes',
    relatedTerms: ['shen', 'tao', 'wu-wei', 'yin-yang'],
    quote: {
      text: 'Cuando el Xin no alberga engaño ni rencor, cada encuentro humano se convierte en un templo sagrado.',
      source: 'Cánon Daoísta Daozang'
    },
    practicalApplication: 'Antes de tener una conversación difícil con tu pareja o colega, pon tu mano en el centro del pecho, inhala sintiendo calidez y conéctate con la intención de comprender antes de defenderte.'
  },
  {
    slug: 'fluir-consciente',
    title: 'Fluir Consciente',
    chinese: '隨順自然',
    pinyin: 'Suí Shùn Zì Rán',
    pronunciation: 'Fluir Consciente',
    shortDefinition: 'El arte contemporáneo de aplicar la sabiduría daoísta a las decisiones cotidianas, el trabajo y las relaciones.',
    fullContent: [
      'Fluir Consciente es la puerta de entrada accesible al universo del Nei Gong y Dao Chang Consciente. Es la traducción práctica de 2.500 años de filosofía en herramientas sencillas para el siglo XXI.',
      'No exige retirarse a una cueva en las montañas ni renunciar a tu vida moderna; propone cultivar un "templo interno" en medio de la ciudad, navegando tus responsabilidades con gracia y serenidad.',
      'Representa el primer nivel formativo de nuestro ecosistema, guiándote a través de hábitos de respiración, higiene mental y reconexión con el cuerpo.'
    ],
    pillarId: 'mente',
    pillarName: 'Dojo Mente Presente',
    relatedTerms: ['tao', 'wu-wei', 'zhong-ding', 'song'],
    quote: {
      text: 'El río no compite con el valle; simplemente fluye hacia donde hay espacio para dar vida.',
      source: 'Dao Chang Consciente'
    },
    practicalApplication: 'Empieza hoy con nuestro Reto de 7 Días: 10 minutos al día para armonizar 50% tu mente y 50% tu cuerpo.'
  },
  {
    slug: 'zhong-ding',
    title: 'Zhong Ding (El Eje Central y Enraizamiento)',
    chinese: '中定',
    pinyin: 'Zhōng Dìng',
    pronunciation: 'Dzhong Ding',
    shortDefinition: 'El equilibrio vertical del cuerpo y la estabilidad inquebrantable de la postura y el centro anímico.',
    fullContent: [
      'Zhong Ding es el principio fundamental de alineación en las artes internas. Significa mantener la coronilla (Bai Hui) suspendida hacia el cielo mientras la pelvis y los pies se enraízan profundamente en la tierra.',
      'Cuando el cuerpo físico pierde su Zhong Ding (por ejemplo, encorvándose sobre el móvil o la pantalla), el sistema nervioso interpreta esa postura como amenaza, elevando la ansiedad de fondo.',
      'Recuperar el eje Zhong Ding alinea automáticamente las vértebras, descomprime los pulmones y transmite a la mente una sensación inmediata de seguridad y presencia.'
    ],
    pillarId: 'cuerpo',
    pillarName: 'Academia Cuerpo Consciente',
    relatedTerms: ['dan-tian', 'song', 'neigong', 'bai-hui'],
    quote: {
      text: 'Permanece erguido en el centro, suspendido del cielo y anclado en la tierra. Nada externo podrá derribarte.',
      source: 'Tratado de Taijiquan de la Familia Yang'
    },
    practicalApplication: 'De pie o sentado, imagina un hilo de seda dorado que tira suavemente de la coronilla hacia arriba mientras relajas los hombros hacia abajo. Siente tu columna alargarse sin esfuerzo.'
  },
  {
    slug: 'song',
    title: 'Song (Relajación Activa / Soltar)',
    chinese: '鬆',
    pinyin: 'Sōng',
    pronunciation: 'Sung (con u abierta)',
    shortDefinition: 'El estado de descompresión y relajación inteligente sin colapsar la estructura del cuerpo.',
    fullContent: [
      'En occidente solemos confundir relajación con desplome (como tirarse en el sofá sin tono muscular). Song es algo completamente distinto: es la liberación de toda tensión muscular innecesaria mientras se mantiene una estructura alerta y elástica.',
      'Cuando un músculo está "Song", las fascias y los vasos sanguíneos se abren, permitiendo que el Qi y los fluidos circulen sin restricción. Es la cualidad del bambú, que se dobla con el viento fuerte pero nunca se quiebra.',
      'Aprender a estar "Song" en medio de una discusión o un momento de estrés laboral te permite responder con claridad en lugar de reaccionar desde la crispación.'
    ],
    pillarId: 'cuerpo',
    pillarName: 'Academia Cuerpo Consciente',
    relatedTerms: ['zhong-ding', 'neigong', 'qi', 'wu-wei'],
    quote: {
      text: 'Lo rígido y duro es discípulo de la muerte; lo suave y flexible es discípulo de la vida.',
      source: 'Tao Te Ching, Cap. 76'
    },
    practicalApplication: 'Tres veces al día, haz un escaneo exprés: suelta la mandíbula, baja los hombros 2 centímetros y abre los dedos de las manos. Nota cómo tu respiración se profundiza al instante.'
  },
  {
    slug: 'dao-chang',
    title: 'Dao Chang (El Lugar de Práctica y Consciencia)',
    chinese: '道場',
    pinyin: 'Dào Chǎng',
    pronunciation: 'Dau Chang',
    shortDefinition: 'El espacio sagrado —tanto físico como interior— consagrado al cultivo de la sabiduría y el despertar.',
    fullContent: [
      'Tradicionalmente, un Dao Chang es el monasterio, templo o sala donde los practicantes se reúnen para estudiar las artes del Tao.',
      'En Dao Chang Consciente, entendemos que tu verdadero Dao Chang es tu propio cuerpo, tu hogar y tus relaciones cotidianas. No necesitas cruzar el océano para encontrar un espacio sagrado: lo creas cada vez que respiras con presencia.',
      'Nuestra marca paraguas representa la comunidad y la escuela viva donde integramos el Nei Gong profundo con la vida en el mundo actual.'
    ],
    pillarId: 'mente',
    pillarName: 'Dojo Mente Presente',
    relatedTerms: ['tao', 'neigong', 'xin', 'fluir-consciente'],
    quote: {
      text: 'El verdadero templo no está hecho de madera ni de piedra; se construye con cada respiración consciente.',
      source: 'Dao Chang Consciente'
    },
    practicalApplication: 'Consagra un rincón tranquilo de tu habitación con un cojín y una pequeña planta. Haz que ese sea tu micro-Dao Chang para tus 10 minutos de práctica diaria.'
  },
  {
    slug: 'ming-men',
    title: 'Ming Men (La Puerta de la Vida)',
    chinese: '命門',
    pinyin: 'Mìng Mén',
    pronunciation: 'Ming Men (tono descendente)',
    shortDefinition: 'El punto energético vital en la zona lumbar (entre L2 y L3) donde reside el fuego primordial y el Jing de los riñones.',
    fullContent: [
      'Conocido en medicina china y Nei Gong como "La Puerta de la Vida", Ming Men es el interruptor del calor interno y la vitalidad constitucional.',
      'Una zona lumbar fría o rígida es síntoma de debilidad en el fuego de Ming Men, lo que suele traducirse en digestiones lentas, pies fríos, falta de líbido y cansancio crónico.',
      'A través de posturas de enraizamiento y respiración lumbar, restauramos el calor de Ming Men para nutrir todos los órganos.'
    ],
    pillarId: 'energia',
    pillarName: 'Zendo Energía Consciente',
    relatedTerms: ['jing', 'dan-tian', 'qi', 'neigong'],
    quote: {
      text: 'Cuando la Puerta de la Vida está tibia, los cien canales se nutren y el cuerpo no conoce la decrepitud.',
      source: 'Nan Jing (El Clásico de las Dificultades)'
    },
    practicalApplication: 'Frota la zona baja de tu espalda (a la altura de los riñones) con el dorso de las manos hasta que sientas una agradable sensación de calor.'
  },
  {
    slug: 'bai-hui',
    title: 'Bai Hui (Las Cien Reuniones)',
    chinese: '百會',
    pinyin: 'Bǎi Huì',
    pronunciation: 'Bai Juei (tono bajo en Bai y descendente en Hui)',
    shortDefinition: 'El punto en la coronilla donde se unen todos los meridianos Yang y se conecta la energía humana con el Cielo.',
    fullContent: [
      'Ubicado en el punto más alto de la cabeza, Bai Hui es el receptor de la energía celestial (Yang puro).',
      'En la postura correcta de meditación y Nei Gong, Bai Hui se eleva suavemente como si la cabeza estuviera suspendida por un hilo invisible, lo cual desestresa las vértebras cervicales y aclara los sentidos.',
      'Es un punto clave para aliviar dolores de cabeza por tensión, mareos y niebla mental.'
    ],
    pillarId: 'cuerpo',
    pillarName: 'Academia Cuerpo Consciente',
    relatedTerms: ['zhong-ding', 'shen', 'neigong', 'dan-tian'],
    quote: {
      text: 'Suspende Bai Hui, sumerge el Qi en el Dan Tian. Cielo y Tierra se encuentran en ti.',
      source: 'Principios Esenciales del Taiji Clásico'
    },
    practicalApplication: 'Toca suavemente la cima de tu cráneo con la punta de un dedo, cierra los ojos y siente cómo al inhalar tu respiración viaja desde ese punto hacia abajo hasta el abdomen.'
  }
];
