import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import { supabase } from '../lib/supabaseClient';

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const el = ref.current;
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validación básica adicional
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        throw new Error('Por favor completa todos los campos requeridos.');
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        throw new Error('Por favor ingresa un email válido.');
      }

      const { data, error: supabaseError } = await supabase
        .from('contact_requests')
        .insert([
          {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone?.trim() || null,
            service: form.service || null,
            message: form.message.trim(),
            status: 'pending'
          }
        ])
        .select();

      if (supabaseError) {
        console.error('Supabase error details:', supabaseError);
        throw new Error(supabaseError.message || 'Error al guardar en la base de datos.');
      }

      console.log('✅ Datos guardados exitosamente:', data);
      
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 4000);

    } catch (error) {
      console.error('❌ Error en el formulario:', error);
      setError(error.message || 'Ocurrió un error inesperado. Por favor, intenta nuevamente.');
      setLoading(false);
    }
  };

  const infoItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 118.5 7 1.5 1.5 0 0110 8.5z" fill="currentColor"/>
        </svg>
      ),
      label: 'Oficina Principal',
      value: 'Calle, Washington Gral, esquina Juan de Salazar, Numero #791',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 4h15c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-15C1.67 16 1 15.33 1 14.5v-9C1 4.67 1.67 4 2.5 4zM10 11L2 5.5M10 11l8-5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Email',
      value: 'aassetsprime@gmail.com | info@assetprime.net',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.5 3h3l1.5 3.5-2 1.5a11 11 0 005 5l1.5-2L16 12.5v3A1.5 1.5 0 0114.5 17C7.6 17 2 11.4 2 4.5A1.5 1.5 0 013.5 3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Teléfono',
      value: '+595 991 454992',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Horario',
      value: 'Lun – Vie: 9:00 – 18:00',
    },
  ];

  return (
    <section className="contact" id="contacto" ref={ref}>
      <div className="contact__bg">
        <div className="contact__glow"></div>
      </div>

      <div className="contact__container">
        <div className={`contact__left ${visible ? 'revealed' : ''}`}>
          <span className="contact__tag">Contáctanos</span>
          <h2 className="contact__title">
            Comienza tu <br />
            <span className="contact__title-accent">viaje financiero</span>
          </h2>
          <p className="contact__subtitle">
            Nuestros expertos están listos para ayudarte a diseñar la estrategia 
            de inversión perfecta para tus objetivos.
          </p>

          <div className="contact__info">
            {infoItems.map((item, i) => (
              <div className="contact__info-item" key={i}>
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <span className="contact__info-label">{item.label}</span>
                  <span className="contact__info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__social">
            {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
              <a key={s} href="#contacto" className="contact__social-link">{s}</a>
            ))}
          </div>
        </div>

        <div className={`contact__right ${visible ? 'revealed' : ''}`}>
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#C9A84C" strokeWidth="1.5"/>
                  <path d="M10 16l4 4 8-8" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Nos pondremos en contacto contigo en las próximas 24 horas.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Solicitar Asesoría</h3>

              {error && (
                <div className="contact__error">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="8" cy="8" r="7" stroke="#f87171" strokeWidth="1.5"/>
                    <path d="M8 4v5M8 12v-1" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="contact__field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+591 ..."
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="contact__field">
                  <label>Servicio de Interés</label>
                  <select 
                    name="service" 
                    value={form.service} 
                    onChange={handleChange} 
                    required
                    disabled={loading}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="wealth">Wealth Management</option>
                    <option value="education">Educación Financiera</option>
                    <option value="corporate">Corporate Finance</option>
                    <option value="advisory">Asesoramiento Financiero</option>
                    <option value="crypto">Activos Digitales</option>
                  </select>
                </div>
              </div>

              <div className="contact__field contact__field--full">
                <label>Mensaje *</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Cuéntanos sobre tus objetivos financieros..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <button 
                type="submit" 
                className="contact__submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="contact__spinner"></span>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Solicitud</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;