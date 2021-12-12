{{-- Formulário: Endereço de cobrança --}}
<div class="profile-forms__registration container-fluid px-0">
  <div class="row mt-5">
    <div class="col-12">
      <h3 class="col-12 text-dark mb-3">Ficha Cadastral</h3>
    </div>

    <div class="col-12 mb-2">
      <p class="d-block fw-bold fs-4 lh-22 mb-0 text-secondary">
        Faça download da Ficha cadastral e anexe-a embaixo para upload.
      </p>
    </div>

    <div class="col-md-6 mt-1">
      <a href="#" class="col-12 btn btn-dark fs-4 text-primary d-flex justify-content-center align-items-center" download="Download 1">
        <i class="uil uil-import fs-2 text-primary me-2"></i>Download do documento
      </a>
    </div>

    <div class="col-md-4 col-md-offset-2"></div>

    <div class="profile-forms__registration-token col-12 mt-4">
      <label for="formFile" class="form-label">
        Anexe o documento da Ficha Cadastral (opcional)
      </label>
      
      <input class="form-control" type="file" id="formFile">

      <span class="d-block fw-bold text-end mt-2">
        Arquivos permitidos: .pdf, .xls, jpg até 20MB
      </span>
    </div>
  </div> {{-- Ficha cadastral && Download do documento --}}
</div>
