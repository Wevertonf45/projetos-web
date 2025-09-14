import TemplateSection from '../TemplateSection/TemplateSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import './AboutSection.css'
import AboutCard from '../Cards/AboutCard';

function AboutSection() {
  return (
    <TemplateSection className='about-section'>
      <div className="text-container-about">
        <h2>Sobre meu trabalho</h2>
        <p>Na nossa clínica odontológica, acreditamos que um sorriso saudável transforma vidas. Unimos
          tecnologia de ponta, ambiente acolhedor e atendimento humanizado para garantir que cada paciente se
          sinta confiante e bem cuidado. Nossa filosofia é simples: tratar cada pessoa como única, oferecendo soluções
          personalizadas que unem saúde, estética e bem-estar. Com formação sólida, atualização constante e paixão pela
          odontologia, estamos preparados para atender desde procedimentos preventivos até os mais avançados, sempre com
          segurança e excelência. Escolher nossa clínica é investir não apenas em um sorriso bonito, mas em mais qualidade
          de vida e autoestima.</p>

        <div className='icon-container-about'>
          <FontAwesomeIcon icon={faTooth} color='white'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTooth} color='white'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTooth} color='white'></FontAwesomeIcon>
        </div>
      </div>

      <div className="card-container">
        <AboutCard
          title='PRÊMIOS E RECONHECIMENTOS'
          desc='Excelência Profissional Com formação sólida e constante atualização, oferecemos um atendimento baseado nas técnicas mais modernas da odontologia. Isso garante resultados de alta qualidade e procedimentos seguros, sempre pensados para promover a saúde e a estética do seu sorriso.'
        />

        <AboutCard 
        title='TREINAMENTOS E SEMINÁRIOS'
        desc='Nossos treinamentos e seminários são desenvolvidos com base em anos de prática e atualização constante, garantindo conteúdos relevantes e aplicáveis à realidade do mercado. Você aprende com quem realmente entende e já aplicou o que ensina.'
        />
      </div>
    </TemplateSection>
  )
}

export default AboutSection
