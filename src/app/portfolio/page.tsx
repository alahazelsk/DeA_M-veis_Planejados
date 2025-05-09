import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Portfólio | D&A Móveis Planejados',
  description: 'Explore os projetos de móveis planejados de alto padrão realizados pela D&A Móveis Planejados em Ribeirão Preto. Inspire-se com nossa qualidade e design.',
};

// Interface for Project data
interface Project {
  id: number;
  title: string;
  description: string;
  imagePlaceholders: string[]; // Array of placeholder texts for images
  category: string; // e.g., 'Cozinha', 'Dormitório'
}

// Sample Project Data (Replace with actual data and image paths later)
const projects: Project[] = [
  {
    id: 1,
    title: "Cozinha Contemporânea em Preto e Madeira",
    description: "Neste projeto, criamos uma cozinha integrada que une sofisticação e funcionalidade. Utilizamos MDF em laca preta acetinada combinada com painéis em madeira natural, trazendo aconchego e modernidade. A ilha central otimiza o espaço e serve como ponto de convivência.",
    imagePlaceholders: ["Imagem 1 Cozinha", "Imagem 2 Cozinha", "Imagem 3 Cozinha"],
    category: 'Cozinha'
  },
  {
    id: 2,
    title: "Suíte Master com Closet Integrado",
    description: "A suíte master foi projetada para ser um refúgio de tranquilidade e organização. O closet integrado, com portas de espelho bronze, amplia o ambiente e oferece soluções inteligentes de armazenamento. A cabeceira estofada e os painéis ripados complementam a decoração com elegância.",
    imagePlaceholders: ["Imagem 1 Suíte", "Imagem 2 Suíte", "Imagem 3 Suíte"],
    category: 'Dormitório'
  },
  {
    id: 3,
    title: "Home Office Funcional e Elegante",
    description: "Para este home office, o foco foi criar um espaço de trabalho produtivo sem abrir mão do estilo. A bancada ampla, os armários suspensos em tom neutro e a iluminação direcionada garantem conforto e organização. Detalhes em metal dourado adicionam um toque de sofisticação.",
    imagePlaceholders: ["Imagem 1 Home Office", "Imagem 2 Home Office"],
    category: 'Home Office'
  },
  // Add more sample projects as needed
];

export default function PortfolioPage() {
  // TODO: Implement filtering logic based on category later

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Portfólio: A Excelência D&A em Cada Projeto Realizado</h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
          Navegue por nossa galeria de projetos e descubra a materialização do alto padrão em móveis planejados. Cada ambiente que criamos é um testemunho da nossa dedicação à qualidade, ao design exclusivo e à satisfação dos nossos clientes em Ribeirão Preto e região.
        </p>
      </section>

      {/* TODO: Add Filter Buttons Here */}
      {/* <div className="flex justify-center gap-2 mb-8">
        <Button variant="secondary">Todos</Button>
        <Button variant="outline">Cozinhas</Button>
        <Button variant="outline">Dormitórios</Button>
         Add other categories 
      </div> */} 

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
            {/* Image Placeholder - Carousel or single image */}
            <div className="h-56 bg-muted flex items-center justify-center text-muted-foreground">
              [{project.imagePlaceholders[0] || 'Imagem Projeto'}]
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
              {/* Optional: Link to a dedicated project page if needed */}
              {/* <Button variant="outline" size="sm" asChild>
                <Link href={`/portfolio/${project.id}`}>Ver Mais Detalhes</Link>
              </Button> */}
            </div>
          </div>
        ))}
      </section>

      <section className="text-center bg-secondary text-secondary-foreground p-8 rounded-lg">
         <h2 className="text-2xl font-semibold mb-4">Gostou do que Viu?</h2>
         <p className="mb-6 max-w-prose mx-auto">Imagine o que podemos fazer pelo seu espaço. Entre em contato conosco e solicite um orçamento para o seu projeto personalizado.</p>
         <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Solicite seu Orçamento</Link>
          </Button>
      </section>
    </div>
  );
}

