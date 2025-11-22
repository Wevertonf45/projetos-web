import CardTestimonials from "@/components/ui/CardTestimonials/CardTestimonials";
import Section from "../ui/Section/Section";
import './TestimonialSection.css'

export default function TestimonialsSection() {
    return (
        <Section id="testimonials-section">
            <div className="text-testi-container">
                <h2><span>350+</span> clientes satisfeitas</h2>
                <p>Veja o que nossas clientes dizem sobre nós</p>
            </div>

            <div className="cards-testi-container">
                <CardTestimonials
                    text="Estava nervosa com a maquiagem do meu casamento, mas o resultado foi simplesmente perfeito! Me senti a mulher mais linda do mundo. A equipe é extremamente profissional e carinhosa."
                    name="Ana Carolina"
                    role="Maquiagem de Noiva"
                />
                <CardTestimonials
                    text="Já fiz maquiagem várias vezes para eventos e nunca tinha ficado tão satisfeita! A durabilidade é incrível e os produtos são de altíssima qualidade. Super recomendo!"
                    name="Juliana Martins"
                    role="Maquiagem Social"
                />
                <CardTestimonials
                    text="Fiz maquiagem para um ensaio fotográfico e fiquei impressionada com o resultado nas fotos. A maquiagem valorizou todos os meus traços e ficou impecável nas imagens."
                    name="Mariana Silva"
                    role="Ensaio Fotográfico"
                />
            </div>
        </Section>
    );
}
