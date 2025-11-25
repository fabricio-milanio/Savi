import React, { ReactNode } from 'react';
import {
  Heart,
  Leaf,
  Users,
  Target,
  Eye,
  Compass,
  Award,
  Globe,
  BookOpen,
  TreePine,
  Lightbulb,
  HandHeart,
  Star,
  ArrowRight
} from 'lucide-react';
import MainLayout from '@/layouts/Main/main-layout';


const values = [
  {
    icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Compromisso Social",
    description: "Dedicação integral ao bem-estar das comunidades e preservação ambiental para as futuras gerações."
  },
  {
    icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Sustentabilidade",
    description: "Promovemos práticas que equilibram desenvolvimento social, econômico e preservação ambiental."
  },
  {
    icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Inovação",
    description: "Buscamos soluções criativas e tecnológicas para os desafios ambientais contemporâneos."
  },
  {
    icon: <HandHeart className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Transparência",
    description: "Mantemos total clareza em nossas ações, prestação de contas e uso dos recursos recebidos."
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Colaboração",
    description: "Acreditamos no poder da união entre comunidades, empresas e governo para mudanças reais."
  },
  {
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Impacto Global",
    description: "Pensamos localmente e agimos globalmente, conectando nossa missão aos Objetivos de Desenvolvimento Sustentável."
  }
];

const stats = [
  { number: "19+", label: "Anos de Atuação", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "60k+", label: "Pessoas Impactadas", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "150+", label: "Intervenções", icon: <TreePine className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "100%", label: "Recursos para Projetos", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> }
];

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-green-100 rounded-full mb-4 sm:mb-6">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
              <span className="text-green-700 text-xs sm:text-sm font-small">Desde 2005 transformando o meio ambiente</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Sobre a <span className="text-green-600">SAVI</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-green-700 font-semibold mb-3 sm:mb-4 px-2">
              Sociedade Ambiente Vivo Itabira
            </p>
            <video src="resources\js\pages\video savi.mp4">Se é ambiente, estou no meio!</video>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Somos uma organização não governamental dedicada à promoção da sustentabilidade ambiental
              e educação ecológica em Itabira e região, trabalhando incansavelmente para construir um futuro mais verde e justo para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                Conheça nossos projetos
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Seja um voluntário
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

      {/* Mission, Vision, Purpose Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Nossa Essência
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Conheça os pilares que guiam nossa organização e definem nosso compromisso com o planeta
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Educar, conscientizar e mobilizar o cidadão para a preservação ambiental, promovendo práticas sustentáveis que garantam o um meio ambiente saudável para as futuras gerações.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                ser reconhecido como referência em educação ambiental e projetos sustentáveis, trabalhando por um mundo mais verde e consciente.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nosso Propósito</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Conectar pessoas, comunidades e organizações, em uma rede colaborativa de mudanças, onde cada ação individual contribui positivamente para um impacto significativo no meio ambiente.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nossos Princípios</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Pautamos nossas ações na ética, transparência, inclusão e respeito à diversidade, sempre priorizando
                o diálogo e a construção coletiva de soluções ambientais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Nossos Valores
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Os valores que permeiam cada decisão e ação da nossa organização
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group hover:bg-green-50 p-4 sm:p-6 rounded-xl transition-colors">
                <div className="text-green-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Nossa História</h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                A SAVI nasceu em 2005 do sonho de um um grupo de alunos da primeira turma de meio ambiente de Itabira que acreditavam
                no poder da educação ambiental para transformar nossa cidade. O que começou como um pequeno
                projeto de conscientização nas escolas locais, hoje se tornou uma referência regional em sustentabilidade.
              </p>
              <p className="text-green-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Ao longo dos anos, expandimos nossos horizontes, desenvolvemos metodologias inovadoras
                e construímos parcerias estratégicas que nos permitiram alcançar mais de 35 mil pessoas
                em Itabira e municípios vizinhos.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-green-800 p-3 sm:p-4 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold">2005</div>
                  <div className="text-green-200 text-xs sm:text-sm">Fundação</div>
                </div>
                <div className="bg-green-800 p-3 sm:p-4 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold">2012</div>
                  <div className="text-green-200 text-xs sm:text-sm">Expansão Regional</div>
                </div>
                <div className="bg-green-800 p-3 sm:p-4 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold">2025</div>
                  <div className="text-green-200 text-xs sm:text-sm">60k Vidas Impactadas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-700 rounded-2xl p-6 sm:p-8">
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-green-300 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Marcos Importantes</h3>
                <ul className="space-y-2 sm:space-y-3 text-green-100">
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    Título de utilidade pública (2006)
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    Parceria com Prefeitura de Itabira (2008)
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    Prêmio ouro azul de recuperação de nascentes e reconhecimento federal (2018)
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    Certificação de Utilidade Pública (2021)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Junte-se à Nossa Missão
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
            Seja parte da mudança que Itabira precisa. Existem várias formas de contribuir
            com nosso trabalho e fazer a diferença no meio ambiente da nossa cidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-green-600 text-white hover:bg-green-700 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Heart className="w-4 h-4 mr-2" />
              Faça uma doação
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Users className="w-4 h-4 mr-2" />
              Seja voluntário
            </button>
          </div>
        </div>
      </section>
    </div>
  );

}


export default Home;
Home.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
