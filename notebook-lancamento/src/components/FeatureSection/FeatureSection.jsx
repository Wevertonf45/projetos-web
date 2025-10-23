import React from "react";
import { FiMaximize, FiMonitor, FiCpu, FiFeather } from "react-icons/fi";
import "./FeatureSection.css";
import Section from "../../ui/Section/Section";
import keyboard from "../../assets/keyboard-closeup.jpg";

const features = [
  { icon: <FiMaximize />, title: "1.7cm", text: "Fino" },
  { icon: <FiFeather />, title: "1.4kg", text: "Leve" },
  { icon: <FiMonitor />, title: "Retroiluminado", text: "Teclado RGB" },
  { icon: <FiCpu />, title: "Avançada", text: "Refrigeração" },
];

const FeatureSection = () => {
  return (
    <Section className="feature-section">
      <div className="img-container-feature">
        <img src={keyboard} alt="" />
      </div>

      <div className="feature-text">
        <h2>Design minimalista <span>desempenho máximo</span></h2>
        <p className="feature-description">
          Construído em alumínio escovado, o X-PRO Vision 15 une leveza e
          resistência. O teclado retroiluminado e o touchpad de precisão trazem
          uma experiência fluida e elegante.
        </p>
        <div className="feature-grid">
          {features.map(({ icon, title, text }, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeatureSection;
