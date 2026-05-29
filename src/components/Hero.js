import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const elements = [logoRef, titleRef, subtitleRef, ctaRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(40px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 200);
      }
    });
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <img src="/images/cuadricula.png" alt="" className="hero__grid" aria-hidden="true" />
        <div className="hero__overlay"></div>
        <div className="hero__glow hero__glow--left"></div>
        <div className="hero__glow hero__glow--right"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge" ref={logoRef}>
            <span className="hero__badge-line"></span>
            <span>Gestión de Activos Financieros</span>
            <span className="hero__badge-line"></span>
          </div>

          <h1 className="hero__title" ref={titleRef}>
            <span className="hero__title-special">Inversión</span>
            <span className="hero__title-main">Inteligente para</span>
            <span className="hero__title-gold">Tu Futuro</span>
          </h1>

          <p className="hero__subtitle" ref={subtitleRef}>
            Asset Prime te ofrece soluciones financieras de vanguardia. 
            Maximiza tu patrimonio con estrategias probadas y asesoramiento experto 
            en mercados globales y activos digitales.
          </p>

          <div className="hero__cta-group" ref={ctaRef}>
            <a href="#servicios" className="hero__btn hero__btn--primary">
              <span>Explorar Servicios</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contacto" className="hero__btn hero__btn--secondary">
              <span>Hablar con un Asesor</span>
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">+500</span>
              <span className="hero__stat-label">Clientes Activos</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">$2M+</span>
              <span className="hero__stat-label">Activos Gestionados</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Satisfacción</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-container">
            <div className="hero__logo-ring hero__logo-ring--outer"></div>
            <div className="hero__logo-ring hero__logo-ring--inner"></div>
            <img src="/images/logo3D.png" alt="Asset Prime" className="hero__logo-3d" />
          </div>

          <div className="hero__coins">
            <div className="hero__coin hero__coin--btc">
              <img src="/images/bitcoin.png" alt="Bitcoin" />
            </div>
            <div className="hero__coin hero__coin--eth">
              <img src="/images/etherium.png" alt="Ethereum" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
