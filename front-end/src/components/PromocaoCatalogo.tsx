import { ArrowRight } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import { Link } from "react-router-dom";

/**
 * Componente para promoção da página de catálogo na página inicial
 */
const PromocaoCatalogo = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Efeitos de gradiente no fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-secundaria border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Efeitos decorativos */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-laranja/20 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-laranja/10 rounded-full blur-[60px]" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Conteúdo textual */}
            <div className="w-full md:w-3/5">
              <AnimacaoScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Descubra nosso <span className="text-laranja">Catálogo Completo</span>
                </h2>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-100">
                <p className="text-white/70 mb-6">
                  Conheça todos os nossos serviços detalhados, com preços transparentes 
                  e comparativos para encontrar a solução ideal para o seu negócio.
                </p>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-200">
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/catalogo"
                    className="py-3 px-6 bg-laranja text-escuro font-medium rounded-full 
                              hover:bg-white transition-all duration-300 flex items-center gap-2"
                  >
                    Ver catálogo completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimacaoScroll>
            </div>
            
            {/* Elemento gráfico */}
            <div className="w-full md:w-2/5">
              <AnimacaoScroll atraso="delay-300">
                <div className="relative">
                  {/* Cards empilhados */}
                  <div className="relative h-64 w-full flex items-center justify-center">
                    {/* Card 3 (fundo) */}
                    <div className="absolute bg-escuro border border-white/10 rounded-xl w-48 h-48 transform -rotate-6 shadow-lg"></div>
                    
                    {/* Card 2 (meio) */}
                    <div className="absolute bg-escuro border border-laranja/30 rounded-xl w-52 h-52 transform rotate-3 shadow-lg flex items-center justify-center z-10">
                      <span className="text-laranja text-lg">Serviços</span>
                    </div>
                    
                    {/* Card 1 (frente) */}
                    <div className="absolute bg-escuro border border-white/20 rounded-xl w-48 h-48 transform -rotate-12 shadow-lg top-8 -right-3 z-20 flex flex-col items-center justify-center">
                      <span className="text-white/90 text-sm mb-1">A partir de</span>
                      <span className="text-laranja text-2xl font-bold">R$ 499</span>
                    </div>
                  </div>
                </div>
              </AnimacaoScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromocaoCatalogo;
