<?php

namespace App\Controllers\Traits;

trait Footer {

  // Campos Personalizados: Sobre
  public function contentFooter() {
    return get_field( 'content_footer', 'option' );
  }

  // Campos Personalizados: Contatos
  public function contactFooter() {
    return get_field( 'contact_footer', 'option' );
  }

  // Campos Personalizados: Social
  public function socialFooter() {
    return get_field( 'social_footer', 'option' );
  }
}
