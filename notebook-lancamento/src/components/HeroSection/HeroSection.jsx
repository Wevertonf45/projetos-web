import Section from '../../ui/Section/Section'
import './HeroSection.css'
import laptop from '../../assets/hero-laptop.jpg'
import Button from '../../ui/Button/Button'

function HeroSection() {
    return (
        <Section className='hero-section'>
            <div className='content'>
                <div className="text-hero-container">
                    <div className='ttl1'>NOVO LANÇAMENTO</div>
                    <h1>Poder e Performance em <span>Suas Mãos</span></h1>
                    <h2>O novo X-PRO Vision 15 redefine o que significa ser rápido.</h2>
                    <p>Um notebook projetado para quem exige velocidade, eficiência e design premium. Seja para criar, jogar ou trabalhar: o X-PRO Vision 15 entrega potência sem limites.</p>
                </div>
                <div className="img-hero-container">
                    <img src={laptop} alt="hero-laptop" />
                </div>
            </div>

            <div className="button-container-hero">
                <Button id='btn1' text='Garanta o seu agora' />
                <Button id='btn2' text='Ver Especificações' />
            </div>
        </Section>
    )
}

export default HeroSection
