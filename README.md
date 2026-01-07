# 🏐 ASSESP - Website Institucional

Site oficial da Associação de Esportes, Cultura e Lazer de Praia de Santos e Região (ASSESP).

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Supabase** (banco de dados)
- **Lucide React** (ícones)

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase (opcional, para funcionalidades de banco de dados)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd assesp-website
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` e adicione suas credenciais do Supabase (se for usar):
```
NEXT_PUBLIC_SUPABASE_URL=sua-url-do-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
assesp-website/
├── app/                      # App Router (Next.js 14)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── globals.css          # Estilos globais
│   ├── sobre/               # Página Sobre
│   ├── projetos/            # Página Projetos
│   ├── torneios/            # Página Torneios
│   └── contato/             # Página Contato
├── components/              # Componentes React
│   ├── Header.tsx           # Cabeçalho/Menu
│   ├── Footer.tsx           # Rodapé
│   ├── sections/            # Seções da homepage
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Partners.tsx
│   └── ui/                  # Componentes UI reutilizáveis
├── lib/                     # Utilitários e configurações
│   ├── supabase.ts          # Cliente Supabase
│   └── utils.ts             # Funções auxiliares
├── public/                  # Arquivos estáticos
│   └── logo.svg             # Logo da ASSESP
└── package.json
```

## 🎨 Cores da Marca

Baseadas no logo da ASSESP:

```css
--primary-blue: #0B8EC4     /* Azul principal */
--primary-coral: #FF6B4A    /* Coral/Laranja */
--primary-orange: #FF9B3E   /* Laranja */
--primary-navy: #0A3D5C     /* Azul marinho escuro */
```

## 🗄️ Supabase (Banco de Dados)

### Tabelas Sugeridas

#### 1. Torneios (tournaments)
```sql
create table tournaments (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  date date not null,
  location text not null,
  participants integer,
  category text,
  description text,
  prize_money decimal,
  image_url text,
  created_at timestamp default now()
);
```

#### 2. Galeria (gallery)
```sql
create table gallery (
  id uuid default uuid_generate_v4() primary key,
  tournament_id uuid references tournaments(id),
  image_url text not null,
  caption text,
  order_index integer,
  created_at timestamp default now()
);
```

#### 3. Contatos (contacts)
```sql
create table contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  company text,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamp default now()
);
```

### Storage Buckets

Crie um bucket público chamado `tournament-images` para armazenar fotos dos torneios.

## 🚢 Deploy na Vercel

1. Faça push do código para GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <seu-repositorio>
git push -u origin main
```

2. Acesse [vercel.com](https://vercel.com) e importe o repositório

3. Configure as variáveis de ambiente no painel da Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Deploy automático! ✨

## 📝 Próximos Passos

### Funcionalidades a Implementar:

- [ ] Integração completa com Supabase
- [ ] CMS para gerenciar torneios e galeria
- [ ] Sistema de upload de imagens
- [ ] Newsletter/mailing list
- [ ] Blog de notícias
- [ ] Área de transparência (prestação de contas)
- [ ] Sistema de inscrição para torneios
- [ ] Integração com redes sociais
- [ ] Analytics (Google Analytics/Plausible)
- [ ] SEO otimizado

### Conteúdo a Adicionar:

- [ ] Logo em SVG na pasta `/public`
- [ ] Fotos dos torneios
- [ ] Vídeos dos eventos
- [ ] Informações da equipe/diretoria
- [ ] Estatutos e documentos oficiais
- [ ] Relatórios de transparência

## 📧 Contato

**ASSESP**  
Rua Doutor Luis de Faria, 109  
Gonzaga, Santos - SP  
CEP 11.060-481  

Email: contato@assesp.org.br  
CNPJ: 43.696.620/0001-10

## 📄 Licença

Este projeto é propriedade da ASSESP.

---

Desenvolvido com ❤️ para promover esporte, cultura e lazer na Baixada Santista
