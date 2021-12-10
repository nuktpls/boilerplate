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

add_action('init', function() {
    new \App\Admin\Menus;
    new \App\Admin\Page;
    new \App\Admin\PageServiceChannel;
    new \App\Admin\PostOrder;
    new \App\Admin\TaxonomySegment;
    new \App\Admin\User;

    new \App\Options\General;
    new \App\Options\Dashboard;
    new \App\Options\Terms;
    new \App\Options\LoginContact;
    new \App\Options\Footer;
});

add_filter('show_admin_bar', '__return_false');

add_filter('display_post_states', function($post_states, $post) {
    $profile_page = get_field('profile_page', 'option');
    $request_order_page = get_field('request_order_page', 'option');

    if(!empty($profile_page) && $profile_page === $post->ID)
        $post_states['profile-page'] = 'Perfil de usuário';
    if(!empty($request_order_page) && $request_order_page === $post->ID)
        $post_states['request-order-page'] = 'Solicitação de seguro';

    return $post_states;
}, 10, 2);
