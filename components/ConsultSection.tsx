'use client';

import { useState, useEffect, useRef } from 'react';

export default function ConsultSection() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 8000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="consult-section section-padding">
      <div className="container">
        <div className="consult-grid">
          <div className="consult-left">
            <span className="consult-eyebrow">RÉSERVEZ VOTRE VISITE</span>
            <h2 className="consult-heading">Demander une<br />Consultation</h2>
            <p className="consult-subtext">
              Remplissez le formulaire et l&apos;un de nos conseillers vous contactera
              sous 24 heures pour confirmer votre rendez-vous et répondre à vos questions.
            </p>
            <div className="consult-contact-strip">
              <div className="consult-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.93 5.93l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+21650149159">+216 50 149 159</a>
              </div>
            </div>
          </div>

          <div className="consult-right">
            {!submitted ? (
              <form ref={formRef} className="consult-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="consult-name" className="form-label">Nom Complet</label>
                    <input type="text" id="consult-name" name="name" className="form-input" placeholder="Jean Dupont" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-phone" className="form-label">Numéro de Téléphone</label>
                    <input type="tel" id="consult-phone" name="phone" className="form-input" placeholder="+216 50 149 159" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="consult-email" className="form-label">Adresse E-mail</label>
                  <input type="email" id="consult-email" name="email" className="form-input" placeholder="jean.dupont@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="consult-treatment" className="form-label">Traitement Souhaité</label>
                  <select id="consult-treatment" name="treatment" className="form-select" defaultValue="">
                    <option value="" disabled>Sélectionnez un traitement&hellip;</option>
                    <option value="general">Soins Généraux &amp; Bilan</option>
                    <option value="implants">Implants Dentaires</option>
                    <option value="veneers">Facettes en Porcelaine</option>
                    <option value="whitening">Blanchiment Dentaire</option>
                    <option value="orthodontics">Orthodontie / Invisalign</option>
                    <option value="other">Autre / Je ne sais pas encore</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="consult-date" className="form-label">Date Souhaitée</label>
                  <input type="date" id="consult-date" name="date" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="consult-message" className="form-label">
                    Message <span className="form-optional">(Optionnel)</span>
                  </label>
                  <textarea id="consult-message" name="message" className="form-textarea" rows={4} placeholder="Dites-nous ce qui peut nous aider à préparer votre visite…" />
                </div>

                <button type="submit" className="btn btn-outline consult-submit">Réserver la Consultation</button>
              </form>
            ) : (
              <div className="consult-success" style={{ display: 'flex' }} aria-live="polite">
                <span className="consult-success-icon">&#10003;</span>
                <p className="consult-success-heading">Merci</p>
                <p className="consult-success-text">
                  Votre demande a bien été reçue. Un membre de notre équipe vous contactera dans les 24 heures pour confirmer votre rendez-vous.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
