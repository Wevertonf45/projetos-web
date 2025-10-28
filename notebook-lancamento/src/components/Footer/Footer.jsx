import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* LOGO E DESCRIÇÃO */}
                <div className="footer-section">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">XP</div>
                        <h3>X-PRO</h3>
                    </div>
                    <p>Notebooks premium para quem exige o melhor em desempenho e design.</p>
                </div>

                {/* SUPORTE */}
                <div className="footer-section">
                    <h4>Suporte</h4>
                    <ul>
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Garantia</a></li>
                        <li><a href="#">Política de Devolução</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div className="footer-section">
                    <h4>Contato</h4>
                    <ul className="footer-contact">
                        <li><FaEnvelope /> contato@xpro.com.br</li>
                        <li><FaPhoneAlt /> 0800 123 4567</li>
                        <li><FaMapMarkerAlt /> São Paulo, SP</li>
                    </ul>
                </div>

                {/* REDES SOCIAIS */}
                <div className="footer-section">
                    <h4>Redes Sociais</h4>
                    <div className="footer-social">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2025 Weverton_Santos. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
