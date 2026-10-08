'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/5533991124719?text=${encodeURIComponent(
    'Olá, Dra. Natália! Gostaria de agendar uma consulta.'
  )}`;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo da Dra. Natália */}
        <a href="#hero" className={styles.logoLink} aria-label="Ir para o início">
          <Image
            src="/images/logo-header.png"
            alt="Dra. Natália Coutinho"
            width={180}
            height={45}
            priority
            className={styles.logoImage}
          />
        </a>

        {/* Links de Navegação */}
        <nav className={styles.nav}>
          <a href="#about">Sobre</a>
          <a href="#treatments">Tratamentos</a>
          <a href="#results">Resultados</a>
          <a href="#faq">Dúvidas</a>
          <a href="#contact">Contato</a>
        </nav>

        {/* Botão de Ação / Agendamento */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}