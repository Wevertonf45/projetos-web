import './CatalogSection.css'
import { products } from '../../data/Products.js'
import Button from '../Button/Button.jsx'

function CatalogSection() {
    return (
        <section className='catalog-section'>
            <div className="text-conatiner">
                <h2>Nosso Catálogo</h2>
            </div>

            <div className="products-container">
                {products.map((iten, index) => (
                    <div className='card' key={index}>
                        <div className='img'>
                            <img src={iten.img} alt="camiseta-hello-world" />
                        </div>

                        <div className='card-text'>
                            <div className='title'>
                                {iten.title}
                            </div>

                            <div className='desc'>
                                {iten.desc}
                            </div>

                            <div className='price-container'>
                                <div className='price'>R$
                                    <span className='value'>{iten.price.toFixed(2)}</span>
                                </div>
                                <Button text='🛒 Adicionar' />
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default CatalogSection
