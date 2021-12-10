<section class="apolice-intro container-fluid px-0">
  <div class="apolice-intro__background position-relative w-100">
    <img class="img-fluid w-100 h-100" src="@asset('images/documents-apolice-intro-background.jpg')" alt="Documents Intro Background"> {{-- Imagem Background --}}

    <div class="apolice-intro__background-breadcrumb position-absolute top-0 start-0 w-100 pt-4">
      <div class="container">
        <div class="row">
          <nav aria-label="col breadcrumb">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a class="text-light" href="#">Início</a>
              </li>

              <li class="breadcrumb-item" aria-current="page">
                <a class="text-light" href="#">Meus Seguros</a>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                <a class="fw-bold text-white" href="#">Apólice: <span>3897548869131</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div> {{-- Breadcrumb --}}

    <div class="apolice-intro__background-title position-absolute bottom-0 start-0 w-100">
      <div class="container">
        <div class="row">
          <div class="col-auto">
            <i class="uil uil-folder fs-2 text-primary"></i>
          </div>

          <div class="col d-flex flex-column ps-0">
            <h2 class="fw-bolder mb-2 text-primary">
              {!! the_title() !!}
            </h2>
            
            <h4 class="mb-0 text-white fw-normal">
              Apólice: <span>3897548869131</span>
            </h4>
          </div>

          <div class="col-auto align-self-end mt-3 mt-xl-0">
            <a class="d-block fs-4 d-flex align-items-center" href="#" data-bs-toggle="modal" data-bs-target="#alteracao-documento">
              Solicitar alteração de documento<i class="uil uil-arrow-right fs-2 text-primary ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div> {{-- Título da Página --}}
  </div>
</section>

@include( 'components.modals.modal-alteracao-documento' ) {{-- Alteracao de documento (Modal) --}}
