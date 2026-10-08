'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'Os procedimentos capilares doem? Existe tratamento sem dor?',
    answer: 'Não precisa ter medo do desconforto. Aqui na clínica oferecemos a sedação consciente (óxido nitroso/gás do riso), permitindo que você realize procedimentos como MMP® e microagulhamento de forma totalmente relaxada e sem dor.',
  },
  {
    question: 'Lavar o cabelo todos os dias faz mal ou apodrece os fios?',
    answer: 'Isso é um mito popular! Lavar diariamente não apodrece a raiz. Na verdade, para quem tem o couro cabeludo muito oleoso, a lavagem diária é necessária para evitar o acúmulo de sebo, caspa, coceira e queda.',
  },
  {
    question: 'Tenho descamação, coceira e suspeita de psoríase. É possível tratar?',
    answer: 'Sim! Psoríase e dermatites no couro cabeludo têm tratamento e controle eficaz. Através da Tricoscopia Digital, identificamos a causa da inflamação ativa para estancar a coceira e controlar a descamação.',
  },
  {
    question: 'Como funciona a primeira consulta de Tricologia?',
    answer: 'A consulta inicial é minuciosa. Realizamos anamnese completa, exames de sangue e a Tricoscopia Digital, exame de alta precisão que analisa os folículos em tempo real para estruturar o seu protocolo exclusivo.',
  },
  {
    question: 'A clínica aceita convênios médicos para consultas?',
    answer: 'Os atendimentos são exclusivamente particulares para garantir a atenção necessária a cada caso. No entanto, emitimos nota fiscal médica detalhada para que você possa solicitar reembolso no seu plano.',
  },
  {
    question: 'Em quanto tempo começo a notar os resultados?',
    answer: 'A redução da queda é percebida nas primeiras sessões (30 a 60 dias). O ganho de densidade e o nascimento de novos fios ficam mais evidentes a partir do 3º mês de protocolo contínuo.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        {/* Coluna da Esquerda: Foto */}
        <motion.div 
          className={styles.imageCol}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/faq-clinic.jpg" 
              alt="Consultório de Tricologia Dra. Natália Coutinho" 
              fill 
              className={styles.faqImage}
              sizes="(max-width: 992px) 100vw, 45vw"
            />
          </div>
        </motion.div>

        {/* Coluna da Direita: Título + Accordion */}
        <motion.div 
          className={styles.contentCol}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Dúvidas Frequentes</h2>
            <p className={styles.subtitle}>
              Esclareça suas principais dúvidas sobre diagnósticos, procedimentos sem dor e cuidados diários com a saúde capilar.
            </p>
          </div>

          <div className={styles.accordionList}>
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''}`}
                >
                  <button 
                    className={styles.questionBtn}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <svg 
                      className={`${styles.arrowIcon} ${isOpen ? styles.arrowRotate : ''}`} 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className={styles.answerWrapper}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className={styles.answerText}>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}