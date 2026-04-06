import { About } from './components/About.jsx'
import { Amenities } from './components/Amenities.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Grain } from './components/Grain.jsx'
import { Hero } from './components/Hero.jsx'
import { Location } from './components/Location.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Preloader } from './components/Preloader.jsx'
import { QuoteBreak } from './components/QuoteBreak.jsx'
import { Reviews } from './components/Reviews.jsx'
import { Rooms } from './components/Rooms.jsx'
import { ScrollProgressBar } from './components/ui/ScrollProgressBar.jsx'
import { SectionDivider } from './components/ui/SectionDivider.jsx'
import WhatsAppButton from './components/ui/WhatsAppButton.jsx'
import { useI18n } from './context/LanguageContext.jsx'
import { useLenis } from './hooks/useLenis.js'

function AppContent() {
  useLenis()
  const { locale } = useI18n()

  return (
    <>
      <Grain />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <QuoteBreak />
        <SectionDivider />
        <Rooms />
        <SectionDivider />
        <Amenities />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Location />
        <SectionDivider />
        <Reviews key={locale} />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <Preloader>
      <AppContent />
    </Preloader>
  )
}
