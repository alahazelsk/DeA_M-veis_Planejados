
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
    "id": 1,
    "title": "Area Lazer",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/area_lazer/area-lazer-01.jpg"
    ],
    "category": "area_lazer"
  },
  {
    "id": 2,
    "title": "Banheiros",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/banheiros/banheiros-01.jpg",
      "/banheiros/banheiros-02.jpg",
      "/banheiros/banheiros-03.jpg",
      "/banheiros/banheiros-04.jpg",
      "/banheiros/banheiros-05.jpg"
    ],
    "category": "banheiros"
  },
  {
    "id": 3,
    "title": "Cantinho Cafe",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/cantinho_cafe/cantinho-cafe-01.jpg",
      "/cantinho_cafe/cantinho-cafe-02.jpg",
      "/cantinho_cafe/cantinho-cafe-03.jpg",
      "/cantinho_cafe/cantinho-cafe-04.jpg",
      "/cantinho_cafe/cantinho-cafe-05.jpg"
    ],
    "category": "cantinho_cafe"
  },
  {
    "id": 4,
    "title": "Circulacao",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/circulacao/circulacao-01.jpg",
      "/circulacao/circulacao-02.jpg",
      "/circulacao/circulacao-03.jpg",
      "/circulacao/circulacao-04.jpg",
      "/circulacao/circulacao-05.jpg"
    ],
    "category": "circulacao"
  },
  {
    "id": 5,
    "title": "Closet",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/closet/closet-01.jpg",
      "/closet/closet-02.jpg",
      "/closet/closet-03.jpg",
      "/closet/closet-04.jpg",
      "/closet/closet-05.jpg"
    ],
    "category": "closet"
  },
  {
    "id": 6,
    "title": "Corporativo",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/corporativo/corporativo-01.jpg",
      "/corporativo/corporativo-02.jpg",
      "/corporativo/corporativo-03.jpg",
      "/corporativo/corporativo-04.jpg",
      "/corporativo/corporativo-05.jpg"
    ],
    "category": "corporativo"
  },
  {
    "id": 7,
    "title": "Cozinhas",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/cozinhas/cozinhas-01.jpg",
      "/cozinhas/cozinhas-02.jpg",
      "/cozinhas/cozinhas-03.jpg",
      "/cozinhas/cozinhas-04.jpg",
      "/cozinhas/cozinhas-05.jpg"
    ],
    "category": "cozinhas"
  },
  {
    "id": 8,
    "title": "Dormitorios",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/dormitorios/dormitorios-01.jpg",
      "/dormitorios/dormitorios-02.jpg",
      "/dormitorios/dormitorios-03.jpg",
      "/dormitorios/dormitorios-04.jpg",
      "/dormitorios/dormitorios-05.jpg"
    ],
    "category": "dormitorios"
  },
  {
    "id": 9,
    "title": "Escritorios",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/escritorios/escritorios-01.jpg",
      "/escritorios/escritorios-02.jpg",
      "/escritorios/escritorios-03.jpg",
      "/escritorios/escritorios-04.jpg"
    ],
    "category": "escritorios"
  },
  {
    "id": 10,
    "title": "Salas",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/salas/salas-01.jpg",
      "/salas/salas-02.jpg",
      "/salas/salas-03.jpg",
      "/salas/salas-04.jpg",
      "/salas/salas-05.jpg"
    ],
    "category": "salas"
  },
  {
    "id": 11,
    "title": "Sala Jantar",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, est\u00e9tica e personaliza\u00e7\u00e3o.",
    "images": [
      "/sala_jantar/sala-jantar-01.jpg",
      "/sala_jantar/sala-jantar-02.jpg",
      "/sala_jantar/sala-jantar-03.jpg",
      "/sala_jantar/sala-jantar-04.jpg",
      "/sala_jantar/sala-jantar-05.jpg"
    ],
    "category": "sala_jantar"
  }
];

export default function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">Portfólio</h1>

      <Tabs defaultValue={projects[0].category} className="space-y-6">
        <TabsList className="flex flex-wrap justify-center gap-2">
          {projects.map((p) => (
            <TabsTrigger key={p.id} value={p.category} className="text-sm sm:text-base">
              {p.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {projects.map((p) => (
          <TabsContent key={p.id} value={p.category}>
            <p className="mb-4 text-muted-foreground text-center">{p.description}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.images.map((src, i) => (
                <Image key={i} src={src} alt={`${p.title} ${i+1}`} width={600} height={400} className="rounded-lg object-cover w-full h-auto" />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
