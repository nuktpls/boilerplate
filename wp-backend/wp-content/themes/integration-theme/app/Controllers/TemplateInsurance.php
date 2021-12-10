<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class TemplateInsurance extends Controller {

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
            $segments[$key]['insurances'] = $this->getInsurances($segment->term_id);

            if(array_key_last($segments) === $key)
                $segments[$key]['more_insurances'] = $this->getInsurances();
        endforeach;

        $this->getInsurances();

        return $segments;
    }

    private function getInsurances(int $segmentID = 0): array {
        $insurances = [];
        $args = [
            'post_type'   => 'insurance',
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
            return $insurances;

        foreach($posts as $post):
            $insurances[] = [
                'id'        => $post,
                'name'      => get_the_title($post),
                'permalink' => get_the_permalink($post),
            ];
        endforeach;

        return $insurances;
    }

}
