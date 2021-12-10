<?php

namespace App\Options;

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Tab;

class Home extends Options {

    protected $title = 'Home';
    protected $slug = 'home';

    protected function createFields() {
        return [
            Tab::make( '<span class="dashicons dashicons-welcome-write-blog"></span> Documento', 'tab_content_terms' )
                ->placement('top'),
            Group::make( 'Termo', 'content_terms' )
                ->instructions( 'Insira aqui os Termos e Condições de uso do websítio. <br />Mais informações: <a href="https://app.privacypolicies.com/" target="_blank">gerador de políticas de privacidade.</a>' )
                ->fields([
                    Text::make('Endereço do arquivo: ')
                        ->required()
                ])
            ];
    }

}
