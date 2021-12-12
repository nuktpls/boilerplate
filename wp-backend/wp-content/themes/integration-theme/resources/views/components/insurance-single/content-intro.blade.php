<div class="insurance-single-intro__background position-relative w-100 overflow-hidden">
  <img class="img-fluid w-100 h-100" src="@asset('images/insurance-single-intro-background.jpg')" alt="Insurance Single Intro Background"> {{-- Imagem Background --}}

  <div class="insurance-single-intro__background-breadcrumb position-absolute top-0 start-0 w-100">
    <div class="container">
      <div class="row">
        <nav aria-label="col breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a class="text-light" href="#">Início</a>
            </li>

            <li class="breadcrumb-item">
              <a class="text-light" href="#">Solicitar novo seguro</a>
            </li>
            
            <li class="breadcrumb-item active" aria-current="page">
              <a class="fw-bold text-white" href="#">Seguro Imobiliário</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div> {{-- Breadcrumb --}}

  <div class="insurance-single-intro__background-title position-absolute bottom-0 start-0 w-100 pb-3 pb-md-5">
    <div class="container">
      <div class="row">
        <div class="col-auto pe-0">
          <i class="uil uil-shield text-primary"></i>
        </div>

        <div class="col ms-2 ps-0">
          <h2 class="fw-bolder mb-3 text-primary">
            {!! the_title() !!}
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col-auto text-white">
          <span class="fw-bold lh-lg">O que está incluso?</span><br>
          Seguros Residenciais, Comerciais, Casas e Apartamento
        </div>
      </div>
    </div>
  </div> {{-- Título da Página --}}
</div>
