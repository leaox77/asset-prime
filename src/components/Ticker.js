import React from 'react';
import './Ticker.css';

const items = [
  'Educación Financiera',
  'Soluciones Fintech',
  'Gestión Patrimonial',
  'Compliance & Riesgo',
  'Wealth Management',
  'Corporate Finance',
  'Asesoramiento Financiero',
];

const Ticker = () => {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker__track">
        <div className="ticker__list">
          {repeated.map((item, i) => (
            <React.Fragment key={i}>
              <span className="ticker__item">{item.toUpperCase()}</span>
              <span className="ticker__dot" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;