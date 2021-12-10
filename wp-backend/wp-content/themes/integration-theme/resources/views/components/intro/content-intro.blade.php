<section class="intro container-fluid px-0">
  <div class="intro__background position-relative w-100">
    <img class="img-fluid w-100 h-100" src="@asset('images/service-channel-intro-background.jpg')" alt="Service Channel Intro Background"> {{-- Imagem Background --}}

    <div class="intro__background-breadcrumb position-absolute top-0 start-0 w-100">
      <div class="container">
        <div class="row">
          <nav aria-label="col breadcrumb">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a class="text-light" href="#">Início</a>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                <a class="fw-bold text-white" href="#">Meu perfil</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div> {{-- Breadcrumb --}}

    <div class="intro__background-title position-absolute bottom-0 start-0 w-100">
      <div class="container">
        <div class="row">
          <div class="col-auto">
            <i class="uil uil-user-square fs-2 text-primary"></i>
          </div>
          
          <div class="col ps-0">
            <h2 class="fw-bolder mb-0 text-primary">
              {!! the_title() !!}
            </h2>
          </div>
        </div>
      </div>
    </div> {{-- Título da Página --}}
  </div>
</section>
