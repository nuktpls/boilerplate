<?php

namespace App\Options;

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Tab;

class LoginContact extends Options {

    protected $title = 'Problemas de Acesso';
    protected $slug = 'login-contact';

    protected function createFields() {
        return [
            Tab::make( '<span class="dashicons dashicons-welcome-write-blog"></span> Documento', 'tab_content_login_contact' )
                ->placement('top'),
            Group::make( 'Documento', 'content_login_contact' )
                ->instructions( 'Insira aqui o número de Whatsapp para redirecionar o cliente. <br />Insira o texto inicial do bate-papo. <br />O seu link será gerado: https://web.whatsapp.com/send?phone=55xx98xxxxxxxxx&text=seu+texto+aqui' )
                ->fields([
                    Text::make( 'Número de Whatsapp (55xx9xxxxxxxx)', 'login-contact-number' )
                        ->required()
                        ->characterLimit(13),
                    Text::make( 'Texto Inicial (280 caracteres)', 'login-contact-text' )
                        ->required()
                        ->characterLimit(280),
                ]),
        ];
    }

}
