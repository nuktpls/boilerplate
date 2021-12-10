<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class SinglePolicy extends Controller {

    public function order() {
        return get_post_meta(get_the_ID(), 'order', true);
    }

    public function financial() {
        return get_field('downloads_financial');
    }

    public function general() {
        return get_field('downloads_general');
    }

    public function endorsements() {
        $data = get_field('downloads_endorsement');

        if(!empty($data)):
            foreach($data as &$item)
                $item['title'] = __('Endosso: ') . $item['title'];
        endif;

        return $data;
    }

    public function policy() {
        $file = get_field('policy_file');

        if(empty($file))
            return;

        $data = [
            'title' => __('Download da Resposta: ') . get_the_title(),
            'date'  => get_field('policy_date'),
            'file'  => $file,
        ];

        return $data;
    }

}
