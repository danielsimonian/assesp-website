"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

export default function TorneiosPage() {
  const tournaments = [
    {
      name: "Santos Open ASSESP 2024",
      date: "Novembro 2024",
      location: "Praia do Gonzaga, Santos",
      participants: 500,
      category: "Verba Pública",
      image: "/tournaments/santos-open-2024.jpg",
      highlights: [
        "Maior evento da ASSESP",
        "Emenda impositiva Vereador Fábio Duarte",
        "R$ 30.000 em premiação",
        "3 dias de competição"
      ]
    },
    {
      name: "Open ASSESP #7",
      date: "Setembro 2024",
      location: "Arena Beach Tennis Santos",
      participants: 200,
      category: "Privado",
      image: "/tournaments/open-7.jpg"
    },
    {
      name: "Open ASSESP #6",
      date: "Julho 2024",
      location: "Arena Beach Tennis Santos",
      participants: 180,
      category: "Privado",
      image: "/tournaments/open-6.jpg"
    },
    {
      name: "Open ASSESP #5",
      date: "Maio 2024",
      location: "Arena Beach Tennis Santos",
      participants: 150,
      category: "Privado",
      image: "/tournaments/open-5.jpg"
    }
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
                Nossos Torneios
              </h1>
              <p className="text-xl text-gray-200">
                Mais de 7 Opens de Beach Tennis realizados, movimentando a
                Baixada Santista e promovendo o esporte de alto nível
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">7+</div>
                <div className="text-gray-600">Opens Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-coral mb-2">1000+</div>
                <div className="text-gray-600">Atletas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">50+</div>
                <div className="text-gray-600">Categorias</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-navy mb-2">R$ 100k+</div>
                <div className="text-gray-600">Em Premiação</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tournaments Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {tournaments.map((tournament, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Placeholder */}
                    <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary-blue to-primary-coral">
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                          <Trophy size={64} className="mx-auto mb-4 opacity-50" />
                          <p className="text-sm opacity-75">Foto do Evento</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="inline-block bg-primary-blue/10 text-primary-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                        {tournament.category}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-primary-navy">
                        {tournament.name}
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Calendar size={20} className="text-primary-blue" />
                          <span>{tournament.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <MapPin size={20} className="text-primary-coral" />
                          <span>{tournament.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Users size={20} className="text-primary-orange" />
                          <span>{tournament.participants}+ participantes</span>
                        </div>
                      </div>

                      {tournament.highlights && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-primary-navy mb-3">Destaques:</h4>
                          {tournament.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-coral" />
                              <span className="text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-primary-navy">
                Galeria de Fotos
              </h2>
              <p className="text-gray-600">
                Momentos marcantes dos nossos torneios
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: item * 0.1 }}
                  className="relative aspect-square bg-gradient-to-br from-primary-blue to-primary-coral rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <Trophy size={48} className="mx-auto mb-2" />
                      <p className="text-sm">Foto {item}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
