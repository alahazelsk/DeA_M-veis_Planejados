import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image component if using Next.js Image optimization

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Section 1: Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-secondary text-secondary-foreground rounded-lg overflow-hidden">
        {/* Placeholder for Background Image - Replace with actual image later */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay for text readability */}
        {/* <Image src="/path/to/hero-image.jpg" layout="fill" objectFit="cover" alt="Projeto D&A Móveis Planejados" className="z-0" /> */}
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">D&A Móveis Planejados: Seu Espaço, Sua Assinatura de Exclusividade.</h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Criamos móveis planejados de alto padrão em Ribeirão Preto que combinam design sofisticado, funcionalidade e a mais alta qualidade em cada detalhe.
          </p>
          <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Solicite seu Orçamento Personalizado</Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Bem-vindo à D&A Móveis Planejados</h2>
        <p className="text-muted-foreground max-w-prose mx-auto">
          Transformamos seus sonhos em ambientes únicos e sofisticados. Na D&A Móveis Planejados, localizada em Ribeirão Preto, somos especialistas na arte da marcenaria de alto padrão. Combinamos paixão pelo design, materiais nobres e execução impecável para criar móveis que não apenas preenchem espaços, mas que contam a sua história e refletem seu estilo de vida.
        </p>
      </section>

      {/* Section 3: Featured Projects */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Inspire-se com a Excelência D&A</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 Placeholder */}
          <div className="border border-border rounded-lg overflow-hidden bg-card">
            <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">[Imagem Projeto 1]</div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Cozinha Gourmet Moderna</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/portfolio">Ver Detalhes</Link>
              </Button>
            </div>
          </div>
          {/* Project 2 Placeholder */}
          <div className="border border-border rounded-lg overflow-hidden bg-card">
            <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">[Imagem Projeto 2]</div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Closet Elegante e Funcional</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/portfolio">Ver Detalhes</Link>
              </Button>
            </div>
          </div>
          {/* Project 3 Placeholder */}
          <div className="border border-border rounded-lg overflow-hidden bg-card">
            <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">[Imagem Projeto 3]</div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Sala de Estar Sofisticada</h3>
              <Button variant="outline" size="sm" asChild>
                <Link href="/portfolio">Ver Detalhes</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="secondary" asChild>
            <Link href="/portfolio">Veja Nosso Portfólio Completo</Link>
          </Button>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="bg-secondary text-secondary-foreground p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Por que Escolher a D&A?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Exclusividade</h3>
            <p className="text-sm">Projetos 100% personalizados para você.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Qualidade Superior</h3>
            <p className="text-sm">Materiais nobres e acabamento impecável.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Design Sofisticado</h3>
            <p className="text-sm">Ambientes que unem estética e funcionalidade.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Atendimento Premium</h3>
            <p className="text-sm">Acompanhamento dedicado em todas as etapas.</p>
          </div>
        </div>
        <div className="text-center mt-6">
           <Button variant="link" asChild className="text-primary hover:text-primary/80">
             <Link href="/sobre">Conheça mais sobre nossos diferenciais</Link>
           </Button>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Vamos Realizar Seu Projeto?</h2>
        <p className="text-muted-foreground mb-6 max-w-prose mx-auto">
          Dê o primeiro passo para transformar seu ambiente. Entre em contato conosco para discutir suas ideias e solicitar um orçamento sem compromisso. Nossa equipe está pronta para atender você.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Solicitar Orçamento Agora</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/5516991936409" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          </Button>
        </div>
      </section>

      {/* Optional Section: Testimonials - Add later if content is provided */}

    </div>
  );
}

