<?php

namespace App\Controllers\Traits;

trait LoginContact {

  // Campos Personalizados: Login problemas de acesso
  public function contentLoginContact() {
    return get_field( 'content_login_contact', 'option' );
  }

}
