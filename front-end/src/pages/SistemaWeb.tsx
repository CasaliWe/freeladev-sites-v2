import { useEffect } from "react";
import Navegacao from "../components/Navegacao";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";
import SistemaFuncionalidades from "../components/SistemaFuncionalidades";
import SistemaFAQ from "../components/SistemaFAQ";
import SistemaPlanos from "../components/SistemaPlanos";
import SistemaCasos from "../components/SistemaCasos";
import SistemaEtapas from "../components/SistemaEtapas";
import SistemaTecnologias from "../components/SistemaTecnologias";
import { Code, Database, Settings, Layout, Lock, PanelLeft } from "lucide-react";
import AnimacaoScroll from "../components/AnimacaoScroll";

/**
 * Página dedicada ao Sistema Web Personalizado
 */
const SistemaWeb = () => {
  // Efeito para configurar o título da página e meta tags
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Sistema Web Personalizado | Freeladev - Passo Fundo/RS";
    
    // Atualiza as meta tags para SEO
    const metaDescricao = document.querySelector('meta[name="description"]');
    if (metaDescricao) {
      metaDescricao.setAttribute("content", 
        "Sistemas Web Personalizados Freeladev - Desenvolvimento sob medida " +
        "para as necessidades específicas da sua empresa. Automatize processos, " +
        "centralize informações e aumente a produtividade do seu negócio."
      );
    }
    
    // Adiciona meta tag de palavras-chave
    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", 
      "sistema web, software personalizado, desenvolvimento sob medida, " +
      "automação de processos, ERP, CRM, gestão empresarial, Passo Fundo, RS"
    );
    document.head.appendChild(metaKeywords);
    
    // Atualiza meta tag Open Graph para compartilhamento
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "Sistema Web Personalizado | Freeladev");
    }
    
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", 
        "Desenvolvimento de sistemas web sob medida para automatizar processos, " +
        "centralizar informações e transformar digitalmente o seu negócio."
      );
    }
    
    // Remoção das meta tags adicionadas ao desmontar o componente
    return () => {
      if (document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
    };
  }, []);
  
  return (
    <div className="bg-escuro text-white antialiased min-h-screen">
      {/* Cabeçalho/Navegação */}
      <Navegacao />
      
      {/* Conteúdo principal */}
      <main className="pt-20 md:pt-28">
        {/* Banner principal */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <AnimacaoScroll>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Sistema <span className="text-laranja">Web</span> Personalizado
                  </h1>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-100">
                  <p className="text-white/70 text-lg mb-8">
                    Desenvolvimento de software sob medida para as necessidades específicas da sua 
                    empresa. Automatize processos, centralize informações e aumente 
                    a produtividade do seu negócio com soluções personalizadas.
                  </p>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-200">
                  <div className="flex flex-wrap gap-4 mb-8">
                    <BotaoWhatsapp texto="Solicitar orçamento" />
                  </div>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-300">
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-2">
                      <Code className="text-laranja w-5 h-5" />
                      <span className="text-white/80">100% Personalizado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Banco de dados robusto</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Processos automatizados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Segurança avançada</span>
                    </div>
                  </div>
                </AnimacaoScroll>
              </div>
              
              <div className="w-full md:w-1/2">
                <AnimacaoScroll atraso="delay-200">
                  <div className="relative">
                    {/* Simulação de dashboard de sistema */}
                    <div className="relative bg-secundaria rounded-xl overflow-hidden border border-white/10 shadow-xl">
                      {/* Barra de navegação do sistema */}
                      <div className="bg-escuro p-3 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="bg-laranja rounded-md p-1 text-escuro">
                            <Code className="w-4 h-4" />
                          </span>
                          <span className="font-medium">SistemaPro</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      
                      <div className="flex min-h-[350px]">
                        {/* Sidebar */}
                        <div className="hidden sm:block bg-escuro/50 w-48 p-4 border-r border-white/10">
                          <div className="space-y-4">
                            <div className="bg-laranja/20 text-laranja p-2 rounded-md flex items-center gap-2">
                              <PanelLeft className="w-4 h-4" />
                              <span>Dashboard</span>
                            </div>
                            <div className="p-2 text-white/70 flex items-center gap-2 hover:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              </svg>
                              <span>Clientes</span>
                            </div>
                            <div className="p-2 text-white/70 flex items-center gap-2 hover:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                <path d="M3 6h18"></path>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                              </svg>
                              <span>Produtos</span>
                            </div>
                            <div className="p-2 text-white/70 flex items-center gap-2 hover:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                <path d="M17 2v3"></path>
                                <path d="M7 2v3"></path>
                                <path d="M2 10h20"></path>
                              </svg>
                              <span>Agenda</span>
                            </div>
                            <div className="p-2 text-white/70 flex items-center gap-2 hover:text-white transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" y1="10" x2="22" y2="10"></line>
                              </svg>
                              <span>Financeiro</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Conteúdo principal */}
                        <div className="flex-grow p-4">
                          <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2">Dashboard</h2>
                            <p className="text-white/60 text-sm">Visão geral do sistema</p>
                          </div>
                          
                          {/* Cards de métricas */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-escuro p-4 rounded-lg border border-white/5">
                              <div className="text-xs text-white/50 mb-1">Total de Clientes</div>
                              <div className="text-2xl font-bold">1.245</div>
                              <div className="text-xs text-green-400 mt-2 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <span>+12% no mês</span>
                              </div>
                            </div>
                            <div className="bg-escuro p-4 rounded-lg border border-white/5">
                              <div className="text-xs text-white/50 mb-1">Vendas</div>
                              <div className="text-2xl font-bold">R$ 45.890</div>
                              <div className="text-xs text-green-400 mt-2 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                                <span>+8.3% no mês</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Gráfico / Chart simulado */}
                          <div className="bg-escuro rounded-lg border border-white/5 p-4 h-32 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Relatório de Vendas</span>
                              <span className="text-xs text-white/50">Últimos 30 dias</span>
                            </div>
                            <div className="flex-grow flex items-end gap-1">
                              {[35, 42, 38, 45, 35, 55, 48, 58, 67, 60, 55, 70, 65].map((value, i) => (
                                <div key={i} className="flex-grow h-full flex items-end">
                                  <div 
                                    className={`w-full rounded-sm ${i === 12 ? 'bg-laranja' : 'bg-laranja/30'}`}
                                    style={{ height: `${value}%` }}
                                  ></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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
        
        {/* Componentes específicos do Sistema Web */}
        <SistemaFuncionalidades />
        <SistemaTecnologias />
        <SistemaPlanos />
        <SistemaCasos />
        <SistemaEtapas />
        <SistemaFAQ />
        
        {/* CTA final */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <AnimacaoScroll>
              <div className="bg-secundaria border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Pronto para <span className="text-laranja">transformar</span> o seu negócio?
                  </h2>
                  <p className="text-white/70 mb-8">
                    Entre em contato agora mesmo para uma consultoria gratuita. Vamos entender as necessidades 
                    do seu negócio e desenvolver um sistema personalizado que realmente faz a diferença.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <BotaoWhatsapp texto="Solicitar consultoria gratuita" />
                    <a 
                      href="/briefing"
                      className="border border-white/20 hover:border-laranja/80 text-white/90 hover:text-white font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                      Preencher Briefing Detalhado
                    </a>
                  </div>
                </div>
              </div>
            </AnimacaoScroll>
          </div>
        </section>
      </main>
      
      {/* Rodapé */}
      <Rodape />
      
      {/* Botão flutuante de WhatsApp */}
      <BotaoWhatsapp flutuante={true} />
    </div>
  );
};

export default SistemaWeb;
