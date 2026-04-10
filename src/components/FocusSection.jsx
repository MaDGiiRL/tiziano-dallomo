import SectionTitle from './SectionTitle'

export default function FocusSection({ items }) {
  return (
    <section id="valori" className="mt-10">
      <SectionTitle
        eyebrow="Punti focali"
        title="Esperienza, riservatezza e competenza"
        description="Tre elementi che definiscono il suo approccio professionale."
      />

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {items.map((point) => (
          <div
            key={point.title}
            className="rounded-[28px] border border-slate-700/60 bg-slate-900/55 p-7 md:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold text-white">{point.title}</h3>
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-200">
                {point.short}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
