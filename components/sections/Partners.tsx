"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, FileText, TrendingUp, Users } from "lucide-react";

export default function Partners() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Visibilidade",
      description: "Destaque da sua marca nos eventos e na divulgação da ASSESP"
    },
    {
      icon: Users,
      title: "Impacto Social",
      description: "Contribua para o desenvolvimento da comunidade local"
    },
    {
      icon: FileText,
      title: "Incentivo Fiscal",
      description: "Possibilidade de uso de leis de incentivo à cultura e esporte"
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Conexão com empresas e órgãos públicos comprometidos com o social"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-navy">
            Seja Nosso Parceiro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apoie projetos de esporte, cultura e lazer na Baixada Santista.
            Junte-se a nós nessa transformação!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-coral rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary-navy">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary-navy">
              Formas de Parceria
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <h4 className="font-bold text-primary-blue mb-2">Patrocínio</h4>
                <p className="text-sm text-gray-600">
                  Apoio direto aos nossos eventos e projetos
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h4 className="font-bold text-purple-600 mb-2">Leis de Incentivo</h4>
                <p className="text-sm text-gray-600">
                  Apoio a projetos por meio de editais e leis de incentivo
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                <h4 className="font-bold text-orange-600 mb-2">Parceria Estratégica</h4>
                <p className="text-sm text-gray-600">
                  Colaboração contínua em múltiplas iniciativas
                </p>
              </div>
            </div>
            <Link
              href="/contato"
              className="inline-block bg-gradient-to-r from-primary-blue to-primary-coral text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
