const alimentos = [
  {
    id: "alimento-1",
    name: "Monello Gato Adulto",
    description:
      "Monello Gatos Adultos Salmón y Pollo fue pensada para agradar al paladar exigente de los felinos y proveer los nutrientes necesarios para una vida más activa y sana. La fórmula cuenta con la adición de ingredientes de calidad superior, como la harina y el aceite de salmón, que ayudan en el mantenimiento del sistema cognitivo, y aumenta el bienestar en el cotidiano.",
    image: "/img-productos/alimentos/monello-gato.png",
    category: "alimentos",
  },
  {
    id: "alimento-2",
    name: "Monello Gatito",
    description:
      "Monello Cat Gatitos Salmón y Pollo es libre de colorantes y aromatizantes artificiales, con la adición de harina y aceite de salmón, ingredientes nobles y de excelencia que actúan en las defensas del organismo y proporcionan a los felinos un desarrollo cognitivo sano.",
    image: "/img-productos/alimentos/monello-gatito.webp",
    category: "alimentos",
  },
  {
    id: "alimento-3",
    name: "Monello Gato Castrado",
    description:
      "Monello Gatos Castrados Pavo y Salmón está desarrollada especialmente para la etapa post castración de los felinos, cuando suelen reducir el ritmo de las actividades, y quedan más propensos a la obesidad. Por eso, la fórmula tiene calorías reducidas y la adición de L-carnitina, una sustancia que actúa en la transformación de la grasa en energía.",
    image: "/img-productos/alimentos/monello-castrado.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-4",
    name: "Monello Gato Bola de Pelo",
    description:
      "Monello Gatos Adultos Bolas de Pelos Pollo y Pescado es un alimento desarrollado para las mascotas que tienen problemas con la ingestión de pelos. La presencia de celulosa ayuda a eliminar las bolas de pelos y evita que sean repelidas por el vómito o que queden trancadas en el intestino de los gatos. ",
    image: "/img-productos/alimentos/monello-bola.webp",
    category: "alimentos",
  },
  {
    id: "alimento-5",
    name: "Monello Razas Pequeñas",
    description:
      "Monello Perros Adultos Razas Pequeñas Pollo proporciona más longevidad a los peludos. Con adición de linaza, aceite de oliva y aceite de girasol, el alimento es rico en antioxidantes que combaten los radicales libres y previenen el envejecimiento, lo cual aumenta el bienestar y la vitalidad de las mascotas. Los ingredientes también son esenciales para promover la belleza y la salud de la piel y del pelo de los perros.",
    image: "/img-productos/alimentos/monello-razas.png",
    category: "alimentos",
  },
  {
    id: "alimento-6",
    name: "Monello Tradicional",
    description:
      "Monello Perros Adultos Tradicional Pollo tiene digestibilidad superior a 80%, lo que significa que proporciona aún más energía y vitalidad a las mascotas. Con más aprovechamiento del alimento, gracias al uso de proteínas de calidad y la adición de manano-oligosacáridos (MOS), prebiótico que actúa en la salud intestinal al asegurar la máxima absorción de los nutrientes, la fórmula proporciona un desarrollo más sano a la mascota.",
    image: "/img-productos/alimentos/monello-tradicional.png",
    category: "alimentos",
  },
  {
    id: "alimento-7",
    name: "Monello Cachorro",
    description:
      "Monello Dog Cachorros Pollo presenta beneficios para el desarrollo equilibrado y sano de los peluditos. Cuenta con la adición del extracto de Yucca Schidigera y del manano-oligosacárido (MOS), que actúan directamente en el mantenimiento de la flora intestinal, lo cual promueve más absorción y, consecuentemente, un máximo aprovechamiento de los nutrientes, minerales y proteínas por el organismo de los cachorros. ",
    image: "/img-productos/alimentos/monello-cachorro.png",
    category: "alimentos",
  },
  {
    id: "alimento-8",
    name: "Agility Gold Gato Adulto",
    description:
      "Agility Gold Gatos, es una línea de alimentos súper premium, fabricados con la mejor tecnología que existe hoy en el mercado internacional. con seleccionados ingredientes, incluyendo como principal ingrediente carne real de pollo, salmón y cordero.",
    image: "/img-productos/alimentos/agility-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-9",
    name: "Agility Gold Gatito",
    description:
      "Agility Gold Gatitos, es una línea de alimentos súper premium, perfecto para controlar las bolas de pelo de tu gato, ideal para gatitos destetos de todas las razas y como complemento a la leche materna.",
    image: "/img-productos/alimentos/agility-gatitos.webp",
    category: "alimentos",
  },
  {
    id: "alimento-10",
    name: "Agility Gold Pequeños adultos",
    description:
      "Agility Gold Pequeños Adultos, ayuda al correcto funcionamiento del aparato digestivo, adecuado funcionamiento del metabolismo y aporte de energía, mejora la consistencia y el olor de las heces, garantiza la salud del pelo y la piel.",
    image: "/img-productos/alimentos/agility-pequeños-adultos.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-11",
    name: "Agility Gold Piel Pequeños Adultos",
    description:
      "Agility Gold Piel Pequeños Adultos, es un alimento de alta calidad con utilización de algas marinas para potencializar acciones en la hidratación de la piel y aceites botánicos de Romero que evitan el envejecimiento celular dando fuerza y brillo al pelaje.",
    image: "/img-productos/alimentos/agility-pequeños-adultos-piel.webp",
    category: "alimentos",
  },{
    id: "alimento-12",
    name: "Agility Gold Grandes Adultos Piel",
    description:
      "Agility Gold Piel Grandes Adultos, es una línea de alimentos súper premium, fabricados con la mejor tecnología que existe hoy en el mercado internacional. con seleccionados ingredientes, incluyendo como principal ingrediente carne real de pollo, salmón y cordero. ",
    image: "/img-productos/alimentos/agility-grandes-adultos-piel.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-13",
    name: "Agility Gold Grandes Cachorros",
    description:
      "Agility Gold grandes cachorros, está diseñado para nutrir adecuadamente a cachorros de razas grandes y gigantes. Estos tienen un metabolismo más lento, su crecimiento es igual, por tanto, se debe tener una nutrición alineada a esta condición.",
    image: "/img-productos/alimentos/agility-grandesc.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-14",
    name: "Agility Gold Pequeños Cachorros",
    description:
      "Agility Gold pequeños cachorros, está diseñado para nutrir adecuadamente a cachorros de razas pequeñas. Su metabolismo o catabolismo es alto, ellos crecen con mayor velocidad, normalmente a los 9-10 meses ya son adultos. Si son razas muy pequeñas, son adultos más rápido.",
    image: "/img-productos/alimentos/agility-pequeños-cachorro.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-15",
    name: "Max Cat Adulto",
    description:
      "Trae ingredientes seleccionados por especialistas para proporcionarle una alimentación rica y balanceada a tu gatito. Es rico en proteína y vitaminas A, B12, C y D, este alimento ayuda directamente en el tracto urinario, en la visión y en el corazón de tu compañero, a tu hijo felino le va a encantar, permite una reducción del olor de las heces, no tiene colorantes lo que es mejor para su salud, mantiene al día su organismo y es suave para masticar.",
    image: "/img-productos/alimentos/max-cat-adulto.webp",
    category: "alimentos",
  },
  {
    id: "alimento-16",
    name: "Max Cat Castrado",
    description:
      "Max es un concentrado Premium Especial cuya fórmula proporcionará una alimentación completa y fue especialmente diseñada para evitar el aumento de peso en gatos que hayan sido castrados. Contiene especiales nutrientes que favorecerán la salud del tracto urinario y que además le brindarán la especial nutrición que necesita",
    image: "/img-productos/alimentos/max-cat-castrado.webp",
    category: "alimentos",
  },
  {
    id: "alimento-17",
    name: "Max Cat Gatitos",
    description: 
      "Este alimento es rico en proteína y vitaminas, es tu oportunidad de invertir en la máxima calidad para tu compañero para una vida sana y feliz. Cuenta con un sabor especial de salmón y arroz, el alimento Max Cat Adultos Salmón & Arroz es producido sin adición de colorantes y reduce el olor de las heces de tu amigo.",
    image: "/img-productos/alimentos/max-cat-gatito.webp",
    category: "alimentos",
  },
  {
    id: "alimento-18",
    name: "Max Adulto",
    description:
      "Performance de Max es un concentrado con rico sabor que aportará una nutrición completa y balanceada. Su fórmula posee ingredientes más naturales, libres de  colorantes y sabores artificiales. Es un concentrado cuyo objetivo principal es reforzar la vitalidad de los perros adultos, manteniéndolos activos y llenos de energía.",
    image: "/img-productos/alimentos/max-adulto.webp",
    category: "alimentos",
  },
  {
    id: "alimento-19",
    name: "Max Cachorro",
    description:
      "El concentrado para perros cachorros Max Professional Line Performance con sabor a cordero, pollo y arroz será el alimento ideal para proporcionar una alimentación completa y adecuada a perros cachorros en etapa de crecimiento. Su fórmula creada especialmente para esta importante etapa de desarrollo cuenta con proteínas seleccionadas de alta calidad, fuentes de ácidos grasos que serán ideales para fortalecer los músculos durante el crecimiento y la salud de la piel y del pelaje.",
    image: "/img-productos/alimentos/max-cachorro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-20",
    name: "Max Adulto Razas pequeñas",
    description: 
      "Max razas pequeñas para perro es un concentrado rico sabor a pollo que aportará una nutrición óptima y balanceada. Su fórmula posee ingredientes naturales, libres de  colorantes, sabores y aromas artificiales. Su objetivo principal es reforzar la vitalidad de los perros adultos de razas pequeñas, manteniéndolos activos y llenos de energía para correr jugar y hacer lo que más les gusta. ",
    image: "/img-productos/alimentos/max-razas.webp",
    category: "alimentos",
  },
  {
    id: "alimento-21",
    name: "Max Light",
    description: 
      "Light de Max es un concentrado que proporcionará una nutrición completa y balanceada pero con menos calorías. Está fórmula fue especialmente creada para controlar el peso y prevenir la obesidad en los perros, pues esto será la base para llevar una buena salud. Su fórmula cuenta con cantidades óptimas de fibra para favorecer la digestión.",
    image: "/img-productos/alimentos/max-light.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-22",
    name: "Alpo",
    description:
      "Alpo ofrece un alimento completo y balanceado para perros adultos que disfrutan del sabor a carne real.",
    image: "/img-productos/alimentos/alpo.png",
    category: "alimentos",
  },
  {
    id: "alimento-23",
    name: "Cat Chow",
    description:
      "Con Cat Chow, construyes un escudo de protección alrededor de tu gato todos los días, mientras él disfruta de su delicioso sabor. Protección para una vida mejor. Una buena nutrición es fundamental para proteger la salud de los gatos.",
    image: "/img-productos/alimentos/cat-chow.webp",
    category: "alimentos",
  },
  {
    id: "alimento-24",
    name: "Chunky Gato Adulto",
    description:
      "El concentrado para Gatos Adultos Chunky con sabor a Salmón y a cordero es un concentrado fabricado con carne real que aportará los niveles de proteína adecuados para mantener la masa muscular magra y el sabor palatable que a los gatos tanto les gusta. ",
    image: "/img-productos/alimentos/chunky-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-25",
    name: "Chunky Gatitos",
    description:
      "Chunky Gatitos es un concentrado para gatitos o gatos bebes con rico sabor a pollo y a cordero. Está fabricado con carne de verdad y tiene altos niveles de proteínas y nutrientes para contribuir a una alimentación completa y adecuada durante esta etapa en la cual los aspectos más importantes son el crecimiento y el correcto desarrollo del organismo. ",
    image: "/img-productos/alimentos/chunky-gatito.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-26",
    name: "Chunky Adulto",
    description:
      "El concentrado para perros adultos Chunky con sabor a pollo y arroz será una excelente opción de alimentación saludable para tu perro. Su fuente principal de proteína viene del pollo y es un alimento fabricado  bajo exigentes normas de calidad que proporcionará una nutrición completa y balanceada a tu perro adulto. ",
    image: "/img-productos/alimentos/chunky-perro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-27",
    name: "Chunky Adulto Razas Pequeñas",
    description:
      "El concentrado para perros adultos de razas pequeñas Chunky es un alimento ideal para contribuir a una alimentación completa y balanceada que proporcionará los nutrientes adecuados para mantenerlos sanos y activos. Ya que las necesidades nutricionales de los perros de razas pequeñas tienden a ser diferentes, pues por lo general sus estómagos son más sensibles y pequeños.",
    image: "/img-productos/alimentos/chunky-razas.webp",
    category: "alimentos",
  },
   {
    id: "alimento-28",
    name: "Chunky Cordero",
    description:
      "El concentrado para perros adultos Chunky con sabor a Cordero, arroz y salmón es un concentrado fabricado con carne de verdad y apto para perros adultos de todas las razas. Además, cuenta con ingredientes no alérgicos ideal para aquellos perros con estómagos y pieles sensibles, como el cordero y el salmón que eliminan la posibilidad de irritación y reacciones alérgicas que se pueden presentar en algunos perros frente a otros ingredientes comunes presentes en concentrados regulares.",
    image: "/img-productos/alimentos/chunky-cordero.png",
    category: "alimentos",
  },
  {
    id: "alimento-29",
    name: "Chunky Cachorro",
    description:
      "El concentrado para perros cachorros de Chunky con sabor a pollo y arroz es un alimento especialmente creado para suplir las necesidades nutricionales de perros cachorros en etapa de crecimiento. Este concentrado tiene un alto nivel de proteína proveniente de carne de pollo real.",
    image: "/img-productos/alimentos/chunky-cachorro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-30",
    name: "Dog Chow",
    description:
      "Dog Chow proporciona nutrientes e ingredientes de calidad a la dieta de tu perro con el fin de ayudar a mantenerlo saludable y con más vitalidad para disfrutar de su día a día con más energía por muchos años.",
    image: "/img-productos/alimentos/dog-chow.png",
    category: "alimentos",
  },
  {
    id: "alimento-31",
    name: "Dogourmet",
    description:
      "Dogourmet es una opción nutritiva y deliciosa para perros adultos y cachorros. Con una combinación de proteínas, cereales y vegetales, ofrece una fórmula balanceada que cuida la salud digestiva, el sistema inmunológico y el brillo del pelaje. Es ideal para dueños que buscan calidad a un buen precio. Está disponible en diversos sabores como carne a la parrilla, parrilla mixta, Salmón y carne, 3 cereales, carne-cereales y leche deslactosada, pollo y pavo.",
    image: "/img-productos/alimentos/dogourmet.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-32",
    name: "Don Kat",
    description:
      "Alimento completo diseñado para gatos adultos de todas las razas. Se produce a través del proceso de molienda, mezcla y extrusión de ingredientes de origen animal y vegetal, y se enriquece con vitaminas y minerales.",
    image: "/img-productos/alimentos/don-kat.webp",
    category: "alimentos",
  },
  {
    id: "alimento-33",
    name: "Excellent Skin Care",
    description:
      "Alimento completo o balanceado para perros adultos de todos los tamaños con piel sensible. Aporta múltiples beneficios, científicamente comprobados que provienen de componentes de alta calidad. Tamaño de la mascota: Todos los Tamaños. Etapa de la vida: Adulto.",
    image: "/img-productos/alimentos/excellent-skin.webp",
    category: "alimentos",
  },
  {
    id: "alimento-34",
    name: "Excellent Urinary",
    description:
      "Excellent Urinary ofrece una nutrición especializada para los gatos con un sistema urinario sensible, formulada a base de proteínas de alta digestibilidad, para ayudar a mantener el tracto urinario saludable y colaborar en reducir la formación de cristales en la orina.",
    image: "/img-productos/alimentos/excellent-urinary.webp",
    category: "alimentos",
  },
  {
    id: "alimento-35",
    name: "Felix",
    description:
      "Alimento balanceado completo para gatos adultos de todas las razas",
    image: "/img-productos/alimentos/felix.webp",
    category: "alimentos",
  },
  {
    id: "alimento-36",
    name: "Hill's Gato",
    description:
      "Hill's también cuenta con fórmulas especializadas para gatos, desarrolladas científicamente para atender necesidades nutricionales específicas.",
    image: "/img-productos/alimentos/hills-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-37",
    name: "Hill's Dog",
    description:
      "Hill's es una marca reconocida por sus fórmulas científicamente desarrolladas para perros con necesidades nutricionales específicas.",
    image: "/img-productos/alimentos/hills.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-38",
    name: "Mirringo",
    description:
      "Mirringo es un alimento completa y equilibrada, diseñado para cubrir cada uno de los requerimientos esenciales en su proceso de mantenimiento y desarrollo.",
    image: "/img-productos/alimentos/mirringo.webp",
    category: "alimentos",
  },
  {
    id: "alimento-39",
    name: "Nutre Can",
    description:
      "Nutrecan - Alimento Perros Adultos, es un alimento 100% completo y balanceado, que ha sido formulado con ingredientes de alta calidad para mantener en estado óptimo la salud de tu perro adulto. ayuda a mantener una piel sana, gracias a sus ácidos grasos esenciales omega 6 y 3, y a la mezcla de vitaminas a y e más zinc.",
    image: "/img-productos/alimentos/nutre-can.webp",
    category: "alimentos",
  },
  {
    id: "alimento-40",
    name: "Oh Mai Gat",
    description:
      "Oh Mai Gat es un alimento basado en los rasgos particulares de tu gato, que además de deleitar su paladar con su exquisita combinación de ingredientes, le aporta el balance de nutrientes ideal para su personalidad que lo mantendrá enérgico.",
    image: "/img-productos/alimentos/oh-mai-gat.png",
    category: "alimentos",
  },
  {
    id: "alimento-41",
    name: "ProPlan Gato",
    description:
      "ProPlan para gatos adultos es un alimento completo y equilibrado que proporciona la nutrición adecuada para potenciar los sistemas de protección naturales del gato y le permitirá mantener una óptima condición física.",
    image: "/img-productos/alimentos/proplan-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-42",
    name: "ProPlan Perro",
    description:
      "Purina Pro Plan Adult es un alimento con Spirulina, que satisface las necesidades de las necesidades metábolicas de los perros adultos de razas pequeñas, refuerza el sistema inmune, fortalece la microfila intestinal y refuerza la barrera cutánea.",
    image: "/img-productos/alimentos/proplan-perro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-43",
    name: "Q-ida Cat",
    description:
      "Qida Cat es una marca de alimento húmedo de alta calidad para gatos, que combina carne real y recetas formuladas para una nutrición equilibrada. Aporta hidratación, mejora la digestión y es ideal para gatos exigentes o con dieta mixta.",
    image: "/img-productos/alimentos/qida-cat.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-44",
    name: "Ringo",
    description:
      "Ringo Adulto, satisface las necesidades nutricionales de los perros adultos. Es un alimento apto para perros de todas las razas, especialmente aquellos dedicados a las tareas del campo, ya que es una buena fuente de energía. Tamaño de la mascota: Todos los Tamaños. Etapa de la vida: Adulto.",
    image: "/img-productos/alimentos/ringo.png",
    category: "alimentos",
  },
  {
    id: "alimento-45",
    name: "Taste Of the Will Gato",
    description:
      "Gracias a que su única fuente de proteína es el pescado, es un alimento ideal para mininos con sensibilidades alimentarias o estómagos delicados. Es apto para brindar una mejor nutrición en tu mascota en todas sus etapas: Gatitos, adultos y gatos senior. Aporta ácidos grasos que le ayudan al mantenimiento de un pelaje brillante y está suplementado con taurina para favorecer la salud del corazón y de los ojos.",
    image: "/img-productos/alimentos/taste-gato.webp",
    category: "alimentos",
  },
  {
    id: "alimento-46",
    name: "Taste Of the Will Perro",
    description:
      "Taste of The Wild High Prairie es un alimento de alta calidad a base bisonte asado y el venado asado. Es un alimento ideal para perros adultos. Es un concentrado sin cereales, con patatas y guisantes dulces que proporciona energía y un estilo de vida saludable para tu perro.",
    image: "/img-productos/alimentos/taste-dog.webp",
    category: "alimentos",
  },
];

export default alimentos;
