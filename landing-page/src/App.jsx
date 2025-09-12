import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </>
  )
}

export default App


