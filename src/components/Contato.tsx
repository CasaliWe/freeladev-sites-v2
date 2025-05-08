
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";
import BotaoWhatsapp from "./BotaoWhatsapp";
import { useAppContext } from "@/contexts/AppContext";


/**
 * Componente de formulário de contato
 */
const Contato = () => {
  const { dados, atualizarDados } = useAppContext();

  // Estados para controle do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");
  
  // Função para enviar o formulário
  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!nome || !email || !mensagem) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }
    
    // Simulação de envio
    try {
      setErro("");
      setEnviando(true);
      
      // Simulação de atraso de rede
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Formulário enviado:", { nome, email, mensagem });
      
      // Limpa o formulário após envio bem-sucedido
      setNome("");
      setEmail("");
      setMensagem("");
      setEnviado(true);
      
      // Reseta o estado de sucesso após 5 segundos
      setTimeout(() => {
        setEnviado(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErro("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    } finally {
      setEnviando(false);
    }
  };
  
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secundaria to-escuro opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-laranja/10 rounded-full blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Entre em <span className="text-laranja">Contato</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Estamos ansiosos para conversar sobre seu projeto e transformar suas ideias em realidade
          </p>
        </AnimacaoScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <AnimacaoScroll>
            <div className="bg-secundaria rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Mail className="text-laranja" />
                Envie uma mensagem
              </h3>
              
              <form onSubmit={enviarFormulario}>
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-white/70 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-laranja transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/70 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-laranja transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mensagem" className="block text-white/70 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={5}
                    className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-laranja transition-colors resize-none"
                    placeholder="Descreva seu projeto ou deixe sua mensagem..."
                  ></textarea>
                </div>
                
                {/* Mensagem de erro */}
                {erro && (
                  <div className="mb-4 text-red-500 text-sm">
                    {erro}
                  </div>
                )}
                
                {/* Mensagem de sucesso */}
                {enviado && (
                  <div className="mb-4 text-green-500 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Mensagem enviada com sucesso!
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={enviando}
                  className={`
                    w-full bg-laranja text-white rounded-lg py-3 px-4 font-medium
                    flex items-center justify-center gap-2
                    ${enviando ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {enviando ? (
                    <>
                      <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimacaoScroll>
          
          {/* Informações de contato e CTA */}
          <AnimacaoScroll atraso="delay-200">
            <div className="h-full flex flex-col">
              {/* Informações de contato */}
              <div className="bg-secundaria rounded-2xl p-8 border border-white/5 mb-8">
                <h3 className="text-xl font-bold mb-6">
                  Informações de contato
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-laranja font-medium block">Localização</span>
                    <p className="text-white/80">{dados.localizacao}</p>
                  </div>
                  
                  <div>
                    <span className="text-laranja font-medium block">E-mail</span>
                    <a href="" className="text-white/80 hover:text-white">
                      {dados.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-laranja font-medium block">Telefone/WhatsApp</span>
                    <a href="" className="text-white/80 hover:text-white">
                      {dados.wpp}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* CTA para WhatsApp */}
              <div className="bg-laranja rounded-2xl p-8 text-white relative overflow-hidden flex-grow">
                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/4 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">
                  Resposta rápida?
                </h3>
                
                <p className="mb-6 opacity-90 relative z-10">
                  Converse diretamente com nossa equipe via WhatsApp 
                  e receba atendimento imediato.
                </p>
                
                <button
                  onClick={() => {
                    // URL de redirecionamento para o WhatsApp
                    const whatsappUrl = `${dados.wpp_float}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Freeladev.")}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="bg-white text-laranja rounded-lg py-3 px-6 font-medium
                           flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="mr-2">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Chamar no WhatsApp
                </button>
              </div>
            </div>
          </AnimacaoScroll>
        </div>
      </div>
    </section>
  );
};

export default Contato;
