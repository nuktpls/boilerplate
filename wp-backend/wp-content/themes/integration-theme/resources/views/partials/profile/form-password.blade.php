{{-- Formulário: Alteração da senha--}}
<div class="profile-forms__password container-fluid px-0">
  <div class="row mt-5">
    <h3 class="col-12 text-dark mb-4">Alteração da senha</h3>

    <div class="col-12">
      <label for="passwordNew" class="form-label">Nova senha</label>

      <input type="password" class="form-control" placeholder="Digite uma nova senha" aria-label="Digite uma nova senha" id="passwordNew" required>
    </div>
  </div> {{-- Alteração da senha --}}

  <div class="row mt-4">
    <div class="col-12">
      <label for="passwordCorfimation" class="form-label">Confirme sua nova senha</label>

      <input type="password" class="form-control" placeholder="Confirme sua nova senha" aria-label="Confirme sua nova senha" id="passwordCorfimation" required>
    </div>
  </div> {{-- Confirme sua nova senha --}}

  <div class="row mt-4">
    <div class="col-12">
      <label for="passwordCurrent" class="form-label">Digite sua senha atual de acesso</label>

      <input type="password" class="form-control" placeholder="Digite o e-mail comercial" aria-label="Digite o e-mail comercial" id="passwordCurrent" required>
    </div>
  </div> {{-- Digite sua senha atual de acesso --}}

  <div class="d-flex flex-column justify-content-end">
    <span class="border-bottom border-1 d-block my-4"></span>
    
    <button class="btn btn-primary border-0 ms-lg-auto rounded-1" type="submit" data-bs-toggle="modal" data-bs-target="#modal-password">
      Alterar senha
    </button>
  </div> {{-- Linha final do Form (Alteração da senha) && Botão Submit --}}
</div>

@include( 'components.modals.modal-password' ) {{-- Alteração da senha (Modal) --}}
