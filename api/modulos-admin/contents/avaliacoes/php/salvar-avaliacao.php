<?php

require '../../../../config/bootstrap.php';
use Repositories\AvaliacaoRepository;


$nome = filter_input(INPUT_POST, 'nome-avaliacao', FILTER_SANITIZE_SPECIAL_CHARS);
$empresa = filter_input(INPUT_POST, 'empresa-avaliacao', FILTER_SANITIZE_SPECIAL_CHARS);
$cargo = filter_input(INPUT_POST, 'cargo-avaliacao', FILTER_SANITIZE_SPECIAL_CHARS);
$avaliacao = filter_input(INPUT_POST, 'avaliacao-avaliacao', FILTER_SANITIZE_SPECIAL_CHARS);
$comentario = filter_input(INPUT_POST, 'comentario-avaliacao', FILTER_SANITIZE_SPECIAL_CHARS);


$res = AvaliacaoRepository::create($nome, $empresa, $cargo, $avaliacao, $comentario);
if ($res) {
    header('Location: ../../../../avaliacao.php?create=true');
} else {
    header('Location: ../../../../avaliacao.php?error=true');
}