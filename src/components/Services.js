import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    img: '/images/wealth_management.png',
    title: 'Wealth Management',
    shortTitle: 'Gestión Patrimonial',
    desc: 'Administración integral de tu patrimonio con estrategias personalizadas para maximizar rendimiento y proteger tu capital a largo plazo.',
    tag: 'Premium',
  },
  {
    id: 2,
    img: '/images/educacion_financiera.png',
    title: 'Educación Financiera',
    shortTitle: 'Formación & Conocimiento',
    desc: 'Programas formativos diseñados para potenciar tu inteligencia financiera, desde fundamentos hasta estrategias avanzadas de inversión.',
    tag: 'Formación',
  },
  {
    id: 3,
    img: '/images/coporate_finance.png',
    title: 'Corporate Finance',
    shortTitle: 'Finanzas Corporativas',
    desc: 'Soluciones financieras estratégicas para empresas: reestructuración, fusiones, adquisiciones y optimización del capital corporativo.',
    tag: 'Empresas',
  },
  {
    id: 4,
    img: '/images/asesoramiento_financiero.png',
    title: 'Asesoramiento Financiero',
    shortTitle: 'Consultoría Personalizada',
    desc: 'Asesoría financiera personalizada con expertos dedicados a entender tu situación única y construir el camino hacia tus objetivos.',
    tag: 'Consultoría',
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div className="service-card" ref={ref}>
      <div className="service-card__image-wrap">
        <img src={service.img} alt={service.title} className="service-card__img" />
        <div className="service-card__overlay">
          <p className="service-card__overlay-text">{service.desc}</p>
          <a href="#contacto" className="service-card__overlay-btn">
            Saber Más
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <span className="service-card__tag">{service.tag}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__short">{service.shortTitle}</p>
        <div className="service-card__divider"></div>
        <p className="service-card__desc">{service.desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
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
          <span className="services__tag">Nuestros Servicios</span>
          <h2 className="services__title">
            Soluciones diseñadas para <br />
            <span className="services__title-accent">cada etapa de tu camino</span>
          </h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
