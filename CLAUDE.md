# ASSESP Website

Site institucional da **Associação de Esportes, Cultura e Lazeres de Praia de Santos e Região – ASSESP/SP** (CNPJ 43.696.620/0001-10).

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · lucide-react · pnpm

## Comandos
`pnpm dev` | `pnpm build` | `pnpm lint` | `pnpm exec tsc --noEmit -p .`

⚠️ Pare o `pnpm dev` antes de rodar `pnpm build` — o build sobrescreve `.next` e o dev server passa a servir JS 404 (página fica em branco). Se acontecer: parar o dev, `rm -rf .next`, subir de novo.

## Deploy
- Push em `master` de `github.com/danielsimonian/assesp-website` → deploy automático em produção na Vercel.
- Domínio oficial: **https://www.assespsp.org.br** (também `assesp-website.vercel.app`). `assesp.org.br` NÃO é nosso (é de uma associação de SC).
- Fluxo combinado: mostrar localmente → usuário aprova → build → push.

## Regras de conteúdo (decididas com o usuário)
- **Só fatos reais.** O site original tinha conteúdo inventado (emenda de R$ 100 mil do vereador Fábio Duarte, estatísticas, depoimento, torneios e projetos fictícios, PDFs inexistentes) — tudo removido em 31/10/2026. Nunca adicionar números, nomes ou documentos não confirmados; sem placeholders de foto.
- **Dados da parceria com a Prefeitura (Termo de Fomento, SEMES, valores) aparecem SOMENTE em `/transparencia`** e na página da parceria. Nunca na home, `/projetos`, `/torneios` ou `/sobre`.
- **Sem formulários** (Resend não configurado). Contato só por WhatsApp e e-mail.
- Contatos: e-mail `assesp_sp@hotmail.com` · WhatsApp (13) 99176-0203 (`wa.me/5513991760203`) · Instagram `instagram.com/pointdogonzagabt`.
- Razão social conforme Receita Federal (acima). Fundação 25/05/2021 (estatuto); início das atividades no CNPJ 17/08/2021.

## Onde ficam os dados
- `lib/transparencia.ts` — parcerias com a administração pública (art. 11 da Lei 13.019/2014). Cada item gera `/transparencia/parcerias/[slug]` e aparece no ano certo em "Demonstrativos Financeiros".
- `lib/projetos.ts` — projeto Open Santos 2026 + vídeos (usado na home, `/projetos`, `/torneios`).
- `components/VideoGallery.tsx` — grade de vídeos 16:9 (some quando a lista está vazia).
- `components/PhotoGallery.tsx` — fotos em colunas, sem cortar (some quando a lista está vazia). Lista em `lib/projetos.ts`, arquivos em `public/fotos/` (JPG até 1600 px). A home mostra só as 6 primeiras.
- `app/transparencia/page.tsx` — `publishedFinancialDocuments` (PDFs por exercício; anos 2021→ano atual gerados no build, sem arquivo = "Em elaboração").
- `public/docs/` — PDFs públicos (hoje só `estatuto-assesp.pdf`). `public/videos/` — MP4 + capas JPG.
- `documentos-assesp/` — documentos administrativos locais, ignorados pelo git (não fazem parte do site).

## Vídeos
Converter com ffmpeg para 720p H.264, `-movflags +faststart`, bitrate limitado (~2.2 Mbps). Vídeo vertical → 16:9 com o próprio vídeo desfocado nas laterais. GitHub recusa arquivos > 100 MB.
