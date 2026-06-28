'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [expanded]);

  const toggle = () => setExpanded((prev) => !prev);
  const close = () => setExpanded(false);

  return (
    <header className="header">
      <div className="nav-container">
        <a href="#" className="logo" onClick={close}>
          <img src="/logo.svg" alt="Aurelia Clinic Logo" className="logo-img" />
        </a>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={toggle}
        >
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <nav className={`nav-menu${expanded ? ' active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#hero" className="nav-link" onClick={close}>Accueil</a></li>
            <li><a href="#services" className="nav-link" onClick={close}>Services</a></li>
            <li><a href="#areas" className="nav-link" onClick={close}>Implantations</a></li>
          </ul>
          <a href="#consultation" className="btn btn-outline nav-btn" onClick={close}>Prendre RDV</a>
          <a href="tel:+21650149159" className="btn btn-outline nav-btn" onClick={close}>Appeler : +216 50 149 159</a>
        </nav>
      </div>
    </header>
  );
}
