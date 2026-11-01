# STATUS — ASSESP Website

## Estado atual (01/11/2026)
Em produção em **https://www.assespsp.org.br** — último deploy `e2c35ba`, tudo commitado e enviado.

**Funcionando:**
- Home, `/sobre`, `/projetos`, `/torneios`, `/parcerias`, `/contato`, `/transparencia`
- Único projeto/torneio: **Open Santos ASSESP de Beach Tennis 2026**, com 2 vídeos (teaser 41 MB e doação de fraldas 11 MB) na home, `/projetos` e `/torneios`
- `/transparencia`: demonstrativos financeiros recolhidos por ano (2021→2026, todos "Em elaboração"); em 2026, link para `/transparencia/parcerias/termo-de-fomento-442772-2026` com os 10 dados do Termo de Fomento nº 442772/2026 (SEMES, R$ 58.800,00, repasse 17/07/2026)
- Contato só por WhatsApp e e-mail; cotas de patrocínio "sob consulta"

## Pendências
1. **Situação da prestação de contas** do Termo de Fomento (exigida pelo art. 11 da Lei 13.019) — perguntar ao usuário e adicionar em `lib/transparencia.ts`
2. **Diretoria em `/sobre`**: confirmar Jadson Maciel Vilela (Presidente) e Maria de Fátima Almeida Queirós (Diretora Secretária)
3. **PDFs da transparência** (termo de fomento, prestação de contas, balanços/DRE) — quando o usuário enviar, salvar em `public/docs/` e cadastrar
4. Outros projetos/torneios — o usuário vai mandar depois (não inventar)
5. Formulário de contato só se o Resend for configurado no futuro

## Histórico

### 31/10 – 01/11/2026
- Adicionada a parceria com a Prefeitura (Termo de Fomento 442772/2026) em página própria dentro da transparência
- Removido todo o conteúdo fictício/placeholder do site (emenda inexistente, estatísticas, depoimento, torneios e projetos de exemplo, PDFs que não existiam, Facebook genérico, horário de atendimento)
- Demonstrativos financeiros compactos e automáticos por ano
- Telefone, e-mail (`assesp_sp@hotmail.com`) e Instagram (`@pointdogonzagabt`) atualizados; formulário de contato trocado por WhatsApp/e-mail
- Razão social e datas alinhadas com a Receita Federal e o estatuto
- Vídeos do evento convertidos para 16:9 e publicados
- `.gitignore` passou a ignorar `documentos-assesp/`
