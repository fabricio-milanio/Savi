import { ReactNode, useState, useEffect } from 'react';
import MainLayout from '@/layouts/Main/main-layout';
import { 
  TreePine, 
  GraduationCap, 
  Recycle, 
  Droplets, 
  Users, 
  Calendar,
  MapPin,
  Target,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
  Leaf,
  Lightbulb,
  HandHeart,
  Globe,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Construção de redes de água",
    category: "Meio Ambiente",
    status: "Em andamento",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "O projeto consiste na construção de cerca de 7km de nova redes de água para possibilitar a interligação do anel de abastecimento de água entre os diferentes sistemas e a evacuação de 600 l/s de uma nova captação de água a ser implantada.",
    fullDescription: "Atualmente Itabira possui alguns sistemas de tratamento de água que não possuem comunicação entre si, impossibilitando o intercâmbio de água entre sistema. Essa situação impede que, em eventos de falhas, se transfira água de um sistema saudável para um sistema inoperante. Ainda em busca de novas fontes de água para abastecer a crescente demanda da cidade, foi identificado que a maneira viável de se abastecer a cidades seria por meio da transposição de água do rio tanque numa vazão de 600 l/s a ser entregue numa ETA localizada no bairro campestre, chamada ETA Campestre. O anel hidráulico que hoje abastece a cidade não possui capacidade de transportar essa nova carga d’água para reservatórios utilizados para distribuição, demandando implantação de nova redes para garantir que a nova fonte de água possa, de fato atender a população de Itabira. Assim, a construção dessas novas redes de água permitirá que a água possa transitar entre os sistemas de abastecimento, diminuindo problemas de falta de água e possibilitará que a nova captação de água seja distribuída para toda cidade.",
    impact: "",
    beneficiaries: "Toda a população de Itabira-MG",
    duration: "12 Meses",
    location: "Itabira - MG",
    partners: [],
    goals: [],
    gallery: [
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1301857/pexels-photo-1301857.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1301858/pexels-photo-1301858.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 2,
    title: "Educação Ambiental nas Escolas",
    category: "Educação",
    status: "Concluído",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Programa educativo que leva conhecimento sobre sustentabilidade e preservação ambiental para estudantes de todas as idades. Gincanas de reciclagem de PET, incentivo à coleta seletiva (com prêmios como computadores e celulares)",
    fullDescription: "Nosso programa de Educação Ambiental atende escolas públicas e privadas de Itabira, oferecendo workshops, palestras e atividades práticas sobre sustentabilidade, reciclagem e preservação do meio ambiente.",
    impact: "",
    beneficiaries: "",
    duration: "",
    location: "Itabira e região",
    partners: ["Secretaria de Educação", "UNIFEI", "Colégio Objetivo"],
    goals: [],
    gallery: [
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 3,
    title: "Programa Nacional de Revitalização de Bacias Hidrográficas",
    category: "Revitalização",
    status: "Concluído",
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: `Foi um programa de recuperação de áreas degradadas e de mata ciliar, desenvolvido ao longo de cerca de 2 anos, em parceria com o SAAE de Itabira (Serviço Autônomo de Água e Esgoto) e contando com recursos federais.`,
    fullDescription: `O foco era a bacia do córrego Mãe d'Água, afluente importante do Manancial Pureza, principal fonte de abastecimento de água do município. Conforme relatório do SAAE (2010) e estudos técnicos, o projeto usou técnicas de baixo custo e alto impacto, incluindo recomposição vegetal com plantio de espécies nativas nas margens e áreas degradadas, cercamento de nascentes e matas ciliares, protegendo mananciais próximos às cabeceiras, mini-terraços em curvas de nível, para reduzir erosão, Caixas de captação de água pluvial em pastagens e estradas rurais, paliçadas nas margens das estradas para aumentar infiltração e diminuir processos erosivos, instalação de fossas sépticas domiciliares para saneamento em áreas rurais.`,
    impact: "",
    beneficiaries: "40.000 pessoas",
    duration: "",
    location: "Itabira - MG",
    partners: [],
    goals: [],
    gallery: [
      "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3735220/pexels-photo-3735220.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 4,
    title: "Show Ecológico",
    category: "Meio Ambiente",
    status: "Concluído",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Feito em escolas e eventos, formato lúdico, incluindo quiz interativo",
    fullDescription: "",
    impact: "",
    beneficiaries: "",
    duration: "",
    location: "Itabira - MG",
    partners: [],
    goals: [],
    gallery: [
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1301857/pexels-photo-1301857.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1301858/pexels-photo-1301858.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 5,
    title: "A Praça é Nossa",
    category: "Meio Ambiente",
    status: "Concluído",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "O projeto “A Praça é Nossa” é uma iniciativa anual da SAVI que visa revitalizar praças públicas em Itabira e promover a conexão da comunidade com esses espaços de forma consciente.",
    fullDescription: "Revitalização de praças públicas: limpeza, pequenos reparos, pintura e melhorias no paisagismo. Integração comunitária: envolver moradores de todas as idades para reencontrar e cuidar dos espaços públicos. Consciência ambiental: atitudes cotidianas que promovem respeito e preservação ao meio ambiente Em bairros onde o projeto atuou, como bairro São Pedro, Campestre e Juca Rosa, estima-se que cada ação atingiu diretamente cerca de 500 a 1.500 moradores locais, considerando o raio de uso da praça.",
    impact: "",
    beneficiaries: "1500 pessoas",
    duration: "",
    location: "Itabira - MG",
    partners: [],
    goals: [],
    gallery: [
      "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
];

const categories = [
  { name: "Todos", icon: <Globe className="w-4 h-4" />, count: projects.length },
  { name: "Meio Ambiente", icon: <TreePine className="w-4 h-4" />, count: projects.filter(p => p.category === "Meio Ambiente").length },
  { name: "Educação", icon: <GraduationCap className="w-4 h-4" />, count: projects.filter(p => p.category === "Educação").length },
  { name: "Sustentabilidade", icon: <Recycle className="w-4 h-4" />, count: projects.filter(p => p.category === "Sustentabilidade").length },
  { name: "Recursos Hídricos", icon: <Droplets className="w-4 h-4" />, count: projects.filter(p => p.category === "Recursos Hídricos").length }
];

const stats = [
  { number: "150+", label: "Projetos Realizados", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "35k+", label: "Pessoas Impactadas", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "85%", label: "Taxa de Sucesso", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "12", label: "Parceiros Ativos", icon: <HandHeart className="w-5 h-5 sm:w-6 sm:h-6" /> }
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // --- LÓGICA DE ABERTURA VIA URL ---
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');

    if (idParam) {
      const projectToOpen = projects.find(p => p.id === Number(idParam));
      if (projectToOpen) {
        setSelectedProject(projectToOpen);
      }
    }
  }, []); 
  // ---------------------------------

  // Configuração do WhatsApp
  const whatsappNumber = "553137605177"; 
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os projetos da SAVI.";

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Andamento":
        return "bg-green-100 text-green-800";
      case "Concluído":
        return "bg-blue-100 text-blue-800";
      case "Planejamento":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Meio Ambiente":
        return <TreePine className="w-4 h-4" />;
      case "Educação":
        return <GraduationCap className="w-4 h-4" />;
      case "Sustentabilidade":
        return <Recycle className="w-4 h-4" />;
      case "Recursos Hídricos":
        return <Droplets className="w-4 h-4" />;
      case "Agricultura Urbana":
        return <Leaf className="w-4 h-4" />;
      case "Energia Renovável":
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative"> {/* Adicionado 'relative' */}
      
      {/* --- INÍCIO DO BOTÃO WHATSAPP FLUTUANTE --- */}
      <a
        // Usamos api.whatsapp.com/send para forçar a detecção do app/web mais rápido
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber.replace(/\D/g, '')}&text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-8 h-8"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
      {/* --- FIM DO BOTÃO WHATSAPP --- */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-green-100 rounded-full mb-4 sm:mb-6">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
              <span className="text-green-700 text-xs sm:text-sm font-medium">Transformando Itabira desde 2005</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Nossos <span className="text-green-600">Projetos</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Conheça as iniciativas que estão transformando Itabira em uma cidade mais sustentável, 
              verde e consciente. Cada projeto representa nosso compromisso com o futuro do planeta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                Seja um voluntário
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Apoie nossos projetos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg mb-3 sm:mb-4">
                  <div className="text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Explore por Categoria
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Filtre nossos projetos por área de atuação e descubra como estamos impactando diferentes setores
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  selectedCategory === category.name
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 sm:h-56 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      {getCategoryIcon(project.category)}
                      <span className="ml-1">{project.category}</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4 sm:mb-6">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span>{project.beneficiaries} beneficiados</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    Ver detalhes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-45" />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                {getCategoryIcon(selectedProject.category)}
                <span className="ml-2 text-green-600 font-medium text-sm sm:text-base">{selectedProject.category}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">{selectedProject.fullDescription}</p>
              
              {/* Project Stats */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-green-600 mb-1">{selectedProject.impact}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Impacto Direto</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{selectedProject.beneficiaries}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Beneficiários</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-purple-600 mb-1">{selectedProject.duration}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Duração</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-1">{selectedProject.partners.length}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Parceiros</div>
                </div>
              </div>
              
              {/* Goals */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Objetivos e Metas</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.goals.map((goal, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Partners */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Parceiros</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.partners.map((partner, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Galeria do Projeto</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-20 sm:h-24 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                  <Heart className="w-4 h-4 mr-2" />
                  Apoiar este projeto
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                  <Users className="w-4 h-4 mr-2" />
                  Ser voluntário
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Faça Parte da Mudança
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 leading-relaxed px-2">
            Cada projeto que realizamos é possível graças ao apoio de pessoas como você. 
            Junte-se a nós e ajude a construir um futuro mais sustentável para Itabira.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-green-600 hover:bg-gray-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Heart className="w-4 h-4 mr-2" />
              Faça uma doação
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Users className="w-4 h-4 mr-2" />
              Seja voluntário
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
ProjectsPage.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;