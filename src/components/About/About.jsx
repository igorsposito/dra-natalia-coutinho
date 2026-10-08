'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  const whatsappUrl = `https://wa.me/5533991124719?text=${encodeURIComponent(
    'Olá, Dra. Natália! Vi o seu site e gostaria de agendar uma consulta.'
  )}`;

  return (
    <section id="about" className={styles.about}>
      {/* Estrutura de DNA Capilar Animada no Fundo */}
      <div className={styles.bgDnaGraphic} aria-hidden="true">
        <svg viewBox="0 0 300 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.dnaSvg}>
          {/* Fita 1 - Dourada */}
          <path 
            d="M 150 0 C 250 100, 50 200, 150 300 C 250 400, 50 500, 150 600 C 250 700, 50 800, 150 900" 
            stroke="var(--accent-gold)" 
            strokeWidth="3.5" 
            strokeOpacity="0.45"
            className={styles.strand1}
          />
          {/* Fita 2 - Verde Oliva (Cruzada) */}
          <path 
            d="M 150 0 C 50 100, 250 200, 150 300 C 50 400, 250 500, 150 600 C 50 700, 250 800, 150 900" 
            stroke="var(--primary-green)" 
            strokeWidth="3.5" 
            strokeOpacity="0.35"
            className={styles.strand2}
          />

          {/* Pontes de Conexão do DNA */}
          <line x1="110" y1="150" x2="190" y2="150" stroke="var(--accent-gold)" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="110" y1="450" x2="190" y2="450" stroke="var(--accent-gold)" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="110" y1="750" x2="190" y2="750" stroke="var(--accent-gold)" strokeWidth="1.5" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className={styles.container}>
        {/* Foto da Médica - Reveal vindo da esquerda */}
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Image 
            src="/images/about/dra-natalia-about.png" 
            alt="Dra. Natália Coutinho" 
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className={styles.doctorImage}
            priority
          />
          <div className={styles.experienceBadge}>
            <div className={styles.badgePulse} />
            <strong>Acompanhamento</strong>
            <span>Médico Exclusivo</span>
          </div>
        </motion.div>

        {/* Conteúdo Institucional - Reveal vindo da direita */}
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className={styles.title}>
            Dra. Natália Coutinho
          </h2>
          <p className={styles.subtitle}>
            Médica especialista dedicada à saúde capilar, prevenção e restauração da autoestima.
          </p>

          <p className={styles.description}>
            Acredito que o tratamento capilar vai muito além da estética: é sobre devolver a confiança e a qualidade de vida de cada paciente. Com uma abordagem científica e personalizada, investigamos as causas raízes da queda de cabelo e das afecções do couro cabeludo para indicar os protocolos mais assertivos.
          </p>

          <ul className={styles.highlights}>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Diagnóstico preciso via Tricoscopia Digital
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Tratamentos modernos e sem dor
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Plano terapêutico individualizado para cada tipo de alopecia
            </li>
          </ul>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            CONHECER TRATAMENTOS
          </a>
        </motion.div>
      </div>
    </section>
  );
}