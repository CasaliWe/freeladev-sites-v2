import { useEffect, useState } from "react";
import Navegacao from "../components/Navegacao";
import Rodape from "../components/Rodape";
import BotaoWhatsapp from "../components/BotaoWhatsapp";
import AnimacaoScroll from "../components/AnimacaoScroll";
import { Layout, FileText, Compass, Search, Target, Users, Palette, Lightbulb, Send } from "lucide-react";

/**
 * Página de Briefing para Criação de Sites e Landing Pages
 */
const Briefing = () => {
  // Estados dos formulários
  const [formData, setFormData] = useState({
    // Informações da Empresa
    nomeEmpresa: "",
    segmento: "",
    publico: "",
    proposta: "",
    diferenciais: "",
    
    // Informações do Projeto
    tipoSite: "",
    objetivos: "",
    prazo: "",
    funcionalidades: [] as string[],
    concorrentes: "",
    
    // Informações de Design
    referencias: "",
    cores: "",
    logotipo: undefined as File | undefined,
    elemento: "",
    
    // Informações de Conteúdo
    temConteudo: "",
    conteudoFornecido: [] as string[],
    dominio: "",
    hospedagem: "",
    
    // Informações de Contato
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  
  // Lista de funcionalidades possíveis para o site
  const funcionalidadesOpcoes = [
    "Blog",
    "Galeria de Fotos",
    "Formulário de Contato",
    "Integração com WhatsApp",
    "Chat Online",
    "Área de Membros",
    "E-commerce",
    "Agendamento",
    "Newsletter",
    "Mapa de Localização",
    "Integração com Redes Sociais",
    "Sistema de Login",
    "Painel Administrativo",
    "Catálogo de Produtos/Serviços"
  ];
  
  // Lista de tipos de conteúdo que podem ser fornecidos
  const conteudosOpcoes = [
    "Textos",
    "Imagens",
    "Vídeos",
    "Logotipo",
    "Paleta de Cores",
    "Manual de Marca"
  ];
  
  // Manipulação de mudança de campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Manipulação de checkboxes (funcionalidades e conteúdo)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, arrayName: "funcionalidades" | "conteudoFornecido") => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [arrayName]: [...prev[arrayName], value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [arrayName]: prev[arrayName].filter(item => item !== value)
      }));
    }
  };
  
  // Manipulação de upload de arquivo (logotipo)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        logotipo: e.target.files![0]
      }));
    }
  };
  
  // Envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário para o backend
    fetch('https://n8n.freeladevsites.com.br/webhook-test/enviar-briefing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }
      return response.json();
    })
    .then(data => {
      alert("Briefing enviado com sucesso! Entraremos em contato em breve.");
      // Limpa o formulário após o envio
      setFormData({
        nomeEmpresa: "",
        segmento: "",
        publico: "",
        proposta: "",
        diferenciais: "",
        tipoSite: "",
        objetivos: "",
        prazo: "",
        funcionalidades: [],
        concorrentes: "",
        referencias: "",
        cores: "",
        logotipo: undefined,
        elemento: "",
        temConteudo: "",
        conteudoFornecido: [],
        dominio: "",
        hospedagem: "",
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
      });
    })
  };
  
  // Efeito para configurar o título da página e meta tags
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Briefing para Projetos Web | Freeladev - Passo Fundo/RS";
    
    // Atualiza as meta tags para SEO
    const metaDescricao = document.querySelector('meta[name="description"]');
    if (metaDescricao) {
      metaDescricao.setAttribute("content", 
        "Formulário de briefing para criação de sites e landing pages. " +
        "Forneça as informações necessárias para que possamos desenvolver " +
        "um projeto web personalizado para o seu negócio."
      );
    }
    
    // Adiciona meta tag de palavras-chave
    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", 
      "briefing, formulário, site, landing page, desenvolvimento web, " +
      "criação de website, desenvolvimento de site, Passo Fundo, RS"
    );
    document.head.appendChild(metaKeywords);
    
    // Atualiza meta tag Open Graph para compartilhamento
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "Briefing para Projetos Web | Freeladev");
    }
    
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", 
        "Preencha nosso formulário de briefing e nos ajude a entender melhor " +
        "as necessidades do seu projeto web."
      );
    }
    
    // Remoção das meta tags adicionadas ao desmontar o componente
    return () => {
      if (document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
    };
  }, []);
  
  return (
    <div className="bg-escuro text-white antialiased min-h-screen">
      {/* Cabeçalho/Navegação */}
      <Navegacao />
      
      {/* Conteúdo principal */}
      <main className="pt-20 md:pt-28">
        {/* Banner principal */}
        <section className="relative py-10 md:py-16 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-laranja/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-laranja/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <AnimacaoScroll>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-laranja">Briefing</span> de Projeto
                </h1>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-100">
                <p className="text-white/70 text-lg mb-8">
                  Preencha o formulário abaixo com as informações do seu projeto.
                  Quanto mais detalhes você fornecer, melhor conseguiremos entender
                  suas necessidades e criar um site que atenda às suas expectativas.
                </p>
              </AnimacaoScroll>
            </div>
          </div>
        </section>
        
        {/* Formulário de Briefing */}
        <section className="py-10 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <AnimacaoScroll>
              <form onSubmit={handleSubmit} className="bg-secundaria border border-white/10 rounded-xl p-6 md:p-8 shadow-lg">
                
                {/* Etapa 1: Informações da Empresa */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-laranja p-2 rounded-lg">
                      <FileText className="w-6 h-6 text-escuro" />
                    </div>
                    <h2 className="text-2xl font-semibold">1. Informações da Empresa</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-2">Nome da empresa/negócio*</label>
                      <input
                        type="text"
                        name="nomeEmpresa"
                        value={formData.nomeEmpresa}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Segmento de atuação*</label>
                      <input
                        type="text"
                        name="segmento"
                        value={formData.segmento}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                        placeholder="Ex: Advocacia, E-commerce, Clínica médica..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Público-alvo*</label>
                      <input
                        type="text"
                        name="publico"
                        value={formData.publico}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                        placeholder="Ex: Jovens de 18-35 anos, empresas de pequeno porte..."
                      />
                    </div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-2">Proposta de valor da empresa*</label>
                      <textarea
                        name="proposta"
                        value={formData.proposta}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="O que sua empresa oferece? Qual problema resolve para seus clientes?"
                      />
                    </div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-2">Diferenciais competitivos</label>
                      <textarea
                        name="diferenciais"
                        value={formData.diferenciais}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="O que diferencia sua empresa dos concorrentes?"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Etapa 2: Informações do Projeto */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-laranja p-2 rounded-lg">
                      <Layout className="w-6 h-6 text-escuro" />
                    </div>
                    <h2 className="text-2xl font-semibold">2. Informações do Projeto</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2">Tipo de site*</label>
                      <select
                        name="tipoSite"
                        value={formData.tipoSite}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="landing_page">Landing Page</option>
                        <option value="institucional">Site Institucional</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="portfolio">Portfólio</option>
                        <option value="agente">Agente IA para Whatsapp</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Prazo desejado*</label>
                      <select
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="urgente">Urgente (até 7 dias)</option>
                        <option value="curto">Curto (15 a 30 dias)</option>
                        <option value="medio">Médio (30 a 60 dias)</option>
                        <option value="longo">Longo (mais de 60 dias)</option>
                        <option value="flexivel">Flexível</option>
                      </select>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-2">Objetivos do site*</label>
                      <textarea
                        name="objetivos"
                        value={formData.objetivos}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="O que você quer alcançar com este site? (ex: gerar leads, vender produtos, informar...)"
                      />
                    </div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-4">Funcionalidades desejadas*</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-escuro p-4 rounded-lg border border-white/10">
                        {funcionalidadesOpcoes.map((opcao) => (
                          <div key={opcao} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`func-${opcao}`}
                              name="funcionalidades"
                              value={opcao}
                              checked={formData.funcionalidades.includes(opcao)}
                              onChange={(e) => handleCheckboxChange(e, "funcionalidades")}
                              className="w-4 h-4 text-laranja bg-escuro border-white/20 focus:ring-laranja focus:ring-1"
                            />
                            <label htmlFor={`func-${opcao}`} className="ml-2 text-white/80">{opcao}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-2">Sites concorrentes ou referências</label>
                      <textarea
                        name="concorrentes"
                        value={formData.concorrentes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="Informe URLs de sites concorrentes ou que você gosta (um por linha)"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Etapa 3: Informações de Design */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-laranja p-2 rounded-lg">
                      <Palette className="w-6 h-6 text-escuro" />
                    </div>
                    <h2 className="text-2xl font-semibold">3. Informações de Design</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2">Referências visuais</label>
                      <textarea
                        name="referencias"
                        value={formData.referencias}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="Descreva estilos visuais que você gosta ou informe URLs de sites com design que admira"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Cores preferidas</label>
                      <textarea
                        name="cores"
                        value={formData.cores}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="Informe cores da sua marca ou preferências de cores para o site"
                      />
                    </div>
                    
                    <div className="hidden">
                      <label className="block text-white/80 mb-2">Logotipo (se já tiver)</label>
                      <input
                        type="file"
                        name="logotipo"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-laranja hover:file:bg-laranja/80"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Elementos visuais importantes</label>
                      <input
                        type="text"
                        name="elemento"
                        value={formData.elemento}
                        onChange={handleChange}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                        placeholder="Ex: fotos específicas, ícones, ilustrações..."
                      />
                    </div>
                  </div>
                </div>
                
                {/* Etapa 4: Informações de Conteúdo */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-laranja p-2 rounded-lg">
                      <FileText className="w-6 h-6 text-escuro" />
                    </div>
                    <h2 className="text-2xl font-semibold">4. Informações de Conteúdo</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2">Você já possui conteúdo para o site?*</label>
                      <select
                        name="temConteudo"
                        value={formData.temConteudo}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="sim_completo">Sim, tenho todo o conteúdo</option>
                        <option value="sim_parcial">Sim, tenho parte do conteúdo</option>
                        <option value="nao">Não, preciso de ajuda para criar</option>
                      </select>
                    </div>
                    
                    <div className="col-span-1 md:col-span-1">
                      <label className="block text-white/80 mb-3">Que tipo de conteúdo você já possui?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-escuro p-4 rounded-lg border border-white/10">
                        {conteudosOpcoes.map((opcao) => (
                          <div key={opcao} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`cont-${opcao}`}
                              name="conteudoFornecido"
                              value={opcao}
                              checked={formData.conteudoFornecido.includes(opcao)}
                              onChange={(e) => handleCheckboxChange(e, "conteudoFornecido")}
                              className="w-4 h-4 text-laranja bg-escuro border-white/20 focus:ring-laranja focus:ring-1"
                            />
                            <label htmlFor={`cont-${opcao}`} className="ml-2 text-white/80">{opcao}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Já possui domínio?</label>
                      <input
                        type="text"
                        name="dominio"
                        value={formData.dominio}
                        onChange={handleChange}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                        placeholder="Ex: www.suaempresa.com.br (deixe em branco caso não tenha)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Já possui hospedagem?</label>
                      <input
                        type="text"
                        name="hospedagem"
                        value={formData.hospedagem}
                        onChange={handleChange}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                        placeholder="Ex: Hostinger, Hostgator... (deixe em branco caso não tenha)"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Etapa 5: Informações de Contato */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-laranja p-2 rounded-lg">
                      <Users className="w-6 h-6 text-escuro" />
                    </div>
                    <h2 className="text-2xl font-semibold">5. Informações de Contato</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2">Nome completo*</label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">E-mail*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Telefone (WhatsApp)*</label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                        placeholder="(DDD) 00000-0000"
                      />
                    </div>
                    
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-white/80 mb-2">Informações adicionais</label>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-escuro border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja resize-none"
                        placeholder="Qualquer outra informação que você considere importante para o projeto"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Botão de envio */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-laranja hover:bg-laranja/80 text-escuro font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Briefing
                  </button>
                </div>
              </form>
            </AnimacaoScroll>
          </div>
        </section>
        
        {/* Seção de como funciona */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <AnimacaoScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Como <span className="text-laranja">funciona</span>?</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Após o envio do briefing, nossa equipe iniciará o processo de criação do seu projeto.
                  Veja as etapas que seguiremos:
                </p>
              </div>
            </AnimacaoScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <AnimacaoScroll atraso="delay-100">
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 text-center hover:border-laranja/40 hover:shadow-lg hover:shadow-laranja/5 transition-all">
                  <div className="w-16 h-16 bg-laranja/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-laranja" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Análise</h3>
                  <p className="text-white/70">
                    Analisamos todas as informações enviadas no briefing para entender completamente suas necessidades.
                  </p>
                </div>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-200">
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 text-center hover:border-laranja/40 hover:shadow-lg hover:shadow-laranja/5 transition-all">
                  <div className="w-16 h-16 bg-laranja/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-7 h-7 text-laranja" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Proposta</h3>
                  <p className="text-white/70">
                    Apresentamos uma proposta com escopo, prazo e orçamento baseado nas suas necessidades.
                  </p>
                </div>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-300">
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 text-center hover:border-laranja/40 hover:shadow-lg hover:shadow-laranja/5 transition-all">
                  <div className="w-16 h-16 bg-laranja/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layout className="w-7 h-7 text-laranja" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Desenvolvimento</h3>
                  <p className="text-white/70">
                    Criamos o design e desenvolvemos seu site, com revisões e ajustes conforme necessário.
                  </p>
                </div>
              </AnimacaoScroll>
              
              <AnimacaoScroll atraso="delay-400">
                <div className="bg-secundaria border border-white/10 rounded-xl p-6 text-center hover:border-laranja/40 hover:shadow-lg hover:shadow-laranja/5 transition-all">
                  <div className="w-16 h-16 bg-laranja/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compass className="w-7 h-7 text-laranja" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Entrega</h3>
                  <p className="text-white/70">
                    Publicamos seu site e fornecemos orientações para administrá-lo e mantê-lo atualizado.
                  </p>
                </div>
              </AnimacaoScroll>
            </div>
            
            <div className="mt-12 text-center">
              <AnimacaoScroll>
                <p className="text-white/70 mb-6">
                  Prefere falar diretamente com nossa equipe? Entre em contato via WhatsApp!
                </p>
                <BotaoWhatsapp className="mx-auto" texto="Conversar no WhatsApp" />
              </AnimacaoScroll>
            </div>
          </div>
        </section>
        
        {/* CTA final */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <AnimacaoScroll>
              <div className="bg-secundaria border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Pronto para <span className="text-laranja">transformar</span> sua presença online?
                  </h2>
                  <p className="text-white/70 mb-8">
                    Preencher um briefing detalhado é o primeiro passo para o desenvolvimento de um projeto web de sucesso. 
                    Se tiver dúvidas sobre qualquer campo, não hesite em entrar em contato conosco.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="bg-laranja hover:bg-laranja/80 text-escuro font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      Preencher Briefing
                    </button>
                    <BotaoWhatsapp texto="Tirar dúvidas" />
                  </div>
                </div>
              </div>
            </AnimacaoScroll>
          </div>
        </section>
      </main>
      
      {/* Rodapé */}
      <Rodape />
      
      {/* Botão flutuante de WhatsApp */}
      <BotaoWhatsapp flutuante={true} />
    </div>
  );
};

export default Briefing;
