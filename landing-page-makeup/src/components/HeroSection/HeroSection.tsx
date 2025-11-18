import Botao from "../ui/Botao/Botao"
import Section from "../ui/Section/Section"
import './HeroSection.css'

function HeroSection() {
    return (
        <Section id="hero-section">
            <div className="text-hero-container">
                <h1>A Maquiagem Perfeita para <span>Realçar Sua Beleza</span></h1>
                <h2>Especialistas em maquiagem para festas, casamentos e eventos. Transforme sua beleza natural em arte.</h2>
            </div>

            <div className="button-hero-container">
                <Botao id="btn1" text='Agendar Agora'/>
                <Botao id="btn2" text='Ver Portfólio'/>
            </div>
        </Section>
    )
}

export default HeroSection
