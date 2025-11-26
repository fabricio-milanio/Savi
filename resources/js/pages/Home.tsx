import React, { ReactNode } from 'react';
import { Link } from '@inertiajs/react'; // Importação necessária para navegação interna
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

// Importando Swiper
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
  const whatsappNumber = "553137605177"; 
  const whatsappMessage = "Olá! Gostaria de saber mais sobre a SAVI.";

  return (
    <div className="min-h-screen bg-white relative">
      
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

      {/* --- SWIPER SECTION (Full Width 16:9) --- */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          className="w-full min-h-[350px] sm:h-[450px] md:h-[56.25vw] max-h-[90vh]"
        >
          {/* Slide 1 - Anel Hidráulico (ID: 6) */}
          <SwiperSlide>
            <Link href="/programas?id=1">
              <div className="relative w-full h-full cursor-pointer">
                <img src="/images/anel-hidraulico-itabira.webp" alt="Anel Hidráulico" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors"></div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 2 - Teatro/Educação (ID: 2 - Educação Ambiental) */}
          <SwiperSlide>
            <Link href="/programas?id=2">
              <div className="relative w-full h-full cursor-pointer">
                <img src="/images/teatro-escola.webp" alt="Educação Ambiental" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors"></div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 3 - Viveiro/Revitalização (ID: 3 - Revitalização de Bacias) */}
          <SwiperSlide>
            <Link href="/programas?id=3">
              <div className="relative w-full h-full cursor-pointer">
                <img src="/images/viveiro-mudas.webp" alt="Revitalização" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors"></div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* --- HERO SECTION (Sobre a SAVI + Vídeo) --- */}
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

            {/* Vídeo centralizado */}
            <div className="flex justify-center mb-6 mt-8">
              <iframe
                className="w-full max-w-2xl h-64 sm:h-80 lg:h-96 rounded-xl shadow-md"
                src="https://www.youtube.com/embed/jSxb0m1AjvU?si=Lpw86YmIT3EfIG-V"
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

      {/* --- STATS SECTION --- */}
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

      {/* --- NOSSA ESSÊNCIA (MISSÃO, VISÃO, VALORES) --- */}
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
                Ser reconhecido como referência em educação ambiental e projetos sustentáveis, trabalhando por um mundo mais verde e consciente.
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

      {/* --- NOSSOS VALORES (Cards) --- */}
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

      {/* --- NOSSA HISTÓRIA --- */}
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

      {/* --- CTA (JUNTE-SE A NÓS) --- */}
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