//Imports hooks
import { useCarrinho } from '../hooks/useCarrinho'

//Imports componentes
import NavBar from '../components/NavBar/NavBar'
import Section from '../components/Section/Section'

//Outros imports
import './App.css'

function App() {
  const { subtotal, total, comprar } = useCarrinho()

  return (
    <>
      <NavBar />

      <main>
        <Section comprar={comprar} subtotal={subtotal} total={total}/>
      </main>
    </>
  )
}

export default App