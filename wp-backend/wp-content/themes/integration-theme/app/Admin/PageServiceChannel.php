<?php

namespace App\Admin;

use App\ExtendedFields\Forms;
use WordPlate\Acf\Location;

class PageServiceChannel {

    public function __construct() {
        $this->createSettings();
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'      => 'page_form',
            'title'    => 'Formulário',
            'fields'   => $this->createFields(),
            'style'    => 'seamless',
            'position' => 'side',
            'location' => [
                Location::if('page_template', 'views/template-service-channel.blade.php')
            ],
        ]);
    }

    function createFields() {
        return [
            Forms::make('Exibir formulário', 'form')
                ->instructions('Defina o formulário que será exibido na página')
                ->returnFormat('id')
                ->required(),
        ];
    }

}
