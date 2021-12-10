<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class TemplateOrder extends Controller {

    public function segments(): array {
        $segments = get_terms([
            'taxonomy'   => 'segment',
            'hide_empty' => true,
        ]);

        if(empty($segments))
            return $segments;

        foreach($segments as $key => $segment):
            $segments[$key] = get_object_vars($segment);

            $segments[$key]['thumbnail'] = get_field('thumbnail', $segment);
            $segments[$key]['order'] = $this->getOrder($segment->term_id);

            if(array_key_last($segments) === $key)
                $segments[$key]['more_orders'] = $this->getOrder();
        endforeach;

        $this->getOrder();

        return $segments;
    }

    private function getOrder(int $segmentID = 0): array {
        $orders = [];
        $args = [
            'post_type'   => 'order',
            'numberposts' => -1,
            'fields'      => 'ids',
        ];

        if(empty($segmentID)):
            $args['tax_query'] = [
                [
                    'taxonomy' => 'segment',
                    'operator' => 'NOT EXISTS',
                ],
            ];
        else:
            $args['tax_query'] = [
                [
                    'taxonomy'         => 'segment',
                    'field'            => 'term_id',
                    'terms'            => $segmentID,
                    'include_children' => true
                ],
            ];
        endif;

        $posts = get_posts($args);

        if(empty($posts))
            return $orders;

        foreach($posts as $post):
            $orders[] = [
                'id'        => $post,
                'name'      => get_the_title($post),
                'permalink' => get_the_permalink($post),
            ];
        endforeach;

        return $orders;
    }

}
