import { Poppins, Dancing_Script, Inter } from 'next/font/google';
import '../styles/variables.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const dancingScript = Dancing_Script({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dancing',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'https://dranataliacoutinho.com.br';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Dra. Natália Coutinho | Tricologista & Saúde Capilar',
  description: 'Tratamentos especializados para queda de cabelo, calvície e saúde do couro cabeludo com acompanhamento médico especializado.',
  keywords: [
    'Tricologia',
    'Saúde Capilar',
    'Queda de Cabelo',
    'Tratamento Capilar',
    'Calvície',
    'Dra Natália Coutinho',
    'Tricologista'
  ],
  authors: [{ name: 'Dra. Natália Coutinho' }],
  creator: 'Dra. Natália Coutinho',
  openGraph: {
    title: 'Dra. Natália Coutinho | Tricologista & Saúde Capilar',
    description: 'Tratamentos especializados para queda de cabelo, calvície e saúde do couro cabeludo.',
    siteName: 'Dra. Natália Coutinho - Tricologia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Natália Coutinho - Tricologista e Saúde Capilar',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Natália Coutinho | Tricologista & Saúde Capilar',
    description: 'Tratamentos especializados para queda de cabelo, calvície e saúde do couro cabeludo.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dancingScript.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}