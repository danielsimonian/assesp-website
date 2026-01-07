# 🚀 Guia de Deploy - ASSESP Website

## 📋 Checklist Pré-Deploy

- [ ] Logo em SVG adicionado em `/public/logo.svg`
- [ ] Fotos dos torneios organizadas
- [ ] Informações da ASSESP revisadas
- [ ] Contatos e redes sociais atualizados
- [ ] Testar site localmente (`npm run dev`)

## 🗄️ Configuração do Supabase

### 1. Criar Conta e Projeto

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta (se ainda não tiver)
3. Crie um novo projeto:
   - Nome: `assesp-website`
   - Database Password: (guarde essa senha!)
   - Região: South America (São Paulo)

### 2. Configurar Database

1. No painel do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Cole todo o conteúdo do arquivo `supabase-schema.sql`
4. Clique em **Run** para executar o script

### 3. Configurar Storage

1. Vá em **Storage** no menu lateral
2. Crie os seguintes buckets (todos públicos):
   - `tournament-images`
   - `project-images`
   - `partner-logos`

Para cada bucket:
- Clique em **New bucket**
- Nome: (conforme acima)
- Public bucket: **✅ Marque esta opção**
- Clique em **Create bucket**

### 4. Configurar Políticas de Storage

Para cada bucket criado:

1. Clique no bucket
2. Vá em **Policies**
3. Clique em **New Policy**
4. Escolha **Allow public read access**
5. Use este código:

```sql
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'tournament-images' );
```

Repita para os outros buckets, alterando o nome.

### 5. Obter Credenciais

1. Vá em **Settings** → **API**
2. Copie:
   - **Project URL** (URL)
   - **anon/public** key (Key)

## 🌐 Deploy na Vercel

### 1. Preparar Repositório Git

```bash
# Inicializar repositório (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: ASSESP website"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/assesp-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta do GitHub
3. Clique em **Add New** → **Project**
4. Importe o repositório `assesp-website`
5. Configure o projeto:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: (deixe padrão)
   - Output Directory: (deixe padrão)

### 3. Configurar Variáveis de Ambiente

Ainda na tela de deploy, antes de clicar em "Deploy":

1. Expanda **Environment Variables**
2. Adicione as variáveis:

```
NEXT_PUBLIC_SUPABASE_URL = [cole sua URL do Supabase aqui]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [cole sua chave anon do Supabase aqui]
```

3. Clique em **Deploy**

### 4. Aguardar Deploy

- O Vercel vai instalar dependências e fazer o build
- Tempo estimado: 2-3 minutos
- Quando terminar, você receberá uma URL tipo: `assesp-website.vercel.app`

## 🔧 Configurações Pós-Deploy

### 1. Domínio Personalizado (Opcional)

Se você tem um domínio (ex: `assesp.org.br`):

1. No painel da Vercel, vá em **Settings** → **Domains**
2. Clique em **Add**
3. Digite seu domínio
4. Siga as instruções para configurar DNS

### 2. Google Analytics (Opcional)

1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Obtenha seu ID de medição (ex: `G-XXXXXXXXXX`)
3. Adicione ao projeto editando `app/layout.tsx`

### 3. Upload de Conteúdo

#### Fazer upload de fotos dos torneios:

1. Acesse o painel do Supabase
2. Vá em **Storage** → `tournament-images`
3. Clique em **Upload file**
4. Faça upload das fotos
5. Copie a URL pública de cada foto
6. No **Table Editor**, edite a tabela `tournaments`
7. Cole a URL no campo `image_url`

#### Adicionar fotos à galeria:

1. No **Table Editor**, vá em `gallery`
2. Clique em **Insert row**
3. Preencha:
   - `tournament_id`: (selecione o torneio relacionado)
   - `image_url`: (URL da foto no Storage)
   - `caption`: (descrição da foto)
   - `order_index`: (ordem de exibição)

## 📱 Testar o Site

1. Acesse a URL fornecida pela Vercel
2. Teste em diferentes dispositivos:
   - Desktop
   - Tablet
   - Mobile
3. Verifique:
   - [ ] Todas as páginas carregam
   - [ ] Imagens aparecem corretamente
   - [ ] Menu funciona no mobile
   - [ ] Formulário de contato envia
   - [ ] Links das redes sociais funcionam

## 🔄 Atualizações Futuras

Para atualizar o site:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição da mudança"
git push

# Vercel detecta automaticamente e faz novo deploy
```

## 📊 Monitoramento

### Vercel Analytics

1. No painel da Vercel, vá em **Analytics**
2. Aqui você pode ver:
   - Número de visitantes
   - Páginas mais acessadas
   - Performance do site

### Supabase Dashboard

1. Veja quantas mensagens de contato foram recebidas
2. Gerencie conteúdo (torneios, projetos, etc)
3. Monitore uso de storage

## 🆘 Troubleshooting

### Site não carrega

- Verifique se as variáveis de ambiente estão configuradas corretamente
- Veja os logs no dashboard da Vercel

### Imagens não aparecem

- Certifique-se que os buckets do Supabase são públicos
- Verifique se as URLs das imagens estão corretas
- Adicione o domínio do Supabase em `next.config.js`:

```javascript
images: {
  domains: ['seu-projeto.supabase.co'],
}
```

### Formulário não envia

- Verifique a conexão com Supabase
- Veja as políticas RLS da tabela `contacts`
- Confira o console do navegador para erros

## 📞 Suporte

Para dúvidas:
- Documentação Next.js: https://nextjs.org/docs
- Documentação Supabase: https://supabase.com/docs
- Documentação Vercel: https://vercel.com/docs

---

✅ **Pronto!** Seu site está no ar! 🎉
