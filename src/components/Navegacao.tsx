
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BotaoWhatsapp from "./BotaoWhatsapp";

/**
 * Componente de navegação principal (header)
 */
const Navegacao = () => {
  // Estado para controlar a visibilidade do menu mobile
  const [menuAberto, setMenuAberto] = useState(false);
  
  // Estado para controlar a aparência da navegação ao rolar
  const [navCompacta, setNavCompacta] = useState(false);
  
  // Lista de itens do menu
  const itensMenu = [
    { nome: "Início", id: "inicio" },
    { nome: "Serviços", id: "servicos" },
    { nome: "Diferenciais", id: "diferenciais" },
    { nome: "Portfólio", id: "portfolio" },
    { nome: "Quem Somos", id: "quemSomos" },
    { nome: "Contato", id: "contato" },
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
  
  // Função para navegar para uma seção e fechar o menu
  const navegarParaSecao = (id: string) => {
    setMenuAberto(false);
    
    // Encontra o elemento com o ID especificado
    const elemento = document.getElementById(id);
    if (elemento) {
      // Rola suavemente até o elemento
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${navCompacta ? "py-2 efeito-vidro" : "py-4 bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          className="relative z-50"
          onClick={(e) => {
            e.preventDefault();
            navegarParaSecao("inicio");
          }}
        >
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-laranja">Freela</span>
            <span className="text-white">dev</span>
          </h1>
        </a>
        
        {/* Menu de navegação para desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {itensMenu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                navegarParaSecao(item.id);
              }}
              className="text-white/90 hover:text-laranja transition-colors"
            >
              {item.nome}
            </a>
          ))}
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
          className={`
            fixed inset-0 bg-escuro flex flex-col justify-center items-center
            transition-transform duration-300 ease-in-out md:hidden
            ${menuAberto ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="flex flex-col items-center gap-6">
            {itensMenu.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navegarParaSecao(item.id);
                }}
                className="text-xl text-white/90 hover:text-laranja transition-colors"
              >
                {item.nome}
              </a>
            ))}
            <BotaoWhatsapp className="mt-4" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navegacao;
