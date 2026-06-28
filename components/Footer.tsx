export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">Cabinet dentaire Dr rezgui Houssem</a>
            <span className="footer-gold-line"></span>
            <p className="footer-tagline">
              L&apos;excellence en soins dentaires.<br />Où la précision rencontre le confort.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Liens Rapides</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Accueil</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#areas" className="footer-link">Implantations</a></li>
              <li><a href="#consultation" className="footer-link">Réserver une consultation</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact &amp; Horaires</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">&#9679;</span>
                23 Av. Iben Kholdoun, 1064 Tunis, Tunisie
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">&#9679;</span>
                +216 50 149 159
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">&#9679;</span>
                Lundi&nbsp;9h00 &ndash; 17h00<br />
                Mardi&nbsp;8h30 &ndash; 19h00<br />
                Mercredi&nbsp;8h30 &ndash; 19h00<br />
                Jeudi&nbsp;8h30 &ndash; 19h00<br />
                Vendredi&nbsp;8h30 &ndash; 19h00<br />
                Samedi&nbsp;8h30 &ndash; 13h30<br />
                Dimanche&nbsp;Fermé
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">&copy; 2026 Cabinet dentaire Dr rezgui Houssem. Tous droits réservés.</span>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Politique de Confidentialité</a>
            <a href="#" className="footer-legal-link">Conditions d&apos;Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
