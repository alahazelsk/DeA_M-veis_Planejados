import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-16 border-t border-border/40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1: Logo & About */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-primary">D&A Móveis Planejados</h3>
          <p className="text-muted-foreground">
            Criando ambientes exclusivos com móveis planejados de alto padrão em Ribeirão Preto.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Navegação</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link>
            <Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfólio</Link>
            <Link href="/contato" className="hover:text-primary transition-colors">Contato</Link>
            {/* Add link to Privacy Policy if created */}
          </nav>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <a href="https://wa.me/5516991936409" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <Phone className="h-4 w-4 mr-2" /> (16) 99193-6409 (WhatsApp)
            </a>
            {/* Add email if available */}
            {/* <a href="mailto:contato@deamoveisplanejados.com.br" className="flex items-center hover:text-primary transition-colors">
              <Mail className="h-4 w-4 mr-2" /> contato@deamoveisplanejados.com.br
            </a> */}
            <p className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" /> Rua Tuffi Rassi, 140, Jardim do Trevo, Ribeirão Preto/SP
            </p>
            <a href="https://www.instagram.com/deamoveisplanejados" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <Instagram className="h-4 w-4 mr-2" /> @deamoveisplanejados
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-xs text-muted-foreground mt-8 pt-4 border-t border-border/20">
        © {currentYear} D&A Móveis Planejados. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;

