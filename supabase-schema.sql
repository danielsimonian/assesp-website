-- ASSESP Database Schema
-- Execute este script no SQL Editor do Supabase

-- Habilitar UUID
create extension if not exists "uuid-ossp";

-- Tabela de Torneios
create table if not exists tournaments (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  date date not null,
  location text not null,
  participants integer default 0,
  category text check (category in ('Verba Pública', 'Privado')),
  description text,
  prize_money decimal(10,2),
  image_url text,
  featured boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Tabela de Galeria de Fotos
create table if not exists gallery (
  id uuid default uuid_generate_v4() primary key,
  tournament_id uuid references tournaments(id) on delete cascade,
  image_url text not null,
  caption text,
  order_index integer default 0,
  created_at timestamp with time zone default now()
);

-- Tabela de Contatos/Mensagens
create table if not exists contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  company text,
  phone text,
  subject text not null check (subject in ('parceria', 'torneio', 'projeto', 'voluntario', 'outro')),
  message text not null,
  status text default 'novo' check (status in ('novo', 'lido', 'respondido')),
  created_at timestamp with time zone default now()
);

-- Tabela de Projetos
create table if not exists projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  area text not null check (area in ('Esporte', 'Cultura', 'Lazer')),
  description text not null,
  status text default 'ativo' check (status in ('ativo', 'concluído', 'planejamento')),
  start_date date,
  end_date date,
  budget decimal(10,2),
  image_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Tabela de Parceiros
create table if not exists partners (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  logo_url text,
  website text,
  category text check (category in ('Patrocinador', 'Apoiador', 'Parceiro Institucional')),
  active boolean default true,
  order_index integer default 0,
  created_at timestamp with time zone default now()
);

-- Tabela de Notícias/Blog
create table if not exists news (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  content text not null,
  excerpt text,
  image_url text,
  author text,
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Função para atualizar updated_at automaticamente
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Triggers para atualizar updated_at
create trigger update_tournaments_updated_at before update on tournaments
  for each row execute procedure update_updated_at_column();

create trigger update_projects_updated_at before update on projects
  for each row execute procedure update_updated_at_column();

create trigger update_news_updated_at before update on news
  for each row execute procedure update_updated_at_column();

-- Políticas de segurança (RLS)
-- Permitir leitura pública, mas escrita apenas autenticada

alter table tournaments enable row level security;
alter table gallery enable row level security;
alter table projects enable row level security;
alter table partners enable row level security;
alter table news enable row level security;

-- Políticas de leitura pública
create policy "Torneios são públicos" on tournaments for select using (true);
create policy "Galeria é pública" on gallery for select using (true);
create policy "Projetos são públicos" on projects for select using (true);
create policy "Parceiros são públicos" on partners for select using (true);
create policy "Notícias publicadas são públicas" on news for select using (published = true);

-- Políticas de escrita (apenas usuários autenticados - admin)
create policy "Apenas admins podem inserir torneios" on tournaments for insert with check (auth.role() = 'authenticated');
create policy "Apenas admins podem atualizar torneios" on tournaments for update using (auth.role() = 'authenticated');
create policy "Apenas admins podem deletar torneios" on tournaments for delete using (auth.role() = 'authenticated');

-- Tabela de contatos permite inserção pública (formulário)
alter table contacts enable row level security;
create policy "Qualquer um pode enviar mensagem" on contacts for insert with check (true);
create policy "Apenas admins podem ler mensagens" on contacts for select using (auth.role() = 'authenticated');

-- Inserir dados de exemplo
insert into tournaments (name, date, location, participants, category, description, prize_money, featured) values
('Santos Open ASSESP 2024', '2024-11-15', 'Praia do Gonzaga, Santos', 500, 'Verba Pública', 'Maior evento da ASSESP, realizado com verba pública através de emenda impositiva', 30000.00, true),
('Open ASSESP #7', '2024-09-20', 'Arena Beach Tennis Santos', 200, 'Privado', 'Sétimo Open realizado pela ASSESP', 5000.00, false),
('Open ASSESP #6', '2024-07-15', 'Arena Beach Tennis Santos', 180, 'Privado', 'Sexto Open realizado pela ASSESP', 4500.00, false);

insert into projects (title, area, description, status, start_date) values
('Santos Open ASSESP', 'Esporte', 'Torneio de Beach Tennis com verba pública', 'ativo', '2024-11-01'),
('Escolinhas de Beach Tennis', 'Esporte', 'Aulas gratuitas de Beach Tennis para crianças da comunidade', 'planejamento', '2025-03-01'),
('Festival Cultural da Baixada', 'Cultura', 'Evento cultural com apresentações artísticas locais', 'planejamento', '2025-06-01');

-- Storage buckets (executar no dashboard do Supabase)
-- 1. Criar bucket "tournament-images" (público)
-- 2. Criar bucket "project-images" (público)
-- 3. Criar bucket "partner-logos" (público)
