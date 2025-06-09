import { useEffect } from "react";
import Navegacao from "../components/Navegacao";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";
import AgenteFuncionalidades from "../components/AgenteFuncionalidades";
import AgenteFAQ from "../components/AgenteFAQ";
import AgentePlanos from "../components/AgentePlanos";
import AgenteExemplos from "../components/AgenteExemplos";
import AgenteEtapas from "../components/AgenteEtapas";
import { Zap, Brain, Bot, Clock, Server } from "lucide-react";
import AnimacaoScroll from "../components/AnimacaoScroll";

/**
 * Página dedicada ao Agente IA para WhatsApp
 */
const AgenteIA = () => {
  // Efeito para configurar o título da página e meta tags
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Agente IA para WhatsApp | Freeladev - Passo Fundo/RS";
    
    // Atualiza as meta tags para SEO
    const metaDescricao = document.querySelector('meta[name="description"]');
    if (metaDescricao) {
      metaDescricao.setAttribute("content", 
        "Agente IA para WhatsApp Freeladev - Automatize seu atendimento " +
        "com inteligência artificial avançada integrada ao WhatsApp. " +
        "Proporcione atendimento 24/7 e transforme seu negócio."
      );
    }
    
    // Adiciona meta tag de palavras-chave
    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", 
      "agente IA, WhatsApp, chatbot, automação, atendimento, " +
      "inteligência artificial, suporte 24/7, Passo Fundo, RS"
    );
    document.head.appendChild(metaKeywords);
    
    // Atualiza meta tag Open Graph para compartilhamento
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "Agente IA para WhatsApp | Freeladev");
    }
    
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", 
        "Automatize seu atendimento com inteligência artificial integrada ao WhatsApp. " +
        "Atendimento 24/7, respostas automáticas personalizadas e muito mais."
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
                    Agente <span className="text-laranja">IA</span> para WhatsApp
                  </h1>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-100">
                  <p className="text-white/70 text-lg mb-8">
                    Automatize seu atendimento com inteligência artificial avançada integrada 
                    diretamente ao WhatsApp da sua empresa. Proporcione atendimento 24/7 
                    e transforme a comunicação com seus clientes.
                  </p>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-200">
                  <div className="flex flex-wrap gap-4 mb-8">
                    <BotaoWhatsapp texto="Solicitar demonstração" />
                  </div>
                </AnimacaoScroll>
                
                <AnimacaoScroll atraso="delay-300">
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-2">
                      <Clock className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Atendimento 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="text-laranja w-5 h-5" />
                      <span className="text-white/80">IA Avançada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bot className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Personalização total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="text-laranja w-5 h-5" />
                      <span className="text-white/80">Hospedagem inclusa</span>
                    </div>
                  </div>
                </AnimacaoScroll>
              </div>
              
              <div className="w-full md:w-1/2">
                <AnimacaoScroll atraso="delay-200">
                  <div className="relative">
                    {/* Simulação de celular com agente IA no WhatsApp */}
                    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-white rounded-3xl border-8 border-escuro shadow-xl overflow-hidden">
                      {/* Topo do celular */}
                      <div className="bg-slate-200 py-2 px-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0"></div>
                        <div className="ml-3 flex-grow">
                          <div className="font-medium text-black">Agente IA Freeladev</div>
                          <div className="text-xs text-gray-500">online</div>
                        </div>
                      </div>
                      
                      {/* Conteúdo da conversa */}
                      <div className="bg-[#e5ddd5] h-[calc(100%-4rem)] p-4 overflow-hidden flex flex-col justify-end">
                        <div className="self-start max-w-[80%] bg-white p-3 rounded-lg mb-3">
                          <p className="text-black text-sm">Olá! Como posso ajudar você hoje?</p>
                          <p className="text-xs text-gray-500 text-right">11:32</p>
                        </div>
                        
                        <div className="self-end max-w-[80%] bg-green-100 p-3 rounded-lg mb-3">
                          <p className="text-black text-sm">Gostaria de saber mais sobre seus serviços.</p>
                          <p className="text-xs text-gray-500 text-right">11:33</p>
                        </div>
                        
                        <div className="self-start max-w-[80%] bg-white p-3 rounded-lg">
                          <p className="text-black text-sm">Claro! Oferecemos desenvolvimento de websites, aplicativos, e-commerce e muito mais. Qual serviço você tem interesse em conhecer melhor?</p>
                          <p className="text-xs text-gray-500 text-right">11:33</p>
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
        
        {/* Componentes específicos do Agente IA */}
        <AgenteFuncionalidades />
        <AgentePlanos />
        <AgenteExemplos />
        <AgenteEtapas />
        <AgenteFAQ />
        
        {/* CTA final */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <AnimacaoScroll>
              <div className="bg-secundaria border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Pronto para <span className="text-laranja">transformar</span> seu atendimento?
                  </h2>
                  <p className="text-white/70 mb-8">
                    Entre em contato agora mesmo e solicite uma demonstração gratuita do nosso Agente IA para WhatsApp.
                    Nossa equipe está pronta para esclarecer todas as suas dúvidas.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <BotaoWhatsapp texto="Solicitar demonstração" />
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
                      Preencher Briefing
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

export default AgenteIA;
