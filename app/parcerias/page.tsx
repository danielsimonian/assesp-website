"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  TrendingUp, Users, Award, FileText, Handshake, 
  Target, Eye, Heart, DollarSign, Package, Wrench,
  CheckCircle, ArrowRight, Mail, Building2, MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function ParceriasPage() {
  const benefits = [
    {
      icon: Eye,
      title: "Visibilidade de Marca",
      description: "Exposição em eventos com milhares de participantes e ampla cobertura nas redes sociais e mídia local."
    },
    {
      icon: Heart,
      title: "Responsabilidade Social",
      description: "Demonstre o compromisso da sua empresa com o desenvolvimento da comunidade e inclusão social."
    },
    {
      icon: Users,
      title: "Networking Qualificado",
      description: "Conexão com empresas, órgãos públicos e líderes comprometidos com impacto social positivo."
    },
    {
      icon: TrendingUp,
      title: "Retorno de Imagem",
      description: "Associação da sua marca a projetos de sucesso e alto engajamento na Baixada Santista."
    },
    {
      icon: FileText,
      title: "Incentivos Fiscais",
      description: "Possibilidade de dedução fiscal através de leis de incentivo ao esporte e cultura."
    },
    {
      icon: Award,
      title: "Reconhecimento Público",
      description: "Certificados, troféus e menções em eventos e materiais de divulgação."
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Cota Ouro",
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "Logo em destaque em todos os materiais de divulgação",
        "Naming rights do evento (Ex: Santos Open [Sua Marca])",
        "Estande exclusivo no evento",
        "Menção em todas as postagens de redes sociais",
        "Até 10 convites VIP para o evento",
        "Relatório completo de mídia e alcance",
        "Banner exclusivo de 6x3m em local privilegiado",
        "Entrevistas e matérias exclusivas"
      ],
      highlight: true
    },
    {
      name: "Cota Prata",
      color: "from-gray-300 to-gray-500",
      benefits: [
        "Logo em materiais de divulgação",
        "Estande no evento",
        "Menção nas redes sociais",
        "Até 5 convites VIP para o evento",
        "Relatório de mídia resumido",
        "Banner de 3x2m no evento",
        "Certificado de apoio cultural/esportivo"
      ],
      highlight: false
    },
    {
      name: "Cota Bronze",
      color: "from-orange-400 to-orange-600",
      benefits: [
        "Logo em materiais digitais",
        "Menção nas redes sociais",
        "Até 2 convites para o evento",
        "Banner de 2x1m no evento",
        "Certificado de apoio",
        "Menção nos agradecimentos oficiais"
      ],
      highlight: false
    }
  ];

  const supportTypes = [
    {
      icon: DollarSign,
      title: "Apoio Financeiro",
      description: "Patrocínio em dinheiro para realização de eventos e projetos sociais.",
      examples: ["Patrocínio de eventos", "Doações mensais", "Leis de incentivo"]
    },
    {
      icon: Package,
      title: "Apoio em Produtos",
      description: "Doação de produtos para premiação, brindes ou utilização nos eventos.",
      examples: ["Produtos para premiação", "Brindes para participantes", "Kits esportivos"]
    },
    {
      icon: Wrench,
      title: "Apoio em Serviços",
      description: "Prestação de serviços essenciais para realização dos projetos.",
      examples: ["Infraestrutura", "Marketing e comunicação", "Logística e transporte"]
    }
  ];

  const caseStudy = {
    title: "Santos Open ASSESP 2024",
    subtitle: "Nosso maior case de sucesso",
    stats: [
      { value: "500+", label: "Atletas Participantes" },
      { value: "10k+", label: "Público Total" },
      { value: "50k+", label: "Alcance nas Redes" },
      { value: "15+", label: "Veículos de Mídia" }
    ],
    testimonial: {
      text: "O Santos Open ASSESP foi um marco para o Beach Tennis na região. A organização impecável e o engajamento da comunidade demonstraram o potencial da ASSESP em realizar eventos de grande porte.",
      author: "Vereador Fábio Duarte",
      role: "Autor da Emenda Impositiva"
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-blue text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Seja Nosso Parceiro
              </h1>
              <p className="text-2xl text-gray-200 mb-2 font-bold">
                Invista em Impacto Social e Fortaleça sua Marca
              </p>
              <p className="text-xl text-gray-200">
                Apoie projetos que transformam vidas através do esporte, cultura e lazer
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A ASSESP busca <strong>parceiros comprometidos com responsabilidade social</strong> para 
                  expandir nossos projetos de esporte, cultura e lazer. Ao apoiar a ASSESP, sua empresa 
                  não apenas fortalece sua marca, mas contribui ativamente para o <strong>desenvolvimento 
                  da Baixada Santista</strong>.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-primary-blue/10 px-6 py-3 rounded-full">
                    <span className="text-primary-blue font-semibold">✓ Empresa sem fins lucrativos</span>
                  </div>
                  <div className="bg-primary-coral/10 px-6 py-3 rounded-full">
                    <span className="text-primary-coral font-semibold">✓ Transparência total</span>
                  </div>
                  <div className="bg-primary-orange/10 px-6 py-3 rounded-full">
                    <span className="text-primary-orange font-semibold">✓ Impacto mensurável</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-primary-navy">
                Por Que Ser Parceiro?
              </h2>
              <p className="text-xl text-gray-600">
                Benefícios tangíveis para sua empresa e impacto real na comunidade
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-primary-coral rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary-navy">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-primary-navy">
                Cotas de Patrocínio
              </h2>
              <p className="text-xl text-gray-600">
                Escolha a cota que melhor se adapta ao seu investimento
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sponsorshipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300
                    ${tier.highlight ? 'ring-4 ring-yellow-400 scale-105 md:scale-110' : ''}
                  `}
                >
                  <div className={`bg-gradient-to-r ${tier.color} p-6 text-white text-center`}>
                    {tier.highlight && (
                      <div className="bg-white text-yellow-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                        MAIS POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-sm font-semibold text-white/90">Valores sob consulta</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href="/contato"
                      className={`
                        block text-center py-3 rounded-xl font-bold transition-colors
                        ${tier.highlight 
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      `}
                    >
                      Quero Ser Parceiro
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-4">
                Precisa de uma proposta personalizada?
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center space-x-2 text-primary-blue font-bold hover:underline"
              >
                <span>Entre em contato para cotas customizadas</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Support Types */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-primary-navy">
                Formas de Apoio
              </h2>
              <p className="text-xl text-gray-600">
                Diferentes maneiras de contribuir com nossos projetos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary-navy">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      {type.examples.map((example, i) => (
                        <div key={i} className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-coral" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary-navy to-primary-blue text-white rounded-3xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <div className="inline-block bg-yellow-400 text-primary-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
                    CASE DE SUCESSO
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {caseStudy.title}
                  </h2>
                  <p className="text-xl text-gray-200">{caseStudy.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {caseStudy.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                  <p className="text-lg text-gray-100 italic mb-4 leading-relaxed">
                    &ldquo;{caseStudy.testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Users className="text-primary-navy" size={24} />
                    </div>
                    <div>
                      <p className="font-bold">{caseStudy.testimonial.author}</p>
                      <p className="text-sm text-gray-300">{caseStudy.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-navy">
                    Vamos Conversar?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Entre em contato e descubra como sua empresa pode fazer parte dessa transformação
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <a href="mailto:assesp_sp@hotmail.com" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <Mail className="text-primary-blue" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">E-mail</p>
                      <p className="font-semibold text-gray-700 text-sm">assesp_sp@hotmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/5513991760203" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <MessageCircle className="text-primary-coral" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <p className="font-semibold text-gray-700 text-sm">(13) 99176-0203</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <Building2 className="text-primary-orange" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Endereço</p>
                      <p className="font-semibold text-gray-700 text-sm">Gonzaga, Santos - SP</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contato"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-primary-coral text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                  >
                    <span>Solicitar Proposta de Parceria</span>
                    <ArrowRight />
                  </Link>
                  <p className="text-sm text-gray-500 mt-4">
                    Resposta em até 48 horas úteis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}