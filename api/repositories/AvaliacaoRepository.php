<?php
namespace Repositories;

use Models\Avaliacao;

class AvaliacaoRepository {

    // buscando todos 
    public static function getAll(){
        return Avaliacao::all();
    }

    // criando um novo 
    public static function create($nome, $empresa, $cargo, $avaliacao, $comentario){

        $dados = [
            'nome' => $nome,
            'empresa' => $empresa,
            'cargo' => $cargo,
            'avaliacao' => $avaliacao,
            'comentario' => $comentario,
        ];
        $res = Avaliacao::create($dados);

        if($res){
            return true;
        } else {
            return false;
        }

    }

    // deletando
    public static function delete($id){
        $projeto = Avaliacao::find($id);
        $res = $projeto->delete();

        if($res){
            return true;
        } else {
            return false;
        }
    }

    // atualizando um projeto usando o ::update com o id
    public static function update($dados, $id){
        $update = Avaliacao::where('id', $id)->update($dados);

        if($update){
            return true;
        } else {
            return false;
        }
    }
    
}