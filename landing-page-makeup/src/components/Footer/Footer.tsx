import "./Footer.css";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-title">
                        Studio <span>Beauté</span>
                    </h2>
                    <p>Transformando beleza natural em arte desde 2014.</p>
                </div>

                <div className="footer-section">
                    <h3>Contato</h3>
                    <p>(11) 99999-9999</p>
                    <p>contato@studiobeaute.com.br</p>
                    <p>Rua das Flores, 123 - São Paulo, SP</p>
                </div>

                <div className="footer-section">
                    <h3>Redes Sociais</h3>
                    <div className="social-icons">
                        <a href="#"> <FaInstagram /> </a>
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaEnvelope/></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Weverton Santos. Todos os direitos reservados.
            </div>
        </footer>
    );
}
