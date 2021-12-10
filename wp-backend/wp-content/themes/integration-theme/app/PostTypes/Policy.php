<?php

namespace App\PostTypes;

class Policy extends PostTypes {

    protected $postType = 'policy';

    public function __construct() {
        parent::__construct();

        add_filter('wp_insert_post_data', [$this, 'updateHandler']);
        add_action('admin_head', [$this, 'removeFields']);
        add_filter('manage_policy_posts_columns', [$this, 'manageColumns']);
        add_action('manage_policy_posts_custom_column', [$this, 'manageColumnContent'], 10, 2);
        add_filter('manage_edit-policy_sortable_columns', [$this, 'manageSortableColumns'], 10, 2);
        add_action('pre_get_posts', [$this, 'manageSortableQuery'], 10, 2);
        add_action('admin_init', [$this, 'disableRevisions']);
        add_action('wp', [$this, 'checkAccess']);
    }

    protected function setArgs(): array {
        return [
            'show_in_rest' => false,
            'menu_icon'    => 'dashicons-id-alt',
            'labels'       => [
                'add_new_item' => __('Adicionar nova apólice'),
                'add_new'      => __('Adicionar nova'),
                'all_items'    => __('Todas as apólices'),
                'not_found'    => __('Nenhuma apólice encontrada'),
                'view_item'    => __('Ver apólice'),
                'edit_item'    => __('Editar apólice'),
            ],
            'supports'     => false,
            'capabilities' => [
                'create_posts' => false,
                'edit_post' => 'edit_posts',
                'read_post' => 'edit_posts',
                'delete_post' => 'edit_posts',
            ],
        ];
    }

    protected function setNames(): array {
        return [
            'singular' => 'Apólice',
            'plural'   => 'Apólices',
            'slug'     => 'apolice'
        ];
    }

    /**
     * Check on insert/update policy
     *
     * @param  array $data Data to save
     * @return array Modified data
     */
    function updateHandler(array $data): array {
        if($data['post_type'] !== 'policy')
            return $data;

        // Prevent post save other status
        if($data['post_status'] !== 'pending' && $data['post_status'] !== 'publish' && $data['post_status'] !== 'trash')
            $data['post_status'] = 'pending';

        return $data;
    }

    /**
     * Remove fields to prevent edit policy info.
     * Unfortunately there is no other way to do this than javascript :(
     *
     * @return void
     */
    function removeFields(): void {
        global $current_screen;

        if($current_screen->post_type !== 'policy')
            return;

        echo '<style>
                #visibility {
                    display: none;
                }
            </style>';

        echo '<script type="text/javascript">
                jQuery(document).ready(function($) {
                    $(\'option[value="draft"]\').remove();
                    $(\'#post-visibility-select, #visibility\').remove();
                    $(\'.inline-edit-date\').siblings(\'.inline-edit-group\').remove();
                });
            </script>';
    }

    /**
     * Add new columns
     *
     * @param  array $columns Default columns
     * @return array Modified columns
     */
    function manageColumns(array $columns): array {
        return array_merge($columns, ['insurance' => __('Solicitação')]);
    }

    /**
     * Add content on column
     *
     * @param  string $columnKey Column identifier
     * @param  int $postID  The item post ID
     * @return void
     */
    function manageColumnContent(string $columnKey, int $postID): void {
        if($columnKey != 'insurance')
            return;

        if(!empty($insurance = get_post_meta($postID, 'insurance', true)))
            echo wp_strip_all_tags(get_the_title($insurance));
    }

    /**
     * Change sortable columns
     *
     * @param  array $columns Sortable columns
     * @return array Modified sortable columns
     */
    function manageSortableColumns(array $columns): array {
        $columns['insurance'] = 'insurance';

        return $columns;
    }

    /**
     * Modify query on sort by columns
     *
     * @param  WP_Query $query The query
     * @return void
     */
    function manageSortableQuery(\WP_Query $query): void {
        if(!is_admin())
            return;

        $orderby = $query->get('orderby');

        if($orderby == 'insurance'):
            $query->set('orderby', 'meta_value');
            $query->set(
                'meta_query',
                [
                    'relation' => 'OR',
                    [
                        'key'     => 'insurance',
                        'compare' => 'NOT EXISTS'
                    ],
                    [
                        'key'     => 'insurance',
                        'compare' => 'EXISTS'
                    ]
                ]
            );
        endif;
    }

    /**
     * Remove post revisions
     *
     * @return void
     */
    function disableRevisions(): void{
        remove_post_type_support('policy', 'revisions');
    }

    /**
     * Restrict access to author and users with edit privileges
     *
     * @return void
     */
    function checkAccess(): void {
        global $post;
        global $wp_query;

        if(!is_singular('policy'))
            return;
        if($post->post_author == get_current_user_id() || current_user_can('edit_posts'))
            return;

        $wp_query->set_404();
        status_header(404);
        nocache_headers();
    }

}
