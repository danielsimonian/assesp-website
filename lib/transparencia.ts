export type PublicPartnership = {
  slug: string;
  title: string;
  year: number;
  instrument: string;
  totalAmount: string;
  fields: { label: string; value: string }[];
};

// Parcerias com a administração pública, divulgadas conforme o art. 11 da Lei nº 13.019/2014
export const publicPartnerships: PublicPartnership[] = [
  {
    slug: "termo-de-fomento-442772-2026",
    title: "Open Santos ASSESP de Beach Tennis 2026",
    year: 2026,
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

export function getPartnershipBySlug(slug: string) {
  return publicPartnerships.find((p) => p.slug === slug);
}
