<div class="login__access-logo d-xl-none">
  @if ( function_exists( 'the_custom_logo' ) && has_custom_logo() )
  {!! the_custom_logo() !!}
  @endif {{-- Logo Personalizado | Customizer --}}
</div>

<h2 class="login__access-title fw-bolder mb-1 text-dark">
  Acesse sua conta
</h2> {{-- Título da pagina --}}

<p class="login__access-description fs-4">
  Bem-vindo, coloque seu e-mail e senha<br>
  para acessar a plataforma.
</p> {{-- Descrição --}}

<form id="login-form-ajax" class="login__access-form modal-content border-0" method="post">
	<div class="form-group position-relative mb-4">
    <i class="login__access-form-icons position-absolute text-primary uil uil-at"></i>
    <input id="email-input" class="form-control border-0 border-bottom rounded-0" type="text" placeholder="Digite seu e-mail" name="email" required>
  </div>
  <div class="form-group position-relative mb-4">
    <i class="login__access-form-icons position-absolute text-primary uil uil-lock"></i>
    <input id="password-input" class="form-control border-0 border-bottom rounded-0" type="password" placeholder="Digite sua senha" name="password" required>
  </div>
  <div class="d-grid gap-2">
    <button id="wp-submit" class="btn btn-primary fs-4" type="submit"
    disabled="true"
    >Acessar</button>
  </div>
</form> {{-- Formulário --}}
<div id="message-error" class="alert alert-danger" role="alert" style="display:none">
  This is a danger alert—check it out!
</div>
<div id="message-success" class="alert alert-success" role="alert" style="display:none">
  This is a success alert—check it out!
</div>

<p class="login__access-alert border-bottom fw-bold fs-4 mb-3 pb-4">
  <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>" alt="Esqueceu sua senha?">
    Esqueceu sua senha?
  </a>
</p> {{-- Esqueceu senha --}}

<a class="login__access-registration border-bottom d-block fw-bolder fs-4 mb-4 pb-3" role="button" data-bs-toggle="modal" data-bs-target="#cadastro-modal">
  Não sou cliente
</a> {{-- Cadastro --}}

<p class="login__access-talk fs-4 mx-auto">
  Problemas com seu acesso? <i class="uil uil-whatsapp text-primary"></i>
  <a  class="fw-bolder text-decoration-underline"
      target="_blank"
      rel="noopener noreferrer"
      href="https://web.whatsapp.com/send?phone={{
        $content_login_contact['login-contact-number'] {{-- Whatsapp number --}}
      }}&text={{
        $content_login_contact['login-contact-text'] {{-- Whatsapp text --}}
      }}"
    >Fale conosco</a>.
</p> {{-- Fale conosco --}}




