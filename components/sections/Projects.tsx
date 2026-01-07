"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Music, Palette, ArrowRight } from "lucide-react";

export default function Projects() {
  const areas = [
    {
      icon: Trophy,
      title: "Esporte",
      description: "Opens de Beach Tennis, escolinhas esportivas e eventos competitivos que promovem saúde e integração social.",
      color: "from-blue-500 to-cyan-500",
      projects: ["Santos Open ASSESP", "Opens Mensais", "Escolinhas"]
    },
    {
      icon: Music,
      title: "Cultura",
      description: "Projetos culturais, festivais e apresentações que valorizam a cultura local e promovem a arte na comunidade.",
      color: "from-purple-500 to-pink-500",
      projects: ["Festivais Culturais", "Apresentações", "Workshops"]
    },
    {
      icon: Palette,
      title: "Lazer",
      description: "Atividades recreativas, eventos comunitários e iniciativas que promovem bem-estar e qualidade de vida.",
      color: "from-orange-500 to-red-500",
      projects: ["Eventos Comunitários", "Atividades Recreativas", "Lazer na Praia"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-navy">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos projetos nas três áreas fundamentais para o
            desenvolvimento social e qualidade de vida
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.color} opacity-10 rounded-bl-full`} />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-primary-navy">
                  {area.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="space-y-2 mb-6">
                  {area.projects.map((project, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color}`} />
                      <span>{project}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projetos"
                  className="inline-flex items-center space-x-2 text-primary-blue font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>Saiba mais</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-navy via-primary-blue to-primary-coral rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-primary-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
                DESTAQUE 2024
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Santos Open ASSESP de Beach Tennis
              </h3>
              <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                Nosso maior evento do ano, realizado com verba pública através de
                emenda impositiva do vereador Fábio Duarte. Um torneio que movimenta
                a Baixada Santista e promove o esporte de alto nível.
              </p>
              <Link
                href="/torneios"
                className="inline-flex items-center space-x-2 bg-white text-primary-navy px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                <span>Ver Galeria do Torneio</span>
                <ArrowRight />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                  <div className="text-gray-200">Atletas Participantes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-300 mb-2">3</div>
                  <div className="text-gray-200">Dias de Evento</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-300 mb-2">R$ 30k</div>
                  <div className="text-gray-200">Em Premiação</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
