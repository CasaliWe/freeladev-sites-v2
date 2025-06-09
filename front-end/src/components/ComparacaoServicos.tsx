import { useState } from "react";
import { Check, X } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente de comparação entre os diferentes serviços
 */
const ComparacaoServicos = () => {
  // Definição das características a serem comparadas
  const caracteristicas = [
    { id: 1, nome: "Site Responsivo" },
    { id: 2, nome: "Domínio Personalizado" },
    { id: 3, nome: "Hospedagem Incluída" },
    { id: 4, nome: "Painel Administrativo" },
    { id: 5, nome: "SEO Básico" },
    { id: 6, nome: "Integrações" },
    { id: 8, nome: "Suporte Técnico" }
  ];

  // Dados de comparação dos planos
  const planos = [
    {
      id: 1,
      nome: "Landing Page",
      preco: "R$ 650",
      recursos: {
        1: true,  // Site Responsivo
        2: true,  // Domínio Personalizado
        3: true,  // Hospedagem Incluída
        4: false, // Painel Administrativo
        5: true,  // SEO Básico
        6: false,  // Integrações
        8: true   // Suporte Técnico
      }
    },
    {
      id: 2, 
      nome: "Website Multi-página",
      preco: "R$ 1.200",
      popular: true,
      recursos: {
        1: true,  // Site Responsivo
        2: true,  // Domínio Personalizado
        3: true,  // Hospedagem Incluída
        4: true,  // Painel Administrativo
        5: true,  // SEO Básico
        6: true,  // Integrações
        8: true   // Suporte Técnico
      }
    },
    {
      id: 3,
      nome: "E-commerce",
      preco: "R$ 2.000",
      recursos: {
        1: true,  // Site Responsivo
        2: true,  // Domínio Personalizado
        3: true,  // Hospedagem Incluída
        4: true,  // Painel Administrativo
        5: true,  // SEO Básico
        6: true,  // Integrações
        8: true   // Suporte Técnico
      }
    }
  ];
  
  // Estado para controle da visibilidade em dispositivos móveis
  const [planoAtivo, setPlanoAtivo] = useState(1);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimacaoScroll>
          <h2 className="text-3xl font-bold mb-3 text-center">Compare Nossos Serviços</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Veja a comparação detalhada entre nossos principais serviços para escolher
            a melhor opção para o seu negócio
          </p>
        </AnimacaoScroll>

        {/* Seletor de planos para mobile */}
        <div className="flex md:hidden justify-center mb-8">
          <div className="bg-secundaria rounded-xl p-2 inline-flex">
            {planos.map(plano => (
              <button
                key={plano.id}
                onClick={() => setPlanoAtivo(plano.id)}
                className={`
                  py-2 px-4 rounded-lg transition-colors
                  ${planoAtivo === plano.id 
                    ? "bg-laranja text-white" 
                    : "text-white/70 hover:text-white"
                  }
                `}
              >
                {plano.nome}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tabela de comparação */}
        <AnimacaoScroll>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Cabeçalho da tabela */}
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 bg-escuro sticky left-0 z-10">Recurso</th>
                  {planos.map(plano => (
                    <th 
                      key={plano.id}
                      className={`
                        py-4 px-8 text-center
                        ${plano.popular ? "bg-laranja/20" : "bg-escuro/50"}
                        ${planoAtivo === plano.id ? "block md:table-cell" : "hidden md:table-cell"}
                      `}
                    >
                      <div className="relative">
                        {plano.popular && (
                          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-laranja text-white text-xs font-medium py-1 px-3 rounded-full">
                            Mais Popular
                          </span>
                        )}
                        <span className="block text-xl font-bold mb-1">{plano.nome}</span>
                        <span className="block text-2xl font-bold text-laranja">{plano.preco}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Corpo da tabela */}
              <tbody>
                {caracteristicas.map(caracteristica => (
                  <tr key={caracteristica.id} className="border-t border-white/5">
                    <td className="py-4 px-4 bg-escuro/80 sticky left-0 z-10">
                      {caracteristica.nome}
                    </td>
                    
                    {planos.map(plano => (
                      <td 
                        key={plano.id}
                        className={`
                          py-4 px-8 text-center
                          ${plano.popular ? "bg-laranja/10" : "bg-escuro/30"}
                          ${planoAtivo === plano.id ? "block md:table-cell" : "hidden md:table-cell"}
                        `}
                      >
                        {plano.recursos[caracteristica.id] ? (
                          <Check className="mx-auto text-green-500 w-6 h-6" />
                        ) : (
                          <X className="mx-auto text-red-500 w-6 h-6" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default ComparacaoServicos;
