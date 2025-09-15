import TemplateSection from '../TemplateSection/TemplateSection'
import './Section3.css'
import Img3 from '../../assets/img-03.jpg'

function Section3() {
  return (
    <TemplateSection className='section3'>
      <div className="img-container-3">
        <img src={Img3} alt="img-01" />
      </div>

      <div className="text-container-3">
        <div className='text-3'>
          <h3>GERAL</h3>
          <p>Descubra nossos serviços essenciais de odontologia, pensados para cuidar da sua saúde bucal no dia a dia. Aqui você encontra qualidade, confiança e atendimento personalizado, garantindo um sorriso saudável e duradouro.</p>
        </div>

        <div className='text-3'>
          <h3>ESTÉTICA</h3>
          <p>Realce a beleza do seu sorriso com nossos tratamentos estéticos. Proporcionamos soluções modernas para deixar seus dentes mais brancos, alinhados e harmônicos, elevando sua autoestima e confiança em qualquer ocasião.</p>
        </div>

        <div className='text-3'>
          <h3>ORTODONTIA</h3>
          <p>Oferecemos tratamentos ortodônticos completos para alinhar seus dentes com conforto e eficiência. Seja com aparelhos tradicionais ou opções mais discretas, nossa missão é transformar seu sorriso e melhorar sua qualidade de vida.</p>
        </div>
      </div>
    </TemplateSection>
  )
}

export default Section3
