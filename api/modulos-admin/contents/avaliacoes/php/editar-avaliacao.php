<?php

require '../../../../config/bootstrap.php';
use Repositories\AvaliacaoRepository;

$id = filter_input(INPUT_POST, 'id-avaliacao-editar', FILTER_SANITIZE_SPECIAL_CHARS);
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$empresa = filter_input(INPUT_POST, 'empresa', FILTER_SANITIZE_SPECIAL_CHARS);
$cargo = filter_input(INPUT_POST, 'cargo', FILTER_SANITIZE_SPECIAL_CHARS);
$avaliacao = filter_input(INPUT_POST, 'avaliacao', FILTER_SANITIZE_SPECIAL_CHARS);
$comentario = filter_input(INPUT_POST, 'comentario', FILTER_SANITIZE_SPECIAL_CHARS);

$dados = [
    'nome' => $nome,
    'empresa' => $empresa,
    'cargo' => $cargo,
    'avaliacao' => $avaliacao,
    'comentario' => $comentario,
];
$res = AvaliacaoRepository::update($dados, $id);
if ($res) {
    header('Location: ../../../../avaliacao.php?success=true');
} else {
    header('Location: ../../../../avaliacao.php?error=true');
}
