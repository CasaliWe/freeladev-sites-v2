import AnimacaoScroll from "./AnimacaoScroll";

/**
 * Componente que exibe as tecnologias utilizadas no desenvolvimento de sistemas web
 */
const SistemaTecnologias = () => {
  // Lista de tecnologias front-end
  const frontEnd = [
    {
      nome: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      descricao: "Biblioteca JavaScript para criação de interfaces interativas."
    },
    {
      nome: "Vue.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      descricao: "Framework progressivo para construção de interfaces de usuário."
    },
    {
      nome: "TypeScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      descricao: "Superset de JavaScript que adiciona tipagem estática."
    },
    {
      nome: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      descricao: "Framework CSS utilitário para design rápido e responsivo."
    }
  ];
  
  // Lista de tecnologias back-end
  const backEnd = [
    {
      nome: "PHP/Laravel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      descricao: "Framework PHP robusto para desenvolvimento de aplicações web."
    },
    {
      nome: "Node.js",
      logo: "https://nodejs.org/static/images/logo.svg",
      descricao: "Ambiente de execução JavaScript do lado do servidor."
    },
    {
      nome: "Express",
      logo: "https://expressjs.com/images/express-facebook-share.png",
      descricao: "Framework web para Node.js com recursos robustos para API."
    },
    {
      nome: "Python/Django",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      descricao: "Framework Python para desenvolvimento rápido e seguro."
    }
  ];
  
  // Lista de tecnologias de banco de dados
  const bancosDados = [
    {
      nome: "MySQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/1200px-MySQL_textlogo.svg.png",
      descricao: "Sistema de gerenciamento de banco de dados relacional."
    },
    {
      nome: "PostgreSQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      descricao: "Banco de dados objeto-relacional avançado e open source."
    },
    {
      nome: "MongoDB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      descricao: "Banco de dados NoSQL orientado a documentos e escalável."
    },
    {
      nome: "Redis",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png",
      descricao: "Armazenamento de estrutura de dados em memória para cache e sessões."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimacaoScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Tecnologias que <span className="text-laranja">Utilizamos</span>
          </h2>
        </AnimacaoScroll>
        
        <AnimacaoScroll atraso="delay-100">
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            Escolhemos as melhores tecnologias conforme as necessidades e requisitos do seu projeto
          </p>
        </AnimacaoScroll>
        
        <div className="space-y-16">
          {/* Front-End */}
          <div>
            <AnimacaoScroll>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-12 h-1 bg-laranja mr-4"></span>
                Front-End
              </h3>
            </AnimacaoScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontEnd.map((tech, idx) => (
                <AnimacaoScroll key={idx} atraso={`delay-${(idx + 1) * 100}` as "delay-100" | "delay-200" | "delay-300" | "delay-400"}>
                  <div className="bg-secundaria border border-white/5 rounded-xl p-4 text-center h-full flex flex-col">
                    <div className="bg-escuro border border-white/5 rounded-xl p-4 mb-4 flex items-center justify-center h-32">
                      <img 
                        src={tech.logo} 
                        alt={`Logo ${tech.nome}`} 
                        className="w-auto h-12 object-contain mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity"
                        onError={(e) => { 
                          (e.target as HTMLImageElement).src = "https://placehold.co/200x80/d97706/ffffff?text=" + tech.nome; 
                        }}
                      />
                    </div>
                    <h4 className="font-bold mb-2">{tech.nome}</h4>
                    <p className="text-white/60 text-sm">{tech.descricao}</p>
                  </div>
                </AnimacaoScroll>
              ))}
            </div>
          </div>
          
          {/* Back-End */}
          <div>
            <AnimacaoScroll>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-12 h-1 bg-laranja mr-4"></span>
                Back-End
              </h3>
            </AnimacaoScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {backEnd.map((tech, idx) => (
                <AnimacaoScroll key={idx} atraso={`delay-${(idx + 1) * 100}` as "delay-100" | "delay-200" | "delay-300" | "delay-400"}>
                  <div className="bg-secundaria border border-white/5 rounded-xl p-4 text-center h-full flex flex-col">
                    <div className="bg-escuro border border-white/5 rounded-xl p-4 mb-4 flex items-center justify-center h-32">
                      <img 
                        src={tech.logo} 
                        alt={`Logo ${tech.nome}`} 
                        className="w-auto h-12 object-contain mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity"
                        onError={(e) => { 
                          (e.target as HTMLImageElement).src = "https://placehold.co/200x80/d97706/ffffff?text=" + tech.nome; 
                        }}
                      />
                    </div>
                    <h4 className="font-bold mb-2">{tech.nome}</h4>
                    <p className="text-white/60 text-sm">{tech.descricao}</p>
                  </div>
                </AnimacaoScroll>
              ))}
            </div>
          </div>
          
          {/* Bancos de Dados */}
          <div>
            <AnimacaoScroll>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-12 h-1 bg-laranja mr-4"></span>
                Bancos de Dados
              </h3>
            </AnimacaoScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bancosDados.map((tech, idx) => (
                <AnimacaoScroll key={idx} atraso={`delay-${(idx + 1) * 100}` as "delay-100" | "delay-200" | "delay-300" | "delay-400"}>
                  <div className="bg-secundaria border border-white/5 rounded-xl p-4 text-center h-full flex flex-col">
                    <div className="bg-escuro border border-white/5 rounded-xl p-4 mb-4 flex items-center justify-center h-32">
                      <img 
                        src={tech.logo} 
                        alt={`Logo ${tech.nome}`} 
                        className="w-auto h-12 object-contain mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity"
                        onError={(e) => { 
                          (e.target as HTMLImageElement).src = "https://placehold.co/200x80/d97706/ffffff?text=" + tech.nome; 
                        }}
                      />
                    </div>
                    <h4 className="font-bold mb-2">{tech.nome}</h4>
                    <p className="text-white/60 text-sm">{tech.descricao}</p>
                  </div>
                </AnimacaoScroll>
              ))}
            </div>
          </div>
        </div>
        
        {/* Observação */}
        <AnimacaoScroll atraso="delay-200">
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-white/70 italic">
              As tecnologias são selecionadas com base nos requisitos específicos de cada projeto, 
              garantindo a melhor performance, segurança e facilidade de manutenção.
            </p>
          </div>
        </AnimacaoScroll>
      </div>
    </section>
  );
};

export default SistemaTecnologias;
