import Header from './components/Header'
import Hero from './components/Hero'
import TrustPanel from './components/TrustPanel'
import Services from './components/Services'
import EstimateCalculator from './components/EstimateCalculator'
import Testimonials from './components/Testimonials'
import HoursContact from './components/HoursContact'
import Footer from './components/Footer'
import StickyCallButton from './components/StickyCallButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustPanel />
        <Services />
        <EstimateCalculator />
        <Testimonials />
        <HoursContact />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  )
}
