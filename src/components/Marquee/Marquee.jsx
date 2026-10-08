'use client';

import styles from './Marquee.module.css';

export default function Marquee() {
  const itemsBand1 = [
    'DRA. NATÁLIA COUTINHO',
    'TRICOLOGIA MÉDICA',
    'SAÚDE CAPILAR',
    'DIAGNÓSTICO PRECISO',
    'TRATAMENTOS AVANÇADOS',
    'ACOMPANHAMENTO EXCLUSIVO',
  ];

  const itemsBand2 = [
    'EXCELÊNCIA MÉDICA',
    'PROTOCOLOS PERSONALIZADOS',
    'TECNOLOGIA DE PONTA',
    'RESTAURAÇÃO CAPILAR',
    'ATENDIMENTO HUMANIZADO',
    'RESULTADOS NATURAIS',
  ];

  const fullList1 = [...itemsBand1, ...itemsBand1];
  const fullList2 = [...itemsBand2, ...itemsBand2];

  return (
    <div className={styles.crossedWrapper}>
      {/* 1. Faixa de Trás (RETA) */}
      <div className={`${styles.banner} ${styles.straightBanner}`}>
        <div className={styles.content}>
          {fullList1.map((item, index) => (
            <span key={index} className={styles.item}>
              {item}
              <span className={styles.diamond}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. Faixa da Frente (INCLINADA) */}
      <div className={`${styles.banner} ${styles.diagonalBanner}`}>
        <div className={styles.content}>
          {fullList2.map((item, index) => (
            <span key={index} className={styles.item}>
              {item}
              <span className={styles.diamond}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}