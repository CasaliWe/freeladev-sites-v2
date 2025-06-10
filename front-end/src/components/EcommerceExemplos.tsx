import { ExternalLink } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

// Interface para as lojas de exemplo
interface LojaExemplo {
  imagem: string;
  titulo: string;
  descricao: string;
  url?: string;
}

/**
 * Componente que exibe exemplos de lojas online desenvolvidas
 */
const EcommerceExemplos = () => {
  // Lista de exemplos de lojas
  const lojas: LojaExemplo[] = [
    {
      imagem: "/placeholder.svg", // Substitua por imagens reais das lojas
      titulo: "Loja de Moda",
      descricao: "E-commerce para marca de roupas com catálogo completo e experiência de compra personalizada.",
      url: "#"
    },
    {
      imagem: "/placeholder.svg",
      titulo: "Marketplace de Artesanato",
      descricao: "Plataforma multivendedor para artesãos venderem seus produtos com gestão individualizada.",
      url: "#"
    },
    {
      imagem: "/placeholder.svg",
      titulo: "Loja de Produtos Naturais",
      descricao: "E-commerce com foco em produtos orgânicos e naturais, com filtro por categorias e benefícios.",
      url: "#"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              E-commerces <span className="text-laranja">em Destaque</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Conheça alguns exemplos de lojas online que desenvolvemos para nossos clientes
            </p>
          </div>
        </AnimacaoScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {lojas.map((loja, index) => (
            <AnimacaoScroll key={index} atraso={`delay-${index}00`}>
              <div className="bg-secundaria border border-white/10 rounded-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-laranja/10 group">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={loja.imagem} 
                    alt={loja.titulo}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-escuro/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {loja.url && (
                      <a 
                        href={loja.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-laranja text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{loja.titulo}</h3>
                  <p className="text-white/70">{loja.descricao}</p>
                </div>
                {loja.url && (
                  <div className="p-6 pt-0">
                    <a 
                      href={loja.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-laranja flex items-center gap-2 hover:underline"
                    >
                      <span>Visitar loja</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </AnimacaoScroll>
          ))}
        </div>
        
        <AnimacaoScroll>
          <div className="mt-16 bg-escuro/50 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Seu negócio na <span className="text-laranja">próxima vitrine</span>
            </h3>
            <p className="text-white/70 mb-4 max-w-xl mx-auto">
              Entre em contato para discutir como podemos criar um e-commerce personalizado 
              para o seu negócio, com design exclusivo e funcionalidades sob medida.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default EcommerceExemplos;
