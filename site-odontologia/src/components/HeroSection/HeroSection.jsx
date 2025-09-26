import TemplateSection from '../TemplateSection/TemplateSection'
import ImgHero from '../../assets/img-hero.jpg'
import './HeroSection.css'
import './MediaScreenHero.css'
import Button from '../Button/Button'

function HeroSection() {
  return (
    <TemplateSection className='hero-section'>
      <div className="info-container-hero">
        <h1>Dra. Carla Santos</h1>
        <h2>ODONTOLOGIA GERAL E ESTÉTICA</h2>
        <p>Por mais de uma década, a Dra. Santos tem oferecido atendimento de alta qualidade a milhares de pacientes que podem atestar seu foco, diligência e genuína paixão pela odontologia.</p>
        <Button text='Ver serviços' className='button-hero'/>
      </div>

      <div className="img-hero-container">
        <img src={ImgHero} alt="Dra Carla Santos" />
      </div>

    </TemplateSection>
  )
}

export default HeroSection
