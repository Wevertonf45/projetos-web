import Section from '../../ui/Section/Section'
import { FiWifi, FiMic, FiCamera, FiUnlock, FiCpu } from "react-icons/fi";
import './Section5.css'

function Section5() {
    const section05 = [
        {
            icon: <FiWifi />,
            title: "Wi-Fi 6E",
            text: "Conexão ultrarrápida e estável",
        },
        {
            icon: <FiMic />,
            title: "Som Dolby Atmos",
            text: "Áudio imersivo e envolvente",
        },
        {
            icon: <FiCamera />,
            title: "Webcam Full HD",
            text: "Com reconhecimento facial",
        },
        {
            icon: <FiUnlock />,
            title: "Leitor Biométrico",
            text: "Segurança integrada",
        },
        {
            icon: <FiCpu />,
            title: "Portas Thunderbolt™ 4",
            text: "HDMI, USB-C e leitor SD",
        },
    ];

    return (
        <Section className='section05'>
            <div className='text-container-5'>
                <h2>Inteligência e Conectividade em <span>Cada Detalhe</span></h2>
                <p>Mais do que um notebook — um centro de produtividade inteligente.</p>
            </div>

            <div className="section05-grid">
                {section05.map((section05, index) => (
                    <div key={index} className="section05-card">
                        <div className="section05-icon">{section05.icon}</div>
                        <h3>{section05.title}</h3>
                        <p>{section05.text}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Section5
