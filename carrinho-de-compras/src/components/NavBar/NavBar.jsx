import Button from '../Button/Button'
import { useState } from 'react'
import './NavBar.css'
import Cart from '../Cart/Cart'

function NavBar() {
    const [open, setOpen] = useState(false)

    const toggleCart = () => {
        setOpen(!open)
    }

    return (
        <header>
            <nav>
                <div className="logo-container">
                    <a href="#">WVT Shop</a>
                </div>
                <div className="links-container">
                    <a href="#">Catálogo</a>
                    <a href="#">Carrinho</a>
                    <a href="#">Contato</a>
                </div>

                <Button text='🛒 Carrinho' onClick={toggleCart} />

                {open && <Cart onClose={toggleCart} />}
            </nav>
        </header>
    )
}

export default NavBar