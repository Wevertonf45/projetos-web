import { produtos } from '../../data/produtos'
import ProductCard from "../ProductCard/ProductCard"
import Resume from '../ResumeCard/Resume'
import './section.css'

function Section({ comprar, subtotal, total }) {
  return (
    <section>
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

      <div className="resume-container">
        <Resume subtotal={subtotal} total={total} />
      </div>
    </section>
  )
}

export default Section