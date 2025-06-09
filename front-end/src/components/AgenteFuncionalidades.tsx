import { Bot, Zap, Globe, BarChart, Clock, Braces, Search, Users, Lock } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe as funcionalidades do Agente IA para WhatsApp
 */
const AgenteFuncionalidades = () => {
  // Lista de funcionalidades do Agente IA
  const funcionalidades = [
    {
      icone: <Zap className="w-6 h-6" />,
      titulo: "Respostas instantâneas",
      descricao: "Responda às mensagens dos clientes instantaneamente, 24 horas por dia, 7 dias por semana."
    },
    {
      icone: <Bot className="w-6 h-6" />,
      titulo: "IA Contextual",
      descricao: "Inteligência artificial que entende o contexto da conversa e mantém diálogos fluidos e naturais."
    },
    {
      icone: <Globe className="w-6 h-6" />,
      titulo: "Multi-idiomas",
      descricao: "Capacidade de atender clientes em diferentes idiomas, aumentando seu alcance global."
    },
    {
      icone: <Search className="w-6 h-6" />,
      titulo: "Busca inteligente",
      descricao: "Encontra informações relevantes em sua base de conhecimento para responder perguntas específicas."
    },
    {
      icone: <BarChart className="w-6 h-6" />,
      titulo: "Relatórios detalhados",
      descricao: "Acompanhe métricas de atendimento, temas recorrentes e satisfação dos clientes."
    },
    {
      icone: <Clock className="w-6 h-6" />,
      titulo: "Agendamentos",
      descricao: "Permite que clientes agendem consultas ou serviços diretamente pelo WhatsApp."
    },
    {
      icone: <Users className="w-6 h-6" />,
      titulo: "Transição para humanos",
      descricao: "Transferência inteligente para atendente humano quando necessário, sem perder o contexto."
    },
    {
      icone: <Braces className="w-6 h-6" />,
      titulo: "Integrações",
      descricao: "Conecta-se facilmente com sistemas existentes como CRM, ERP e outras plataformas."
    },
    {
      icone: <Lock className="w-6 h-6" />,
      titulo: "Segurança garantida",
      descricao: "Informações e conversas protegidas com criptografia e em conformidade com a LGPD."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-secundaria">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-laranja/5 rounded-full blur-[80px]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-laranja/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Funcionalidades <span className="text-laranja">Avançadas</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Conheça os recursos do nosso Agente IA que transformarão o atendimento da sua empresa
          </p>
        </AnimacaoScroll>
        
        {/* Grade de funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funcionalidades.map((item, idx) => (
            <AnimacaoScroll 
              key={idx} 
              atraso={idx < 3 ? "delay-100" : idx < 6 ? "delay-200" : "delay-300"}
            >
              <div className="bg-escuro border border-white/5 rounded-xl p-6 h-full transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-laranja/10 text-laranja rounded-xl p-3 inline-block mb-4">
                  {item.icone}
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {item.titulo}
                </h3>
                
                <p className="text-white/70">
                  {item.descricao}
                </p>
              </div>
            </AnimacaoScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenteFuncionalidades;
