import { ClipboardList, Palette, Code, Database, TestTube, Presentation, VideoIcon } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

// Interface para as etapas de desenvolvimento
interface Etapa {
  numero: number;
  icone: React.ReactNode;
  titulo: string;
  descricao: string;
}

/**
 * Componente que exibe as etapas de desenvolvimento de um e-commerce
 */
const EcommerceEtapas = () => {
  // Lista de etapas do processo de desenvolvimento
  const etapas: Etapa[] = [
    {
      numero: 1,
      icone: <ClipboardList className="w-6 h-6" />,
      titulo: "Briefing e Planejamento",
      descricao: "Entendemos as necessidades do seu negócio, seu público-alvo e objetivos para definir a melhor estratégia para sua loja virtual."
    },
    {
      numero: 2,
      icone: <Palette className="w-6 h-6" />,
      titulo: "Design e Prototipagem",
      descricao: "Criação da identidade visual da loja, wireframes e protótipos interativos para visualização prévia da experiência do usuário."
    },
    {
      numero: 3,
      icone: <Code className="w-6 h-6" />,
      titulo: "Desenvolvimento Front-end",
      descricao: "Codificação da interface do usuário com design responsivo, garantindo experiência perfeita em todos os dispositivos."
    },
    {
      numero: 4,
      icone: <Database className="w-6 h-6" />,
      titulo: "Desenvolvimento Back-end",
      descricao: "Implementação do banco de dados, painel administrativo, integrações de pagamento e outras funcionalidades essenciais."
    },
    {
      numero: 5,
      icone: <TestTube className="w-6 h-6" />,
      titulo: "Testes e Ajustes",
      descricao: "Testes rigorosos de usabilidade, desempenho e segurança para garantir o funcionamento perfeito da loja antes do lançamento."
    },
    {
      numero: 6,
      icone: <Presentation className="w-6 h-6" />,
      titulo: "Lançamento e Deploy",
      descricao: "Publicação da loja online com configuração do domínio, hospedagem e certificado de segurança SSL."
    },
    {
      numero: 7,
      icone: <VideoIcon className="w-6 h-6" />,
      titulo: "Treinamento e Suporte",
      descricao: "Capacitação da sua equipe para gerenciar a loja e suporte técnico contínuo para garantir o bom funcionamento."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como <span className="text-laranja">Desenvolvemos</span> seu E-commerce
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Nosso processo de desenvolvimento é estruturado em etapas claras para garantir 
              que sua loja virtual seja entregue com a máxima qualidade e dentro do prazo.
            </p>
          </div>
        </AnimacaoScroll>
        
        <div className="relative">
          {/* Linha conectora vertical */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-laranja/20 -translate-x-1/2 z-0 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24 relative z-10">
            {etapas.map((etapa, index) => (
              <AnimacaoScroll key={etapa.numero} atraso={`delay-${index % 3}00`}>
                <div className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Número e ícone da etapa */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-laranja text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                      {etapa.numero}
                    </div>
                    <div className="absolute inset-0 bg-laranja/20 rounded-full blur-lg"></div>
                  </div>
                  
                  {/* Conteúdo da etapa */}
                  <div className={`flex-grow md:w-5/12 bg-secundaria border border-white/10 rounded-xl p-6 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <div className="bg-laranja/10 text-laranja p-2 rounded-lg">
                        {etapa.icone}
                      </div>
                      <h3 className="text-xl font-semibold">{etapa.titulo}</h3>
                    </div>
                    <p className="text-white/70">{etapa.descricao}</p>
                  </div>
                </div>
              </AnimacaoScroll>
            ))}
          </div>
        </div>
        
        <AnimacaoScroll>
          <div className="mt-16 bg-escuro/50 border border-white/10 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Prazo de entrega: <span className="text-laranja">3 a 6 semanas</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Dependendo da complexidade do projeto, seu e-commerce pode estar pronto para 
              lançamento entre 3 e 6 semanas. Durante todo o processo, mantemos comunicação 
              constante para garantir que o resultado final atenda perfeitamente às suas expectativas.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default EcommerceEtapas;
