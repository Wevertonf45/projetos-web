import ImgHero from '../../assets/img-hero.jpeg'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className='section-hero'>
      <div className="text-container-hero">
        <h1>Sempre conectado</h1>

        <div className="button-container">
          <button>Saiba mais</button>
        </div>
      </div>

      <div className="img-container-hero">
        <img src={ImgHero} alt="foto-1" />
      </div>
    </section>
  )
}

export default HeroSection