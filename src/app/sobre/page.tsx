import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | D&A Móveis Planejados',
  description: 'Conheça a história, os valores e os diferenciais da D&A Móveis Planejados, sua marcenaria de alto padrão em Ribeirão Preto.',
};

export default function SobrePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">D&A Móveis Planejados: A Arte de Transformar Sonhos em Ambientes Exclusivos</h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
          Em Ribeirão Preto, no coração do Jardim do Trevo, a D&A Móveis Planejados nasceu com a missão de ir além da simples fabricação de móveis. Somos artesãos dedicados a criar peças que contam histórias, que refletem a personalidade única de cada cliente e que transformam casas em verdadeiros lares de alto padrão.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Nossa Essência</h2>
          <p className="text-muted-foreground mb-4">
            Situada na Rua Tuffi Rassi, 140, nossa marcenaria combina a tradição do trabalho manual cuidadoso com as mais modernas técnicas e materiais de excelência, garantindo um resultado que alia beleza, funcionalidade e durabilidade incomparáveis.
          </p>
          <p className="text-muted-foreground">
            Entendemos que um móvel planejado é mais do que um item de decoração; é um investimento na qualidade de vida, no conforto e na expressão do seu estilo. Por isso, cada projeto que sai da D&A é tratado com a máxima atenção aos detalhes, desde a concepção inicial em conjunto com o cliente até a instalação final.
          </p>
        </div>
        {/* Placeholder for an image about the company/workshop */}
        <div className="h-64 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground">
          [Imagem da Marcenaria/Equipe]
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-2 text-primary">Alto Padrão em Cada Detalhe</h3>
            <p className="text-sm text-muted-foreground">Utilizamos apenas materiais de primeira linha, ferragens das melhores marcas e acabamentos sofisticados.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-2 text-primary">Design Exclusivo e Personalizado</h3>
            <p className="text-sm text-muted-foreground">Criamos projetos únicos, totalmente adaptados ao seu gosto e às particularidades do seu ambiente.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-2 text-primary">Mão de Obra Qualificada</h3>
            <p className="text-sm text-muted-foreground">Nossa equipe é formada por marceneiros experientes e apaixonados pelo que fazem.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-2 text-primary">Atendimento Consultivo</h3>
            <p className="text-sm text-muted-foreground">Acompanhamos você em todas as etapas, oferecendo consultoria para as melhores escolhas.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-2 text-primary">Compromisso com Prazos</h3>
            <p className="text-sm text-muted-foreground">Respeitamos os prazos acordados, entendendo a importância de cada etapa na realização do seu sonho.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-secondary text-secondary-foreground p-8 rounded-lg">
         <h2 className="text-2xl font-semibold mb-4">Pronto para Começar?</h2>
         <p className="mb-6 max-w-prose mx-auto">Convidamos você a conhecer mais sobre nosso trabalho navegando pelo nosso portfólio ou seguindo nosso Instagram @deamoveisplanejados. Se você busca móveis planejados que realmente façam a diferença, com design autêntico e qualidade superior, a D&A Móveis Planejados é a sua escolha ideal em Ribeirão Preto.</p>
         {/* Add Link component if needed */}
         <a href="/contato" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
           Entre em Contato e Solicite um Orçamento
         </a>
      </section>
    </div>
  );
}

