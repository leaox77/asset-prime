import React, { useRef, useEffect } from 'react';
import './Clients.css';

const segments = [
  {
    title: 'Empresas & Pymes',
    desc: 'Estructuración integral del patrimonio familiar, planificación sucesoria y estrategias para el crecimiento empresarial sostenible.',
  },
  {
    title: 'Clientes Patrimoniales',
    desc: 'Gestión integral del patrimonio familiar, planificación sucesoria y estrategias de inversión de largo plazo con enfoque estructural.',
  },
  {
    title: 'Emprendedores & Startups',
    desc: 'Levantamiento de capital, estructuración financiera temprana y acompañamiento estratégico para escalar modelos de negocios innovadores.',
  },
];

const Clients = () => {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section className="clients" id="clientes">
      <div className="clients__container">

        {/* ── COLUMNA IZQUIERDA ── */}
        <div className="clients__left" ref={leftRef}>
          <div className="clients__badge">
            <span className="clients__badge-dot"></span>
            <span>A Quién Servimos</span>
          </div>
          <h2 className="clients__title">
            <span className="clients__title-white">Público</span>
            <span className="clients__title-gold">Objetivo</span>
          </h2>

          <div className="clients__box">
            <div className="clients__stats">
              <div className="clients__stat">
                <span className="clients__stat-number">40%</span>
                <span className="clients__stat-label">Empresa<br />y Pymes</span>
              </div>
              <div className="clients__stat-divider"></div>
              <div className="clients__stat">
                <span className="clients__stat-number">30%</span>
                <span className="clients__stat-label">Clientes<br />Patrimoniales</span>
              </div>
              <div className="clients__stat-divider"></div>
              <div className="clients__stat">
                <span className="clients__stat-number">30%</span>
                <span className="clients__stat-label">Emprendedores<br />y Startups</span>
              </div>
            </div>

            <div className="clients__box-line"></div>

            <p className="clients__box-desc">
              Transformamos información, capital y oportunidades en estrategias
              financieras inteligentes que impulsan crecimiento sostenible,
              seguridad patrimonial y expansión empresarial
            </p>
          </div>
        </div>

        {/* ── COLUMNA DERECHA ── */}
        <div className="clients__right" ref={rightRef}>
          <div className="clients__badge">
            <span className="clients__badge-dot"></span>
            <span>Segmentos</span>
          </div>
          <h2 className="clients__title-right">
            <span className="clients__title-white-lg">Soluciones Para</span>
            <span className="clients__title-script">cada perfil</span>
          </h2>
          <p className="clients__right-desc">
            Entendemos a cada cliente que tienen objetivos únicos. Por eso diseñamos
            estrategias a medida, no soluciones genéricas.
          </p>

          <div className="clients__segments">
            {segments.map((s, i) => (
              <div className="clients__segment" key={i}>
                <div className="clients__segment-line"></div>
                <h3 className="clients__segment-title">{s.title.toUpperCase()}</h3>
                <p className="clients__segment-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;