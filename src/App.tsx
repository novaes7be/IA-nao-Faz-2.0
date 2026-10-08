import { useState, useEffect } from 'react'
import florSvg from './assets/flor.png'

/* ─── Logo ─── */
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  }

  return (
    <span className={`logo-text ${sizeMap[size]} text-[var(--text-primary)]`}>
      O que a <span className="neon-ia">IA</span> não faz
    </span>
  )
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', handler)

    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Festas', href: '#festas' },
    { label: 'Making Of', href: '#makingof' },
    // { label: 'Equipe', href: '#equipe' }, // temporariamente oculto
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-3 h-24 flex items-center justify-between">
        <a href="#hero">
          <Logo size="md" />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-medium text-[var(--text-secondary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: 'var(--navbar-bg)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--border)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav-link text-base font-medium text-[var(--text-secondary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-70 pb-28 text-center"
    >
      <img
        src={florSvg}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          top: '14%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          maxWidth: '90vw',
          opacity: 1,
          zIndex: 0,
        }}
      />

      <div className="max-w-3xl mx-auto fade-up relative z-10">
        <p className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-6">
          Produção de Eventos
        </p>

        <h1 className="logo-text text-5xl md:text-7xl leading-tight text-[var(--text-primary)] mb-6">
          O que a{' '}
          <span
            className="neon-ia"
            style={{ fontSize: 'inherit' }}
          >
            IA
          </span>{' '}
          não faz
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl mx-auto">
          Criamos experiências que começam muito antes da festa e continuam
          na memória depois que ela acaba.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="hero-btn hero-btn-primary"
          >
            <span>Criar Evento</span>

            <svg
              className="hero-btn-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h9M8 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#festas"
            className="hero-btn hero-btn-secondary"
          >
            <span>Explorar Festas</span>

            <svg
              className="hero-btn-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h9M8 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, #ff7a00 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full opacity-8"
          style={{
            background:
              'radial-gradient(circle, #ff7a00 0%, transparent 70%)',
          }}
        />
      </div>
    </section>
  )
}

/* ─── Sobre ─── */
function Sobre() {
  const highlights = [
    {
      value: '100%',
      label: 'presença humana',
    },
    {
      value: '1',
      label: 'equipe por trás de cada projeto',
    },
    {
      value: '∞',
      label: 'formas de transformar uma ideia',
    },
  ]

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl p-10 md:p-14"
          style={{
            background: 'var(--surface)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
          }}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-4">
              Sobre nós
            </p>

            <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6 leading-snug">
              Humanas até o fim.
            </h2>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-5">
              A gente acredita que nenhum evento deveria parecer igual ao
              outro.
            </p>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-5">
              Por trás de cada festa existem pessoas, histórias, expectativas
              e pequenas coisas que fazem aquele momento ser especial. É isso
              que queremos entender antes de começar qualquer produção.
            </p>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Somos uma produtora jovem, feita por pessoas que gostam de criar,
              organizar e colocar a mão na massa. Ainda estamos construindo
              nossa história — e queremos que cada evento faça parte dela.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="text-center rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.45)',
                }}
              >
                <p className="logo-text text-3xl md:text-4xl text-[var(--primary)]">
                  {item.value}
                </p>

                <p className="text-xs text-[var(--text-secondary)] mt-2 font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Como funciona ─── */
function Processo() {
  const steps = [
    {
      number: '01',
      title: 'A gente conversa',
      description:
        'Entendemos a ocasião, o estilo, as pessoas e, principalmente, o que você gostaria de sentir quando tudo acontecer.',
    },
    {
      number: '02',
      title: 'A ideia ganha forma',
      description:
        'Pensamos no conceito, na ambientação e em cada escolha que faz o evento ter a sua cara.',
    },
    {
      number: '03',
      title: 'A gente cuida',
      description:
        'Organizamos fornecedores, detalhes, montagem e tudo aquilo que precisa acontecer nos bastidores.',
    },
    {
      number: '04',
      title: 'Você aproveita',
      description:
        'Quando chega a hora, queremos que você esteja presente de verdade — não preocupado com o que está acontecendo atrás.',
    },
  ]

  return (
    <section id="processo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
            Nosso jeito de fazer
          </p>

          <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
            Do primeiro papo
            <br />
            ao último detalhe.
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            A gente acredita que um evento começa muito antes das pessoas
            chegarem. Começa na conversa, nas ideias e em entender o que você
            realmente quer viver naquele dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="logo-text text-5xl text-[var(--primary)] mb-5">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {step.title}
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Serviços ─── */
function Servicos() {
  const services = [
    {
      title: 'Conceito & criação',
      description:
        'Ideias, temas e detalhes que dão personalidade para o evento.',
    },
    {
      title: 'Cenografia & decoração',
      description:
        'Ambientes pensados para criar a atmosfera que você imaginou.',
    },
    {
      title: 'Produção',
      description:
        'Organização, fornecedores, montagem e acompanhamento de tudo.',
    },
    {
      title: 'Experiência',
      description:
        'Música, iluminação, detalhes e momentos que fazem as pessoas lembrarem do evento.',
    },
    {
      title: 'Gastronomia',
      description:
        'Curadoria de comidas e bebidas de acordo com o estilo da ocasião.',
    },
    {
      title: 'Foto & vídeo',
      description:
        'Registro dos momentos que merecem continuar depois que a festa acaba.',
    },
    {
      title: 'Eventos temáticos',
      description:
        'Festas com identidade própria, do conceito à última decoração.',
    },
    {
      title: 'Eventos corporativos',
      description:
        'Experiências profissionais sem deixar de lado a criatividade.',
    },
  ]

  return (
    <section
      id="servicos"
      className="py-24 px-6"
      style={{ background: 'rgba(255,255,255,0.28)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
            O que fazemos
          </p>

          <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
            Você traz a ideia.
            <br />
            A gente cuida do resto.
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Produzir um evento é juntar muitas coisas diferentes e fazer tudo
            parecer simples no final. É exatamente essa parte que gostamos de
            fazer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="text-2xl text-[var(--primary)] mb-4">✦</div>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Portfolio Carousel ─── */
const portfolioRow1 = [
  { src: '/portfolio/festa-01.jpg', alt: 'Festa temática 1' },
  { src: '/portfolio/festa-02.jpg', alt: 'Festa temática 2' },
  { src: '/portfolio/festa-03.jpg', alt: 'Festa temática 3' },
  { src: '/portfolio/festa-04.jpg', alt: 'Festa temática 4' },
  { src: '/portfolio/festa-05.jpg', alt: 'Festa temática 5' },
  { src: '/portfolio/festa-06.jpg', alt: 'Festa temática 6' },
  { src: '/portfolio/festa-07.jpg', alt: 'Festa temática 7' },
  { src: '/portfolio/festa-08.jpg', alt: 'Festa temática 8' },
  { src: '/portfolio/festa-09.jpg', alt: 'Festa temática 9' },
  { src: '/portfolio/festa-10.jpg', alt: 'Festa temática 10' },
  { src: '/portfolio/festa-11.jpg', alt: 'Festa temática 11' },
  { src: '/portfolio/festa-12.jpg', alt: 'Festa temática 12' },
  { src: '/portfolio/festa-13.jpg', alt: 'Festa temática 13' },
  { src: '/portfolio/festa-14.jpg', alt: 'Festa temática 14' },
  { src: '/portfolio/festa-15.jpg', alt: 'Festa temática 15' },
]

const portfolioRow2 = [
  { src: '/portfolio/festa-16.jpg', alt: 'Festa temática 16' },
  { src: '/portfolio/festa-17.jpg', alt: 'Festa temática 17' },
  { src: '/portfolio/festa-18.jpg', alt: 'Festa temática 18' },
  { src: '/portfolio/festa-19.jpg', alt: 'Festa temática 19' },
  { src: '/portfolio/festa-20.jpg', alt: 'Festa temática 20' },
  { src: '/portfolio/festa-21.jpg', alt: 'Festa temática 21' },
  { src: '/portfolio/festa-22.jpg', alt: 'Festa temática 22' },
  { src: '/portfolio/festa-23.jpg', alt: 'Festa temática 23' },
  { src: '/portfolio/festa-24.jpg', alt: 'Festa temática 24' },
]

const portfolioRow3 = [
  { src: '/portfolio/festa-25.jpg', alt: 'Festa temática 25' },
  { src: '/portfolio/festa-26.jpg', alt: 'Festa temática 26' },
  { src: '/portfolio/festa-27.jpg', alt: 'Festa temática 27' },
  { src: '/portfolio/festa-28.jpg', alt: 'Festa temática 28' },
  { src: '/portfolio/festa-29.jpg', alt: 'Festa temática 29' },
  { src: '/portfolio/festa-30.jpg', alt: 'Festa temática 30' },
  { src: '/portfolio/festa-31.jpg', alt: 'Festa temática 31' },
  { src: '/portfolio/festa-32.jpg', alt: 'Festa temática 32' },
  { src: '/portfolio/festa-33.jpg', alt: 'Festa temática 33' },
  { src: '/portfolio/festa-34.jpg', alt: 'Festa temática 34' },
  { src: '/portfolio/festa-35.jpg', alt: 'Festa temática 35' },
]

type PortfolioImage = { src: string; alt: string }

function PortfolioRow({
  images,
  reverse = false,
}: {
  images: PortfolioImage[]
  reverse?: boolean
}) {
  const doubled = [...images, ...images]

  return (
    <div className="overflow-hidden">
      <div
        style={{
          display: 'flex',
          animation: `${reverse ? 'scroll-right' : 'scroll-left'} ${images.length * 6}s linear infinite`,
          width: 'max-content',
          gap: '1rem',
          paddingLeft: '1.5rem',
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-96 h-72 rounded-xl overflow-hidden"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function PortfolioCarousel() {
  return (
    <section id="experiencias" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Portfólio
        </p>

        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
          Momentos que criamos
        </h2>

        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Cada produção começa com uma ideia diferente. Aqui estão alguns dos
          universos que já colocamos de pé.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <PortfolioRow images={portfolioRow1} />
        <PortfolioRow images={portfolioRow2} reverse />
        <PortfolioRow images={portfolioRow3} />
      </div>
    </section>
  )
}

/* ─── Tipos de eventos ─── */
function TiposEventos() {
  const events = [
    {
      number: '01',
      title: 'Casamentos',
      description:
        'Um dia que precisa ter a cara de quem está vivendo ele.',
    },
    {
      number: '02',
      title: 'Aniversários',
      description:
        'Porque comemorar também merece produção.',
    },
    {
      number: '03',
      title: 'Corporativos',
      description:
        'Eventos profissionais que não precisam ser sem graça.',
    },
    {
      number: '04',
      title: 'Festas temáticas',
      description:
        'Quando uma ideia vira um universo inteiro.',
    },
    {
      number: '05',
      title: 'Formaturas',
      description:
        'Uma conquista importante merece ser celebrada à altura.',
    },
    {
      number: '06',
      title: 'Eventos personalizados',
      description:
        'Se não existe uma categoria para a sua ideia, melhor ainda.',
    },
  ]

  return (
    <section id="eventos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
            Para cada ocasião
          </p>

          <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
            Cada evento tem
            <br />
            uma história diferente.
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            A gente não acredita em fórmula pronta. O jeito de produzir muda
            de acordo com o momento, com as pessoas e com aquilo que você quer
            celebrar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((event) => (
            <div key={event.number} className="event-type-card">
              <span>{event.number}</span>

              <div>
                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Festas ─── */
const festas = [
  {
    name: 'Baile de Máscaras',
    desc: 'Mistério, elegância e uma noite inesquecível. Cada convidado chega como personagem e sai como protagonista de uma história.',
  },
  {
    name: 'Halloween',
    desc: 'Do susto ao encanto: uma produção que transforma o espaço e faz a festa entrar no clima desde o primeiro momento.',
  },
  {
    name: 'Festa dos Mortos',
    desc: 'Inspirada no Día de los Muertos, uma celebração cheia de cores, flores e elementos que transformam o ambiente.',
  },
  {
    name: 'Oscar',
    desc: 'Tapete vermelho, glamour e uma cerimônia de premiação personalizada para transformar uma noite comum em uma grande estreia.',
  },
]

function Festas() {
  return (
    <section id="festas" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Festas
        </p>

        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-5">
          Ideias que viram experiências.
        </h2>

        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mb-14">
          Gostamos de festas que têm personalidade. Algumas das temáticas que
          já exploramos mostram um pouco desse jeito de criar.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {festas.map((festa) => (
            <div
              key={festa.name}
              className="group p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 cursor-default"
              style={{
                background: 'var(--surface)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <div className="text-4xl mb-4 text-[var(--primary)]">
                ✦
              </div>

              <h3 className="logo-text text-2xl text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                {festa.name}
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {festa.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Sócias ─── */
const socias = [
  {
    name: 'Débora',
    role: 'Diretora Criativa',
    bio: 'A mente por trás dos cenários. Transforma referências em ambientes que fazem a gente entrar no clima antes mesmo da festa começar.',
    img: '1580489944761-15a19d654956',
  },
  {
    name: 'Paula',
    role: 'Produção & Logística',
    bio: 'Cuida de cada detalhe para que tudo aconteça no tempo certo, sem que o esforço dos bastidores apareça para quem está aproveitando.',
    img: '1607746882042-944635dfe10e',
  },
  {
    name: 'Roberta',
    role: 'Relacionamento & Eventos',
    bio: 'A conexão entre a equipe e os clientes. Faz de cada conversa o começo de uma parceria de verdade.',
    img: '1573496359142-b8d3bd5e2b5e',
  },
]

function Socias() {
  return (
    <section id="equipe" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Quem está por trás
        </p>

        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
          Pessoas antes de tudo.
        </h2>

        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mb-14">
          O nome da empresa fala de inteligência artificial, mas o nosso
          trabalho começa justamente onde ela não consegue chegar: nas
          relações, nas ideias e nos detalhes humanos.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {socias.map((socia) => (
            <div
              key={socia.name}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'var(--surface)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
              }}
            >
              <div className="h-56 overflow-hidden bg-orange-50">
                <img
                  src={`https://images.unsplash.com/photo-${socia.img}?w=480&h=448&fit=crop&auto=format`}
                  alt={socia.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <p className="logo-text text-xl text-[var(--primary)] mb-0.5">
                  {socia.name}
                </p>

                <p className="text-xs font-semibold tracking-wide text-[var(--text-secondary)] uppercase mb-3">
                  {socia.role}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {socia.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="logo-text text-2xl md:text-3xl text-[var(--text-primary)] italic max-w-2xl mx-auto leading-snug">
            “O melhor de um evento não está só no que você vê. Está no que
            você sente quando está lá.”
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Making Of Carousel ─── */
const makingOfImages = [
  { src: '/makingof/making-01.jpg', alt: 'Making of 1' },
  { src: '/makingof/making-02.jpg', alt: 'Making of 2' },
  { src: '/makingof/making-03.jpg', alt: 'Making of 3' },
  { src: '/makingof/making-04.jpg', alt: 'Making of 4' },
  { src: '/makingof/making-05.jpg', alt: 'Making of 5' },
  { src: '/makingof/making-06.jpg', alt: 'Making of 6' },
  { src: '/makingof/making-07.jpg', alt: 'Making of 7' },
  { src: '/makingof/making-08.jpg', alt: 'Making of 8' },
  { src: '/makingof/making-09.jpg', alt: 'Making of 9' },
  { src: '/makingof/making-10.jpg', alt: 'Making of 10' },
]

function MakingOfCarousel() {
  const doubled = [...makingOfImages, ...makingOfImages]

  return (
    <section id="makingoff" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Making Of
        </p>

        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
          Tem gente trabalhando enquanto você aproveita.
        </h2>

        <p className="text-[var(--text-secondary)] text-lg max-w-xl">
          Planejamento, montagem, fornecedores, ajustes de última hora e todos
          aqueles detalhes que precisam acontecer para uma festa simplesmente
          acontecer.
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          style={{
            display: 'flex',
            animation: 'scroll-left-slow 60s linear infinite',
            width: 'max-content',
            gap: '1rem',
            paddingLeft: '1.5rem',
          }}
        >
          {doubled.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-96 h-72 rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'Como funciona o orçamento?',
    a: 'Primeiro, a gente conversa para entender o evento, o número de pessoas, o estilo que você imagina e o que precisa ser feito. A partir disso, montamos uma proposta de acordo com o seu projeto.',
  },
  {
    q: 'Com quanto tempo de antecedência devo entrar em contato?',
    a: 'Quanto antes, melhor para conseguirmos planejar tudo com calma e encontrar os melhores fornecedores. Mas cada evento é diferente, então vale conversar com a gente mesmo quando a data estiver mais próxima.',
  },
  {
    q: 'Quais regiões vocês atendem?',
    a: 'Atendemos principalmente São Paulo e região. Para eventos em outras localidades, podemos conversar e avaliar a logística de cada projeto.',
  },
  {
    q: 'Vocês cuidam de tudo ou só da decoração?',
    a: 'Depende do que o seu evento precisa. Podemos participar desde a criação do conceito até a produção e acompanhamento do dia, ou assumir apenas algumas partes do projeto.',
  },
  {
    q: 'Vocês fazem eventos corporativos?',
    a: 'Sim. Confraternizações, festas de fim de ano, premiações e outros formatos corporativos também podem ganhar uma produção mais criativa e personalizada.',
  },
  {
    q: 'Qual o tamanho mínimo de evento?',
    a: 'Não acreditamos que o tamanho seja o que define um bom evento. Podemos conversar sobre projetos de diferentes escalas e entender o que faz sentido para a sua ocasião.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          FAQ
        </p>

        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-14">
          Dúvidas frequentes
        </h2>

        <div
          className="flex flex-col divide-y"
          style={{ borderColor: 'var(--border)' }}
        >
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  {faq.q}
                </span>

                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background:
                      open === i ? 'var(--primary)' : 'var(--border)',
                    transform:
                      open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M6 2v8M2 6h8"
                      stroke={
                        open === i
                          ? 'white'
                          : 'var(--text-secondary)'
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              {open === i && (
                <p className="pb-5 text-[var(--text-secondary)] leading-relaxed text-sm">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contato ─── */
function Contato() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-4">
          Vamos conversar
        </p>

        <h2 className="logo-text text-4xl md:text-6xl text-[var(--text-primary)] mb-6">
          Você imagina.
          <br />
          A gente faz acontecer.
        </h2>

        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Tem uma ideia na cabeça, uma data marcada ou simplesmente vontade
          de fazer alguma coisa diferente? Conta para a gente. A primeira
          conversa é por nossa conta.
        </p>

        <a
          href="mailto:contato@oqueanaoafaz.com.br"
          className="hero-btn hero-btn-primary"
        >
          <span>Vamos conversar</span>

          <svg
            className="hero-btn-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h9M8 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo size="sm" />

        <p className="footer-text">
          © {new Date().getFullYear()} O que a IA não faz. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}

/* ─── WhatsApp Floating Button ─── */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20um%20evento!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{
        background: '#25d366',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.371.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg)' }}
    >
      <Navbar />

      <Hero />

      <Sobre />

      <Processo />

      <Servicos />

      <PortfolioCarousel />

      <TiposEventos />

      <Festas />

      {/* <Socias /> temporariamente oculto */}

      <MakingOfCarousel />

      <FAQ />

      <Contato />

      <Footer />

      {/* <WhatsAppButton /> */}
    </div>
  )
}