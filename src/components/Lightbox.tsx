import { useEffect, useRef } from 'react'
import type { Evento } from '../data/portfolio'

type Props = {
  evento: Evento
  indice: number
  onClose: () => void
  onChange: (indice: number) => void
}

const btn =
  'grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white'

export default function Lightbox({ evento, indice, onClose, onChange }: Props) {
  const total = evento.fotos.length
  const foto = evento.fotos[indice]
  const botaoFechar = useRef<HTMLButtonElement>(null)

  const anterior = () => onChange((indice - 1 + total) % total)
  const proxima = () => onChange((indice + 1) % total)

  useEffect(() => {
    botaoFechar.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') anterior()
      if (e.key === 'ArrowRight') proxima()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={evento.titulo}
      className="fixed inset-0 z-[60] flex flex-col bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="flex justify-end">
        <button ref={botaoFechar} type="button" aria-label="Fechar" className={btn} onClick={onClose}>
          ×
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
        <button type="button" aria-label="Foto anterior" className={btn} onClick={anterior}>
          ‹
        </button>
        <img src={foto.src} alt={foto.alt} className="max-h-full max-w-full rounded-lg object-contain" />
        <button type="button" aria-label="Próxima foto" className={btn} onClick={proxima}>
          ›
        </button>
      </div>

      <p className="pt-3 text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
        {evento.titulo} · {indice + 1} de {total}
      </p>
    </div>
  )
}
