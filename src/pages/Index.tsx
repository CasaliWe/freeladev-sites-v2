
import { useEffect } from "react";
import Navegacao from "../components/Navegacao";
import HeroSection from "../components/HeroSection";
import SliderServicos from "../components/SliderServicos";
import Diferenciais from "../components/Diferenciais";
import Portfolio from "../components/Portfolio";
import QuemSomos from "../components/QuemSomos";
import Contato from "../components/Contato";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";

/**
 * Página principal do site
 */
const Index = () => {
  // Efeito para configurar o título da página e meta tags
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Freeladev | Desenvolvimento de Websites e Aplicativos - Passo Fundo/RS";
    
    // Atualiza as meta tags para SEO
    const metaDescricao = document.querySelector('meta[name="description"]');
    if (metaDescricao) {
      metaDescricao.setAttribute("content", 
        "Freeladev - Empresa especializada em criação de sites, landing pages, " +
        "aplicativos mobile e agentes IA para WhatsApp em Passo Fundo/RS. " +
        "Design responsivo e otimizado para SEO."
      );
    }
    
    // Adiciona meta tag de palavras-chave
    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", 
      "desenvolvimento web, criação de sites, landing page, " +
      "aplicativo, design responsivo, SEO, Passo Fundo, RS, " +
      "agentes IA, website, portfólio, mobile"
    );
    document.head.appendChild(metaKeywords);
    
    // Atualiza meta tag Open Graph para compartilhamento
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "Freeladev | Desenvolvimento de Websites e Aplicativos");
    }
    
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", 
        "Soluções digitais completas: websites, landing pages, " +
        "aplicativos e agentes IA para WhatsApp. Design responsivo e SEO."
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
      
      {/* Seções principais */}
      <main>
        <HeroSection />
        <SliderServicos />
        <Diferenciais />
        <Portfolio />
        <QuemSomos />
        <Contato />
      </main>
      
      {/* Rodapé */}
      <Rodape />
      
      {/* Botão flutuante de WhatsApp */}
      <BotaoWhatsapp flutuante={true} />
    </div>
  );
};

export default Index;
