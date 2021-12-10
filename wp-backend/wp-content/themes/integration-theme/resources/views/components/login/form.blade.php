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
  {!! wp_nonce_field( 'wordpress-ajax-login-nonce', 'security' ); !!}
