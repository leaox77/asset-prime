import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios',  href: '#servicios' },
    { label: 'Clientes',   href: '#clientes'  },
    { label: 'Nosotros',   href: '#nosotros'  },
    { label: 'Ventajas',   href: '#por-que'   },
    { label: 'Contacto',   href: '#contacto'  },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">

        {/* LOGO */}
        <a href="#inicio" className="navbar__logo">
          <img src="/images/logo-navbar.png" alt="Asset Prime logo" className="navbar__logo-img" />
        </a>

        {/* LINKS CENTRADOS */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contacto" className="navbar__cta" onClick={() => setMenuOpen(false)}>
          Comenzar Ahora
        </a>

        {/* HAMBURGER */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;