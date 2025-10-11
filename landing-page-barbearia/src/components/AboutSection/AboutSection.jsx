import Section from "../ui/Section/Section"
import './AboutSection.css'

function AboutSection() {
    return (
        <Section className='about-section'>
            <div className="text-container-about">
                <h2>Onde o estilo encontra a <span>excelência</span></h2>
                <p>A Corte & Arte nasceu da paixão por transformar a aparência masculina em uma verdadeira expressão de estilo e personalidade. Cada cliente é único, e cada corte é pensado especialmente para realçar suas características.</p>
                <p>Combinamos técnicas modernas com a tradição da barbearia clássica, oferecendo uma experiência premium onde você se sente valorizado do início ao fim.</p>
            </div>
        </Section>
    )
}

export default AboutSection
