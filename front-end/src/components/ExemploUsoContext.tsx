import { useAppContext } from "@/contexts/AppContext";
import { Button } from "./ui/button";

const ExemploUsoContext = () => {
  const { dados, atualizarDados } = useAppContext();
  
  return (
    <div className="p-4 bg-background rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Meus Dados</h2>
      
      <div className="mb-4">
        <p className="mb-2">Nome: {dados.nome}</p>
        <p className="mb-2">Cidade: {dados.cidade}</p>
        <p className="mb-2">Estado: {dados.estado}</p>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <Button 
          onClick={() => atualizarDados('nome', 'Maria Santos')}
          variant="outline"
        >
          Mudar Nome
        </Button>
        
        <Button 
          onClick={() => atualizarDados('cidade', 'Rio de Janeiro')}
          variant="outline"
        >
          Mudar Cidade
        </Button>

        <Button 
          onClick={() => atualizarDados('estado', 'RJ')}
          variant="outline"
        >
          Mudar Estado
        </Button>
      </div>
    </div>
  );
};

export default ExemploUsoContext;
