"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import { openSantos2026 } from "@/lib/projetos";

export default function Projects() {
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
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esporte, cultura e lazer para a Baixada Santista
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-navy via-primary-blue to-primary-coral rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-400 text-primary-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
              DESTAQUE {openSantos2026.year}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {openSantos2026.title}
            </h3>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              {openSantos2026.description}
            </p>
            <Link
              href="/projetos"
              className="inline-flex items-center space-x-2 bg-white text-primary-navy px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              <span>Conheça o Projeto</span>
              <ArrowRight />
            </Link>
          </div>
        </motion.div>

        <VideoGallery videos={openSantos2026.videos} className="mt-12" />
        <PhotoGallery photos={openSantos2026.photos.slice(0, 6)} albumUrl={openSantos2026.albumUrl} className="mt-12 max-w-5xl mx-auto" />
      </div>
    </section>
  );
}
