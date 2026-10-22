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

const siteUrl = 'https://dranataliacoutinho.com.br';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dra. Natália Coutinho | Farmacêutica Esteta & Tricologista',
  description: 'Tratamentos avançados e personalizados para queda de cabelo, alopecias e saúde do couro cabeludo.',
  keywords: [
    'Tricologia',
    'Saúde Capilar',
    'Queda de Cabelo',
    'Tratamento Capilar',
    'Alopecias',
    'Dra Natália Coutinho',
    'Tricologista Governador Valadares'
  ],
  authors: [{ name: 'Dra. Natália Coutinho' }],
  creator: 'Dra. Natália Coutinho',
  openGraph: {
    title: 'Dra. Natália Coutinho | Farmacêutica Esteta & Tricologista',
    description: 'Tratamentos avançados e personalizados para queda de cabelo, alopecias e saúde do couro cabeludo.',
    url: siteUrl,
    siteName: 'Dra. Natália Coutinho - Tricologia',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
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
    title: 'Dra. Natália Coutinho | Farmacêutica Esteta & Tricologista',
    description: 'Tratamentos avançados para queda de cabelo, alopecias e saúde do couro cabeludo.',
    images: [`${siteUrl}/og-image.jpg`],
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