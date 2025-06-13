
export const menuItems = [
  { key: 'inicio', icon: 'HomeOutlined', label: 'Inicio', href: '#inicio' },
  { key: 'que-es-ia', icon: 'BulbOutlined', label: '¿Qué es la IA?', href: '#que-es-ia' },
  { key: 'machine-learning', icon: 'BranchesOutlined', label: 'Machine Learning', href: '#machine-learning' },
  { key: 'deep-learning', icon: 'DeploymentUnitOutlined', label: 'Deep Learning', href: '#deep-learning' },
  { key: 'tipos-aprendizaje', icon: 'BookOutlined', label: 'Tipos de Aprendizaje', href: '#tipos-aprendizaje' },
  { key: 'agentes', icon: 'RobotOutlined', label: 'Agentes Inteligentes', href: '#agentes' },
  { key: 'busqueda', icon: 'SearchOutlined', label: 'Búsqueda Heurística', href: '#busqueda' }
];

export const quizQuestions = [
  {
    title: "¿Cuál es tu nivel actual en IA?",
    content: "Principiante completo|Algo de conocimiento|Intermedio|Avanzado"
  },
  {
    title: "¿Qué te interesa más?",
    content: "Machine Learning|Deep Learning|Robótica|Procesamiento de lenguaje natural"
  },
  {
    title: "¿Cuál es tu objetivo?",
    content: "Aprender conceptos básicos|Implementar proyectos|Uso profesional|Investigación académica"
  }
];

export const softwareData = [
  {
    key: '1',
    nombre: 'TensorFlow',
    objetivo: 'Framework de machine learning de código abierto',
    enlace: 'https://tensorflow.org',
    licencia: 'Apache 2.0',
    año: 2015,
    autor: 'Google'
  },
  {
    key: '2',
    nombre: 'PyTorch',
    objetivo: 'Biblioteca de machine learning para Python',
    enlace: 'https://pytorch.org',
    licencia: 'BSD',
    año: 2016,
    autor: 'Meta AI'
  },
  {
    key: '3',
    nombre: 'Scikit-learn',
    objetivo: 'Biblioteca de machine learning para Python',
    enlace: 'https://scikit-learn.org',
    licencia: 'BSD',
    año: 2007,
    autor: 'David Cournapeau'
  },
  {
    key: '4',
    nombre: 'OpenAI GPT',
    objetivo: 'Modelo de lenguaje generativo pre-entrenado',
    enlace: 'https://openai.com',
    licencia: 'Comercial',
    año: 2018,
    autor: 'OpenAI'
  },
  {
    key: '5',
    nombre: 'Keras',
    objetivo: 'API de alto nivel para redes neuronales',
    enlace: 'https://keras.io',
    licencia: 'MIT',
    año: 2015,
    autor: 'François Chollet'
  }
];

export const timelineData = [
  { label: '1950', children: 'Alan Turing publica "Computing Machinery and Intelligence"' },
  { label: '1956', children: 'Se acuña el término "Inteligencia Artificial" en Dartmouth' },
  { label: '1997', children: 'Deep Blue de IBM vence al campeón mundial de ajedrez Garry Kasparov' },
  { label: '2012', children: 'AlexNet revoluciona el reconocimiento de imágenes con deep learning' },
  { label: '2016', children: 'AlphaGo vence al campeón mundial de Go' },
  { label: '2020', children: 'GPT-3 demuestra capacidades avanzadas de procesamiento de lenguaje natural' },
  { label: '2022', children: 'ChatGPT populariza la IA conversacional para el público general' }
];

export const glossaryTerms = [
  { term: 'Algoritmo', definition: 'Conjunto de reglas o instrucciones definidas para resolver un problema' },
  { term: 'Machine Learning', definition: 'Subcampo de la IA que permite a las máquinas aprender sin ser programadas explícitamente' },
  { term: 'Red neuronal', definition: 'Modelo computacional inspirado en el funcionamiento del cerebro humano' },
  { term: 'Deep Learning', definition: 'Técnica de machine learning basada en redes neuronales profundas' },
  { term: 'Algoritmo genético', definition: 'Técnica de optimización inspirada en la evolución natural' }
];
