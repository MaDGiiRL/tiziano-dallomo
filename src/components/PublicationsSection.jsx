import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Book, BookOpen, TrendingUp, Gem } from "lucide-react";

const PAGE_SIZE = 4;

// funzione per variare icone
const getIcon = (index) => {
  const icons = [Book, BookOpen, TrendingUp, Gem];
  return icons[index % icons.length];
};

export default function PublicationsSection({ books }) {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(books.length / PAGE_SIZE);

  const visible = useMemo(
    () => books.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [books, page],
  );

  return (
    <section id="pubblicazioni" className="mt-10 section-shell p-7 md:p-10">
      <SectionTitle eyebrow="Volumi" title="Pubblicazioni principali" />

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LIBRI */}
        <div className="grid gap-4">
          {visible.map((book, index) => {
            const Icon = getIcon(index);

            return (
              <div
                key={book}
                className="group flex items-start gap-4 rounded-[22px] border border-slate-700/60 bg-slate-950/60 p-5 transition hover:border-sky-400/40 hover:bg-slate-900"
              >
                {/* ICONA */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>

                {/* CONTENUTO */}
                <div className="flex-1">
                  <div className="text-sm leading-6 text-slate-200 group-hover:text-white transition">
                    {book}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* COLONNA DESTRA */}
        <div className="rounded-[24px] border border-slate-700/60 bg-slate-950/60 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Articoli e riviste
          </div>

          <h3 className="mt-3 text-2xl font-semibold text-white">
            Ricerca e contributi
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            È autore di centinaia di articoli in riviste come L’Orafo Italiano,
            Sport e Medicina, Economia & Diritto, Acta Philosophica, Oro,
            Argento, Orologi, The Diamond Times e International Journal of
            Quantitative Finance.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Alcuni articoli dedicati alla reverse engineering del prezzo del
            diamante hanno cambiato la giurisprudenza.
          </p>

          {/* PAGINAZIONE */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setPage((prev) => (prev - 1 + pages) % pages)}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
            >
              ←
            </button>

            <div className="text-sm text-slate-400">
              {page + 1} / {pages}
            </div>

            <button
              onClick={() => setPage((prev) => (prev + 1) % pages)}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
