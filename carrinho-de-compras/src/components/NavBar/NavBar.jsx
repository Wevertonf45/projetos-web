import './NavBar.css'

function NavBar () {
  return (
    <nav>
      <div class="logo-container">
        <a href="# ">WVT_Logo</a>
      </div>

      <div class="links-container">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Produtos</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>
      </div>

      <div class="button-container">
        <button>Conectar</button>
      </div>
    </nav>
  )
}

export default NavBar