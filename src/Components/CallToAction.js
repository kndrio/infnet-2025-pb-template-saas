const CallToAction = () => {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-bg-circle-1"></div>
          <div className="cta-bg-circle-2"></div>
          <div className="cta-content">
            <h2 className="cta-title">Pronto para transformar seu negócio?</h2>
            <p className="cta-description">
              Junte-se a milhares de empresas que já estão economizando tempo e
              dinheiro com nossa plataforma. Comece seu período de teste
              gratuito hoje.
            </p>
            <div className="cta-buttons">
              <button className="button cta-button-white">
                Comece agora
                <svg
                  width="20"
                  height="20"
                  className="button-icon"
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
              <button className="button cta-button-outline">
                Agendar demonstração
              </button>
            </div>
            <p className="cta-disclaimer">
              Sem compromisso. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
