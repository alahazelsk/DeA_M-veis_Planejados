
'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';

const WhatsAppButton = () => {
  const phoneNumber = "5516991936409"; // D&A's WhatsApp number
  const message = "Olá! Gostaria de mais informações sobre os móveis planejados."; // Optional pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
      aria-label="Fale Conosco pelo WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </Link>
  );
};

export default WhatsAppButton;

