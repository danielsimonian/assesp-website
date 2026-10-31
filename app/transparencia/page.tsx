"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  FileText, Download, Scale, 
  Building2, Calendar, DollarSign, Users,
  Award, ExternalLink, Shield, TrendingUp
} from "lucide-react";

export default function TransparenciaPage() {
  const legalInfo = [
    { label: "Razão Social", value: "Associação Santista de Esportes de Praia" },
    { label: "Nome Fantasia", value: "ASSESP" },
    { label: "CNPJ", value: "43.696.620/0001-10" },
    { label: "Data de Fundação", value: "25 de Maio de 2021" },
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
      size: "245 KB",
      file: "/docs/estatuto-assesp.pdf"
    },
    {
      title: "Ata de Fundação",
      description: "Documento de constituição da ASSESP e eleição da primeira diretoria",
      date: "25/05/2021",
      size: "180 KB",
      file: "/docs/ata-fundacao.pdf"
    },
    {
      title: "Comprovante de Inscrição CNPJ",
      description: "Cartão CNPJ emitido pela Receita Federal",
      date: "Atualizado",
      size: "95 KB",
      file: "/docs/cnpj.pdf"
    }
  ];

  const financialReports = [
    {
      year: "2024",
      status: "Em andamento",
      documents: [
        { name: "Balanço Patrimonial 2024", file: "/docs/balanco-2024.pdf", available: false },
        { name: "DRE - Demonstração do Resultado", file: "/docs/dre-2024.pdf", available: false },
        { name: "Relatório de Atividades 2024", file: "/docs/relatorio-atividades-2024.pdf", available: false }
      ]
    },
    {
      year: "2023",
      status: "Concluído",
      documents: [
        { name: "Balanço Patrimonial 2023", file: "/docs/balanco-2023.pdf", available: true },
        { name: "DRE - Demonstração do Resultado", file: "/docs/dre-2023.pdf", available: true },
        { name: "Relatório de Atividades 2023", file: "/docs/relatorio-atividades-2023.pdf", available: true }
      ]
    },
    {
      year: "2022",
      status: "Concluído",
      documents: [
        { name: "Balanço Patrimonial 2022", file: "/docs/balanco-2022.pdf", available: true },
        { name: "DRE - Demonstração do Resultado", file: "/docs/dre-2022.pdf", available: true },
        { name: "Relatório de Atividades 2022", file: "/docs/relatorio-atividades-2022.pdf", available: true }
      ]
    },
    {
      year: "2021",
      status: "Concluído",
      documents: [
        { name: "Balanço Patrimonial 2021", file: "/docs/balanco-2021.pdf", available: true },
        { name: "DRE - Demonstração do Resultado", file: "/docs/dre-2021.pdf", available: true },
        { name: "Relatório de Atividades 2021", file: "/docs/relatorio-atividades-2021.pdf", available: true }
      ]
    }
  ];

  const eventReports = [
    {
      event: "Santos Open ASSESP 2024",
      date: "Novembro 2024",
      type: "Verba Pública",
      documents: [
        { name: "Prestação de Contas - Emenda Impositiva", file: "/docs/prestacao-santos-open-2024.pdf" },
        { name: "Relatório Final do Evento", file: "/docs/relatorio-santos-open-2024.pdf" },
        { name: "Comprovantes de Despesas", file: "/docs/comprovantes-santos-open-2024.pdf" },
        { name: "Relatório Fotográfico", file: "/docs/fotos-santos-open-2024.pdf" }
      ]
    },
    {
      event: "Open ASSESP #7",
      date: "Setembro 2024",
      type: "Privado",
      documents: [
        { name: "Relatório Financeiro", file: "/docs/relatorio-open-7.pdf" },
        { name: "Lista de Participantes", file: "/docs/participantes-open-7.pdf" }
      ]
    }
  ];

  const publicPartnerships = [
    {
      title: "Open Santos ASSESP de Beach Tennis 2026",
      instrument: "Termo de Fomento nº 442772/2026 – SEMES",
      totalAmount: "R$ 58.800,00",
      fields: [
        { label: "Organização da Sociedade Civil", value: "Associação de Esportes, Cultura e Lazeres de Praia de Santos e Região – ASSESP" },
        { label: "CNPJ", value: "43.696.620/0001-10" },
        { label: "Órgão Concedente", value: "Prefeitura Municipal de Santos – Secretaria Municipal de Esportes (SEMES)" },
        { label: "Instrumento", value: "Termo de Fomento nº 442772/2026 – SEMES" },
        { label: "Data de Assinatura", value: "23 de junho de 2026" },
        { label: "Processo Administrativo", value: "PA nº 11849/2026-67" },
        { label: "Objeto", value: "Realização do Open Santos ASSESP de Beach Tennis 2026" },
        { label: "Valor Total da Parceria", value: "R$ 58.800,00" },
        { label: "Valor Efetivamente Liberado", value: "R$ 58.800,00, em parcela única" },
        { label: "Data do Repasse", value: "17 de julho de 2026" }
      ]
    }
  ];

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
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

        {/* Public Partnerships */}
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
                  Parcerias com a Administração Pública
                </h2>
                <p className="text-gray-600">
                  Informações divulgadas conforme o art. 11 da Lei nº 13.019/2014 (Marco Regulatório das Organizações da Sociedade Civil)
                </p>
              </motion.div>

              <div className="space-y-6">
                {publicPartnerships.map((partnership, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-primary-navy to-primary-blue text-white p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 mb-3">
                            Verba Pública
                          </span>
                          <h3 className="text-2xl font-bold mb-1">
                            {partnership.title}
                          </h3>
                          <p className="text-gray-200">{partnership.instrument}</p>
                        </div>
                        <div className="md:text-right">
                          <p className="text-sm text-gray-200 mb-1">Valor total da parceria</p>
                          <p className="text-3xl font-bold">{partnership.totalAmount}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {partnership.fields.map((field, fieldIndex) => (
                          <div key={fieldIndex} className="border-b border-gray-100 pb-4">
                            <p className="text-sm text-gray-500 mb-1">{field.label}</p>
                            <p className="font-semibold text-gray-800">{field.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  <DollarSign className="mr-3" size={32} />
                  Demonstrativos Financeiros
                </h2>
                <p className="text-gray-600">
                  Balanços patrimoniais e demonstrações de resultado por ano
                </p>
              </motion.div>

              <div className="space-y-6">
                {financialReports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary-navy">
                        Exercício {report.year}
                      </h3>
                      <span className={`
                        px-4 py-1 rounded-full text-sm font-semibold
                        ${report.status === 'Concluído' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                        }
                      `}>
                        {report.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {report.documents.map((doc, docIndex) => (
                        <div
                          key={docIndex}
                          className={`
                            p-4 border rounded-xl transition-all
                            ${doc.available 
                              ? 'border-gray-200 hover:border-primary-blue hover:shadow-md cursor-pointer' 
                              : 'border-gray-100 bg-gray-50 opacity-60'
                            }
                          `}
                        >
                          {doc.available ? (
                            <a href={doc.file} target="_blank" rel="noopener noreferrer" className="block">
                              <div className="flex items-center justify-between mb-2">
                                <FileText className="text-primary-blue" size={20} />
                                <Download size={16} className="text-gray-400" />
                              </div>
                              <p className="text-sm font-semibold text-gray-800">{doc.name}</p>
                            </a>
                          ) : (
                            <>
                              <div className="flex items-center justify-between mb-2">
                                <FileText className="text-gray-400" size={20} />
                                <Calendar size={16} className="text-gray-400" />
                              </div>
                              <p className="text-sm font-semibold text-gray-500">{doc.name}</p>
                              <p className="text-xs text-gray-400 mt-1">Em elaboração</p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Reports */}
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
                  <Award className="mr-3" size={32} />
                  Prestação de Contas de Eventos
                </h2>
                <p className="text-gray-600">
                  Relatórios detalhados de cada evento realizado pela ASSESP
                </p>
              </motion.div>

              <div className="space-y-6">
                {eventReports.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-navy mb-1">
                          {event.event}
                        </h3>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${event.type === 'Verba Pública' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-purple-100 text-purple-700'
                        }
                      `}>
                        {event.type}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {event.documents.map((doc, docIndex) => (
                        <a
                          key={docIndex}
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="text-primary-blue" size={18} />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-blue transition-colors">
                              {doc.name}
                            </span>
                          </div>
                          <Download size={16} className="text-gray-400 group-hover:text-primary-blue transition-colors" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
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
                href="mailto:contato@assesp.org.br"
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