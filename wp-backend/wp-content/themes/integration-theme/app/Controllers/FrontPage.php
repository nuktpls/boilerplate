<?php

namespace App\Controllers;

use App\Controllers\Traits\User;
use Sober\Controller\Controller;

class FrontPage extends Controller {

    use User;

    public function intro() {
        return get_field('intro', 'option');
    }

    public function services() {
        return get_field('services', 'option');
    }

}
