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

        {/* View para Mobile: Cartões com Tabs */}
        <div className="md:hidden">
          {/* Seletor de planos para mobile */}
          <div className="flex justify-center mb-6">
            <div className="bg-secundaria rounded-xl p-2 inline-flex overflow-x-auto w-full max-w-sm justify-center">
              {planos.map(plano => (
                <button
                  key={plano.id}
                  onClick={() => setPlanoAtivo(plano.id)}
                  className={`
                    py-2 px-4 rounded-lg transition-colors whitespace-nowrap text-sm
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
            {/* Cartão para cada plano em mobile */}
          {planos.map(plano => (
            <div 
              key={plano.id} 
              className={`mb-8 transition-all duration-300 transform
                ${planoAtivo === plano.id 
                  ? "opacity-100 scale-100 block" 
                  : "opacity-0 scale-95 hidden"
                }
              `}
            >
              <div className={`
                rounded-xl overflow-hidden border 
                ${plano.popular ? "border-laranja/30" : "border-white/10"}
              `}>
                {/* Cabeçalho do cartão */}
                <div className={`
                  p-6 relative text-center
                  ${plano.popular ? "bg-laranja/20" : "bg-escuro/50"}
                `}>
                  {plano.popular && (
                    <span className="absolute top-0 right-0 bg-laranja text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
                      Mais Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                  <p className="text-3xl font-bold text-laranja">{plano.preco}</p>
                </div>
                
                {/* Lista de características */}
                <div className="p-4 bg-secundaria">
                  <ul className="space-y-4">
                    {caracteristicas.map(caracteristica => (
                      <li key={caracteristica.id} className="flex items-center justify-between p-2 border-b border-white/5">
                        <span className="text-white/80">{caracteristica.nome}</span>
                        <span>
                          {plano.recursos[caracteristica.id] ? (
                            <Check className="text-green-500 w-5 h-5" />
                          ) : (
                            <X className="text-red-500 w-5 h-5" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                    {/* Botão de ação */}
                  <div className="mt-6">
                    <button 
                      className="w-full py-3 px-6 bg-laranja hover:bg-laranja-600 text-white font-medium rounded-lg transition-colors relative overflow-hidden group"
                      onClick={() => window.location.href = `https://wa.me/5554999999999?text=Olá, gostaria de saber mais sobre o plano ${plano.nome}.`}
                    >
                      <span className="relative z-10">Solicitar {plano.nome}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-laranja-600 to-laranja opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
            {/* Indicadores de navegação */}
          <div className="flex justify-center items-center gap-2 mb-6">
            {planos.map((plano, index) => (
              <button 
                key={plano.id}
                onClick={() => setPlanoAtivo(plano.id)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${planoAtivo === plano.id 
                    ? "bg-laranja w-4" 
                    : "bg-white/30"
                  }
                `}
                aria-label={`Ver plano ${plano.nome}`}
              />
            ))}
          </div>
          
          {/* Nota explicativa para mobile */}
          <div className="mb-10 text-center">
            <p className="text-white/50 text-sm italic">
              Navegue entre as opções para comparar os planos
            </p>
          </div>
        </div>
        
        {/* Tabela de comparação para desktop */}
        <div className="hidden md:block">
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
      </div>
    </section>
  );
};

export default ComparacaoServicos;
