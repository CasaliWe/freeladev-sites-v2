<?php

require '../../../../config/bootstrap.php';
use Repositories\AvaliacaoRepository;

$id = $_GET['id'];

$res = AvaliacaoRepository::delete($id);

if ($res) {
    header('Location: ../../../../avaliacao.php?delete=true');
} else {
    header('Location: ../../../../avaliacao.php?error=true');
}