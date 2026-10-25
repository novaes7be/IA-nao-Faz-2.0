import { Link } from 'react-router-dom'
import { destaques } from '../data/portfolio'

// A primeira foto é grande (2x2); as outras 4 completam o grid.
const posicao = ['col-span-2 row-span-2', '', '', '', '']

export default function PortfolioDestaque() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-3">Portfólio</p>
            <h2 className="logo-text text-4xl md:text-5xl text-[var(--text-primary)] mb-4">Momentos que criamos</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Cada produção começa com uma ideia diferente. Aqui estão alguns dos universos que já colocamos de pé.
            </p>
          </div>

          <Link to="/portfolio" className="hero-btn hero-btn-primary">
            <span>Ver portfólio completo</span>
            <svg className="hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {destaques.map((d, i) => (
            <Link
              key={d.src}
              to={`/portfolio#${d.slug}`}
              className={`group relative overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)] ${posicao[i]}`}
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              <img
                src={d.src}
                alt={d.alt}
                width={d.w}
                height={d.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white">
                {d.titulo}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
