'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Linha Principal de Conteúdo */}
        <div className={styles.topRow}>
          {/* Coluna 1: Logo, Descrição e Redes Sociais */}
          <div className={styles.brandCol}>
            <a href="#hero" className={styles.logoLink} aria-label="Voltar ao topo">
              <Image 
                src="/images/logo-footer.png" 
                alt="Dra. Natália Coutinho" 
                width={200} 
                height={50} 
                className={styles.brandLogo}
              />
            </a>
            <p className={styles.brandDesc}>
              Atendimento médico especializado, diagnóstico preciso e tratamentos avançados para a saúde e restauração dos seus cabelos.
            </p>
            <div className={styles.socialWrapper}>
              <a 
                href="https://www.instagram.com/dranataliacoutinho" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="Instagram da Dra. Natália Coutinho"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@dranataliacoutinho</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.navList}>
              <li><a href="#about">Sobre a Médica</a></li>
              <li><a href="#treatments">Tratamentos</a></li>
              <li><a href="#results">Resultados</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
              <li><a href="#contact">Agendamento</a></li>
            </ul>
          </div>

          {/* Coluna 3: Informações da Clínica + CRM */}
          <div className={styles.infoCol}>
            <h4 className={styles.colTitle}>Atendimento Presencial</h4>
            <p className={styles.address}>
              R. Luís Ensch, 428 - Grã-Duquesa<br />
              Governador Valadares - MG, 35057-480
            </p>
            <p className={styles.contactInfo}>
              <strong>WhatsApp:</strong> (33) 99112-4719
            </p>
            <div className={styles.crmBadge}>
              CRM-MG | Tricologia Médica
            </div>
          </div>
        </div>

        {/* Linha Inferior de Direitos e Créditos */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Dra. Natália Coutinho. Todos os direitos reservados.
          </p>

          <div className={styles.developerCol}>
            <span className={styles.devText}>Desenvolvido por</span>
            <a 
              href="https://www.agavelab.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.agaveLink}
              title="Ágave Lab - Desenvolvimento Web & Software"
            >
              <Image 
                src="/images/logo-agave.png" 
                alt="Ágave Lab Logo" 
                width={100} 
                height={26} 
                className={styles.agaveLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}