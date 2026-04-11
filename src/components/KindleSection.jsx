import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const kindleProfileUrl =
  "https://www.amazon.it/stores/Tiziano-DallOmo/author/B0GJDNBF4S?ref=ap_rdr&shoppingPortalEnabled=true";

export default function KindleSection({ books }) {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map(
    (offset) => books[(start + offset) % books.length],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % books.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [books.length]);

  return (
    <section className="mt-10 rounded-[28px] border border-slate-700/60 bg-slate-900/60 p-6 md:p-8 xl:p-10">
      <SectionTitle
        eyebrow="Amazon Kindle"
        title="Titoli disponibili in edizione digitale"
      />

      {/* BANNER */}
      <a
        href={kindleProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block overflow-hidden rounded-[28px] border border-slate-700/60 bg-[linear-gradient(135deg,rgba(2,6,23,0.95),rgba(15,23,42,0.92),rgba(12,74,110,0.22))] transition duration-300 hover:border-sky-400/30"
      >
        <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* SINISTRA */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/90">
                <svg
                  viewBox="0 0 120 40"
                  className="h-7 w-auto"
                  aria-hidden="true"
                >
                  <text
                    x="0"
                    y="25"
                    fill="white"
                    fontSize="18"
                    fontFamily="Arial, sans-serif"
                  >
                    amazon
                  </text>
                  <path
                    d="M5 30 Q40 40 75 28"
                    stroke="#FF9900"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="70"
                    y="25"
                    fill="#FF9900"
                    fontSize="18"
                    fontFamily="Arial, sans-serif"
                  >
                    kindle
                  </text>
                </svg>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  Amazon Kindle
                </div>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Libri disponibili online
                </h3>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-[15px]">
              Consulta i titoli di Tiziano Dall’Omo disponibili in formato
              digitale su Amazon Kindle, con accesso diretto alla pagina autore.
            </p>
          </div>

          {/* DESTRA */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-sky-200">
              Kindle Edition
            </span>

            <div className="inline-flex items-center gap-2 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-400/20">
              Vai su Amazon
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </a>

      {/* LIBRI */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((book, index) => (
          <a
            key={`${book}-${index}`}
            href={kindleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[24px] border border-slate-700/60 bg-slate-950/65 p-5 transition duration-300 hover:border-sky-400/30 hover:bg-slate-900"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/90">
                <BookOpen className="h-5 w-5 text-sky-300" />
              </div>

              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Kindle
                </div>
                <div className="mt-2 text-[15px] leading-7 text-slate-100 transition group-hover:text-white">
                  {book}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* NAVIGAZIONE */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => setStart(index)}
              className={`h-2 rounded-full transition-all ${
                index === start ? "w-8 bg-sky-300" : "w-2 bg-slate-500/70"
              }`}
              aria-label={`Vai al libro ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setStart((prev) => (prev - 1 + books.length) % books.length)
            }
            className="inline-flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/70 p-2 text-slate-300 transition hover:bg-slate-800"
            aria-label="Precedente"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <a
            href={kindleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700/60 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400/30 hover:bg-slate-800"
          >
            Scopri tutti i titoli
          </a>

          <button
            onClick={() => setStart((prev) => (prev + 1) % books.length)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/70 p-2 text-slate-300 transition hover:bg-slate-800"
            aria-label="Successivo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
