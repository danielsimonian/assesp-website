"use client";

import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Promover o desenvolvimento social através do esporte, cultura e lazer, criando oportunidades para toda a comunidade."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Inclusão, transparência, compromisso social e excelência em tudo que fazemos."
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Atividades abertas a todos, sem discriminação de classe social, raça, gênero, ideologia ou crença."
    },
    {
      icon: Award,
      title: "Transparência",
      description: "Prestação de contas pública dos recursos recebidos e das parcerias firmadas."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-navy">
            Quem Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A ASSESP é uma associação sem fins lucrativos dedicada a transformar
            vidas através do esporte, cultura e lazer na Baixada Santista
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
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
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary-navy">
                Nossa História
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundada em maio de 2021, a ASSESP nasceu com o propósito de
                  democratizar o acesso ao esporte, cultura e lazer na região de Santos.
                </p>
                <p>
                  Em 2026, realizamos o Open Santos ASSESP de Beach Tennis em parceria
                  com a Prefeitura de Santos, por meio da Secretaria Municipal de
                  Esportes (SEMES).
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-blue to-primary-coral rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Informações Legais</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-200 mb-1">Razão Social</p>
                  <p className="font-semibold">
                    Associação de Esportes, Cultura e Lazeres de Praia de Santos e Região
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-200 mb-1">CNPJ</p>
                  <p className="font-semibold">43.696.620/0001-10</p>
                </div>
                <div>
                  <p className="text-sm text-gray-200 mb-1">Fundação</p>
                  <p className="font-semibold">25 de Maio de 2021</p>
                </div>
                <div>
                  <p className="text-sm text-gray-200 mb-1">Endereço</p>
                  <p className="font-semibold">
                    Rua Doutor Luis de Faria, 109<br />
                    Gonzaga, Santos - SP<br />
                    CEP 11.060-481
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
