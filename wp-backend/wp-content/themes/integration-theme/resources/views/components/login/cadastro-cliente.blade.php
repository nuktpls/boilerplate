<div class="modal fade" id="cadastro-modal" tabindex="-1" aria-labelledby="cadastro-modal-label" aria-hidden="true">
  <div class="cadastro-modal modal-dialog modal-dialog-centered modal-md modal-lg">
    <div class="modal-content text-start">
      <div class="modal-header pb-0">
        <h3 class="modal-title fw-bolder fs-2 mt-xl-3 text-dark" id="cadastro-modal-label">Entrar em contato</h3>
        <button class="btn-close bg-light mb-2 rounded-circle" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="cadastro-modal__body modal-body">
        <form id="sign-up-form" class="container-fluid px-0">

          <div class="row">
            <div class="col-xl-6 mb-xl-0">
              <label for="nomeCompleto" class="form-label">Nome completo <span>*</span></label>
              <input type="text" class="form-control" placeholder="Digite seu nome completo" aria-label="Nome completo" id="nomeCompleto">
            </div>
            <div class="col-xl-6 ms-auto mt-4 mt-xl-0">
              <label for="telNo" class="form-label">Telefone <span>*</span></label>
              <input type="tel" class="form-control" placeholder="(__) ____-____" aria-label="Nome completo" id="telNo">
            </div>
          </div>
          <div class="row my-4">
            <div class="col-12">
              <label for="emailEmpresa" class="form-label">E-mail <span>*</span></label>
              <input type="email" class="form-control" placeholder="Digite seu e-mail para contato" aria-label="Digite seu e-mail" id="emailEmpresa">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label for="nomeEmpresa" class="form-label">Empresa <span>*</span></label>
              <input type="text" class="form-control" placeholder="Digite o nome da sua empresa" aria-label="Nome da sua empresa" id="nomeEmpresa">
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-12">
              <label for="dadosEmpresa" class="form-label">CNPJ ou CPF <span>*</span></label>
              <input type="text" class="form-control" placeholder="Digite o CNPJ ou CPF" aria-label="CNPJ ou CPF" id="dadosEmpresa">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label for="mensagemEmpresa" class="form-label">
                Mensagem / Motivo do contato
               <span>*</span></label>
              <textarea class="form-control" placeholder="Digite um comentário" aria-label="Comentário" id="mensagemEmpresa" rows="10"></textarea>
            </div>
          </div>

        </form>


      </div>
      <img src="@asset('images/loading.gif')" id="loading-img" alt="N1 Seguros loading" width="100">

      <div id="modal-message-error" class="alert alert-danger" role="alert">
        Mensagem de erro.
      </div>
      <div id="modal-message-success" class="" role="alert">
        Mensagem de sucesso.
      </div>

      <div class="cadastro-modal__footer modal-footer border-top justify-content-between align-items-center mt-2">
        <div class="form-check d-flex justify-content-center align-items-center m-0">
          <input class="form-check-input" type="checkbox" id="sign-up-termos" disabled>
          <label class="form-check-label fw-bold" for="sign-up-termos">
            Aceito os <a href="#" data-bs-toggle="modal" data-bs-target="#termos-modal">termos da política de privacidade</a> e<br> confirmo a leitura de enviar o formulário.
           <span>*</span></label>
        </div>
        <button id="sign-up-btn" class="btn btn-primary border-0 mt-2 mt-xl-0 mb-0 ms-auto rounded-1" type="submit" disabled="true">Enviar</button>
      </div>
    </div>
  </div>
</div>
