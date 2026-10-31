import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { getPartnershipBySlug, publicPartnerships } from "@/lib/transparencia";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return publicPartnerships.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const partnership = getPartnershipBySlug(params.slug);
  if (!partnership) return {};
  return {
    title: `${partnership.instrument} - Transparência ASSESP`,
    description: `Parceria com a administração pública: ${partnership.title}`
  };
}

export default function ParceriaPage({ params }: Props) {
  const partnership = getPartnershipBySlug(params.slug);
  if (!partnership) notFound();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/transparencia"
                className="inline-flex items-center text-sm text-gray-200 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft size={16} className="mr-2" />
                Voltar para Transparência
              </Link>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 mb-3">
                    Parceria com a Administração Pública · Exercício {partnership.year}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {partnership.title}
                  </h1>
                  <p className="text-gray-200">{partnership.instrument}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm text-gray-200 mb-1">Valor total da parceria</p>
                  <p className="text-3xl font-bold">{partnership.totalAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {partnership.fields.map((field, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <p className="text-sm text-gray-500 mb-1">{field.label}</p>
                      <p className="font-semibold text-gray-800">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Informações divulgadas conforme o art. 11 da Lei nº 13.019/2014 (Marco Regulatório das Organizações da Sociedade Civil).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
