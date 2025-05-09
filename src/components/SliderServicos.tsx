
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, Smartphone, Monitor, Search } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";
import { useAppContext } from "@/contexts/AppContext";


// Interface para definir os dados de um serviço
interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
  detalhes: string[];
}

/**
 * Componente de slider para exibição dos serviços oferecidos
 */
const SliderServicos = () => {
  // Lista de serviços oferecidos
  const { servicos } = useAppContext();

  
  // Estado para controlar o serviço ativo no slider
  const [servicoAtivo, setServicoAtivo] = useState(0);
  
  // Função para navegar para o próximo serviço
  const proximoServico = () => {
    setServicoAtivo(atual => (atual + 1) % servicos.length);
  };
  
  // Função para navegar para o serviço anterior
  const servicoAnterior = () => {
    setServicoAtivo(atual => (atual - 1 + servicos.length) % servicos.length);
  };
  
  
  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Gradiente decorativo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nossos <span className="text-laranja">Serviços</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Soluções digitais completas para impulsionar o seu negócio
            com tecnologias modernas e design de alta qualidade
          </p>
        </AnimacaoScroll>
        
        {/* Slider de serviços */}
        <div className="relative">
          {/* Botões de navegação */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={servicoAnterior}
              className="bg-escuro/80 border border-white/10 rounded-full p-2 
                      text-white/70 hover:text-white hover:border-laranja transition-colors"
              aria-label="Serviço anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={proximoServico}
              className="bg-escuro/80 border border-white/10 rounded-full p-2 
                      text-white/70 hover:text-white hover:border-laranja transition-colors"
              aria-label="Próximo serviço"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Slide atual */}
          <div className="flex flex-col md:flex-row items-center bg-secundaria rounded-2xl p-8 md:p-12 border border-white/5">
            {/* Ícone e detalhes do serviço */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start">
              <div className="bg-laranja/10 p-4 rounded-2xl mb-6 text-laranja">
                {servicos[servicoAtivo].icone}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {servicos[servicoAtivo].titulo}
              </h3>
              
              <p className="text-white/70 mb-8 text-center md:text-left">
                {servicos[servicoAtivo].descricao}
              </p>
              
              <ul className="space-y-3 mb-8">
                {servicos[servicoAtivo].detalhes.map((detalhe, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-laranja mr-2">✓</span>
                    <span className="text-white/80">{detalhe}</span>
                  </li>
                ))}
              </ul>
              
              <BotaoWhatsapp texto="Solicitar este serviço" />
            </div>
            
            {/* Imagem ilustrativa do serviço */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden border border-white/5 w-full max-w-md aspect-video">
                {/* Aqui entraria uma imagem ilustrativa do serviço */}
                <div className="absolute inset-0 bg-gradient-to-br from-laranja/10 to-escuro flex items-center justify-center">
                  <div className="transform rotate-12">
                    <div className="w-32 h-32 bg-laranja/20 rounded-xl flex items-center justify-center">
                      {servicos[servicoAtivo].icone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicadores melhorados */}
          <div className="flex justify-center mt-8 gap-3">
            {servicos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setServicoAtivo(idx)}
                aria-label={`Ver serviço ${idx + 1}`}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 relative
                  ${idx === servicoAtivo 
                    ? "bg-laranja" 
                    : "bg-white/30 hover:bg-white/50"
                  }
                `}
              >
                {idx === servicoAtivo && (
                  <span className="absolute inset-0 rounded-full bg-laranja/30 animate-ping"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderServicos;
