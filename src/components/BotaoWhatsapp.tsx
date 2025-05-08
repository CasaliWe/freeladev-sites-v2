
import { Phone } from "lucide-react";

// Interface para definir as propriedades do componente
interface BotaoWhatsappProps {
  texto?: string;
  className?: string;
  flutuante?: boolean;
}

/**
 * Componente de botão para contato via WhatsApp
 * Pode ser usado como botão regular ou flutuante
 */
const BotaoWhatsapp = ({ 
  texto = "Fale conosco", 
  className = "", 
  flutuante = false 
}: BotaoWhatsappProps) => {
  // Número do WhatsApp e mensagem pré-definida
  const telefone = "5554999999999"; // Substitua pelo número real
  const mensagemPadrao = "Olá! Gostaria de saber mais sobre os serviços da Freeladev.";
  
  // URL de redirecionamento para o WhatsApp
  const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemPadrao)}`;
  
  // Evento de clique no botão
  const abrirWhatsapp = () => {
    // Registra evento de analytics (implementação futura)
    console.log("Clique no botão de WhatsApp");
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");
  };
  
  // Classes CSS para o botão flutuante
  const classesFlutuante = flutuante 
    ? "fixed bottom-6 right-6 z-50 shadow-lg animate-pulse-laranja rounded-full p-4 md:p-5"
    : "py-3 px-6 rounded-full";
  
  return (
    <button
      onClick={abrirWhatsapp}
      aria-label="Entrar em contato pelo WhatsApp"
      className={`
        bg-laranja text-white flex items-center justify-center gap-2
        transition-all duration-300 hover:bg-laranja-600 botao-animado
        ${classesFlutuante} ${className}
      `}
    >
      <Phone className="w-5 h-5" />
      {!flutuante && <span>{texto}</span>}
    </button>
  );
};

export default BotaoWhatsapp;
