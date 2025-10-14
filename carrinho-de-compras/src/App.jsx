import './App.css'
import CatalogSection from './components/CatalogSection/CatalogSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <NavBar />
      <HeroSection />
      <CatalogSection />
      <Footer/>
    </CartProvider>
  )
}

export default App
