<?php

namespace App\Admin;

use WordPlate\Acf\Fields\File;
use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;

class PostInsurance {

    public function __construct() {
        $this->createSettings();
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'      => 'insurance_info',
            'title'    => 'Adicional',
            'fields'   => $this->createFields(),
            'style'    => 'seamless',
            'position' => 'side',
            'location' => [
                Location::if('post_type', 'insurance')
            ],
        ]);
    }

    function createFields() {
        return [
            Image::make('Ícone', 'icon')
                ->instructions('Defina o ícone que representa o seguro.<br />Obs: arquivos no formato .svg tem uma melhor integração com o site')
                ->returnFormat('id'),
            Text::make('Subtítulo', 'subtitle'),
            Textarea::make('Descrição', 'description'),

            Repeater::make('Arquivos', 'downloads')
                ->fields([
                    File::make('Arquivo', 'file')
                ])
        ];
    }

}
