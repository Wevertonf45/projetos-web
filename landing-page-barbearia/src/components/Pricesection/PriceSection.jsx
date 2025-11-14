import "./PriceSection.css";
import Button from '../ui/Button/Button'
import Section from '../ui/Section/Section'

export default function Servicos() {
    return (
        <Section className="servicos">
            <div className="container">
                <div className="text-price">
                    <h2>Nossos <span>Combos</span></h2>
                    <p>
                        Aqui, cada serviço é pensado com cuidado, atenção e aquele capricho que
                        você merece. A gente não faz só por fazer — a gente faz com vontade de
                        entregar o melhor, de verdade.
                    </p>
                    <h3>CATÁLOGO</h3>
                    <ul className="lista">
                        <li>
                            <span>CORTE SIMPLES</span>
                            <span>R$ 35,00</span>
                        </li>
                        <li>
                            <span>CORTE FORMAL</span>
                            <span>R$ 45,00</span>
                        </li>
                        <li>
                            <span>CORTE INFANTIL</span>
                            <span>R$ 20,00</span>
                        </li>
                        <li>
                            <span>BARBA</span>
                            <span>R$ 20,00</span>
                        </li>
                        <li>
                            <span>SOBRANCELHA</span>
                            <span>R$ 15,00</span>
                        </li>
                    </ul>
                    <h3>COMBOS</h3>
                    <ul className="lista">
                        <li>
                            <span>CORTE + BARBA</span>
                            <span>R$ 20,00</span>
                        </li>
                        <li>
                            <span>CORTE + SOBRANCELHA</span>
                            <span>R$ 20,00</span>
                        </li>
                        <li>
                            <span>BARBA + SOBRANCELHA</span>
                            <span>R$ 20,00</span>
                        </li>
                        <li>
                            <span>CORTE + BARBA + SOBRANCELHA</span>
                            <span>R$ 20,00</span>
                        </li>
                    </ul>
                </div>

            </div>

        </Section>
    );
}
