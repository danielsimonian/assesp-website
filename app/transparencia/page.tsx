"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { publicPartnerships } from "@/lib/transparencia";
import { 
  FileText, Download, Scale, 
  Building2, Calendar, DollarSign, Users,
  ExternalLink, Shield, TrendingUp, ChevronDown
} from "lucide-react";

export default function TransparenciaPage() {
  const legalInfo = [
    { label: "Razão Social", value: "Associação de Esportes, Cultura e Lazeres de Praia de Santos e Região – ASSESP/SP" },
    { label: "Nome Fantasia", value: "ASSESP" },
    { label: "CNPJ", value: "43.696.620/0001-10" },
    { label: "Data de Fundação", value: "25 de Maio de 2021" },
    { label: "Início das Atividades (CNPJ)", value: "17 de Agosto de 2021" },
    { label: "Natureza Jurídica", value: "Associação Privada" },
    { label: "Atividade Principal", value: "Atividades associativas não especificadas anteriormente" },
    { label: "CNAE", value: "S-9499-5/00" },
    { label: "Endereço", value: "Rua Dr. Luiz de Faria, 109, ap 91 - Gonzaga, Santos - SP" },
    { label: "CEP", value: "11.060-481" },
    { label: "Foro", value: "Comarca de Santos" }
  ];

  const statutoryDocuments = [
    {
      title: "Estatuto Social da ASSESP",
      description: "Estatuto completo com 9 páginas contendo todas as regras de funcionamento da associação",
      date: "25/05/2021",
      size: "180 KB",
      file: "/docs/estatuto-assesp.pdf"
    }
  ];

  // Arquivos publicados por exercício (salvos em /public/docs). Anos sem arquivo aparecem como "Em elaboração".
  const publishedFinancialDocuments: Record<number, Record<string, string>> = {};

  const foundingYear = 2021;
  const currentYear = new Date().getFullYear();
  const financialReports = Array.from(
    { length: currentYear - foundingYear + 1 },
    (_, i) => currentYear - i
  ).map((year) => {
    const published = publishedFinancialDocuments[year] ?? {};
    const documents = [
      { key: "balanco", name: "Balanço Patrimonial" },
      { key: "dre", name: "DRE - Demonstração do Resultado" },
      { key: "relatorio", name: "Relatório de Atividades" }
    ].map((doc) => ({ name: doc.name, file: published[doc.key] }));
    return {
      year,
      documents,
      partnerships: publicPartnerships.filter((p) => p.year === year),
      complete: documents.every((doc) => doc.file)
    };
  });

  const principles = [
    {
      icon: Shield,
      title: "Legalidade",
      description: "Todos os atos respeitam a legislação brasileira e nosso estatuto social"
    },
    {
      icon: Users,
      title: "Transparência",
      description: "Divulgação pública de todas as atividades, receitas e despesas"
    },
    {
      icon: Scale,
      title: "Impessoalidade",
      description: "Decisões baseadas em critérios objetivos, sem favorecimentos pessoais"
    },
    {
      icon: TrendingUp,
      title: "Eficiência",
      description: "Uso responsável dos recursos para maximizar o impacto social"
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Transparência
              </h1>
              <p className="text-2xl text-gray-200 mb-2 font-bold">
                Prestação de Contas e Documentos Oficiais
              </p>
              <p className="text-xl text-gray-200">
                Compromisso com a transparência e responsabilidade no uso dos recursos
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-primary-navy">
                  Nossos Princípios de Governança
                </h2>
                <p className="text-gray-600">
                  Seguimos rigorosamente os princípios da administração pública
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-primary-navy">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {principle.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-primary-navy flex items-center">
                  <Building2 className="mr-3" size={32} />
                  Informações Legais
                </h2>
                <p className="text-gray-600">
                  Dados oficiais registrados em cartório e na Receita Federal
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {legalInfo.map((info, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="font-semibold text-gray-800">{info.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statutory Documents */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-primary-navy flex items-center">
                  <FileText className="mr-3" size={32} />
                  Documentos Estatutários
                </h2>
                <p className="text-gray-600">
                  Estatuto social e documentos de constituição da ASSESP
                </p>
              </motion.div>

              <div className="space-y-4">
                {statutoryDocuments.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-primary-blue hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-coral rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary-blue transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {doc.date}
                            </span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <Download className="text-gray-400 group-hover:text-primary-blue transition-colors" size={24} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-2 text-primary-navy flex items-center">
                  <DollarSign className="mr-3" size={28} />
                  Demonstrativos Financeiros
                </h2>
                <p className="text-gray-600">
                  Balanços patrimoniais, demonstrações de resultado e relatórios de atividades por exercício
                </p>
              </motion.div>

              <div className="bg-white rounded-2xl shadow-lg divide-y divide-gray-100">
                {financialReports.map((report) => (
                  <details key={report.year} className="group">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-gray-50 transition-colors">
                      <span className="font-bold text-primary-navy">
                        Exercício {report.year}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${report.complete
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                          }
                        `}>
                          {report.complete ? 'Disponível' : 'Em elaboração'}
                        </span>
                        <ChevronDown size={18} className="text-gray-400 transition-transform group-open:rotate-180" />
                      </span>
                    </summary>

                    <div className="px-6 pb-6 space-y-2">
                      {report.documents.map((doc, docIndex) => (
                        doc.file ? (
                          <a
                            key={docIndex}
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group/doc"
                          >
                            <span className="flex items-center space-x-3">
                              <FileText className="text-primary-blue" size={18} />
                              <span className="text-sm font-medium text-gray-700 group-hover/doc:text-primary-blue transition-colors">
                                {doc.name} {report.year}
                              </span>
                            </span>
                            <Download size={16} className="text-gray-400 group-hover/doc:text-primary-blue transition-colors" />
                          </a>
                        ) : (
                          <div
                            key={docIndex}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="flex items-center space-x-3">
                              <FileText className="text-gray-400" size={18} />
                              <span className="text-sm font-medium text-gray-500">
                                {doc.name} {report.year}
                              </span>
                            </span>
                            <span className="text-xs text-gray-400">Em elaboração</span>
                          </div>
                        )
                      ))}

                      {report.partnerships.map((partnership) => (
                        <Link
                          key={partnership.slug}
                          href={`/transparencia/parcerias/${partnership.slug}`}
                          className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <span className="flex items-center space-x-3">
                            <Building2 className="text-primary-blue" size={18} />
                            <span className="text-sm font-medium text-gray-700">
                              {partnership.instrument}
                            </span>
                          </span>
                          <span className="text-xs font-semibold text-primary-blue">Ver parceria →</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary-navy">
                Dúvidas sobre nossa Prestação de Contas?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Entre em contato conosco para solicitar documentos adicionais ou esclarecer dúvidas
              </p>
              <a
                href="mailto:assesp_sp@hotmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-primary-coral text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                <span>Entrar em Contato</span>
                <ExternalLink />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}