<?php

namespace App\Controllers\Traits;

trait Terms {

  // Campos Personalizados: Termos
  public function contentTerms() {
    return get_field( 'content_terms', 'option' );
  }

}
