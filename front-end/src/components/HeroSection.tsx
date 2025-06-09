
import { ArrowDown } from "lucide-react";
import BotaoWhatsapp from "./BotaoWhatsapp";
import AnimacaoScroll from "./AnimacaoScroll";
import { Link } from "react-router-dom";

/**
 * Componente da seção principal (hero) do site
 */
const HeroSection = () => {
  // Função para rolar até a seção de serviços
  const rolarParaServicos = () => {
    const servicosSecao = document.getElementById("servicos");
    if (servicosSecao) {
      servicosSecao.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section 
      id="inicio" 
      className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Gradientes decorativos */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <div className="absolute top-1/4 right-0 h-[300px] w-[300px] md:w-[600px] md:h-[600px] bg-laranja/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 h-[200px] w-[200px] md:w-[400px] md:h-[400px] bg-laranja/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 pt-10 md:pt-0">
          {/* Textos e chamadas para ação */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <AnimacaoScroll>
              <h2 className="text-laranja uppercase tracking-wide font-semibold mb-4">
                Soluções digitais criativas
              </h2>
            </AnimacaoScroll>
            
            <AnimacaoScroll atraso="delay-100">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
                Transforme sua <span className="texto-gradiente">presença digital</span> em resultados
              </h1>
            </AnimacaoScroll>
            
            <AnimacaoScroll atraso="delay-200">
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto md:mx-0">
                Desenvolvimento de websites profissionais, landing pages e 
                aplicativos móveis com design exclusivo e foco em conversão.
              </p>
            </AnimacaoScroll>
              <AnimacaoScroll atraso="delay-300">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <BotaoWhatsapp texto="Solicitar orçamento" />
                <button
                  onClick={rolarParaServicos}
                  className="py-3 px-6 rounded-full border border-white/20 text-white 
                           hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Ver serviços</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
                <div className="mt-6 text-white/60 text-sm">
                <Link to="/catalogo" className="inline-flex items-center gap-1 hover:text-laranja transition-colors">
                  Confira nosso catálogo completo com preços e detalhes
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </AnimacaoScroll>
          </div>
          
          {/* Ilustração/imagem */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <AnimacaoScroll atraso="delay-200">
              <div className="relative">
                {/* Elemento decorativo */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-laranja opacity-70" />
                
                {/* Container com efeito de brilho */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-laranja/20 to-transparent opacity-50" />
                  
                  {/* Imagem ilustrativa de dispositivos com site responsivo */}
                  <div className="bg-secundaria p-5 rounded-xl">
                    <div className="relative aspect-video">
                      {/* Representação de dispositivos (mockup) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-[80%] h-[80%] bg-escuro rounded-md flex items-center justify-center border border-gray-700 animate-float">
                          <div className="text-laranja">Freeladev</div>
                          <div className="absolute -right-8 -bottom-8 w-20 h-36 bg-escuro rounded-md border border-gray-700 transform rotate-12"></div>
                          <div className="absolute -left-12 bottom-4 w-16 h-24 bg-escuro rounded-md border border-gray-700 transform -rotate-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Elemento decorativo */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-laranja opacity-70" />
              </div>
            </AnimacaoScroll>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <button
          onClick={rolarParaServicos}
          className="animate-bounce p-2"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="text-white/50 w-6 h-6" />
        </button>
        <span className="text-white/50 text-xs mt-2">Role para explorar</span>
      </div>
    </section>
  );
};

export default HeroSection;
