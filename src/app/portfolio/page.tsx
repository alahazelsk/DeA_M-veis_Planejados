
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Área de Lazer",
    description:
      "Espaços integrados para momentos de descontração e conforto.",
    images: ["/area_lazer/area-lazer-01.jpg"],
    category: "area_lazer",
  },
  {
    id: 2,
    title: "Banheiros",
    description:
      "Soluções que unem funcionalidade e sofisticação.",
    images: [
      "/banheiros/banheiros-01.jpg",
      "/banheiros/banheiros-02.jpg",
    ],
    category: "banheiros",
  },
  {
    id: 3,
    title: "Cantinho do Café",
    description:
      "Ambientes pensados para momentos de pausa e aconchego.",
    images: ["/cantinho_cafe/cantinho-cafe-01.jpg"],
    category: "cantinho_cafe",
  },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">Portfólio</h1>

      <Tabs defaultValue={projects[0].category} className="space-y-6">
        <TabsList className="flex flex-wrap justify-center gap-2">
          {projects.map((p) => (
            <TabsTrigger
              key={p.id}
              value={p.category}
              className="text-sm sm:text-base"
            >
              {p.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {projects.map((p) => (
          <TabsContent key={p.id} value={p.category}>
            <p className="mb-4 text-muted-foreground text-center">
              {p.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`${p.title} ${i + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
