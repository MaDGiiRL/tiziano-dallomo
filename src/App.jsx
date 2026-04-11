import Hero from "./components/Hero";
import ProfileHighlights from "./components/ProfileHighlights";
import FocusSection from "./components/FocusSection";
import PublicationsSection from "./components/PublicationsSection";
import KindleSection from "./components/KindleSection";
import ArtRevealSection from "./components/ArtRevealSection";
import CredentialsSection from "./components/CredentialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import {
  focalPoints,
  highlightCards,
  mainBooks,
  kindleBooks,
  awards,
  appointments,
  paintings,
} from "./components/data";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-neutral-100 antialiased">
      {/* 🔥 BACKGROUND DINAMICO */}
      <div className="pointer-events-none absolute inset-0">
        {/* GRADIENT BASE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(71,85,105,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#08111f_40%,#0a1424_100%)]" />

        {/* GRID FINANZA */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

        {/* GLOW ANIMATO SINISTRA */}
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-3xl animate-floatSlow" />

        {/* GLOW ANIMATO DESTRA */}
        <div className="absolute right-[-8%] top-[30%] h-[360px] w-[360px] rounded-full bg-cyan-300/10 blur-3xl animate-floatSlow delay-2000" />

        {/* GLOW BOTTOM */}
        <div className="absolute bottom-[-12%] left-[20%] h-[320px] w-[320px] rounded-full bg-slate-400/10 blur-3xl animate-floatSlow delay-4000" />

        {/* LINEA FINANZIARIA */}
        <div className="absolute left-0 right-0 top-[120px] hidden opacity-25 lg:block">
          <svg viewBox="0 0 1440 280" className="h-[280px] w-full">
            <polyline
              fill="none"
              stroke="rgb(56 189 248)"
              strokeWidth="2"
              points="0,220 120,190 240,205 360,145 480,160 600,100 720,125 840,70 960,95 1080,60 1200,90 1320,40 1440,65"
            />
          </svg>
        </div>

        {/* LINEA SECONDARIA */}
        <div className="absolute bottom-[10%] left-0 right-0 hidden opacity-10 xl:block">
          <svg viewBox="0 0 1440 240" className="h-[240px] w-full">
            <polyline
              fill="none"
              stroke="rgb(148 163 184)"
              strokeWidth="1.5"
              points="0,170 140,150 280,160 420,120 560,135 700,110 840,130 980,95 1120,105 1260,80 1440,90"
            />
          </svg>
        </div>

        {/* VIGNETTATURA */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(2,6,23,0.65)_100%)]" />
      </div>

      {/* 🔥 CONTENUTO */}
      <div className="relative z-10">
        <main className="container-shell py-6 md:py-8">
          <Hero />
          <ProfileHighlights items={highlightCards} />
          <FocusSection items={focalPoints} />
          <PublicationsSection books={mainBooks} />
          <KindleSection books={kindleBooks} />
          <ArtRevealSection paintings={paintings} />
          <CredentialsSection awards={awards} appointments={appointments} />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
