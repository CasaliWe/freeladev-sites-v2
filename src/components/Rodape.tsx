
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

/**
 * Componente de rodapé (footer) do site
 */
const Rodape = () => {
  // Ano atual para copyright
  const anoAtual = new Date().getFullYear();
  
  // Links para redes sociais da empresa
  const redesSociais = [
    { rede: "Instagram", link: "#", icone: <Instagram className="w-5 h-5" /> },
    { rede: "Facebook", link: "#", icone: <Facebook className="w-5 h-5" /> },
    { rede: "LinkedIn", link: "#", icone: <Linkedin className="w-5 h-5" /> },
    { rede: "Twitter", link: "#", icone: <Twitter className="w-5 h-5" /> }
  ];
  
  // Links para páginas do site
  const menuLinks = [
    { nome: "Início", link: "#inicio" },
    { nome: "Serviços", link: "#servicos" },
    { nome: "Portfólio", link: "#portfolio" },
    { nome: "Quem Somos", link: "#quemSomos" },
    { nome: "Contato", link: "#contato" }
  ];
  
  return (
    <footer className="bg-escuro border-t border-white/5 relative overflow-hidden">
      {/* Gradiente decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-laranja/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Conteúdo principal do rodapé */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1 - Logo e informações da empresa */}
          <div>
            <a href="#inicio" className="inline-block mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-laranja">Freela</span>
                <span className="text-white">dev</span>
              </h2>
            </a>
            
            <p className="text-white/70 mb-6 max-w-xs">
              Transformando ideias em soluções digitais inovadoras e de alto impacto visual.
            </p>
            
            {/* Redes sociais */}
            <div className="flex gap-4">
              {redesSociais.map((rede, idx) => (
                <a
                  key={idx}
                  href={rede.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Siga-nos no ${rede.rede}`}
                  className="bg-secundaria border border-white/5 rounded-full p-2
                           text-white/80 hover:text-laranja hover:border-laranja/30 
                           transition-colors duration-300"
                >
                  {rede.icone}
                </a>
              ))}
            </div>
          </div>
          
          {/* Coluna 2 - Links rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.link}
                    className="text-white/70 hover:text-laranja transition-colors duration-200"
                  >
                    {link.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/70">
              <li>Passo Fundo, RS - Brasil</li>
              <li>
                <a href="mailto:contato@freeladev.com.br" className="hover:text-laranja transition-colors">
                  contato@freeladev.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5554999999999" className="hover:text-laranja transition-colors">
                  (54) 99999-9999
                </a>
              </li>
            </ul>
            
            {/* Horário de atendimento */}
            <div className="mt-4 p-3 bg-secundaria rounded-lg border border-white/5 text-sm text-white/70">
              <p className="font-medium text-white mb-1">Horário de Atendimento</p>
              <p>Segunda à Sexta: 9h às 18h</p>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-white/5 pt-8 flex justify-center">
          {/* Copyright centralizado */}
          <p className="text-white/50 text-sm text-center">
            © {anoAtual} Freeladev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
