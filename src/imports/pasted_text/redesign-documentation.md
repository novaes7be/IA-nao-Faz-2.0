# Documentação de Redesign — "O que a IA não faz"
Para implementação no Figma Make

---

## 1. Estrutura do site (páginas/seções atuais)

1. **Navbar** (fixa, glass) — logo "O que a IA não faz" + menu (Sobre, Festas, Experiências, Equipe)
2. **Hero** — título, texto, 2 botões (Criar Evento / Explorar festas), visual circular decorativo + flor de fundo
3. **Sobre** — bloco de texto institucional (card com fundo translúcido)
4. **Portfólio** — carrossel infinito de imagens (14 fotos)
5. **Festas** — 4 itens (Baile de Máscaras, Halloween, Festa dos Mortos, Oscar), cada um com título + texto
6. **Sócias** — 3 perfis (Débora, Paula, Roberta) + frase de fechamento
7. **Equipe** — texto + carrossel infinito de fotos (4 imagens, duplicadas)
8. **Contato** — título, texto, botão de email (WhatsApp/Instagram estão comentados no código, inativos)
9. **Footer** — nome + copyright

---

## 2. Paleta de cores atual

| Uso | Valor |
|---|---|
| Primária (laranja) | `#ff7a00` |
| Texto escuro | `#1a1a1a` |
| Fundo (gradiente) | `#f87f15` → `#ffb380` (135deg) |
| Botões primário/secundário | `#008724c0` (verde translúcido) — obs: cor não bate com a primária definida |
| Glass navbar | `rgba(255,255,255,0.1)` + blur 14px |
| Cards "about-box" | `rgba(255,255,255,0.65)` + blur 12px |
| Cards de serviço | branco sólido |
| Logo "IA" | neon laranja/branco com text-shadow |

**Problema identificado:** o fundo inteiro do site usa gradiente laranja forte, e os botões usam verde — cor fora da paleta principal. Isso é o que você quer resolver.

---

## 3. Nova direção de design (iOS-like / clean)

### Princípios
- Fundo **neutro e claro** (branco ou cinza muito claro), sem gradiente colorido cobrindo a página inteira.
- Cor primária (laranja) usada **só** em: botões de ação, links/estados ativos, ícones de destaque, navbar (detalhes de interação).
- Hierarquia por **espaço em branco, tipografia e sombras suaves**, não por cor.
- Cantos bem arredondados (12–20px), sombras suaves e difusas (estilo iOS: `0 8px 24px rgba(0,0,0,0.06)`), sem sombras "hard" coloridas nos botões.
- Remover a imagem/decoração do hero (flor + círculo com foto) — hero passa a ser só tipografia + botões, com bastante respiro.
- Glassmorphism mantido apenas na navbar (sutil, sobre fundo claro).

### Nova paleta sugerida

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#ff7a00` | botões, links ativos, ícones, destaques na navbar |
| `--primary-hover` | `#e56d00` | hover de botões |
| `--bg` | `#fafafa` (ou `#ffffff`) | fundo geral do site |
| `--surface` | `#ffffff` | cards |
| `--text-primary` | `#1a1a1a` | títulos |
| `--text-secondary` | `#6b6b6b` | parágrafos |
| `--border` | `#ececec` | divisórias sutis |
| `--navbar-bg` | `rgba(255,255,255,0.7)` + blur | navbar fixa |

Remover: gradiente laranja no body, verde `#008724` dos botões, sombras coloridas tipo "neumorphic" (`0 12px 0 #703600`).

### Tipografia
- Manter Playfair Display só na logo (toque de identidade).
- Corpo do site: fonte tipo San Francisco / sistema — sugestão: **Inter** ou **SF Pro Display** (via Google Fonts: Inter), pesos 400/500/600/700.

### Componentes (padrão iOS)
- **Botões**: fundo `--primary`, texto branco, `border-radius: 14px`, sem sombra "3D", só leve `box-shadow` no hover; botão secundário vira **outline** (borda laranja, fundo transparente) em vez de verde sólido.
- **Cards**: fundo branco, sombra suave, sem blur/transparência (o glass fica só na navbar).
- **Navbar**: fundo branco translúcido + blur, item ativo/hover em laranja.
- **Hero**: sem foto/flor; título grande, subtítulo cinza, 2 botões (1 sólido laranja + 1 outline).

---

## 4. Passo a passo para montar no Figma Make

1. Criar **Design Tokens / Styles**: cores da tabela acima (fill styles), tipografia (Inter 400/500/600/700 + Playfair 600 só pra logo).
2. Definir **fundo global** da página como `--bg` (branco/cinza claro), sem gradiente.
3. Montar a **Navbar**: altura ~64px, fundo `--navbar-bg` com blur, logo à esquerda, menu à direita, item ativo em `--primary`.
4. Montar o **Hero**: sem imagem/visual, só bloco de texto centralizado ou alinhado à esquerda + 2 CTAs (primário sólido, secundário outline), bastante espaço vertical (padding 120–160px).
5. Seção **Sobre**: card branco com sombra leve, texto em `--text-secondary`, destaques em `--primary`.
6. **Portfólio / Equipe**: carrossel de imagens com cantos arredondados (16px), sem moldura colorida.
7. **Festas**: lista com borda esquerda fina em `--primary` (mantém, mas mais sutil) e fundo branco por trás.
8. **Sócias**: 3 blocos/cards brancos, nome em destaque `--primary`, texto em cinza.
9. **Contato**: botão de email em estilo botão primário (ou outline), sem sombra verde.
10. **Footer**: fundo branco/cinza claríssimo, texto cinza.
11. Aplicar **responsividade**: manter breakpoints já existentes (2000/1440/1024/800/480px) como guia de frames no Figma.

---

## 5. Assets
Não incluídos nesta rodada (a definir depois). Usar placeholders neutros (retângulos cinza claro) nos frames do Figma Make até a substituição pelos assets reais.