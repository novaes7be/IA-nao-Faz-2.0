import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = { sm: 'text-base', md: 'text-xl', lg: 'text-3xl' }

  return (
    <span className={`logo-text ${sizeMap[size]} text-[var(--text-primary)]`}>
      O que a <span className="neon-ia">IA</span> não faz
    </span>
  )
}

// "/#..." funciona na home e também a partir da página de portfólio.
const links = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Como funciona', href: '/#processo' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Festas', href: '/#festas' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contato', href: '/#contato' },
]

const botao =
  'inline-flex items-center rounded-full border border-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--primary)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

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
      <div className="max-w-6xl mx-auto px-3 h-24 flex items-center justify-between">
        <a href="/#hero">
          <Logo size="md" />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link text-sm font-medium text-[var(--text-secondary)]">
              {link.label}
            </a>
          ))}
          <Link to="/portfolio" className={botao}>
            Portfólio
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

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
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className={`${botao} justify-center`}>
            Portfólio
          </Link>
        </div>
      )}
    </nav>
  )
}
