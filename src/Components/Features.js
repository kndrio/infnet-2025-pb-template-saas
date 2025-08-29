import React, { useState, useEffect } from "react";

import {
  FaChartBar,
  FaShieldAlt,
  FaBolt,
  FaUser,
  FaGlobe,
  FaCog,
} from "react-icons/fa";

function FeatureIcon({ type, size = 32, color }) {
  const icons = {
    chart: FaChartBar,
    shield: FaShieldAlt,
    zap: FaBolt,
    user: FaUser,
    globe: FaGlobe,
    settings: FaCog,
  };
  const IconComponent = icons[type] || FaChartBar;
  return <IconComponent size={size} color={color} />;
}

const DATA_URL = "https://api.npoint.io/a0d14e7c7953b1e0d91e";

/*
* @Deprecated
* Estamos carregando as informações a partir da API npoint.io
let featuresList = [
  {
    icon: "chart",
    title: "Análise avançada",
    description:
      "Dados em tempo real e relatórios personalizados para tomar decisões baseadas em informações precisas.",
  },
  {
    icon: "shield",
    title: "Segurança robusta",
    description:
      "Proteção de dados de nível empresarial com criptografia e conformidade com regulamentações.",
  },
  {
    icon: "zap",
    title: "Alta performance",
    description:
      "Sistema otimizado para velocidade e eficiência, mesmo com grandes volumes de dados.",
  },
  {
    icon: "users",
    title: "Colaboração em equipe",
    description:
      "Ferramentas para trabalho em equipe que melhoram a comunicação e produtividade.",
  },
  {
    icon: "globe",
    title: "Acessibilidade global",
    description:
      "Acesse de qualquer lugar e dispositivo, com suporte para múltiplos idiomas.",
  },
  {
    icon: "settings",
    title: "Personalização completa",
    description:
      "Adapte a plataforma às necessidades específicas do seu negócio com opções flexíveis.",
  },
];
*/

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFeatures(data.features || data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar as features:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p> Carregando Features...</p>;
  }

  if (error) {
    return <p>Erro no carregamento das Features: {error.message}</p>;
  }

  return (
    <section id="Feature" className="container section section-bg-gray">
      <div className="section-header">
        <div className="section-title">
          <h2>Tudo o que você precisa em um só lugar</h2>
          <p className="section-description">
            Nossa plataforma oferece um conjunto de templates para impulsionar o
            seu negócio.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;