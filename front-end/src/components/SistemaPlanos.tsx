import { Check, CheckCircle2, AlertCircle } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";

/**
 * Componente que exibe os planos e preços de Sistemas Web Personalizados
 */
const SistemaPlanos = () => {
  // Planos disponíveis
  const planos = [
    {
      nome: "Básico",
      preco: "A partir de R$ 2.000",
      prazo: "10 a 30 dias",
      descricao: "Ideal para pequenas empresas que precisam de um sistema simples para automatizar processos básicos.",
      recursos: [
        "Até 5 funcionalidades principais",
        "Painel administrativo básico",
        "Sistema responsivo para desktop e mobile",
        "Controle de acesso de usuários",
        "Hospedagem grátis",
        "Suporte técnico por 3 meses",
        "Treinamento para uso do sistema"
      ],
      emDestaque: false
    },
    {
      nome: "Intermediário",
      preco: "A partir de R$ 4.000",
      prazo: "30 a 60 dias",
      descricao: "Para empresas em crescimento que necessitam de um sistema mais completo com múltiplos módulos.",
      recursos: [
        "Até 12 funcionalidades personalizadas",
        "Painel administrativo avançado",
        "Design responsivo personalizado",
        "Sistema de relatórios personalizados",
        "Controle de permissões avançado",
        "Integração com serviços externos",
        "API para outras plataformas",
        "Hospedagem grátis",
        "Suporte técnico por 6 meses",
        "Treinamento completo da equipe"
      ],
      emDestaque: true
    },
    {
      nome: "Avançado",
      preco: "A partir de R$ 6.000",
      prazo: "60 a 90 dias",
      descricao: "Solução completa para empresas de médio e grande porte com necessidades complexas de gestão.",
      recursos: [
        "Funcionalidades personalizadas ilimitadas",
        "Múltiplos módulos integrados",
        "Design exclusivo e personalizado",
        "Dashboard de Business Intelligence",
        "Integração com múltiplos sistemas",
        "Controle de permissões granular",
        "API completa para desenvolvedores",
        "Migração de dados existentes",
        "Suporte técnico por 12 meses",
        "Hospedagem premium com backup diário",
        "Consultoria de implantação",
        "Treinamento completo e documentação"
      ],
      emDestaque: false
    }
  ];

  return (
    <section id="planos" className="py-20 relative overflow-hidden bg-secundaria">
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
                  ? "border-laranja bg-escuro relative shadow-xl shadow-laranja/20 scale-105 z-10" 
                  : "border-white/10 bg-escuro/50"}
              `}>
                {plano.emDestaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-laranja text-escuro font-medium px-4 py-1 rounded-full text-sm">
                    Mais escolhido
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                  <div className="mb-1">
                    <span className="text-2xl font-bold">{plano.preco}</span>
                  </div>
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <span className="text-sm text-white/50">
                      Prazo estimado: {plano.prazo}
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
                    texto={`Solicitar orçamento ${plano.nome}`} 
                    mensagem={`Olá, gostaria de um orçamento para o plano ${plano.nome} de sistema web personalizado.`}
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
            <div className="bg-escuro/50 border border-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center">
                <AlertCircle className="text-laranja w-5 h-5 mr-2" />
                Informações importantes
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Valor para hospedagem em nossos servidores parte de 50/mês.</li>
                <li>• Os valores são estimativas iniciais e podem variar conforme os requisitos específicos do projeto.</li>
                <li>• O prazo de desenvolvimento pode ser alterado dependendo da complexidade das funcionalidades.</li>
                <li>• Todos os sistemas incluem período de testes e ajustes antes da entrega final.</li>
                <li>• O pagamento é parcelado em etapas: análise inicial, desenvolvimento e entrega.</li>
                <li>• Após o período de suporte incluso, oferecemos planos de manutenção mensal opcional.</li>
                <li>• Funcionalidades adicionais podem ser implementadas posteriormente mediante orçamento.</li>
              </ul>
            </div>
          </AnimacaoScroll>
        </div>
      </div>
    </section>
  );
};

export default SistemaPlanos;
