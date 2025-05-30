
'use client'; // Mark as client component for form handling

import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

// export const metadata: Metadata = { // Metadata needs to be defined in server components or layout
//   title: 'Contato e Orçamento | D&A Móveis Planejados',
//   description: 'Entre em contato com a D&A Móveis Planejados em Ribeirão Preto para solicitar seu orçamento personalizado ou tirar dúvidas.',
// };

export default function ContatoPage() {

  // No need for state management here if using standard Formspree submission

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Fale Conosco e Solicite Seu Orçamento Personalizado</h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
          Está pronto para transformar seu ambiente com móveis planejados de alto padrão? A equipe da D&A Móveis Planejados em Ribeirão Preto está à sua disposição para entender suas necessidades, apresentar as melhores soluções e elaborar um orçamento detalhado para o seu projeto.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        {/* Contact Form - Now points to Formspree */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Solicite seu Orçamento</h2>
          {/* Formspree handles submission. */}
          <form action="https://formspree.io/f/mwpobjoq" method="POST" className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              {/* Use 'name' attribute for Formspree */}
              <Input id="name" name="name" type="text" placeholder="Seu nome completo" required className="bg-input" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required className="bg-input" />
            </div>
            <div>
              <Label htmlFor="phone">Telefone/WhatsApp</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX" required className="bg-input" />
            </div>
            <div>
              <Label htmlFor="projectType">Tipo de Projeto/Ambiente</Label>
              <Input id="projectType" name="projectType" type="text" placeholder="Ex: Cozinha, Dormitório, Sala..." className="bg-input" />
            </div>
            {/* Added Investment Field */}
            <div>
              <Label htmlFor="investimento">Quanto pretende investir? (Opcional)</Label>
              <Input id="investimento" name="investimento" type="text" placeholder="Ex: R$ 10.000 - R$ 20.000" className="bg-input" />
            </div>
            {/* Optional: Add a hidden field for subject if needed by Formspree setup */}
            {/* <input type="hidden" name="_subject" value="Novo Contato - Site D&A Móveis" /> */}
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" placeholder="Descreva suas ideias, necessidades, dimensões aproximadas..." required className="bg-input" rows={5} />
            </div>
            <Button type="submit" className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">Enviar Solicitação</Button>
          </form>
        </div>

        {/* Other Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Outras Formas de Contato</h2>
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-primary">WhatsApp Direto</h3>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://wa.me/5516991936409" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" /> (16) 99193-6409 - Clique para conversar
                </a>
              </Button>
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-primary">Redes Sociais</h3>
               <Button asChild variant="outline" className="w-full justify-start">
                 <a href="https://www.instagram.com/deamoveisplanejados" target="_blank" rel="noopener noreferrer">
                   <Instagram className="h-4 w-4 mr-2" /> @deamoveisplanejados
                 </a>
               </Button>
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-primary">Nosso Endereço</h3>
              <p className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Rua Tuffi Rassi, 140<br />Jardim do Trevo, Ribeirão Preto - SP</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">CEP: 14092-310</p> 
              <p className="text-sm text-muted-foreground mt-1">Horário: Seg-Sex 8h-18h, Sáb 8h-12h (Agende sua visita!)</p> 
              {/* Google Maps Embed */}
              <div className="mt-4 rounded overflow-hidden border border-border">
                 <iframe 
                   src="https://maps.google.com/maps?q=D%26A%20M%C3%B3veis%20Planejados%20Rua%20Tuffi%20Rassi%2C%20140%20Ribeir%C3%A3o%20Preto&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                   width="100%" 
                   height="300" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
