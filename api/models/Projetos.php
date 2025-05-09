<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Projetos extends Model {
    protected $table = 'projetos';
    protected $fillable = [
        'titulo',
        'descricao',
        'link',
        'imagem',
        'categoria'
    ];
    public $timestamps = false;
}