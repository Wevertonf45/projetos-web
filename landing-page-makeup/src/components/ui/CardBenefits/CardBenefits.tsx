import { ReactNode } from 'react'
import './CardBenefits.css'

interface benefitsProps {
    icon: ReactNode;
    title: string;
    desc: string;
}

function CardBenefits(props: benefitsProps) {
    return (
        <div className='card-benefits-container'>
            <div className="icon-container">
                {props.icon}
            </div>

            <div className="text-card">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default CardBenefits
