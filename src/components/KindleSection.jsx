import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'

const kindleProfileUrl = 'https://www.amazon.it/stores/Tiziano-DallOmo/author/B0GJDNBF4S?ref=ap_rdr&shoppingPortalEnabled=true'

export default function KindleSection({ books }) {
  const [start, setStart] = useState(0)
  const visible = [0, 1, 2].map((offset) => books[(start + offset) % books.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % books.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [books.length])

  return (
    <section className="mt-10 rounded-[28px] border border-slate-700/60 bg-slate-900/60 p-7 md:p-10">
      <SectionTitle
        eyebrow="Amazon Kindle"
        title="Titoli disponibili in edizione digitale"
        description="Accesso diretto ai volumi disponibili su Amazon Kindle."
      />

      {/* 🔥 BANNER CON LOGO AMAZON KINDLE */}
      <a
        href={kindleProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block rounded-[28px] border border-slate-700/60 bg-slate-950/80 p-6 transition hover:border-sky-400/40 hover:bg-slate-900"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* LOGO + TESTO */}
          <div className="flex items-center gap-5">
            
            {/* LOGO AMAZON KINDLE */}
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700 bg-black">
              <svg viewBox="0 0 120 40" className="h-8 w-auto">
                <text x="0" y="25" fill="white" fontSize="18" fontFamily="Arial, sans-serif">
                  amazon
                </text>
                <path
                  d="M5 30 Q40 40 75 28"
                  stroke="#FF9900"
                  strokeWidth="2"
                  fill="none"
                />
                <text x="70" y="25" fill="#FF9900" fontSize="18" fontFamily="Arial, sans-serif">
                  kindle
                </text>
              </svg>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Amazon Kindle
              </div>

              <div className="mt-2 text-2xl font-semibold text-white">
                Libri disponibili online
              </div>

              <p className="mt-2 text-sm text-slate-300 max-w-md">
                Consulta i titoli di Tiziano Dall’Omo disponibili in formato digitale su Amazon Kindle.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-sky-200">
              Kindle Edition
            </div>

            <div className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm text-sky-100 transition hover:bg-sky-400/20">
              Vai su Amazon
            </div>
          </div>
        </div>
      </a>

      {/* LIBRI */}
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {visible.map((book, index) => (
          <a
            key={`${book}-${index}`}
            href={kindleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[24px] border border-slate-700/60 bg-slate-950/70 p-6 transition hover:border-sky-400/40 hover:bg-slate-900"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Kindle
            </div>

            <div className="mt-4 text-lg text-white">
              {book}
            </div>
          </a>
        ))}
      </div>

      {/* DOTS */}
      <div className="mt-6 flex gap-2">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setStart(index)}
            className={`h-2 rounded-full ${
              index === start ? 'w-8 bg-sky-300' : 'w-2 bg-slate-500'
            }`}
          />
        ))}
      </div>
    </section>
  )
}