import TemplateSection from '../TemplateSection/TemplateSection'
import './ContactSection.css'

function ContactSection() {
    return (
        <TemplateSection className='contact-section'>
            <h2>CONTATO:</h2>

            <div class="contact-container">
                <div class="contact-info">
                    <p> Rua fulano de tal, 989 - Centro</p>
                    <p> email@gmail.com</p>
                    <p>(55) 9999-9999</p>
                    <p> Segunda - Sexta: 9:00 AM - 5:00 PM</p>
                    <p> Sábado: 10:00 AM - 3:00 PM</p>
                    <p> Domingo: Closed</p>
                </div>

                <form class="contact-form">
                    <input type="text" placeholder="Your name" required />
                    <input type="email" placeholder="Your email" required />
                    <textarea placeholder="Your message" rows="5" required></textarea>
                    <div class="button-form-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </TemplateSection>
    )
}

export default ContactSection
