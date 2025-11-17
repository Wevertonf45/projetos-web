

import { ReactNode } from "react"

interface PropSection {
    children: ReactNode
    className: string
}

function Section(props: PropSection) {
    return (
        <section className={props.className}>
            {props.children}
        </section>
    )
}

export default Section
