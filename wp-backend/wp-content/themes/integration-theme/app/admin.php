<?php

namespace App;

/**
 * Theme customizer
 */
add_action('customize_register', function (\WP_Customize_Manager $wp_customize) {
    // Add postMessage support
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->selective_refresh->add_partial('blogname', [
        'selector' => '.brand',
        'render_callback' => function () {
            bloginfo('name');
        }
    ]);
});

/**
 * Customizer JS
 */
add_action('customize_preview_init', function () {
    wp_enqueue_script('sage/customizer.js', asset_path('scripts/customizer.js'), ['customize-preview'], null, true);
});

add_filter('show_admin_bar', '__return_false');

add_filter('display_post_states', function($post_states, $post) {
    $profile_page = get_field('profile_page', 'option');
    $request_order_page = get_field('request_order_page', 'option');
    $policies_page = get_field('policies_page', 'option');

    if(!empty($profile_page) && $profile_page === $post->ID)
        $post_states['profile-page'] = 'Perfil de usuário';
    elseif(!empty($request_order_page) && $request_order_page === $post->ID)
        $post_states['request-order-page'] = 'Listagem de requisições';
    elseif(!empty($policies_page) && $policies_page === $post->ID)
        $post_states['policies-page'] = 'Listagem de respostas';

    return $post_states;
}, 10, 2);

/**
 * Restrict access to the administration screens.
 *
 * Only administrators will be allowed to access the admin screens,
 * all other users will be automatically redirected to
 * 'example.com/path/to/location' instead.
 *
 * We do allow access for Ajax requests though, since these may be
 * initiated from the front end of the site by non-admin users.
 */
add_action('admin_init', function() {
    $user_info = get_userdata(get_current_user_id());

    if($user_info->wp_user_level == 0 && (!wp_doing_ajax())):
        wp_safe_redirect(get_home_url()); // Replace this with the URL to redirect to.
        exit;
    endif;
}, 1);
