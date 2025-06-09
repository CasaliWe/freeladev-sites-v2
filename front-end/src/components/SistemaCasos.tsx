import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe casos de uso e exemplos de Sistemas Web Personalizados
 */
const SistemaCasos = () => {
  // Casos de uso e exemplos
  const casos = [
    {
      titulo: "Sistema de Gestão para Clínicas",
      segmento: "Área da saúde",
      descricao: "Sistema completo para gerenciamento de clínicas médicas e odontológicas, incluindo agendamentos, prontuários eletrônicos, controle financeiro e gestão de convênios.",
      funcionalidades: [
        "Agenda online com marcação de consultas",
        "Prontuário eletrônico de pacientes",
        "Controle de estoque e materiais",
        "Gestão financeira e faturamento",
        "Integração com convênios médicos"
      ],
      imagem: "/placeholder.svg" // Placeholder, substituir por imagem real
    },
    {
      titulo: "Plataforma de Gestão Educacional",
      segmento: "Educação",
      descricao: "Sistema integrado para escolas e instituições de ensino com gestão de alunos, professores, turmas, notas, frequência e comunicação com pais e responsáveis.",
      funcionalidades: [
        "Controle acadêmico completo",
        "Portal para professores, alunos e pais",
        "Gestão de matrículas e turmas",
        "Sistema de avaliação e boletins",
        "Biblioteca digital de materiais"
      ],
      imagem: "/placeholder.svg" // Placeholder, substituir por imagem real
    },
    {
      titulo: "ERP para Indústrias",
      segmento: "Manufatura",
      descricao: "Sistema de planejamento de recursos empresariais desenvolvido especificamente para o setor industrial, integrando produção, estoque, compras, vendas e finanças.",
      funcionalidades: [
        "Controle de produção e estoque",
        "Gestão de fornecedores e compras",
        "Planejamento de demanda e produção",
        "Controle de qualidade integrado",
        "Dashboard gerencial com KPIs"
      ],
      imagem: "/placeholder.svg" // Placeholder, substituir por imagem real
    },
    {
      titulo: "Sistema de Vendas Online B2B",
      segmento: "Comércio",
      descricao: "Plataforma de vendas corporativas (B2B) com catálogo personalizado por cliente, tabelas de preços diferenciadas, controle de pedidos e integração com sistemas de logística.",
      funcionalidades: [
        "Catálogos personalizados por cliente",
        "Múltiplas tabelas de preços",
        "Portal de pedidos para representantes",
        "Aprovação de crédito automática",
        "Integração com sistemas de entrega"
      ],
      imagem: "/placeholder.svg" // Placeholder, substituir por imagem real
    }
  ];
  
  // Estado para controle do caso ativo
  const [casoAtivo, setCasoAtivo] = useState(0);
  
  // Funções para navegação
  const proximoCaso = () => {
    setCasoAtivo(atual => (atual + 1) % casos.length);
  };
  
  const casoAnterior = () => {
    setCasoAtivo(atual => (atual - 1 + casos.length) % casos.length);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Soluções para <span className="text-laranja">Diversos Segmentos</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Conheça alguns exemplos de sistemas personalizados que desenvolvemos para diferentes áreas
          </p>
        </AnimacaoScroll>
        
        {/* Slider de casos */}
        <div className="relative">
          {/* Botões de navegação */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={casoAnterior}
              className="bg-escuro/80 border border-white/10 rounded-full p-2 
                      text-white/70 hover:text-white hover:border-laranja transition-colors"
              aria-label="Caso anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={proximoCaso}
              className="bg-escuro/80 border border-white/10 rounded-full p-2 
                      text-white/70 hover:text-white hover:border-laranja transition-colors"
              aria-label="Próximo caso"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          {/* Conteúdo do slide atual */}
          <AnimacaoScroll atraso="delay-100">
            <div className="flex flex-col md:flex-row gap-8 bg-secundaria rounded-2xl p-8 border border-white/5">
              {/* Lado esquerdo - imagem */}
              <div className="w-full md:w-1/2">
                <div className="bg-escuro rounded-xl overflow-hidden h-64 md:h-80 relative border border-white/10">
                  {/* Simulação de telas de sistema */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-2xl font-bold text-laranja mb-4">
                        {casos[casoAtivo].titulo}
                      </div>
                      <div className="text-white/60 text-sm">
                        Sistema para {casos[casoAtivo].segmento}
                      </div>
                      
                      {/* Mockup representativo */}
                      <div className="mt-6 flex justify-center">
                        <div className="bg-escuro/50 border border-white/5 rounded-lg p-3 inline-block">
                          <div className="flex items-center justify-center h-16 w-48">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-laranja/50">
                              <rect width="18" height="18" x="3" y="3" rx="2" />
                              <path d="M7 7h10" />
                              <path d="M7 11h10" />
                              <path d="M7 15h10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - informações */}
              <div className="w-full md:w-1/2">
                <div>
                  <span className="text-laranja text-sm font-medium uppercase tracking-wider mb-2 block">
                    {casos[casoAtivo].segmento}
                  </span>
                  
                  <h3 className="text-2xl font-bold mb-4">
                    {casos[casoAtivo].titulo}
                  </h3>
                  
                  <p className="text-white/70 mb-6">
                    {casos[casoAtivo].descricao}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-white/80">Principais funcionalidades:</h4>
                    <ul className="space-y-2">
                      {casos[casoAtivo].funcionalidades.map((func, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-laranja font-bold">•</span>
                          <span className="text-white/70">{func}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Indicadores de navegação */}
                <div className="flex gap-2 mt-8">
                  {casos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCasoAtivo(idx)}
                      className={`
                        w-3 h-3 rounded-full transition-all duration-300
                        ${idx === casoAtivo ? "bg-laranja" : "bg-white/30 hover:bg-white/50"}
                      `}
                      aria-label={`Ver caso ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimacaoScroll>
        </div>
        
        {/* Texto complementar */}
        <AnimacaoScroll atraso="delay-200">
          <div className="mt-16 text-center">
            <p className="text-white/70 max-w-3xl mx-auto">
              Estes são apenas alguns exemplos de sistemas que desenvolvemos. Cada solução é única e
              adaptada às necessidades específicas de cada empresa. Entre em contato para discutirmos
              como um sistema web personalizado pode transformar o seu negócio.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default SistemaCasos;
