import { ReactNode } from 'react'
import './Section.css'

interface propsSection{
    children: ReactNode
    id: string
}

function Section(props: propsSection) {
    return (
        <section className='template-section' id={props.id}>
            {props.children}
        </section>
    )
}

export default Section
