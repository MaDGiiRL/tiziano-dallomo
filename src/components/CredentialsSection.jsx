import { useState } from 'react'

export default function CredentialsSection({ awards, appointments }) {
  const [tab, setTab] = useState('awards')
  const current = tab === 'awards' ? awards : appointments

  return (
    <section className="mt-10 section-shell p-7 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="blue-label">Riconoscimenti e incarichi</p>
          <h2 className="mt-2 section-title">Premi, cataloghi e appartenenze</h2>
        </div>

        <div className="flex rounded-2xl border border-white/10 bg-slate-950/50 p-1">
          <button
            onClick={() => setTab('awards')}
            className={`rounded-2xl px-4 py-2 text-sm transition ${
              tab === 'awards' ? 'bg-white/10 text-white' : 'text-slate-400'
            }`}
          >
            Premi
          </button>
          <button
            onClick={() => setTab('appointments')}
            className={`rounded-2xl px-4 py-2 text-sm transition ${
              tab === 'appointments' ? 'bg-white/10 text-white' : 'text-slate-400'
            }`}
          >
            Incarichi
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {current.map((item) => (
          <div key={item} className="rounded-[22px] border border-white/10 bg-slate-950/50 px-5 py-5 text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
