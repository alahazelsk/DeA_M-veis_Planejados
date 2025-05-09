import Link from 'next/link';
import { Instagram } from 'lucide-react'; // Assuming lucide-react is installed by the template

const Header = () => {
  return (
    <header className="bg-background text-foreground sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for Logo - User needs to provide the high-res logo */}
          <span className="font-bold sm:inline-block text-lg text-primary">D&A Móveis Planejados</span>
            "images": [
      "/logo/logo_trasparente01.png"
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
          <Link href="/sobre" className="transition-colors hover:text-foreground/80 text-foreground/60">Sobre Nós</Link>
          <Link href="/servicos" className="transition-colors hover:text-foreground/80 text-foreground/60">Serviços</Link>
          <Link href="/portfolio" className="transition-colors hover:text-foreground/80 text-foreground/60">Portfólio</Link>
          <Link href="/contato" className="transition-colors hover:text-foreground/80 text-foreground/60">Contato</Link>
          <a href="https://www.instagram.com/deamoveisplanejados" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
        </nav>
        {/* Add mobile menu button here if needed */}
      </div>
    </header>
  );
};

export default Header;

