import SectionTitle from "./SectionTitle";
import { User, GraduationCap, Briefcase, ShieldCheck } from "lucide-react";

const getIcon = (title) => {
  switch (title.toLowerCase()) {
    case "profilo":
      return User;
    case "formazione":
      return GraduationCap;
    case "percorso":
      return Briefcase;
    case "clienti":
      return ShieldCheck;
    default:
      return User;
  }
};

export default function ProfileHighlights({ items }) {
  return (
    <section className="mt-10">
      <SectionTitle
        eyebrow="Profilo"
        title="Un percorso professionale costruito tra finanza, preziosi e ricerca"
      />

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = getIcon(item.title);

          return (
            <article
              key={item.title}
              className="group rounded-[28px] border border-slate-700/60 bg-slate-900/55 p-6 transition duration-300 hover:border-sky-400/30 hover:bg-slate-900/75"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/80">
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>

                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Sezione
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/20 via-slate-600/40 to-transparent" />

              <p className="mt-6 text-[15px] leading-7 text-slate-300">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
