<?php

namespace App\PostTypes;

class Insurance extends PostTypes {

    protected $postType = 'insurance';

    protected function setArgs(): array {
        return [
            'show_in_rest' => true,
            'menu_icon'    => 'dashicons-shield-alt',
            'labels'       => [
                'add_new_item' => __('Adicionar nova solicitação de pedido'),
                'add_new'      => __('Adicionar novo'),
                'all_items'    => __('Todos as requisições'),
                'not_found'    => __('Nenhuma solicitação de pedido encontrado'),
                'view_item'    => __('Ver solicitação de pedido'),
            ]
        ];
    }

    protected function setNames(): array {
        return [
            'singular' => 'Solicitação',
            'plural'   => 'Solicitações',
            'slug'     => 'request'
        ];
    }

}
