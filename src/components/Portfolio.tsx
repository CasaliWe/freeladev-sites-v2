
import { useState } from "react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

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
  // Lista de projetos do portfólio (dados fictícios)
  const projetos: Projeto[] = [
    {
      id: 1,
      titulo: "Site Institucional - Arquitetura Moderna",
      categoria: "Website",
      descricao: "Design elegante e minimalista para escritório de arquitetura com foco em projetos sustentáveis.",
      imagem: "placeholder.svg", // Usando placeholder como imagem temporária
      link: "#"
    },
    {
      id: 2,
      titulo: "E-commerce - Moda Sustentável",
      categoria: "E-commerce",
      descricao: "Loja online completa com sistema de pagamento integrado e experiência de compra otimizada.",
      imagem: "placeholder.svg",
      link: "#"
    },
    {
      id: 3,
      titulo: "App para Clínica Médica",
      categoria: "Aplicativo Mobile",
      descricao: "Aplicativo para agendamento de consultas e acompanhamento de tratamentos.",
      imagem: "placeholder.svg",
      link: "#"
    },
    {
      id: 4,
      titulo: "Landing Page - Curso Online",
      categoria: "Landing Page",
      descricao: "Página de conversão para captação de leads e vendas de curso digital.",
      imagem: "placeholder.svg",
      link: "#"
    }
  ];
  
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
          <div className="flex overflow-hidden relative rounded-2xl bg-secundaria shadow-2xl border border-white/5">
            {/* Parte visual do projeto */}
            <div className="w-full md:w-2/3 h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-escuro via-transparent to-transparent md:hidden z-10"></div>
              
              {/* Imagem do projeto */}
              <div 
                className="w-full h-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${projetos[projetoAtivo].imagem})` }}
              />
              
              {/* Gradiente de sobreposição para efeito visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-escuro to-transparent opacity-70"></div>
              
              {/* Sobreposição do dispositivo mock (efeito decorativo) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-white/10 rounded-lg shadow-2xl"></div>
              </div>
            </div>
            
            {/* Detalhes do projeto */}
            <div className="absolute md:relative w-full md:w-1/3 bottom-0 left-0 p-8 md:p-12 md:flex md:flex-col md:justify-center bg-escuro/80 md:bg-secundaria backdrop-blur-sm md:backdrop-blur-0 z-20">
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
              <div className="flex gap-4 mt-auto">
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
              </div>
              
              {/* Indicador de navegação */}
              <div className="mt-4 text-white/50 text-sm">
                {projetoAtivo + 1}/{projetos.length}
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
