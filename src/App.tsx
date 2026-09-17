import { useState, useEffect } from 'react'
import florSvg from './assets/flor.svg'

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

  const links = ['Sobre', 'Festas', 'Experiências', 'Equipe', 'FAQ', 'Contato']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero">
          <Logo size="md" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: 'var(--navbar-bg)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--border)',
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              {link}
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center"
    >
      {/* Flor decorativa atrás do título */}
      <img
        src={florSvg}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '880px',
          maxWidth: '90vw',
          opacity: 0.5,
          filter: 'blur(1px)',
          zIndex: 0,
        }}
      />
      <div className="max-w-3xl mx-auto fade-up">
        <p className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-6">
          Produção de Eventos
        </p>
        <h1 className="logo-text text-5xl md:text-7xl leading-tight text-[var(--text-primary)] mb-6">
          O que a{' '}
          <span className="neon-ia" style={{ fontSize: 'inherit' }}>
            IA
          </span>{' '}
          não faz
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl mx-auto">
          Criamos experiências únicas, festas memoráveis e celebrações que
          nenhum algoritmo consegue sentir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[var(--radius)] bg-[var(--primary)] text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--primary-hover)] hover:shadow-lg"
            style={{ boxShadow: '0 4px 14px rgba(255,122,0,0.3)' }}
          >
            Criar Evento
          </a>
          <a
            href="#festas"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[var(--radius)] border-2 border-[var(--primary)] text-[var(--primary)] font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-orange-50"
          >
            Explorar Festas
          </a>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #ff7a00 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #ff7a00 0%, transparent 70%)' }}
        />
      </div>
    </section>
  )
}

/* ─── Sobre ─── */
function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-10 md:p-14"
          style={{
            background: 'var(--surface)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-4">
            Sobre nós
          </p>
          <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6 leading-snug">
            Humanas até o fim
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
            Somos uma produtora de eventos formada por mulheres que acreditam
            que cada festa carrega uma história. Do planejamento ao último
            abraço da noite, nós cuidamos de tudo com intenção, afeto e
            criatividade que nenhuma inteligência artificial consegue replicar.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Nosso trabalho é traduzir sonhos em experiências reais — cenários,
            sensações, cheiros, músicas e momentos que ficam na memória para
            sempre.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { num: '120+', label: 'Eventos realizados' },
              { num: '8 anos', label: 'De experiência' },
              { num: '100%', label: 'Presença humana' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="logo-text text-3xl md:text-4xl text-[var(--primary)]">
                  {stat.num}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Portfolio Carousel ─── */
const portfolioImages = [
  { id: '1540575467537-43a1b86cc9c2', alt: 'Baile de máscaras elegante' },
  { id: '1470229722913-7c0e2dbbafd3', alt: 'Show ao vivo com luzes' },
  { id: '1516450360452-9312f5e86fc7', alt: 'Decoração de festa sofisticada' },
  { id: '1519671282429-b8d64e4cb04e', alt: 'Celebração noturna' }
]

function PortfolioCarousel() {
  const doubled = [...portfolioImages, ...portfolioImages]
  return (
    <section id="experiências" className="py-24 overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Portfólio
        </p>
        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)]">
          Momentos que criamos
        </h2>
      </div>

      <div className="overflow-hidden">
        <div style={{ display: 'flex', animation: 'scroll-left 45s linear infinite', width: 'max-content', gap: '1rem', paddingLeft: '1.5rem' }}>
          {doubled.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-96 h-72 rounded-xl overflow-hidden"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              <img
                src={`https://images.unsplash.com/photo-${img.id}?w=768&h=576&fit=crop&auto=format`}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading={i < 3 ? 'eager' : 'lazy'}
              />
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
    emoji: '🎭',
  },
  {
    name: 'Halloween',
    desc: 'Do susto ao encanto: nossa produção transforma qualquer espaço em uma casa mal-assombrada que impressiona até os mais corajosos.',
    emoji: '🎃',
  },
  {
    name: 'Festa dos Mortos',
    desc: 'Inspirada no Día de los Muertos, celebramos a vida com cores, flores e uma cenografia que homenageia quem já partiu.',
    emoji: '💀',
  },
  {
    name: 'Oscar',
    desc: 'Tapete vermelho, glamour e uma cerimônia de premiação personalizada. Para quando a noite merece tratamento VIP.',
    emoji: '🏆',
  },
]

function Festas() {
  return (
    <section id="festas" className="py-24 px-6 ">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Festas
        </p>
        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-14">
          Temáticas que dominamos
        </h2>

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
              <div className="text-4xl mb-4">{festa.emoji}</div>
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
    bio: 'A mente por trás dos cenários. Transforma referências em ambientes sensoriais que ninguém esquece.',
    img: '1580489944761-15a19d654956',
  },
  {
    name: 'Paula',
    role: 'Produção & Logística',
    bio: 'Cuida de cada detalhe para que tudo funcione no tempo certo, sem que ninguém perceba o esforço.',
    img: '1607746882042-944635dfe10e',
  },
  {
    name: 'Roberta',
    role: 'Relacionamento & Eventos',
    bio: 'A conexão entre a equipe e os clientes. Faz de cada briefing o início de uma parceria real.',
    img: '1573496359142-b8d3bd5e2b5e',
  },
]

function Socias() {
  return (
    <section id="equipe" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Sócias
        </p>
        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-14">
          As pessoas por trás
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {socias.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'var(--surface)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
              }}
            >
              <div className="h-56 overflow-hidden bg-orange-50">
                <img
                  src={`https://images.unsplash.com/photo-${s.img}?w=480&h=448&fit=crop&auto=format`}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="logo-text text-xl text-[var(--primary)] mb-0.5">{s.name}</p>
                <p className="text-xs font-semibold tracking-wide text-[var(--text-secondary)] uppercase mb-3">
                  {s.role}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="logo-text text-2xl md:text-3xl text-[var(--text-primary)] italic max-w-2xl mx-auto leading-snug">
            "Cada festa é uma obra. Cada obra, uma lembrança que só nós sabemos criar."
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Team Carousel ─── */
const teamImages = [
  { id: '1529156069898-49953e39b3ac', alt: 'Equipe em ação' },
  { id: '1511988617624-7cf0c7ded7cf', alt: 'Produção do evento' },
  { id: '1527529482837-4698179dc6ce', alt: 'Bastidores do evento' },
  { id: '1543269865-0a7c13dc5e58', alt: 'Time comemorando' },
]

function EquipeCarousel() {
  const doubled = [...teamImages, ...teamImages]
  return (
    <section className="py-24  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">
          Equipe
        </p>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl">
          Uma equipe de profissionais dedicados a transformar cada evento em
          uma experiência inesquecível.
        </p>
      </div>

      <div className="overflow-hidden">
        <div style={{ display: 'flex', animation: 'scroll-left-slow 20s linear infinite', width: 'max-content', gap: '1rem', paddingLeft: '1.5rem' }}>
          {doubled.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-64 h-48 rounded-xl overflow-hidden"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              <img
                src={`https://images.unsplash.com/photo-${img.id}?w=512&h=384&fit=crop&auto=format`}
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

/* ─── Contato ─── */
function Contato() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-4">
          Contato
        </p>
        <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
          Vamos criar algo juntos?
        </h2>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
          Conte para nós sobre o seu evento. Responderemos em até 24 horas com
          uma proposta feita especialmente para você.
        </p>
        <a
          href="mailto:contato@oqueanaoafaz.com.br"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-[var(--radius)] bg-[var(--primary)] text-white font-semibold text-base tracking-wide transition-all duration-200 hover:bg-[var(--primary-hover)]"
          style={{ boxShadow: '0 6px 20px rgba(255,122,0,0.35)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Enviar mensagem
        </a>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo size="sm" />
        <p className="text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} O que a IA não faz. Todos os direitos reservados.
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
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'Como funciona o orçamento?',
    a: 'Enviamos uma proposta personalizada após uma conversa inicial sobre o evento. O orçamento leva em conta espaço, número de convidados, temática e serviços desejados. Não há custo para solicitar.',
  },
  {
    q: 'Qual o prazo mínimo para contratar?',
    a: 'Recomendamos contato com pelo menos 60 dias de antecedência para garantir disponibilidade e melhor qualidade na produção. Para eventos pequenos e pontuais, o prazo pode ser menor — consulte.',
  },
  {
    q: 'Quais regiões vocês atendem?',
    a: 'Atendemos toda a Grande São Paulo e interior do estado. Para outros estados, analisamos caso a caso conforme logística e disponibilidade da equipe.',
  },
  {
    q: 'Vocês cuidam de tudo ou só da decoração?',
    a: 'Somos uma produtora completa: cuidamos de cenografia, fornecedores, logística, direção criativa e acompanhamento no dia do evento. Você só precisa aparecer e aproveitar.',
  },
  {
    q: 'É possível fazer eventos corporativos?',
    a: 'Sim! Desenvolvemos festas de fim de ano, confraternizações e premiações para empresas. Adaptamos a temática e o tom ao perfil da sua empresa.',
  },
  {
    q: 'Qual o tamanho mínimo de evento?',
    a: 'Não temos número mínimo. Já produzimos desde festas íntimas de 20 pessoas até eventos com mais de 400 convidados. O cuidado é o mesmo em qualquer escala.',
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

        <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border)' }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors"
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: open === i ? 'var(--primary)' : 'var(--border)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke={open === i ? 'white' : 'var(--text-secondary)'} strokeWidth="1.5" strokeLinecap="round"/>
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

/* ─── App ─── */
export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <Sobre />
      <PortfolioCarousel />
      <Festas />
      <Socias />
      <EquipeCarousel />
      <FAQ />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
