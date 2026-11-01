"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import { openSantos2026 } from "@/lib/projetos";

export default function ProjetosPage() {
  const projects = [openSantos2026];

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
                    <div className="grid grid-cols-1">
                      {/* Content */}
                      <div className="p-8 md:p-12 text-white">
                        <div className="inline-block bg-yellow-400 text-primary-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
                          {project.area.toUpperCase()} · {project.year}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          {project.title}
                        </h2>
                        <p className="text-lg text-gray-100 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <VideoGallery videos={project.videos} className="mt-8" />
                  <PhotoGallery photos={project.photos} albumUrl={project.albumUrl} className="mt-8" />
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
