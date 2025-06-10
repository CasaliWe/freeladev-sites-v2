import { createContext, useState, useContext, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Smartphone, Monitor } from "lucide-react";



export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  // Dados
  const [dados, setDados] = useState({
    wpp: '',
    wpp_float: '',
    localizacao: '',
    email: '',
    instagram: '',
    facebook: '',
  });

  // Projetos
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "",
      categoria: "",
      descricao: "",
      imagem: "", 
      link: ""
    }
  ]);

    // Avaliações
  const [avaliacoes, setAvaliacoes] = useState([
    {
      id: "",
      nome: "",
      empresa: "",
      cargo: "",
      avaliacao: "",
      comentario: ""
    }
  ])

  // Serviços
  const [servicos, setServicos] = useState([
    {
      id: 1,
      titulo: "Websites & Landing Pages",
      descricao: "Criação de websites profissionais e landing pages otimizadas para conversão",
      icone: <Monitor className="w-12 h-12" />,
      detalhes: [
        "Design personalizado e exclusivo",
        "Estrutura pensada para conversão",
        "Otimização para dispositivos móveis",
        "Hospedagem e suporte inclusos"
      ],
      mensagem: "Olá, gostaria de saber mais sobre seus serviços de Websites e Landing Pages",
      texto_botao: "Saber mais"
    },
    {
      id: 2,
      titulo: "E-commerce",
      descricao: "Criação de lojas virtuais completas e otimizadas para vendas online",
      icone: <Code className="w-12 h-12" />,
      detalhes: [
        "Integração com meios de pagamento",
        "Gerenciamento de produtos e estoque",
        "Design responsivo e otimizado",
        "Suporte técnico e manutenção"
      ],
      mensagem: "Olá, gostaria de saber mais sobre seus serviços de E-commerce",
      texto_botao: "Conheça mais"
    },
    {
      id: 3,
      titulo: "Agentes IA para WhatsApp",
      descricao: "Automação inteligente para atendimento e suporte no WhatsApp",
      icone: <Search className="w-12 h-12" />,
      detalhes: [
        "Respostas automáticas personalizadas",
        "Integração com sistemas internos",
        "Análise de conversas e métricas",
        "Atendimento 24/7 automatizado"
      ],
      mensagem: "Olá, gostaria de saber mais sobre seus serviços de Agentes IA para WhatsApp",
      texto_botao: "Ver mais"
    },
    {
      id: 4,
      titulo: "Sistema Web Personalizado",
      descricao: "Desenvolvimento de sistemas web sob medida para atender às necessidades específicas do seu negócio",
      icone: <Code className="w-12 h-12" />,
      detalhes: [
        "Análise de requisitos e planejamento",
        "Desenvolvimento ágil e iterativo",
        "Integração com APIs e serviços externos",
        "Suporte técnico e manutenção contínua"
      ],
      mensagem: "Olá, gostaria de saber mais sobre seus serviços de Sistema Web Personalizado",
      texto_botao: "Mais informações"
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


  // buscando os dados da api e salvando no estado
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/buscar-dados.php`);
      const data = await response.json();
      setProjetos(data.projetos);
      setAvaliacoes(data.avaliacoes);
      setDados({
        wpp: data.contatos.wpp_principal,
        wpp_float: `https://wa.me/${formatPhoneNumber(data.contatos.wpp_principal)}`,
        localizacao: `${data.endereco.cidade} - ${data.endereco.estado}`,
        email: data.contatos.email_site,
        instagram: data.contatos.instagram,
        facebook: data.contatos.facebook
      })
    };
    fetchData();
  }, []);

  // func para remover todos os carateres de numero de telefone deixando apenas o numero tudo junto
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, '');
  };

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