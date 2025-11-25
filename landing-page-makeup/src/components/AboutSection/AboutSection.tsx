import './AboutSection.css'
import Section from '../ui/Section/Section'

function AboutSection() {
    return (
        <Section id='about-section'>
            <div className="img-about-container">
                <img src="/salon-interior.jpg" alt="salon-interior" />
            </div>

            <div className="text-about-container">
                <h2>Especialistas em maquiagem que <span>elevam sua beleza natural</span></h2>
                <p>Com mais de 10 anos de experiência, nossa equipe é formada por profissionais apaixonados pela arte da maquiagem. Utilizamos técnicas avançadas e produtos premium para garantir que você se sinta confiante e deslumbrante.</p>
                <p>Cada cliente é única, e é por isso que personalizamos cada maquiagem para realçar seus traços naturais e combinar perfeitamente com o seu estilo e ocasião.</p>
                <hr />

                <div className='metrics'>
                    <div className='item'>
                        <p className='p1'>10+</p>
                        <p className='p2'>Anos de Experiência</p>
                    </div>
                    <div className='item'>
                        <p className='p1'>350+</p>
                        <p className='p2'>Clientes Felizes</p>
                    </div>
                    <div className='item'>
                        <p className='p1'>100%</p>
                        <p className='p2'>Satisfação</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutSection
