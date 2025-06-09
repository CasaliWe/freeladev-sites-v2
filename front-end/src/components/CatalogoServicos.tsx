import { useState } from "react";
import { Check, Info, Globe, Bot, ShoppingCart } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";

// Interface para os cartões de serviço
interface ServicoInfo {
  id: number;
  titulo: string;
  valorUnico: string;
  mensalidade: string;
  correcoes: string;
  descricao: string;
  icone: React.ReactNode;
  detalhes: string[];
  linkExterno?: string;  // Link opcional para site relacionado
  textoLink?: string;    // Texto para o botão do link externo
}

/**
 * Componente que exibe o catálogo de serviços com preços e detalhes
 */
const CatalogoServicos = () => {
  // Estado para controle de serviço com detalhes expandidos
  const [detalhesExpandidosId, setDetalhesExpandidosId] = useState<number | null>(null);
  // Lista de serviços do catálogo
  const servicos: ServicoInfo[] = [
    {
      id: 1,
      titulo: "Landing Page",
      valorUnico: "R$ 650",
      mensalidade: "R$ 35",
      correcoes: "2 rodada",
      descricao: "Página única com foco em conversão.",
      icone: <Info className="w-12 h-12" />,
      detalhes: [
        "Design responsivo",
        "Formulário de contato",
        "Integração com WhatsApp",
        "Otimização básica"
      ],
      linkExterno: "https://exemplo.com/landing-page-demo",
      textoLink: "Ver demonstração"
    },
    {
      id: 2,
      titulo: "Website Multi-página",
      valorUnico: "R$ 1.200",
      mensalidade: "R$ 40",
      correcoes: "3 rodadas",
      descricao: "Site institucional com 3 a 5 páginas.",
      icone: <Globe className="w-12 h-12" />,
      detalhes: [
        "Páginas como Home, Sobre, Serviços, Contato",
        "SEO básico",
        "Google Analytics",
        "Responsividade",
        "Painel admin para atualizar todas as informações"
      ],
      linkExterno: "https://exemplo.com/website-exemplo",
      textoLink: "Ver exemplo"
    },
    {
      id: 3,
      titulo: "Agente de IA para WhatsApp",
      valorUnico: "A partir de R$ 1.000",
      mensalidade: "R$ 65",
      correcoes: "3 rodada de ajustes no fluxo",
      descricao: "Chatbot com IA para atendimento, vendas ou agendamentos.",
      icone: <Bot className="w-12 h-12" />,
      detalhes: [
        "Integração com WhatsApp Business",
        "Base de conhecimento treinada",
        "Uso de API do ChatGPT",
        "Respostas inteligentes 24h"
      ],
      linkExterno: "https://youtube.com/watch?v=exemplo-ia-bot",
      textoLink: "Ver demonstração em vídeo"
    },
    {
      id: 4,
      titulo: "E-commerce",
      valorUnico: "R$ 2.000",
      mensalidade: "R$ 50",
      correcoes: "3 rodadas",
      descricao: "Loja online com exibição de produtos e pedido via WhatsApp ou link de pagamento.",
      icone: <ShoppingCart className="w-12 h-12" />,
      detalhes: [
        "Carrinho de compras",
        "Responsivo",
        "Painel admin para adicionar produtos e informações",
        "Integração com Asaas para receber os pagamentos"
      ],
      linkExterno: "https://exemplo-loja.com",
      textoLink: "Visitar loja modelo"
    },
        {
      id: 5,
      titulo: "Sistema Web Personalizado",
      valorUnico: "R$ 2.000 a R$ 8.000",
      mensalidade: "R$ 40 a R$ 100",
      correcoes: "5 rodadas",
      descricao: "Sistemas personalizados para seu negócio.",
      icone: <Globe className="w-12 h-12" />,
      detalhes: [
        "Funcionalidades sob medida",
        "Painel administrativo completo",
        "Design responsivo e intuitivo",
        "Integração com APIs externas",
        "Hospedagem e suporte técnico incluídos"
      ],
      linkExterno: "https://exemplo.com/website-exemplo",
      textoLink: "Ver exemplo"
    },
  ];

  // Função para alternar exibição de detalhes expandidos
  const toggleDetalhes = (id: number) => {
    if (detalhesExpandidosId === id) {
      setDetalhesExpandidosId(null);
    } else {
      setDetalhesExpandidosId(id);
    }
  };
  return (
    <section id="catalogo" className="py-16 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Nossos Serviços</h2>
        <p className="text-white/70 mb-10 w-[75%] mx-auto text-center">
          Nossa equipe oferece soluções digitais completas para sua empresa, desde landing pages até sistemas complexos.
          Confira abaixo os detalhes de cada serviço e entre em contato para um orçamento personalizado.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">          {servicos.map((servico, index) => (
            <AnimacaoScroll key={servico.id} atraso={index === 0 ? "delay-100" : index === 1 ? "delay-200" : index === 2 ? "delay-300" : "delay-400"}>
              <div 
                className={`
                  ${index === 1 ? 'bg-gradient-to-br from-secundaria to-secundaria border-laranja/30' : 'bg-secundaria border-white/5'}
                  rounded-2xl p-8 border h-full flex flex-col relative
                  transform transition-all duration-300 hover:shadow-xl hover:shadow-laranja/10 hover:-translate-y-1
                `}
              >
                {index === 1 && (
                  <div className="absolute -top-4 right-4 bg-laranja text-white text-sm font-medium py-1 px-3 rounded-full shadow-lg">
                    Mais Popular
                  </div>
                )}
                {/* Cabeçalho do cartão */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="bg-laranja/10 p-4 rounded-xl text-laranja">
                    {servico.icone}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{servico.titulo}</h3>
                    <p className="text-white/70">{servico.descricao}</p>
                  </div>
                </div>
                
                {/* Informações de preço */}
                <div className="bg-escuro border border-white/5 rounded-xl p-6 mb-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Valor único:</span>
                      <span className="font-semibold text-xl text-laranja">{servico.valorUnico}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Mensalidade (Hospedagem):</span>
                      <span className="font-medium">{servico.mensalidade}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Correções incluídas:</span>
                      <span className="font-medium">{servico.correcoes}</span>
                    </div>
                  </div>
                </div>
                
                {/* Detalhes do serviço */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-lg font-medium mb-3 flex items-center">
                    <span className="mr-2">Detalhes</span>
                    <div className="flex-grow h-px bg-white/10"></div>
                  </h4>
                  
                  <ul className="space-y-2">
                    {servico.detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  {/* Botões de ação */}
                <div className="mt-auto space-y-3">
                  {/* Botão WhatsApp */}
                  <BotaoWhatsapp 
                    texto={`${servico.titulo}`} 
                    className="w-full justify-center"
                    mensagem={`Olá, gostaria de saber mais sobre o serviço de ${servico.titulo} oferecido pela Freeladev.`}
                  />
                    {/* Botão de Link Externo */}
                  {servico.linkExterno && (
                    <a 
                      href={servico.linkExterno}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full flex justify-center items-center gap-2 py-2 px-4 bg-secundaria text-white border border-white/10 rounded-full transition-all duration-300 hover:border-laranja/30 hover:bg-secundaria/80 relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-laranja/10 to-laranja/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        {servico.textoLink || "Visitar site"}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
          {/* Seção de informações adicionais */}
        <AnimacaoScroll>
          <div className="mt-16 bg-laranja/5 border border-laranja/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Info className="w-6 h-6 mr-2" />
              Informações Importantes
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Todos os serviços incluem <strong>domínio personalizado</strong> e <strong>suporte técnico</strong> durante o período de hospedagem.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Os valores podem variar conforme a complexidade e demandas específicas do projeto.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Oferecemos opções de pagamento parcelado em até 5x no cartão de crédito.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Para pagamentos via pix você ganha 5% de desconto.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Entre em contato para uma avaliação personalizada do seu projeto e obter um orçamento detalhado.
                </p>
              </li>
            </ul>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BotaoWhatsapp 
                texto="Orçamento personalizado" 
                className="w-full sm:w-auto justify-center"
              />
            </div>
          </div>
        </AnimacaoScroll>
        
        {/* CTA Final */}
        <AnimacaoScroll>
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para <span className="text-laranja">transformar</span> sua presença digital?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para entender suas necessidades e criar a solução digital perfeita para o seu negócio.
              Entre em contato hoje mesmo!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <BotaoWhatsapp 
                texto="Fale conosco" 
                mensagem="Olá! Gostaria de conversar com um consultor sobre os serviços da Freeladev."
              />
              
            </div>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default CatalogoServicos;
