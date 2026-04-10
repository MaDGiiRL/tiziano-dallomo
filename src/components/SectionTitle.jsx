export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        {eyebrow ? <p className="blue-label">{eyebrow}</p> : null}
        <h2 className="mt-2 section-title">{title}</h2>
      </div>
      {description ? <p className="section-copy max-w-3xl lg:justify-self-end">{description}</p> : null}
    </div>
  )
}
