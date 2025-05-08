
import { useState } from "react";
import AnimacaoScroll from "./AnimacaoScroll";
import { Star, StarHalf, User, ArrowLeft, ArrowRight } from "lucide-react";

// Interface para os dados de avaliação de cliente
interface AvaliacaoCliente {
  id: number;
  nome: string;
  empresa: string;
  cargo: string;
  avaliacao: number; // 1-5, suporta meio ponto (ex: 4.5)
  comentario: string;
  foto?: string; // URL da foto ou undefined para usar ícone padrão
}

/**
 * Componente para exibir avaliações de clientes com carrossel
 */
const AvaliacoesClientes = () => {
  // Lista de avaliações de clientes (dados fictícios)
  const avaliacoes: AvaliacaoCliente[] = [
    {
      id: 1,
      nome: "Ricardo Oliveira",
      empresa: "Arquitetura Moderna",
      cargo: "Diretor",
      avaliacao: 5,
      comentario: "Superou nossas expectativas. O site ficou extremamente profissional e começamos a receber contatos qualificados já na primeira semana após o lançamento."
    },
    {
      id: 2,
      nome: "Marina Silva",
      empresa: "Ecomoda Sustentável",
      cargo: "CEO",
      avaliacao: 4.5,
      comentario: "Nossa loja virtual ficou fantástica! A usabilidade e o design estão perfeitos. A equipe foi muito atenciosa durante todo o processo."
    },
    {
      id: 3,
      nome: "Carlos Mendes",
      empresa: "Clínica Saúde Total",
      cargo: "Administrador",
      avaliacao: 5,
      comentario: "O aplicativo desenvolvido pela Freeladev revolucionou nosso sistema de agendamentos. Reduzimos as faltas em 70% e aumentamos a satisfação dos pacientes."
    },
    {
      id: 4,
      nome: "Juliana Ferreira",
      empresa: "Cursos Online",
      cargo: "Diretora de Marketing",
      avaliacao: 5,
      comentario: "O resultado superou todas as expectativas. A landing page converteu 3x mais que a anterior e o design é simplesmente sensacional."
    }
  ];
  
  // Estado para controlar a avaliação ativa no carrossel
  const [avaliacaoAtiva, setAvaliacaoAtiva] = useState(0);
  
  // Função para navegar para a próxima avaliação
  const proximaAvaliacao = () => {
    setAvaliacaoAtiva(atual => (atual + 1) % avaliacoes.length);
  };
  
  // Função para navegar para a avaliação anterior
  const avaliacaoAnterior = () => {
    setAvaliacaoAtiva(atual => (atual - 1 + avaliacoes.length) % avaliacoes.length);
  };
  
  // Renderiza as estrelas com base na avaliação (suporta meias estrelas)
  const renderizarEstrelas = (avaliacao: number) => {
    const estrelas = [];
    const avaliacaoTotal = 5;
    
    for (let i = 1; i <= avaliacaoTotal; i++) {
      if (i <= avaliacao) {
        // Estrela cheia
        estrelas.push(<Star key={i} className="w-5 h-5 fill-laranja text-laranja" />);
      } else if (i - 0.5 === avaliacao) {
        // Meia estrela
        estrelas.push(<StarHalf key={i} className="w-5 h-5 fill-laranja text-laranja" />);
      } else {
        // Estrela vazia
        estrelas.push(<Star key={i} className="w-5 h-5 text-laranja/40" />);
      }
    }
    
    return estrelas;
  };
  
  return (
    <section id="avaliacoes" className="py-20 relative overflow-hidden bg-secundaria">
      {/* Gradientes de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-32 left-32 w-64 h-64 bg-laranja/5 rounded-full blur-[80px]" />
        <div className="absolute top-32 -right-32 w-64 h-64 bg-laranja/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O Que Nossos <span className="text-laranja">Clientes</span> Dizem
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Veja as experiências e resultados alcançados pelos nossos clientes
          </p>
        </AnimacaoScroll>
        
        {/* Carrossel de avaliações */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-escuro rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl relative">
            {/* Aspas decorativas */}
            <div className="absolute -top-5 -left-2 text-laranja/20 text-8xl font-serif">"</div>
            <div className="absolute -bottom-20 -right-2 text-laranja/20 text-8xl font-serif">"</div>
            
            {/* Conteúdo da avaliação */}
            <div className="mb-8 relative z-10">
              <AnimacaoScroll key={avaliacaoAtiva}>
                <p className="text-lg md:text-xl text-white/90 italic mb-6">
                  "{avaliacoes[avaliacaoAtiva].comentario}"
                </p>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-100" key={`stars-${avaliacaoAtiva}`}>
                <div className="flex mb-4">
                  {renderizarEstrelas(avaliacoes[avaliacaoAtiva].avaliacao)}
                </div>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-200" key={`info-${avaliacaoAtiva}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-laranja/20 rounded-full p-3">
                    {avaliacoes[avaliacaoAtiva].foto ? (
                      <img 
                        src={avaliacoes[avaliacaoAtiva].foto} 
                        alt={avaliacoes[avaliacaoAtiva].nome} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-laranja" />
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white">{avaliacoes[avaliacaoAtiva].nome}</h4>
                    <p className="text-laranja text-sm">{avaliacoes[avaliacaoAtiva].cargo}</p>
                    <p className="text-white/60 text-sm">{avaliacoes[avaliacaoAtiva].empresa}</p>
                  </div>
                </div>
              </AnimacaoScroll>
            </div>
            
            {/* Controles de navegação */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {avaliacoes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAvaliacaoAtiva(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === avaliacaoAtiva ? "bg-laranja" : "bg-white/20"
                    }`}
                    aria-label={`Avaliação ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={avaliacaoAnterior}
                  className="p-2 rounded-full border border-white/20 text-white
                         hover:border-laranja hover:text-laranja transition-colors"
                  aria-label="Avaliação anterior"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={proximaAvaliacao}
                  className="p-2 rounded-full border border-white/20 text-white
                         hover:border-laranja hover:text-laranja transition-colors"
                  aria-label="Próxima avaliação"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvaliacoesClientes;
