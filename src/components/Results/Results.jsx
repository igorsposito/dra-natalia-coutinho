'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Results.module.css';

const resultsPairs = [
  { id: 1, before: '/images/results/1.jpg', after: '/images/results/2.jpg' },
  { id: 2, before: '/images/results/3.jpg', after: '/images/results/4.jpg' },
  { id: 3, before: '/images/results/5.jpg', after: '/images/results/6.jpg' },
];

export default function Results() {
  const [selectedPair, setSelectedPair] = useState(null);

  const whatsappUrl = `https://wa.me/5533991124719?text=${encodeURIComponent(
    'Olá, Dra. Natália! Vi os resultados no site e gostaria de agendar uma avaliação para o meu caso.'
  )}`;

  const openLightbox = (index) => setSelectedPair(index);
  const closeLightbox = () => setSelectedPair(null);

  const prevPair = () => {
    setSelectedPair((prev) => (prev === 0 ? resultsPairs.length - 1 : prev - 1));
  };

  const nextPair = () => {
    setSelectedPair((prev) => (prev === resultsPairs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPair === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPair();
      if (e.key === 'ArrowRight') nextPair();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPair]);

  return (
    <section id="results" className={styles.results}>
      {/* 1. Iluminações de Fundo (Glows Dramáticos) */}
      <div className={styles.bgGlowTopLeft} aria-hidden="true" />
      <div className={styles.bgGlowCenter} aria-hidden="true" />
      <div className={styles.bgGlowBottomRight} aria-hidden="true" />

      {/* 2. SVG com as linhas de Fios Capilares Fluindo no Fundo */}
      <div className={styles.bgHairGraphic} aria-hidden="true">
        <svg viewBox="0 0 1400 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M -100 100 C 400 300, 1000 100, 700 600 C 400 1000, 1100 800, 1500 1000" 
            stroke="var(--accent-gold, #E6C694)" 
            strokeWidth="4.5" 
            strokeOpacity="0.35"
          />
          <path 
            d="M -50 200 C 450 400, 950 200, 650 700 C 350 1100, 1150 900, 1550 1100" 
            stroke="var(--primary-green, #8F9779)" 
            strokeWidth="3" 
            strokeOpacity="0.3"
            strokeDasharray="10 10"
          />
          <path 
            d="M 100 0 C 500 450, 800 150, 500 750 C 200 1150, 900 1000, 1300 1200" 
            stroke="#FFFFFF" 
            strokeWidth="1.8" 
            strokeOpacity="0.18"
          />
        </svg>
      </div>

      <div className={styles.container}>
        {/* Cabeçalho */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>Alguns de Nossos Resultados</h2>
          <p className={styles.subtitle}>
            Acompanhe a evolução e a recuperação da densidade capilar dos nossos pacientes. Clique para expandir em tela cheia.
          </p>
        </motion.div>
      </div>

      {/* Marquee Infinito Agrupado por Casal */}
      <div className={styles.marqueeContainer}>
        <div className={styles.track}>
          {[...resultsPairs, ...resultsPairs].map((pair, index) => {
            const pairIndex = index % resultsPairs.length;
            
            return (
              <div 
                key={`${pair.id}-${index}`} 
                className={styles.caseGroup}
                onClick={() => openLightbox(pairIndex)}
              >
                <div className={styles.imageCard}>
                  <span className={`${styles.badge} ${styles.beforeBadge}`}>ANTES</span>
                  <Image
                    src={pair.before}
                    alt={`Caso ${pair.id} - Antes`}
                    fill
                    sizes="320px"
                    className={styles.resultImage}
                  />
                </div>

                <div className={styles.imageCard}>
                  <span className={`${styles.badge} ${styles.afterBadge}`}>DEPOIS</span>
                  <Image
                    src={pair.after}
                    alt={`Caso ${pair.id} - Depois`}
                    fill
                    sizes="320px"
                    className={styles.resultImage}
                  />
                </div>

                <div className={styles.expandOverlay}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span>Expandir</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caixa de CTA */}
      <div className={styles.container}>
        <motion.div 
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Sua história de transformação começa na consulta.</h3>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            AGENDAR AVALIAÇÃO COM A DRA. NATÁLIA
          </a>
        </motion.div>
      </div>

      {/* MODAL TELA CHEIA */}
      <AnimatePresence>
        {selectedPair !== null && (
          <motion.div 
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Fechar">
                ✕
              </button>

              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevPair} aria-label="Anterior">
                ❮
              </button>

              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextPair} aria-label="Próximo">
                ❯
              </button>

              <div className={styles.modalHeader}>
                <span className={styles.modalTag}>CASO CLÍNICO {selectedPair + 1}</span>
                <h2>Evolução do Tratamento Capilar</h2>
              </div>

              <div className={styles.modalImagesGrid}>
                <div className={styles.modalImageBox}>
                  <span className={`${styles.badge} ${styles.beforeBadge}`}>ANTES</span>
                  <Image 
                    src={resultsPairs[selectedPair].before} 
                    alt="Antes" 
                    fill 
                    sizes="50vw"
                    className={styles.modalImage}
                  />
                </div>

                <div className={styles.modalImageBox}>
                  <span className={`${styles.badge} ${styles.afterBadge}`}>DEPOIS</span>
                  <Image 
                    src={resultsPairs[selectedPair].after} 
                    alt="Depois" 
                    fill 
                    sizes="50vw"
                    className={styles.modalImage}
                  />
                </div>
              </div>

              <div className={styles.modalCounter}>
                Caso {selectedPair + 1} de {resultsPairs.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}