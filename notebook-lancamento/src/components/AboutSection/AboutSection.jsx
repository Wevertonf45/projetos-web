import "./AboutSection.css";
import { FaMicrochip, FaMemory, FaHdd, FaGamepad, FaBatteryFull, FaDesktop } from "react-icons/fa";
import Section from "../../ui/Section/Section";
import { Cpu, Clock,MemoryStick, HardDrive, Gamepad2, Battery, Monitor } from "lucide-react";

const specs = [
    {
        title: "Processador Intel® Core™ i7 13ª Geração",
        description: "Até 5.0GHz de velocidade",
        icon: <Cpu />,
    },
    {
        title: "16GB DDR5 RAM",
        description: "Multitarefa sem esforço",
        icon: <MemoryStick />,
    },
    {
        title: "SSD NVMe 1TB",
        description: "Armazenamento ultrarrápido",
        icon: <FaHdd />,
    },
    {
        title: "NVIDIA® RTX 4060",
        description: "6GB GDDR6 dedicada",
        icon: <FaGamepad />,
    },
    {
        title: "Bateria de 12h",
        description: "Produtividade o dia todo",
        icon: <Clock />,
    },
    {
        title: 'Tela IPS 15.6" Full HD',
        description: "144Hz de taxa de atualização",
        icon: <Monitor />,
    },
];

const AboutSection = () => {
    return (
        <Section className="about-section">
            <div className="text-container-about">
                <h2>Desempenho que Acompanha o <span>Seu Ritmo</span></h2>
                <p>O X-PRO Vision 15 foi feito para quem precisa de resposta imediata. Cada detalhe foi pensado para oferecer máxima eficiência.</p>
            </div>

            <div className="cards-container">
                {specs.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="spec-icon">{item.icon}</div>
                        <h3 className="spec-title">{item.title}</h3>
                        <p className="spec-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default AboutSection;
