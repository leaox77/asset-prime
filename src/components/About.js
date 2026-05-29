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
  const titleRef = useRef(null);
  const visionRef = useRef(null);
  const misionRef = useRef(null);
  const quoteRef = useRef(null);

  useScrollReveal(titleRef, 0);
  useScrollReveal(visionRef, 100);
  useScrollReveal(misionRef, 250);
  useScrollReveal(quoteRef, 400);

  return (
    <section className="about" id="nosotros">
      <div className="about__bg">
        <div className="about__glow"></div>
      </div>
      <div className="about__container">
        <div className="about__header" ref={titleRef}>
          <span className="about__tag">Quiénes Somos</span>
          <h2 className="about__title">
            Una firma de confianza para <br />
            <span className="about__title-accent">inversores visionarios</span>
          </h2>
          <p className="about__desc">
            Asset Prime nació con el propósito de democratizar el acceso a las mejores 
            oportunidades de inversión, combinando la sofisticación del mercado financiero 
            tradicional con la innovación de los activos digitales.
          </p>
        </div>

        <div className="about__cards">
          <div className="about__card about__card--vision" ref={visionRef}>
            <div className="about__card-image">
              <img src="/images/imagen_vision.png" alt="Nuestra Visión" />
              <div className="about__card-image-overlay">
                <span>Nuestra Visión</span>
              </div>
            </div>
            <div className="about__card-body">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Visión</h3>
              <p>
                Ser la firma financiera líder en Latinoamérica, reconocida por transformar 
                el patrimonio de nuestros clientes a través de soluciones innovadoras, 
                transparentes y orientadas al crecimiento sostenible.
              </p>
            </div>
          </div>

          <div className="about__card about__card--mision" ref={misionRef}>
            <div className="about__card-image">
              <img src="/images/imagen_mision.png" alt="Nuestra Misión" />
              <div className="about__card-image-overlay">
                <span>Nuestra Misión</span>
              </div>
            </div>
            <div className="about__card-body">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Misión</h3>
              <p>
                Ofrecer asesoramiento financiero integral y personalizado, maximizando el 
                rendimiento de cada inversión con estrategias adaptadas al perfil único de 
                cada cliente, bajo los más altos estándares éticos y profesionales.
              </p>
            </div>
          </div>
        </div>

        <div className="about__quote" ref={quoteRef}>
          <div className="about__quote-line"></div>
          <blockquote>
            <span className="about__quote-mark">"</span>
            Tu patrimonio merece el mejor cuidado. <br />
            <strong>Nosotros somos ese cuidado.</strong>
          </blockquote>
          <div className="about__quote-line"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
