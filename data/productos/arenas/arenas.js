const arenas = [
  {
    "id": "arena-1",
    "name": "Arena Calabaza Carbon Activo",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/carbon.avif",
    "category": "arena"
  },
  {
    "id": "arena-2",
    "name": "Arena Calabaza Cafe",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/cafe.webp",
    "category": "arena"
  },
  {
    "id": "arena-3",
    "name": "Arena Calabaza Lavanda",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/lavanda.webp",
    "category": "arena"
  },
  {
    "id": "arena-4",
    "name": "Arena Calabaza Manzana",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/manzana.jpg",
    "category": "arena"
  },
  {
    "id": "arena-5",
    "name": "Arena Calabaza Rosas",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/rosas.png",
    "category": "arena"
  },
  {
    "id": "arena-6",
    "name": "Arena Calabaza Talco de Bebe",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/talco.jpg",
    "category": "arena"
  },
  {
    "id": "arena-7",
    "name": "Arena Calabaza Yazmin",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/yazmin.png",
    "category": "arena"
  },
  {
    "id": "arena-8",
    "name": "Arena Calabaza Vainilla",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/vainilla.webp",
    "category": "arena"
  },
  {
    "id": "arena-9",
    "name": "Arena Pino Minino",
    "description": "Pino Minino es una arena ecológica en pellets de viruta de pino comprimida, que absorbe líquidos y retiene olores de forma natural. Es biodegradable, sin químicos, y con aroma a pino, siendo una opción respetuosa con el medio ambiente.",
    "image": "/img-productos/arenas/pino.png",
    "category": "arena"
  },
  {
    "id": "arena-10",
    "name": "Arena Missyfu",
    "description": "La arena Calabaza está formulada con ingredientes naturales que ofrecen una solución ecológica para el cuidado de tu gato. Su capacidad aglomerante y controladora de olores facilita la limpieza y mantiene un ambiente fresco. Su textura suave es ideal para gatos con patas sensibles.",
    "image": "/img-productos/arenas/missyfu.webp",
    "category": "arena"
  },
  {
    "id": "arena-11",
    "name": "Arena Perlitas",
    "description": "Perlitas es una arena de sílice que neutraliza olores y absorbe líquidos de forma eficiente. Tiene una textura suave, incluye partículas antibacterianas y desodorantes, y es muy duradera, ideal para mantener el arenero seco y libre de malos olores.",
    "image": "/img-productos/arenas/perlitas.png",
    "category": "arena"
  },
  {
    "id": "arena-12",
    "name": "Arena Hi Cat",
    "description": "Hi Cat ofrece una arena sanitaria que destaca por su capacidad de aglomeración rápida y control de olores. Su textura suave y bajo nivel de polvo la hacen adecuada para gatos sensibles, proporcionando una experiencia cómoda y limpia. Ideal para mantener la higiene diaria de la bandeja sanitaria.",
    "image": "/img-productos/arenas/hibaby.png",
    "category": "arena"
  },
  {
    "id": "arena-13",
    "name": "Arena Kattu",
    "description": "Kattu ofrece una arena sanitaria diseñada para proporcionar una experiencia higiénica y cómoda para tu gato. Con su fórmula aglomerante y controladora de olores, facilita la limpieza y mantiene la bandeja sanitaria fresca por más tiempo. Su textura suave es adecuada para las patas sensibles de los felinos.",
    "image": "/img-productos/arenas/kattu.png",
    "category": "arena"
  },
  {
    "id": "arena-14",
    "name": "Arena Kattu",
    "description": "Kattu ofrece una arena sanitaria diseñada para proporcionar una experiencia higiénica y cómoda para tu gato. Con su fórmula aglomerante y controladora de olores, facilita la limpieza y mantiene la bandeja sanitaria fresca por más tiempo. Su textura suave es adecuada para las patas sensibles de los felinos.",
    "image": "/img-productos/arenas/kattu3.png",
    "category": "arena"
  },
  {
    "id": "arena-15",
    "name": "Arena King Cat",
    "description": "King Cat es una arena sanitaria de origen natural, altamente aglomerante y con una granulometría fina que facilita la limpieza diaria. Su capacidad para neutralizar y absorber rápidamente los olores, la convierte en una opción ideal para mantener un ambiente limpio y fresco.",
    "image": "/img-productos/arenas/kingcat.png",
    "category": "arena"
  },
  {
    "id": "arena-16",
    "name": "Arena Maíz Cat",
    "description": "Maíz Cat es una arena sanitaria ecológica elaborada a partir de maíz, ofreciendo una alternativa natural y biodegradable para el cuidado de tu gato. Su fórmula aglomerante permite una limpieza fácil y eficiente, controlando eficazmente los olores y manteniendo la bandeja higiénica por más tiempo. Además, su textura suave es amable con las patas sensibles de los felinos.",
    "image": "/img-productos/arenas/maiz-cat.webp",
    "category": "arena"
  },
  {
    "id": "arena-17",
    "name": "Arena Unikat",
    "description": "Unikat presenta una arena sanitaria premium que combina alta capacidad de absorción con un control eficaz de olores. Su fórmula aglomerante permite una limpieza sencilla, mientras que su composición natural asegura la comodidad y bienestar de tu gato. Ideal para hogares que buscan una solución higiénica y eficiente.",
    "image": "/img-productos/arenas/unikat.webp",
    "category": "arena"
  }
]

export default arenas;