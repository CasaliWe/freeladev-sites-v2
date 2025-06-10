import { useEffect } from "react";
import Navegacao from "../components/Navegacao";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";
import EcommerceFuncionalidades from "../components/EcommerceFuncionalidades";
import EcommerceFAQ from "../components/EcommerceFAQ";
import EcommercePlanos from "../components/EcommercePlanos";
import EcommerceExemplos from "../components/EcommerceExemplos";
import EcommerceEtapas from "../components/EcommerceEtapas";
import { ShoppingBag, ShoppingCart, CreditCard, Truck, Package, Globe } from "lucide-react";
import AnimacaoScroll from "../components/AnimacaoScroll";

/**
 * Página dedicada ao serviço de E-commerce
 */
const Ecommerce = () => {
  // Efeito para configurar o título da página e meta tags
  useEffect(() => {
    // Atualiza o título da página
    document.title = "E-commerce Personalizado | Freeladev - Passo Fundo/RS";
    
    // Atualiza as meta tags para SEO
    const metaDescricao = document.querySelector('meta[name="description"]');
    if (metaDescricao) {
      metaDescricao.setAttribute("content", 
        "E-commerce Personalizado Freeladev - Desenvolva sua loja online com " +
        "design exclusivo e funcionalidades sob medida. Venda seus produtos " +
        "com facilidade e ofereça a melhor experiência aos seus clientes."
      );
    }
    
    // Adiciona meta tag de palavras-chave
    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", 
      "e-commerce, loja virtual, loja online, desenvolvimento de e-commerce, " +
      "carrinho de compras, vendas online, Passo Fundo, RS"
    );
    document.head.appendChild(metaKeywords);
    
    // Atualiza meta tag Open Graph para compartilhamento
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "E-commerce Personalizado | Freeladev");
    }
    
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", 
        "Desenvolvimento de lojas virtuais sob medida para vender seus produtos " +
        "online com facilidade e oferecer a melhor experiência aos seus clientes."
      );
    }
    
    // Remoção das meta tags adicionadas ao desmontar o componente
    return () => {
      if (document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
    };
  }, []);
  
  return (
    <div className="bg-escuro text-white antialiased min-h-screen">
      {/* Cabeçalho/Navegação */}
      <Navegacao />
      
      {/* Conteúdo principal */}
      <main className="pt-20 md:pt-28">
        {/* Banner principal */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <AnimacaoScroll>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="text-laranja">E-commerce</span> Personalizado
                  </h1>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-100">
                  <p className="text-white/70 text-lg mb-8">
                    Desenvolvimento de lojas virtuais sob medida para seu negócio. Venda 
                    seus produtos online de forma fácil e eficiente, com design profissional 
                    e experiência de usuário excepcional.
                  </p>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-200">
                  <div className="flex flex-wrap gap-4 mb-8">
                    <BotaoWhatsapp texto="Solicitar orçamento" />
                  </div>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-300">
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Carrinho de compras</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Integração de pagamentos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Gestão de estoque</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Responsivo para mobile</span>
                    </div>
                  </div>
                </AnimacaoScroll>
              </div>
              
              <div className="w-full md:w-1/2">
                <AnimacaoScroll atraso="delay-200">
                  <div className="relative">
                    {/* Simulação de loja online */}
                    <div className="relative bg-secundaria rounded-xl overflow-hidden border border-white/10 shadow-xl">
                      {/* Barra de navegação da loja */}
                      <div className="bg-escuro p-3 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="bg-laranja rounded-md p-1 text-escuro">
                            <ShoppingBag className="w-4 h-4" />
                          </span>
                          <span className="font-medium">MinhaLoja</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <ShoppingCart className="w-4 h-4 text-white/80" />
                            <span className="ml-1 text-xs bg-laranja text-white w-4 h-4 rounded-full flex items-center justify-center">3</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-xs">👤</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        {/* Banner promocional */}
                        <div className="bg-laranja/20 rounded-lg p-4 mb-4 text-center">
                          <p className="font-medium text-laranja">Frete grátis em compras acima de R$ 200</p>
                        </div>
                        
                        {/* Grade de produtos */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* Produto 1 */}
                          <div className="bg-escuro/50 rounded-lg p-3 border border-white/5 hover:border-laranja/30 transition-colors">
                            <div className="bg-white/5 rounded-md aspect-square mb-2 flex items-center justify-center">
                              <Package className="w-10 h-10 text-laranja/80" />
                            </div>
                            <h3 className="font-medium text-sm mb-1">Produto Premium</h3>
                            <div className="flex justify-between items-center">
                              <span className="text-laranja font-bold">R$ 129,90</span>
                              <button className="bg-laranja/20 hover:bg-laranja/30 p-1 rounded-md">
                                <ShoppingCart className="w-4 h-4 text-laranja" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Produto 2 */}
                          <div className="bg-escuro/50 rounded-lg p-3 border border-white/5 hover:border-laranja/30 transition-colors">
                            <div className="bg-white/5 rounded-md aspect-square mb-2 flex items-center justify-center">
                              <Package className="w-10 h-10 text-white/50" />
                            </div>
                            <h3 className="font-medium text-sm mb-1">Produto Especial</h3>
                            <div className="flex justify-between items-center">
                              <span className="text-laranja font-bold">R$ 89,90</span>
                              <button className="bg-laranja/20 hover:bg-laranja/30 p-1 rounded-md">
                                <ShoppingCart className="w-4 h-4 text-laranja" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Produto 3 */}
                          <div className="bg-escuro/50 rounded-lg p-3 border border-white/5 hover:border-laranja/30 transition-colors">
                            <div className="bg-white/5 rounded-md aspect-square mb-2 flex items-center justify-center">
                              <Package className="w-10 h-10 text-white/50" />
                            </div>
                            <h3 className="font-medium text-sm mb-1">Produto Básico</h3>
                            <div className="flex justify-between items-center">
                              <span className="text-laranja font-bold">R$ 49,90</span>
                              <button className="bg-laranja/20 hover:bg-laranja/30 p-1 rounded-md">
                                <ShoppingCart className="w-4 h-4 text-laranja" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Produto 4 */}
                          <div className="bg-escuro/50 rounded-lg p-3 border border-white/5 hover:border-laranja/30 transition-colors">
                            <div className="bg-white/5 rounded-md aspect-square mb-2 flex items-center justify-center relative">
                              <span className="absolute top-1 right-1 bg-laranja text-white text-xs px-2 py-0.5 rounded-full">-15%</span>
                              <Package className="w-10 h-10 text-white/50" />
                            </div>
                            <h3 className="font-medium text-sm mb-1">Produto Premium Plus</h3>
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="text-white/50 text-xs line-through">R$ 199,90</span>
                                <span className="text-laranja font-bold block">R$ 169,90</span>
                              </div>
                              <button className="bg-laranja/20 hover:bg-laranja/30 p-1 rounded-md">
                                <ShoppingCart className="w-4 h-4 text-laranja" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Elementos decorativos */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-laranja/30 rounded-full blur-[30px] z-[-1]"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-laranja/20 rounded-full blur-[40px] z-[-1]"></div>
                  </div>
                </AnimacaoScroll>
              </div>
            </div>
          </div>
        </section>
        
        {/* Componentes específicos do E-commerce */}
        <EcommerceFuncionalidades />
        <EcommercePlanos />
        {/* <EcommerceExemplos /> */}
        <EcommerceEtapas />
        <EcommerceFAQ />
        
        {/* CTA final */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <AnimacaoScroll>
              <div className="bg-secundaria border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Pronto para <span className="text-laranja">vender online</span>?
                  </h2>
                  <p className="text-white/70 mb-8">
                    Entre em contato agora mesmo e solicite um orçamento para o seu e-commerce personalizado.
                    Nossa equipe está pronta para transformar sua ideia em uma loja online de sucesso.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <BotaoWhatsapp texto="Solicitar orçamento" />
                    <a 
                      href="/briefing"
                      className="border border-white/20 hover:border-laranja/80 text-white/90 hover:text-white font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                      Preencher Briefing
                    </a>
                  </div>
                </div>
              </div>
            </AnimacaoScroll>
          </div>
        </section>
      </main>
      
      {/* Rodapé */}
      <Rodape />
      
      {/* Botão flutuante de WhatsApp */}
      <BotaoWhatsapp flutuante={true} />
    </div>
  );
};

export default Ecommerce;
