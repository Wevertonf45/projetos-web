import "./ServicesSection.css";

export default function Services() {
    return (
        <section className="services-section">
            <div className="text-services-container">
                <h2>Nossos <span>Serviços</span></h2>
                <p>Escolha o serviço perfeito para sua ocasião</p>
            </div>

            <div className="services-container">
                <div className="service-card">
                    <h3>Maquiagem Social</h3>
                    <p>Perfeita para festas, formaturas e eventos especiais</p>
                    <ul>
                        <li>✔ Maquiagem personalizada para o evento</li>
                        <li>✔ Produtos de longa duração</li>
                        <li>✔ Consultoria de estilo inclusa</li>
                        <li>✔ Retoques durante 2 horas</li>
                    </ul>
                    <button className="btn">Agendar Maquiagem Social</button>
                </div>

                <div className="service-card popular">
                    <div className="badge">Mais Popular</div>
                    <h3>Maquiagem para Noivas</h3>
                    <p>O dia mais especial merece uma maquiagem impecável</p>
                    <ul>
                        <li>✔ Teste de maquiagem incluído</li>
                        <li>✔ Acompanhamento no dia do casamento</li>
                        <li>✔ Produtos à prova d'água</li>
                        <li>✔ Retoque gratuito</li>
                    </ul>
                    <button className="btn">Agendar Maquiagem para Noivas</button>
                </div>

                {/* Card 3 */}
                <div className="service-card">
                    <h3>Maquiagem para Ensaios</h3>
                    <p>Valorize sua beleza em fotos profissionais</p>
                    <ul>
                        <li>✔ Técnicas específicas para fotografia</li>
                        <li>✔ Consultoria com o fotógrafo</li>
                        <li>✔ Diferentes looks disponíveis</li>
                        <li>✔ Produtos HD premium</li>
                    </ul>
                    <button className="btn">Agendar Maquiagem para Ensaios</button>
                </div>

            </div>
        </section>
    );
}
