
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  imagePlaceholders: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Área de Lazer",
    description:
      "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: ["/area_lazer/area-lazer-01.jpg"],
    category: "Area_Lazer",
  },
  {
    id: 2,
    title: "Banheiros",
    description:
      "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/banheiros/banheiros-01.jpg",
      "/banheiros/banheiros-02.jpg",
    ],
    category: "Banheiros",
  },
  {
    id: 3,
    title: "Cantinho do Café",
    description:
      "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: ["/cantinho_cafe/cantinho-cafe-01.jpg"],
    category: "Cantinho_Cafe",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <h1 className="text-center text-4xl font-bold">
        Portfólio: A Excelência D&A em Cada Projeto Realizado
      </h1>

      <p className="text-center max-w-2xl mx-auto text-muted-foreground">
        Navegue por nossa galeria de projetos e descubra a materialização do
        alto padrão em móveis planejados. Cada ambiente criado é testemunho da
        nossa dedicação à qualidade.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="space-y-4">
            {project.imagePlaceholders.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={\`\${project.title} \${index + 1}\`}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            ))}

            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
