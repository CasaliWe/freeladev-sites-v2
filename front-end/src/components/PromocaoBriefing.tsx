import { FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente para promover o formulário de briefing na página inicial
 */
const PromocaoBriefing = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-32 w-64 h-64 bg-laranja/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <AnimacaoScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para <span className="text-laranja">iniciar</span> seu projeto?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Preencha nosso formulário de briefing detalhado e nos ajude a entender melhor as necessidades do seu projeto. 
                Quanto mais informações você fornecer, melhor poderemos atender às suas expectativas.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-laranja shrink-0 mt-0.5" />
                  <span className="text-white/80">
                    <span className="font-medium text-white">Informações precisas</span>: Ajuda-nos a criar uma proposta personalizada para seu projeto
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-laranja shrink-0 mt-0.5" />
                  <span className="text-white/80">
                    <span className="font-medium text-white">Economize tempo</span>: Evite trocas excessivas de mensagens com nossa equipe
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-laranja shrink-0 mt-0.5" />
                  <span className="text-white/80">
                    <span className="font-medium text-white">Projeto alinhado</span>: Garante que entregamos exatamente o que você precisa
                  </span>
                </li>
              </ul>
              
              <Link
                to="/briefing"
                className="bg-laranja hover:bg-laranja/80 text-escuro font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Preencher Briefing
              </Link>
            </AnimacaoScroll>
          </div>
          
          <div className="relative">
            <AnimacaoScroll atraso="delay-200">
              <div className="relative">
                {/* Ilustração de formulário */}
                <div className="bg-secundaria border border-white/10 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-laranja p-2 rounded-lg">
                      <FileText className="w-5 h-5 text-escuro" />
                    </div>
                    <h3 className="font-bold text-lg">Formulário de Briefing</h3>
                  </div>
                  
                  {/* Simulação de campos de formulário */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="mb-2 text-sm text-white/70">Nome do Projeto</div>
                      <div className="h-10 bg-escuro rounded-md border border-white/10"></div>
                    </div>
                    <div>
                      <div className="mb-2 text-sm text-white/70">Tipo de Site</div>
                      <div className="h-10 bg-escuro rounded-md border border-white/10"></div>
                    </div>
                    <div>
                      <div className="mb-2 text-sm text-white/70">Objetivos</div>
                      <div className="h-20 bg-escuro rounded-md border border-white/10"></div>
                    </div>
                    <div>
                      <div className="mb-2 text-sm text-white/70">Funcionalidades</div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-escuro rounded-md border border-white/10 flex items-center justify-center">
                          <div className="h-3 w-3 bg-laranja rounded-sm"></div>
                        </div>
                        <div className="h-8 w-8 bg-escuro rounded-md border border-white/10 flex items-center justify-center">
                          <div className="h-3 w-3 bg-laranja rounded-sm"></div>
                        </div>
                        <div className="h-8 w-8 bg-escuro rounded-md border border-white/10"></div>
                        <div className="h-8 w-8 bg-escuro rounded-md border border-white/10"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botão falso */}
                  <div className="bg-laranja text-escuro py-2 px-4 rounded-md text-center text-sm font-medium w-32 mx-auto">
                    Enviar Briefing
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-laranja/30 rounded-full blur-[30px] z-[-1]"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-laranja/20 rounded-full blur-[40px] z-[-1]"></div>
              </div>
            </AnimacaoScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromocaoBriefing;
