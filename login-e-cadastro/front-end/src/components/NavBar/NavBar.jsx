import './NavBar.css'

function NavBar() {
    return (
        <header>
            <nav>
                <div className='logo-container'>
                    <p>WVT_System</p>
                </div>

                <div className='links-nav'>
                    <a href="#">Contato</a>
                    <a href="#">Suporte</a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
