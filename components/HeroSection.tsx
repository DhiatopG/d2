export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-split">
        <div className="hero-left">
          <div className="hero-content">
            <span className="gold-line"></span>
            <h1 className="hero-title">Dentiste à Tunis</h1>
            <p className="hero-subtitle">
              Une dentisterie esthétique et clinique sur mesure, conçue pour les patients les plus exigeants.
            </p>
            <a href="#consultation" className="btn btn-outline hero-cta">Réserver une Consultation</a>
          </div>
        </div>
      </div>

      <div className="trust-bar">
        <div className="trust-bar-container">
          <div className="trust-item">
            <span className="trust-num">9+</span>
            <span className="trust-label">Ans d&apos;Excellence</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-num">12 00+</span>
            <span className="trust-label">SOURIRES DESSINÉS</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-num">4.7★</span>
            <span className="trust-label">NOTE DES PATIENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
