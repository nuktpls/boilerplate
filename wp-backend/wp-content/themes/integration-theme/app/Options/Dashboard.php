<?php

namespace App\Options;

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Relationship;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Tab;

class Dashboard extends Options {

    protected $title = 'Dashboard';
    protected $slug = 'dashboard';

    protected function createFields() {
        return [
            Tab::make('<span class="dashicons dashicons-cover-image"></span> Banner', 'tab_intro')
                ->placement('top'),
            Group::make('', 'intro')
                ->instructions('Configurações do banner')
                ->fields([
                    Image::make('Imagem de fundo', 'background')
                        ->returnFormat('id'),
                    Text::make('Prefixo', 'prefix')
                        ->instructions('Texto que será exibido antes do nome de usuário')
                        ->defaultValue('Seja bem-vindo, ')
                        ->wrapper([
                            'width' => 50,
                        ]),
                    Text::make('Título', 'title')
                        ->instructions('Texto que será abaixo do nome de usuário')
                        ->defaultValue('O que você precisa?')
                        ->wrapper([
                            'width' => 50,
                        ]),
                ]),

            Tab::make('<span class="dashicons dashicons-admin-tools"></span> Serviços', 'tab_services')
                ->placement('left'),
            Group::make('', 'services')
                ->instructions('Configurações da seção de serviços')
                ->fields([
                    Text::make('Descrição', 'description')
                        ->instructions('Texto que será exibido acima dos cards de serviços')
                        ->defaultValue('Selecione um <strong>serviço</strong> abaixo:'),
                    Relationship::make('Serviços', 'services')
                        ->instructions('Selecione os serviços que serão exibidos')
                        ->postTypes(['page'])
                        ->filters(['search'])
                        ->min(1)
                        ->required()
                        ->returnFormat('id'),
                ]),
        ];
    }

}
