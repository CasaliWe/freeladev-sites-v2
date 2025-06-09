import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";

// Interface para as perguntas frequentes
interface FAQ {
  pergunta: string;
  resposta: string;
}

/**
 * Componente de Perguntas Frequentes
 */
const FAQ = () => {
  // Perguntas frequentes
  const perguntas: FAQ[] = [
    {
      pergunta: "Qual o prazo de entrega para uma Landing Page?",
      resposta: "O prazo médio para entrega de uma Landing Page é de 3 a 7 dias úteis, dependendo da complexidade do projeto e do volume de conteúdo a ser desenvolvido."
    },
    {
      pergunta: "Qual o prazo de entrega para um website multi-página?",
      resposta: "O prazo médio para entrega de um website multi-página é de 7 a 10 dias úteis, dependendo da complexidade do projeto e do volume de conteúdo a ser desenvolvido."
    },
    {
      pergunta: "Qual o prazo de entrega para um ecommerce?",
      resposta: "O prazo médio para entrega de um ecommerce é de 10 a 20 dias úteis, dependendo da complexidade do projeto e do volume de conteúdo a ser desenvolvido."
    },
    {
      pergunta: "Qual o prazo de entrega para um agente de IA para whatsapp?",
      resposta: "O prazo médio para entrega de um agente de IA para whatsapp é de 3 a 5 dias úteis, dependendo da complexidade do projeto e do volume de conteúdo a ser desenvolvido."
    },
    {
      pergunta: "Qual o prazo de entrega para um sistema web personalizado?",
      resposta: "Depois de analisarmos o projeto, informamos o prazo de entrega. Geralmente, projetos mais simples levam de 10 a 20 dias úteis, enquanto sistemas mais complexos podem levar meses."
    },
    {
      pergunta: "Como funciona a hospedagem mensal dos sites?",
      resposta: "A hospedagem mensal inclui servidor de alta performance, certificado SSL (https), backup diário, monitoramento de segurança e suporte técnico. A mensalidade é cobrada após a entrega do projeto."
    },
    {
      pergunta: "É possível alterar o site depois de pronto?",
      resposta: "Sim. Projetos como o Website Multi-página e o E-commerce incluem painel administrativo para você mesmo fazer alterações de conteúdo. Para mudanças estruturais, oferecemos suporte técnico ou pacotes de manutenção."
    },
    {
      pergunta: "Como funciona o Agente de IA para WhatsApp?",
      resposta: "O Agente de IA é um chatbot inteligente que utiliza tecnologia GPT para responder perguntas, fazer atendimentos e até mesmo agendamentos pelo WhatsApp. Ele é treinado com informações do seu negócio e pode funcionar 24 horas por dia."
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta: "Aceitamos pagamentos via PIX (5% de desconto) e cartão de crédito (com opção de parcelamento em até 5x). Para projetos maiores, trabalhamos com 50% de entrada e 50% na entrega."
    },
    {
      pergunta: "O que acontece se eu não gostar do resultado final?",
      resposta: "Todos os nossos projetos incluem rodadas de correções conforme especificado em cada serviço. Além disso, trabalhamos de forma transparente com aprovações em cada etapa para garantir que o resultado final esteja de acordo com suas expectativas."
    }
  ];
  
  // Estado para controlar qual FAQ está aberta
  const [perguntaAbertaId, setPerguntaAbertaId] = useState<number | null>(null);
  
  // Função para alternar o estado de abertura de uma pergunta
  const alternarPergunta = (index: number) => {
    if (perguntaAbertaId === index) {
      setPerguntaAbertaId(null);
    } else {
      setPerguntaAbertaId(index);
    }
  };
  
  return (
    <section className="py-16 bg-escuro/50">
      <div className="container mx-auto px-4">
        <AnimacaoScroll>
          <h2 className="text-3xl font-bold mb-3 text-center">
            Perguntas <span className="text-laranja">Frequentes</span>
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </AnimacaoScroll>
        
        <div className="max-w-3xl mx-auto">
          {perguntas.map((pergunta, index) => (
            <AnimacaoScroll 
              key={index} 
              className="mb-4"
              atraso={`delay-${Math.min(index * 100, 400)}`}
            >
              <div className="border border-white/10 rounded-lg overflow-hidden">
                {/* Cabeçalho da pergunta */}
                <button
                  onClick={() => alternarPergunta(index)}
                  className={`
                    w-full flex justify-between items-center p-5 text-left transition-colors
                    ${perguntaAbertaId === index 
                      ? "bg-laranja/10" 
                      : "bg-secundaria hover:bg-secundaria/80"
                    }
                  `}
                  aria-expanded={perguntaAbertaId === index}
                >
                  <h3 className="text-lg font-medium">{pergunta.pergunta}</h3>
                  {perguntaAbertaId === index 
                    ? <ChevronUp className="w-5 h-5 text-laranja flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-laranja flex-shrink-0" />
                  }
                </button>
                
                {/* Conteúdo da resposta */}
                <div 
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${perguntaAbertaId === index 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="p-5 bg-escuro border-t border-white/5">
                    <p className="text-white/80">{pergunta.resposta}</p>
                  </div>
                </div>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        {/* Não encontrou sua pergunta? */}
        <AnimacaoScroll>
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6">
              Não encontrou o que procurava? Entre em contato conosco!
            </p>
            <div className="flex justify-center">
              <BotaoWhatsapp 
                texto="Fazer outra pergunta" 
                mensagem="Olá! Tenho uma pergunta sobre os serviços da Freeladev."
              />
            </div>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default FAQ;
