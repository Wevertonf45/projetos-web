import { Table } from 'lucide-react'
import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import Section5 from './components/Section5/Section5'
import TableSection from './components/TableSection/TableSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import Footer from './components/Footer/Footer'
import CTASection from './components/CTASection/CTASection'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <Section5 />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
