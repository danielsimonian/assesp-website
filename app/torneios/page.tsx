"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Calendar, FileText, ArrowRight } from "lucide-react";
import VideoGallery from "@/components/VideoGallery";
import { openSantos2026 } from "@/lib/projetos";

export default function TorneiosPage() {
  const tournaments = [openSantos2026];

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
                Beach Tennis na Baixada Santista
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tournaments */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {tournaments.map((tournament) => (
                <motion.div
                  key={tournament.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="inline-block bg-primary-blue/10 text-primary-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                      Verba Pública
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-primary-navy">
                      {tournament.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tournament.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Calendar size={20} className="text-primary-blue" />
                        <span>{tournament.year}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Building2 size={20} className="text-primary-coral" />
                        <span>{tournament.partner}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <FileText size={20} className="text-primary-orange" />
                        <span>{tournament.instrument}</span>
                      </div>
                    </div>
                    <Link
                      href={`/transparencia/parcerias/${tournament.partnershipSlug}`}
                      className="inline-flex items-center space-x-2 text-primary-blue font-bold hover:underline"
                    >
                      <span>Ver dados da parceria</span>
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  <VideoGallery videos={tournament.videos} className="mt-8" />
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
