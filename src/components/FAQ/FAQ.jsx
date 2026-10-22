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
    question: 'Como funciona a primeira consulta de Tricologia?',
    answer: 'É uma avaliação completa e minuciosa. Realizamos anamnese detalhada, exame de Tricoscopia Digital do couro cabeludo, explicação clara da causa do seu problema e a montagem do seu protocolo personalizado com prescrição sob medida.',
  },
  {
    question: 'Tenho descamação, coceira e suspeita de alopecia. É possível tratar?',
    answer: 'Sim! Tratamos todos os tipos de alopecias e afecções do couro cabeludo (como dermatite e psoríase). Através da Tricoscopia Digital, identificamos a causa exata da inflamação para estancar os sintomas e recuperar a saúde dos fios.',
  },
  {
    question: 'A consulta dá direito a retorno?',
    answer: 'Sim! A consulta inclui um retorno garantido em até 90 dias para reavaliar a evolução do seu tratamento e fazer os ajustes necessários no seu protocolo.',
  },
  {
    question: 'A clínica aceita convênios para consultas e procedimentos?',
    answer: 'Os atendimentos são exclusivamente particulares para garantir uma consulta dedicada, personalizada e sem pressa. Disponibilizamos recibo e documentação necessária caso você deseje solicitar reembolso no seu plano.',
  },
  {
    question: 'Em quanto tempo começo a notar os resultados?',
    answer: 'A redução da queda e a melhora na saúde do couro cabeludo costumam ser percebidas nas primeiras semanas. O ganho de densidade e o nascimento de novos fios ficam mais evidentes a partir do 3º mês de protocolo contínuo.',
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
              Esclareça suas principais dúvidas sobre diagnósticos, procedimentos sem dor e cuidados com a sua saúde capilar.
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