<?php

namespace App;
// ajax log in
$ajax_login = (function(){
    $response = array();
    if (is_user_logged_in())
    {
        $user = wp_get_current_user();
        $response['type'] = 'error';
        $response['message'] = 'already logged in as ' . $user->user_email;
    } else {
        $credentials = array(
            'user_login' => $_POST['user'],
            'user_password' => $_POST['pwd'],
            'remember' => $_POST['rememberme']
        );
        $login = wp_signon($credentials, apply_filters('ajax_login_securecookie', true));
        if (!is_wp_error($login))
        {
            $response['type'] = 'success';
            $response['message'] = 'logged in as ' . $login->user_email;
            setcookie('wp_terms',  true, time()+31556926);
            $response['term_cookie'] = $_COOKIE['wp_terms'];
            setcookie('user_visit',  true, time()+31556926);
            $response['user_visit'] = $_COOKIE['user_visit'];
            wp_send_json_success($response);
        } else {
            $response['type'] = 'error';

            if (empty($credentials['user_login']) || empty($credentials['user_password']))
            {
            $response['message'] = 'You didn\'t supply username and/or password. POST them as "user" and "pwd".';
            } else {
            $response['message'] = strip_tags($login->get_error_message(), '<a>');
            }
            wp_send_json_error($response);
        }
    }
    wp_send_json($response);
});

add_action('wp_ajax_login_init', $ajax_login );
add_action('wp_ajax_nopriv_login_init', $ajax_login );

// ajax sign up

$signup_init = (function () {

    $response = array();
    if (is_user_logged_in())
    {
        $user = wp_get_current_user();
        $response['type'] = 'error';
        $response['message'] = 'already logged in as ' . $user->user_email;
        return wp_send_json_error($response);
    }
    else
    {
        $response['type'] = 'success';
        $new_user_name = stripcslashes($_POST['contactName']);
        $new_user_email = stripcslashes($_POST['businessEmail']);
        $new_user_password = $_POST['new_user_password'];
        $user_nice_name = strtolower($_POST['businessEmail']);
        $phone_number = strtolower($_POST['phoneNumber']);
        $businessEmail = strtolower($_POST['businessEmail']);
        $business_name = strtolower($_POST['businessName']);
        $business_country_register = strtolower($_POST['businessCountryRegister']);
        $contact_message = strtolower($_POST['contactMessage']);

        $user_data = array(
            'user_login' => $new_user_name,
            'user_email' => $new_user_email,
            'user_pass' => $new_user_password,
            'user_nicename' => $user_nice_name,
            'display_name' => $new_user_name,
            'phone_number' => $phone_number,
            'businessEmail' => $businessEmail,
            'business_name' => $business_name,
            'business_country_register' => $business_country_register,
            'contact_message' => $contact_message,
            'role' => 'subscriber'
        );

        $user_id = wp_insert_user($user_data);
        if (!is_wp_error($user_id))
        {
            $response['type'] = 'success';
            // echo 'we have Created an account for you.';
            $response['message'] = 'logged in as ' . $login->user_email;
            setcookie('wp_terms',  true, time()+31556926);
            $response['term_cookie'] = $_COOKIE['wp_terms'];
            wp_send_json_success($response);
        }
        else
        {
            $response['type'] = 'error';
            if(isset($user_id->errors['empty_user_login']))
            {
                $notice_key = 'User Name and Email are mandatory';
                // echo $notice_key;
                $response['message'] = 'User Name and Email are mandatory.';
            } elseif (isset($user_id->errors['existing_user_login']))
            {
                // echo'User name already exists.';
                $response['message'] = 'User name already exists.';
            }
            else
            {
                // echo'Error Occured please fill up the sign up form carefully.';
                $response['message'] = strip_tags($user_id->errors);
                return wp_send_json_error($response);
            }
        }
    }
    wp_send_json($response);









	//   $new_user_name = stripcslashes($_POST['new_user_name']);
	//   $new_user_email = stripcslashes($_POST['new_user_email']);
	//   $new_user_password = $_POST['new_user_password'];
	//   $user_nice_name = strtolower($_POST['new_user_email']);
	//   $user_data = array(
	//       'user_login' => $new_user_name,
	//       'user_email' => $new_user_email,
	//       'user_pass' => $new_user_password,
	//       'user_nicename' => $user_nice_name,
	//       'display_name' => $new_user_first_name,
	//       'role' => 'subscriber'
	//   	);
	//   $user_id = wp_insert_user($user_data);
	//   	if (!is_wp_error($user_id)) {
	//       echo 'we have Created an account for you.';
	//   	} else {
	//     	if (isset($user_id->errors['empty_user_login'])) {
	//           $notice_key = 'User Name and Email are mandatory';
	//           echo $notice_key;
	//       	} elseif (isset($user_id->errors['existing_user_login'])) {
	//           echo'User name already exixts.';
	//       	} else {
	//           echo'Error Occured please fill up the sign up form carefully.';
	//       	}
	//   	}


});

add_action('wp_ajax_signup_init', $signup_init);
add_action('wp_ajax_nopriv_signup_init', $signup_init);

// $to = 'sendto@example.com';
//   $subject = 'The subject';
//   $body = 'The email body content';
//   $headers = array('Content-Type: text/html; charset=UTF-8');

//   wp_mail( $to, $subject, $body, $headers );

$signup_request = (function(){

    $response = array();
    $response['type'] = 'success';

    $form_data = json_decode(stripslashes($_POST['formData']));
    $formValue = array_values($form_data);
    $nomeCompleto = $form_data[0]->value;
    $telNo  = $form_data[1]->value;
    $emailEmpresa  = $form_data[2]->value;
    $nomeEmpresa  = $form_data[3]->value;
    $dadosEmpresa  = $form_data[4]->value;
    $mensagemEmpresa  = $form_data[5]->value;
    $response['post_there'] = $_POST;

    $to = $_POST['configTo'];
    $subject = $_POST['configSubject'];
    // $body = 'some content';
    $body = <<<EOT
    <h1>Novo pedido de cadastro</h1>
    <p>Você recebeu um novo pedido de cadastro pelo site.</p>
    <p>Pedido feito por: <strong>$nomeCompleto</strong></p>
    <p>Empresa: <strong>$nomeEmpresa</strong></p>
    <p>CNPJ: <strong>$dadosEmpresa</strong></p>
    <p>Contato telefônico: <strong>$telNo</strong></p>
    <p>Mensagem: <strong>$mensagemEmpresa</strong></p>
    EOT;
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $headers[] = "From: Teste <mbolonha@studiovisual.com.br>";
    $headers[] = "Cc: The Bolonha <miltonbolonha@gmail.com>";
    $response['to'] = $to;
    $response['subject'] = $subject;
    $response['body'] = $body;
    $response['headers'] = $headers;

    if (wp_mail( $to, $subject, $body, $headers )) {
        $response['type'] = 'success';
        $response['message'] = $_POST['configBody'];
        setcookie('request_signup',  true, time()+31556926);
        $response['request_signup'] = $_COOKIE['request_signup'];
        return wp_send_json_success($response);
    }else{
        $response['type'] = 'error';
        $response['message'] = 'Error of sometype';
        $response['wp_mail_to'] = $_POST['configTo'];
        $response['wp_mail_subject'] = $_POST['configSubject'];
        $response['wp_mail_body'] = $_POST['configBody'];
        $response['wp_mail_headers_from'] = $_POST['configHeadersFrom'];
        $response['wp_mail_headers_cc'] = $_POST['configHeadersCC'];
        $response['message_wp_mail'] = wp_mail( $to, $subject, $body, $headers );
        return wp_send_json_error($response);

    }
        $response['type'] = 'warn';
        $response['message'] = 'some warn test';

    return wp_send_json($response);
});

add_action('wp_ajax_signup_request', $signup_request);
add_action('wp_ajax_nopriv_signup_request', $signup_request);

// ajax sign out

/* Change WordPress Login Logo Url */
$alter_login_logo_url = (function() {
    return 'http://localhost/wp-content/themes/integration-theme/dist/images/logo.png';
});
add_filter( 'login_headerurl', $alter_login_logo_url );


/* Change WordPress Login Logo Url */
$alter_login_logo_text = (function() {
    return '<img src="'. get_theme_file_uri() . '/dist/images/logo.png" alt="" />';
});
add_filter( 'login_headertext', $alter_login_logo_text );


/* Change WordPress Login Logo Url */
// $alter_loginmessage = (function() {
//     return 'something';
// });
// add_filter( 'login_message', $alter_loginmessage );

$my_login_logo = (function() { ?>
    <style type="text/css">
        html body.login{
            background-color: white;
            background-image: url(<?php echo get_theme_file_uri(  ); ?>/dist/images/login.jpg);
            background-size: cover;
        }

         #login img {
            display: block;
            height: 48px;
            width: 136px;
            margin: 0 auto;
         }
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/dist/images/logo.png);
            height:65px;
            width:320px;
            background-size: 320px 65px;
            background-repeat: no-repeat;
            padding-bottom: 30px;
        }
        html body.login #nav a,
        html body.login #backtoblog a,
        html body.login a
        {
            color: white;
            outline: none;
        }
        html body.login .button-primary,
        html body.login .button.button-large{
            padding: 15px 30px;
            font-size:16px;
            line-height: 16px;
        }
        html body.login .button-primary,
        html body.login .button-primary:hover{
            background: #ebba1f;
            border: unset;
            color: black;
            font-weight: 900;
        }
        html body.login .button-primary:hover{
            background: #eec441;
        }
        html body.login #loginform,
        html body.login #lostpasswordform
        {
            border: 0;
            border-radius: 15px;
        }
    </style>
<?php });
add_action( 'login_enqueue_scripts', $my_login_logo );
