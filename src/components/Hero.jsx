import { useEffect, useState } from "react";

const slides = [
  {
    tag: "Consulenza patrimoniale",
    title: "Tiziano Dall’Omo",
    text: "Economista, analista finanziario e collezionista d'arte.",
  },
  {
    tag: "Gestione e protezione del patrimonio",
    title: "Esperienza internazionale",
    text: "Dopo decenni nel campo dei preziosi e in incarichi prestigiosi per brand mondiali, oggi offre consulenze in tutto il mondo.",
  },
  {
    tag: "Metodo professionale",
    title: "Esperienza, riservatezza, competenza",
    text: "Un lavoro costruito su precisione, continuità del rapporto e capacità di operare nei contesti più delicati.",
  },
];

const stats = [
  { value: "1964", label: "anno di nascita" },
  { value: "30+", label: "anni di esperienza" },
  { value: "globale", label: "attività internazionale" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="section-shell overflow-hidden">
      <div className="grid min-h-[76vh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-7 py-10 md:px-12 xl:px-16">
          <p className="blue-label">{slide.tag}</p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100 md:text-2xl">
            {slide.text}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
            La sua storia accademica è lunga e piena di titoli di studio,
            compresa una Licenza in Teologia biblica. Molte persone si rivolgono a lui per le questioni più delicate.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contatti"
              className="rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-400/18"
            >
              Contatti
            </a>
            <a
              href="#kindle"
              className="rounded-2xl border border-slate-600/70 bg-slate-800/70 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
            >
              Libri Kindle
            </a>
            <a
              href="#quadri"
              className="rounded-2xl border border-slate-600/70 bg-slate-800/70 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
            >
              Quadri
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center border-t border-slate-700/60 lg:border-l lg:border-t-0 p-8 md:p-10 xl:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.06),transparent_35%,rgba(148,163,184,0.08))]" />
          <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-slate-600/70 bg-slate-950/80 shadow-2xl">
            <div className="relative aspect-[4/5]">
              <img
                src="/tiziano.png"
                alt="Tiziano Dall’Omo"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-40">
            <svg viewBox="0 0 500 100" className="w-full h-full">
              <polyline
                fill="none"
                stroke="rgb(56 189 248)"
                strokeWidth="2"
                points="0,80 50,60 100,70 150,40 200,50 250,20 300,35 350,10 400,30 450,15 500,25"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/60 bg-slate-950/70 px-7 py-6 md:px-12 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-semibold text-white">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  active === index ? "w-8 bg-sky-300" : "w-2 bg-slate-500/70"
                }`}
                aria-label={`Vai alla slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-40">
            <svg viewBox="0 0 500 100" className="w-full h-full">
              <polyline
                fill="none"
                stroke="rgb(56 189 248)"
                strokeWidth="2"
                points="0,80 50,60 100,70 150,40 200,50 250,20 300,35 350,10 400,30 450,15 500,25"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
