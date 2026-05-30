import React, { useState, useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    number: '01',
    category: 'Acompañamiento',
    img: '/images/asesoramiento_financiero.png',
    titleLine1: 'Asesoramiento',
    titleLine2: 'Financiero',
    desc: 'Planificación estratégica para optimizar patrimonio, liquidez y crecimiento financiero de personas y empresas. Enfoque personalizado y orientado a resultados.',
  },
  {
    id: 2,
    number: '02',
    category: 'Experiencia',
    img: '/images/wealth_management.png',
    titleLine1: 'Wealth',
    titleLine2: 'Management',
    desc: 'Gestión patrimonial personalizada orientada a proteger y potenciar inversiones de largo plazo. Estructuras de inversión modernas y diversificadas.',
  },
  {
    id: 3,
    number: '03',
    category: 'Consolidación',
    img: '/images/coporate_finance.png',
    titleLine1: 'Corporate',
    titleLine2: 'Finance',
    desc: 'Soluciones financieras estratégicas para empresas: reestructuración, fusiones, adquisiciones y optimización del capital corporativo.',
  },
  {
    id: 4,
    number: '04',
    category: 'Crecimiento',
    img: '/images/educacion_financiera.png',
    titleLine1: 'Educación',
    titleLine2: 'Financiera',
    desc: 'Programas formativos para potenciar tu inteligencia financiera, desde fundamentos hasta estrategias avanzadas de inversión.',
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="servicios">
      <div className="services__container">

        <div className="services__header" ref={headerRef}>
          <div className="services__badge">
            <span className="services__badge-dot"></span>
            <span>Lo Que Hacemos</span>
          </div>
          <h2 className="services__title">
            Nuestros <span className="services__title-accent">Servicios</span>
          </h2>
          <p className="services__subtitle">
            Soluciones integrales que combinan finanzas tradicionales, tecnología y<br />
            planificación para generar valor real y sostenible
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`svc-card ${active === i ? 'svc-card--active' : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              {/* Luz diagonal */}
              <div className="svc-card__light"></div>

              {/* Badge número + categoría */}
              <div className="svc-card__badge">
                <span className="svc-card__dot"></span>
                <span className="svc-card__number">{s.number}</span>
                <span className="svc-card__category">{s.category.toUpperCase()}</span>
              </div>

              {/* Imagen 3D */}
              <div className="svc-card__img-wrap">
                <img src={s.img} alt={s.titleLine1} className="svc-card__img" />
              </div>

              {/* Texto inferior */}
              <div className="svc-card__body">
                <h3 className="svc-card__title">
                  <span className="svc-card__title-white">{s.titleLine1}</span>
                  <span className="svc-card__title-gold">{s.titleLine2}</span>
                </h3>
                <p className="svc-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;