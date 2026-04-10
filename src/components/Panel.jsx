export default function Panel({ title, children, className = '' }) {
  return (
    <section className={`rounded-[28px] border border-white/10 bg-white/[0.04] p-7 md:p-8 ${className}`}>
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  )
}
