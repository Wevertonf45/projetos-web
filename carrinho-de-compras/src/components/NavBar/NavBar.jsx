import './NavBar.css'

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
      </nav>
    </header>
  )
}

export default NavBar