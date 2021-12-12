<?php

namespace App\Admin;

class Menus {

    public function __construct() {
        add_action('admin_init', [$this, 'addMetaBox']);
        add_filter('wp_setup_nav_menu_item', [$this, 'menuItemLabel']);
        add_action('wp_nav_menu_item_custom_fields', [$this, 'menuItemFields'], 10, 2);
        add_action('wp_update_nav_menu_item', [$this, 'saveMenuItemFields'], 10, 2);
        add_filter('nav_menu_css_class', [$this, 'checkItemClass']);
        add_filter('walker_nav_menu_start_el', [$this, 'navMenuStartEl'], 10, 4);
    }

    /**
     * Add menu meta box
     *
     * @return void
     */
    public function addMetaBox() {
        add_meta_box(
            'user-menu',
            'Menu de usuário',
            [$this, 'metaboxContent'],
            'nav-menus',
            'side',
            'high'
        );
    }

    /**
	 * Displays a metabox for the custom links menu item
	 *
	 * @global int        $_nav_menu_placeholder
	 * @global int|string $nav_menu_selected_id
	 */
	public function metaboxContent() {
		global $_nav_menu_placeholder, $nav_menu_selected_id;

		$_nav_menu_placeholder = 0 > $_nav_menu_placeholder ? $_nav_menu_placeholder - 1 : -1;

		?>
		<div class="posttypediv" id="user-menu">
			<div id="tabs-panel-user-menu" class="tabs-panel tabs-panel-active" style="display: none;">
				<ul id ="user-menu-checklist" class="categorychecklist form-no-clear">
					<li>
						<label class="menu-item-title">
							<input id="user-menu-item-menu" type="radio" class="menu-item-checkbox" name="menu-item[<?php echo $_nav_menu_placeholder; ?>][menu-item-object-id]" value="-1">
						</label>

						<input type="hidden" class="menu-item-type" name="menu-item[<?php echo $_nav_menu_placeholder; ?>][menu-item-type]" value="user-menu">
						<input type="hidden" class="menu-item-title" name="menu-item[<?php echo $_nav_menu_placeholder; ?>][menu-item-title]" value="Meu perfil">
						<input type="hidden" class="menu-item-url" name="menu-item[<?php echo $_nav_menu_placeholder; ?>][menu-item-url]" value="#">
					</li>
				</ul>
			</div>
			<input type="hidden" value="user-menu" name="menu-item[<?php echo $_nav_menu_placeholder; ?>][menu-item-type]" />

			<p class="button-controls wp-clearfix">
				<span class="add-to-menu">
					<input type="submit"<?php wp_nav_menu_disabled_check($nav_menu_selected_id); ?> class="button-secondary submit-add-to-menu right" value="<?= esc_attr_e('Add to Menu') ?>" name="add-user-menu-item" id="submit-user-menu" onclick="recheckMenu()" />
					<span class="spinner"></span>
				</span>
			</p>

            <script>
                function recheckMenu() {
                    document.getElementById('user-menu-item-menu').checked = true;
                }
            </script>
		</div><!-- /.custom-item-types -->
		<?php
	}

	/**
	 * Change item label
	 *
	 * @param  mixed $item Menu item data object
	 * @return mixed Modified menu item data object
	 */
	public function menuItemLabel($item) {
		if('user-menu' !== $item->type)
			return $item;

		$item->type_label = 'Menu de usuário';

		return $item;
	}

    /**
	 * Filters list of settings fields of a menu item
	 *
	 * @param int $item_id Menu item ID
	 * @param WP_Post $item Menu item data object
	 * @return void
	 */
	public function menuItemFields(int $item_id, \WP_Post $item): void {
        if('user-menu' !== $item->type)
			return;

        wp_nonce_field('show_dropdown_nonce', '_show_dropdown_nonce_name');

        echo sprintf(
            '<div class="field-custom_menu_meta description-wide" style="margin: 5px 0;">
                <div class="logged-input-holder">
                    <label for="show_dropdown-%1$s">
                        <input type="checkbox" name="show_dropdown[%1$s]" id="show_dropdown-%1$s" style="margin-right: 5px;" value="true"%2$s />
                        Exibir sub-menu
                    </label>
                </div>
            </div>',
            $item_id,
            empty(!get_post_meta($item_id, '_show_dropdown', true)) ? ' checked' : ''
        );

        echo sprintf(
            '<style>
                #menu-item-settings-%1$s .field-title-attribute,
                #menu-item-settings-%1$s .field-link-target,
                #menu-item-settings-%1$s .field-xfn,
                #menu-item-settings-%1$s .field-description {
                    display: none !important;
                }

                #menu-item-settings-%1$s .field-css-classes {
                    width: 100% !important;
                }
            </style>',
            $item_id
        );
	}

    /**
     * Save the menu item meta
     *
     * @param int $menu_id Menu ID
     * @param int $menu_item_db_id Menu item ID
     */
    function saveMenuItemFields(int $menu_id, int $menu_item_db_id): void {
        // Verify this came from our screen and with proper authorization.
        if(!isset($_POST['_show_dropdown_nonce_name']) || !wp_verify_nonce($_POST['_show_dropdown_nonce_name'], 'show_dropdown_nonce'))
            return;

        if(isset($_POST['show_dropdown'][$menu_item_db_id]) && !empty($_POST['show_dropdown'][$menu_item_db_id]))
            update_post_meta($menu_item_db_id, '_show_dropdown', 1);
        else
            delete_post_meta($menu_item_db_id, '_show_dropdown');
    }

    /**
     * Check item to add/remove class
     *
     * @param  array $classes Item classes array
     * @return array Modified item classes array
     */
    function checkItemClass(array $classes): array {
        global $wp;
        $profile_page = get_permalink(get_field('profile_page', 'option'));

        if((in_array('menu-item-type-user-menu', $classes) && rtrim(home_url(add_query_arg(array(), $wp->request)), '/') === rtrim($profile_page, '/')) ||
            (in_array('menu-item-home', $classes) && rtrim(home_url(add_query_arg(array(), $wp->request)), '/') !== rtrim($profile_page, '/')))
            $classes[] = 'current-menu-item';

        return $classes;
    }

    /**
     * navMenuStartEl Change menu item output
     *
     * @param  string $item_output The menu item's output
     * @param  WP_Post $item The current menu item
     * @param  int $depth Depth of menu item
     * @param  stdClass $args An object of wp_nav_menu() arguments
     * @return string Modified menu item's output
     */
    public function navMenuStartEl(string $item_output, \WP_Post $item, int $depth, \stdClass $args): string {
		/** This filter is documented in wp-includes/post-template.php */
		$title = apply_filters('the_title', $item->title, $item->ID);
		/** This filter is documented in wp-includes\nav-menu-template.php */
		$title = apply_filters('nav_menu_item_title', $title, $item, $args, $depth);

        $is_home = rtrim($item->url, '/') === get_home_url();

        if($item->object === 'page' || $is_home):
            if($is_home):
                $icon = \App\template('icons.bag', ['width' => 16, 'class' => 'me-2']);
            else:
                $icon = \App\template('components.media.attachment-image', [
                    'id' => get_field('icon', $item->object_id),
                    'class' => 'me-2',
                    'width' => 18,
                ]);
            endif;

            $item_output = sprintf(
                (!empty($icon) ? $icon : '') .
                '<a class="text-dark fs-4 lh-1 mt-1 transition-base" href="%1$s" target="%2$s"%3$s%4$s>%5$s</a>',
                $item->url,
                !empty($item->target) ? $item->target : '_self',
                !empty($item->attr_title) ? ' title="' . $item->attr_title . '"' : '',
                !empty($item->xfn) ? ' rel="' . $item->xfn . '"' : '',
                $title,
            );
        elseif($item->type === 'user-menu'):
            $show_dropdown = get_post_meta($item->ID, '_show_dropdown', true);
            $profile_page_id = get_field('profile_page', 'option');
            $profile_page = get_permalink($profile_page_id);

            $item_output = sprintf(
                \App\template('components.media.page-icon', ['id' => $profile_page_id, 'width' => 18, 'class' => 'me-2']) .
                '<a class="fw-bold text-dark fs-4 lh-1 mt-1 transition-base" %2$s>%1$s</a>',
                $title,
                !empty($show_dropdown) ? ' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"' : ' href="' . $profile_page . '"'
            );

            if(!empty($show_dropdown)):
                $item_output .= sprintf(
                    '<ul class="nav-user dropdown-menu">
                        <li><a class="dropdown-item fw-semibolder transition-base" href="%1$s">Meus dados</a></li>

                        <li><hr class="dropdown-divider"></li>

                        <li><a class="dropdown-item fw-semibolder transition-base" href="%2$s">Alteração da senha</a></li>

                        <li><hr class="dropdown-divider"></li>

                        <li><a class="dropdown-item fw-semibolder transition-base" href="%3$s">Dados bancários</a></li>

                        <li><hr class="dropdown-divider"></li>

                        <li>' . \App\template('components.navigation.logout-link', ['class' => 'dropdown-item']) . '</li>
                    </ul>',
                    $profile_page . '#meus-dados',
                    $profile_page . '#alteracao-da-senha',
                    $profile_page . '#dados-bancarios'
                );
            endif;
        endif;

		return $item_output;
	}

}
