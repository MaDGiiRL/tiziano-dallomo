import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section
      id="contatti"
      className="mt-10 mb-6 rounded-[28px] border border-slate-700/60 bg-slate-900/55 p-7 md:p-10"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* LEFT */}
        <div>
          <p className="blue-label">Contatti</p>

          <h2 className="mt-2 section-title tracking-tight">
            Riferimenti diretti
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Per richieste di contatto e consulenza.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4 sm:grid-cols-2">
          <ContactCard
            label="Email"
            value="dott.tizianodallomo@gmail.com"
            href="mailto:dott.tizianodallomo@gmail.com"
          />

          <ContactCard
            label="Cellulare"
            value="3386123570"
            href="tel:+393386123570"
          />

          <ContactCard
            label="LinkedIn"
            value="Profilo professionale"
            href="https://www.linkedin.com/in/tiziano-dall-omo-445b5223/"
          />

   
        </div>
      </div>
    </section>
  );
}
