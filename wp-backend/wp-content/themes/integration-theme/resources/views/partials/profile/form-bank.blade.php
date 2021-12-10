{{-- Quais dados bancarios deseja compartilhar? (Radios) --}}
<div class="profile-forms__bank-radio pb-2">
  <span class="d-block fw-bold fs-4 text-secondary" style="margin-bottom:13px;">
    Quais dados bancarios deseja compartilhar?
  </span>

  <div class="d-md-flex">
    <div class="form-check mb-4 mb-md-0 me-md-3">
      <label class="form-check-label fs-4" for="inlineRadio1">Dados do meu banco</label>

      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    </div>

    <div class="form-check mb-4 mb-md-0 me-md-3">
      <label class="form-check-label fs-4" for="inlineRadio2">Chave PIX</label>

      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    </div>

    <div class="form-check">
      <label class="form-check-label fs-4" for="inlineRadio3">Ambos</label>

      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" checked>
    </div>
  </div>
</div> 

{{-- Dados bancários --}}
<div class="profile-forms__bank-company container-fluid px-0">
  <div class="row mt-5">
    <h3 class="col-12 text-dark mb-4">Dados bancários</h3>

    <div class="col-12">
      <label for="bankNameData" class="form-label">Favorecido (Razão Social)</label>

      <input type="text" class="form-control" placeholder="Nome do favorecido" aria-label="Nome do favorecido" id="bankNameData" required>
    </div>
  </div> {{-- Favorecido (Razão Social) --}}

  <div class="row my-4">
    <div class="col-md-6 mb-md-0">
      <label for="bankCnpj" class="form-label">CNPJ</label>

      <input type="number" class="form-control" placeholder="Número do CNPJ" aria-label="Número do CNPJ" id="bankCnpj" required>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="bankBank" class="form-label">Banco</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- 001 - Banco do Brasil S.A. --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div> {{-- CNPJ && Banco --}}

  <div class="row pb-2">
    <div class="col-4">
      <label for="bankAgency" class="form-label">Agência</label>

      <input type="number" class="form-control" placeholder="0000" aria-label="0000" id="bankAgency" required>
    </div> {{-- Agência --}}

    <div class="col-4">
      <label for="bankAccount" class="form-label">Conta</label>

      <input type="number" class="form-control" placeholder="00.000" aria-label="00.000" id="bankAccount" required>
    </div> {{-- Conta --}}

    <div class="col-4 col-md-2">
      <label for="bankDigit" class="form-label">Dígito</label>

      <input type="number" class="form-control" placeholder="0" aria-label="0" id="bankDigit" required>
    </div> {{-- Digito --}}

    <div class="d-none d-md-block col-md-2 col-md-offset-2"></div>
  </div> {{-- Agência, Conta, Digito --}}
</div>

{{-- Cadastrar PIX --}}
<div class="profile-forms__bank-pix container-fluid px-0">
  <div class="row mt-5">
    <h3 class="col-12 text-dark mb-4">Cadastrar PIX</h3>

    <div class="col-md-6 mb-md-0">
      <label for="bankTypeKey" class="form-label">Tipo de chave</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- E-mail --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="bankKey" class="form-label">Chave</label>

      <input type="text" class="form-control" placeholder="Informe a sua chave aqui" aria-label="Informe a sua chave aqui" id="bankKey">
    </div>
  </div> {{-- Tipo de chave && Chave --}}

  <div class="row my-4">
    <div class="col-md-6 mb-md-0">
      <label for="bankTypeKeySelectOne" class="form-label">Tipo de chave</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- Selecione o tipo de chave --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="col-md-4 col-md-offset-2"></div>
  </div> {{-- Tipo de chave (1) --}}

  <div class="row mb-4">
    <div class="col-md-6 mb-md-0">
      <label for="bankTypeKeySelectTwo" class="form-label">Tipo de chave</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- Selecione o tipo de chave --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div> 

    <div class="col-md-4 col-md-offset-2"></div>
  </div> {{-- Tipo de chave (2) --}}

  <div class="row mb-3">
    <div class="col-md-6 mb-md-0">
      <label for="bankTypeKeySelectThree" class="form-label">Tipo de chave</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- Selecione o tipo de chave --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div> 

    <div class="col-md-4 col-md-offset-2"></div>
  </div> {{-- Tipo de chave (3) --}}
</div>

{{-- Linha final do Form (Dados bancários) && Botão Submit --}}
<div class="d-flex flex-column justify-content-end">
  <span class="border-bottom border-1 d-block my-4"></span>
  <button class="btn btn-primary border-0 ms-lg-auto rounded-1" type="submit">
    Alterar dados
  </button>
</div>
