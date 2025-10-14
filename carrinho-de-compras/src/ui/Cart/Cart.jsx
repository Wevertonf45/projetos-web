import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Button from '../../ui/Button/Button'

function Cart({ onClose }) {
    const { cartItems, removeFromCart } = useContext(CartContext)

    return (
        <div className='cart-modal'>
            <h2>🛒 Seu Carrinho</h2>

            {cartItems.length === 0 ? (
                <p className='msg'>O carrinho está vazio.</p>
            ) : (
                <div className='cart-items'>
                    {cartItems.map(item => (
                        <div className='cart-item' key={item.id}>
                            <img
                                src={item.img}
                                alt={item.title}
                                className='cart-item-img'
                            />

                            <div className='cart-item-info'>
                                <h4>{item.title}</h4>
                                <p>Qtd: {item.quantity}</p>
                                <p>
                                    R$ {(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>

                            <Button
                                className='remove-btn'
                                text='remover'
                                onClick={() => removeFromCart(item.id)}
                            />
                        </div>
                    ))}
                </div>
            )}

            <Button className='close-btn' text='Fechar' onClick={onClose} />
        </div>
    )
}

export default Cart
