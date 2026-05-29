import React, { useEffect, useRef } from 'react';
import './About.css';

const useScrollReveal = (ref, delay = 0) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
};

const About = () => {
  const headerRef = useRef(null);
  const cardsRef  = useRef(null);
  const quoteRef  = useRef(null);

  useScrollReveal(headerRef, 0);
  useScrollReveal(cardsRef,  150);
  useScrollReveal(quoteRef,  300);

  return (
    <section className="about" id="nosotros">
      <div className="about__bg">
        <div className="about__glow"></div>
      </div>

      <div className="about__container">

        {/* ── HEADER ── */}
        <div className="about__header" ref={headerRef}>
          <div className="about__badge">
            <span className="about__badge-dot"></span>
            <span>Quiénes Somos</span>
          </div>
          <h2 className="about__title">
            Propósito &amp; <span className="about__title-accent">Dirección</span>
          </h2>
        </div>

        {/* ── CARDS ── */}
        <div className="about__cards" ref={cardsRef}>

          {/* VISIÓN */}
          <div className="about__card">
            <div className="about__card-bg">
              <img src="/images/imagen_vision.png" alt="Nuestra Visión" />
            </div>
            <div className="about__card-label">Nuestra Visión</div>
            <div className="about__card-content">
              <h3 className="about__card-title">Visión</h3>
              <p className="about__card-text">
                Ser la firma financiera líder en Latinoamérica, reconocida por transformar
                el patrimonio de nuestros clientes a través de soluciones innovadoras,
                transparentes y orientadas al crecimiento sostenible.
              </p>
            </div>
          </div>

          {/* MISIÓN */}
          <div className="about__card">
            <div className="about__card-bg">
              <img src="/images/imagen_mision.png" alt="Nuestra Misión" />
            </div>
            <div className="about__card-label">Nuestra Misión</div>
            <div className="about__card-content">
              <h3 className="about__card-title">Misión</h3>
              <p className="about__card-text">
                Impulsar el desarrollo financiero de empresas, PYMES y personas mediante
                asesoramiento estratégico, soluciones de inversión y herramientas
                tecnológicas innovadoras, generando crecimiento sostenible, optimización
                patrimonial y acceso a oportunidades financieras modernas con
                transparencia, confianza y enfoque en resultados.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;