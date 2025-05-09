import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import WhatsAppButton from '@/components/WhatsAppButton'; // Import WhatsAppButton

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "D&A Móveis Planejados - Alto Padrão em Ribeirão Preto",
  description: "Marcenaria especializada em móveis planejados de alto padrão em Ribeirão Preto. Projetos exclusivos para cozinhas, dormitórios, salas e mais."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark"> {/* Changed lang to pt-BR */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header /> {/* Add Header */} 
        <main className="flex-grow container mx-auto px-4 py-8"> {/* Add main content area */} 
          {children}
        </main>
        <Footer /> {/* Add Footer */} 
        <WhatsAppButton /> {/* Add WhatsApp Button */} 
      </body>
    </html>
  );
}

