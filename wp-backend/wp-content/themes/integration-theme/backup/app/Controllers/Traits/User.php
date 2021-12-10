<?php

namespace App\Controllers\Traits;

trait User {

  public function user() {
    $data = wp_get_current_user();

    if(is_a($data, 'WP_User'))
        $data->avatar = get_field('user_avatar', 'user_' . $data->ID);

    return $data;
  }

}
