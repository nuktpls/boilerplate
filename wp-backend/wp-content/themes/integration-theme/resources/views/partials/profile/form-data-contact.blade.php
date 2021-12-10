{{-- Formulário: Dados para contato --}}
<div class="profile-forms__contact container-fluid px-0">
  <div class="row mt-5">
    <h3 class="col-12 text-dark mb-3">Dados para contato</h3>

    <div class="col-md-6 mb-md-0">
      <label for="cellPhoneContact" class="form-label">Telefone celular</label>

      <input type="text" class="form-control" placeholder="(__) _____-____" aria-label="(__) _____-____" id="cellPhoneContact" required>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="phoneComercialContact" class="form-label">Telefone comercial</label>

      <input type="text" class="form-control" placeholder="(__) _____-____" aria-label="(__) _____-____" id="phoneComercialContact">
    </div>
  </div> {{-- Telefone celular && Telefone comercial --}}

  <div class="row mt-4">
    <div class="col-md-6 mb-md-0">
      <label for="emailCommercialOptionalContact" class="form-label">E-mail comercial (opcional)</label>

      <input type="text" class="form-control" placeholder="Digite o e-mail comercial" aria-label="Digite o e-mail comercial" id="emailCommercialOptionalContact" required>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="branchOptionalContact" class="form-label">Ramal (opcional)</label>

      <input type="text" class="form-control" placeholder="-- Digite o número do ramal --" aria-label="-- Digite o número do ramal --" id="branchOptionalContact">
    </div>
  </div> {{-- E-mail comercial && Ramal (opcional) --}}
</div>
