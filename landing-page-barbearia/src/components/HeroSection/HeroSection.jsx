import './HeroSection.css'
import Section from '../ui/Section/Section'
import Button from '../ui/Button/Button'

function HeroSection() {
    return (
        <Section className='hero-section'>
            <div className="text-hero-container">
                <h1>Transforme seu visual com <span className='sp001'>estilo e personalidade</span></h1>
                <h2>Na Corte & Arte, cada corte é uma obra única — feita sob medida pra realçar sua personalidade.</h2>
            </div>

            <Button className='hero-button' onClick={() => window.open('https://wa.me/000000000000', '_blank')} text='📅 AGENDAR MEU HORÁRIO AGORA'/>
        </Section>
    )
}

export default HeroSection
