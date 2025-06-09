import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe exemplos de casos de uso do Agente IA para WhatsApp
 */
const AgenteExemplos = () => {
  // Exemplos de conversas/casos de uso
  const exemplos = [
    {
      titulo: "Atendimento ao Cliente",
      descricao: "Veja como o agente responde dúvidas frequentes sobre produtos e serviços, auxiliando os clientes de forma rápida e precisa.",
      conversa: [
        { remetente: "cliente", mensagem: "Olá, gostaria de saber o horário de funcionamento da loja." },
        { remetente: "agente", mensagem: "Olá! Nossa loja funciona de segunda a sexta das 9h às 18h, e aos sábados das 9h às 13h. Como posso ajudar mais?" },
        { remetente: "cliente", mensagem: "E qual é o endereço da loja?" },
        { remetente: "agente", mensagem: "Nossa loja fica na Av. Brasil, 1500, Centro, Passo Fundo/RS. Você pode conferir a localização exata no mapa: [link do mapa]" },
        { remetente: "cliente", mensagem: "Vocês aceitam cartão de crédito?" },
        { remetente: "agente", mensagem: "Sim! Aceitamos todas as bandeiras de cartões de crédito e débito, além de PIX e dinheiro. Posso ajudar com mais alguma informação?" }
      ]
    },
    {
      titulo: "Agendamento de Serviços",
      descricao: "O agente pode gerenciar agenda, confirmar horários disponíveis e registrar novos agendamentos para seu negócio.",
      conversa: [
        { remetente: "cliente", mensagem: "Boa tarde! Preciso agendar um horário para corte de cabelo." },
        { remetente: "agente", mensagem: "Olá! Claro, será um prazer ajudar com o agendamento. Qual dia da semana você prefere?" },
        { remetente: "cliente", mensagem: "Se possível na próxima quinta-feira à tarde." },
        { remetente: "agente", mensagem: "Verificando os horários disponíveis para quinta-feira... Temos vagas às 14h, 15h30 e 17h. Qual horário seria melhor para você?" },
        { remetente: "cliente", mensagem: "Às 15h30 seria perfeito!" },
        { remetente: "agente", mensagem: "Ótimo! Agendei seu corte de cabelo para quinta-feira às 15h30. Em nome de quem devo registrar o agendamento?" }
      ]
    },
    {
      titulo: "Vendas e Suporte Técnico",
      descricao: "O agente pode auxiliar na venda de produtos, recomendando opções com base nas necessidades do cliente e solucionando problemas técnicos.",
      conversa: [
        { remetente: "cliente", mensagem: "Estou com problemas para acessar minha conta no site. Esqueci minha senha." },
        { remetente: "agente", mensagem: "Sem problemas, vou ajudar você a recuperar seu acesso. Por favor, me informe o e-mail cadastrado na sua conta." },
        { remetente: "cliente", mensagem: "É maria@email.com" },
        { remetente: "agente", mensagem: "Obrigado! Acabo de enviar um link de recuperação de senha para maria@email.com. Por favor, verifique sua caixa de entrada e siga as instruções para criar uma nova senha." },
        { remetente: "cliente", mensagem: "E se eu não receber o e-mail?" },
        { remetente: "agente", mensagem: "Se você não receber o e-mail em até 5 minutos, verifique sua pasta de spam. Caso ainda não encontre, posso enviar novamente ou transferir você para um de nossos atendentes humanos. O que prefere?" }
      ]
    }
  ];
  
  // Estado para controle do exemplo ativo
  const [exemploAtivo, setExemploAtivo] = useState(0);
  
  // Funções para navegação
  const proximoExemplo = () => {
    setExemploAtivo(atual => (atual + 1) % exemplos.length);
  };
  
  const exemploAnterior = () => {
    setExemploAtivo(atual => (atual - 1 + exemplos.length) % exemplos.length);
  };
  
  return (
    <section className="py-20 bg-secundaria relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como o Agente <span className="text-laranja">Funciona</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Veja exemplos reais de interações do nosso Agente IA para WhatsApp
          </p>
        </AnimacaoScroll>
        
        {/* Slider de exemplos */}
        <div className="relative">
          {/* Botões de navegação */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
            <button 
              onClick={exemploAnterior}
              className="bg-escuro/80 border border-white/10 rounded-full p-2 
                      text-white/70 hover:text-white hover:border-laranja transition-colors"
              aria-label="Exemplo anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
            <button 
              onClick={proximoExemplo}
              className="bg-escuro/80 border border-white/10 rounded-full p-2 
                      text-white/70 hover:text-white hover:border-laranja transition-colors"
              aria-label="Próximo exemplo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          {/* Conteúdo do slide atual */}
          <AnimacaoScroll atraso="delay-200">
            <div className="flex flex-col lg:flex-row gap-8 bg-escuro rounded-2xl p-8 border border-white/5">
              {/* Lado esquerdo - informações */}
              <div className="w-full lg:w-1/3">
                <h3 className="text-2xl font-bold mb-4">
                  {exemplos[exemploAtivo].titulo}
                </h3>
                
                <p className="text-white/70 mb-6">
                  {exemplos[exemploAtivo].descricao}
                </p>
                
                {/* Indicadores de navegação */}
                <div className="flex gap-2 mt-8">
                  {exemplos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setExemploAtivo(idx)}
                      className={`
                        w-3 h-3 rounded-full transition-all duration-300
                        ${idx === exemploAtivo ? "bg-laranja" : "bg-white/30 hover:bg-white/50"}
                      `}
                      aria-label={`Ver exemplo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Lado direito - simulação de conversa */}
              <div className="w-full lg:w-2/3 bg-slate-900 rounded-xl overflow-hidden">
                {/* Cabeçalho da conversa */}
                <div className="bg-slate-800 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-laranja/20 flex items-center justify-center text-laranja">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 5v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Agente IA Freeladev</div>
                    <div className="text-xs text-green-400">online</div>
                  </div>
                </div>
                
                {/* Corpo da conversa */}
                <div className="p-4 space-y-4 h-[400px] overflow-y-auto">
                  {exemplos[exemploAtivo].conversa.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${msg.remetente === "cliente" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.remetente === "cliente" 
                            ? "bg-laranja/20 text-white" 
                            : "bg-slate-700 text-white/90"
                        }`}
                      >
                        {msg.mensagem}
                        <div className={`text-xs mt-1 ${
                          msg.remetente === "cliente" 
                            ? "text-white/50 text-right" 
                            : "text-white/50"
                        }`}>
                          {msg.remetente === "cliente" ? "Você" : "Agente IA"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Campo de entrada */}
                <div className="p-4 border-t border-slate-700 flex gap-2">
                  <input 
                    type="text" 
                    className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-white w-full focus:outline-none focus:border-laranja/50"
                    placeholder="Digite sua mensagem aqui..."
                    disabled
                  />
                  <button className="bg-laranja rounded-full w-10 h-10 flex items-center justify-center text-escuro">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </AnimacaoScroll>
        </div>
      </div>
    </section>
  );
};

export default AgenteExemplos;
