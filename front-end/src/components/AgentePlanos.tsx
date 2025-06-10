import { Check, CheckCircle2 } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";

/**
 * Componente que exibe os planos e preços do Agente IA para WhatsApp
 */
const AgentePlanos = () => {
  // Planos disponíveis
  const planos = [
    {
      nome: "Básico",
      preco: "60",
      recorrencia: "por mês",
      setup: "1000",
      descricao: "Ideal para pequenas empresas que estão começando a automatizar o atendimento.",
      recursos: [
        "Base de conhecimento personalizada",
        "Respostas automáticas",
        "Relatórios básicos",
        "Hospedagem inclusa",
        "Domínio incluso",
        "Apenas texto e áudio",
        "Congelar e descongelar o agente",
      ],
      emDestaque: false
    },
    {
      nome: "Profissional",
      preco: "70",
      recorrencia: "por mês",
      setup: "1.400",
      descricao: "Para empresas em crescimento que necessitam de recursos avançados de automação.",
      recursos: [
        "Base de conhecimento avançada",
        "IA contextual aprimorada",
        "Integrações (API externa)",
        "Suporte prioritário",
        "Multi-idiomas",
        "Transferência para atendente humano",
        "Hospedagem premium",
        "Domínio personalizado",
        "Mensagens de voz transcritas",
        "Interpretar e responder a perguntas complexas",
        "Analisar imagens",
        "Usar docs e planilhas",
        "Congelar e descongelar o agente",
      ],
      emDestaque: true
    },
    {
      nome: "Empresarial",
      preco: "80",
      recorrencia: "por mês",
      setup: "2.000",
      descricao: "Solução completa para empresas de médio e grande porte com alto volume de atendimentos.",
      recursos: [
        "Base de conhecimento ilimitada",
        "IA contextual avançada",
        "Múltiplas integrações",
        "Relatórios personalizados",
        "Suporte VIP 24/7",
        "Personalização completa da IA",
        "Hospedagem premium dedicada",
        "Treinamento da equipe",
        "Domínio personalizado",
        "Mensagens de voz transcritas",
        "Interpretar e responder a perguntas complexas",
        "Analisar imagens",
        "Análise de sentimentos",
        "Gerenciamento de tickets",
        "Respostas automáticas avançadas",
        "Executar ações automatizadas (ex: agendamentos, vendas)",
        "Usar docs e planilhas",
        "Congelar e descongelar o agente",
      ],
      emDestaque: false
    }
  ];

  return (
    <section id="planos" className="py-20 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Planos e <span className="text-laranja">Investimento</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Escolha o plano ideal para as necessidades da sua empresa
          </p>
        </AnimacaoScroll>
        
        {/* Grade de preços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planos.map((plano, idx) => (
            <AnimacaoScroll key={idx} atraso={`delay-${(idx + 1) * 100}` as "delay-100" | "delay-200" | "delay-300"}>
              <div className={`
                rounded-xl border h-full flex flex-col
                ${plano.emDestaque 
                  ? "border-laranja bg-secundaria relative shadow-xl shadow-laranja/20 scale-105 z-10" 
                  : "border-white/10 bg-secundaria/50"}
              `}>
                {plano.emDestaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-laranja text-escuro font-medium px-4 py-1 rounded-full text-sm">
                    Mais popular
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm text-white/50">R$</span>
                    <span className="text-4xl font-bold">{plano.preco}</span>
                    <span className="text-sm text-white/50">{plano.recorrencia}</span>
                  </div>
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <span className="text-sm text-white/50">
                      + R$ {plano.setup} (configuração inicial)
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-6">{plano.descricao}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plano.recursos.map((recurso, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-laranja mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span className="text-white/80 text-sm">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 md:p-8 pt-0">
                  <BotaoWhatsapp 
                    texto={`Contratar plano ${plano.nome}`} 
                    mensagem={`Olá, gostaria de contratar o plano ${plano.nome} do Agente IA.`}
                    className={plano.emDestaque ? "" : "bg-transparent border border-laranja hover:bg-laranja text-laranja hover:text-escuro"}
                  />
                </div>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        {/* Observações */}
        <div className="mt-16 max-w-3xl mx-auto">
          <AnimacaoScroll atraso="delay-100">
            <div className="bg-secundaria/50 border border-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center">
                <CheckCircle2 className="text-laranja w-5 h-5 mr-2" />
                Informações importantes
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Todos os planos incluem suporte técnico durante o horário comercial.</li>
                <li>• A configuração inicial inclui criação da base de conhecimento específica para seu negócio.</li>
                <li>• O faturamento é mensal, podendo ser pago via boleto, PIX ou cartão de crédito.</li>
                <li>• Planos personalizados estão disponíveis para necessidades específicas, entre em contato.</li>
                <li>• É possível migrar entre planos a qualquer momento, com reajustes proporcionais.</li>
              </ul>
            </div>
          </AnimacaoScroll>
        </div>
      </div>
    </section>
  );
};

export default AgentePlanos;
