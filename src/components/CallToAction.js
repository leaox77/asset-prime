import React, { useEffect, useRef } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta" id="cta">
      {/* Fondo idéntico al hero */}
      <div className="cta__bg" />
      <div className="cta__grid" />
      <div className="cta__overlay" />

      {/* Moneda BTC izquierda - Solo visible en desktop */}
      <div className="cta__coin cta__coin--btc cta__coin--desktop">
        <img src="/images/bitcoin.png" alt="Bitcoin" />
      </div>

      {/* Moneda ETH derecha - Solo visible en desktop */}
      <div className="cta__coin cta__coin--eth cta__coin--desktop">
        <img src="/images/etherium.png" alt="Ethereum" />
      </div>

      {/* Monedas móviles más pequeñas */}
      <div className="cta__coin cta__coin--btc-mobile cta__coin--mobile">
        <img src="/images/bitcoin.png" alt="Bitcoin" />
      </div>
      <div className="cta__coin cta__coin--eth-mobile cta__coin--mobile">
        <img src="/images/etherium.png" alt="Ethereum" />
      </div>

      {/* Contenido central */}
      <div className="cta__container" ref={containerRef}>
        <div className="cta__badge">
          <span className="cta__badge-dot" />
          <span>Comienza Hoy</span>
        </div>

        <h2 className="cta__title">
          <span className="cta__title-white">Tu Futuro</span>
          <span className="cta__title-white">
            Financiero{' '}
            <span className="cta__title-gold">Empieza</span>
          </span>
          <span className="cta__title-white">Aquí</span>
        </h2>

        <p className="cta__subtitle">
          Agenda una consulta gratuita con nuestros especialistas y descubre
          cómo Asset Prime puede transformar tu patrimonio o el de tu empresa.
        </p>

        <div className="cta__btn-group">
          <a href="#contacto" className="cta__btn cta__btn--primary">
            Agendar Consulta Gratuita
          </a>
          <a href="#nosotros" className="cta__btn cta__btn--secondary">
            Conocer Más Sobre Nosotros
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;