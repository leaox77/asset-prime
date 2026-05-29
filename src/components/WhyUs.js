import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.css';

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L3 8v6c0 6.6 4.7 12.8 11 14.3C20.3 26.8 25 20.6 25 14V8L14 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Seguridad Total',
    desc: 'Tu patrimonio protegido con los más altos estándares de seguridad y cumplimiento regulatorio.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Disponibilidad 24/7',
    desc: 'Monitoreo constante de tus inversiones y soporte disponible cuando más lo necesitas.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 16l4 4 4-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 8h-6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Rendimientos Reales',
    desc: 'Estrategias con track record probado. Tu dinero trabajando de forma eficiente y transparente.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 24c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Equipo Experto',
    desc: 'Profesionales con décadas de experiencia en mercados financieros globales y activos digitales.',
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus" id="por-que" ref={ref}>
      <div className="whyus__container">
        <div className={`whyus__header ${visible ? 'revealed' : ''}`}>
          <span className="whyus__tag">Por Qué Elegirnos</span>
          <h2 className="whyus__title">
            La diferencia que hace <br />
            <span className="whyus__title-accent">Asset Prime</span>
          </h2>
        </div>

        <div className="whyus__pillars">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`whyus__pillar ${visible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="whyus__pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
