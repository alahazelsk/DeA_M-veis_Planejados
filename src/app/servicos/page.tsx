import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import Image from 'next/image'; // Temporarily commented out for testing

export const metadata: Metadata = {
  title: 'Serviços | D&A Móveis Planejados',
  description: 'Descubra os serviços de móveis planejados de alto padrão oferecidos pela D&A em Ribeirão Preto: cozinhas, dormitórios, salas, home offices e mais.',
};

// Define an interface for service items for better structure
interface ServiceItemProps {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

// Updated ServiceItem to use <img> tag and responsive text
const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, items, imageSrc, imageAlt, imagePosition = 'left' }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12"> {/* Responsive gap */}
    {/* Image - Now uses <img> tag */}
    <div className={`relative h-64 w-full rounded-lg overflow-hidden ${imagePosition === 'left' ? 'md:order-1' : 'md:order-2'}`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        loading="lazy" // Add lazy loading for standard img
      />
    </div>
    <div className={`${imagePosition === 'left' ? 'md:order-2' : 'md:order-1'} px-2 md:px-0`}> {/* Added horizontal padding for mobile text */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary">{title}</h3> {/* Responsive text */}
      <p className="text-muted-foreground mb-4 text-sm sm:text-base">{description}</p> {/* Responsive text */}
      <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ServicosPage() {
  const services: ServiceItemProps[] = [
    {
      title: "Cozinhas Planejadas",
      description: "O coração da casa merece atenção especial. Projetamos cozinhas que são verdadeiros espaços gourmet, unindo beleza e praticidade. Desde layouts otimizados até a escolha de materiais resistentes e elegantes, criamos cozinhas funcionais e inspiradoras.",
      items: ["Armários sob medida", "Ilhas e bancadas funcionais", "Soluções inteligentes de armazenamento", "Acabamentos diferenciados"],
      imageSrc: "/cozinhas/cozinhas-15.jpg",
      imageAlt: "Cozinha planejada D&A Móveis",
      imagePosition: 'left'
    },
    {
      title: "Dormitórios e Closets",
      description: "Seu refúgio pessoal projetado para o máximo conforto e organização. Criamos dormitórios e closets que refletem seu estilo e otimizam o espaço disponível, desde guarda-roupas personalizados até painéis de cabeceira.",
      items: ["Guarda-roupas e armários personalizados", "Closets abertos ou fechados", "Cabeceiras e painéis", "Mobiliário complementar (criados-mudos, cômodas)"],
      imageSrc: "/dormitorios/dormitorios-12.jpg",
      imageAlt: "Dormitório planejado D&A Móveis",
      imagePosition: 'right'
    },
    {
      title: "Salas de Estar e Jantar",
      description: "Ambientes de convivência que impressionam pelo design e conforto. Desenvolvemos painéis para TV, estantes, racks, aparadores e móveis de apoio que se integram perfeitamente à decoração.",
      items: ["Painéis de TV e Home Theaters", "Estantes e nichos decorativos", "Aparadores e buffets", "Mesas de centro e laterais"],
      imageSrc: "/salas/salas-30.jpg",
      imageAlt: "Sala de estar planejada D&A Móveis",
      imagePosition: 'left'
    },
    {
      title: "Home Offices",
      description: "Produtividade e estilo em um ambiente de trabalho inspirador. Projetamos home offices ergonômicos e funcionais, com bancadas, armários e estantes que ajudam a manter a organização e o foco.",
      items: ["Bancadas de trabalho sob medida", "Armários e gaveteiros organizadores", "Estantes para livros e objetos", "Soluções para gerenciamento de cabos"],
      imageSrc: "/escritorios/escritorios-02.jpg",
      imageAlt: "Home office planejado D&A Móveis",
      imagePosition: 'right'
    },
    {
      title: "Banheiros e Lavabos",
      description: "Transformamos banheiros e lavabos em espaços de relaxamento e requinte. Criamos gabinetes, espelheiras e nichos que otimizam o espaço e agregam valor estético, utilizando materiais resistentes à umidade.",
      items: ["Gabinetes suspensos ou com pés", "Espelheiras com iluminação", "Nichos embutidos", "Bancadas personalizadas"],
      imageSrc: "/banheiros/banheiros-05.jpg",
      imageAlt: "Banheiro planejado D&A Móveis",
      imagePosition: 'left'
    },
    {
      title: "Áreas Gourmet e Varandas",
      description: "Espaços de lazer que convidam à celebração. Projetamos móveis para áreas gourmet e varandas que combinam durabilidade e estilo, criando ambientes perfeitos para momentos de descontração.",
      items: ["Armários e bancadas para churrasqueiras", "Móveis para áreas externas cobertas", "Soluções resistentes e funcionais"],
      imageSrc: "/area_lazer/area-lazer-01.jpg",
      imageAlt: "Área gourmet planejada D&A Móveis",
      imagePosition: 'right'
    },
     {
      title: "Projetos Comerciais",
      description: "Atendemos também a projetos comerciais que demandam móveis planejados de alto padrão, como escritórios, lojas, clínicas e consultórios, sempre com foco na funcionalidade, durabilidade e na identidade visual da marca.",
      items: ["Mobiliário para escritórios", "Balcões e expositores para lojas", "Móveis para recepção e consultórios", "Soluções personalizadas para negócios"],
      imageSrc: "/corporativo/corporativo-25.jpg",
      imageAlt: "Projeto comercial planejado D&A Móveis",
      imagePosition: 'left'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 space-y-12"> {/* Responsive padding */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Nossos Serviços: Materializando Seu Estilo em Cada Ambiente</h1> {/* Responsive text */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-prose mx-auto"> {/* Responsive text */}
          Na D&A Móveis Planejados, especializamo-nos na criação de móveis planejados de alto padrão que combinam design sofisticado, funcionalidade inteligente e acabamentos impecáveis para clientes exigentes em Ribeirão Preto e região.
        </p>
      </section>

      <section>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </section>

      <section className="text-center bg-secondary text-secondary-foreground p-4 sm:p-8 rounded-lg"> {/* Responsive padding */}
         <h2 className="text-xl sm:text-2xl font-semibold mb-4">Pronto para Transformar Seu Ambiente?</h2> {/* Responsive text */}
         <p className="mb-6 max-w-prose mx-auto text-sm sm:text-base">Independentemente do ambiente, nosso compromisso é com a excelência em cada etapa. Utilizamos tecnologia de ponta para o projeto e a fabricação, sem abrir mão do cuidado artesanal que garante a perfeição nos detalhes.</p> {/* Responsive text */}
         <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Entre em Contato e Solicite um Orçamento</Link>
          </Button>
      </section>
    </div>
  );
}
