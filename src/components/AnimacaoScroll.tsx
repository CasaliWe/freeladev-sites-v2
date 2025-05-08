
import { useEffect, useRef, ReactNode } from "react";

// Interface para definir as propriedades do componente
interface AnimacaoScrollProps {
  children: ReactNode;
  className?: string; // Classes CSS opcionais
  atraso?: "delay-100" | "delay-200" | "delay-300" | "delay-400" | ""; // Atrasos pré-definidos
}

/**
 * Componente que adiciona animação aos elementos quando
 * eles entram na viewport durante o scroll
 */
const AnimacaoScroll = ({ 
  children, 
  className = "", 
  atraso = "" 
}: AnimacaoScrollProps) => {
  // Referência ao elemento que será animado
  const elementoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Função que verifica se o elemento está visível na tela
    const verificarVisibilidade = () => {
      if (!elementoRef.current) return;
      
      // Posição do elemento em relação à viewport
      const rect = elementoRef.current.getBoundingClientRect();
      
      // Altura da viewport
      const alturaJanela = window.innerHeight;
      
      // Elemento está visível quando ao menos 10% dele aparece na viewport
      if (rect.top <= alturaJanela * 0.9) {
        elementoRef.current.classList.add("visivel");
      }
    };
    
    // Primeira verificação ao carregar
    verificarVisibilidade();
    
    // Adiciona listener de scroll
    window.addEventListener("scroll", verificarVisibilidade);
    
    // Limpeza do listener quando componente é desmontado
    return () => window.removeEventListener("scroll", verificarVisibilidade);
  }, []);
  
  // Retorna o elemento com classes de animação
  return (
    <div 
      ref={elementoRef}
      className={`animacao-entrada ${atraso} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimacaoScroll;
