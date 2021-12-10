<?php

namespace App\GravityForms;

class FormHandler {

    public function __construct() {
        add_action('gform_post_submission', [$this, 'createPolicy'], 10, 2);
    }

    /**
     * Create a new policy on success form submit
     *
     * @param  mixed $entry The entry that was just created
     * @param  mixed $form The form which was used to create the entry
     * @return void
     */
    function createPolicy($entry, $form): void {
        if(is_admin())
            return;

        global $post;
        $formRequestOrder = get_field('form_request_order', 'option');

        if(empty($formRequestOrder) || $formRequestOrder != $form['id'])
            return;

        // Create policy with 'pending' status
        $data = array(
            'post_title'  => uniqid(),
            'post_status' => 'pending',
            'post_author' => get_current_user_id(),
            'post_type'   => 'policy',
        );

        if(empty($policyID = wp_insert_post($data)))
            return;

        update_post_meta($policyID, 'order', $post->ID); // Set order ID
        update_post_meta($policyID, 'entry', $entry['id']); // Set entry ID
        update_post_meta($policyID, 'form', $form['id']); // Set form ID
    }

}
