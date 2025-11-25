'use client'

import Section from '../ui/Section/Section'
import { FaCalendar } from 'react-icons/fa'
import './CTASection.css'
import Botao from '../ui/Botao/Botao'

function CTASection() {
    return (
        <Section id='cta-section'>
            <div className='div1'>
                <div>
                    <FaCalendar />
                </div>
                <p>Agende Agora</p>
            </div>

            <div className="text-cta-container">
                <h2>Pronta para se sentir <span>ainda mais linda</span>?</h2>
                <p>Garanta o horário perfeito para o seu evento. Nossa agenda enche rapidamente, especialmente aos finais de semana.</p>
            </div>

            <div>
                <Botao
                    onClick={() => window.open('https://wa.me/000000000000', '_blank')}
                    id='btn-cta'
                    text='Agendar Agora pelo WhatsApp' />
            </div>
        </Section>
    )
}

export default CTASection
