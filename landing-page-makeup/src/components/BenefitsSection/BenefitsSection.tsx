import CardBenefits from '../ui/CardBenefits/CardBenefits'
import Section from '../ui/Section/Section'
import './BenefitsSection.css'
import { benefits } from '@/data/benefitsData'

function BenefitsSection() {
    return (
        <Section id='benefits-section'>
            <div className="text-benefits-container">
                <h2>Por que escolher nossa <span>maquiagem profissional</span>?</h2>
            </div>

            <div className="cards-benefits-container">
                {benefits.map((item, index) => (
                    <CardBenefits
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </Section>
    )
}

export default BenefitsSection
