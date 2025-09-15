import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <header>
      <nav>
        <div class="logo-container">
          <a href="#">WVT_Hamburgueria</a>
        </div>

        <div class="links-container">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Produtos</a>
          <a href="#">Serviços</a>
          <a href="#">Contatos</a>
        </div>

        <div className="cart-container">
          <span>0</span>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </div>
      </nav>
    </header>
  )
}

export default NavBar