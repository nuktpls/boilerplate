<div class="login container-fluid">
  <div class="row">
      <section class="login__image col-12 col-xl-8 d-none d-xl-block h-100 px-0">
        @include( 'components.login.imagem' ) {{-- Imagem em destaque --}}
      </section>
      <section class="login__access align-self-center col-12 col-xl-4 px-5 text-center">
        @include( 'components.login.acesso' ) {{-- Formulário de acesso --}}
        @include( 'components.login.termos' ) {{-- Termos de Consentimento --}}
        @include( 'components.login.cadastro-cliente' ) {{-- Formulário de Cadastro (Modal) --}}
        @include( 'components.login.termos-consentimento' ) {{-- Termos de Consentimento (Modal) --}}
      </section> 
  </div>
</div>
