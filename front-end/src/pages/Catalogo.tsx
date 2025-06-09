import { useEffect } from "react";
import Navegacao from "../components/Navegacao";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";
import CatalogoServicos from "../components/CatalogoServicos";
import ComparacaoServicos from "../components/ComparacaoServicos";
import FAQ from "../components/FAQ";

/**
 * Página de Catálogo de Serviços
 */
const Catalogo = () => {
  // Efeito para configurar o título da página e meta tags
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Catálogo de Serviços | Freeladev - Passo Fundo/RS";
    
    // Atualiza as meta tags para SEO
    const metaDescricao = document.querySelector('meta[name="description"]');
    if (metaDescricao) {
      metaDescricao.setAttribute("content", 
        "Catálogo completo de serviços Freeladev - Landing Pages, Websites, " +
        "E-commerce e Agentes IA para WhatsApp com preços e detalhes. " +
        "Soluções digitais de qualidade para seu negócio."
      );
    }
    
    // Adiciona meta tag de palavras-chave
    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", 
      "catálogo, preços, serviços, landing page, website, " +
      "e-commerce, agente IA, WhatsApp, Passo Fundo, RS"
    );
    document.head.appendChild(metaKeywords);
    
    // Atualiza meta tag Open Graph para compartilhamento
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "Catálogo de Serviços | Freeladev");
    }
    
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", 
        "Confira nosso catálogo completo de serviços digitais com preços e detalhes. " +
        "Landing Pages, Websites, E-commerce e Agentes IA para WhatsApp."
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
        {/* Banner do catálogo */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Catálogo de <span className="text-laranja">Serviços</span>
            </h1>
            
            <p className="text-white/70 text-center max-w-3xl mx-auto text-lg mb-8">
              Conheça nossos serviços, preços e detalhes para escolher a 
              solução digital ideal para o seu negócio
            </p>
            
            <div className="flex justify-center">
              <BotaoWhatsapp texto="Solicitar orçamento personalizado" />
            </div>
          </div>
        </section>        {/* Componente de catálogo */}
        <CatalogoServicos />
        {/* Componente de comparação */}
        <ComparacaoServicos />
        
        {/* Componente de Perguntas Frequentes */}
        <FAQ />
        
        {/* CTA para o Briefing */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-secundaria border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para <span className="text-laranja">iniciar</span> seu projeto?
                </h2>
                <p className="text-white/70 mb-8">
                  Preencha nosso formulário de briefing para que possamos entender melhor suas necessidades 
                  e desenvolver uma proposta personalizada para o seu projeto.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="/briefing"
                    className="bg-laranja hover:bg-laranja/80 text-escuro font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
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
                  <BotaoWhatsapp texto="Falar com um consultor" />
                </div>
              </div>
            </div>
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

export default Catalogo;
