<?php

namespace Repositories;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With, Cache-Control, Authorization, Origin');


require __DIR__ . '/../config/config.php';

use Repositories\ContatosRepository;
use Repositories\EnderecoRepository;
use Repositories\ProjetosRepository;
use Repositories\AvaliacaoRepository;

$contatos = ContatosRepository::getContatos();
$endereco = EnderecoRepository::getEndereco();
$projetos = ProjetosRepository::getAllApi();
$avaliacoes = AvaliacaoRepository::getAll();

// juntando todos os dados
$dados = [
    'contatos' => $contatos,
    'endereco' => $endereco,
    'projetos' => $projetos,
    'avaliacoes' => $avaliacoes,
];

echo json_encode($dados);
