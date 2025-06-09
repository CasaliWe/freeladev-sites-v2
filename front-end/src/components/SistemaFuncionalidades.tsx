import { FileCode, Clock, Users, Coins, Settings, Search, LineChart, Shield, Workflow } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe as funcionalidades do Sistema Web Personalizado
 */
const SistemaFuncionalidades = () => {
  // Lista de funcionalidades do Sistema Web
  const funcionalidades = [
    {
      icone: <FileCode className="w-6 h-6" />,
      titulo: "Desenvolvimento personalizado",
      descricao: "Sistema projetado exclusivamente para sua empresa, atendendo às suas necessidades específicas de negócio."
    },
    {
      icone: <Workflow className="w-6 h-6" />,
      titulo: "Automação de processos",
      descricao: "Transforme fluxos de trabalho manuais em processos automatizados, eliminando retrabalhos e erros."
    },
    {
      icone: <Users className="w-6 h-6" />,
      titulo: "Gestão de usuários",
      descricao: "Sistema de permissões flexível para controlar o acesso de cada colaborador às funcionalidades."
    },
    {
      icone: <Clock className="w-6 h-6" />,
      titulo: "Escalabilidade",
      descricao: "Evolua seu sistema à medida que seu negócio cresce, sem necessidade de mudanças drásticas."
    },
    {
      icone: <Coins className="w-6 h-6" />,
      titulo: "Controle financeiro",
      descricao: "Módulos para gestão de finanças, faturamento, recebimentos e relatórios personalizados."
    },
    {
      icone: <Settings className="w-6 h-6" />,
      titulo: "Integração completa",
      descricao: "Compatível com sistemas existentes e plataformas externas (APIs, gateways de pagamento, etc)."
    },
    {
      icone: <Search className="w-6 h-6" />,
      titulo: "Busca inteligente",
      descricao: "Rápida recuperação de informações com sistema de busca avançado em toda a base de dados."
    },
    {
      icone: <LineChart className="w-6 h-6" />,
      titulo: "Relatórios personalizados",
      descricao: "Dashboards e relatórios com os indicadores mais importantes para o seu negócio."
    },
    {
      icone: <Shield className="w-6 h-6" />,
      titulo: "Segurança avançada",
      descricao: "Proteção robusta de dados com criptografia, controle de acesso e backup automático."
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
            Funcionalidades <span className="text-laranja">Principais</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Conheça as principais características dos nossos sistemas web personalizados
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

export default SistemaFuncionalidades;
