<?php

namespace App\Admin;

use WordPlate\Acf\Fields\File;
use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;

class PostOrder {

    public function __construct() {
        $this->createSettings();
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'      => 'order_info',
            'title'    => 'Adicional',
            'fields'   => $this->createFields(),
            'style'    => 'seamless',
            'position' => 'side',
            'location' => [
                Location::if('post_type', 'order')
            ],
        ]);

        register_extended_field_group([
            'key'      => 'order_files',
            'title'    => 'Documentos',
            'fields'   => $this->createFilesFields(),
            'style'    => 'seamless',
            'location' => [
                Location::if('post_type', 'order')
            ],
        ]);
    }

    function createFields() {
        return [
            Image::make('Ícone', 'icon')
                ->instructions('Defina o ícone que representa a solicitação.<br />Obs: arquivos no formato .svg tem uma melhor integração com o site')
                ->returnFormat('id'),
            Text::make('Subtítulo', 'subtitle'),
            Textarea::make('Descrição', 'description'),
        ];
    }

    function createFilesFields() {
        return [
            Repeater::make('', 'downloads')
                ->fields([
                    Text::make('Título', 'title')
                        ->required()
                        ->wrapper([
                            'width' => 50,
                        ]),
                    File::make('Arquivo', 'file')
                        ->returnFormat('url')
                        ->required()
                        ->wrapper([
                            'width' => 50,
                        ]),
                ])
                ->collapsed('title')
                ->layout('block')
                ->buttonLabel('Adicionar arquivo'),
        ];
    }

}
