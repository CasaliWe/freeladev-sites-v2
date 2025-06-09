import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente para exibir as perguntas frequentes sobre Sistemas Web Personalizados
 */
const SistemaFAQ = () => {
  // Lista de perguntas e respostas
  const perguntas = [
    {
      pergunta: "O que é um sistema web personalizado?",
      resposta: "Um sistema web personalizado é uma aplicação desenvolvida sob medida para atender às necessidades específicas de uma empresa ou organização. Diferente de soluções prontas, ele é construído considerando os processos, fluxos de trabalho e objetivos únicos do seu negócio, oferecendo funcionalidades e interfaces que se alinham perfeitamente com a forma como sua empresa opera."
    },
    {
      pergunta: "Quais são as vantagens de um sistema personalizado em comparação com soluções prontas?",
      resposta: "As principais vantagens incluem: 1) Adaptação total aos seus processos de negócio, sem necessidade de adaptar sua empresa ao software; 2) Escalabilidade para crescer com seu negócio; 3) Integração simplificada com outros sistemas já utilizados; 4) Eliminação de funcionalidades desnecessárias que complicam o uso; 5) Maior segurança, já que sistemas personalizados não são alvos comuns de ataques generalizados; 6) Suporte direto dos desenvolvedores que conhecem o sistema em profundidade."
    },
    {
      pergunta: "Quanto tempo leva para desenvolver um sistema web personalizado?",
      resposta: "O tempo de desenvolvimento varia conforme a complexidade e escopo do projeto. Sistemas mais simples podem levar de 1 a 2 meses, enquanto projetos mais complexos podem exigir 3 meses ou mais. Durante a fase de análise de requisitos, fornecemos um cronograma detalhado com estimativas precisas para seu projeto específico, dividido em fases e entregas incrementais."
    },
    {
      pergunta: "É possível integrar o sistema com outras plataformas e softwares que já utilizamos?",
      resposta: "Sim, uma das grandes vantagens dos sistemas personalizados é justamente a capacidade de integração. Podemos desenvolver integrações com praticamente qualquer software que disponibilize APIs, como ERPs, CRMs, plataformas de e-commerce, sistemas de pagamento, ferramentas de marketing, entre outros. As integrações podem ser em tempo real ou por sincronização periódica, dependendo da necessidade."
    },
    {
      pergunta: "Como é garantida a segurança dos dados no sistema?",
      resposta: "A segurança é uma prioridade em nossos desenvolvimentos. Implementamos múltiplas camadas de proteção, incluindo: criptografia de dados sensíveis, autenticação segura com múltiplos fatores, controle granular de permissões, proteção contra vulnerabilidades comuns (SQL Injection, XSS, CSRF), auditorias e logs de atividades, backups automatizados e planos de recuperação de desastres. Além disso, seguimos as melhores práticas de mercado e mantemos o sistema atualizado contra novas ameaças."
    },
    {
      pergunta: "Como funciona o processo de manutenção e suporte após a conclusão do sistema?",
      resposta: "Após a entrega do sistema, oferecemos diferentes planos de manutenção e suporte para garantir que tudo continue funcionando perfeitamente. Estes planos podem incluir: monitoramento constante de performance, correção de bugs, atualizações de segurança, suporte técnico por e-mail, chat ou telefone, e implementação de pequenas melhorias. Para evoluções maiores ou novas funcionalidades significativas, trabalhamos com orçamentos específicos baseados nas necessidades identificadas."
    },
    {
      pergunta: "É possível acessar o sistema de dispositivos móveis?",
      resposta: "Sim, todos os nossos sistemas web são desenvolvidos com design responsivo, o que permite o acesso adequado de qualquer dispositivo com navegador, sejam computadores, tablets ou smartphones. Para necessidades específicas de mobilidade, também podemos desenvolver interfaces otimizadas para dispositivos móveis ou até mesmo aplicativos nativos que se integram ao sistema web principal."
    },
    {
      pergunta: "Como é definido o valor de investimento para um sistema web personalizado?",
      resposta: "O investimento é calculado com base na complexidade e escopo do projeto. Durante a fase inicial de análise de requisitos, avaliamos fatores como número e complexidade das funcionalidades necessárias, integrações com outros sistemas, volume de dados a serem processados, requisitos de segurança e performance, e prazo desejado para implementação. Com base nessa análise, elaboramos uma proposta detalhada com valores e cronograma de pagamentos, geralmente divididos em etapas do projeto."
    },
    {
      pergunta: "Vocês oferecem treinamento para os usuários do sistema?",
      resposta: "Sim, o treinamento dos usuários faz parte integrante do nosso processo de implementação. Oferecemos sessões de treinamento presenciais ou remotas, conforme a preferência do cliente. Além disso, desenvolvemos manuais detalhados e vídeos tutoriais personalizados que ficam disponíveis para consulta a qualquer momento. Para sistemas mais complexos, também oferecemos formação de multiplicadores internos que podem dar continuidade ao treinamento de novos colaboradores."
    },
    {
      pergunta: "É possível fazer mudanças no sistema depois que ele estiver pronto?",
      resposta: "Absolutamente. Na verdade, essa é uma das principais vantagens de um sistema personalizado. O software evolui junto com seu negócio. Após a entrega inicial, você pode solicitar novas funcionalidades, ajustes ou melhorias a qualquer momento. Desenvolvemos os sistemas com uma arquitetura modular que facilita modificações e expansões futuras sem comprometer o que já está funcionando."
    }
  ];
  
  // Estado para controle das perguntas abertas
  const [perguntasAbertas, setPerguntasAbertas] = useState<number[]>([]);
  
  // Função para alternar a abertura/fechamento de uma pergunta
  const alternarPergunta = (index: number) => {
    if (perguntasAbertas.includes(index)) {
      setPerguntasAbertas(perguntasAbertas.filter(item => item !== index));
    } else {
      setPerguntasAbertas([...perguntasAbertas, index]);
    }
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perguntas <span className="text-laranja">Frequentes</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Tire suas dúvidas sobre o desenvolvimento de Sistemas Web Personalizados
          </p>
        </AnimacaoScroll>
        
        {/* Lista de perguntas */}
        <div className="max-w-3xl mx-auto">
          {perguntas.map((item, idx) => (
            <AnimacaoScroll key={idx} atraso={idx < 5 ? "delay-100" : "delay-200"}>
              <div className="mb-4">
                <button
                  onClick={() => alternarPergunta(idx)}
                  className={`
                    w-full text-left p-5 rounded-xl flex items-center justify-between 
                    ${perguntasAbertas.includes(idx) 
                      ? "bg-secundaria border-b border-laranja/30" 
                      : "bg-secundaria/50 hover:bg-secundaria/80 transition-colors"}
                  `}
                  aria-expanded={perguntasAbertas.includes(idx)}
                >
                  <h3 className="font-bold text-lg pr-8">{item.pergunta}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-laranja transition-transform ${
                      perguntasAbertas.includes(idx) ? "transform rotate-180" : ""
                    }`} 
                  />
                </button>
                
                {perguntasAbertas.includes(idx) && (
                  <div className="p-5 bg-secundaria/30 rounded-b-xl">
                    <p className="text-white/70">{item.resposta}</p>
                  </div>
                )}
              </div>
            </AnimacaoScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SistemaFAQ;
