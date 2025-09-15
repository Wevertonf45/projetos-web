import { produtos } from '../../data/produtos'
import ProductCard from "../ProductCard/ProductCard"
import './Section.css'

function Section({ comprar, subtotal, total }) {
  return (
    <section>
      <h2>Nosso Menu</h2>
      <div className="cards-container">
        {produtos.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            value={item.value}
            onComprar={() => comprar(item.value)}
          />
        ))}
      </div>
    </section>
  )
}

export default Section