'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ConsultationSteps.module.css';

const steps = [
  {
    stepNumber: '01',
    title: 'Avaliação Clínica Integrativa',
    description: 'Análise minuciosa do seu histórico de saúde, estilo de vida, genéticos e sintomas capilares.',
    image: '/images/anamnese.webp',
    badge: 'Anamnese',
  },
  {
    stepNumber: '02',
    title: 'Tricoscopia Digital 3D',
    description: 'Exame de alta precisão que amplia os folículos em até 200x, sem dor e sem cortes.',
    image: '/images/exame.webp',
    badge: 'Exame de Alta Precisão',
  },
  {
    stepNumber: '03',
    title: 'Diagnóstico & Prescrição',
    description: 'Explicação clara da causa exata com fórmula sob medida: loções, shampoos e suplementos.',
    image: '/images/cronograma.webp',
    badge: 'Fórmulas Exclusivas',
  },
  {
    stepNumber: '04',
    title: 'Protocolo Exclusivo + Retorno',
    description: 'Planejamento completo do tratamento com reavaliação garantida em até 90 dias.',
    image: '/images/protocolo.webp',
    badge: 'Retorno em 90 Dias',
  },
];

export default function ConsultationSteps() {
  const whatsappUrl = `https://wa.me/5533991124719?text=${encodeURIComponent(
    'Olá, Dra. Natália! Vi como funciona a consulta no site e gostaria de agendar uma avaliação para o meu caso.'
  )}`;

  return (
    <section id="consulta" className={styles.section}>
      {/* Vetor Abstrato de Fios Capilares no Fundo para Profundidade */}
      <svg className={styles.hairBackgroundVector} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 C300,50 400,600 800,300 C1200,0 1300,500 1600,200" stroke="#6C7458" strokeWidth="2" strokeDasharray="6 6" opacity="0.25"/>
        <path d="M-50,450 C350,250 500,800 950,400 C1300,100 1400,700 1650,400" stroke="#C6984A" strokeWidth="1.5" opacity="0.2"/>
        <path d="M-150,700 C200,500 600,950 1100,550 C1400,300 1500,800 1700,600" stroke="#6C7458" strokeWidth="2.5" opacity="0.18"/>
        <path d="M100,-100 C300,400 100,700 600,900" stroke="#C6984A" strokeWidth="1" strokeDasharray="4 4" opacity="0.15"/>
      </svg>

      {/* Elementos Decorativos de Fundo (Glow) */}
      <div className={styles.glowTopLeft} />
      <div className={styles.glowBottomRight} />

      <div className={styles.container}>
        
        {/* Header da Seção */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>
            Como funciona a Consulta Tricológica
          </h2>
          <p className={styles.subtitle}>
            Um diagnóstico científico, humano e tecnológico para entender a causa real da sua queda e restaurar a saúde dos seus fios.
          </p>
        </motion.div>

        {/* Grid Interativo de Etapas com Imagens */}
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.card3d}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={step.image} 
                  alt={step.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.cardOverlay} />
                <span className={styles.stepNumber}>{step.stepNumber}</span>
                <span className={styles.cardBadge}>{step.badge}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner de Destaque: Investimento e Agendamento */}
        <motion.div 
          className={styles.heroBanner}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.bannerGlow} />

          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <span className={styles.bannerBadge}>✨ Atendimento Exclusivo</span>
              <h3 className={styles.bannerTitle}>Pronta para recuperar a saúde do seu cabelo?</h3>
              <p className={styles.bannerSub}>
                Consulta Completa + Tricoscopia Digital + Retorno Garantido em até 90 dias.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Avaliação detalhada sem pressa</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Início de procedimentos no mesmo dia (opcional)</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Ambiente acolhedor e sedação sem dor</span>
                </div>
              </div>
            </div>

            <div className={styles.bannerPriceCard}>
              <span className={styles.priceLabel}>Investimento da Consulta</span>
              <div className={styles.priceValue}>
                <span className={styles.currency}>R$</span> 300<span className={styles.cents}>,00</span>
              </div>
              <p className={styles.paymentInfo}>
                <strong>R$ 100</strong> no agendamento + <strong>R$ 200</strong> no dia
              </p>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ctaButton3d}
              >
                <span>Agendar Avaliação Agora</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}