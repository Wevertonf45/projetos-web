import { ReactNode } from 'react'
import './LocationCard.css'

interface propsLocation {
    icon: ReactNode;
    title: string;
    desc1: string
    desc2: string
}

function LocationCard(props: propsLocation) {
    return (
        <div className="contact-card">
            <div className="contact-icon">{props.icon}</div>
            <div>
                <h3 className="contact-title">{props.title}</h3>
                <p className='desc1'>{props.desc1}</p>
                <p className='desc2'>{props.desc2}</p>
            </div>
        </div>
    )
}

export default LocationCard