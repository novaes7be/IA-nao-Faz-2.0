# O que a IA não faz — v2.0

Site institucional da produtora de eventos **O que a IA não faz**.
Versão 2.0: migração do site estático (HTML/CSS/JS) para **React + TypeScript + Vite + Tailwind CSS v4**, com redesign clean/iOS-like.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (build/dev server)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- Gerado/editado originalmente no **Figma Make**

## Estrutura

```
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx        # entrypoint React
    ├── App.tsx          # todas as seções do site
    ├── index.css        # tokens de design + estilos globais (Tailwind)
    └── vite-env.d.ts
```

## Seções do site (`App.tsx`)

| Componente | Seção |
|---|---|
| `Navbar` | Menu fixo com efeito glass ao rolar |
| `Hero` | Título, subtítulo, 2 CTAs |
| `Sobre` | Texto institucional + estatísticas (120+ eventos, 8 anos, 100%) |
| `PortfolioCarousel` | Carrossel infinito de imagens de eventos |
| `Festas` | 4 cards de temáticas (Máscaras, Halloween, Festa dos Mortos, Oscar) |
| `Socias` | 3 cards das sócias (foto, cargo, bio) + citação |
| `EquipeCarousel` | Carrossel infinito de fotos da equipe |
| `FAQ` | Acordeão com 6 perguntas frequentes |
| `Contato` | CTA de e-mail |
| `Footer` | Logo + copyright |
| `WhatsAppButton` | Botão flutuante fixo |

## O que mudou da v1.0 para a v2.0

- Migração de HTML/CSS puro para React + Tailwind (componentizado)
- Novo design: fundo claro/neutro, cor primária (`#ff7a00`) restrita a botões, links e destaques
- Hero sem imagem/flor decorativa — foco em tipografia
- Novas seções: **FAQ** e **estatísticas** (Sobre)
- Botão do WhatsApp reativado (estava comentado na v1.0)
- SEO: meta tags completas (Open Graph, Twitter Card, description, keywords)

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Antes de publicar / colocar em produção

- [ ] Substituir o número de WhatsApp de exemplo (`5511999999999`) pelo número real
- [ ] Substituir as imagens do Unsplash (portfólio, equipe, sócias) pelos assets reais da empresa
- [ ] Confirmar e-mail de contato e domínio nas meta tags (`og:url`) — há divergência entre `oqueanaoafaz.com.br` e `oqueaianaofaz.com.br`
- [ ] Configurar Google Analytics ID (se aplicável) em `.figma/make/site.json`
- [ ] Revisar `robots`/indexação antes do deploy final

## Licença

Todos os direitos reservados — O que a IA não faz.
