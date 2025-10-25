import Section from '../../ui/Section/Section'
import './TestimonialsSection.css'
import { FaStar } from "react-icons/fa";

function TestimonialsSection() {
    const reviews = [
        {
            text: `"Rápido, silencioso e leve. O melhor investimento que fiz!"`,
            name: "Marcos Andrade",
            role: "Desenvolvedor",
        },
        {
            text: `"Uso para edição de vídeo e não trava nunca. Incrível."`,
            name: "Luana Costa",
            role: "Editora de Vídeo",
        },
        {
            text: `"A tela e o desempenho são perfeitos para design. Recomendo!"`,
            name: "Rafael Santos",
            role: "Designer Gráfico",
        },
    ];

    return (
        <Section className='testimonials-section'>
            <div className="testimonials-header">
                <h2>Quem já comprou <span>recomenda!</span></h2>
            </div>

            <div className="testimonials-container">
                {reviews.map((review, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="star" />
                            ))}
                        </div>
                        <p className="testimonial-text">{review.text}</p>
                        <hr />
                        <div className="testimonial-author">
                            <strong>{review.name}</strong>
                            <span>{review.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default TestimonialsSection
