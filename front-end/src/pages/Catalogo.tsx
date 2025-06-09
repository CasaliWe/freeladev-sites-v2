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
        </section>
        {/* Componente de catálogo */}
        <CatalogoServicos />
        {/* Componente de comparação */}
        <ComparacaoServicos />
        
        {/* Componente de Perguntas Frequentes */}
        <FAQ />
      </main>
      
      {/* Rodapé */}
      <Rodape />
      
      {/* Botão flutuante de WhatsApp */}
      <BotaoWhatsapp flutuante={true} />
    </div>
  );
};

export default Catalogo;
