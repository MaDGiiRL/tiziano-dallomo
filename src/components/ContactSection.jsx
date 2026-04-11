import ContactCard from "./ContactCard";
import { Mail, Phone, ShieldCheck } from "lucide-react";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.11H5.67V18H8.34V10.11ZM7 5.88A1.56 1.56 0 1 0 7 9a1.56 1.56 0 0 0 0-3.12ZM18.33 13.2c0-2.37-1.26-3.47-2.95-3.47a2.55 2.55 0 0 0-2.3 1.27v-1.09h-2.67c.03.72 0 7.09 0 7.09h2.67v-4.1c0-.22.02-.43.08-.59.18-.43.6-.88 1.3-.88.92 0 1.29.7 1.29 1.73V18h2.67Z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contatti"
      className="mt-10 mb-6 rounded-[32px] border border-slate-700/60 bg-slate-900/55 p-6 md:p-8 xl:p-10"
    >
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-sky-300" />
            <p className="blue-label">Contatti</p>
          </div>

          <h2 className="mt-3 section-title tracking-tight">
            Riferimenti diretti
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-[15px]">
            Per richieste di contatto e consulenza, con un’impostazione chiara,
            riservata e professionale.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-slate-700/60 bg-slate-950/55 p-1">
            <ContactCard
              label="Email"
              value="dott.tizianodallomo@gmail.com"
              href="mailto:dott.tizianodallomo@gmail.com"
              icon={Mail}
            />
          </div>

          <div className="rounded-[24px] border border-slate-700/60 bg-slate-950/55 p-1">
            <ContactCard
              label="Cellulare"
              value="3386123570"
              href="tel:+393386123570"
              icon={Phone}
            />
          </div>

          <div className="sm:col-span-2 rounded-[24px] border border-slate-700/60 bg-slate-950/55 p-1">
            <ContactCard
              label="LinkedIn"
              value="Visualizza il profilo professionale"
              href="https://www.linkedin.com/in/tiziano-dall-omo-445b5223/"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
