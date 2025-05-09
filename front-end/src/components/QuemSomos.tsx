
import AnimacaoScroll from "./AnimacaoScroll";
import { Target, Eye, Sparkles, Heart } from "lucide-react";

/**
 * Componente da seção "Quem Somos" com informações sobre a empresa
 */
const QuemSomos = () => {
  // Lista de valores da empresa
  const valores = [
    { titulo: "Inovação", descricao: "Buscamos constantemente as tecnologias mais recentes e soluções criativas" },
    { titulo: "Qualidade", descricao: "Comprometimento com excelência em cada detalhe dos projetos" },
    { titulo: "Resultado", descricao: "Foco em gerar retorno e alcançar os objetivos de cada cliente" },
    { titulo: "Transparência", descricao: "Comunicação clara e honesta em todas as etapas do desenvolvimento" }
  ];
  
  return (
    <section id="quemSomos" className="py-20 relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-escuro to-secundaria opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Lado esquerdo - Informações sobre a empresa */}
          <div className="w-full md:w-1/2">
            <AnimacaoScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quem <span className="text-laranja">Somos</span>
              </h2>
            </AnimacaoScroll>
            
            <AnimacaoScroll atraso="delay-100">
              <p className="text-white/80 mb-6">
                A <strong className="text-laranja">Freeladev</strong> é uma empresa especializada no desenvolvimento 
                de soluções digitais inovadoras, fundada por profissionais apaixonados por 
                tecnologia e design.
              </p>
            </AnimacaoScroll>
            
            <AnimacaoScroll atraso="delay-200">
              <p className="text-white/80 mb-6">
                Com sede em Passo Fundo/RS, atuamos com clientes de todo o Brasil, 
                transformando ideias em projetos digitais de sucesso. Nossa equipe 
                multidisciplinar combina conhecimento técnico e visão criativa para 
                entregar resultados que superam expectativas.
              </p>
            </AnimacaoScroll>
            
            <AnimacaoScroll atraso="delay-300">
              <p className="text-white/80 mb-10">
                Mais que desenvolvedores, somos parceiros do seu negócio. Entendemos 
                que cada projeto é único e merece uma solução personalizada que atenda 
                às necessidades específicas de cada cliente.
              </p>
            </AnimacaoScroll>
            
            {/* Missão, Visão e Valores com ícones */}
            <AnimacaoScroll atraso="delay-400">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 hover:border-laranja/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-laranja h-5 w-5" />
                    <h3 className="text-lg font-bold">Missão</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Transformar a presença digital dos nossos clientes com soluções inovadoras e de alto impacto.
                  </p>
                </div>
                
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 hover:border-laranja/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="text-laranja h-5 w-5" />
                    <h3 className="text-lg font-bold">Visão</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Ser referência em desenvolvimento web e mobile no sul do Brasil.
                  </p>
                </div>
                
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 hover:border-laranja/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="text-laranja h-5 w-5" />
                    <h3 className="text-lg font-bold">Valores</h3>
                  </div>
                  <ul className="text-white/70 text-sm">
                    <li>• Inovação</li>
                    <li>• Qualidade</li>
                    <li>• Compromisso</li>
                  </ul>
                </div>
              </div>
            </AnimacaoScroll>
          </div>
          
          {/* Lado direito - Lista de valores com layout melhorado para mobile */}
          <div className="w-full md:w-1/2">
            <AnimacaoScroll>
              <div className="relative">
                {/* Elemento decorativo */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-laranja opacity-50" />
                
                {/* Gráfico/ilustração de valores */}
                <div className="bg-secundaria border border-white/5 rounded-2xl p-8 relative">
                  <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <Sparkles className="text-laranja h-5 w-5" />
                    Nossos Valores
                  </h3>
                  
                  {/* Grid alterado para sempre ser uma coluna no mobile */}
                  <div className="grid grid-cols-1 gap-6">
                    {valores.map((valor, idx) => (
                      <div 
                        key={idx} 
                        className="bg-escuro border border-white/10 rounded-xl p-6 hover:border-laranja/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <h4 className="text-laranja font-bold mb-2">{valor.titulo}</h4>
                        <p className="text-white/70 text-sm">{valor.descricao}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Elemento decorativo com gradientes */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40">
                    <div className="absolute inset-0 bg-laranja/30 rounded-full blur-[30px] opacity-30"></div>
                    <div className="absolute inset-0 transform translate-x-5 translate-y-5 bg-laranja/20 rounded-full blur-[20px] opacity-20"></div>
                  </div>
                </div>
                
                {/* Elemento decorativo */}
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-laranja opacity-50" />
              </div>
            </AnimacaoScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
