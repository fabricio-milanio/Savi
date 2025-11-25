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

// Importando Swiper corretamente para React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="w-full max-w-3xl h-56 sm:h-64 lg:h-72 mx-auto rounded-xl shadow-md mb-12"
      >
        <SwiperSlide>
          <img src="https://beduka.com/blog/wp-content/uploads/2020/09/Entenda-o-que-%C3%A9-o-Meio-Ambiente-e-todos-os-seus-conceitos.jpg" alt="Slide 1" className="object-cover w-full h-full rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.familia.com.br/wp-content/uploads/2021/08/cuidar-do-meio-ambiente-600x300.png" alt="Slide 2" className="object-cover w-full h-full rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.educandotudomuda.com.br/wp-content/uploads/2021/06/mexer-na-terra.jpg" alt="Slide 3" className="object-cover w-full h-full rounded-xl" />
        </SwiperSlide>
      </Swiper>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-green-100 rounded-full mb-4 sm:mb-6">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
              <span className="text-green-700 text-xs sm:text-sm font-medium">
                Desde 2005 transformando o meio ambiente
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Sobre a <span className="text-green-600">SAVI</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-green-700 font-semibold mb-3 sm:mb-4 px-2">
              Sociedade Ambiente Vivo Itabira
            </p>

            {/* Vídeo centralizado com bordas arredondadas */}
            <div className="flex justify-center mb-6">
              <iframe
                className="w-full max-w-2xl h-64 sm:h-80 lg:h-96 rounded-xl shadow-md"
                src="https://www.youtube.com/embed/RD3YZPH0vvs"
                title="Se é ambiente, estou no meio!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

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
                  <div className="text-green-600">{stat.icon}</div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
Home.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
