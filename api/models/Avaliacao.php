<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Avaliacao extends Model {
    protected $table = 'avaliacao';
    protected $fillable = [
        'nome',
        'empresa',
        'cargo',
        'avaliacao',
        'comentario'
    ];
    public $timestamps = false;
}