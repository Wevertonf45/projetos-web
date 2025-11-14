import './CTASection.css'
import Section from '../ui/Section/Section'
import Button from '../ui/Button/Button'

function CTASection() {
  return (
    <Section className='cta-section'>
      <div className="cta-text">
        <h2>Pronto pra <span>transformar seu visual?</span></h2>
        <p> Reserve seu horário e venha descobrir por que a Corte & Arte é referência em estilo e autenticidade.</p>
      </div>

      <Button className='hero-button' onClick={() => window.open('https://wa.me/000000000000', '_blank')} text='AGENDAR AGORA' />
    </Section>
  )
}

export default CTASection
