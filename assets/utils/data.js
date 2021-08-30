import picEntrenem from '../assets/images/entrenem.png';
import picReactube from '../assets/images/reactube.png';
import picLazyLoading from '../assets/images/lazy-loading.png';

export const about = {
  text: `Con un máster universitario en Aplicaciones Multimedia de la UOC y un certificado de Frontend con React de la IT Academy del Cibernàrium. Con sólidos conocimientos en React, Redux, JavaScript ES6, HTML5 y CSS3. Conocimientos también en NodeJs, Express, MongoDB y la creación de una API REST. Desarrollo de una aplicación web progresiva con el fullstack MERN como trabajo final de máster. Busco adquirir experiencia laboral como desarrolladora frontend con React.`,
};

export const projects = [
  {
    index: 1,
    title: 'entrenem',
    src: picEntrenem,
    linkSite: 'https://www.entrenem.com',
    linkGithub: ['https://github.com/sschmidt0/entrenem_frontend', 'https://github.com/sschmidt0/entrenem_backend'],
    description: ['Como proyecto final de máster del Máster Universitario en Aplicaciones Multimedia de la ', <a href="https://www.uoc.edu/portal/ca/index.html" target="_blank" rel="noreferrer">Universitat Oberta de Catalunya</a>, ' desarrollé una aplicación web progresiva con el fullstack MERN (MongoDb, Express, React, Nodejs). Se trata de una plataforma colaborativa orientada a la búsqueda y oferta de actividades deportivas de diferentes categorías. Incluye las funcionalidades básicas CRUD y la autenticación del usuario.'],
    tecnologies: [
      { text: 'React' },
      { text: 'Redux' },
      { text: 'Nodejs' },
      { text: 'Express' },
      { text: 'MongoDB' },
    ],
  },
  {
    index: 2,
    title: 'Reactube',
    src: picReactube,
    linkSite: 'https://reactube-proyecto.netlify.app',
    linkGithub: ['https://github.com/sschmidt0/Reactube'],
    description: ['Como un proyecto final del módulo React de la ', <a href="https://cibernarium.barcelonactiva.cat/es/it-academy2" target="_blank" rel="noreferrer">ITAcademy</a>, ' del Cibernàrium, Barcelona Activa, desarrollé una pequeña aplicación seguiendo el ejemplo de YouTube y utilizando la API de YouTube. Consiste en un dashboard en el cual se pueden ver un buscador de vídeos, un listado de vídeos recomendados, un historial de búsqueda de términos y los vídeos favoritos.'],
    tecnologies: [
      { text: 'React' },
    ],
  },
  {
    index: 3,
    title: 'Lazy Loading Images',
    src: picLazyLoading,
    linkSite: '#localhost',
    linkGithub: ['https://github.com/sschmidt0/dynamically-loading-images'],
    description: ['Como prueba técnica final para acabar la ', <a href="https://cibernarium.barcelonactiva.cat/es/it-academy2" target="_blank" rel="noreferrer">ITAcademy</a>, ' del Cibernàrium, Barcelona Activa, desarrollé un pequeño proyecto con React en el cual se cargan las imágenes a medida que el usuario se vaya desplazando hacia abajo en el navedor. Esta carga diferida o lazy loading ayuda a optimizar el rendimiento del sitio web.'],
    tecnologies: [
      { text: 'React' },
    ],
  }
];

export const curriculumInfo = [
  {
    'work': {

    }
  },
  {
    'studies': [
      {
        'university': 'Universitat Oberta de Catalunya',
        'year': '2018 - 2021',
        'title': 'Máster universitario en Aplicaciones Multimedia',
        'description': []
      },
      {
        'university': 'Universitat Autònoma de Barcelona',
        'year': '2009 - 2013',
        'title': 'Doctorado en Filología Española',
        'description': []
      },
      {
        'university': 'Universitat Autònoma de Barcelona',
        'year': '2008 - 2009',
        'title': 'Máster universitari en TICOM',
        'description': []
      },
      {
        'university': 'Universität Duisburg-Essen',
        'year': '2004 - 2008',
        'title': 'Filología Inglesa y Filología Española',
        'description': []
      },
    ],
  },
  {
    knowledge: ['React', 'Redux', 'NodeJs', 'Express', 'MongoDB', 'Material UI'],
  }
];
