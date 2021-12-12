{{--
  Template Name: Documents (Apolice)
--}}

@if ( is_user_logged_in() )
  @extends('layouts.app')
  @section('content')

    @include( 'partials.intro-apolice' ) {{-- Introdução --}}

    <div class="apolice-cards container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <section>
            <p class="text-dark mb-3">
              Acesse abaixo os documentos gerais da apólice e endossos, boletos e condições gerais:
            </p>
          </section> {{-- Aviso --}}

          <section class="apolice-cards__download">
            <div class="row">
              @while(have_posts()) @php the_post() @endphp
                <section class="col-12">
                  <div class="row row-cols-1 g-4">
                    <div class="col">
                      @include( 'components.cards.content-cards-download' )
                    </div>
                  </div>
                </section>
              @endwhile
            </div>
          </section> {{-- Sessão: Cards Dowloads --}}

          <button type="button" class="apolice-cards__button btn btn-dark d-block ms-auto text-primary" data-bs-toggle="modal" data-bs-target="#solicitar-endosso">
            Solicitar endosso
          </button> {{-- Botão --}}

          <hr class="rounded" style="margin:40px 0;">

          <section class="apolice-cards__finance">
            <h2 class="mb-3">Financeiro</h2>

            <div class="row">
              @while(have_posts()) @php the_post() @endphp
                <section class="col-12">
                  <div class="row row-cols-1 row-cols-md-2 g-4">
                    @include( 'components.cards.content-cards-finance' )
                  </div>
                </section>
              @endwhile
            </div>
          </section> {{-- Sessão: Cards Finaceiro --}}

          <section class="apolice-cards__documents">
            <h2 class="mb-3">Documentos gerais</h2>

            <div class="row">
              @while(have_posts()) @php the_post() @endphp
                <section class="col-12">
                  <div class="row row-cols-1 row-cols-md-2 g-4">
                    @include( 'components.cards.content-cards-documents' )
                  </div>
                </section>
              @endwhile
            </div>
          </section> {{-- Sessão: Cards Documents --}}

          <div class="apolice-cards__change d-flex justify-content-end">
            <a class="d-block fs-4 d-flex align-items-center" href="#" data-bs-toggle="modal" data-bs-target="#alteracao-documento">
              Solicitar alteração de documento<i class="uil uil-arrow-right fs-2 text-primary ms-2"></i>
            </a>
          </div> {{-- Botão --}}
        </div>
      </div>
    </div>

    @include( 'components.modals.modal-solicitar-endosso' ) {{-- Solicitar endosso (Modal) --}}
  @endsection
@else
  <p class="text-dark pt-3 ps-3">Acesso restrito.</p>
@endif
