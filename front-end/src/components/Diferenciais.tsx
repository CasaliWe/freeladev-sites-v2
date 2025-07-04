
import { Monitor, Code } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import { useAppContext } from "@/contexts/AppContext";
import { Link } from "react-router-dom";



// Interface para definir os dados de um diferencial
interface Diferencial {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

/**
 * Componente para a seção de diferenciais da empresa
 */
const Diferenciais = () => {

  // Lista de diferenciais da empresa
  const { diferenciais } = useAppContext();


  return (
    <section id="diferenciais" className="py-20 bg-escuro relative overflow-hidden">
      {/* Gradientes de background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-laranja/5 rounded-full blur-[80px]" />
        <div className="absolute top-32 right-32 w-64 h-64 bg-laranja/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como <span className="text-laranja">Transformamos</span> seu Negócio
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Nossos diferenciais estratégicos que garantem resultados para o seu projeto
          </p>
        </AnimacaoScroll>
        
        {/* Grade de diferenciais */}        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, idx) => (
            <AnimacaoScroll 
              key={idx} 
              atraso={`delay-${(idx + 1) * 100}` as "delay-100" | "delay-200" | "delay-300" | "delay-400"}
            >
              <div className="bg-secundaria border border-white/5 rounded-xl p-8 h-full transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-laranja/10 text-laranja rounded-xl p-4 inline-block mb-6">
                  {diferencial.icone}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {diferencial.titulo}
                </h3>
                
                <p className="text-white/70">
                  {diferencial.descricao}
                </p>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        {/* Banner de promoção do catálogo */}
        <AnimacaoScroll atraso="delay-400">
          <div className="mt-20 text-center">
            <div className="bg-secundaria border border-laranja/20 rounded-xl p-6 inline-block">
              <p className="text-white font-medium mb-2">
                Conheça todas as nossas soluções em detalhes
              </p>
              <Link 
                to="/catalogo" 
                className="text-laranja hover:text-white inline-flex items-center gap-2"
              >
                Acessar nosso catálogo de serviços
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

// Componente de ícone Search (não disponível diretamente no lucide-react)
const Search = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// Componente de ícone Design renomeado para DesignIcon para evitar conflitos
const DesignIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    <path d="m14 7 3 3" />
  </svg>
);

export default Diferenciais;
