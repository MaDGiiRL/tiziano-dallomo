import SectionTitle from "./SectionTitle";
import { BriefcaseBusiness, ShieldCheck, BrainCircuit } from "lucide-react";

const getIcon = (title) => {
  switch (title.toLowerCase()) {
    case "esperienza":
      return BriefcaseBusiness;
    case "riservatezza":
      return ShieldCheck;
    case "competenza":
      return BrainCircuit;
    default:
      return BriefcaseBusiness;
  }
};

export default function FocusSection({ items }) {
  return (
    <section id="valori" className="mt-10">
      <SectionTitle
        eyebrow="Punti focali"
        title="Esperienza, riservatezza e competenza"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((point) => {
          const Icon = getIcon(point.title);

          return (
            <article
              key={point.title}
              className="group flex h-full flex-col rounded-[28px] border border-slate-700/60 bg-slate-900/55 p-6 transition duration-300 hover:border-sky-400/25 hover:bg-slate-900/75 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/80">
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Focus
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {point.title}
                  </h3>

                  <span className="mt-3 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-sky-200">
                    {point.short}
                  </span>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/20 via-slate-600/40 to-transparent" />

              <p className="mt-6 text-sm leading-7 text-slate-300 md:text-[15px]">
                {point.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
