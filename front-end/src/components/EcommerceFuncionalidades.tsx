import { ShoppingCart, CreditCard, Package, Truck, Search, BarChart3, Shield, Users } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe as principais funcionalidades do serviço de e-commerce
 */
const EcommerceFuncionalidades = () => {
  // Array com as funcionalidades do e-commerce
  const funcionalidades = [
    {
      icone: <ShoppingCart />,
      titulo: "Carrinho de Compras",
      descricao: "Sistema de carrinho completo para seus clientes adicionarem produtos e finalizarem compras com facilidade."
    },
    {
      icone: <CreditCard />,
      titulo: "Gateway de Pagamento",
      descricao: "Integração com sistemas de pagamento como ASAAS, Mercado Pago e outros, aceitando cartões, Pix e boletos."
    },
    {
      icone: <Package />,
      titulo: "Gestão de Produtos",
      descricao: "Painel administrativo intuitivo para cadastrar produtos, categorias, preços, promoções e controlar estoque."
    },
    {
      icone: <Truck />,
      titulo: "Cálculo de Frete",
      descricao: "Integração com Correios e outras transportadoras para cálculo automático de frete com base no CEP do cliente."
    },
    {
      icone: <Search />,
      titulo: "Sistema de Busca",
      descricao: "Busca avançada por produtos, permitindo filtragem por categorias, preços e outros atributos."
    },
    {
      icone: <BarChart3 />,
      titulo: "Relatórios e Estatísticas",
      descricao: "Acompanhe vendas, produtos mais populares e comportamento do cliente com relatórios detalhados."
    },
    {
      icone: <Shield />,
      titulo: "Segurança Avançada",
      descricao: "Certificado SSL, proteção contra fraudes e armazenamento seguro de dados dos clientes."
    },
    {
      icone: <Users />,
      titulo: "Área do Cliente",
      descricao: "Espaço para cadastro de clientes, acompanhamento de pedidos e histórico de compras."
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades do <span className="text-laranja">E-commerce</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Nossa plataforma de e-commerce oferece todas as ferramentas necessárias 
              para criar uma experiência de compra completa e profissional.
            </p>
          </div>
        </AnimacaoScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {funcionalidades.map((funcionalidade, index) => (
            <AnimacaoScroll key={index} atraso={`delay-${index % 4}00`}>
              <div className="bg-secundaria border border-white/5 rounded-xl p-6 h-full transform transition-all duration-300 hover:border-laranja/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-laranja/5">
                <div className="bg-laranja/10 text-laranja p-3 rounded-lg inline-block mb-4">
                  {funcionalidade.icone}
                </div>
                <h3 className="text-xl font-semibold mb-3">{funcionalidade.titulo}</h3>
                <p className="text-white/70">{funcionalidade.descricao}</p>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        <AnimacaoScroll>
          <div className="mt-16 bg-gradient-to-br from-secundaria to-secundaria/70 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              E-commerce <span className="text-laranja">100% personalizado</span> para o seu negócio
            </h3>
            <p className="text-white/70 mb-4 max-w-3xl mx-auto">
              Além das funcionalidades padrão, seu e-commerce pode ser totalmente personalizado 
              para atender às necessidades específicas do seu negócio e mercado.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default EcommerceFuncionalidades;
