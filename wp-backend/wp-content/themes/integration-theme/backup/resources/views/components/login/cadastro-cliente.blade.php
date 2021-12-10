<div class="modal fade" id="cadastro-modal" tabindex="-1" aria-labelledby="cadastro-modal-label" aria-hidden="true">
  <div class="cadastro-modal modal-dialog modal-dialog-centered modal-md modal-lg">
    <div class="modal-content text-start">
      <header class="modal-header pb-0">
        <h3 class="modal-title fw-bolder fs-2 mt-xl-3 text-dark" id="cadastro-modal-label">Cadastro</h3>
        <button class="btn-close bg-light mb-2 rounded-circle" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </header>
      <div class="cadastro-modal__body modal-body">
        <div class="container-fluid px-0">
          <div class="row">
            <div class="col-xl-6 mb-xl-0">
              <label for="nomeCompleto" class="form-label">Nome completo</label>
              <input type="text" class="form-control" placeholder="Digite seu nome completo" aria-label="Nome completo" id="nomeCompleto">
            </div>
            <div class="col-xl-6 ms-auto mt-4 mt-xl-0">
              <label for="telNo" class="form-label">Telefone</label>
              <input type="tel" class="form-control" placeholder="(__) ____-____" aria-label="Nome completo" id="telNo">
            </div>
          </div>
          <div class="row my-4">
            <div class="col-12">
              <label for="emailEmpresa" class="form-label">E-mail</label>
              <input type="email" class="form-control" placeholder="Digite seu e-mail para contato" aria-label="Digite seu e-mail" id="emailEmpresa">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label for="nomeEmpresa" class="form-label">Empresa</label>
              <input type="text" class="form-control" placeholder="Digite o nome da sua empresa" aria-label="Nome da sua empresa" id="nomeEmpresa">
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-12">
              <label for="dadosEmpresa" class="form-label">CNPJ ou CPF</label>
              <input type="text" class="form-control" placeholder="Digite o CNPJ ou CPF" aria-label="CNPJ ou CPF" id="dadosEmpresa">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label for="mensagemEmpresa" class="form-label">
                Mensagem / Motivo do contato
              </label>
              <textarea class="form-control" placeholder="Digite um comentário" aria-label="Comentário" id="mensagemEmpresa" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
