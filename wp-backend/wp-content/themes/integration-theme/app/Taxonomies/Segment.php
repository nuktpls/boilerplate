<?php

namespace App\Taxonomies;

class Segment extends Taxonomies {

    protected $taxonomy = 'segment';
    protected $objectType = 'insurance';

    protected function setArgs(): array {
        return [
            'show_in_rest' => true,
            'labels'       => [
                'add_new_item'  => __('Adicionar novo segmento'),
                'new_item_name' => __('Nome do segmento'),
                'parent_item'   => __('Segmento pai'),
                'edit_item'     => __('Editar segmento'),
                'update_item'   => __('Atualizar segmento'),
                'not_found'     => __('Nenhum segmento encontrado'),
            ]
        ];
    }

    protected function setNames(): array {
        return [
            'singular' => 'Segmento',
            'plural'   => 'Segmentos',
            'slug'     => 'segmento'
        ];
    }

}
