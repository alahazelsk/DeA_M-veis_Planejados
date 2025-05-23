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
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/area_lazer/area-lazer-01.jpg"
    ],
    "category": "area_lazer"
  },
  {
    "id": 2,
    "title": "Banheiros",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/banheiros/banheiros-01.jpg",
      "/banheiros/banheiros-02.jpg",
      "/banheiros/banheiros-03.jpg",
      "/banheiros/banheiros-04.jpg",
      "/banheiros/banheiros-05.jpg",
      "/banheiros/banheiros-06.jpg",
      "/banheiros/banheiros-07.jpg",
      "/banheiros/banheiros-08.jpg",
      "/banheiros/banheiros-09.jpg",
      "/banheiros/banheiros-10.jpg"
    ],
    "category": "banheiros"
  },
  {
    "id": 3,
    "title": "Cantinho Cafe",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
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
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
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
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
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
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/corporativo/corporativo-01.jpg", "/corporativo/corporativo-02.jpg", "/corporativo/corporativo-03.jpg", "/corporativo/corporativo-04.jpg", "/corporativo/corporativo-05.jpg", "/corporativo/corporativo-06.jpg", "/corporativo/corporativo-07.jpg", "/corporativo/corporativo-08.jpg", "/corporativo/corporativo-09.jpg", "/corporativo/corporativo-10.jpg", "/corporativo/corporativo-11.jpg", "/corporativo/corporativo-12.jpg", "/corporativo/corporativo-13.jpg", "/corporativo/corporativo-14.jpg", "/corporativo/corporativo-15.jpg", "/corporativo/corporativo-16.jpg", "/corporativo/corporativo-17.jpg", "/corporativo/corporativo-18.jpg", "/corporativo/corporativo-19.jpg", "/corporativo/corporativo-20.jpg", "/corporativo/corporativo-21.jpg", "/corporativo/corporativo-22.jpg", "/corporativo/corporativo-23.jpg", "/corporativo/corporativo-24.jpg", "/corporativo/corporativo-25.jpg", "/corporativo/corporativo-26.jpg", "/corporativo/corporativo-27.jpg", "/corporativo/corporativo-28.jpg", "/corporativo/corporativo-29.jpg", "/corporativo/corporativo-30.jpg", "/corporativo/corporativo-31.jpg", "/corporativo/corporativo-32.jpg"
    ],
    "category": "corporativo"
  },
  {
    "id": 7,
    "title": "Cozinhas",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/cozinhas/cozinhas-01.jpg", "/cozinhas/cozinhas-02.jpg", "/cozinhas/cozinhas-03.jpg", "/cozinhas/cozinhas-04.jpg", "/cozinhas/cozinhas-05.jpg", "/cozinhas/cozinhas-06.jpg", "/cozinhas/cozinhas-07.jpg", "/cozinhas/cozinhas-08.jpg", "/cozinhas/cozinhas-09.jpg", "/cozinhas/cozinhas-10.jpg", "/cozinhas/cozinhas-11.jpg", "/cozinhas/cozinhas-12.jpg", "/cozinhas/cozinhas-13.jpg", "/cozinhas/cozinhas-14.jpg", "/cozinhas/cozinhas-15.jpg", "/cozinhas/cozinhas-16.jpg", "/cozinhas/cozinhas-17.jpg", "/cozinhas/cozinhas-18.jpg", "/cozinhas/cozinhas-19.jpg", "/cozinhas/cozinhas-20.jpg", "/cozinhas/cozinhas-21.jpg", "/cozinhas/cozinhas-22.jpg", "/cozinhas/cozinhas-23.jpg", "/cozinhas/cozinhas-24.jpg", "/cozinhas/cozinhas-25.jpg", "/cozinhas/cozinhas-26.jpg", "/cozinhas/cozinhas-27.jpg", "/cozinhas/cozinhas-28.jpg", "/cozinhas/cozinhas-29.jpg", "/cozinhas/cozinhas-30.jpg", "/cozinhas/cozinhas-31.jpg", "/cozinhas/cozinhas-32.jpg", "/cozinhas/cozinhas-33.jpg", "/cozinhas/cozinhas-34.jpg", "/cozinhas/cozinhas-35.jpg", "/cozinhas/cozinhas-36.jpg", "/cozinhas/cozinhas-37.jpg", "/cozinhas/cozinhas-38.jpg", "/cozinhas/cozinhas-39.jpg", "/cozinhas/cozinhas-40.jpg", "/cozinhas/cozinhas-41.jpg", "/cozinhas/cozinhas-42.jpg", "/cozinhas/cozinhas-43.jpg", "/cozinhas/cozinhas-44.jpg"
    ],
    "category": "cozinhas"
  },
  {
    "id": 8,
    "title": "Dormitorios",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/dormitorios/dormitorios-01.jpg", "/dormitorios/dormitorios-02.jpg", "/dormitorios/dormitorios-03.jpg", "/dormitorios/dormitorios-04.jpg", "/dormitorios/dormitorios-05.jpg", "/dormitorios/dormitorios-06.jpg", "/dormitorios/dormitorios-07.jpg", "/dormitorios/dormitorios-08.jpg", "/dormitorios/dormitorios-09.jpg", "/dormitorios/dormitorios-10.jpg", "/dormitorios/dormitorios-11.jpg", "/dormitorios/dormitorios-12.jpg", "/dormitorios/dormitorios-13.jpg", "/dormitorios/dormitorios-14.jpg", "/dormitorios/dormitorios-15.jpg", "/dormitorios/dormitorios-16.jpg", "/dormitorios/dormitorios-17.jpg", "/dormitorios/dormitorios-18.jpg", "/dormitorios/dormitorios-19.jpg", "/dormitorios/dormitorios-20.jpg", "/dormitorios/dormitorios-21.jpg", "/dormitorios/dormitorios-22.jpg", "/dormitorios/dormitorios-23.jpg", "/dormitorios/dormitorios-24.jpg", "/dormitorios/dormitorios-25.jpg", "/dormitorios/dormitorios-26.jpg", "/dormitorios/dormitorios-27.jpg", "/dormitorios/dormitorios-28.jpg", "/dormitorios/dormitorios-29.jpg"
    ],
    "category": "dormitorios"
  },
  {
    "id": 9,
    "title": "Escritorios",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
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
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/salas/salas-01.jpg", "/salas/salas-02.jpg", "/salas/salas-03.jpg", "/salas/salas-04.jpg", "/salas/salas-05.jpg", "/salas/salas-06.jpg", "/salas/salas-07.jpg", "/salas/salas-08.jpg", "/salas/salas-09.jpg", "/salas/salas-10.jpg", "/salas/salas-11.jpg", "/salas/salas-12.jpg", "/salas/salas-13.jpg", "/salas/salas-14.jpg", "/salas/salas-15.jpg", "/salas/salas-16.jpg", "/salas/salas-17.jpg", "/salas/salas-18.jpg", "/salas/salas-19.jpg", "/salas/salas-20.jpg", "/salas/salas-21.jpg", "/salas/salas-22.jpg", "/salas/salas-23.jpg", "/salas/salas-24.jpg", "/salas/salas-25.jpg", "/salas/salas-26.jpg", "/salas/salas-27.jpg", "/salas/salas-28.jpg", "/salas/salas-29.jpg", "/salas/salas-30.jpg", "/salas/salas-31.jpg", "/salas/salas-32.jpg", "/salas/salas-33.jpg", "/salas/salas-34.jpg", "/salas/salas-35.jpg", "/salas/salas-36.jpg", "/salas/salas-37.jpg", "/salas/salas-38.jpg"
    ],
    "category": "salas"
  },
  {
    "id": 11,
    "title": "Sala Jantar",
    "description": "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    "images": [
      "/sala_jantar/sala-jantar-01.jpg",
      "/sala_jantar/sala-jantar-02.jpg",
      "/sala_jantar/sala-jantar-03.jpg",
      "/sala_jantar/sala-jantar-04.jpg",
      "/sala_jantar/sala-jantar-05.jpg",
      "/sala_jantar/sala-jantar-06.jpg",
      "/sala_jantar/sala-jantar-07.jpg",
      "/sala_jantar/sala-jantar-08.jpg",
      "/sala_jantar/sala-jantar-09.jpg"
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
