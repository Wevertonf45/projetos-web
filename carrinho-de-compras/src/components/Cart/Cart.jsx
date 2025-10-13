import Button from '../Button/Button'
import './Cart.css'

function Cart({ onClose }) {
    return (
        <div className='cart-modal'>
            <Button text='❌ fechar' onClick={onClose} />
        </div>
    )
}

export default Cart
