export default function ContactCard({ label, value, href }) {
  const content = (
    <div className="rounded-[1.5rem] border border-slate-700/60 bg-slate-950/60 p-5 transition hover:bg-slate-900/80">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</div>
      <div className="mt-2 text-base text-slate-50 break-all">{value}</div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}
