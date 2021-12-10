{{-- Formulário: Endereço da empresa --}}
<div class="profile-forms__address-company container-fluid px-0">
  <div class="row mt-5">
    <h3 class="col-md-12 text-dark mb-3">Endereço da empresa</h3>

    <div class="col-md-6 mb-md-0">
      <label for="cepAddress" class="form-label">CEP</label>

      <input type="text" class="form-control" placeholder="Digite o seu CEP" aria-label="Digite o seu CEP" id="cepAddress" required>
    </div>

    <div class="col-md-4 col-md-offset-2"></div>
  </div> {{-- CEP --}}

  <div class="row mt-4">
    <div class="col-md-6 mb-md-0">
      <label for="stateAddress" class="form-label">Estado</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- São Paulo --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="cityAddress" class="form-label">Cidade</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- São Paulo --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div> {{-- Estado && Cidade --}}

  <div class="row mt-4">
    <div class="col-md-8 mb-md-0">
      <label for="completeAddress" class="form-label">Endereço completo</label>

      <input type="text" class="form-control" placeholder="Digite o endereço completo" aria-label="Digite o endereço completo" id="completeAddress" required>
    </div>

    <div class="col-md-4 ms-auto mt-4 mt-md-0">
      <label for="complementAddress" class="form-label">Complemento</label>

      <input type="text" class="form-control" placeholder="Complemento" aria-label="Complemento" id="complementAddress" required>
    </div>
  </div> {{-- Endereço completo && Complemento --}}
</div>

{{-- Formulário: Endereço de cobrança --}}
<div class="profile-forms__address-charge container-fluid px-0">
  <div class="row mt-5">
    <h3 class="col-12 text-dark mb-3">Endereço de cobrança</h3>

    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input me-0" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
        <label class="form-check-label ms-2" for="exampleRadios1">
          O endereço de cobrança é o mesmo da empresa
        </label>
      </div>
    </div>
  </div> {{-- Endereço de cobrança --}}
</div>
