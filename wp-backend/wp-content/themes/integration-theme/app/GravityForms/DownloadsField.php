<?php

namespace App\GravityForms;

if(!class_exists('GFForms'))
	die();

class DownloadsField extends \GF_Field {

	/**
	 * @var string $type The field type.
	 */
	public $type = 'downloads';

	/**
	 * Return the field title, for use in the form editor.
	 *
	 * @return string
	 */
	public function get_form_editor_field_title() {
		return esc_attr__('Downloads');
	}

	/**
	 * Assign the field button to the Advanced Fields group.
	 *
	 * @return array
	 */
	public function get_form_editor_button() {
		return array(
			'group' => 'advanced_fields',
			'text'  => $this->get_form_editor_field_title(),
		);
	}

	/**
	 * The settings which should be available on the field in the form editor.
	 *
	 * @return array
	 */
	function get_form_editor_field_settings() {
		return array(
			'label_setting',
			'description_setting',
			'input_class_setting',
			'css_class_setting',
			'size_setting',
			'admin_label_setting',
			'conditional_logic_field_setting',
		);
	}

	/**
	 * Enable this field for use with conditional logic.
	 *
	 * @return bool
	 */
	public function is_conditional_logic_supported() {
		return true;
	}

	/**
	 * The scripts to be included in the form editor.
	 *
	 * @return string
	 */
	public function get_form_editor_inline_script_on_page_render() {
		// set the default field label for the simple type field
		$script = sprintf( "function SetDefaultValues_simple(field) {field.label = '%s';}", $this->get_form_editor_field_title()) . PHP_EOL;

		// initialize the fields custom settings
		$script .= "jQuery(document).bind('gform_load_field_settings', function(event, field, form) {" .
		           "var inputClass = field.inputClass == undefined ? '' : field.inputClass;" .
		           "jQuery('#input_class_setting').val(inputClass);" .
		           "});" . PHP_EOL;

		// saving the simple setting
		$script .= "function SetInputClassSetting(value) {SetFieldProperty('inputClass', value);}" . PHP_EOL;

		return $script;
	}

	/**
	 * Define the fields inner markup.
	 *
	 * @param array $form The Form Object currently being processed.
	 * @param string|array $value The field value. From default/dynamic population, $_POST, or a resumed incomplete submission.
	 * @param null|array $entry Null or the Entry Object currently being edited.
	 *
	 * @return string
	 */
	public function get_field_input($form, $value = '', $entry = null) {
		$id              = absint($this->id);
		$form_id         = absint($form['id']);
		$is_entry_detail = $this->is_entry_detail();
		$is_form_editor  = $this->is_form_editor();

		// Prepare the value of the input ID attribute.
		$field_id = $is_entry_detail || $is_form_editor || $form_id == 0 ? "input_$id" : 'input_' . $form_id . "_$id";

		$value = esc_attr($value);

		// Get the value of the inputClass property for the current field.
		$inputClass = $this->inputClass;

		// Prepare the input classes.
		$size         = $this->size;
		$class_suffix = $is_entry_detail ? '_admin' : '';
		$class        = $size . $class_suffix . ' ' . $inputClass;

		// Prepare the other input attributes.
		$tabindex              = $this->get_tabindex();
		$disabled_text         = $is_form_editor ? 'disabled="disabled"' : '';
        $input = "";

        if($is_form_editor || $is_entry_detail):
            $input = "<button name='input_{$id}' id='{$field_id}' class='{$class}' {$tabindex} {$disabled_text}>Downloads</button>";
        elseif(function_exists('get_field') && !empty($downloads = get_field('downloads'))):
            foreach($downloads as $download)
                $input .= "<div class='container-button-download'><a href='{$download['file']}' class='button-download' download target='_blank'>{$download['title']}</a></div>";
        else:
            $input .= "<span>Não há downloads disponíveis</span>";
        endif;

		return sprintf("<div class='ginput_container ginput_container_%s'>%s</div>", $this->type, $input);
	}

    public function get_field_content( $value, $force_frontend_label, $form ) {
		$form_id = (int) rgar( $form, 'id' );

		$field_label = $this->get_field_label( $force_frontend_label, $value );
		if ( ! in_array( $this->inputType, array( 'calculation', 'singleproduct' ), true ) ) {
			// Calculation and Single Product field add a screen reader text to the label so do not escape it.
			$field_label = esc_html( $field_label );
		}

		$validation_message_id = 'validation_message_' . $form_id . '_' . $this->id;
		$validation_message = ( $this->failed_validation && ! empty( $this->validation_message ) ) ? sprintf( "<div id='%s' class='gfield_description validation_message gfield_validation_message'>%s</div>", $validation_message_id, $this->validation_message ) : '';

		$is_form_editor  = $this->is_form_editor();
		$is_entry_detail = $this->is_entry_detail();
		$is_admin        = $is_form_editor || $is_entry_detail;

		$required_div = $this->isRequired ? '<span class="gfield_required">' . $this->get_required_indicator() . '</span>' : '';

		$admin_buttons = $this->get_admin_buttons();

		$label_tag = $this->get_field_label_tag( $form );

		$admin_hidden_markup = ( $this->visibility == 'hidden' ) ? $this->get_hidden_admin_markup() : '';

		$description = $this->get_description( $this->description, 'gfield_description' );

		if ( $this->is_description_above( $form ) ) {
			$clear         = $is_admin ? "<div class='gf_clear'></div>" : '';
			$field_content = sprintf( "%s%s<$label_tag class='%s' >%s%s</$label_tag>%s{FIELD}%s$clear", $admin_buttons, $admin_hidden_markup, esc_attr( $this->get_field_label_class() ), $field_label, $required_div, $description, $validation_message );
		} else {
			$field_content = sprintf( "%s%s<$label_tag class='%s' >%s%s</$label_tag>{FIELD}%s%s", $admin_buttons, $admin_hidden_markup, esc_attr( $this->get_field_label_class() ), $field_label, $required_div, $description, $validation_message );
		}

		return $field_content;
	}
}
