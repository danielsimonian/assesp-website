"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, Music, Palette, Users, Calendar, MapPin, Target, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProjetosPage() {
  const [selectedArea, setSelectedArea] = useState<string>("Todos");

  const areas = [
    { name: "Todos", icon: Target, color: "from-gray-600 to-gray-800" },
    { name: "Esporte", icon: Trophy, color: "from-blue-500 to-cyan-500" },
    { name: "Cultura", icon: Music, color: "from-purple-500 to-pink-500" },
    { name: "Lazer", icon: Palette, color: "from-orange-500 to-red-500" }
  ];

  const projects = [
    {
      title: "Santos Open ASSESP de Beach Tennis",
      area: "Esporte",
      status: "Ativo",
      description: "Maior torneio de Beach Tennis da ASSESP, realizado com verba pública através de emenda impositiva do vereador Fábio Duarte. Três dias de competição intensa com mais de 500 atletas.",
      participants: "500+",
      location: "Praia do Gonzaga, Santos",
      date: "Novembro 2024",
      budget: "R$ 100.000",
      impact: "Movimentou a economia local e promoveu o esporte de alto nível na Baixada Santista",
      image: "/projects/santos-open.jpg",
      featured: true
    },
    {
      title: "Opens Mensais de Beach Tennis",
      area: "Esporte",
      status: "Ativo",
      description: "Série de 7 torneios privados realizados mensalmente, promovendo a prática do Beach Tennis e descobrindo novos talentos na região.",
      participants: "150-200",
      location: "Arena Beach Tennis Santos",
      date: "Mensal",
      budget: "R$ 5.000/evento",
      impact: "Mais de 1.000 atletas participaram ao longo dos eventos",
      image: "/projects/opens-mensais.jpg",
      featured: false
    },
    {
      title: "Escolinhas de Beach Tennis",
      area: "Esporte",
      status: "Planejamento",
      description: "Aulas gratuitas de Beach Tennis para crianças e adolescentes da comunidade, com foco em inclusão social e desenvolvimento esportivo.",
      participants: "100+",
      location: "Praias de Santos",
      date: "Início: Março 2025",
      budget: "Em captação",
      impact: "Democratização do acesso ao esporte e formação de base",
      image: "/projects/escolinhas.jpg",
      featured: false
    },
    {
      title: "Festival Cultural da Baixada",
      area: "Cultura",
      status: "Planejamento",
      description: "Evento cultural com apresentações de música, dança, teatro e artes visuais, valorizando artistas locais e promovendo a cultura da região.",
      participants: "5.000+",
      location: "Orla de Santos",
      date: "Junho 2025",
      budget: "Em captação",
      impact: "Valorização da cultura local e geração de renda para artistas",
      image: "/projects/festival-cultural.jpg",
      featured: false
    },
    {
      title: "Cinema na Praça",
      area: "Lazer",
      status: "Planejamento",
      description: "Exibições gratuitas de filmes ao ar livre nas praias de Santos, promovendo cultura e lazer para toda a família.",
      participants: "500+",
      location: "Praias de Santos",
      date: "Semanal - Verão 2025",
      budget: "Em captação",
      impact: "Acesso gratuito à cultura e entretenimento familiar",
      image: "/projects/cinema-praca.jpg",
      featured: false
    },
    {
      title: "Gincanas Recreativas",
      area: "Lazer",
      status: "Planejamento",
      description: "Gincanas e atividades recreativas para crianças, adolescentes e famílias, promovendo integração social e diversão.",
      participants: "200+",
      location: "Praias e Parques de Santos",
      date: "Mensal - 2025",
      budget: "Em captação",
      impact: "Integração comunitária e promoção de hábitos saudáveis",
      image: "/projects/gincanas.jpg",
      featured: false
    }
  ];

  const filteredProjects = selectedArea === "Todos" 
    ? projects 
    : projects.filter(p => p.area === selectedArea);

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Ativo": return "bg-green-100 text-green-700";
      case "Planejamento": return "bg-yellow-100 text-yellow-700";
      case "Concluído": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getAreaColor = (area: string) => {
    switch(area) {
      case "Esporte": return "from-blue-500 to-cyan-500";
      case "Cultura": return "from-purple-500 to-pink-500";
      case "Lazer": return "from-orange-500 to-red-500";
      default: return "from-gray-500 to-gray-700";
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
                Nossos Projetos
              </h1>
              <p className="text-2xl text-gray-200 mb-2 font-bold">
                Transformando a Baixada Santista através do Esporte, Cultura e Lazer
              </p>
              <p className="text-xl text-gray-200">
                Conheça as iniciativas que estão fazendo a diferença na nossa comunidade
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">6+</div>
                <div className="text-gray-600">Projetos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-coral mb-2">5000+</div>
                <div className="text-gray-600">Pessoas Impactadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">3</div>
                <div className="text-gray-600">Áreas de Atuação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-navy mb-2">100%</div>
                <div className="text-gray-600">Sem Fins Lucrativos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {areas.map((area, index) => {
                const Icon = area.icon;
                const isSelected = selectedArea === area.name;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setSelectedArea(area.name)}
                    className={`
                      flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                      ${isSelected 
                        ? `bg-gradient-to-r ${area.color} text-white shadow-lg scale-105` 
                        : 'bg-white text-gray-700 hover:shadow-md'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{area.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        {selectedArea === "Todos" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-primary-navy via-primary-blue to-primary-coral rounded-3xl overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image Placeholder */}
                    <div className="relative h-96 md:h-auto bg-gradient-to-br from-primary-blue to-primary-coral">
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                          <Trophy size={80} className="mx-auto mb-4 opacity-50" />
                          <p className="text-sm opacity-75">Foto do Evento</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 text-white">
                      <div className="inline-block bg-yellow-400 text-primary-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
                        PROJETO DESTAQUE
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Santos Open ASSESP de Beach Tennis
                      </h2>
                      <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                        Nosso maior evento do ano, realizado com verba pública através de
                        emenda impositiva do vereador Fábio Duarte. Um torneio que movimenta
                        a Baixada Santista e promove o esporte de alto nível.
                      </p>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center space-x-3">
                          <Users size={20} className="text-yellow-300" />
                          <span>500+ atletas participantes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin size={20} className="text-yellow-300" />
                          <span>Praia do Gonzaga, Santos</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar size={20} className="text-yellow-300" />
                          <span>Novembro 2024</span>
                        </div>
                      </div>
                      <Link
                        href="/torneios"
                        className="inline-flex items-center space-x-2 bg-white text-primary-navy px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
                      >
                        <span>Ver Galeria Completa</span>
                        <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Projects Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Placeholder */}
                  <div className={`relative h-48 bg-gradient-to-br ${getAreaColor(project.area)}`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        {project.area === "Esporte" && <Trophy size={60} className="mx-auto mb-2 opacity-50" />}
                        {project.area === "Cultura" && <Music size={60} className="mx-auto mb-2 opacity-50" />}
                        {project.area === "Lazer" && <Palette size={60} className="mx-auto mb-2 opacity-50" />}
                        <p className="text-sm opacity-75">Imagem do Projeto</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm font-semibold text-primary-blue">
                        {project.area}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary-navy group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Participantes:</span>
                        <span className="font-semibold text-gray-700">{project.participants}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Local:</span>
                        <span className="font-semibold text-gray-700 text-right">{project.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Data:</span>
                        <span className="font-semibold text-gray-700">{project.date}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Impacto:</p>
                      <p className="text-sm text-gray-700">{project.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Nenhum projeto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-navy">
                Apoie Nossos Projetos
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Sua empresa pode fazer parte dessas transformações. Seja um parceiro
                da ASSESP e ajude a promover esporte, cultura e lazer na Baixada Santista.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/parcerias"
                  className="bg-gradient-to-r from-primary-blue to-primary-coral text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Seja Parceiro
                </Link>
                <Link
                  href="/contato"
                  className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
                >
                  Entre em Contato
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