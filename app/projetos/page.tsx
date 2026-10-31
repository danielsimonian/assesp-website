"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, Building2, Calendar, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getPartnershipBySlug } from "@/lib/transparencia";

export default function ProjetosPage() {
  const partnership = getPartnershipBySlug("termo-de-fomento-442772-2026");

  const projects = [
    {
      title: "Open Santos ASSESP de Beach Tennis 2026",
      area: "Esporte",
      year: "2026",
      description: "Torneio de Beach Tennis realizado pela ASSESP em parceria com a Prefeitura Municipal de Santos, por meio da Secretaria Municipal de Esportes (SEMES).",
      details: [
        { icon: Building2, text: "Parceria com a Prefeitura de Santos – SEMES" },
        { icon: FileText, text: "Termo de Fomento nº 442772/2026" },
        { icon: Calendar, text: "2026" }
      ],
      partnershipSlug: partnership?.slug
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

        {/* Projects */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-primary-navy via-primary-blue to-primary-coral rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image Placeholder */}
                      <div className="relative h-72 md:h-auto bg-gradient-to-br from-primary-blue to-primary-coral">
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          <Trophy size={80} className="opacity-50" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-12 text-white">
                        <div className="inline-block bg-yellow-400 text-primary-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
                          {project.area.toUpperCase()} · {project.year}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          {project.title}
                        </h2>
                        <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {project.details.map((detail, detailIndex) => {
                            const Icon = detail.icon;
                            return (
                              <div key={detailIndex} className="flex items-center space-x-3">
                                <Icon size={20} className="text-yellow-300" />
                                <span>{detail.text}</span>
                              </div>
                            );
                          })}
                        </div>
                        {project.partnershipSlug && (
                          <Link
                            href={`/transparencia/parcerias/${project.partnershipSlug}`}
                            className="inline-flex items-center space-x-2 bg-white text-primary-navy px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
                          >
                            <span>Ver Dados da Parceria</span>
                            <ArrowRight />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
