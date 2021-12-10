<?php

namespace App;

// set cookies
$wp_terms_cookies = (function() {
    // declaring vars
    $response = array();
    // when terms cookie not set
    if(!isset($_COOKIE['wp_terms'])) {
        // set cookie
        setcookie('wp_terms',  true, time()+31556926);
        // set success response
        $response['type'] = 'success';
        $response['message'] = 'Terms cookie registered.';
        $response['term_cookie'] = $_COOKIE['wp_terms'];
        return wp_send_json_success($response);
    }else{
        // reset cookies
        unset($_COOKIE['wp_terms']);
        setcookie('wp_terms',  true, time()+31556926);
        // set warn/error response
        $response['type'] = 'warn';
        $response['message'] = 'Resetting terms cookie.';
        return wp_send_json_error($response);
    }
    wp_send_json($response);
});

add_action('wp_ajax_terms_cookies', $wp_terms_cookies);
add_action('wp_ajax_nopriv_terms_cookies', $wp_terms_cookies);

// get cookies status
$wp_terms_status_cookies = (function() {
    $response = array();
    // no cookie found
    if(!isset($_COOKIE['wp_terms'])) {
        $response['type'] = null;
        $response['message'] = 'not cookie';
        return wp_send_json_success($response);
    }else{
        // cookie already setted
        $response['type'] = 'warn';
        $response['message'] = 'allready terms accept';
        return wp_send_json_error($response);
    }
    wp_send_json($response);
});

add_action('wp_ajax_status_term_cookies', $wp_terms_status_cookies);
add_action('wp_ajax_nopriv_status_term_cookies', $wp_terms_status_cookies);

// 4Dev functions
// reset cookies
// $wp_reset_term_cookies = (function() {
//     $response = array();
//     if(!isset($_COOKIE['wp_terms'])) {
//         $response['type'] = null;
//         $response['message'] = 'no cookie to erase';
//         return wp_send_json_error($response);
//     }else{
//         $response['type'] = 'success';
//         unset($_COOKIE['wp_terms']);
//         setcookie('wp_terms',  null, time()+31556926);
//         $response['message'] = 'cookie erased';
//         return wp_send_json_success($response);
//     }
//     wp_send_json($response);
// });

// add_action('wp_ajax_reset_term_cookies', $wp_reset_term_cookies);
// add_action('wp_ajax_nopriv_reset_term_cookies', $wp_reset_term_cookies);
