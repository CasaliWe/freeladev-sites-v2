import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente para exibir as perguntas frequentes sobre o Agente IA para WhatsApp
 */
const AgenteFAQ = () => {
  // Lista de perguntas e respostas
  const perguntas = [
    {
      pergunta: "O que é o Agente IA para WhatsApp?",
      resposta: "O Agente IA para WhatsApp é uma solução de automação de atendimento que utiliza inteligência artificial avançada para interagir com seus clientes através do WhatsApp. Ele pode responder perguntas, fornecer informações, agendar serviços e até mesmo auxiliar em vendas, funcionando 24 horas por dia, 7 dias por semana."
    },
    {
      pergunta: "Como o Agente IA funciona?",
      resposta: "O Agente IA funciona através de uma base de conhecimento personalizada que criamos especificamente para o seu negócio. Utilizamos tecnologias de processamento de linguagem natural (NLP) e aprendizado de máquina para que o agente compreenda as perguntas dos clientes e forneça respostas precisas. O sistema é integrado diretamente ao WhatsApp da sua empresa, permitindo interações naturais com os clientes."
    },
    {
      pergunta: "Quais tipos de empresas podem se beneficiar do Agente IA?",
      resposta: "Praticamente qualquer tipo de negócio pode se beneficiar do Agente IA para WhatsApp. Ele é particularmente útil para empresas com alto volume de atendimentos, estabelecimentos que precisam fornecer informações frequentemente (restaurantes, clínicas, escolas), empresas de serviços que trabalham com agendamentos, e-commerces que precisam dar suporte pós-venda, entre outros."
    },
    {
      pergunta: "É possível integrar o Agente IA com outros sistemas da minha empresa?",
      resposta: "Sim! O Agente IA pode ser integrado com vários sistemas como CRM, ERP, plataformas de e-commerce, sistemas de agendamento, entre outros. Isso permite que o agente acesse informações atualizadas e realize operações em outros sistemas, como verificar o status de um pedido ou agendar um serviço."
    },
    {
      pergunta: "O que acontece quando o Agente IA não sabe responder uma pergunta?",
      resposta: "Quando o Agente IA não tem certeza sobre uma resposta ou identifica que a pergunta requer atendimento humano, ele pode transferir a conversa para um atendente real. O sistema é configurado para reconhecer seus limites e garantir que o cliente sempre receba a melhor assistência possível, seja automatizada ou humana."
    },
    {
      pergunta: "É necessário um número de WhatsApp exclusivo para o Agente IA?",
      resposta: "Recomendamos utilizar um número exclusivo para o Agente IA, mas é possível implementá-lo em um número já existente. O importante é que o número seja utilizado através de nossa plataforma para que o agente possa processar e responder às mensagens. Para empresas com grande volume de atendimento, múltiplos números podem ser configurados."
    },
    {
      pergunta: "Como é feita a manutenção e atualização do Agente IA?",
      resposta: "Nossa equipe realiza manutenção contínua no sistema, garantindo seu funcionamento adequado. Atualizações na base de conhecimento podem ser feitas conforme necessário, seja para adicionar novas informações, corrigir respostas ou expandir as capacidades do agente. Os planos incluem um número mensal de atualizações, e atualizações adicionais podem ser contratadas separadamente."
    },
    {
      pergunta: "Quanto tempo leva para implementar o Agente IA?",
      resposta: "O tempo de implementação varia de acordo com a complexidade do projeto, mas geralmente leva entre 25 e 40 dias. Isso inclui o levantamento de requisitos, criação da base de conhecimento, configuração do agente, testes e ajustes, treinamento da equipe e implantação."
    },
    {
      pergunta: "O Agente IA consegue entender mensagens de voz?",
      resposta: "Sim, os planos Profissional e Empresarial incluem a funcionalidade de transcrição de mensagens de voz. O agente converte o áudio em texto, processa a informação e responde adequadamente, oferecendo uma experiência completa para os clientes que preferem enviar mensagens de voz."
    },
    {
      pergunta: "Quais são os requisitos para implementar o Agente IA?",
      resposta: "Os requisitos básicos são: um número de telefone com WhatsApp (preferencialmente exclusivo), informações detalhadas sobre o seu negócio para a base de conhecimento, e definição clara dos objetivos que você deseja alcançar com o agente. Nossa equipe guiará você em todo o processo de implementação, tornando-o simples e eficiente."
    }
  ];
  
  // Estado para controle das perguntas abertas
  const [perguntasAbertas, setPerguntasAbertas] = useState<number[]>([]);
  
  // Função para alternar a abertura/fechamento de uma pergunta
  const alternarPergunta = (index: number) => {
    if (perguntasAbertas.includes(index)) {
      setPerguntasAbertas(perguntasAbertas.filter(item => item !== index));
    } else {
      setPerguntasAbertas([...perguntasAbertas, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-secundaria relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perguntas <span className="text-laranja">Frequentes</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Tire suas dúvidas sobre o Agente IA para WhatsApp
          </p>
        </AnimacaoScroll>
        
        {/* Lista de perguntas */}
        <div className="max-w-3xl mx-auto">
          {perguntas.map((item, idx) => (
            <AnimacaoScroll key={idx} atraso={idx < 5 ? "delay-100" : "delay-200"}>
              <div className="mb-4">
                <button
                  onClick={() => alternarPergunta(idx)}
                  className={`
                    w-full text-left p-5 rounded-xl flex items-center justify-between 
                    ${perguntasAbertas.includes(idx) 
                      ? "bg-escuro border-b border-laranja/30" 
                      : "bg-escuro/50 hover:bg-escuro/80 transition-colors"}
                  `}
                  aria-expanded={perguntasAbertas.includes(idx)}
                >
                  <h3 className="font-bold text-lg pr-8">{item.pergunta}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-laranja transition-transform ${
                      perguntasAbertas.includes(idx) ? "transform rotate-180" : ""
                    }`} 
                  />
                </button>
                
                {perguntasAbertas.includes(idx) && (
                  <div className="p-5 bg-escuro/30 rounded-b-xl">
                    <p className="text-white/70">{item.resposta}</p>
                  </div>
                )}
              </div>
            </AnimacaoScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenteFAQ;
