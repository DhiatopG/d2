export default function SeoBlock() {
  return (
    <section id="seo-block" className="seo-block section-padding">
      <div className="container">
        <div className="seo-block-header">
          <span className="seo-eyebrow">NOTRE EXPERTISE</span>
          <h2 className="seo-heading">Soins Dentaires Complets</h2>
          <p className="seo-subtext">
            Nous offrons des soins d&apos;experts à proximité, dans un environnement calme et
            accueillant conçu pour votre confort.
          </p>
        </div>

        <div className="seo-cards">
          <article id="services" className="seo-card">
            <div className="seo-card-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 2C9.5 2 7 4 7 7c0 2.5 1 4.5 2 6l1 5c.2 1 1 1.5 2 1.5s1.8-.5 2-1.5l1-5c1-1.5 2-3.5 2-6 0-3-2.5-5-5-5z" />
              </svg>
            </div>
            <h3 className="seo-card-title">Nos Services Dentaires</h3>
            <p className="seo-card-desc">
              Implants, blanchiment, orthodontie, facettes, couronnes et plus encore : découvrez tous nos traitements.
            </p>
            <a href="#services" className="seo-card-link">Voir tous les services &rarr;</a>
          </article>

          <article id="areas" className="seo-card">
            <div className="seo-card-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 2C8.7 2 6 4.7 6 8c0 5.3 6 13 6 13s6-7.7 6-13c0-3.3-2.7-6-6-6z" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </div>
            <h3 className="seo-card-title">Zones Desservies</h3>
            <p className="seo-card-desc">
              Nous accueillons les patients de Tunis et de ses environs. Trouvez votre quartier et prenez rendez-vous sans vous déplacer loin.
            </p>
            <a href="#areas" className="seo-card-link">Voir les zones &rarr;</a>
          </article>
        </div>
      </div>
    </section>
  );
}
