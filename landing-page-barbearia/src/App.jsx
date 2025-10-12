import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'
import Gallery from './components/GallerySection/GallerySection'
import HeroSection from './components/HeroSection/HeroSection'
import LocationSection from './components/LocationSection/LocationSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TestimonialsSection from './components/TestimonialSection/TestimonialSection'

function App() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
