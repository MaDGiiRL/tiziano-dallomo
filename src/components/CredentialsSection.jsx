import { useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  ChevronRight,
  FolderKanban,
} from "lucide-react";

export default function CredentialsSection({ awards, appointments }) {
  const [tab, setTab] = useState("awards");
  const current = tab === "awards" ? awards : appointments;

  return (
    <section className="mt-10 rounded-[32px] border border-slate-700/60 bg-slate-900/55 p-6 md:p-8 xl:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FolderKanban className="h-4 w-4 text-sky-300" />
            <p className="blue-label">Riconoscimenti e incarichi</p>
          </div>

          <h2 className="mt-3 section-title tracking-tight">
            Premi, cataloghi e appartenenze
          </h2>
        </div>

        <div className="inline-flex w-full rounded-2xl border border-slate-700/60 bg-slate-950/60 p-1 sm:w-auto">
          <button
            onClick={() => setTab("awards")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm transition sm:flex-none ${
              tab === "awards"
                ? "bg-sky-400/10 text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Award className="h-4 w-4" />
            Premi
          </button>

          <button
            onClick={() => setTab("appointments")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm transition sm:flex-none ${
              tab === "appointments"
                ? "bg-sky-400/10 text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <BriefcaseBusiness className="h-4 w-4" />
            Incarichi
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {current.map((item, index) => (
          <article
            key={`${tab}-${index}`}
            className="group rounded-[24px] border border-slate-700/60 bg-slate-950/55 p-5 transition duration-300 hover:border-sky-400/25 hover:bg-slate-900/75"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/90">
                {tab === "awards" ? (
                  <Award className="h-4 w-4 text-sky-300" />
                ) : (
                  <BriefcaseBusiness className="h-4 w-4 text-sky-300" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {tab === "awards" ? "Riconoscimento" : "Incarico"}
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-200 md:text-[15px]">
                  {item}
                </p>
              </div>

              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-sky-300" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
