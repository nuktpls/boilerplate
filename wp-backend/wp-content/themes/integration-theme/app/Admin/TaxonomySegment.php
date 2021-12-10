<?php

namespace App\Admin;

use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Image;

class TaxonomySegment {

    public function __construct() {
        $this->createSettings();
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'      => 'segment_settings',
            'title'    => '',
            'fields'   => $this->createFields(),
            'style'    => 'seamless',
            'location' => [
                Location::if('taxonomy', 'segment')
            ],
        ]);
    }

    function createFields() {
        return [
            Image::make('Imagem destacada', 'thumbnail')
                ->instructions('Defina a imagem de destaque do segmento')
                ->returnFormat('id'),
        ];
    }

}
