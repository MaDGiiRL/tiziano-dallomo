import SectionTitle from './SectionTitle'

export default function ProfileHighlights({ items }) {
  return (
    <section className="mt-10">
      <SectionTitle
        eyebrow="Profilo"
        title="Un percorso professionale costruito tra finanza, preziosi e ricerca"
        description="La presentazione usa soltanto i contenuti che hai fornito, organizzati in blocchi più leggibili."
      />

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="soft-panel p-6">
            <div className="text-lg font-semibold text-white">{item.title}</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
