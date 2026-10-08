'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Olá, Dra. Natália! Meu nome é ${formData.name}. ${
      formData.message ? `\nMensagem: ${formData.message}` : ''
    }`;
    const whatsappUrl = `https://wa.me/5533991124719?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Cabeçalho */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>Agende a Sua Consulta</h2>
          <p className={styles.subtitle}>
            Estamos prontos para acolher o seu caso com a dedicação e o cuidado que a sua saúde capilar merece.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Card com Foto Maior da Médica e Frase + Instagram */}
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.doctorImageWrapper}>
              <Image 
                src="/images/about/contact.png" 
                alt="Dra. Natália Coutinho" 
                fill 
                sizes="(max-width: 992px) 100vw, 45vw"
                className={styles.doctorImg}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.doctorBadge}>
                <strong>Dra. Natália Coutinho</strong>
                <span>Tricologia Médica & Saúde Capilar</span>
              </div>
            </div>

            <div className={styles.infoList}>
              <p className={styles.quoteText}>
                "Cuidar do seu cabelo é cuidar da sua identidade e autoestima. Aguardo você para iniciarmos essa jornada juntos."
              </p>

              <a 
                href="https://instagram.com/dranataliacoutinho" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.instagramLink}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@dranataliacoutinho</span>
              </a>
            </div>
          </motion.div>

          {/* Card do Formulário ou Mensagem de Sucesso */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className={styles.formTitle}>Enviar Mensagem Direta</h3>
                  <p className={styles.formSubtitle}>Preencha os seus dados para iniciar o contato no WhatsApp.</p>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Nome Completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Telefone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Como podemos ajudar? (Opcional)</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        placeholder="Descreva brevemente a sua dúvida ou o seu objetivo..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>INICIAR CONTATO NO WHATSAPP</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="thankyou"
                  className={styles.thankYouBox}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.successIcon}>✓</div>
                  <h3>Obrigado pelo contato!</h3>
                  <p>Sua mensagem foi redirecionada. Nossa equipe já recebeu a sua solicitação e irá responder no seu WhatsApp em breve.</p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }} 
                    className={styles.resetBtn}
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mapa do Google Embed na parte inferior */}
        <motion.div 
          className={styles.mapContainer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.mapHeader}>
            <div className={styles.mapPinIcon}>📍</div>
            <div>
              <h3>Nosso Endereço em Governador Valadares</h3>
              <p>R. Luís Ensch, 428 - Grã-Duquesa, Gov. Valadares - MG, 35057-480</p>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe 
              title="Localização do Consultório Dra. Natália Coutinho"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1068808166567!2d-41.9548981!3d-18.859666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaff169cb45a4a5%3A0xb36a13247bb41e9b!2sR.%20Lu%C3%ADs%20Ensch%2C%20428%20-%20Gr%C3%A3-Duquesa%2C%20Governador%20Valadares%20-%20MG%2C%2035057-480!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}