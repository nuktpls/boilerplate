<?php

namespace App;

use Roots\Sage\Container;
use Roots\Sage\Assets\JsonManifest;
use Roots\Sage\Template\Blade;
use Roots\Sage\Template\BladeProvider;

/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
    /**
     * Ícones do Site
     * @link https://iconscout.com/unicons/getting-started/line
     */
    wp_enqueue_style( 'unicons', 'https://unicons.iconscout.com/release/v4.0.0/css/line.css' );

    wp_enqueue_style( 'sage/main.css', asset_path('styles/main.css') );

    wp_enqueue_script('sage/main.js', asset_path('scripts/main.js'), ['jquery'], null, true);

    wp_dequeue_style('dashicons');
}, 100);

add_action('get_footer', function () {
    wp_dequeue_style('dashicons');
}, 100);

/**
 * Theme setup
 */
add_action('after_setup_theme', function () {

    /**
     * Add support for core custom logo
     *
     * @link https://codex.wordpress.org/Theme_Logo
    */
    add_theme_support(
        'custom-logo', [
        'width'       => 136,
        'height'      => 48,
        'flex-width'  => true,
        'flex-height' => true,
    ]);

    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'desktop_navigation'    => __( 'Menu no Desktop', 'sage' ),
        'mobile_navigation'     => __( 'Menu no Smartphone', 'sage' )
    ]);

    /**
     * Enable plugins to manage the document title
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'gallery']);

    /**
     * Enable selective refresh for widgets in customizer
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    add_post_type_support('page', 'excerpt');

    /**
     * Use main stylesheet for visual editor
     * @see resources/assets/styles/layouts/_tinymce.scss
     */
    add_editor_style(asset_path('styles/main.css'));
}, 20);

/**
 * Register sidebars
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ];
    register_sidebar([
        'name'          => __('Primary', 'sage'),
        'id'            => 'sidebar-primary'
    ] + $config);
    register_sidebar([
        'name'          => __('Footer', 'sage'),
        'id'            => 'sidebar-footer'
    ] + $config);
});

/**
 * Updates the `$post` variable on each iteration of the loop.
 * Note: updated value is only available for subsequently loaded views, such as partials
 */
add_action('the_post', function ($post) {
    sage('blade')->share('post', $post);
});

/**
 * Setup Sage options
 */
add_action('after_setup_theme', function () {
    /**
     * Add JsonManifest to Sage container
     */
    sage()->singleton('sage.assets', function () {
        return new JsonManifest(config('assets.manifest'), config('assets.uri'));
    });

    /**
     * Add Blade to Sage container
     */
    sage()->singleton('sage.blade', function (Container $app) {
        $cachePath = config('view.compiled');
        if (!file_exists($cachePath)) {
            wp_mkdir_p($cachePath);
        }
        (new BladeProvider($app))->register();
        return new Blade($app['view']);
    });

    /**
     * Create @asset() Blade directive
     */
    sage('blade')->compiler()->directive('asset', function ($asset) {
        return "<?= " . __NAMESPACE__ . "\\asset_path({$asset}); ?>";
    });
});

add_action('init', function() {
    define('ICONS_COLOR', '#EBBA1F');
});

/**
 * Register post type and taxonomy
 */
add_action('init', function() {
    register_extended_post_type(
        'insurance',
        [
            'show_in_rest' => true,
            'menu_icon'    => 'dashicons-shield-alt',
            'labels'       => [
                'add_new_item'  => __('Adicionar novo seguro'),
                'add_new'       => __('Adicionar novo'),
                'all_items'     => __('Todos os seguros'),
                'not_found'     => __('Nenhum seguro encontrado'),
                'view_item'     => __('Ver seguro'),
            ]
        ],
        [
            'singular' => 'Seguro',
            'plural'   => 'Seguros',
            'slug'     => 'seguro'
        ]
    );

    register_extended_taxonomy(
        'segment',
        'insurance',
        [
            'show_in_rest' => true,
            'labels'       => [
                'add_new_item'  => __('Adicionar novo segmento'),
                'new_item_name' => __('Nome do segmento'),
                'parent_item'   => __('Segmento pai'),
                'edit_item'     => __('Editar segmento'),
                'update_item'   => __('Atualizar segmento'),
                'not_found'     => __('Nenhum segmento encontrado'),
            ]
        ],
        [
            'singular' => 'Segmento',
            'plural'   => 'Segmentos',
            'slug'     => 'segmento'
        ]
    );
});

/**
 * Disable post edit
 */
add_filter('register_post_type_args', function($args, $postType) {
    if($postType !== 'post')
        return $args;

    $args['public']              = false;
    $args['show_ui']             = false;
    $args['show_in_menu']        = false;
    $args['show_in_admin_bar']   = false;
    $args['show_in_nav_menus']   = false;
    $args['can_export']          = false;
    $args['has_archive']         = false;
    $args['exclude_from_search'] = true;
    $args['publicly_queryable']  = false;
    $args['show_in_rest']        = false;

    return $args;
}, 0, 2);
