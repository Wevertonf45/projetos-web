import AboutSection from '../components/AboutSection/AboutSection'
import ContactSection from '../components/ContactSection/ContactSection'
import HeroSection from '../components/HeroSection/HeroSection'
import Section3 from '../components/Section3/Section3'
import Section4 from '../components/Section4/Section4'
import Section5 from '../components/Section5/Section5'
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection'
import './App.css'

function App() {

  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <Section3 />
        <Section4 />
        <Section5 />
        <TestimonialsSection/>
        <ContactSection />
      </main>
    </>
  )
}

export default App
