<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class TemplatePolicies extends Controller {

    public function policies(): array {
        $policies = [];

        $args = array(
            'author'         => get_current_user_id(),
            'post_type'      => 'policy',
            'posts_per_page' => -1,
            'fields'         => 'ids',
        );

        $data = get_posts($args);

        if(empty($data))
            return $policies;

        foreach($data as $policy):
            $policies[] = [
                'id'        => $policy,
                'policy_id' => get_the_title($policy),
                'permalink' => get_the_permalink($policy),
                'insurance' => get_the_title(get_post_meta($policy, 'insurance', true)),
            ];
        endforeach;

        return $policies;
    }

}
