import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background text-foreground sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between"> {/* Increased height slightly for logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Replaced text with Image component */}
          <Image 
            src="/logo/logo_fonte_branca_sem_fundo.png" 
            alt="D&A Móveis Planejados Logo" 
            width={130} // Adjusted width for aspect ratio
            height={40} // Set height
            priority // Prioritize loading the logo
            className="h-10 w-auto" // Control height via class, let width adjust
          />
          {/* Removed the original text span */}
        </Link>
        {/* Mobile Menu Trigger (Hidden on larger screens) */}
        {/* You might need to add a Sheet component trigger here for mobile */}
        {/* <Sheet> ... </Sheet> */}

        {/* Desktop Navigation (Hidden on smaller screens) */}
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
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

        {/* Placeholder for Mobile Menu Button/Drawer - Needs implementation */}
        <div className="md:hidden"> 
          {/* Add your mobile menu button/icon here */}
          {/* Example: <Button variant="ghost" size="icon"> <Menu /> </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
