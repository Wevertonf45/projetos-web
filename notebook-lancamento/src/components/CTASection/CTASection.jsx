import "./CTASection.css";
import { FaTruck, FaShieldAlt } from "react-icons/fa";
import Section from "../../ui/Section/Section";
import Button from "../../ui/Button/Button";
import closed from "../../assets/laptop-closed.jpg";

function HeroSection() {
    return (
        <Section className="cta-section">
            <div className="cta-text-content">
                <div className="cta-header">
                    <h2>Leve o futuro <span>com você</span></h2>
                    <p className="hero-subtitle">O notebook que combina potência, design e tecnologia. Perfeito para profissionais exigentes,criadores e gamers.</p>
                </div>


                <div className="cta-benefits">
                    <div className="benefit">
                        <div><FaTruck /></div>
                        <div className="benefit-text">
                            <h3>Frete Grátis</h3>
                            <p>Para todo Brasil</p>
                        </div>
                    </div>

                    <div className="benefit">
                        <div><FaShieldAlt /></div>
                        <div className="benefit-text">
                            <h3>2 Anos de Garantia</h3>
                            <p>Cobertura completa</p>
                        </div>
                    </div>
                </div>

                <Button text="🛒 Garanta o seu agora com desconto!"/>
            </div>

            <div className="cta-image-content">
                <img src={closed} alt="closed-laptop" />
            </div>
        </Section>
    );
}

export default HeroSection;
