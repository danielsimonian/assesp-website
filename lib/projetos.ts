export type ProjectVideo = {
  title: string;
  description: string;
  src: string;
  poster: string;
};

export type ProjectPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
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
  ] as ProjectVideo[],
  // Selecionadas do álbum oficial do torneio; ficam em /public/fotos
  albumUrl: "https://www.flickr.com/photos/205075011@N08/",
  photos: [
    { src: "/fotos/open-santos-2026/mergulho-na-rede.jpg", alt: "Atleta mergulhando na areia para alcançar a bola junto à rede", width: 1600, height: 1068 },
    { src: "/fotos/open-santos-2026/podio-masculino.jpg", alt: "Atletas no pódio do Open Santos ASSESP de Beach Tennis 2026", width: 1600, height: 1066 },
    { src: "/fotos/open-santos-2026/comemoracao-dupla.jpg", alt: "Dupla feminina batendo as mãos na praia de Santos, com guarda-sóis ao fundo", width: 1600, height: 1068 },
    { src: "/fotos/open-santos-2026/estrutura.jpg", alt: "Tendas e cadeiras da estrutura do torneio na areia", width: 1600, height: 1067 },
    { src: "/fotos/open-santos-2026/saque.jpg", alt: "Atleta prestes a golpear a bola no alto", width: 1068, height: 1600 },
    { src: "/fotos/open-santos-2026/cumprimento-apos-jogo.jpg", alt: "Atletas se cumprimentando junto à rede", width: 1600, height: 1068 },
    { src: "/fotos/open-santos-2026/trofeus.jpg", alt: "Troféus do Open Santos ASSESP de Beach Tennis", width: 1600, height: 1068 },
    { src: "/fotos/open-santos-2026/dupla-masculina.jpg", alt: "Dupla masculina em ação durante uma partida", width: 1600, height: 1067 },
    { src: "/fotos/open-santos-2026/cumprimento-na-rede.jpg", alt: "Atletas batendo as mãos por cima da rede", width: 1600, height: 1067 },
    { src: "/fotos/open-santos-2026/podio-feminino.jpg", alt: "Atletas com medalhas no pódio do Open Santos ASSESP de Beach Tennis 2026", width: 1068, height: 1600 },
    { src: "/fotos/open-santos-2026/mesa-de-inscricao.jpg", alt: "Atletas sendo atendidas na mesa da organização do torneio", width: 1600, height: 1068 },
    { src: "/fotos/open-santos-2026/mesa-com-microfone.jpg", alt: "Integrante da organização falando ao microfone na mesa do torneio", width: 1600, height: 1066 }
  ] as ProjectPhoto[]
};
