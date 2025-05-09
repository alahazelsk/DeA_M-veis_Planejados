
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Área de Lazer",
    description:
      "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    images: ["/area_lazer/area-lazer-01.jpg"],
  },
  {
    id: 2,
    title: "Banheiros",
    description:
      "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    images: [
      "/banheiros/banheiros-01.jpg",
      "/banheiros/banheiros-02.jpg",
    ],
  },
  {
    id: 3,
    title: "Cantinho do Café",
    description:
      "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    images: ["/cantinho_cafe/cantinho-cafe-01.jpg"],
  },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center">
        Portfólio
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="space-y-3">
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
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
