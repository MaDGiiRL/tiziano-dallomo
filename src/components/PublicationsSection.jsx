import { useMemo, useState } from 'react'
import SectionTitle from './SectionTitle'

const PAGE_SIZE = 4

export default function PublicationsSection({ books }) {
  const [page, setPage] = useState(0)
  const pages = Math.ceil(books.length / PAGE_SIZE)

  const visible = useMemo(
    () => books.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [books, page],
  )

  return (
    <section id="pubblicazioni" className="mt-10 section-shell p-7 md:p-10">
      <SectionTitle
        eyebrow="Volumi"
        title="Pubblicazioni principali"
        description="Una selezione dei volumi pubblicati nel tempo, tra finanza, commercio internazionale, economia e psicologia."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4">
          {visible.map((book) => (
            <div key={book} className="rounded-[22px] border border-white/10 bg-slate-950/50 px-5 py-5 text-slate-200">
              {book}
            </div>
          ))}
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-950/50 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Articoli e riviste</div>
          <h3 className="mt-3 text-2xl font-semibold text-white">Ricerca e contributi</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            È autore di centinaia di articoli in riviste come L’Orafo Italiano, Sport e Medicina,
            Economia & Diritto, Acta Philosophica, Oro, Argento, Orologi, The Diamond Times e
            International Journal of Quantitative Finance.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Alcuni articoli dedicati alla reverse engineering del prezzo del diamante hanno cambiato la giurisprudenza.
          </p>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setPage((prev) => (prev - 1 + pages) % pages)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Precedente
            </button>
            <div className="text-sm text-slate-400">
              {page + 1} / {pages}
            </div>
            <button
              onClick={() => setPage((prev) => (prev + 1) % pages)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Successiva
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
