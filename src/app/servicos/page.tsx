import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Serviços | D&A Móveis Planejados',
  description: 'Descubra os serviços de móveis planejados de alto padrão oferecidos pela D&A em Ribeirão Preto: cozinhas, dormitórios, salas, home offices e mais.',
};

// Define an interface for service items for better structure
interface ServiceItemProps {
  title: string;
  description: string;
  items: string[];
  imagePlaceholder: string; // Placeholder text for image area
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, items, imagePlaceholder }) => (
  <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
    {/* Image Placeholder - Alternating sides could be implemented later */}
    <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground order-1">
      [{imagePlaceholder}]
    </div>
    <div className="order-2">
      <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ServicosPage() {
  const services = [
    {
      title: "Cozinhas Planejadas",
      description: "O coração da casa merece atenção especial. Projetamos cozinhas que são verdadeiros espaços gourmet, unindo beleza e praticidade. Desde layouts otimizados até a escolha de materiais resistentes e elegantes, criamos cozinhas funcionais e inspiradoras.",
      items: ["Armários sob medida", "Ilhas e bancadas funcionais", "Soluções inteligentes de armazenamento", "Acabamentos diferenciados"],
      imagePlaceholder: "Imagem Cozinha Planejada"
    },
    {
      title: "Dormitórios e Closets",
      description: "Seu refúgio pessoal projetado para o máximo conforto e organização. Criamos dormitórios e closets que refletem seu estilo e otimizam o espaço disponível, desde guarda-roupas personalizados até painéis de cabeceira.",
      items: ["Guarda-roupas e armários personalizados", "Closets abertos ou fechados", "Cabeceiras e painéis", "Mobiliário complementar (criados-mudos, cômodas)"],
      imagePlaceholder: "Imagem Dormitório/Closet"
    },
    {
      title: "Salas de Estar e Jantar",
      description: "Ambientes de convivência que impressionam pelo design e conforto. Desenvolvemos painéis para TV, estantes, racks, aparadores e móveis de apoio que se integram perfeitamente à decoração.",
      items: ["Painéis de TV e Home Theaters", "Estantes e nichos decorativos", "Aparadores e buffets", "Mesas de centro e laterais"],
      imagePlaceholder: "Imagem Sala de Estar/Jantar"
    },
    {
      title: "Home Offices",
      description: "Produtividade e estilo em um ambiente de trabalho inspirador. Projetamos home offices ergonômicos e funcionais, com bancadas, armários e estantes que ajudam a manter a organização e o foco.",
      items: ["Bancadas de trabalho sob medida", "Armários e gaveteiros organizadores", "Estantes para livros e objetos", "Soluções para gerenciamento de cabos"],
      imagePlaceholder: "Imagem Home Office"
    },
    {
      title: "Banheiros e Lavabos",
      description: "Transformamos banheiros e lavabos em espaços de relaxamento e requinte. Criamos gabinetes, espelheiras e nichos que otimizam o espaço e agregam valor estético, utilizando materiais resistentes à umidade.",
      items: ["Gabinetes suspensos ou com pés", "Espelheiras com iluminação", "Nichos embutidos", "Bancadas personalizadas"],
      imagePlaceholder: "Imagem Banheiro/Lavabo"
    },
    {
      title: "Áreas Gourmet e Varandas",
      description: "Espaços de lazer que convidam à celebração. Projetamos móveis para áreas gourmet e varandas que combinam durabilidade e estilo, criando ambientes perfeitos para momentos de descontração.",
      items: ["Armários e bancadas para churrasqueiras", "Móveis para áreas externas cobertas", "Soluções resistentes e funcionais"],
      imagePlaceholder: "Imagem Área Gourmet"
    },
     {
      title: "Projetos Comerciais",
      description: "Atendemos também a projetos comerciais que demandam móveis planejados de alto padrão, como escritórios, lojas, clínicas e consultórios, sempre com foco na funcionalidade, durabilidade e na identidade visual da marca.",
      items: ["Mobiliário para escritórios", "Balcões e expositores para lojas", "Móveis para recepção e consultórios", "Soluções personalizadas para negócios"],
      imagePlaceholder: "Imagem Projeto Comercial"
    }
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Nossos Serviços: Materializando Seu Estilo em Cada Ambiente</h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
          Na D&A Móveis Planejados, especializamo-nos na criação de móveis planejados de alto padrão que combinam design sofisticado, funcionalidade inteligente e acabamentos impecáveis para clientes exigentes em Ribeirão Preto e região.
        </p>
      </section>

      <section>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </section>

      <section className="text-center bg-secondary text-secondary-foreground p-8 rounded-lg">
         <h2 className="text-2xl font-semibold mb-4">Pronto para Transformar Seu Ambiente?</h2>
         <p className="mb-6 max-w-prose mx-auto">Independentemente do ambiente, nosso compromisso é com a excelência em cada etapa. Utilizamos tecnologia de ponta para o projeto e a fabricação, sem abrir mão do cuidado artesanal que garante a perfeição nos detalhes.</p>
         <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Entre em Contato e Solicite um Orçamento</Link>
          </Button>
      </section>
    </div>
  );
}

