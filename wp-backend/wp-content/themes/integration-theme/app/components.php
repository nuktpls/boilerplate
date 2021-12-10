<?php

namespace App;

add_action('after_setup_theme', function () {
    sage('blade')->compiler()->component('components.containers.intro', 'introcontent');

    sage('blade')->compiler()->include('components.containers.intro', 'intro');

    sage('blade')->compiler()->include('components.media.attachment-image', 'attachmentimage');
    sage('blade')->compiler()->include('components.media.page-icon', 'page_icon');

    sage('blade')->compiler()->include('components.navigation.breadcrumb', 'breadcrumb');
    sage('blade')->compiler()->include('components.navigation.logout-link', 'logoutlink');
});
