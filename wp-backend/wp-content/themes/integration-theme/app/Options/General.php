<?php

namespace App\Options;

use WordPlate\Acf\Fields\PostObject;

class General extends Options {

    protected $title = 'Geral';
    protected $slug = 'general';

    protected function createFields() {
        return [
            PostObject::make('Página para perfil de usuário', 'profile_page')
                ->instructions('Defina a página que será exibida para o perfil de usuário')
                ->postTypes(['page'])
                ->returnFormat('id')
                ->wrapper([
                    'width' => 50,
                ]),
            PostObject::make('Página solicitação de seguro', 'request_insurance_page')
                ->instructions('Defina a página que será usada para exibição de seguros')
                ->postTypes(['page'])
                ->returnFormat('id')
                ->wrapper([
                    'width' => 50,
                ]),
        ];
    }

}
