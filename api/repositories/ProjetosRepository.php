<?php
namespace Repositories;

use Models\Projetos;

require __DIR__.'/../vendor/autoload.php';
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__.'/../');
$dotenv->load();

class ProjetosRepository {

    // buscando todos os projetos
    public static function getAll(){
        return Projetos::all();
    }

    // all api
    public static function getAllApi(){
        $dados = Projetos::all();
        $res = [];
        foreach($dados as $dado){
            $url = $_ENV['BASE_URL'] . 'assets/imagens/arquivos/projetos/' . $dado->imagem;

            $res[] = [
                'id' => $dado->id,
                'titulo' => $dado->titulo,
                'descricao' => $dado->descricao,
                'link' => $dado->link,
                'imagem' => $url,
                'categoria' => $dado->categoria,
            ];
        }
        return $res;
    }

    // criando um novo projeto
    public static function create($titulo, $descri, $link, $categoria, $imagem){

        $dados = [
            'titulo' => $titulo,
            'descricao' => $descri,
            'link' => $link,
            'imagem' => $imagem,
            'categoria' => $categoria,
        ];
        $res = Projetos::create($dados);

        if($res){
            return true;
        } else {
            return false;
        }

    }

    // deletando um projeto
    public static function delete($id){
        $projeto = Projetos::find($id);
        $res = $projeto->delete();

        if($res){
            return true;
        } else {
            return false;
        }
    }

    // atualizando um projeto usando o ::update com o id
    public static function update($dados, $id){
        $update = Projetos::where('id', $id)->update($dados);

        if($update){
            return true;
        } else {
            return false;
        }
    }
    
}