'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const whatsappUrl = `https://wa.me/5533991124719?text=${encodeURIComponent(
    'Olá! Vi o seu site e quero saber mais sobre a avaliação capilar com a Dra. Natália.'
  )}`;

  return (
    <section className={styles.hero}>
      {/* Imagem de Fundo de Alta Performance */}
      <Image
        src="/images/hero/bg-hero.jpg"
        alt="Dra. Natália Coutinho - Tricologista"
        fill
        priority
        quality={90}
        sizes="100vw"
        className={styles.bgImage}
      />

      {/* Overlay de Degradê Escuro para Legibilidade */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badges}>
            <span className={styles.badge}>TRICOLOGIA</span>
            <span className={styles.badge}>SAÚDE CAPILAR</span>
            <span className={styles.badge}>AVALIAÇÃO PERSONALIZADA</span>
          </div>

          <h1 className={styles.title}>
            A excelência médica que transforma a sua <span className="scriptText">saúde capilar.</span>
          </h1>

          <p className={styles.subtitle}>
            Tratamentos capilares avançados, prevenção e combate à queda de cabelo com acompanhamento médico especializado.
          </p>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.primaryCta}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.85 11.85 0 0012.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.22-1.63a11.9 11.9 0 005.83 1.51h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.45zm-8.47 18.53h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.64-.23-.37a9.93 9.9 0 01-1.52-5.43c0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.14 1.03 7.01 2.9 1.87 1.87 2.9 4.36 2.9 7.01 0 5.48-4.46 9.94-9.95 9.94z"/>
            </svg>
            AGENDAR AVALIAÇÃO
          </a>

          <p className={styles.locationInfo}>
            📍 Atendimentos em Clínica Própria
          </p>
        </div>
      </div>
    </section>
  );
}