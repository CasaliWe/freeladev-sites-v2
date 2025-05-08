
import { useEffect, useState } from "react";

/**
 * Componente de rodapé do site
 * Exibe informações de copyright e opcionalmente links úteis
 */
const Rodape = () => {
  // Estado para armazenar o ano atual
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
  
  // Atualiza o ano automaticamente
  useEffect(() => {
    setAnoAtual(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-secundaria py-6">
      <div className="container mx-auto px-4">
        {/* Copyright centralizado */}
        <div className="text-center text-white/60 text-sm">
          © {anoAtual} Freeladev. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
