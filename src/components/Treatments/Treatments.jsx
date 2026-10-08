'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Treatments.module.css';

const treatmentsData = [
  {
    id: 'tricoscopia',
    badge: 'DIAGNÓSTICO',
    title: 'Tricoscopia Digital de Alta Precisão',
    description:
      'Exame minucioso do couro cabeludo utilizando lentes de alta ampliação para analisar a densidade folicular, saúde dos fios e miniaturização em estágios precoces.',
    image: '/images/treatments/tricoscopia.jpg',
    actionText: 'AGENDAR AVALIAÇÃO',
    whatsappMsg: 'Olá, Dra. Natália! Gostaria de agendar uma avaliação com Tricoscopia Digital.',
  },
  {
    id: 'mmp',
    badge: 'TECNOLOGIA',
    title: 'MMP® Capilar & Microagulhamento',
    description: 'Infusão direta e precisa de medicamentos, fatores de crescimento e vitaminas na raiz para interromper a queda e estimular o nascimento de fios densos.',
    image: '/images/treatments/mmp.jpg',
    actionText: 'SABER MAIS SOBRE O MMP',
    whatsappMsg: 'Olá, Dra. Natália! Quero tirar dúvidas e saber mais sobre o MMP Capilar.',
  },
  {
    id: 'alopecias',
    badge: 'RECUPERAÇÃO',
    title: 'Tratamento de Alopecias & Quedas',
    description: 'Protocolos personalizados para calvície masculina, feminina, eflúvio telógeno pós-COVID, pós-parto, estresse ou alterações hormonais.',
    image: '/images/treatments/alopecias.webp',
    actionText: 'CONHECER PROTOCOLOS',
    whatsappMsg: 'Olá, Dra. Natália! Gostaria de agendar uma consulta para tratamento de queda/alopecia.',
  },
  {
    id: 'ledterapia',
    badge: 'ALTA PERFORMANCE',
    title: 'Fotobiomodulação por Laser & LED',
    description: 'Aplicação de luz terapêutica que estimula a microcirculação sanguínea, melhora a oxigenação dos folículos e reduz inflamações no couro cabeludo.',
    image: '/images/treatments/ledterapia.jpg',
    actionText: 'AGENDAR CONSULTA',
    whatsappMsg: 'Olá, Dra. Natália! Quero agendar uma sessão de Fotobiomodulação Capilar.',
  },
  {
    id: 'couro',
    badge: 'TERAPIA CAPILAR',
    title: 'Saúde & Equilíbrio do Couro Cabeludo',
    description: 'Controle e tratamento avançado de dermatite seborreica, caspa, oleosidade excessiva e sensibilidade, restaurando a microbiota capilar.',
    image: '/images/treatments/couro.jpg',
    actionText: 'AGENDAR AVALIAÇÃO',
    whatsappMsg: 'Olá, Dra. Natália! Preciso de avaliação para cuidados e tratamento do couro cabeludo.',
  },
];

export default function Treatments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = treatmentsData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Autoplay com transição ao completar o tempo
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Função para pegar o índice relativo (ex: -2, -1, 0, +1, +2)
  const getSlideIndex = (offset) => {
    return (currentIndex + offset + count) % count;
  };

  const currentItem = treatmentsData[currentIndex];

  return (
    <section id="treatments" className={styles.treatments}>
      <div className={styles.container}>
        {/* Cabeçalho */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
         
          <h2 className={styles.title}>Tratamentos & Protocolos</h2>
          <p className={styles.subtitle}>
            Conheça as soluções médicas de alta precisão para a restauração e saúde do seu cabelo.
          </p>
        </motion.div>

        {/* Palco do Carrossel 3D */}
        <div 
          className={styles.carouselStage}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Esquerda Secundário (-2) */}
          <div 
            className={`${styles.sideCard} ${styles.sideFarLeft}`}
            onClick={() => setCurrentIndex(getSlideIndex(-2))}
          >
            <Image 
              src={treatmentsData[getSlideIndex(-2)].image} 
              alt="Anterior" 
              fill 
              className={styles.sideImg} 
            />
          </div>

          {/* Card Esquerda Próximo (-1) */}
          <div 
            className={`${styles.sideCard} ${styles.sideLeft}`}
            onClick={() => setCurrentIndex(getSlideIndex(-1))}
          >
            <Image 
              src={treatmentsData[getSlideIndex(-1)].image} 
              alt="Anterior" 
              fill 
              className={styles.sideImg} 
            />
          </div>

          {/* CARD PRINCIPAL (CENTRAL) */}
          <div className={styles.mainCard}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentItem.id}
                className={styles.mainCardContent}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                {/* Lado Esquerdo: Textos & Botão */}
                <div className={styles.textSide}>
                  <span className={styles.badge}>{currentItem.badge}</span>
                  <h3 className={styles.cardTitle}>{currentItem.title}</h3>
                  <p className={styles.cardDescription}>{currentItem.description}</p>

                  <a 
                    href={`https://wa.me/5533991124719?text=${encodeURIComponent(currentItem.whatsappMsg)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <span>{currentItem.actionText}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>

                {/* Lado Direito: Foto Principal */}
                <div className={styles.imageSide}>
                  <Image 
                    src={currentItem.image} 
                    alt={currentItem.title} 
                    fill 
                    className={styles.mainImg}
                    priority 
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Direita Próximo (+1) */}
          <div 
            className={`${styles.sideCard} ${styles.sideRight}`}
            onClick={() => setCurrentIndex(getSlideIndex(1))}
          >
            <Image 
              src={treatmentsData[getSlideIndex(1)].image} 
              alt="Próximo" 
              fill 
              className={styles.sideImg} 
            />
          </div>

          {/* Card Direita Secundário (+2) */}
          <div 
            className={`${styles.sideCard} ${styles.sideFarRight}`}
            onClick={() => setCurrentIndex(getSlideIndex(2))}
          >
            <Image 
              src={treatmentsData[getSlideIndex(2)].image} 
              alt="Próximo" 
              fill 
              className={styles.sideImg} 
            />
          </div>
        </div>

        {/* Indicador com Barra de Progresso Loading */}
        <div className={styles.indicatorsContainer}>
          {treatmentsData.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.dotBtn} ${isActive ? styles.dotActive : ''}`}
                aria-label={`Ir para ${item.title}`}
              >
                {isActive && (
                  <motion.span 
                    className={styles.loadingProgress} 
                    key={currentIndex + (isPaused ? '-paused' : '-active')}
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? '0%' : '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}