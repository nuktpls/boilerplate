<?php

namespace App;

/**
 * @snippet       Gravity Form Bootstrap 5 Markup
 * @author        Studio Visual
 * @website       https://nuktpls.com.br
 */

function formErrors($errors) {
    $dom = new \DOMDocument();
    $dom->loadHTML('<?xml encoding="utf-8" ?>' . $errors);

    $errors = $dom->getElementsByTagName('h2');

    if($errors):
        foreach($errors as $div):
            $class = $div->getAttribute('class');

            if(stripos($class, 'gform_submission_error') === false)
                continue;

            $div->setAttribute('class', $class . ' alert alert-danger h3 fw-normal');

            break;
        endforeach;
    endif;

    return $dom->saveHtml();
}
add_filter('gform_form_validation_errors_markup', __NAMESPACE__ . '\\formErrors', 10);

function formSubmitButton($button) {
    return str_replace('gform_button', 'gform_button btn btn-primary m-0 ', $button);
}
add_filter('gform_submit_button', __NAMESPACE__ . '\\formSubmitButton', 10);

/**
 * Filters form field containers
 * Adds Bootstrap Grid classes to containers
 */
function formRow($form_string) {
    return str_replace('gform_fields', 'gform_fields row', $form_string);
}
add_filter('gform_get_form_filter', __NAMESPACE__ . '\\formRow', 10);

function formColumns($field_container, $field, $form, $css_class, $style, $field_content) {
    if(is_admin())
        return $field_container;

    $field_container = str_replace('gfield ', 'gfield col-12 ', $field_container);

    if(strpos($css_class, 'gfield--width-half'))
        $field_container = str_replace('gfield ', 'gfield col-lg-6 ', $field_container);

    if(!strpos($field_content, 'ginput_complex'))
        $field_container = str_replace('gfield ', 'gfield mb-4 ', $field_container);

    return $field_container;
}
add_filter('gform_field_container', __NAMESPACE__ . '\\formColumns', 10, 6);

/**
 * Filters form fields
 * Adds Bootstrap classes to input, textarea, select, radio
 */
function fieldsMarkup($field_content, $field) {
    if(is_admin())
        return $field_content;

    $bootstrap_classes = array(
        'text'      => [
            'tag'           => 'form-control',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'email'      => [
            'tag'           => 'form-control',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'number'      => [
            'tag'           => 'form-control',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'textarea'      => [
            'tag'           => 'form-control',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'fileupload'      => [
            'tag'           => 'form-control position-relative',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'name'      => [
            'tag'           => 'form-control',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'select'      => [
            'tag'           => 'form-select',
            'label'         => 'form-label',
            'text'          => 'form-text',
        ],
        'checkbox'      => [
            'tag'           => 'form-check-input',
            'label'         => 'form-check-label',
            'text'          => 'form-text',
        ],
        'radio'      => [
            'tag'           => 'form-check-input mt-0',
            'label'         => 'form-check-label lh-fix fs-4',
            'text'          => 'form-text',
        ],
    );

    $tags = array(
        'text'       => 'input',
        'email'      => 'input',
        'number'     => 'input',
        'checkbox'   => 'input',
        'radio'      => 'input',
        'name'       => 'input',
        'fileupload' => 'input',
        'textarea'   => 'textarea',
        'select'     => 'select'
    );

    $dom = new \DOMDocument();
    $dom->loadHTML('<?xml encoding="utf-8" ?>' . $field_content);

    // Labels - add "form-label/form-check-label" class
    $labels = $dom->getElementsByTagName('label');
    if($labels):
        foreach($labels as $label):
            $class_label = $label->getAttribute('class');

            $class_label_new = (array_key_exists($field->type, $bootstrap_classes)) ? $bootstrap_classes[$field->type]['label'] : '';
            $label->setAttribute('class', $class_label_new . ' ' . $class_label);

            $childNodeList = $label->getElementsByTagName('span');

            for($i = 0; $i < $childNodeList->length; $i++):
                $item = $childNodeList->item($i);

                if(stripos($item->getAttribute('class'), 'gfield_required') !== false)
                    $label->removeChild($item);
            endfor;
        endforeach;
    endif;

    // Labels - add "form-label/form-check-label" class
    $labels = $dom->getElementsByTagName('legend');
    if($labels):
        foreach($labels as $label):
            $class_label = $label->getAttribute('class');

            if(stripos($class_label, 'gfield_label') === false)
                continue;

            if(stripos($class_label, 'gfield_label_before_complex') !== false):
                $label->parentNode->removeChild($label);
                continue;
            endif;

            $label->setAttribute('class', 'form-label mb-3 ' . $class_label);

            $childNodeList = $label->getElementsByTagName('span');

            for($i = 0; $i < $childNodeList->length; $i++):
                $item = $childNodeList->item($i);

                if(stripos($item->getAttribute('class'), 'gfield_required') !== false)
                    $label->removeChild($item);
            endfor;
        endforeach;
    endif;

    // Divs
    // Descriptions - add "form-text/invalid-feedback" class
    $divs = $dom->getElementsByTagName('div');
    foreach($divs as $div):
        $class = $div->getAttribute('class');
        $class_new = [];
        $class_new[] = $class;

        // Descriptions
        if(strpos($class, 'gfield_description') !== false)
            $class_new[] = (array_key_exists($field->type, $bootstrap_classes)) ? $bootstrap_classes[$field->type]['text'] : '';

        // Checkboxes & Radios
        if(strpos($class, 'gchoice') !== false)
            $class_new[] = 'form-check form-check-inline';

        $div->setAttribute('class', implode(' ', $class_new));

        // Validation
        if(strpos($class, 'gfield_validation_message') !== false)
            $div->parentNode->removeChild($div);
        if(strpos($class, 'ginput_preview') !== false):
            $div->parentNode->setAttribute('class', 'text-start');
            $div->setAttribute('class', $class . ' fs-4 d-flex align-items-center mb-2 fs-4');
        endif;
    endforeach;

    $spans = $dom->getElementsByTagName('span');
    foreach($spans as $span):
        $class = $span->getAttribute('class');
        $class_new = [];
        $class_new[] = $class;

        if(strpos($span->parentNode->getAttribute('class'), 'ginput_complex') !== false)
            $class_new[] = 'col-12 col-lg mb-4';
        if(strpos($span->getAttribute('class'), 'gform_fileupload_rules') !== false):
            $span->nodeValue = '';

            if(!empty($field->allowedExtensions))
                $span->nodeValue = 'arquivos permitidos: ' . $field->allowedExtensions . ' ';
            if(!empty($field->maxFileSize))
                $span->nodeValue .= 'até ' . \GFCommon::format_file_size($field->maxFileSize > 0 ? $field->maxFileSize * 1048576 : wp_max_upload_size());

            $span->nodeValue = ucfirst($span->nodeValue);

            $class_new[] = 'fs-5 d-block fw-bold mt-2 pt-0 text-end';
        endif;

        $span->setAttribute('class', implode(' ', $class_new));
    endforeach;

    $headers = $dom->getElementsByTagName('h3');
    foreach($headers as $header):
        $class = $header->getAttribute('class');

        if(strpos($class, 'gsection_title') !== false)
            $header->setAttribute('class', $class . ' mt-4 mb-0 h4 fw-bold');
        if(empty($header->nodeValue))
            $header->parentNode->removeChild($header);
    endforeach;

    $buttons = $dom->getElementsByTagName('button');
    foreach($buttons as $button):
        $class = $button->getAttribute('class');

        if(strpos($class, 'gform_delete_file') !== false)
            $button->setAttribute('class', $class . ' btn btn-danger me-2');
    endforeach;

    // Tags - add "form-control/form-select/form-check-input" class
    $field_type_tag = (array_key_exists($field->type, $tags)) ? $tags[$field->type] : null;
    $field_tags = !empty($field_type_tag) ? $dom->getElementsByTagName($field_type_tag) : null;

    if(!empty($field_tags)):
        foreach($field_tags as $field_tag):
            if($field_tag->getAttribute('type') == 'hidden')
                continue;

            $class = $field_tag->getAttribute('class');
            $class_new = [];
            $class_new[] = $class;

            // Tag class
            if(array_key_exists($field->type, $bootstrap_classes))
                $class_new[] = $bootstrap_classes[$field->type]['tag'];

            // Validation class
            if($field->failed_validation)
                $class_new[] = 'is-invalid';

            $field_tag->setAttribute('class', implode(' ', $class_new));

            // Checkboxes & Radios required tag
            if($field->isRequired)
                $field_tag->setAttribute('required', 'required');


            $validationNode = $dom->createElement('div');
            $validationNode->setAttribute('class', 'invalid-feedback text-start');

            $validationNode->nodeValue = !empty($field->errorMessage) ? $field->errorMessage : (!empty($field->validation_message) ? $field->validation_message : 'Este campo é obrigatório');
            $field_tag->parentNode->appendChild($validationNode);
        endforeach;
    endif;

    return $dom->saveHtml();
}
add_filter('gform_field_content', __NAMESPACE__ . '\\fieldsMarkup', 10, 2);

/**
 * Filters the next, previous and submit buttons.
 * Replaces the forms <input> buttons with <button> while maintaining attributes from original <input>.
 * Adds Bootstrap btn and btn-primary classes
 */
function buttonMarkup($button) {
    $dom = new \DOMDocument();
    $dom->loadHTML('<?xml encoding="utf-8" ?>' . $button);
    $input = $dom->getElementsByTagName('input')->item(0);
    $new_button = $dom->createElement('button');
    $new_button->appendChild($dom->createTextNode($input->getAttribute('value')));
    $input->removeAttribute('value');

    foreach ($input->attributes as $attribute):
        // Add class btn btn-primary
        if($attribute->name == 'class')
            $attribute->value .= ' btn btn-primary d-flex align-items-center justify-content-center ms-auto';

        $new_button->setAttribute($attribute->name, $attribute->value);
    endforeach;

    $input->parentNode->replaceChild($new_button, $input);

    return $dom->saveHtml($new_button);
}
add_filter('gform_next_button', __NAMESPACE__ . '\\buttonMarkup', 10);
add_filter('gform_previous_button', __NAMESPACE__ . '\\buttonMarkup', 10);
add_filter('gform_submit_button', __NAMESPACE__ . '\\buttonMarkup', 10);

function addMasks( $masks ) {
    $masks['Brazilian phone'] = '(99) 99999-9999';
    return $masks;
}
add_filter('gform_input_masks', __NAMESPACE__ . '\\addMasks');
