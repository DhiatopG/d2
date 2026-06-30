'use client';

import { useEffect } from 'react';

export default function LocationSection() {
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('.map-container iframe[data-src]');
    if (iframe) {
      const load = () => {
        iframe.src = iframe.dataset.src ?? '';
        iframe.removeAttribute('data-src');
      };
      if ('requestIdleCallback' in window) {
        requestIdleCallback(load, { timeout: 3000 });
      } else {
        setTimeout(load, 2500);
      }
    }
  }, []);

  return (
    <>
      <section className="location-info section-padding" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="seo-block-header" style={{ marginBottom: 0 }}>
            <span className="seo-eyebrow">Visitez Notre Clinique</span>
            <h2 className="seo-heading">Cabinet dentaire Dr rezgui Houssem</h2>
            <p className="seo-subtext">
              Idéalement situé pour tous vos besoins dentaires. Nous avons hâte de vous
              accueillir dans notre cabinet moderne.
            </p>
          </div>
        </div>
      </section>

      <section id="location-map" className="map-section">
        <div className="map-container">
          <iframe
            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25545.678056548248!2d10.099097587351354!3d36.83745219071349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd33221f5ceea9%3A0x1415ff8dd8df9048!2sCabinet%20dentaire%20Dr%20rezgui%20Houssem!5e0!3m2!1sen!2stn!4v1782300976626!5m2!1sen!2stn"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            aria-label="Cabinet dentaire Dr rezgui Houssem Location Map"
          />
        </div>
      </section>
    </>
  );
}
