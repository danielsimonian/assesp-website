export type ProjectVideo = {
  title: string;
  description: string;
  src: string;
  poster: string;
};

// Vídeos ficam em /public/videos, já convertidos para 16:9
export const openSantos2026 = {
  title: "Open Santos ASSESP de Beach Tennis 2026",
  area: "Esporte",
  year: "2026",
  description: "Torneio de Beach Tennis realizado pela ASSESP em Santos.",
  videos: [
    {
      title: "Teaser do Evento",
      description: "Os melhores momentos do Open Santos ASSESP de Beach Tennis 2026.",
      src: "/videos/open-santos-2026-teaser.mp4",
      poster: "/videos/open-santos-2026-teaser.jpg"
    },
    {
      title: "Doação de Fraldas",
      description: "Entrega das fraldas geriátricas arrecadadas durante o Open Santos ASSESP de Beach Tennis 2026.",
      src: "/videos/open-santos-2026-doacao-fraldas.mp4",
      poster: "/videos/open-santos-2026-doacao-fraldas.jpg"
    }
  ] as ProjectVideo[]
};
