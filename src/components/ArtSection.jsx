import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Expand,
  Grid3X3,
} from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function ArtSection({ paintings }) {
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % paintings.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [paintings.length]);

  const activePainting = paintings[active];
  const totalPages = Math.ceil(paintings.length / ITEMS_PER_PAGE);

  const visiblePaintings = paintings.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section
      id="quadri"
      className="mt-10 rounded-[32px] border border-slate-700/60 bg-slate-900/55 p-6 md:p-8 xl:p-10"
    >
      <SectionTitle
        eyebrow="Esposizione dei quadri"
        title="Una galleria dedicata alla produzione pittorica"
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        {/* OPERA PRINCIPALE */}
        <div className="overflow-hidden rounded-[30px] border border-slate-700/60 bg-slate-950/70 p-3">
          <div className="relative h-[360px] rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.65),rgba(2,6,23,1))] md:h-[480px] xl:h-[560px]">
            <img
              src={activePainting.image}
              alt={activePainting.title}
              className="absolute inset-0 h-full w-full p-4 object-contain"
            />
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="flex flex-col rounded-[30px] border border-slate-700/60 bg-slate-950/55 p-5 md:p-6">
          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-slate-400">
                <ImageIcon className="h-4 w-4 text-sky-300" />
                <span className="text-[11px] uppercase tracking-[0.22em]">
                  Opera in evidenza
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {activePainting.title}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/90">
              <Expand className="h-4 w-4 text-sky-300" />
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/20 via-slate-600/40 to-transparent" />

          {/* INFO */}
          <div className="mt-6 flex items-center gap-2 text-slate-400">
            <Grid3X3 className="h-4 w-4 text-sky-300" />
            <span className="text-sm">
              Selezione opere · Pagina {page + 1} di {totalPages}
            </span>
          </div>

          {/* MINIATURE */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-3">
            {visiblePaintings.map((painting, index) => {
              const realIndex = page * ITEMS_PER_PAGE + index;

              return (
                <button
                  key={painting.image}
                  onClick={() => setActive(realIndex)}
                  className={`group overflow-hidden rounded-2xl border p-2 transition ${
                    active === realIndex
                      ? "border-sky-300 bg-slate-900"
                      : "border-slate-700/70 bg-slate-950/80 hover:border-sky-400/30 hover:bg-slate-900/80"
                  }`}
                >
                  <div className="relative aspect-square rounded-xl bg-slate-950">
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="absolute inset-0 h-full w-full p-2 object-contain transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* NAV */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              onClick={() =>
                setPage((prev) => (prev - 1 + totalPages) % totalPages)
              }
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              <ChevronLeft className="h-4 w-4" />
              Prec.
            </button>

            <div className="text-sm text-slate-400">
              {page + 1} / {totalPages}
            </div>

            <button
              onClick={() => setPage((prev) => (prev + 1) % totalPages)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Succ.
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
