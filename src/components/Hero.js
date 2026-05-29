import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const elements = [badgeRef, titleRef, subtitleRef, ctaRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 150 + i * 180);
      }
    });
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div className="hero__grid"></div>
        <div className="hero__overlay"></div>
        <div className="hero__glow hero__glow--left"></div>
        <div className="hero__glow hero__glow--right"></div>
      </div>

      <div className="hero__container">
        {/* LEFT CONTENT */}
        <div className="hero__content">
          <div className="hero__badge" ref={badgeRef}>
            <span className="hero__badge-dot"></span>
            <span>Asesores Financieros · Paraguay &amp; Latam</span>
          </div>

          <h1 className="hero__title" ref={titleRef}>
            <span className="hero__title-white">TU</span>
            <span className="hero__title-white">PATRIMONIO</span>
            <span className="hero__title-gold">MERECE</span>
            <span className="hero__title-script">estrategia real</span>
          </h1>

          <p className="hero__subtitle" ref={subtitleRef}>
            Estructuración financiera, wealth management y consultoría fintech
            para empresas, PYMES y clientes patrimoniales. Desde Paraguay,
            transformamos capital en crecimiento sostenible.
          </p>

          <div className="hero__cta-group" ref={ctaRef}>
            <a href="#contacto" className="hero__btn hero__btn--primary">
              <span>Comenzar Ahora</span>
            </a>
            <a href="#servicios" className="hero__btn hero__btn--secondary">
              <span>Conoce Nuestros Servicios</span>
            </a>
          </div>

          <div className="hero__region">
            <span className="hero__region-title">Paraguay &amp; Latam</span>
            <span className="hero__region-sub">Cobertura Regional</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero__visual">
          {/* León 3D centrado arriba */}
          <div className="hero__lion-wrap">
            <img
              src="/images/logo3D.png"
              alt="Asset Prime León"
              className="hero__lion hero__lion--float"
            />
          </div>

          {/* 4 íconos flotantes debajo */}
          <div className="hero__icons-row">
            {/* Bolsa de dinero: centro → abajo */}
            <img
              src="/images/asesoramiento_financiero.png"
              alt="Bolsa de dinero"
              className="hero__icon hero__icon--bag hero__icon--down"
            />
            {/* Calculadora: centro → arriba */}
            <img
              src="/images/coporate_finance.png"
              alt="Calculadora"
              className="hero__icon hero__icon--calc hero__icon--up"
            />
            {/* Alcancía: centro → abajo */}
            <img
              src="/images/educacion_financiera.png"
              alt="Alcancía"
              className="hero__icon hero__icon--pig hero__icon--down"
            />
            {/* Banco: centro → arriba */}
            <img
              src="/images/wealth_management.png"
              alt="Banco"
              className="hero__icon hero__icon--bank hero__icon--up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;