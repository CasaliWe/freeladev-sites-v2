import { createContext, useState, useContext } from 'react';
import { ChevronLeft, ChevronRight, Code, Smartphone, Monitor } from "lucide-react";



export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  // Dados
  const [dados, setDados] = useState({
    wpp: '(54) 99327-8967',
    wpp_float: 'https://wa.me/5554993278967',
    localizacao: 'Passo Fundo - RS',
    email: 'contato@freeladevsites.com.br',
    instagram: 'https://www.instagram.com/freeladev_sites/',
    facebook: 'https://www.facebook.com/people/freeladev/100089380789740/',
  });

  // Projetos
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "Site Institucional - Arquitetura Moderna",
      categoria: "Website",
      descricao: "Design elegante e minimalista para escritório de arquitetura com foco em projetos sustentáveis.",
      imagem: "placeholder.svg", // Usando placeholder como imagem temporária
      link: "#"
    },
    {
      id: 2,
      titulo: "E-commerce - Moda Sustentável",
      categoria: "E-commerce",
      descricao: "Loja online completa com sistema de pagamento integrado e experiência de compra otimizada.",
      imagem: "placeholder.svg",
      link: "#"
    },
    {
      id: 3,
      titulo: "App para Clínica Médica",
      categoria: "Aplicativo Mobile",
      descricao: "Aplicativo para agendamento de consultas e acompanhamento de tratamentos.",
      imagem: "placeholder.svg",
      link: "#"
    },
    {
      id: 4,
      titulo: "Landing Page - Curso Online",
      categoria: "Landing Page",
      descricao: "Página de conversão para captação de leads e vendas de curso digital.",
      imagem: "placeholder.svg",
      link: "#"
    }
  ]);

    // Avaliações
  const [avaliacoes, setAvaliacoes] = useState([
    {
      id: 1,
      nome: "Ricardo Oliveira",
      empresa: "Arquitetura Moderna",
      cargo: "Diretor",
      avaliacao: 5,
      comentario: "Superou nossas expectativas. O site ficou extremamente profissional e começamos a receber contatos qualificados já na primeira semana após o lançamento."
    },
    {
      id: 2,
      nome: "Marina Silva",
      empresa: "Ecomoda Sustentável",
      cargo: "CEO",
      avaliacao: 4.5,
      comentario: "Nossa loja virtual ficou fantástica! A usabilidade e o design estão perfeitos. A equipe foi muito atenciosa durante todo o processo."
    },
    {
      id: 3,
      nome: "Carlos Mendes",
      empresa: "Clínica Saúde Total",
      cargo: "Administrador",
      avaliacao: 5,
      comentario: "O aplicativo desenvolvido pela Freeladev revolucionou nosso sistema de agendamentos. Reduzimos as faltas em 70% e aumentamos a satisfação dos pacientes."
    },
    {
      id: 4,
      nome: "Juliana Ferreira",
      empresa: "Cursos Online",
      cargo: "Diretora de Marketing",
      avaliacao: 5,
      comentario: "O resultado superou todas as expectativas. A landing page converteu 3x mais que a anterior e o design é simplesmente sensacional."
    }
  ])

  // Serviços
  const [servicos, setServicos] = useState([
    {
      id: 1,
      titulo: "Sites & Landing Pages",
      descricao: "Criação de websites profissionais e landing pages otimizadas para conversão",
      icone: <Monitor className="w-12 h-12" />,
      detalhes: [
        "Design personalizado e exclusivo",
        "Estrutura pensada para conversão",
        "Otimização para dispositivos móveis",
        "Hospedagem e suporte inclusos"
      ]
    },
    {
      id: 2,
      titulo: "Aplicativos Mobile",
      descricao: "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android",
      icone: <Smartphone className="w-12 h-12" />,
      detalhes: [
        "Experiência de usuário intuitiva",
        "Design responsivo e moderno",
        "Funcionalidades personalizadas",
        "Publicação nas lojas de aplicativos"
      ]
    },
    {
      id: 3,
      titulo: "Otimização SEO",
      descricao: "Estratégias para melhorar o posicionamento do seu site nos buscadores",
      icone: <Search className="w-12 h-12" />,
      detalhes: [
        "Análise de palavras-chave",
        "Otimização de conteúdo",
        "Performance técnica",
        "Relatórios de resultados"
      ]
    },
    {
      id: 4,
      titulo: "Agentes IA para WhatsApp",
      descricao: "Automação inteligente para atendimento e suporte no WhatsApp",
      icone: <Code className="w-12 h-12" />,
      detalhes: [
        "Respostas automáticas personalizadas",
        "Integração com sistemas internos",
        "Análise de conversas e métricas",
        "Atendimento 24/7 automatizado"
      ]
    }
  ]);

  // Diferenciais
  const [diferenciais, setDiferenciais] = useState([
    {
      titulo: "Sites Responsivos",
      descricao: "Experiência perfeita em qualquer dispositivo - desktop, tablet ou smartphone. Design adaptativo que mantém a identidade visual e funcionalidades em todas as telas.",
      icone: <Monitor className="w-10 h-10" />
    },
    {
      titulo: "Otimização SEO",
      descricao: "Presença efetiva nos resultados de busca do Google. Sites estruturados para indexação, carregamento rápido e com conteúdo otimizado para palavras-chave estratégicas.",
      icone: <Search className="w-10 h-10" />
    },
    {
      titulo: "Design Exclusivo",
      descricao: "Criações únicas e personalizadas para cada cliente. Identidade visual exclusiva com elementos customizados para o seu negócio se destacar da concorrência.",
      icone: <DesignIcon className="w-10 h-10" />
    }
  ]);


  return (
    <AppContext.Provider value={{ 
      dados,
      projetos,
      servicos,
      diferenciais,
      avaliacoes
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}



// Componente de ícone Search (não disponível diretamente no lucide-react)
const Search = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// Componente de ícone Design renomeado para DesignIcon para evitar conflitos
const DesignIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    <path d="m14 7 3 3" />
  </svg>
);