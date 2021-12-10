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

<form class="login__access-form modal-content border-0" action="/action_page.php" method="post">
  <div class="form-group position-relative mb-4">
    <i class="login__access-form-icons position-absolute text-primary uil uil-at"></i>
    <input class="form-control border-0 border-bottom rounded-0" type="text" placeholder="Digite seu e-mail" name="email" required>
  </div>
  <div class="form-group position-relative mb-4">
    <i class="login__access-form-icons position-absolute text-primary uil uil-lock"></i>
    <input class="form-control border-0 border-bottom rounded-0" type="password" placeholder="Digite sua senha" name="password" required>
  </div>
  <div class="d-grid gap-2">
    <button class="btn btn-primary btn-lg fs-4" type="submit">Acessar</button>
  </div>
</form> {{-- Formulário --}}

<p class="login__access-alert border-bottom fw-bold fs-4 mb-3 pb-4">
  Esqueceu sua senha?
</p> {{-- Esqueceu senha --}}

<a class="login__access-registration border-bottom d-block fw-bolder fs-4 mb-4 pb-3" role="button" data-bs-toggle="modal" data-bs-target="#cadastro-modal">
  Não sou cliente
</a> {{-- Cadastro --}}

<p class="login__access-talk fs-4 mx-auto">
  Problemas com seu acesso? <i class="uil uil-whatsapp text-primary"></i><a class="fw-bolder text-decoration-underline" target="_blank" href="https://api.whatsapp.com/send?phone=5511950515111&text=ol%C3%A1%2C%20eu%20tenho%20uma%20duvida">Fale conosco</a>.
</p> {{-- Fale conosco --}}
