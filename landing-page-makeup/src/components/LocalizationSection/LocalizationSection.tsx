import './LocalizationSection.css'
import Section from '../ui/Section/Section'
import LocationCard from '../ui/LocationCard/LocationCard'
import { localization } from '@/data/localizationData'

function LocationSection() {
    return (
        <Section id='localization-section'>
            <div className='text-location-container'>
                <h2>Visite nosso <span>Studio</span></h2>
                <p>Estamos prontas para receber você</p>
            </div>

            <div className='map-container'>
                <div className='card-location-container'>
                    {localization.map((item, index) => (
                        <LocationCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            desc1={item.desc1}
                            desc2={item.desc2}
                        />
                    ))}
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197490458304!2d-46.659069225487464!3d-23.56134956159021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1760209308538!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Corte & Arte"
                />
            </div>



        </Section>
    )
}

export default LocationSection
