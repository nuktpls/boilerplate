<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class SingleInsurance extends Controller {

    public function subtitle() {
        return get_field('subtitle');
    }

    public function description() {
        return get_field('description');
    }

    public function form() {
        return get_field('form_request_insurance', 'option');
    }

}
