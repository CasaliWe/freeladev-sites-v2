
import { useState } from "react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";


// Interface para os projetos do portfólio
interface Projeto {
  id: number;
  titulo: string;
  categoria: string;
  descricao: string;
  imagem: string; // URL da imagem ou placeholder
  link?: string; // Link opcional para o projeto
}

/**
 * Componente de portfólio com carrossel de projetos
 */
const Portfolio = () => {
  const { projetos } = useAppContext();
  
  // Estado para controlar o projeto ativo no carrossel
  const [projetoAtivo, setProjetoAtivo] = useState(0);
  
  // Função para navegar para o próximo projeto
  const proximoProjeto = () => {
    setProjetoAtivo(atual => (atual + 1) % projetos.length);
  };
  
  // Função para navegar para o projeto anterior
  const projetoAnterior = () => {
    setProjetoAtivo(atual => (atual - 1 + projetos.length) % projetos.length);
  };
  
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nosso <span className="text-laranja">Portfólio</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </AnimacaoScroll>
        
        {/* Carrossel de projetos */}
        <div className="relative">
          <div className="flex flex-col md:flex-row overflow-hidden relative rounded-2xl bg-secundaria shadow-2xl border border-white/5">
            {/* Parte visual do projeto */}
            <div className="w-full md:w-2/3 h-[200px] md:h-[500px] relative">
              {/* Imagem do projeto */}
              <div 
                className="w-full h-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${projetos[projetoAtivo].imagem})` }}
              />
              
              {/* Gradiente de sobreposição apenas para desktop */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-escuro to-transparent opacity-70"></div>
            </div>
            
            {/* Detalhes do projeto - layout ajustado para mobile */}
            <div className="relative w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-secundaria z-20">
              <span className="text-laranja text-sm font-medium uppercase tracking-wider mb-2 block">
                {projetos[projetoAtivo].categoria}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {projetos[projetoAtivo].titulo}
              </h3>
              
              <p className="text-white/70 mb-6">
                {projetos[projetoAtivo].descricao}
              </p>
              
              {projetos[projetoAtivo].link && (
                <a
                  href={projetos[projetoAtivo].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-laranja flex items-center gap-2 hover:underline mb-8"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>
              )}
              
              {/* Controles de navegação */}
              <div className="flex gap-4 mt-4 md:mt-auto">
                <button 
                  onClick={projetoAnterior}
                  className="p-3 rounded-full border border-white/20 text-white
                          hover:border-laranja hover:text-laranja transition-colors"
                  aria-label="Projeto anterior"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={proximoProjeto}
                  className="p-3 rounded-full border border-white/20 text-white
                          hover:border-laranja hover:text-laranja transition-colors"
                  aria-label="Próximo projeto"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                {/* Indicador de navegação */}
                <div className="flex items-center ml-4 text-white/50 text-sm">
                  {projetoAtivo + 1}/{projetos.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA para novos projetos */}
        <AnimacaoScroll>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Quer o seu projeto no nosso portfólio?
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Entre em contato e vamos transformar sua ideia em realidade
            </p>
            <BotaoWhatsapp texto="Iniciar meu projeto" className="mx-auto" />
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default Portfolio;
