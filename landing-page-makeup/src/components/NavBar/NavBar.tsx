import Link from "next/link"
import { links } from '@/data/linksData'
import Lnk from "../ui/Lnk/Lnk"
import Botao from "../ui/Botao/Botao"
import './NavBar.css'

function NavBar() {
    return (
        <header>
            <div className="logo-container">
                <Link href='/'>Studio <span>Beauté</span></Link>
            </div>

            <nav className="navbar">
                {links.map((item, index) => (
                    <Lnk
                        key={index}
                        url={item.url}
                        text={item.text}
                    />
                ))}
            </nav>

            <div className="button-container">
                <Botao text='Agendar Horário'/>
            </div>
        </header>
    )
}

export default NavBar
