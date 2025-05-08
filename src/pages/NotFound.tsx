
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navegacao from "../components/Navegacao";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";

/**
 * Página de erro 404 (Não encontrado)
 */
const NotFound = () => {
  const location = useLocation();

  // Registra erro no console para fins de depuração
  useEffect(() => {
    console.error(
      "Erro 404: Tentativa de acesso à rota inexistente:",
      location.pathname
    );
    
    // Atualiza o título da página
    document.title = "Página não encontrada | Freeladev";
  }, [location.pathname]);

  return (
    <div className="bg-escuro text-white min-h-screen flex flex-col">
      {/* Cabeçalho/Navegação */}
      <Navegacao />
      
      {/* Conteúdo principal */}
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-laranja text-9xl font-bold mb-4">404</h1>
            
            <h2 className="text-3xl font-bold mb-6">Página não encontrada</h2>
            
            <p className="text-white/70 mb-8">
              A página que você está procurando não existe ou foi movida.
              Volte para a página inicial ou entre em contato conosco.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/" 
                className="px-6 py-3 bg-laranja text-white rounded-full botao-animado"
              >
                Voltar para o início
              </a>
              
              <BotaoWhatsapp />
            </div>
          </div>
        </div>
      </main>
      
      {/* Rodapé */}
      <Rodape />
      
      {/* Botão flutuante de WhatsApp */}
      <BotaoWhatsapp flutuante={true} />
    </div>
  );
};

export default NotFound;
