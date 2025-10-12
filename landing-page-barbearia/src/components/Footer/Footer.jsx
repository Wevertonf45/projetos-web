import React from 'react'
import './Footer.css'
import { FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">WVT WEB DESENVOLVIMENTO</h2>
                <p className="footer-subtitle">Criação de sites e sistemas profissionais</p>

                <div className="footer-icons">
                    <a href="https://www.instagram.com/wvt_web_desenvolvimento/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                   
                    <a href="https://github.com/Wevertonf45/Wevertonf45" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer-copy">
                    © 2025 wvt_web_desenvolvimento – Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}

export default Footer
