<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class TemplateResponses extends Controller {

    public function responses(): array {
        $responses = [];

        $args = array(
            'author'         => get_current_user_id(),
            'post_type'      => 'response',
            'posts_per_page' => -1,
            'fields'         => 'ids',
        );

        $data = get_posts($args);

        if(empty($data))
            return $responses;

        foreach($data as $response):
            $responses[] = [
                'id'        => $response,
                'response_id' => get_the_title($response),
                'permalink' => get_the_permalink($response),
                'order' => get_the_title(get_post_meta($response, 'order', true)),
            ];
        endforeach;

        return $responses;
    }

}
