export const whatsappLink = (mensagem) => 
  `https://wa.me/5533991124719?text=${encodeURIComponent(mensagem)}`;

export const servicesData = [
  {
    id: 'tricosscopia',
    title: 'Avaliação por Tricoscopia',
    description: 'Análise detalhada do couro cabeludo com lente de aumento digital para diagnosticar causas de queda e afinamento.',
    ctaText: 'Agendar Avaliação',
    whatsappMessage: 'Olá! Vi o site e gostaria de agendar uma avaliação por Tricoscopia com a Dra. Natália.'
  },
  {
    id: 'mmp-capilar',
    title: 'MMP Capilar & Mesoterapia',
    description: 'Microinfusão de medicamentos diretamente no couro cabeludo para estimular o crescimento e fortalecer os fios.',
    ctaText: 'Saber mais sobre MMP',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre o MMP Capilar.'
  },
  {
    id: 'ledterapia',
    title: 'Fotobiomodulação / LEDterapia',
    description: 'Uso de luzes LED de baixa intensidade para reduzir inflamações, melhorar a circulação e acelerar o ciclo capilar.',
    ctaText: 'Consultar Tratamento',
    whatsappMessage: 'Olá! Vi no seu site sobre a LEDterapia e quero tirar algumas dúvidas.'
  },
  {
    id: 'queda-calvicie',
    title: 'Tratamento para Calvície e Alopecias',
    description: 'Protocolos personalizados para combater a calvície masculina e feminina (Androgenética, Eflúvio Telógeno, etc.).',
    ctaText: 'Quero Tratar Queda Capilar',
    whatsappMessage: 'Olá! Vim pelo seu site e preciso de um tratamento para queda de cabelo.'
  }
];