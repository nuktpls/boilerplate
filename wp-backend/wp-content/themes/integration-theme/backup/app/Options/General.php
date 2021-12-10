<?php

namespace App\Options;

use App\ExtendedFields\Forms;
use WordPlate\Acf\Fields\PostObject;
use WordPlate\Acf\Fields\Tab;

class General extends Options {

    protected $title = 'Geral';
    protected $slug = 'general';

    protected function createFields() {
        return [
            Tab::make('<span class="dashicons dashicons-admin-page"></span> Páginas', 'tab_pages')
                ->placement('top'),

            PostObject::make('Página para perfil de usuário', 'profile_page')
                ->instructions('Defina a página que será exibida para o perfil de usuário')
                ->postTypes(['page'])
                ->returnFormat('id')
                ->wrapper([
                    'width' => 50,
                ]),
            PostObject::make('Página solicitação de requisição de pedido', 'request_order_page')
                ->instructions('Defina a página que será usada para exibição de requisição')
                ->postTypes(['page'])
                ->returnFormat('id')
                ->wrapper([
                    'width' => 50,
                ]),
            PostObject::make('Página de respostas', 'policies_page')
                ->instructions('Defina a página que será usada para exibição de requisição do cliente')
                ->postTypes(['page'])
                ->returnFormat('id')
                ->wrapper([
                    'width' => 50,
                ]),

            Tab::make('<span class="dashicons dashicons-forms"></span> Formulários', 'tab_forms')
                ->placement('top'),

            Forms::make('Formulário para solicitação de requisição de pedido', 'form_request_order')
                ->instructions('Defina o formulário que será exibido nas páginas de requisição')
                ->returnFormat('id'),
        ];
    }

}
