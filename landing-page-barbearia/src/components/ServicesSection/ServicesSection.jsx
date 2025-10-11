import './ServicesSection.css'
import ServicesCard from '../ui/Cards/ServicesCard/ServicesCard'

// Ícones — pode usar Font Awesome, react-icons, SVGs etc.
import { FaCut, FaLayerGroup, FaStar } from 'react-icons/fa'
import Section from '../ui/Section/Section'

function ServicesSection() {
    return (
        <Section className="services-section">
            <div className='text-services-container'>
                <h2>Nossos <span>Serviços</span></h2>
                <p>Cada serviço é executado com precisão e dedicação para garantir resultados excepcionais</p>
            </div>

            <div className='card-services-container'>
                <ServicesCard
                    icon={<FaCut />}
                    title="Corte Personalizado"
                    description="Análise do seu estilo e formato do rosto para criar o corte perfeito que realça sua personalidade."
                />
                <ServicesCard
                    icon={<FaLayerGroup />}
                    title="Design de Barba"
                    description="Modelagem e acabamento profissional que valoriza seus traços e harmoniza com seu visual."
                />
                <ServicesCard
                    icon={<FaStar />}
                    title="Estilização Exclusiva"
                    description="Tratamentos capilares, finalização e dicas personalizadas para manter o estilo impecável."
                />
            </div>
        </Section>
    )
}

export default ServicesSection
