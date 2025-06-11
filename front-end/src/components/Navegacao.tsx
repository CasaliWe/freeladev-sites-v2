
import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import BotaoWhatsapp from "./BotaoWhatsapp";
import { useAppContext } from "@/contexts/AppContext";

// Interface para os itens do menu
interface ItemMenu {
  nome: string;
  id: string;
  pagina?: string;
  destaque?: boolean;
}

/**
 * Componente de navegação principal (header)
 */
const Navegacao = () => {
  const { dados, atualizarDados } = useAppContext();

  // Estado para controlar a visibilidade do menu mobile
  const [menuAberto, setMenuAberto] = useState(false);
  
  // Estado para controlar o dropdown de serviços
  const [servicosDropdownAberto, setServicosDropdownAberto] = useState(false);
  
  // Estado para controlar a aparência da navegação ao rolar
  const [navCompacta, setNavCompacta] = useState(false);
  // Referência para o componente de menu
  const menuRef = useRef<HTMLDivElement>(null);
  // Referência para o dropdown de serviços
  const servicosDropdownRef = useRef<HTMLDivElement>(null);
    // Lista de itens do menu
  const itensMenu: ItemMenu[] = [
    { nome: "Início", id: "inicio", destaque: false },
    // O item Serviços será tratado separadamente como dropdown
    { nome: "Diferenciais", id: "diferenciais", destaque: false },
    { nome: "Portfólio", id: "portfolio", destaque: false },
    { nome: "Quem Somos", id: "quemSomos", destaque: false },
    { nome: "Contato", id: "contato", destaque: false },
    { nome: "Catálogo", id: "catalogo", pagina: "catalogo", destaque: false },
  ];
  
  // Opções do dropdown de serviços
  const servicosDropdown = [
    { nome: "Sistema Web", pagina: "sistema-web" },
    { nome: "E-commerce", pagina: "ecommerce" },
    { nome: "Agente IA", pagina: "agente-ia" },
  ];

  // Lista de redes sociais
  const redesSociais = [
    { nome: "Facebook", icone: <Facebook className="h-5 w-5" />, url: `${dados.facebook}` },
    { nome: "Instagram", icone: <Instagram className="h-5 w-5" />, url: `${dados.instagram}` },
  ];
  
  // Altera a aparência da navegação ao rolar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavCompacta(true);
      } else {
        setNavCompacta(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Adiciona manipulador de cliques fora do menu para fechá-lo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAberto(false);
      }
      
      if (servicosDropdownRef.current && !servicosDropdownRef.current.contains(event.target as Node)) {
        setServicosDropdownAberto(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Efeito para gerenciar o overflow do body quando o menu estiver aberto
  useEffect(() => {
    // Previne rolagem no body quando o menu estiver aberto
    if (menuAberto) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura a posição do scroll quando o menu for fechado
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };  }, [menuAberto]);
  
  // Função para navegar para uma seção ou página e fechar o menu
  const navegarParaSecao = (id: string, pagina?: string) => {
    setMenuAberto(false);
    
    // Verifica em qual página estamos atualmente
    const currentPath = window.location.pathname;
    const isCatalogoPage = currentPath.includes('catalogo');
    const isBriefingPage = currentPath.includes('briefing');
    const isSistemaPage = currentPath.includes('sistema-web');
    const isAgentePage = currentPath.includes('agente-ia');
    const isEcommercePage = currentPath.includes('ecommerce');
    const isSpecialPage = isCatalogoPage || isBriefingPage || isSistemaPage || isAgentePage || isEcommercePage;
    
    // Se estamos em página especial (catálogo ou briefing) e o item não é dessa página
    if (isSpecialPage && id !== 'catalogo' && id !== 'briefing') {
      // Redireciona para a página inicial + a âncora do elemento
      window.location.href = `/#${id}`;
      return;
    }
    
    // Caso normal - Se tem uma página específica, navega para ela
    if (pagina) {
      window.location.href = `/${pagina}`;
      return;
    }
    
    // Se estamos na página correta, apenas rolamos até o elemento
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Função para abrir links de redes sociais
  const abrirLink = (url: string) => {
    window.open(url, "_blank");
  };
  
  return (
    <header
      className={`
        relative md:fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${navCompacta ? "py-2 efeito-vidro" : "py-4 bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">        {/* Logo */}
        <a 
          href="#inicio" 
          className="relative z-50"
          onClick={(e) => {
            e.preventDefault();
            // Se estiver na página de catálogo, volta para a home
            if (window.location.pathname.includes('catalogo')) {
              window.location.href = '/';
            } else {
              // Se já estiver na página inicial, apenas rola para o topo
              navegarParaSecao("inicio");
            }
          }}
        >
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-laranja">Freela</span>
            <span className="text-white">dev</span>
          </h1>
        </a>          {/* Menu de navegação para desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {itensMenu.map((item) => (
            <a
              key={item.id}
              href={item.pagina ? item.pagina : `#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                navegarParaSecao(item.id, item.pagina);
              }}
              className={item.destaque 
                ? "text-escuro bg-laranja hover:bg-laranja/80 px-4 py-2 rounded-lg font-medium transition-colors" 
                : "text-white/90 hover:text-laranja transition-colors"
              }
            >
              {item.nome}
            </a>
          ))}
          
          {/* Dropdown de serviços para desktop */}
          <div className="relative" ref={servicosDropdownRef}>
            <button 
              onClick={() => setServicosDropdownAberto(!servicosDropdownAberto)}
              className="text-white/90 hover:text-laranja transition-colors flex items-center gap-1"
            >
              Serviços
              {servicosDropdownAberto ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {servicosDropdownAberto && (
              <div className="absolute top-full mt-2 left-0 bg-secundaria border border-white/10 rounded-lg overflow-hidden shadow-lg z-50 min-w-[180px]">
                {servicosDropdown.map((servico, idx) => (
                  <a
                    key={idx}
                    href={`/${servico.pagina}`}
                    className="block px-4 py-3 text-white/90 hover:bg-laranja/20 hover:text-white transition-colors text-sm"
                  >
                    {servico.nome}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <BotaoWhatsapp />
        </nav>
        
        {/* Botão para abrir/fechar menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-white p-2 relative z-50"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Menu mobile */}
        <div
          ref={menuRef}
          className={`
            fixed inset-0 bg-escuro flex flex-col justify-center items-center
            transition-transform duration-300 ease-in-out md:hidden
            ${menuAberto ? "translate-x-0" : "translate-x-full"}
          `}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            backgroundColor: 'rgba(10, 10, 15, 0.97)', // Fundo escuro ligeiramente transparente
          }}
        >          <nav className="flex flex-col items-center gap-6">
            {/* Item Início */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                navegarParaSecao("inicio");
              }}
              className="text-xl text-white/90 hover:text-laranja transition-colors"
            >
              Início
            </a>

            <a
              href="/agente-ia"
              className="text-xl text-white/90 hover:text-laranja transition-colors"
            >
              Agente IA
            </a>

            <a
              href="/ecommerce"
              className="text-xl text-white/90 hover:text-laranja transition-colors"
            >
              E-commerce
            </a>

            <a
              href="/sistema-web"
              className="text-xl text-white/90 hover:text-laranja transition-colors"
            >
              Sistema Web
            </a>

            <a
              href="/catalogo"
              className="text-xl text-white/90 hover:text-laranja transition-colors"
            >
              Catalogo
            </a>

            <a
              href="#contato"
              onClick={(e) => {
                navegarParaSecao("contato");
              }}
              className="text-xl text-white/90 hover:text-laranja transition-colors"
            >
              Contato
            </a>
            
            

            
            {/* Botões de redes sociais para mobile */}
            <div className="flex gap-4 mt-4">
              {redesSociais.map((rede, idx) => (
                <button 
                  key={idx} 
                  onClick={() => abrirLink(rede.url)}
                  className="bg-secundaria hover:bg-laranja text-white p-3 rounded-full transition-colors"
                  aria-label={rede.nome}
                >
                  {rede.icone}
                </button>
              ))}
            </div>
            
            <BotaoWhatsapp className="mt-4" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navegacao;
