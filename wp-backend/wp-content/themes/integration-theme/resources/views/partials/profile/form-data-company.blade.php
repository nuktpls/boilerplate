{{-- Formulário: Dados da Empresa --}}
<div class="profile-forms__company container-fluid px-0">
  <div class="row mb-4 align-items-center">
    <div class="profile-forms__company-logo-title col-12">
      <h3 class="text-dark mb-0">Dados da Empresa</h3>
    </div> {{-- Titulo --}}

    <div class="profile-forms__company-logo-front col-md-2 mb-3 mb-md-0">
      <div class="shadow-lg position-relative d-flex justify-content-center align-items-center" href="#">
        <img class="shadow-lg rounded-circle position-absolute" src="@asset('images/nike-logo.png')" alt="Logo da Empresa">
        <a class="overlay bg-white rounded-circle text-decoration-none position-absolute d-flex justify-content-center align-items-center fw-bolder text-primary">
          Remover
        </a>
      </div>
    </div> {{-- Logo --}}

    <div class="profile-forms__company-logo-upload col-md-10">
      <label for="formFile" class="form-label">
        Logotipo da empresa
      </label>
      
      <input class="form-control" type="file" id="formFile" required>
    </div> {{-- Upload da Logo --}}
  </div> {{-- Logo da Empresa --}}

  <div class="row pt-3 mb-4">
    <div class="col">
      <label for="myCompany" class="form-label">CNPJ</label>

      <input type="email" class="form-control" placeholder="Número do CNPJ" aria-label="Número do CNPJ" id="myCompany" disabled>
    </div>
  </div> {{-- CNPJ --}}

  <div class="row mb-4">
    <div class="col">
      <label for="myCompanySocial" class="form-label">Razão social da empresa</label>

      <input type="text" class="form-control" placeholder="Digite o nome da empresa" aria-label="Digite o nome da empresa" id="myCompanySocial" required>
    </div>
  </div> {{-- Razão Social --}}

  <div class="row mb-4">
    <div class="col">
      <label for="myCompanySocialFantasy" class="form-label">Nome fantasia</label>

      <input type="text" class="form-control" placeholder="Digite o nome fantasia da empresa" aria-label="Digite o nome fantasia da empresa" id="myCompanySocialFantasy" required>
    </div>
  </div> {{-- Nome Fantasia --}}

  <div class="row mb-4">
    <div class="col-md-6 mb-md-0">
      <label for="myCompanyDepartment" class="form-label">Departamento</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- Financeiro --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="myJob" class="form-label">Cargo</label>

      <select class="form-select" aria-label="Default" required>
        <option selected>-- Líder --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div> {{-- Departamento && Cargo --}}

  <div class="row mb-4">
    <div class="col-md-6 mb-md-0">
      <label for="emailClient" class="form-label">E-mail</label>

      <input type="text" class="form-control" placeholder="Digite seu e-mail para contato" aria-label="Digite seu e-mail para contato" id="emailCliente" required>
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="phoneClient" class="form-label">Telefone/celular</label>

      <input type="text" class="form-control" placeholder="(__) _____-____" aria-label="(__) _____-____" id="phoneClient" required>
    </div>
  </div> {{-- Email Cliente && Telefone Cliente --}}

  <div class="row mb-4">
    <div class="col-md-6 mb-md-0">
      <label for="phoneComercial" class="form-label">Telefone comercial</label>

      <input type="text" class="form-control" placeholder="(__) _____-____" aria-label="(__) _____-____" id="phoneComercial">
    </div>

    <div class="col-md-6 ms-auto mt-4 mt-md-0">
      <label for="branchComercial" class="form-label">Ramal (opcional)</label>

      <input type="text" class="form-control" placeholder="-- Digite o número do ramal --" aria-label="-- Digite o número do ramal --" id="branchComercial">
    </div>
  </div> {{-- Telefone comercial && Ramal --}}

  <div class="profile-forms__company-radio pb-2">
    <span class="d-block fw-bold fs-4 text-secondary">
      Por onde prefere o contato?
    </span>

    <div class="d-md-flex">
      <div class="form-check mb-4 mb-md-0 me-md-3">
        <label class="form-check-label fs-4" for="inlineRadio1">Telefone/celular</label>

        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
      </div>

      <div class="form-check mb-4 mb-md-0 me-md-3">
        <label class="form-check-label fs-4" for="inlineRadio2">Telefone comercial</label>

        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
      </div>

      <div class="form-check">
        <label class="form-check-label fs-4" for="inlineRadio3">E-mail</label>

        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
      </div>
    </div>
  </div> {{-- Por onde prefere o contato? (Radios) --}}

  <div class="row mt-4 pb-2">
    <div class="col">
      <label for="emailAccess" class="form-label">E-mail de acesso da plataforma</label>

      <div class="row align-items-center">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Digite o e-mail cadastrado" aria-label="Digite o e-mail cadastrado" id="emailAccess" required>
        </div>

        <div class="col-md-6 d-none d-md-block">
          <p class="mb-0 d-flex">
            <i class="uil uil-lock fs-2 me-1 text-primary"></i>
            
            <a class="align-self-center fs-4" href="#"><strong>Alteração da senha</strong></a>
          </p>
        </div>
      </div>
    </div>
  </div> {{-- E-mail de acesso da plataforma && Alteração da senha --}}
</div>
 