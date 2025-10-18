import './NavBar.css'
import { FaChartBar } from 'react-icons/fa'

function NavBar() {
    return (
        <header>
            <div className="text-header">
                <div className='title'>
                    <FaChartBar/>
                    <h1>WVT <span>Control</span></h1>
                </div>
                <h2>Painel de Gestão Financeira Inteligente</h2>
                <p>Acompanhe o desempenho financeiro da sua empresa de tecnologia em tempo real e tome decisões baseadas em dados.</p>
            </div>
        </header>
    )
}

export default NavBar
