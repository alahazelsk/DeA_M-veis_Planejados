import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import Image from 'next/image'; // Temporarily commented out for testing

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16"> {/* Adjusted spacing for mobile */}
      {/* Section 1: Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-secondary text-secondary-foreground rounded-lg overflow-hidden">
        {/* Background Image - Replaced with <img> */}
        <img 
          src="/salas/salas-05.jpg" 
          alt="Sala de estar planejada D&A Móveis" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay */}
        <div className="relative z-20 p-4 sm:p-8"> {/* Responsive padding */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">D&A Móveis Planejados: Seu Espaço, Sua Assinatura de Exclusividade.</h1> {/* Responsive text */}
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto"> {/* Responsive text */}
            Criamos móveis planejados de alto padrão em Ribeirão Preto que combinam design sofisticado, funcionalidade e a mais alta qualidade em cada detalhe.
          </p>
          <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Solicite seu Orçamento Personalizado</Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section className="text-center container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Bem-vindo à D&A Móveis Planejados</h2> {/* Responsive text */}
        <p className="text-muted-foreground max-w-prose mx-auto text-sm sm:text-base"> {/* Responsive text */}
          Transformamos seus sonhos em ambientes únicos e sofisticados. Na D&A Móveis Planejados, localizada em Ribeirão Preto, somos especialistas na arte da marcenaria de alto padrão. Combinamos paixão pelo design, materiais nobres e execução impecável para criar móveis que não apenas preenchem espaços, mas que contam a sua história e refletem seu estilo de vida.
        </p>
      </section>

      {/* Section 3: Featured Projects */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Inspire-se com a Excelência D&A</h2> {/* Responsive text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"> {/* Responsive gap */}
          {/* Project 1 */}
          <div className="border border-border rounded-lg overflow-hidden bg-card flex flex-col">
            <div className="relative h-48 w-full">
              <img 
                src="/cozinhas/cozinhas-10.jpg" 
                alt="Cozinha planejada moderna" 
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg" 
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold mb-2 flex-grow text-base sm:text-lg">Cozinha Gourmet Moderna</h3> {/* Responsive text */}
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <Link href="/portfolio?category=cozinhas">Ver Detalhes</Link>
              </Button>
            </div>
          </div>
          {/* Project 2 */}
          <div className="border border-border rounded-lg overflow-hidden bg-card flex flex-col">
            <div className="relative h-48 w-full">
              <img 
                src="/dormitorios/dormitorios-08.jpg" 
                alt="Dormitório planejado elegante" 
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg" 
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold mb-2 flex-grow text-base sm:text-lg">Dormitório Elegante e Funcional</h3> {/* Responsive text */}
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <Link href="/portfolio?category=dormitorios">Ver Detalhes</Link>
              </Button>
            </div>
          </div>
          {/* Project 3 */}
          <div className="border border-border rounded-lg overflow-hidden bg-card flex flex-col">
            <div className="relative h-48 w-full">
              <img 
                src="/salas/salas-20.jpg" 
                alt="Sala de estar planejada sofisticada" 
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg" 
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold mb-2 flex-grow text-base sm:text-lg">Sala de Estar Sofisticada</h3> {/* Responsive text */}
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <Link href="/portfolio?category=salas">Ver Detalhes</Link>
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
      <section className="bg-secondary text-secondary-foreground p-4 sm:p-8 rounded-lg container mx-auto px-4"> {/* Responsive padding */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Por que Escolher a D&A?</h2> {/* Responsive text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center"> {/* Responsive grid and gap */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">Exclusividade</h3> {/* Responsive text */}
            <p className="text-sm">Projetos 100% personalizados para você.</p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">Qualidade Superior</h3> {/* Responsive text */}
            <p className="text-sm">Materiais nobres e acabamento impecável.</p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">Design Sofisticado</h3> {/* Responsive text */}
            <p className="text-sm">Ambientes que unem estética e funcionalidade.</p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">Atendimento Premium</h3> {/* Responsive text */}
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
      <section className="text-center container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Vamos Realizar Seu Projeto?</h2> {/* Responsive text */}
        <p className="text-muted-foreground mb-6 max-w-prose mx-auto text-sm sm:text-base"> {/* Responsive text */}
          Dê o primeiro passo para transformar seu ambiente. Entre em contato conosco para discutir suas ideias e solicitar um orçamento sem compromisso. Nossa equipe está pronta para atender você.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"> {/* Stack buttons on mobile */}
          <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Solicitar Orçamento Agora</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/5516991936409" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
