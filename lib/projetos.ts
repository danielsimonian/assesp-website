export type ProjectVideo = {
  title: string;
  description: string;
  src: string;
};

// Vídeos ficam em /public/videos, já convertidos para 16:9
export const openSantos2026 = {
  title: "Open Santos ASSESP de Beach Tennis 2026",
  area: "Esporte",
  year: "2026",
  description: "Torneio de Beach Tennis realizado pela ASSESP em parceria com a Prefeitura Municipal de Santos, por meio da Secretaria Municipal de Esportes (SEMES).",
  partner: "Prefeitura de Santos – SEMES",
  instrument: "Termo de Fomento nº 442772/2026",
  partnershipSlug: "termo-de-fomento-442772-2026",
  videos: [] as ProjectVideo[]
};
