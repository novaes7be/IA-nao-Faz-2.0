# Documentação Técnica — v2.0

## 1. Visão geral

SPA de página única (one-pager), sem rotas, construída em React funcional (hooks: `useState`, `useEffect`). Todo o site está em um único arquivo `App.tsx`, dividido em componentes por seção.

## 2. Design tokens (`src/index.css`)

```
--primary: #ff7a00
--primary-hover: #e56d00
--bg: #fafafa
--surface: #ffffff
--text-primary: #1a1a1a
--text-secondary: #6b6b6b
--border: #ececec
--navbar-bg: rgba(255,255,255,0.75)
--radius: 14px
```

Também expostos como `--color-*` no `@theme inline` do Tailwind v4, para uso direto em classes utilitárias (`bg-primary`, etc).

Tipografia:
- **Inter** (400/500/600/700) — corpo do site
- **Playfair Display** (600/700) — logo e títulos (`.logo-text`)

## 3. Componentes

- **Logo** — reutilizável, 3 tamanhos (`sm`/`md`/`lg`), efeito neon no "IA" via `.neon-ia`
- **Navbar** — fixa; fundo transparente no topo, vira glass (`blur(16px)`) após 20px de scroll; menu mobile tipo hambúrguer com animação
- **Hero** — full height, texto centralizado, 2 CTAs (sólido + outline), círculos decorativos com gradiente radial sutil no fundo (sem foto)
- **Sobre** — card branco com sombra, texto institucional + 3 estatísticas
- **PortfolioCarousel / EquipeCarousel** — carrossel infinito via CSS `animation: scroll-left` (duplicação do array de imagens), pausa no hover
- **Festas** — grid 2 colunas de cards (emoji + título + descrição)
- **Socias** — grid 3 colunas, foto + nome + cargo + bio, citação final
- **FAQ** — acordeão controlado por estado (`open: number | null`)
- **Contato** — CTA único de e-mail (`mailto:`)
- **WhatsAppButton** — botão flutuante fixo, `position: fixed`, canto inferior direito
- **Footer** — logo pequena + copyright dinâmico (`new Date().getFullYear()`)

## 4. Imagens

Todas as imagens atuais (portfólio, equipe, sócias) vêm de URLs do **Unsplash** (placeholders), via IDs de foto hardcoded nos arrays `portfolioImages`, `teamImages`, `socias`. Precisam ser substituídas pelos assets reais da empresa antes do lançamento — ver seção de assets do site v1.0.

## 5. Build / Config

- **Vite** com plugins: `@vitejs/plugin-react`, `@tailwindcss/vite`, e plugins customizados do Figma Make (`figmaSiteConfiguration`, hot-reload helpers, dev-only kit para preview no Figma).
- `vite.config.ts` lê `./.figma/make/site.json` (não incluso nos arquivos enviados) para injetar title/description/OG/favicon/Analytics dinamicamente no HTML de build. **Esse arquivo precisa ser conferido antes do push** — pode conter o Google Analytics ID ou outras configs específicas do ambiente Figma Make.
- `tsconfig.json`: `strict: true`, alias `@/*` → `./src/*`, target ES2020, JSX automático (`react-jsx`).
- Scripts (`package.json`): `dev`, `build`, `preview`, `format` (oxfmt).

## 6. Responsividade

Tailwind padrão (`md:` breakpoint ~768px) usado para: menu desktop/mobile, grid de cards (1→2→3 colunas), tamanho de fontes do Hero/títulos.

## 7. Pontos de atenção para produção

- Número de WhatsApp é placeholder (`5511999999999`)
- Domínio inconsistente nas meta tags (`og:url`) vs. e-mail de contato
- Imagens são todas de stock (Unsplash), não são fotos reais da empresa
- `.figma/make/site.json` não foi revisado nesta documentação — checar antes do deploy
