<?php

namespace App\Admin;

use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Image;

class User {

    public function __construct() {
        $this->createSettings();
        add_filter('option_show_avatars', '__return_false');
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'                   => 'addtional_info',
            'title'                 => '',
            'fields'                => $this->createFields(),
            'style'                 => 'seamless',
            'location'              => [
                Location::if('user_form', 'edit')
            ],
        ]);
    }

    function createFields() {
        return [
            Image::make('Avatar', 'user_avatar')
                ->returnFormat('id'),
        ];
    }

}
