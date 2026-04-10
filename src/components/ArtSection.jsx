import { useEffect, useState } from "react";
import Panel from "./Panel";
import SectionTitle from "./SectionTitle";

const ITEMS_PER_PAGE = 6;

export default function ArtSection({ literaryWorks, paintings }) {
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
    <>
      <section className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Panel title="Opere letterarie">
          <div className="grid gap-3">
            {literaryWorks.map((work) => (
              <div
                key={work}
                className="rounded-[18px] border border-slate-700/60 bg-slate-950/50 px-4 py-4 text-slate-200"
              >
                {work}
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Opere pittoriche">
          <p className="text-sm leading-7 text-slate-300">
            La sua esperienza pittorica nasce da bambino e concentra il lavoro
            su un tema unico, il diavolo, per dare rappresentazione a paure e
            blocchi ancestrali.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            L’accezione deriva dal verbo greco διαβαλλω, che significa “mettersi
            per traverso”. Quando dipinge, vive un’esperienza fisica intensa che
            sente come espressione di sé e regressione all’infanzia.
          </p>
        </Panel>
      </section>

      <section id="quadri" className="mt-10 section-shell p-7 md:p-10">
        <SectionTitle
          eyebrow="Esposizione dei quadri"
          title="Una galleria dedicata alla produzione pittorica"
          description="Le immagini vanno inserite nella cartella public/opere come img_1.png, img_2.png e così via."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* OPERA PRINCIPALE */}
          <div className="overflow-hidden rounded-[28px] border border-slate-700/60 bg-slate-950/60 p-3">
            <div className="flex h-[520px] items-center justify-center rounded-[22px] bg-slate-950">
              <img
                src={activePainting.image}
                alt={activePainting.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* COLONNA DESTRA */}
          <div className="flex flex-col justify-between rounded-[28px] border border-slate-700/60 bg-slate-950/50 p-6">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Opera in evidenza
              </div>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                {activePainting.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Rotazione automatica delle opere per una visione ordinata e
                progressiva.
              </p>
            </div>

            {/* MINIATURE SIMMETRICHE */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {visiblePaintings.map((painting, index) => {
                const realIndex = page * ITEMS_PER_PAGE + index;

                return (
                  <button
                    key={painting.image}
                    onClick={() => setActive(realIndex)}
                    className={`overflow-hidden rounded-2xl border p-2 transition ${
                      active === realIndex
                        ? "border-sky-300 bg-slate-900"
                        : "border-slate-700 bg-slate-950/80"
                    }`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-xl bg-slate-950">
                      <img
                        src={painting.image}
                        alt={painting.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* PAGINAZIONE */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() =>
                  setPage((prev) => (prev - 1 + totalPages) % totalPages)
                }
                className="rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                ←
              </button>

              <div className="text-sm text-slate-400">
                {page + 1} / {totalPages}
              </div>

              <button
                onClick={() => setPage((prev) => (prev + 1) % totalPages)}
                className="rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
