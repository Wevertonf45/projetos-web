import './CatalogSection.css'
import { products } from '../../data/Products.js'
import Button from '../../ui/Button/Button.jsx'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext.jsx'

function CatalogSection() {
  const [showMessage, setShowMessage] = useState(false)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = (item) => {
    addToCart(item)
    setShowMessage(true)

    // Oculta a mensagem depois de 2 segundos
    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }

  return (
    <section className='catalog-section'>
      <div className="text-container">
        <h2>Nosso Catálogo</h2>
      </div>

      {/* Mensagem temporária */}
      {showMessage && (
        <div className='cart-message'>
          🛒 Item adicionado ao carrinho!
        </div>
      )}

      <div className="products-container">
        {products.map((item, index) => (
          <div className='card' key={index}>
            <div className='img'>
              <img src={item.img} alt={item.title} />
            </div>

            <div className='card-text'>
              <div className='title'>{item.title}</div>
              <div className='desc'>{item.desc}</div>

              <div className='price-container'>
                <div className='price'>
                  R$ <span className='value'>{item.price.toFixed(2)}</span>
                </div>
                <Button text='🛒 Adicionar' onClick={() => handleAddToCart(item)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CatalogSection
