import './Footer.css'
import { FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Por: Weverton_Santos</h2>
                <p className="footer-subtitle">Criação de sites, apps e sistemas profissionais</p>

                <div className="footer-icons">
                    <a href="https://www.instagram.com/wvt.dev/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                   
                    <a href="https://github.com/Wevertonf45/Wevertonf45" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer-copy">
                    © 2025 Weverton_Santos – Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}

export default Footer
