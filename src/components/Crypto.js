import React, { useEffect, useRef, useState } from 'react';
import './Crypto.css';

const cryptoData = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    img: '/images/bitcoin.png',
    change: '+4.28%',
    positive: true,
    desc: 'El oro digital. La primera criptomoneda descentralizada del mundo y el activo de reserva de valor más confiable del ecosistema cripto.',
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    img: '/images/etherium.png',
    change: '+2.91%',
    positive: true,
    desc: 'La plataforma de contratos inteligentes líder. Base del ecosistema DeFi y NFT, con una red robusta de desarrolladores globales.',
  },
];

const Crypto = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="crypto" id="crypto" ref={sectionRef}>
      <div className="crypto__bg">
        <div className="crypto__glow crypto__glow--1"></div>
        <div className="crypto__glow crypto__glow--2"></div>
        <img src="/images/cuadricula.png" alt="" className="crypto__grid" aria-hidden="true" />
      </div>

      <div className="crypto__container">
        <div className={`crypto__header ${visible ? 'revealed' : ''}`}>
          <span className="crypto__tag">Activos Digitales</span>
          <h2 className="crypto__title">
            Invierte en el futuro del <br />
            <span className="crypto__title-accent">dinero digital</span>
          </h2>
          <p className="crypto__subtitle">
            Accede a los activos digitales más sólidos del mercado con la
            seguridad y respaldo de expertos en finanzas cripto.
          </p>
        </div>

        <div className="crypto__cards">
          {cryptoData.map((coin, i) => (
            <div
              key={coin.id}
              className={`crypto-card ${visible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="crypto-card__header">
                <div className="crypto-card__coin">
                  <img src={coin.img} alt={coin.name} />
                </div>
                <div className="crypto-card__info">
                  <h3>{coin.name}</h3>
                  <span>{coin.symbol}</span>
                </div>
                <div className={`crypto-card__change ${coin.positive ? 'positive' : 'negative'}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d={coin.positive ? 'M6 2L10 8H2L6 2Z' : 'M6 10L2 4H10L6 10Z'} fill="currentColor"/>
                  </svg>
                  {coin.change}
                </div>
              </div>

              <p className="crypto-card__desc">{coin.desc}</p>

              <div className="crypto-card__chart">
                <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`grad-${coin.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {coin.id === 'btc' ? (
                    <>
                      <path d="M0,50 L20,42 L40,38 L60,44 L80,30 L100,22 L120,28 L140,15 L160,10 L180,5 L200,2" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M0,50 L20,42 L40,38 L60,44 L80,30 L100,22 L120,28 L140,15 L160,10 L180,5 L200,2 L200,60 L0,60Z" fill={`url(#grad-${coin.id})`}/>
                    </>
                  ) : (
                    <>
                      <path d="M0,45 L20,48 L40,35 L60,40 L80,28 L100,32 L120,20 L140,24 L160,12 L180,8 L200,4" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M0,45 L20,48 L40,35 L60,40 L80,28 L100,32 L120,20 L140,24 L160,12 L180,8 L200,4 L200,60 L0,60Z" fill={`url(#grad-${coin.id})`}/>
                    </>
                  )}
                </svg>
              </div>

              <a href="#contacto" className="crypto-card__btn">
                <span>Invertir Ahora</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className={`crypto__disclaimer ${visible ? 'revealed' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M8 5v3M8 10v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p>Las criptomonedas son activos de alto riesgo. Los rendimientos pasados no garantizan resultados futuros. Consulta con nuestros asesores antes de invertir.</p>
        </div>
      </div>
    </section>
  );
};

export default Crypto;
