<?php

namespace App\Admin;

use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Image;

class Page {

    public function __construct() {
        $this->createSettings();
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'      => 'page_info',
            'title'    => 'Adicional',
            'fields'   => $this->createFields(),
            'style'    => 'seamless',
            'position' => 'side',
            'location' => [
                Location::if('post_type', 'page')
            ],
        ]);
    }

    function createFields() {
        return [
            Image::make('Ícone', 'icon')
                ->instructions('Defina o ícone que representa a página.<br />Obs: arquivos no formato .svg tem uma melhor integração com o site')
                ->returnFormat('id'),
        ];
    }

}
