import React, { useRef, useEffect } from 'react';
import './WhyUs.css';

const assetItems = [
  'Integramos asesoramiento financiero, tecnología y análisis estratégico en una sola firma moderna, sostenible y orientada al crecimiento regional.',
  'Priorizamos transparencia, compliance y gestión responsable del riesgo para generar confianza sólida en clientes empresariales y patrimoniales.',
  'Desarrollamos soluciones personalizadas para empresas, PYMES y personas, adaptando estrategias financieras según necesidades reales y objetivos específicos.',
];

const compItems = [
  'Muchas empresas ofrecen únicamente productos financieros aislados, sin integrar tecnología, estrategia corporativa ni acompañamiento sostenible.',
  'Parte del mercado mantiene modelos comerciales tradicionales con menor enfoque en compliance, educación financiera y gestión integral del riesgo.',
  'Competidores suelen trabajar con servicios estandarizados limitando personalización y acompañamiento estratégico continuo para sus clientes.',
];

const WhyUs = () => {
  const headerRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const els = [headerRef.current, tableRef.current];

    els.forEach((el, i) => {
      if (!el) return;

      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition =
                'opacity .8s ease, transform .8s ease';

              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 150);

            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    });
  }, []);

  return (
    <section className="whyus" id="por-que">
      <div className="whyus__container">

        {/* HEADER */}

        <div className="whyus__header" ref={headerRef}>
          <div className="whyus__badge">
            <span className="whyus__badge-dot"></span>
            <span>Por Qué Elegirnos</span>
          </div>

          <h2 className="whyus__title">
            <span className="whyus__title-white">Tabla </span>
            <span className="whyus__title-gold">Comparativa</span>
          </h2>

          <p className="whyus__subtitle">
            No somos una firma más. Nuestra propuesta integra lo que la competencia ofrece por separado.
          </p>
        </div>

        {/* TABLA */}

        <div className="whyus__table-wrapper" ref={tableRef}>
          <table className="whyus__table">

            <thead>
              <tr>
                <th className="whyus__head whyus__head--gold">
                  ASSET PRIME
                </th>

                <th className="whyus__vs-col"></th>

                <th className="whyus__head">
                  LA COMPETENCIA
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>

                {/* IZQUIERDA */}

                <td className="whyus__content">
                  {assetItems.map((item, index) => (
                    <div className="whyus__item" key={index}>
                      <span className="whyus__dot whyus__dot--gold"></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </td>

                {/* VS */}

                <td className="whyus__vs-cell">
                  <span className="whyus__vs">VS</span>
                </td>

                {/* DERECHA */}

                <td className="whyus__content">
                  {compItems.map((item, index) => (
                    <div className="whyus__item" key={index}>
                      <span className="whyus__dot whyus__dot--blue"></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </td>

              </tr>
            </tbody>
            <tr>
  <td></td>

  <td className="whyus__table-footer"></td>

  <td></td>
</tr>

          </table>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;