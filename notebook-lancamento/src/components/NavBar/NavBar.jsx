import Button from '../../ui/Button/Button'
import './NavBar.css'

function NavBar() {
    return (
        <header>
            <div className="text-header">
                <p><span>XP</span> X-PRO Vision 15</p>
            </div>

            <div className='button-nav'><Button text='Comprar agora'/></div>
        </header>
    )
}

export default NavBar
