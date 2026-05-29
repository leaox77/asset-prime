import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top-line"></div>
      <div className="footer__container">
        <div className="footer__brand">
          <img src="/images/logo-navbar.png" alt="Asset Prime" className="footer__logo" />
          <p className="footer__tagline">
            Transformando el patrimonio de nuestros clientes con soluciones financieras 
            inteligentes, éticas y orientadas al futuro.
          </p>
          <div className="footer__social">
            {['Li', 'Tw', 'Ig'].map((s) => (
              <a key={s} href="#contacto" className="footer__social-btn" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Wealth Management</a></li>
            <li><a href="#servicios">Educación Financiera</a></li>
            <li><a href="#servicios">Corporate Finance</a></li>
            <li><a href="#servicios">Asesoramiento Financiero</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Quiénes Somos</a></li>
            <li><a href="#nosotros">Nuestra Visión</a></li>
            <li><a href="#nosotros">Nuestro Equipo</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#contacto">Términos de Servicio</a></li>
            <li><a href="#contacto">Política de Privacidad</a></li>
            <li><a href="#contacto">Aviso Legal</a></li>
            <li><a href="#contacto">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-line"></div>
        <div className="footer__bottom-content">
          <p>© {year} Asset Prime. Todos los derechos reservados.</p>
          <p className="footer__disclaimer">
            Las inversiones conllevan riesgos. Consulta con un asesor antes de invertir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
