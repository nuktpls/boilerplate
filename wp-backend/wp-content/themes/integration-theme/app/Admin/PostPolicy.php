<?php

namespace App\Admin;

use WordPlate\Acf\Fields\DatePicker;
use WordPlate\Acf\Fields\File;
use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Text;

class PostPolicy {

    public function __construct() {
        add_action('add_meta_boxes_policy', [$this, 'addMetaBoxes']);

        $this->createDownloadsSettings('downloads_endorsement', 'Endossos');
        $this->createDownloadsSettings('downloads_financial', 'Financeiro');
        $this->createDownloadsSettings('downloads_general', 'Documentos gerais');

        $this->createPolicyDownloadSettings();
    }

    /**
     * Add new metaboxes
     *
     * @return void
     */
    function addMetaBoxes(): void {
        add_meta_box(
            'user-info',
            __('Informações do usuário'),
            [$this, 'userInfoMetaBox']
        );
    }

    /**
     * Set user info metabox content
     *
     * @param  WP_Post $post The current post
     * @return void
     */
    function userInfoMetaBox(\WP_Post $post): void {
        require_once(\GFCommon::get_base_path() . '/entry_detail.php'); // Require class to show entry table

        $entry = \GFAPI::get_entry(get_post_meta($post->ID, 'entry', true)); // Get entry
        $form = \GFAPI::get_form(get_post_meta($post->ID, 'form', true)); // Get form

        $min = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG || isset($_GET['gform_debug']) ? '' : '.min'; // Load entry style
        ?>

        <link rel="stylesheet" href="<?= \GFCommon::get_base_url() ?>/css/admin<?= $min; ?>.css?ver=<?= \GFForms::$version ?>" type="text/css" />
        <style>
            .entry-view-section-break {
                display: none;
            }
        </style>

        <?php
        $_GET['gf_page'] = 'print-entry'; // Set this to show admin labels on table entry
        echo '<div class="gform-settings__content">';
        \GFEntryDetail::lead_detail_grid($form, $entry); // Load entry table
        echo '</div>';
    }

    function createDownloadsSettings(string $key = 'downloads', string $title = 'Documentos'): void {
        register_extended_field_group([
            'key'      => $key,
            'title'    => $title,
            'fields'   => $this->createDownloadsFields($key),
            'style'    => 'default',
            'location' => [
                Location::if('post_type', 'policy')
            ],
        ]);
    }

    function createPolicyDownloadSettings(): void {
        register_extended_field_group([
            'key'      => 'download_policy',
            'title'    => 'Resposta',
            'fields'   => $this->createPolicyDownloadFields(),
            'style'    => 'default',
            'position' => 'side',
            'location' => [
                Location::if('post_type', 'policy')
            ],
        ]);
    }

    function createDownloadsFields(string $key = 'downloads'): array {
        return [
            Repeater::make('', $key)
                ->fields([
                    Text::make('Título', 'title')
                        ->required()
                        ->wrapper([
                            'width' => 33,
                        ]),
                    DatePicker::make('Data de publicação', 'date')
                        ->displayFormat('d/m/Y')
                        ->required()
                        ->wrapper([
                            'width' => 33,
                        ]),
                    File::make('Arquivo', 'file')
                        ->returnFormat('url')
                        ->required()
                        ->wrapper([
                            'width' => 33,
                        ]),
                ])
                ->collapsed('title')
                ->layout('block')
                ->buttonLabel('Adicionar arquivo'),
        ];
    }

    function createPolicyDownloadFields(): array {
        return [
            DatePicker::make('Data de publicação', 'policy_date')
                ->displayFormat('d/m/Y'),
            File::make('Arquivo', 'policy_file')
                ->returnFormat('url'),
        ];
    }

}
