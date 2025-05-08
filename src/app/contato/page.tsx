
'use client'; // Mark as client component for form handling

import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react'; // For basic form state

// export const metadata: Metadata = { // Metadata needs to be defined in server components or layout
//   title: 'Contato e Orçamento | D&A Móveis Planejados',
//   description: 'Entre em contato com a D&A Móveis Planejados em Ribeirão Preto para solicitar seu orçamento personalizado ou tirar dúvidas.',
// };

export default function ContatoPage() {
  // Basic form state handling (can be expanded later)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic (e.g., send email, API call)
    console.log('Form Data Submitted:', formData);
    alert('Obrigado pelo seu contato! Sua solicitação foi enviada (simulação).');
    // Reset form potentially
    setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Fale Conosco e Solicite Seu Orçamento Personalizado</h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
          Está pronto para transformar seu ambiente com móveis planejados de alto padrão? A equipe da D&A Móveis Planejados em Ribeirão Preto está à sua disposição para entender suas necessidades, apresentar as melhores soluções e elaborar um orçamento detalhado para o seu projeto.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Solicite seu Orçamento</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" name="name" type="text" placeholder="Seu nome completo" required value={formData.name} onChange={handleChange} className="bg-input" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required value={formData.email} onChange={handleChange} className="bg-input" />
            </div>
            <div>
              <Label htmlFor="phone">Telefone/WhatsApp</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX" required value={formData.phone} onChange={handleChange} className="bg-input" />
            </div>
            <div>
              <Label htmlFor="projectType">Tipo de Projeto/Ambiente</Label>
              <Input id="projectType" name="projectType" type="text" placeholder="Ex: Cozinha, Dormitório, Sala..." value={formData.projectType} onChange={handleChange} className="bg-input" />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" placeholder="Descreva suas ideias, necessidades, dimensões aproximadas..." required value={formData.message} onChange={handleChange} className="bg-input" rows={5} />
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
              <p className="text-sm text-muted-foreground mt-2">[Consultar CEP e adicionar aqui]</p>
              <p className="text-sm text-muted-foreground mt-1">Horário: [Definir - Ex: Seg-Sex 8h-18h, Sáb 8h-12h (com hora marcada)]</p>
              {/* Placeholder for Map */}
              <div className="mt-4 h-48 bg-muted rounded flex items-center justify-center text-muted-foreground">
                [Mapa Google Maps Incorporado]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

