"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Heart, Users, Target, Download, FileText, Scale, Calendar } from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  const boardMembers = [
    {
      name: "Jadson Maciel Vilela",
      role: "Presidente",
      image: "/team/presidente.jpg"
    },
    {
      name: "Maria de Fátima Almeida Queirós",
      role: "Diretora Secretária",
      image: "/team/secretaria.jpg"
    },
    {
      name: "Diretor Financeiro",
      role: "Diretor Financeiro",
      image: "/team/financeiro.jpg"
    },
    {
      name: "Diretor de Marketing",
      role: "Diretor de Marketing, Comunicação e Eventos",
      image: "/team/marketing.jpg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Elaborar, realizar e participar de projetos e atividades culturais, educativas, esportivas e recreativas, promovendo a interação social e cultural de pessoas, sem discriminação racial, social, política ou religiosa."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência. Não fazemos qualquer manifestação de discriminação de raça, cor, gênero ou religião."
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Admissão de sócios independente de classe social, nacionalidade, sexo, raça, ideologia política, cor ou crença religiosa. Nosso compromisso é com toda a comunidade."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Promovemos eventos de alta qualidade desde a iniciação até o alto rendimento, buscando sempre a excelência em todas as nossas atividades."
    }
  ];

  const objectives = [
    "Eventos esportivos, Shows Musicais, Festivais de Música, Dança e Teatro",
    "Campeonatos esportivos sociais e competitivos",
    "Campanhas de Solidariedade, Saúde e Meio Ambiente",
    "Conscientização de Direitos e Cidadania",
    "Cursos de formação e capacitação",
    "Projetos voltados à Criança e Adolescente",
    "Projetos voltados aos Idosos",
    "Promoção dos direitos LGBTQQICAPF2K+"
  ];

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
                Sobre a ASSESP
              </h1>
<p className="text-2xl text-gray-200 mb-2 font-bold">
  Associação Santista de Esportes de Praia
</p>
<p className="text-xl text-gray-200">
  Transformando vidas através do esporte, cultura e lazer desde 2021
</p>
            </motion.div>
          </div>
        </section>

        {/* História */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-8 text-primary-navy text-center">
                  Nossa História
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A <strong>Associação Santista de Esportes de Praia (ASSESP)</strong> foi fundada
                    em <strong>25 de maio de 2021</strong> como uma entidade civil sem fins lucrativos,
                    com personalidade jurídica e duração por tempo indeterminado. Nossa sede está
                    localizada no coração do Gonzaga, em Santos, estrategicamente posicionada para
                    atender toda a Baixada Santista.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Desde nossa fundação, a ASSESP tem se dedicado a promover eventos esportivos,
                    culturais e recreativos que proporcionam entretenimento e integração social para
                    toda a comunidade. Realizamos mais de 7 Opens de Beach Tennis, tornando-nos
                    referência na modalidade na região.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Em 2024, alcançamos um marco histórico ao receber nossa primeira emenda impositiva
                    para realizar o <strong>Santos Open ASSESP</strong>, através do apoio do vereador
                    Fábio Duarte. Este evento marca uma nova fase de crescimento e reconhecimento do
                    nosso trabalho junto ao poder público.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Hoje, expandimos nossa atuação para projetos culturais, educativos e de lazer,
                    buscando parcerias com empresas privadas e órgãos públicos para ampliar nosso
                    impacto social e promover o desenvolvimento da comunidade através do esporte,
                    cultura e lazer.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
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
                Nossos Pilares
              </h2>
              <p className="text-xl text-gray-600">
                Os valores que guiam todas as nossas ações e decisões
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-primary-coral rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary-navy">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Objetivos e Finalidades */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 text-primary-navy">
                  Nossas Atividades
                </h2>
                <p className="text-xl text-gray-600">
                  Áreas de atuação e objetivos da ASSESP
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-coral mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{objective}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diretoria */}
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
                Diretoria Executiva
              </h2>
              <p className="text-xl text-gray-600">
                Conheça quem lidera a ASSESP
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Photo Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-blue to-primary-coral">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="text-white opacity-30" size={80} />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-coral font-medium">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Informações Legais */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-navy to-primary-blue text-white rounded-3xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                      <Scale className="mr-3" size={32} />
                      Informações Legais
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-gray-200 mb-1">Razão Social</p>
                        <p className="font-semibold text-lg">
                          Associação Santista de Esportes de Praia
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 mb-1">Nome Fantasia</p>
                        <p className="font-semibold text-lg">ASSESP</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 mb-1">CNPJ</p>
                        <p className="font-semibold text-lg">43.696.620/0001-10</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 mb-1">Data de Fundação</p>
                        <p className="font-semibold text-lg flex items-center">
                          <Calendar className="mr-2" size={20} />
                          25 de Maio de 2021
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 mb-1">Natureza Jurídica</p>
                        <p className="font-semibold text-lg">
                          Entidade Civil sem Fins Lucrativos
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Endereço da Sede</h3>
                    <div className="space-y-4 mb-8">
                      <p className="text-lg">
                        Rua Dr. Luiz de Faria, 109 - Ap 91<br />
                        Gonzaga - Santos - SP<br />
                        CEP 11.060-481
                      </p>
                      <p className="text-sm text-gray-200">
                        Foro: Comarca de Santos
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Documentos</h3>
                    <div className="space-y-3">
                      <a
                        href="/docs/estatuto-assesp.pdf"
                        target="_blank"
                        className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4"
                      >
                        <FileText size={24} />
                        <div className="flex-1">
                          <p className="font-semibold">Estatuto Social</p>
                          <p className="text-sm text-gray-200">PDF - 9 páginas</p>
                        </div>
                        <Download size={20} />
                      </a>
                      <Link
                        href="/transparencia"
                        className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4"
                      >
                        <FileText size={24} />
                        <div className="flex-1">
                          <p className="font-semibold">Prestação de Contas</p>
                          <p className="text-sm text-gray-200">Ver transparência</p>
                        </div>
                        <Download size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-navy">
                Quer Fazer Parte?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                A ASSESP está sempre aberta para novos sócios, parceiros e voluntários
                que compartilham dos nossos valores e objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="bg-gradient-to-r from-primary-blue to-primary-coral text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Entre em Contato
                </Link>
                <Link
                  href="/parcerias"
                  className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
                >
                  Seja Parceiro
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}