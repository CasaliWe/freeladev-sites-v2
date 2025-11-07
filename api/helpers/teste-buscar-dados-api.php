<?php

namespace Repositories;

require __DIR__ . '/../config/config.php';
use Repositories\ProjetosRepository;
echo json_encode(ProjetosRepository::getAllApi());
