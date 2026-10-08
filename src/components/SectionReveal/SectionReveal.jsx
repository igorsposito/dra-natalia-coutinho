'use client';

import { motion } from 'framer-motion';

// Variantes de animação exclusivas para cada tipo de efeito
const variants = {
  // Animação 1: Fade Up suave + Escala (ideal para Hero e Sobre)
  fadeUp: {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  // Animação 2: Surgimento vindo da Esquerda (ideal para destaques de imagem/texto)
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  // Animação 3: Surgimento vindo da Direita
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  // Animação 4: Zoom In com efeito de mola (ideal para Cards de Tratamentos e Depoimentos)
  zoomIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  // Animação 5: Revelação Elegante em Rotação 3D Sutil (ideal para Perguntas Frequentes e Rodapé)
  flipUp: {
    hidden: { opacity: 0, y: 40, rotateX: 15 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
};

export default function SectionReveal({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  duration = 0.7 
}) {
  return (
    <motion.div
      variants={variants[variant] || variants.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}