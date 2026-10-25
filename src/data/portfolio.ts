export type Foto = { src: string; alt: string; w: number; h: number }
export type Evento = { slug: string; titulo: string; descricao: string; fotos: Foto[] }

// Fotos em public/fotos/<slug>/NN.jpg. Textos e alt: edite à vontade.
export const eventos: Evento[] = [
  {
    slug: "baile-de-mascaras",
    titulo: "Baile de Máscaras",
    descricao: "Mistério, elegância e uma noite inesquecível. Cada convidado chega como personagem e sai como protagonista de uma história.",
    fotos: [
      { src: "/fotos/baile-de-mascaras/01.jpg", alt: "Painel com balões azuis e dourados e máscara dourada", w: 768, h: 576 },
      { src: "/fotos/baile-de-mascaras/02.jpg", alt: "Painel com máscara gigante, candelabro e balões", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/03.jpg", alt: "Sofá azul com esferas metálicas e máscara decorativa", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/04.jpg", alt: "Máscara preta e dourada gigante diante da cortina dourada", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/05.jpg", alt: "Vaso de rosas vermelhas e penas azuis ao lado de esfera dourada", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/06.jpg", alt: "Arranjo de penas azuis, flores douradas e máscara", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/07.jpg", alt: "Máscara dourada com penas azuis sobre tecido vermelho", w: 768, h: 576 },
      { src: "/fotos/baile-de-mascaras/08.jpg", alt: "Cortina de fitas coloridas com máscaras e balões", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/09.jpg", alt: "Fitas coloridas, balões e máscaras na parede", w: 1350, h: 1080 },
      { src: "/fotos/baile-de-mascaras/10.jpg", alt: "Cantinho com sofá azul, esferas metálicas e cortinas douradas", w: 900, h: 1600 },
      { src: "/fotos/baile-de-mascaras/11.jpg", alt: "Arranjo alto de penas azuis, máscara e flores douradas", w: 1080, h: 1350 },
      { src: "/fotos/baile-de-mascaras/12.jpg", alt: "Máscara dourada sobre rosas vermelhas e penas azuis", w: 1080, h: 1350 },
      { src: "/fotos/baile-de-mascaras/13.jpg", alt: "Rosas vermelhas e máscara dourada com penas azuis", w: 1080, h: 1350 },
      { src: "/fotos/baile-de-mascaras/14.jpg", alt: "Entrada com cortina de fitas coloridas e balões", w: 1080, h: 1350 },
      { src: "/fotos/baile-de-mascaras/15.jpg", alt: "Pista de dança iluminada com luzes douradas", w: 1080, h: 1350 },
    ],
  },
  {
    slug: "halloween",
    titulo: "Halloween",
    descricao: "Do susto ao encanto: uma produção que transforma o espaço e faz a festa entrar no clima desde o primeiro momento.",
    fotos: [
      { src: "/fotos/halloween/01.jpg", alt: "Mesa decorada com teias, luz roxa e velas vermelhas", w: 1080, h: 1350 },
      { src: "/fotos/halloween/02.jpg", alt: "Palhaço assustador ao lado de capa amarela e baú de circo", w: 1080, h: 1350 },
      { src: "/fotos/halloween/03.jpg", alt: "Cenário de circo sombrio com lanterna vermelha", w: 1080, h: 1350 },
      { src: "/fotos/halloween/04.jpg", alt: "Rosto de palhaço assustador de cabelo laranja", w: 1080, h: 1350 },
      { src: "/fotos/halloween/05.jpg", alt: "Abóboras iluminadas em cenário com teias", w: 1080, h: 1350 },
      { src: "/fotos/halloween/06.jpg", alt: "Aparador com velas pretas, garrafa e bruxas decorativas", w: 1080, h: 1350 },
      { src: "/fotos/halloween/07.jpg", alt: "Figura encapuzada com vassoura e teias", w: 1080, h: 1350 },
      { src: "/fotos/halloween/08.jpg", alt: "Esqueleto de chapéu mexicano com olhos iluminados", w: 1080, h: 1350 },
      { src: "/fotos/halloween/09.jpg", alt: "Esqueleto sentado entre cactos e fitas coloridas", w: 1080, h: 1350 },
      { src: "/fotos/halloween/10.jpg", alt: "Esqueleto com detalhes dourados e flores", w: 1080, h: 1350 },
      { src: "/fotos/halloween/11.jpg", alt: "Abóbora iluminada, velas e placa Boo! sobre mesa laranja", w: 1080, h: 1350 },
      { src: "/fotos/halloween/12.jpg", alt: "Mesa com teias, velas vermelhas e flores", w: 1080, h: 1350 },
      { src: "/fotos/halloween/13.jpg", alt: "Mesa de doces e salgados com velas e teias", w: 1080, h: 1350 },
      { src: "/fotos/halloween/14.jpg", alt: "Bruxas de olhos azuis ao lado de abóboras", w: 1080, h: 1350 },
      { src: "/fotos/halloween/15.jpg", alt: "Bruxas de olhos luminosos e abóboras gigantes sobre feno", w: 1350, h: 1080 },
      { src: "/fotos/halloween/16.jpg", alt: "Cenário escuro com figuras encapuzadas e retratos na parede", w: 1350, h: 1080 },
      { src: "/fotos/halloween/17.jpg", alt: "Figuras sombrias e porta-retratos em cenário escuro", w: 1350, h: 1080 },
      { src: "/fotos/halloween/18.jpg", alt: "Detalhe do cenário escuro com figura encapuzada", w: 1350, h: 1080 },
      { src: "/fotos/halloween/19.jpg", alt: "Esqueletos com tecidos rasgados pendurados", w: 1350, h: 1080 },
      { src: "/fotos/halloween/20.jpg", alt: "Canto mexicano com sofá vermelho, cactos e cortina de fitas", w: 1350, h: 1080 },
      { src: "/fotos/halloween/21.jpg", alt: "Sofá vermelho com almofadas coloridas e cactos", w: 1350, h: 1080 },
    ],
  },
  {
    slug: "oscar",
    titulo: "Oscar",
    descricao: "Tapete vermelho, glamour e uma cerimônia de premiação personalizada para transformar uma noite comum em uma grande estreia.",
    fotos: [
      { src: "/fotos/oscar/01.jpg", alt: "Estrela luminosa e tapete vermelho na entrada", w: 1350, h: 1080 },
      { src: "/fotos/oscar/02.jpg", alt: "Painel de fotos com balões dourados", w: 1350, h: 1080 },
      { src: "/fotos/oscar/03.jpg", alt: "Sala com estrelas da calçada da fama, moto e claquete Hollywood", w: 1350, h: 1080 },
      { src: "/fotos/oscar/04.jpg", alt: "Parede de retratos emoldurados e iluminados", w: 1350, h: 1080 },
      { src: "/fotos/oscar/05.jpg", alt: "Estatueta dourada e moto sobre piso com estrelas", w: 1080, h: 1350 },
      { src: "/fotos/oscar/06.jpg", alt: "Rolo de filme dourado com rosas vermelhas", w: 1080, h: 1350 },
      { src: "/fotos/oscar/07.jpg", alt: "Claquete Hollywood com balões vermelhos, pretos e dourados", w: 1080, h: 1350 },
      { src: "/fotos/oscar/08.jpg", alt: "Estatueta dourada gigante entre balões", w: 1080, h: 1350 },
      { src: "/fotos/oscar/09.jpg", alt: "Cadeira de diretor diante de cortina dourada", w: 1080, h: 1350 },
      { src: "/fotos/oscar/10.jpg", alt: "Arranjo de balões, rosas e rolo de filme", w: 1080, h: 1350 },
      { src: "/fotos/oscar/11.jpg", alt: "Rolo de filme com rosas vermelhas sobre tecido dourado", w: 1080, h: 1350 },
    ],
  },
]

const pick = (slug: string, n: number) => {
  const e = eventos.find((e) => e.slug === slug)!
  return { ...e.fotos[n - 1], slug, titulo: e.titulo }
}

// Ordem = posição no grid da home: a primeira é a grande.
export const destaques = [
  pick('baile-de-mascaras', 4),
  pick('oscar', 1),
  pick('halloween', 15),
  pick('oscar', 3),
  pick('halloween', 20),
]
