import Hero from './components/Hero'
import ProfileHighlights from './components/ProfileHighlights'
import FocusSection from './components/FocusSection'
import PublicationsSection from './components/PublicationsSection'
import KindleSection from './components/KindleSection'
import ArtSection from './components/ArtSection'
import CredentialsSection from './components/CredentialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import {
  focalPoints,
  highlightCards,
  mainBooks,
  kindleBooks,
  literaryWorks,
  awards,
  appointments,
  paintings,
} from './components/data'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-neutral-100 antialiased">
      <main className="container-shell relative py-6 md:py-8">
        <Hero />
        <ProfileHighlights items={highlightCards} />
        <FocusSection items={focalPoints} />
        <PublicationsSection books={mainBooks} />
        <KindleSection books={kindleBooks} />
        <ArtSection literaryWorks={literaryWorks} paintings={paintings} />
        <CredentialsSection awards={awards} appointments={appointments} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
