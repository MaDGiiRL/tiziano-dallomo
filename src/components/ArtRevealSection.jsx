import { useState } from "react";
import { ChevronDown, Palette } from "lucide-react";
import ArtSection from "./ArtSection";

export default function ArtRevealSection({ paintings }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group w-full overflow-hidden rounded-[32px] border border-slate-700/60 bg-[linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.95),rgba(30,58,138,0.20))] p-6 text-left transition duration-300 hover:border-sky-400/30 md:p-8 xl:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/80">
              <Palette className="h-6 w-6 text-sky-300" />
            </div>

            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Collezione artistica
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Opere pittoriche
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-[15px]">
                Una sezione dedicata alla collezione artistica personale. La
                galleria resta nascosta fino a quando si desidera visualizzarla.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-center">
            <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-sky-200">
              {open ? "Chiudi sezione" : "Visualizza opere"}
            </span>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/80">
              <ChevronDown
                className={`h-5 w-5 text-sky-300 transition duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "mt-8 max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ArtSection paintings={paintings} />
      </div>
    </section>
  );
}
