import { Check, ShoppingBag } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";

/**
 * Componente que exibe os planos de e-commerce disponíveis
 */
const EcommercePlanos = () => {
  // Definição dos planos disponíveis
  const planos = [
    {
      id: 1,
      nome: "E-commerce Básico",
      preco: "R$ 1.800",
      mensalidade: "R$ 45",
      destaque: false,
      descricao: "Ideal para pequenos negócios que estão começando a vender online",
      recursos: [
        "Até 100 produtos",
        "Design responsivo",
        "Carrinho de compras",
        "Checkout simplificado",
        "Integração com WhatsApp",
        "Painel administrativo básico",
        "Hospedagem inclusa",
        "Certificado SSL",
        "Suporte por 3 meses"
      ]
    },
    {
      id: 2,
      nome: "E-commerce Profissional",
      preco: "R$ 2.500",
      mensalidade: "R$ 65",
      destaque: true,
      descricao: "Solução completa para negócios que buscam crescimento online",
      recursos: [
        "Até 500 produtos",
        "Design personalizado premium",
        "Carrinho de compras avançado",
        "Integração com Asaas ou Mercado Pago",
        "Cálculo de frete automático",
        "Área do cliente",
        "Cupons de desconto",
        "Relatórios de vendas",
        "SEO otimizado",
        "Hospedagem premium",
        "Certificado SSL",
        "Suporte por 6 meses"
      ]
    },
    {
      id: 3,
      nome: "E-commerce Enterprise",
      preco: "R$ 4.500",
      mensalidade: "R$ 95",
      destaque: false,
      descricao: "Para empresas com grande volume de vendas e necessidades específicas",
      recursos: [
        "Produtos ilimitados",
        "Design totalmente personalizado",
        "Sistema multivendedor (opcional)",
        "Múltiplas formas de pagamento",
        "Integração com sistemas ERP",
        "Área do cliente avançada",
        "Sistema de afiliados",
        "Automação de marketing",
        "SEO avançado",
        "Sistema de reviews",
        "Hospedagem dedicada",
        "Manutenção mensal",
        "Suporte prioritário por 12 meses"
      ]
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="planos">
      {/* Background com gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos de <span className="text-laranja">E-commerce</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu negócio. Todos incluem design profissional, 
              painel administrativo e suporte técnico.
            </p>
          </div>
        </AnimacaoScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {planos.map((plano, index) => (
            <AnimacaoScroll key={plano.id} atraso={`delay-${index}00`}>
              <div 
                className={`
                  ${plano.destaque ? 'bg-gradient-to-br from-secundaria to-secundaria border-laranja/30 relative -mt-4 md:-mt-8' : 'bg-secundaria border-white/5'}
                  rounded-2xl p-8 border h-full flex flex-col
                  transform transition-all duration-300 hover:shadow-xl hover:shadow-laranja/10 hover:-translate-y-1
                `}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-laranja text-white text-sm font-medium py-1 px-4 rounded-full shadow-lg">
                    Mais Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${plano.destaque ? 'bg-laranja text-white' : 'bg-laranja/10 text-laranja'} p-3 rounded-xl`}>
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{plano.nome}</h3>
                  </div>
                  
                  <p className="text-white/70 mb-4">{plano.descricao}</p>
                </div>
                
                <div className={`${plano.destaque ? 'bg-escuro' : 'bg-escuro/60'} rounded-xl p-6 mb-6`}>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/70">Valor único:</span>
                      <span className="font-semibold text-xl text-laranja">{plano.preco}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Mensalidade (Hospedagem):</span>
                      <span className="font-medium">{plano.mensalidade}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-lg font-medium mb-3 flex items-center">
                    <span className="mr-2">Recursos inclusos</span>
                    <div className="flex-grow h-px bg-white/10"></div>
                  </h4>
                  
                  <ul className="space-y-3">
                    {plano.recursos.map((recurso, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-laranja w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <BotaoWhatsapp 
                    texto={`Solicitar ${plano.nome}`} 
                    className="w-full justify-center"
                    mensagem={`Olá! Tenho interesse no plano ${plano.nome} para E-commerce. Gostaria de mais informações.`}
                  />
                </div>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        <AnimacaoScroll>
          <div className="mt-16 bg-laranja/5 border border-laranja/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Personalização Total</h3>
            <p className="text-white/80 mb-4">
              Todos os nossos planos podem ser personalizados para atender às necessidades específicas do seu negócio.
              Se você precisa de funcionalidades adicionais ou tem requisitos especiais, entre em contato para um orçamento sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BotaoWhatsapp 
                texto="Solicitar orçamento personalizado" 
                mensagem="Olá! Preciso de um e-commerce personalizado para meu negócio. Gostaria de discutir requisitos específicos."
              />
            </div>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default EcommercePlanos;
