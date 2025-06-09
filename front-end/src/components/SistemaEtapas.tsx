import { ClipboardList, Code, Database, Workflow, MonitorCheck, Users, LineChart } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe as etapas de implementação de um Sistema Web Personalizado
 */
const SistemaEtapas = () => {
  // Lista de etapas para implementação do Sistema
  const etapas = [
    {
      numero: "1",
      icone: <ClipboardList className="w-6 h-6" />,
      titulo: "Análise de requisitos",
      descricao: "Entendemos profundamente as necessidades do seu negócio, processos atuais e objetivos para definir o escopo completo do sistema.",
      prazo: "2-3 dias"
    },
    {
      numero: "2",
      icone: <Workflow className="w-6 h-6" />,
      titulo: "Planejamento e protótipos",
      descricao: "Desenvolvemos o planejamento técnico, arquitetura do sistema e protótipos de interface para validação.",
      prazo: "2-3 dias"
    },
    {
      numero: "3",
      icone: <Database className="w-6 h-6" />,
      titulo: "Modelagem de dados",
      descricao: "Estruturamos o banco de dados de forma eficiente, garantindo a integridade e desempenho das informações.",
      prazo: "2-5 dias"
    },
    {
      numero: "4",
      icone: <Code className="w-6 h-6" />,
      titulo: "Desenvolvimento",
      descricao: "Programação do sistema com entregas incrementais e reuniões periódicas para demonstração do progresso.",
      prazo: "2 a 6 semanas"
    },
    {
      numero: "5",
      icone: <MonitorCheck className="w-6 h-6" />,
      titulo: "Testes e ajustes",
      descricao: "Realizamos testes extensivos para garantir o correto funcionamento, segurança e desempenho do sistema.",
      prazo: "3-5 dias"
    },
    {
      numero: "6",
      icone: <Users className="w-6 h-6" />,
      titulo: "Implantação e treinamento",
      descricao: "Colocamos o sistema em produção, oferecemos treinamento abrangente e acompanhamos os primeiros dias de uso.",
      prazo: "2-5 dias"
    },
    {
      numero: "7",
      icone: <LineChart className="w-6 h-6" />,
      titulo: "Acompanhamento e evolução",
      descricao: "Monitoramos o uso, coletamos feedback e implementamos melhorias contínuas para evolução do sistema.",
      prazo: "Contínuo"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-secundaria">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como <span className="text-laranja">Desenvolvemos</span> seu Sistema
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Conheça nossa metodologia para entregar sistemas web personalizados de alta qualidade
          </p>
        </AnimacaoScroll>
        
        {/* Linha do tempo */}
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {etapas.map((etapa, idx) => (
            <AnimacaoScroll key={idx} atraso={idx < 4 ? "delay-100" : "delay-200"}>
              <div className="flex flex-col md:flex-row gap-6 items-start relative">
                {/* Círculo com número */}
                <div className="
                  flex-shrink-0 w-14 h-14 rounded-full bg-laranja text-escuro font-bold 
                  flex items-center justify-center z-10 border-4 border-escuro
                ">
                  {etapa.numero}
                </div>
                
                {/* Linha conectora (apenas entre itens, não após o último) */}
                {idx !== etapas.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 h-12 bg-white/10"></div>
                )}
                
                {/* Conteúdo */}
                <div className="flex-grow bg-escuro border border-white/5 rounded-xl p-6">
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
            </AnimacaoScroll>
          ))}
        </div>
        
        {/* Informações adicionais */}
        <AnimacaoScroll atraso="delay-300">
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-laranja">Prazo total:</span> 1 a 3 meses (dependendo da complexidade)
            </h3>
            <p className="text-white/70">
              O tempo de desenvolvimento pode variar significativamente dependendo da complexidade 
              e escopo do projeto. Sistemas mais simples podem levar cerca de 1 mês, 
              enquanto soluções corporativas mais robustas podem exigir 3 meses ou mais. 
              Durante toda a jornada, mantemos comunicação constante para garantir 
              alinhamento e total transparência no processo.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default SistemaEtapas;
