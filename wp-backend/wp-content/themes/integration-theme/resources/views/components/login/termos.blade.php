<div id="termos-login" class="termos-login flex-row fixed-bottom justify-content-md-between align-items-center">
  <p class="termos-login__paragrafo fs-4 mb-0 text-start text-white">
    Ao clicar em <span class="fw-bold">"Aceitar"</span>,
    você concorda com
    <a  class="termos-login__link text-decoration-underline text-white"
        href="@notempty($content_terms['endereco_do_arquivo']){!! $content_terms['endereco_do_arquivo'] !!}@endnotempty {{-- Terms title --}}"
        target="_blank"
        rel="noopener"
      >nossas políticas de armazenamento de cookies</a> em seus dispositivos.
  </p>
  <a id="termos-login__button" class="termos-login__button btn btn-primary btn-sm border-0 ms-2 ms-xl-0 rounded text-white">
    Aceitar
  </a>
</div>

