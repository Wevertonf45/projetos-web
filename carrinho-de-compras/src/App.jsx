import './App.css'
import CatalogSection from './components/CatalogSection/CatalogSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <CatalogSection />
      <Footer/>
    </>
  )
}

export default App
