import './LocationSection.css'
import Section from '../ui/Section/Section'
import LocationCard from '../ui/Cards/LocationCard/LocationCard'
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

function LocationSection() {
    return (
        <Section className='location-section'>
            <div className='text-location-container'>
                <h2>Onde <span>estamos</span></h2>
                <p>Venha nos visitar e viva a experiência Corte & Arte.</p>
            </div>

            <div className='map-container'>
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

                <div className='card-location-container'>
                    <LocationCard
                        icon={<FaMapMarkerAlt />}
                        title="Endereço"
                    >
                        Av. Fulano de tal, 9999 - Brasil<br />
                        São Paulo - SP, 99999-999
                    </LocationCard>
                    <LocationCard
                        icon={<FaClock />}
                        title="Horário de Funcionamento"
                    >
                        Segunda a sábado<br />
                        09h às 20h
                    </LocationCard>
                    <LocationCard
                        icon={<FaPhone />}
                        title="Contato"
                    >
                        (11) 99999-9999<br />
                        contato@exemplo.com.br
                    </LocationCard>
                </div>
            </div>



        </Section>
    )
}

export default LocationSection
