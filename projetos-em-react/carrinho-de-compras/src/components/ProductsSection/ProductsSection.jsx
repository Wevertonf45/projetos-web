//Imports de componentes e CSS`s
import Hamburguer from '../Cards/Hamburguer'
import Resume from '../Cards/Resume'
import './ProductsSection.css'

//Outros imports
import { Produtos } from '../../data/Produtos'


//Função principal
function ProductsSection() {

  //Conteúdo HTML
  return (
    <section>
      <div className='card-container-section'>
        {Produtos.map((item, index) => (<Hamburguer key={index} img={item.img} title={item.title} desc={item.desc} value={item.value} />))}
      </div>

      <div className="resume">
        <Resume />
      </div>
    </section>
  )
}

export default ProductsSection