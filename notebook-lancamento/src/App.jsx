import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
      </main>
    </>
  )
}

export default App
