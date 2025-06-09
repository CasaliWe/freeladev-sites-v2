
import { Phone } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";

// Interface para definir as propriedades do componente
interface BotaoWhatsappProps {
  texto?: string;
  className?: string;
  flutuante?: boolean;
  mensagem?: string;
}

/**
 * Componente de botão para contato via WhatsApp
 * Pode ser usado como botão regular ou flutuante
 */
const BotaoWhatsapp = ({ 
  texto = "Fale conosco", 
  className = "", 
  flutuante = false,
  mensagem = "Olá, gostaria de saber mais sobre os serviços da Freeladev."
}: BotaoWhatsappProps) => {

  const { dados, atualizarDados } = useAppContext();
  
  // Número de WhatsApp da base
  const whatsappBase = dados.wpp_float?.replace("https://wa.me/", "") || "";
  
  // Evento de clique no botão
  const abrirWhatsapp = () => {
    // Registra evento de analytics (implementação futura)
    console.log("Clique no botão de WhatsApp");
    
    // Cria URL com a mensagem personalizada
    const mensagemEncoded = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/${whatsappBase}?text=${mensagemEncoded}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");
  };
  
  // Classes CSS para o botão flutuante - Ajustado posicionamento para direita
  const classesFlutuante = flutuante 
    ? "fixed bottom-6 right-4 z-50 shadow-lg animate-pulse-laranja rounded-full p-4 md:p-5"
    : "py-3 px-6 rounded-full";
  
  // Classe para o texto que evita o desaparecimento no hover
  const classeTexto = "relative z-10 pointer-events-none";
  
  return (
    <button
      onClick={abrirWhatsapp}
      aria-label="Entrar em contato pelo WhatsApp"
      className={`
        bg-laranja text-white flex items-center justify-center gap-2
        transition-all duration-300 hover:bg-laranja-600 hover:bg-opacity-100
        ${classesFlutuante} ${className}
      `}
    >
      <Phone className="w-5 h-5 relative z-10" />
      {!flutuante && <span className={classeTexto}>{texto}</span>}
    </button>
  );
};

export default BotaoWhatsapp;
