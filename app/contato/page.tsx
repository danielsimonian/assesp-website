"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const whatsappUrl = `https://wa.me/5513991760203?text=${encodeURIComponent("Olá! Vim pelo site da ASSESP e gostaria de mais informações.")}`;

export default function ContatoPage() {

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
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-200">
                Quer ser nosso parceiro ou saber mais sobre nossos projetos?
                Estamos aqui para conversar!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Channels */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-coral rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-navy mb-2">Endereço</h3>
                      <p className="text-gray-600 text-sm">
                        Rua Doutor Luis de Faria, 109<br />
                        Gonzaga, Santos - SP<br />
                        CEP 11.060-481
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-coral to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-navy mb-2">E-mail</h3>
                      <a href="mailto:contato@assesp.org.br" className="text-primary-blue hover:underline text-sm">
                        contato@assesp.org.br
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-coral rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-navy mb-2">WhatsApp</h3>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline text-sm">
                        (13) 99176-0203
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-primary-navy to-primary-blue text-white rounded-2xl p-6"
                >
                  <h3 className="font-bold mb-2">Horário de Atendimento</h3>
                  <p className="text-sm text-gray-200">
                    Segunda a Sexta<br />
                    9h às 18h
                  </p>
                </motion.div>
              </div>

              {/* Contact Channels */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <h2 className="text-3xl font-bold mb-2 text-primary-navy">
                    Fale com a Gente
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Escolha o canal de sua preferência. Respondemos em horário comercial.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col p-6 border border-gray-200 rounded-2xl hover:border-green-500 hover:shadow-lg transition-all"
                    >
                      <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                        <MessageCircle className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-primary-navy mb-1">WhatsApp</h3>
                      <p className="text-gray-600 text-sm mb-6">(13) 99176-0203</p>
                      <span className="mt-auto inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold group-hover:bg-green-600 transition-colors">
                        <span>Chamar no WhatsApp</span>
                        <ArrowRight size={18} />
                      </span>
                    </a>

                    <a
                      href="mailto:contato@assesp.org.br"
                      className="group flex flex-col p-6 border border-gray-200 rounded-2xl hover:border-primary-blue hover:shadow-lg transition-all"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-coral to-primary-orange rounded-xl flex items-center justify-center mb-4">
                        <Mail className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-primary-navy mb-1">E-mail</h3>
                      <p className="text-gray-600 text-sm mb-6">contato@assesp.org.br</p>
                      <span className="mt-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-blue to-primary-coral text-white px-6 py-3 rounded-xl font-bold group-hover:shadow-lg transition-all">
                        <span>Enviar E-mail</span>
                        <ArrowRight size={18} />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
