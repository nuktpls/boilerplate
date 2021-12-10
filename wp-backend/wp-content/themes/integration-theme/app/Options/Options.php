<?php

namespace App\Options;

use WordPlate\Acf\Location;

abstract class Options {

    protected $icon = 'dashicons-admin-generic';
    protected $title = 'Opções';
    protected $slug = 'options';

    public function __construct() {
        if(!function_exists('acf_add_options_page'))
            return;

        $this->addPage();
        $this->createSettings();
    }

    protected function addPage() {
        acf_add_options_page([
            'icon_url'    => 'dashicons-admin-generic',
            'menu_slug'   => $this->slug,
            'parent_slug' => 'themes.php',
            'page_title'  => $this->title,
            'position'    => 30,
        ]);
    }

    protected function createSettings() {
        register_extended_field_group([
            'key'                   => $this->slug,
            'title'                 => $this->title,
            'fields'                => $this->createFields(),
            'style'                 => 'seamless',
            'location'              => [
                Location::if('options_page', $this->slug)
            ],
        ]);
    }

    abstract protected function createFields();

}
