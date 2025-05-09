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
    title: "Area_Lazer",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/area_lazer/area-lazer-01.jpg",
    ],
    category: "Area_Lazer"
  },
  {
    id: 2,
    title: "Banheiros",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/banheiros/banheiros-01.jpg",
      "/banheiros/banheiros-02.jpg",
      "/banheiros/banheiros-03.jpg",
      "/banheiros/banheiros-04.jpg",
      "/banheiros/banheiros-05.jpg",
      "/banheiros/banheiros-06.jpg",
      "/banheiros/banheiros-07.jpg",
      "/banheiros/banheiros-08.jpg",
      "/banheiros/banheiros-09.jpg",
      "/banheiros/banheiros-10.jpg",
    ],
    category: "Banheiros"
  },
  {
    id: 3,
    title: "Cantinho_Cafe",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/cantinho_cafe/cantinho-cafe-01.jpg",
      "/cantinho_cafe/cantinho-cafe-02.jpg",
      "/cantinho_cafe/cantinho-cafe-03.jpg",
      "/cantinho_cafe/cantinho-cafe-04.jpg",
      "/cantinho_cafe/cantinho-cafe-05.jpg",
    ],
    category: "Cantinho_Cafe"
  },
  {
    id: 4,
    title: "Circulacao",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/circulacao/circulacao-01.jpg",
      "/circulacao/circulacao-02.jpg",
      "/circulacao/circulacao-03.jpg",
      "/circulacao/circulacao-04.jpg",
      "/circulacao/circulacao-05.jpg",
    ],
    category: "Circulacao"
  },
  {
    id: 5,
    title: "Closet",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/closet/closet-01.jpg",
      "/closet/closet-02.jpg",
      "/closet/closet-03.jpg",
      "/closet/closet-04.jpg",
      "/closet/closet-05.jpg",
    ],
    category: "Closet"
  },
  {
    id: 6,
    title: "Corporativo",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/corporativo/corporativo-01.jpg",
      "/corporativo/corporativo-02.jpg",
      "/corporativo/corporativo-03.jpg",
      "/corporativo/corporativo-04.jpg",
      "/corporativo/corporativo-05.jpg",
      "/corporativo/corporativo-06.jpg",
      "/corporativo/corporativo-07.jpg",
      "/corporativo/corporativo-08.jpg",
      "/corporativo/corporativo-09.jpg",
      "/corporativo/corporativo-10.jpg",
      "/corporativo/corporativo-11.jpg",
      "/corporativo/corporativo-12.jpg",
      "/corporativo/corporativo-13.jpg",
      "/corporativo/corporativo-14.jpg",
      "/corporativo/corporativo-15.jpg",
      "/corporativo/corporativo-16.jpg",
      "/corporativo/corporativo-17.jpg",
      "/corporativo/corporativo-18.jpg",
      "/corporativo/corporativo-19.jpg",
      "/corporativo/corporativo-20.jpg",
      "/corporativo/corporativo-21.jpg",
      "/corporativo/corporativo-22.jpg",
      "/corporativo/corporativo-23.jpg",
      "/corporativo/corporativo-24.jpg",
      "/corporativo/corporativo-25.jpg",
      "/corporativo/corporativo-26.jpg",
      "/corporativo/corporativo-27.jpg",
      "/corporativo/corporativo-28.jpg",
      "/corporativo/corporativo-29.jpg",
      "/corporativo/corporativo-30.jpg",
      "/corporativo/corporativo-31.jpg",
      "/corporativo/corporativo-32.jpg",
    ],
    category: "Corporativo"
  },
  {
    id: 7,
    title: "Cozinhas",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/cozinhas/cozinhas-01.jpg",
      "/cozinhas/cozinhas-02.jpg",
      "/cozinhas/cozinhas-03.jpg",
      "/cozinhas/cozinhas-04.jpg",
      "/cozinhas/cozinhas-05.jpg",
      "/cozinhas/cozinhas-06.jpg",
      "/cozinhas/cozinhas-07.jpg",
      "/cozinhas/cozinhas-08.jpg",
      "/cozinhas/cozinhas-09.jpg",
      "/cozinhas/cozinhas-10.jpg",
      "/cozinhas/cozinhas-11.jpg",
      "/cozinhas/cozinhas-12.jpg",
      "/cozinhas/cozinhas-13.jpg",
      "/cozinhas/cozinhas-14.jpg",
      "/cozinhas/cozinhas-15.jpg",
      "/cozinhas/cozinhas-16.jpg",
      "/cozinhas/cozinhas-17.jpg",
      "/cozinhas/cozinhas-18.jpg",
      "/cozinhas/cozinhas-19.jpg",
      "/cozinhas/cozinhas-20.jpg",
      "/cozinhas/cozinhas-21.jpg",
      "/cozinhas/cozinhas-22.jpg",
      "/cozinhas/cozinhas-23.jpg",
      "/cozinhas/cozinhas-24.jpg",
      "/cozinhas/cozinhas-25.jpg",
      "/cozinhas/cozinhas-26.jpg",
      "/cozinhas/cozinhas-27.jpg",
      "/cozinhas/cozinhas-28.jpg",
      "/cozinhas/cozinhas-29.jpg",
      "/cozinhas/cozinhas-30.jpg",
      "/cozinhas/cozinhas-31.jpg",
      "/cozinhas/cozinhas-32.jpg",
      "/cozinhas/cozinhas-33.jpg",
      "/cozinhas/cozinhas-34.jpg",
      "/cozinhas/cozinhas-35.jpg",
      "/cozinhas/cozinhas-36.jpg",
      "/cozinhas/cozinhas-37.jpg",
      "/cozinhas/cozinhas-38.jpg",
      "/cozinhas/cozinhas-39.jpg",
      "/cozinhas/cozinhas-40.jpg",
      "/cozinhas/cozinhas-41.jpg",
      "/cozinhas/cozinhas-42.jpg",
      "/cozinhas/cozinhas-43.jpg",
      "/cozinhas/cozinhas-44.jpg",
    ],
    category: "Cozinhas"
  },
  {
    id: 8,
    title: "Dormitorios",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/dormitorios/dormitorios-01.jpg",
      "/dormitorios/dormitorios-02.jpg",
      "/dormitorios/dormitorios-03.jpg",
      "/dormitorios/dormitorios-04.jpg",
      "/dormitorios/dormitorios-05.jpg",
      "/dormitorios/dormitorios-06.jpg",
      "/dormitorios/dormitorios-07.jpg",
      "/dormitorios/dormitorios-08.jpg",
      "/dormitorios/dormitorios-09.jpg",
      "/dormitorios/dormitorios-10.jpg",
      "/dormitorios/dormitorios-11.jpg",
      "/dormitorios/dormitorios-12.jpg",
      "/dormitorios/dormitorios-13.jpg",
      "/dormitorios/dormitorios-14.jpg",
      "/dormitorios/dormitorios-15.jpg",
      "/dormitorios/dormitorios-16.jpg",
      "/dormitorios/dormitorios-17.jpg",
      "/dormitorios/dormitorios-18.jpg",
      "/dormitorios/dormitorios-19.jpg",
      "/dormitorios/dormitorios-20.jpg",
      "/dormitorios/dormitorios-21.jpg",
      "/dormitorios/dormitorios-22.jpg",
      "/dormitorios/dormitorios-23.jpg",
      "/dormitorios/dormitorios-24.jpg",
      "/dormitorios/dormitorios-25.jpg",
      "/dormitorios/dormitorios-26.jpg",
      "/dormitorios/dormitorios-27.jpg",
      "/dormitorios/dormitorios-28.jpg",
      "/dormitorios/dormitorios-29.jpg",
    ],
    category: "Dormitorios"
  },
  {
    id: 9,
    title: "Escritorios",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/escritorios/escritorios-01.jpg",
      "/escritorios/escritorios-02.jpg",
      "/escritorios/escritorios-03.jpg",
      "/escritorios/escritorios-04.jpg",
    ],
    category: "Escritorios"
  },
  {
    id: 10,
    title: "Salas",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/salas/salas-01.jpg",
      "/salas/salas-02.jpg",
      "/salas/salas-03.jpg",
      "/salas/salas-04.jpg",
      "/salas/salas-05.jpg",
      "/salas/salas-06.jpg",
      "/salas/salas-07.jpg",
      "/salas/salas-08.jpg",
      "/salas/salas-09.jpg",
      "/salas/salas-10.jpg",
      "/salas/salas-11.jpg",
      "/salas/salas-12.jpg",
      "/salas/salas-13.jpg",
      "/salas/salas-14.jpg",
      "/salas/salas-15.jpg",
      "/salas/salas-16.jpg",
      "/salas/salas-17.jpg",
      "/salas/salas-18.jpg",
      "/salas/salas-19.jpg",
      "/salas/salas-20.jpg",
      "/salas/salas-21.jpg",
      "/salas/salas-22.jpg",
      "/salas/salas-23.jpg",
      "/salas/salas-24.jpg",
      "/salas/salas-25.jpg",
      "/salas/salas-26.jpg",
      "/salas/salas-27.jpg",
      "/salas/salas-28.jpg",
      "/salas/salas-29.jpg",
      "/salas/salas-30.jpg",
      "/salas/salas-31.jpg",
      "/salas/salas-32.jpg",
      "/salas/salas-33.jpg",
      "/salas/salas-34.jpg",
      "/salas/salas-35.jpg",
      "/salas/salas-36.jpg",
      "/salas/salas-37.jpg",
      "/salas/salas-38.jpg",
    ],
    category: "Salas"
  },
  {
    id: 11,
    title: "Sala_Jantar",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/sala_jantar/sala-jantar-01.jpg",
      "/sala_jantar/sala-jantar-02.jpg",
      "/sala_jantar/sala-jantar-03.jpg",
      "/sala_jantar/sala-jantar-04.jpg",
      "/sala_jantar/sala-jantar-05.jpg",
      "/sala_jantar/sala-jantar-06.jpg",
      "/sala_jantar/sala-jantar-07.jpg",
      "/sala_jantar/sala-jantar-08.jpg",
      "/sala_jantar/sala-jantar-09.jpg",
    ],
    category: "Sala_Jantar"
  },
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

