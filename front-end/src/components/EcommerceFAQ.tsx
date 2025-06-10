import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";

// Tipo para os itens do FAQ
interface FAQItem {
  pergunta: string;
  resposta: string;
}

/**
 * Componente de perguntas frequentes sobre o serviço de e-commerce
 */
const EcommerceFAQ = () => {
  // Estado para controlar qual item está expandido
  const [itemAberto, setItemAberto] = useState<number | null>(0);
  
  // Lista de perguntas e respostas frequentes
  const faqItems: FAQItem[] = [
    {
      pergunta: "Quanto tempo leva para desenvolver um e-commerce?",
      resposta: "O prazo para desenvolvimento de um e-commerce varia conforme a complexidade do projeto, normalmente entre 20 a 45 dias. Um e-commerce básico pode ser entregue em aproximadamente 3 semanas, enquanto projetos mais complexos com integrações personalizadas podem levar até 6 semanas. Após a aprovação do briefing, fornecemos um cronograma detalhado."
    },
    {
      pergunta: "Consigo alterar informações e produtos sozinho?",
      resposta: "Sim! Todos os nossos e-commerces incluem um painel administrativo intuitivo onde você pode gerenciar produtos, categorias, preços, promoções, estoque e pedidos. Fornecemos treinamento completo para que você e sua equipe possam realizar todas as atualizações necessárias sem depender de suporte técnico constante."
    },
    {
      pergunta: "Como funciona o pagamento para os clientes?",
      resposta: "Oferecemos diversas opções de integração para pagamentos. A mais comum é com ASAAS ou Mercado Pago, que permitem receber via PIX, cartão de crédito, boleto e outros métodos. Também podemos integrar com outros gateways como PagSeguro, PayPal ou soluções personalizadas conforme necessidade do seu negócio."
    },
    {
      pergunta: "O e-commerce é otimizado para celulares?",
      resposta: "Com certeza! Todos os nossos e-commerces são desenvolvidos com design responsivo, garantindo uma experiência perfeita tanto em desktops quanto em dispositivos móveis como smartphones e tablets. A maioria das compras online hoje acontecem via celular, por isso priorizamos a experiência mobile em todos os nossos projetos."
    },
    {
      pergunta: "O que está incluso na mensalidade?",
      resposta: "A mensalidade inclui hospedagem em servidores de alta performance, certificado SSL para segurança, backup diário do site e banco de dados, monitoramento de desempenho, suporte técnico para correção de bugs e pequenos ajustes. Atualizações maiores ou implementação de novas funcionalidades podem ter custos adicionais, sempre orçados previamente."
    },
    {
      pergunta: "É possível integrar com sistemas que já utilizo?",
      resposta: "Sim, desenvolvemos integrações personalizadas com diversos sistemas como ERP, CRM, sistemas de logística, controle de estoque, marketplaces (Mercado Livre, Amazon, etc.), e outras plataformas que sua empresa já utilize. Essas integrações são avaliadas caso a caso e podem ter custos específicos dependendo da complexidade."
    }
  ];
  
  // Função para alternar a abertura dos itens do FAQ
  const toggleItem = (index: number) => {
    if (itemAberto === index) {
      setItemAberto(null);
    } else {
      setItemAberto(index);
    }
  };
  
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-laranja w-8 h-8" />
              Perguntas Frequentes
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nosso serviço de e-commerce personalizado
            </p>
          </div>
        </AnimacaoScroll>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AnimacaoScroll key={index} atraso={`delay-${index % 3}00`}>
              <div className="mb-4">
                <div 
                  className={`
                    bg-secundaria border ${itemAberto === index ? 'border-laranja/30' : 'border-white/5'} 
                    rounded-xl overflow-hidden transition-all duration-300
                  `}
                >
                  <button 
                    className="w-full text-left p-5 flex justify-between items-center"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="font-medium text-lg pr-8">{item.pergunta}</span>
                    <ChevronDown 
                      className={`text-laranja transition-transform duration-300 ${itemAberto === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <div 
                    className={`
                      overflow-hidden transition-all duration-300
                      ${itemAberto === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="p-5 pt-0 text-white/80 border-t border-white/5">
                      {item.resposta}
                    </div>
                  </div>
                </div>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        <AnimacaoScroll>
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6">
              Não encontrou a resposta que procurava? Entre em contato conosco!
            </p>
            <div className="flex justify-center">
              <BotaoWhatsapp 
                texto="Falar com um especialista"
                mensagem="Olá! Tenho uma dúvida sobre o serviço de e-commerce que não encontrei no FAQ."
              />
            </div>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default EcommerceFAQ;
