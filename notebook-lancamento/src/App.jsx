import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}

export default App
