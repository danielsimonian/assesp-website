import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ASSESP - Associação de Esportes, Cultura e Lazer",
  description: "A ASSESP promove esporte, cultura e lazer na Baixada Santista através de projetos sociais e eventos como o Santos Open de Beach Tennis.",
  keywords: "ASSESP, Beach Tennis, Santos, Esporte, Cultura, Lazer, Santos Open",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
