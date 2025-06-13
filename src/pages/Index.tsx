
import React, { useState } from 'react';
import { Layout, Menu, Button, Modal, Steps, Card, Table, Timeline, Drawer, Tooltip, Alert, Collapse, Tabs, AutoComplete } from 'antd';
import { motion } from 'framer-motion';
import {
  HomeOutlined,
  BulbOutlined,
  BranchesOutlined,
  DeploymentUnitOutlined,
  BookOutlined,
  RobotOutlined,
  SearchOutlined,
  RocketOutlined,
  EyeOutlined,
  LinkOutlined,
  HistoryOutlined,
  QuestionCircleOutlined,
  MenuOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const Index = () => {
  const [quizVisible, setQuizVisible] = useState(false);
  const [glossaryVisible, setGlossaryVisible] = useState(false);
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quiz data
  const quizQuestions = [
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

  // Menu items
  const menuItems = [
    { key: 'inicio', icon: <HomeOutlined />, label: 'Inicio', href: '#inicio' },
    { key: 'que-es-ia', icon: <BulbOutlined />, label: '¿Qué es la IA?', href: '#que-es-ia' },
    { key: 'machine-learning', icon: <BranchesOutlined />, label: 'Machine Learning', href: '#machine-learning' },
    { key: 'deep-learning', icon: <DeploymentUnitOutlined />, label: 'Deep Learning', href: '#deep-learning' },
    { key: 'tipos-aprendizaje', icon: <BookOutlined />, label: 'Tipos de Aprendizaje', href: '#tipos-aprendizaje' },
    { key: 'agentes', icon: <RobotOutlined />, label: 'Agentes Inteligentes', href: '#agentes' },
    { key: 'busqueda', icon: <SearchOutlined />, label: 'Búsqueda Heurística', href: '#busqueda' }
  ];

  // Software catalog data
  const softwareData = [
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

  // Software table columns
  const softwareColumns = [
    { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Objetivo', dataIndex: 'objetivo', key: 'objetivo' },
    { title: 'Licencia', dataIndex: 'licencia', key: 'licencia' },
    { title: 'Año', dataIndex: 'año', key: 'año' },
    { title: 'Autor', dataIndex: 'autor', key: 'autor' },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <div className="space-x-2">
          <Button 
            type="primary" 
            size="small" 
            icon={<EyeOutlined />}
            onClick={() => window.open(record.enlace, '_blank')}
          >
            Ver Demo
          </Button>
          <Button 
            size="small" 
            icon={<LinkOutlined />}
            onClick={() => window.open(record.enlace, '_blank')}
          >
            Ir al Sitio
          </Button>
        </div>
      )
    }
  ];

  // Timeline data
  const timelineData = [
    { label: '1950', children: 'Alan Turing publica "Computing Machinery and Intelligence"' },
    { label: '1956', children: 'Se acuña el término "Inteligencia Artificial" en Dartmouth' },
    { label: '1997', children: 'Deep Blue de IBM vence al campeón mundial de ajedrez Garry Kasparov' },
    { label: '2012', children: 'AlexNet revoluciona el reconocimiento de imágenes con deep learning' },
    { label: '2016', children: 'AlphaGo vence al campeón mundial de Go' },
    { label: '2020', children: 'GPT-3 demuestra capacidades avanzadas de procesamiento de lenguaje natural' },
    { label: '2022', children: 'ChatGPT populariza la IA conversacional para el público general' }
  ];

  // Glossary data
  const glossaryTerms = [
    { term: 'Algoritmo', definition: 'Conjunto de reglas o instrucciones definidas para resolver un problema' },
    { term: 'Machine Learning', definition: 'Subcampo de la IA que permite a las máquinas aprender sin ser programadas explícitamente' },
    { term: 'Red neuronal', definition: 'Modelo computacional inspirado en el funcionamiento del cerebro humano' },
    { term: 'Deep Learning', definition: 'Técnica de machine learning basada en redes neuronales profundas' },
    { term: 'Algoritmo genético', definition: 'Técnica de optimización inspirada en la evolución natural' }
  ];

  return (
    <Layout className="min-h-screen">
      {/* Header/Navbar */}
      <Header className="fixed w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
          <div className="flex items-center flex-shrink-0">
            <motion.div 
              className="text-xl lg:text-2xl font-bold ai-text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              🤖 Explorando la IA
            </motion.div>
          </div>
          
          {/* Desktop Menu */}
          <Menu 
            mode="horizontal" 
            className="hidden lg:flex flex-1 justify-center border-none bg-transparent ml-8"
            items={menuItems.map(item => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
              onClick: () => scrollToSection(item.key)
            }))}
          />
          
          {/* Mobile Menu Button */}
          <Button 
            className="lg:hidden flex-shrink-0"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuVisible(true)}
          />
        </div>
      </Header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Navegación"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        className="lg:hidden"
      >
        <Menu
          mode="vertical"
          items={menuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: () => {
              scrollToSection(item.key);
              setMobileMenuVisible(false);
            }
          }))}
        />
      </Drawer>

      <Content className="pt-16">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center ai-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full float-animation"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg float-animation" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full float-animation" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explorando la
              <br />
              <span className="text-yellow-300">Inteligencia Artificial</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre los fundamentos, aplicaciones y el futuro de la IA
              <br />
              a través de una experiencia interactiva y educativa
            </motion.p>
            
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                type="primary" 
                size="large" 
                icon={<RocketOutlined />}
                className="bg-white text-purple-600 border-none hover:bg-gray-100 pulse-glow"
                onClick={() => scrollToSection('que-es-ia')}
              >
                Empezar el Recorrido
              </Button>
              
              <Button 
                size="large" 
                icon={<QuestionCircleOutlined />}
                className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                onClick={() => setQuizVisible(true)}
              >
                Evaluación Inicial
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What is AI Section */}
        <section id="que-es-ia" className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">¿Qué es la Inteligencia Artificial?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                La Inteligencia Artificial es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Definición Técnica</h3>
                <p className="text-muted-foreground mb-4">
                  La IA es un campo de la informática que se dedica a crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el reconocimiento de patrones, la toma de decisiones y el aprendizaje.
                </p>
                <Alert
                  message="Sabías que..."
                  description="El término 'Inteligencia Artificial' fue acuñado por John McCarthy en 1956 durante la conferencia de Dartmouth."
                  type="info"
                  showIcon
                />
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Aplicaciones Actuales</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Asistentes virtuales (Siri, Alexa, Google Assistant)</li>
                  <li>• Sistemas de recomendación (Netflix, Amazon, Spotify)</li>
                  <li>• Reconocimiento facial y de voz</li>
                  <li>• Vehículos autónomos</li>
                  <li>• Diagnóstico médico asistido</li>
                  <li>• Traducciones automáticas</li>
                </ul>
              </Card>
            </div>

            <Tabs defaultActiveKey="1" className="mb-8">
              <TabPane tab="Tipos de IA" key="1">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card title="IA Débil" className="text-center">
                    <p>Sistemas diseñados para tareas específicas. Ejemplo: calculadoras, GPS.</p>
                  </Card>
                  <Card title="IA General" className="text-center">
                    <p>Sistemas con capacidades cognitivas similares a las humanas (aún en desarrollo).</p>
                  </Card>
                  <Card title="Superinteligencia" className="text-center">
                    <p>IA que supera la inteligencia humana en todos los aspectos (hipotética).</p>
                  </Card>
                </div>
              </TabPane>
              <TabPane tab="Historia" key="2">
                <Timeline items={timelineData.slice(0, 4)} />
              </TabPane>
            </Tabs>
          </div>
        </section>

        {/* Machine Learning Section */}
        <section id="machine-learning" className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Machine Learning</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                El aprendizaje automático permite a las máquinas aprender y mejorar automáticamente a partir de la experiencia sin ser programadas explícitamente.
              </p>
            </motion.div>

            <Collapse defaultActiveKey={['1']} className="mb-8">
              <Panel header="¿Cómo funciona el Machine Learning?" key="1">
                <div className="space-y-4">
                  <p>El Machine Learning funciona mediante algoritmos que analizan datos, identifican patrones y hacen predicciones o decisiones sin intervención humana directa.</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card size="small" title="1. Datos">
                      <p>Recopilación y preparación de grandes cantidades de datos relevantes.</p>
                    </Card>
                    <Card size="small" title="2. Algoritmo">
                      <p>Selección del modelo matemático apropiado para el problema.</p>
                    </Card>
                    <Card size="small" title="3. Entrenamiento">
                      <p>El algoritmo aprende patrones a partir de los datos de entrenamiento.</p>
                    </Card>
                  </div>
                </div>
              </Panel>
              
              <Panel header="Algoritmos Principales" key="2">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Algoritmos Supervisados:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Regresión Lineal</li>
                      <li>• Árboles de Decisión</li>
                      <li>• Support Vector Machines</li>
                      <li>• Random Forest</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Algoritmos No Supervisados:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• K-Means Clustering</li>
                      <li>• Análisis de Componentes Principales</li>
                      <li>• DBSCAN</li>
                      <li>• Algoritmos de Asociación</li>
                    </ul>
                  </div>
                </div>
              </Panel>
              
              <Panel header="Aplicaciones Prácticas" key="3">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card size="small" className="text-center">
                    <h4>Finanzas</h4>
                    <p className="text-sm">Detección de fraudes, análisis de riesgo crediticio</p>
                  </Card>
                  <Card size="small" className="text-center">
                    <h4>Salud</h4>
                    <p className="text-sm">Diagnóstico por imágenes, descubrimiento de medicamentos</p>
                  </Card>
                  <Card size="small" className="text-center">
                    <h4>Marketing</h4>
                    <p className="text-sm">Segmentación de clientes, personalización</p>
                  </Card>
                  <Card size="small" className="text-center">
                    <h4>Transporte</h4>
                    <p className="text-sm">Optimización de rutas, mantenimiento predictivo</p>
                  </Card>
                </div>
              </Panel>
            </Collapse>

            <Alert
              message="Dato Curioso"
              description="El algoritmo de Machine Learning más antiguo, la regresión lineal, fue desarrollado por Carl Friedrich Gauss en 1809."
              type="info"
              showIcon
              className="mb-8"
            />
          </div>
        </section>

        {/* Deep Learning Section */}
        <section id="deep-learning" className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Deep Learning</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                El aprendizaje profundo utiliza redes neuronales artificiales con múltiples capas para modelar y entender datos complejos.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Redes Neuronales</h3>
                <p className="mb-4">
                  Inspiradas en el cerebro humano, las redes neuronales están compuestas por nodos (neuronas) interconectados que procesan información.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-ai-primary rounded-full"></div>
                    <span>Capa de entrada (Input Layer)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-ai-secondary rounded-full"></div>
                    <span>Capas ocultas (Hidden Layers)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-ai-accent rounded-full"></div>
                    <span>Capa de salida (Output Layer)</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Tipos de Redes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">CNN (Convolutional Neural Networks)</h4>
                    <p className="text-sm text-muted-foreground">Especializadas en procesamiento de imágenes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">RNN (Recurrent Neural Networks)</h4>
                    <p className="text-sm text-muted-foreground">Para datos secuenciales como texto y audio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">GAN (Generative Adversarial Networks)</h4>
                    <p className="text-sm text-muted-foreground">Para generar contenido nuevo</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Transformers</h4>
                    <p className="text-sm text-muted-foreground">Arquitectura base de GPT y BERT</p>
                  </div>
                </div>
              </Card>
            </div>

            <Alert
              message="Revolución del Deep Learning"
              description="En 2012, AlexNet demostró el poder del deep learning al ganar ImageNet con una precisión significativamente mayor que los métodos tradicionales."
              type="success"
              showIcon
            />
          </div>
        </section>

        {/* Learning Types Section */}
        <section id="tipos-aprendizaje" className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Tipos de Aprendizaje</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Los algoritmos de IA aprenden de diferentes maneras según el tipo de datos y supervisión disponible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h3 className="text-2xl font-semibold mb-4">Aprendizaje Supervisado</h3>
                  <p className="mb-4">
                    El algoritmo aprende a partir de ejemplos etiquetados, donde se conoce la respuesta correcta.
                  </p>
                  <div className="text-left space-y-2">
                    <p><strong>Ejemplos:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Clasificación de imágenes</li>
                      <li>• Detección de spam</li>
                      <li>• Predicción de precios</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold mb-4">Aprendizaje No Supervisado</h3>
                  <p className="mb-4">
                    El algoritmo encuentra patrones ocultos en datos sin etiquetas previas.
                  </p>
                  <div className="text-left space-y-2">
                    <p><strong>Ejemplos:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Segmentación de clientes</li>
                      <li>• Detección de anomalías</li>
                      <li>• Análisis de mercado</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-2xl font-semibold mb-4">Aprendizaje por Refuerzo</h3>
                  <p className="mb-4">
                    El algoritmo aprende mediante prueba y error, recibiendo recompensas o penalizaciones.
                  </p>
                  <div className="text-left space-y-2">
                    <p><strong>Ejemplos:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Juegos (AlphaGo, Chess)</li>
                      <li>• Vehículos autónomos</li>
                      <li>• Trading algorítmico</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intelligent Agents Section */}
        <section id="agentes" className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Agentes Inteligentes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un agente inteligente es una entidad que percibe su entorno y actúa de manera autónoma para alcanzar objetivos específicos.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Características de un Agente</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ai-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Percepción</h4>
                      <p className="text-sm text-muted-foreground">Recibe información del entorno a través de sensores</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ai-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Razonamiento</h4>
                      <p className="text-sm text-muted-foreground">Procesa la información para tomar decisiones</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ai-accent rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Acción</h4>
                      <p className="text-sm text-muted-foreground">Ejecuta acciones para modificar el entorno</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Aprendizaje</h4>
                      <p className="text-sm text-muted-foreground">Mejora su desempeño basado en la experiencia</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Tipos de Agentes</h3>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Reactivos" key="1">
                    <p className="mb-2">Responden directamente a estímulos del entorno sin memoria del pasado.</p>
                    <p className="text-sm text-muted-foreground">Ejemplo: Termostato, sistemas de alarma</p>
                  </TabPane>
                  <TabPane tab="Basados en Modelos" key="2">
                    <p className="mb-2">Mantienen un modelo interno del mundo para tomar mejores decisiones.</p>
                    <p className="text-sm text-muted-foreground">Ejemplo: GPS, robots de limpieza</p>
                  </TabPane>
                  <TabPane tab="Basados en Objetivos" key="3">
                    <p className="mb-2">Actúan para alcanzar objetivos específicos definidos.</p>
                    <p className="text-sm text-muted-foreground">Ejemplo: Asistentes virtuales, planificadores</p>
                  </TabPane>
                  <TabPane tab="Basados en Utilidad" key="4">
                    <p className="mb-2">Optimizan una función de utilidad para maximizar su desempeño.</p>
                    <p className="text-sm text-muted-foreground">Ejemplo: Sistemas de recomendación, trading bots</p>
                  </TabPane>
                </Tabs>
              </Card>
            </div>

            <Alert
              message="Agentes en la Vida Real"
              description="Los chatbots como ChatGPT son agentes inteligentes que perciben texto, procesan el lenguaje natural y generan respuestas coherentes para ayudar a los usuarios."
              type="info"
              showIcon
            />
          </div>
        </section>

        {/* Heuristic Search Section */}
        <section id="busqueda" className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Búsqueda Heurística</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Las técnicas de búsqueda heurística permiten encontrar soluciones eficientes a problemas complejos usando "reglas de oro" o estimaciones inteligentes.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">¿Qué es una Heurística?</h3>
                <p className="mb-4">
                  Una heurística es una técnica diseñada para resolver un problema más rápidamente cuando los métodos clásicos son demasiado lentos, o para encontrar una solución aproximada cuando no es posible encontrar una solución exacta.
                </p>
                
                <Alert
                  message="Ejemplo Simple"
                  description="En un GPS, en lugar de calcular todas las rutas posibles, usa heurísticas como 'distancia en línea recta' para estimar qué caminos son más prometedores."
                  type="info"
                  showIcon
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Algoritmos Principales</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-ai-primary pl-4">
                    <h4 className="font-semibold">A* (A-estrella)</h4>
                    <p className="text-sm text-muted-foreground">Encuentra el camino más corto usando costo real + estimación heurística</p>
                  </div>
                  <div className="border-l-4 border-ai-secondary pl-4">
                    <h4 className="font-semibold">Algoritmos Genéticos</h4>
                    <p className="text-sm text-muted-foreground">Inspirados en la evolución natural para optimización</p>
                  </div>
                  <div className="border-l-4 border-ai-accent pl-4">
                    <h4 className="font-semibold">Simulated Annealing</h4>
                    <p className="text-sm text-muted-foreground">Basado en el proceso de enfriamiento de metales</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Hill Climbing</h4>
                    <p className="text-sm text-muted-foreground">Búsqueda local que siempre se mueve hacia mejores soluciones</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Simple A* Visualization */}
            <Card className="p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">Simulador Visual: Algoritmo A*</h3>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground mb-2">Ejemplo: Encontrar el camino más corto de A a B</p>
                  <div className="inline-flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                      <span>Inicio</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
                      <span>Destino</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
                  {Array.from({ length: 25 }, (_, i) => (
                    <div 
                      key={i}
                      className={`w-8 h-8 border-2 border-gray-300 flex items-center justify-center text-xs ${
                        i === 0 ? 'bg-green-500 text-white' :
                        i === 24 ? 'bg-red-500 text-white' :
                        [6, 11, 12, 17].includes(i) ? 'bg-yellow-400' :
                        [1, 7, 13, 18, 19, 23].includes(i) ? 'bg-blue-200' :
                        'bg-white'
                      }`}
                    >
                      {i === 0 ? 'A' : i === 24 ? 'B' : [6, 11, 12, 17].includes(i) ? '■' : ''}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <div className="flex justify-center space-x-4">
                    <span className="flex items-center"><div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>Inicio</span>
                    <span className="flex items-center"><div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>Destino</span>
                    <span className="flex items-center"><div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>Camino Óptimo</span>
                    <span className="flex items-center"><div className="w-3 h-3 bg-blue-200 rounded-full mr-1"></div>Explorado</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Aplicaciones Reales</h3>
                <ul className="space-y-2">
                  <li>• <strong>Navegación GPS:</strong> Encontrar rutas óptimas</li>
                  <li>• <strong>Juegos:</strong> IA para videojuegos (pathfinding)</li>
                  <li>• <strong>Robótica:</strong> Planificación de movimientos</li>
                  <li>• <strong>Optimización:</strong> Problemas de scheduling</li>
                  <li>• <strong>Bioinformática:</strong> Alineación de secuencias</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ventajas vs Desventajas</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-600 font-semibold">✓ Ventajas</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Reducen significativamente el tiempo de búsqueda</li>
                      <li>• Proporcionan soluciones "suficientemente buenas"</li>
                      <li>• Aplicables a problemas complejos del mundo real</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-600 font-semibold">✗ Desventajas</h4>
                    <ul className="text-sm space-y-1">
                      <li>• No garantizan la solución óptima</li>
                      <li>• Dependientes de la calidad de la heurística</li>
                      <li>• Pueden quedarse en óptimos locales</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Software Catalog Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Catálogo de Software de IA</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Herramientas y frameworks esenciales para comenzar tu viaje en la Inteligencia Artificial
              </p>
            </motion.div>

            <Card className="overflow-hidden">
              <Table 
                dataSource={softwareData}
                columns={softwareColumns}
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                }}
                scroll={{ x: true }}
                className="w-full"
              />
            </Card>

            <div className="mt-8 text-center">
              <Button 
                type="primary" 
                size="large"
                onClick={() => window.open('https://github.com/topics/artificial-intelligence', '_blank')}
              >
                Ver Más Software en GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 ai-text-gradient">Historia de la Inteligencia Artificial</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un recorrido por los hitos más importantes en el desarrollo de la IA
              </p>
            </motion.div>

            <Card className="p-8">
              <Timeline
                items={timelineData}
                mode="alternate"
                className="custom-timeline"
              />
            </Card>

            <div className="mt-8 text-center">
              <Button 
                icon={<HistoryOutlined />}
                onClick={() => window.open('https://en.wikipedia.org/wiki/History_of_artificial_intelligence', '_blank')}
              >
                Leer más sobre la historia de la IA
              </Button>
            </div>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 ai-text-gradient">Explorando la IA</h3>
              <p className="text-gray-300">
                Plataforma educativa dedicada a enseñar los fundamentos de la Inteligencia Artificial de manera interactiva y accesible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#inicio" className="hover: text-white transition-colors">Inicio</a></li>
                <li><a href="#que-es-ia" className="hover:text-white transition-colors">¿Qué es la IA?</a></li>
                <li><a href="#machine-learning" className="hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#deep-learning" className="hover:text-white transition-colors">Deep Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Button 
                    type="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => setGlossaryVisible(true)}
                  >
                    Glosario de Términos
                  </Button>
                </li>
                <li><a href="https://github.com/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub - IA</a></li>
                <li><a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Papers de IA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Explorando la Inteligencia Artificial. Hecho con ❤️ para la educación.</p>
          </div>
        </div>
      </Footer>

      {/* Quiz Modal */}
      <Modal
        title="Evaluación Inicial - Conoce tu Nivel"
        open={quizVisible}
        onCancel={() => {
          setQuizVisible(false);
          setCurrentQuizStep(0);
        }}
        footer={null}
        width={600}
      >
        <Steps current={currentQuizStep} className="mb-8">
          <Steps.Step title="Nivel" />
          <Steps.Step title="Intereses" />
          <Steps.Step title="Objetivos" />
        </Steps>
        
        {currentQuizStep < quizQuestions.length ? (
          <div>
            <h3 className="text-lg font-semibold mb-4">{quizQuestions[currentQuizStep].title}</h3>
            <div className="space-y-2 mb-6">
              {quizQuestions[currentQuizStep].content.split('|').map((option, index) => (
                <Button 
                  key={index}
                  block 
                  className="text-left"
                  onClick={() => {
                    if (currentQuizStep < quizQuestions.length - 1) {
                      setCurrentQuizStep(currentQuizStep + 1);
                    } else {
                      setQuizVisible(false);
                      setCurrentQuizStep(0);
                      Modal.success({
                        title: '¡Evaluación Completada!',
                        content: 'Basado en tus respuestas, te recomendamos comenzar con la sección "¿Qué es la IA?" y continuar con Machine Learning.',
                      });
                    }
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>

      {/* Glossary Drawer */}
      <Drawer
        title="Glosario de Términos de IA"
        placement="right"
        onClose={() => setGlossaryVisible(false)}
        open={glossaryVisible}
        width={400}
      >
        <div className="space-y-6">
          {glossaryTerms.map((item, index) => (
            <Card key={index} size="small">
              <h4 className="font-semibold text-ai-primary mb-2">{item.term}</h4>
              <p className="text-sm text-muted-foreground">{item.definition}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-8">
          <AutoComplete
            style={{ width: '100%' }}
            placeholder="Buscar término..."
            options={glossaryTerms.map(term => ({ value: term.term }))}
          />
        </div>
      </Drawer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Tooltip title="Abrir Glosario">
          <Button 
            type="primary" 
            shape="circle" 
            size="large"
            icon={<BookOutlined />}
            className="shadow-lg pulse-glow"
            onClick={() => setGlossaryVisible(true)}
          />
        </Tooltip>
      </div>
    </Layout>
  );
};

export default Index;
