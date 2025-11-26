// resources/js/Pages/Contato.tsx
import { useForm } from '@inertiajs/react';
import { ReactNode, useState } from 'react';
import MainLayout from '@/layouts/Main/main-layout';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Heart,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe
} from 'lucide-react';

// Fix for default markers in react-leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactPage = () => {
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Coordenadas de Itabira - MG
  const position: [number, number] = [-19.622834689788483, -43.22178076125677];

  // Configuração do WhatsApp
  const whatsappNumber = "553137605177"; // Atualizei para o número fixo que você tem no site (se for esse o Whats também)
  const whatsappMessage = "Olá! Gostaria de falar com a equipe da SAVI.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    post('/contato', {
      onSuccess: () => {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      },
      onError: () => {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      },
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Telefone | WhatsApp",
      info: "(31) 3760-5177",
      description: "Segunda a sexta, 8h às 17h"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "E-mail",
      info: "contato@savi.org.br",
      description: "Respondemos em até 24h"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Endereço",
      info: "Avenida das Rosas, 127, Sala 01 - São Pedro",
      description: "Itabira - MG, CEP: 35900-117"
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 17h",
      description: "Sábados: 8h às 12h"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-600"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative"> {/* Adicionado 'relative' para contexto */}
      
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
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
              <span className="text-green-700 text-xs sm:text-sm font-medium">Estamos aqui para ajudar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Entre em <span className="text-green-600">Contato</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Tem alguma dúvida, sugestão ou quer fazer parte da nossa missão?
              Estamos sempre prontos para conversar e construir juntos um futuro mais sustentável para Itabira.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-green-600 mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-900 font-medium mb-1 text-sm sm:text-base">{item.info}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Envie sua Mensagem</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>

              {submitStatus === 'success' && (
                <div className="relative rounded-xl border border-green-300 bg-green-50 p-4 mb-6 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-green-800 font-semibold text-sm sm:text-base">Mensagem enviada com sucesso</h3>
                      <p className="text-green-700 text-sm">Obrigado pelo contato! Responderemos o mais breve possível.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="absolute top-2 right-2 text-green-600 hover:text-green-800 text-sm"
                  >
                    ×
                  </button>
                </div>
              )}


              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-red-800 text-sm sm:text-base">Erro ao enviar mensagem. Tente novamente.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm sm:text-base text-gray-900"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm sm:text-base text-gray-900"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={data.phone}
                      onChange={(e) => setData('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm sm:text-base text-gray-900"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={data.interest}
                      onChange={(e) => setData('interest', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-basew-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm sm:text-base "
                    >
                      <option value="" disabled selected>Selecione o Interesse</option>

                      <option value="geral">Informações Gerais</option>
                      <option value="voluntario">Ser Voluntário</option>
                      <option value="doacao">Fazer Doação</option>
                      <option value="parceria">Parceria</option>
                      <option value="educacao">Educação Ambiental</option>
                      <option value="projetos">Nossos Projetos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm sm:text-base text-gray-900"
                    placeholder="Qual o assunto da sua mensagem?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base text-gray-900"
                    placeholder="Conte-nos mais sobre sua mensagem, dúvida ou como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base "
                >
                  {processing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6 sm:space-y-8">
              {/* Visit Us */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Visite-nos</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Avenida das Rosas, 127, Sala 01 - São Pedro</p>
                      <p className="text-gray-600 text-sm">Itabira - MG, CEP: 35900-117</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Horário de Funcionamento</p>
                      <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 17h</p>
                      <p className="text-gray-600 text-sm">Sábados: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Nossa Localização</h3>
                <div className="relative z-0 h-64 sm:h-80 rounded-lg overflow-hidden">

                  <MapContainer
                    center={position}
                    zoom={15}
                    style={{ height: '100%', width: '100%' }}
                    className="rounded-lg"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>
                        <div className="text-center">
                          <strong>SAVI - Sociedade Ambiente Vivo Itabira</strong><br />
                          Avenida das Rosas, 127, Sala 01 - São Pedro<br />
                          Itabira - MG
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600 text-sm">
                    📍 Centro de Itabira - MG | Fácil acesso por transporte público
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Siga-nos</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Acompanhe nossos projetos e novidades nas redes sociais
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Respostas para as dúvidas mais comuns sobre a SAVI
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Como posso me tornar voluntário?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Entre em contato conosco através do formulário acima ou pelos nossos canais de comunicação.
                Temos diversas oportunidades de voluntariado adequadas a diferentes perfis e disponibilidades.
              </p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Vocês oferecem cursos de educação ambiental?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Sim! Oferecemos cursos, workshops e palestras sobre educação ambiental para escolas,
                empresas e comunidades. Entre em contato para conhecer nossa programação.
              </p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Como posso fazer uma doação?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Aceitamos doações financeiras, materiais e equipamentos. Entre em contato conosco
                para conhecer as formas de contribuição e como sua doação será utilizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Vamos Construir Juntos
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 leading-relaxed px-2">
            Cada conversa é o início de uma nova possibilidade.
            Estamos ansiosos para conhecer suas ideias e como podemos colaborar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-green-600 hover:bg-gray-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Heart className="w-4 h-4 mr-2" />
              Agende uma visita
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Users className="w-4 h-4 mr-2" />
              Conheça nossos projetos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

ContactPage.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;