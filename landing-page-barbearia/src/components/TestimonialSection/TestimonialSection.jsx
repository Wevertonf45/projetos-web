import './TestimonialSection.css'
import TestimonialCard from '../ui/Cards/TestimonialCard/TestimonialCard'
import Section from '../ui/Section/Section'

function TestimonialsSection() {
    return (
        <Section className="testimonials-section">
            <h2 className="section-title">O que nossos <span>clientes dizem</span></h2>

            <div className="testimonials-container">
                <TestimonialCard
                    text="Melhor barbearia da cidade! Atendimento top e corte impecável!"
                    author="Rafael S."
                />
                <TestimonialCard
                    text="Aqui é onde sempre volto. Cada corte parece feito sob medida."
                    author="Anderson M."
                />
                <TestimonialCard
                    text="Profissionalismo e qualidade excepcionais. Recomendo demais!"
                    author="Carlos D."
                />
            </div>
        </Section>
    )
}

export default TestimonialsSection
