import React from "react";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Solução SaaS Líder em Templates</div>

          <div className="hero-badge">Templates XLSX, DOCX, PPTS</div>

          <h1 className="hero-title">
            Facilite sua procura pelos melhores templates do mercado
          </h1>
          <p className="hero-description">
            Simplifique suas operações, reduza seus custos e aumente sua
            eficiência. Nossa solução SaaS tem os templates ideiais para sua
            empresa crescer.
          </p>
          <div className="hero-buttons">
            <button className="button button-primary">
              Comece agora
              <svg
                className="button-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="button button-outline">
              Agendar demonstração
            </button>
          </div>
          <div className="hero-social-proof">
            <div className="hero-avatars">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="hero-avatar"></div>
              ))}
            </div>
            <div>
              <div className="hero-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="hero-star"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="hero-rating">4.9 (500+ avaliações)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-mockup">
            <div className="hero-mockup-header">
              <div className="mockup-circle mockup-circle-red"></div>
              <div className="mockup-circle mockup-circle-yellow"></div>
              <div className="mockup-circle mockup-circle-green"></div>
            </div>
            <div className="hero-mockup-content">
              <div className="mockup-placeholder mockup-placeholder-75"></div>
              <div className="mockup-placeholder mockup-placeholder-full"></div>
              <div className="mockup-placeholder mockup-placeholder-full"></div>
              <div className="mockup-placeholder mockup-placeholder-75"></div>
              <div className="mockup-placeholder mockup-placeholder-full"></div>
              <div style={{ marginTop: "1.5rem" }}>
                <div className="mockup-placeholder mockup-placeholder-75"></div>
                <div className="mockup-placeholder mockup-placeholder-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
