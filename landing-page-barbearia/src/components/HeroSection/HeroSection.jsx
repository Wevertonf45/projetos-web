import Button from '../ui/Button/Button'
import Section from '../ui/Section/Section'
import './HeroSection.css'

function HeroSection() {
    return (
        <Section className='hero-section'>
            <div className="text-hero-container">
                <h1>Transforme seu visual com <span className='span-hero'>estilo e personalidade</span></h1>
                <h2>Na Corte & Arte, cada corte é uma obra única — feita sob medida pra realçar sua personalidade.</h2>
            </div>

            <Button text='AGENDAR MEU HORÁRIO AGORA'/>
        </Section>
    )
}

export default HeroSection
