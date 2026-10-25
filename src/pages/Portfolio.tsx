import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { eventos } from '../data/portfolio'
import type { Evento } from '../data/portfolio'
import Lightbox from '../components/Lightbox'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Portfolio() {
  const { hash } = useLocation()
  const [aberto, setAberto] = useState<{ evento: Evento; indice: number } | null>(null)

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [hash])

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">Portfólio</p>
        <h1 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-4">Momentos que criamos</h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Toque numa foto para ampliar.
        </p>

        <nav aria-label="Eventos" className="mt-8 flex flex-wrap gap-3">
          {eventos.map((ev) => (
            <a
              key={ev.slug}
              href={`#${ev.slug}`}
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--border)] px-5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]"
            >
              {ev.titulo}
            </a>
          ))}
        </nav>

        {eventos.map((ev) => (
          <section key={ev.slug} id={ev.slug} className="mt-20 scroll-mt-28">
            <h2 className="logo-text text-3xl md:text-4xl text-[var(--text-primary)] mb-3">{ev.titulo}</h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl">{ev.descricao}</p>

            {/* Masonry: colunas CSS, cada foto mantém a proporção original */}
            <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {ev.fotos.map((f, i) => (
                <li key={f.src} className="mb-4 break-inside-avoid">
                  <button
                    type="button"
                    onClick={() => setAberto({ evento: ev, indice: i })}
                    className="group block w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                  >
                    <img
                      src={f.src}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <Footer />

      {aberto && (
        <Lightbox
          evento={aberto.evento}
          indice={aberto.indice}
          onClose={() => setAberto(null)}
          onChange={(indice) => setAberto({ ...aberto, indice })}
        />
      )}
    </div>
  )
}
