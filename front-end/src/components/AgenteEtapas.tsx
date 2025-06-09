import { ClipboardList, Database, Bot, Wrench, BookOpen, BarChart4 } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe as etapas de implementação do Agente IA para WhatsApp
 */
const AgenteEtapas = () => {
  // Lista de etapas para implementação do Agente IA
  const etapas = [
    {
      numero: "1",
      icone: <ClipboardList className="w-6 h-6" />,
      titulo: "Levantamento de requisitos",
      descricao: "Reunião para entender as necessidades específicas da sua empresa e definir os objetivos do agente.",
      prazo: "3-5 dias"
    },
    {
      numero: "2",
      icone: <Database className="w-6 h-6" />,
      titulo: "Criação da base de conhecimento",
      descricao: "Estruturação das informações que o agente utilizará para responder às perguntas dos clientes.",
      prazo: "5-10 dias"
    },
    {
      numero: "3",
      icone: <Bot className="w-6 h-6" />,
      titulo: "Configuração e personalização",
      descricao: "Desenvolvimento e configuração do agente com base nos requisitos levantados.",
      prazo: "10-15 dias"
    },
    {
      numero: "4",
      icone: <Wrench className="w-6 h-6" />,
      titulo: "Testes e ajustes",
      descricao: "Fase de testes intensivos para garantir que o agente está respondendo corretamente às perguntas.",
      prazo: "5-7 dias"
    },
    {
      numero: "5",
      icone: <BookOpen className="w-6 h-6" />,
      titulo: "Treinamento e implantação",
      descricao: "Treinamento da sua equipe e colocação do agente em produção para começar a atender clientes.",
      prazo: "2-3 dias"
    },
    {
      numero: "6",
      icone: <BarChart4 className="w-6 h-6" />,
      titulo: "Monitoramento e evolução",
      descricao: "Acompanhamento constante, análise de métricas e aprimoramento contínuo do agente.",
      prazo: "Contínuo"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como <span className="text-laranja">Implementamos</span> seu Agente IA
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Conheça o passo a passo para ter seu próprio Agente IA para WhatsApp funcionando
          </p>
        </AnimacaoScroll>
        
        {/* Linha do tempo */}
        <div className="relative">
          {/* Linha central (visível apenas em telas maiores) */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 z-0"></div>
          
          {/* Etapas */}
          <div className="space-y-12 md:space-y-0">
            {etapas.map((etapa, idx) => (
              <AnimacaoScroll 
                key={idx} 
                atraso={idx < 3 ? "delay-100" : "delay-200"}
              >
                <div className={`
                  relative flex flex-col md:flex-row items-center
                  ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"}
                `}>
                  {/* Conteúdo da etapa */}
                  <div className={`
                    w-full md:w-[calc(50%-2rem)] relative z-10
                    ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}
                  `}>
                    <div className="bg-secundaria border border-white/5 rounded-xl p-6 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-laranja/10 text-laranja rounded-xl p-3">
                          {etapa.icone}
                        </div>
                        <h3 className="text-xl font-bold">
                          {etapa.titulo}
                        </h3>
                      </div>
                      
                      <p className="text-white/70 mb-4">
                        {etapa.descricao}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-laranja">Prazo estimado:</span>
                        <span className="text-white/80">{etapa.prazo}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Círculo central com número (visível apenas em telas maiores) */}
                  <div className="
                    hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-12 h-12 rounded-full bg-laranja text-escuro font-bold
                    items-center justify-center z-20
                  ">
                    {etapa.numero}
                  </div>
                  
                  {/* Marcador para mobile */}
                  <div className="md:hidden bg-laranja w-8 h-8 rounded-full flex items-center justify-center text-escuro font-bold mb-4">
                    {etapa.numero}
                  </div>
                </div>
              </AnimacaoScroll>
            ))}
          </div>
        </div>
        
        {/* Informações adicionais */}
        <AnimacaoScroll atraso="delay-300">
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-laranja">Prazo total:</span> 25 a 40 dias
            </h3>
            <p className="text-white/70">
              O tempo de implementação pode variar de acordo com a complexidade do seu negócio, 
              volume de informações para a base de conhecimento e necessidades específicas do 
              seu projeto. Durante todo o processo, mantemos comunicação constante para 
              garantir que o agente atenda perfeitamente às suas expectativas.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default AgenteEtapas;
