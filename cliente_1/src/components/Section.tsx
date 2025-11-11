import { ReactNode } from "react";

type sectionProps = {
    children: ReactNode;
}

export default function Section({ children }: sectionProps) {
    return (
        <section>
            {children}
        </section>
    )
}
