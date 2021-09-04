export const about = {
  text: `Con un máster universitario en Aplicaciones Multimedia de la UOC y un certificado de Frontend con React de la IT Academy del Cibernàrium. Con sólidos conocimientos en React, Nextjs, Redux, JavaScript ES6, HTML5 y CSS3. Conocimientos también en NodeJs, Express, MongoDB y la creación de una API REST. Desarrollo de una aplicación web progresiva con el fullstack MERN como trabajo final de máster. Busco adquirir experiencia laboral como desarrolladora frontend con React.`,
};

export const projects = [
  {
    index: 1,
    title: 'entrenem',
    subtitle: 'Proyecto final del Máster Universitario en Aplicaciones Multimedia',
    image: 'entrenem.png',
    imageTitle: 'Captura de pantalla de entrenem',
    linkSite: 'https://www.entrenem.com',
    linkGithub: ['https://github.com/sschmidt0/entrenem_frontend', 'https://github.com/sschmidt0/entrenem_backend'],
    information: ['Aplicación web progresiva con el fullstack MERN (MongoDb, Express, React, Nodejs)', 'Plataforma colaborativa orientada a la búsqueda y oferta de actividades deportivas de diferentes categorías', 'Funcionalidades básicas CRUD', 'Autenticación del usuario, Creación API REST'],
    tecnologies: ['React', 'Redux', 'Nodejs', 'Express', 'MongoDB', 'Material UI'],
  },
  {
    index: 2,
    title: 'Reactube',
    subtitle: 'Proyecto final del módulo React de la IT Academy',
    image: 'reactube.png',
    imageTitle: 'Captura de pantalla de Reactube',
    linkSite: 'https://reactube-proyecto.netlify.app',
    linkGithub: ['https://github.com/sschmidt0/Reactube'],
    information: ['Clone de Youtube', 'Uso de la API de YouTube', 'Dashboard con buscador de vídeos, Listado de vídeos recomendados, Historial de búsqueda de términos, vídeos favoritos.', 'React Context'],
    tecnologies: ['React', 'Material UI'],
  },
  {
    index: 3,
    title: 'Portafolio',
    subtitle: 'Portafolio con el CV de la autora y proyectos suyos',
    image: 'portfolio.png',
    linkSite: 'https://www.sarahschmidt.es',
    linkGithub: ['https://github.com/sschmidt0/portfolio'],
    information: ['React CSS Transition', 'Formulario funcional'],
    tecnologies: ['React', 'Nextjs', 'Material UI'],
  },
  {
    index: 4,
    title: 'Lazy Loading Images',
    subtitle: 'Prueba técnica final de la IT Academy',
    image: 'lazy-loading.png',
    imageTitle: 'Captura de pantalla del proyecto de lazy loading',
    linkGithub: ['https://github.com/sschmidt0/dynamically-loading-images'],
    information: ['Imágenes que se cargan dinámicamente a medida que el usuario se vaya desplazando hacia abajo en el navedor', 'Intersection Observer'],
    tecnologies: ['React'],
  },
];

export const curriculumInfo = [
  {
    work: [
      {
        id: 1,
        title: 'Data Modeler',
        companies: [
          {
            name: 'M47 Labs',
            years: '2019 - actualidad',
          }
        ],
        description: [
          'Responsabilidad principal: centrarse en los aspectos internacionales de un software de asistente de voz',
          'Interacción con el equipo de pruebas internacionales e ingenieros para ayudar a reproducir problemas y probar características',
        ]
      },
      {
        id: 2,
        title: 'Profesora de lenguas',
        companies: [
          {
            name: 'Universitat de Barcelona',
            years: '2013 - 2019'
          },
          {
            name: 'Universitat Oberta de Catalunya',
            years: '2017 - 2018'
          },
          {
            name:'ESCI-UPF',
            years: '2014-2017'
          }
        ],
        description: [
          'Diseño e impartición de formación',
          'Desarrollo de recursos didácticos',
          'Atención y asesoramiento al cliente online y presencial',
          'Análisis de material y mejora en los procedimientos internos',
        ]
      },
    ]
  },
  {
    studies: [
      {
        id: 1,
        center: 'Universitat Oberta de Catalunya',
        years: '2018 - 2021',
        title: 'Máster universitario en Aplicaciones Multimedia',
        description: [
          'MERN: MongoDB, Express, React, Nodejs',
          'HTML5, CSS3, Sass, ITCSS, BEM, Bootstrap',
          'JavaScript ES6, jQuery',
          'MySQL, PHP (básico)',
          'Wordpress',
          'Aplicación web progresiva (PWA)',
          'Creación de una API REST',
          'Diseño de interfaces interactivas',
          'Analítica web: estrategias de SEO',
          'Accesibilidad Web',
          'Metodologías ágiles, SCRUM',
          'Proyecto final: aplicación web progresiva con el fullstack MERN',
        ]
      },
      {
        id: 2,
        center: 'IT Academy, Barcelona Activa',
        years: '2021',
        title: 'Frontend con React',
        description: [
          'HTML5, CSS3, Bootstrap, Sass',
          'JavaScript ES6',
          'DevTools',
          'Git',
          'API REST',
          'React',
          'Testing',
        ]
      },
      {
        id: 3,
        center: 'edX',
        years: '2020',
        title: 'Introduction to Web accessibility',
        description: [
          '¿Qué es la accesibilidad web?',
          'Personas y tecnología digital',
          'Casos de negocio y beneficios',
          'Principios, estándares y comprobaciones',
          'Introducción a la accesibilidad en una empresa'
        ]
      },
      {
        id: 4,
        center: 'Universitat Autònoma de Barcelona',
        years: '2009 - 2013',
        title: 'Doctorado en Filología Española',
        description: [
          'Próxemica y comunicación intercultural: la comunicación no verbal en la enseñanza de E/LE'
        ]
      },
      {
        id: 5,
        center: 'Universitat Autònoma de Barcelona',
        years: '2008 - 2009',
        title: 'Máster universitari en TICOM',
        description: [
          'Tratamiento de la información y comunicación multilingüe'
        ]
      },
      {
        id: 6,
        center: 'Universität Duisburg-Essen (Alemania)',
        years: '2004 - 2008',
        title: 'Filología Inglesa y Filología Española',
        description: [
          'Lingüística, literatura y didáctica'
        ]
      },
    ],
  },
];

export const languages = [
  {
    id: 1,
    language: 'Alemán',
    percentage: '100%',
    knowledge: 'Lengua materna'
  },
  {
    id: 2,
    language: 'Inglés',
    percentage: '90%',
    knowledge: 'Muy alto'
  },
  {
    id: 3,
    language: 'Castellano',
    percentage: '90%',
    knowledge: 'Muy alto'
  },
  {
    id: 4,
    language: 'Catalán',
    percentage: '90%',
    knowledge: 'Muy alto'
  },
  {
    id: 5,
    language: 'Italiano',
    percentage: '70%',
    knowledge: 'Alto'
  },
];
