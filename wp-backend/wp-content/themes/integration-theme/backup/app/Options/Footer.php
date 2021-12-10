<?php

namespace App\Options;

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Link;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Url;

class Footer extends Options {

    protected $title = 'Rodapé';
    protected $slug = 'footer';

    protected function createFields() {
        return [
            Tab::make( '<span class="dashicons dashicons-welcome-write-blog"></span> Sobre', 'tab_content_footer' )
                ->placement('top'),
            Group::make( 'Sobre', 'content_footer' )
                ->instructions( 'Informações sobre a Tema Integração' )
                ->fields([
                    Text::make( 'Título', 'title' )
                        ->required(),
                    Textarea::make( 'Descrição', 'description' )
                        ->characterLimit(170)
                        ->rows(2),
                    Link::make( 'Link do Site', 'link' ),
                ]),

            Tab::make( '<span class="dashicons dashicons-format-chat"></span> Contatos', 'tab_contact_footer' )
                ->placement('left'),
            Group::make( 'Contatos', 'contact_footer' )
                ->instructions( 'Informações para contato com a Tema Integração' )
                ->fields([
                    Text::make( 'Titulo', 'title' )
                        ->required(),
                    Text::make( 'Telefone 1', 'text_telephone_one' ),
                    Text::make( 'Telefone 2', 'text_telephone_two' ),
                    Text::make( 'Atendimento Online', 'text_meet_online' ),
                    Text::make( 'Telefone 3', 'text_telephone_three' ),
                    Text::make( 'Fale Conosco', 'text_email_contact_us' ),
                ]),

            Tab::make( '<span class="dashicons dashicons-rss"></span> Social', 'tab_social_footer' )
                ->placement('left'),
            Group::make( 'Social', 'social_footer' )
                ->instructions( 'Redes Sociais da Tema Integração' )
                ->fields([
                    Text::make( 'Título', 'title' )
                        ->required(),
                    Url::make( 'Página no Facebook', 'social_one' ),
                    Url::make( 'Página no LinkedIn', 'social_two' ),
                    Url::make( 'Página no Instagram', 'social_three' ),
                ]),
        ];
    }

}
