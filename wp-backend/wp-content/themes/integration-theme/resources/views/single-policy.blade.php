@extends('layouts.app')

@section('content')
  @introcontent(['id' => $order])
    <div class="row mt-3 align-items-center justify-content-between">
      <div class="col-12 col-lg-auto text-white">
          <h3 class="fw-normal fs-4 m-0 ps-4 ms-3">Resposta: <span class="fw-semi-bold">{!! get_the_title() !!}</span></h3>
      </div>

      <div class="col-12 col-lg-5 align-self-end mt-3 mt-xl-0">
        <a class="ms-lg-3 d-block fs-4 d-inline-flex align-items-center fw-semi-bold" href="#" data-bs-toggle="modal" data-bs-target="#alteracao-documento">
          Solicitar alteração de documento
          @include('icon::arrow-right', ['width' => 12, 'class' => 'ms-3'])
        </a>
      </div>
    </div>
  @endintrocontent

  <div class="resposta-cards container mb-5 pb-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <div class="row">
          <div class="col-12">
            <p class="text-dark mb-3">
              Acesse abaixo os documentos gerais da resposta e endossos, boletos e condições gerais:
            </p>
          </div>
        </div>

        <section class="resposta-cards__download pb-3">
          <div class="row">
            @notempty($policy)
              <div class="col-12 mb-2">
                @include('partials.posts.policy.card', ['data' => $policy, 'class_title' => 'text-primary'])
              </div>
            @endnotempty

            @notempty($endorsements)
              @foreach($endorsements as $data)
                <div class="col-12 mb-2">
                  @include('partials.posts.policy.card', ['data' => $data, 'class_title' => 'text-primary'])
                </div>
              @endforeach
            @endnotempty
          </div>

          <div class="row justify-content-end mt-4">
            <div class="col-auto">
              <button type="button" class="resposta-cards__button btn btn-dark d-block text-primary" data-bs-toggle="modal" data-bs-target="#solicitar-endosso">
                Solicitar endosso
              </button>
            </div>
          </div>
        </section>

        @notempty($financial)
          <hr class="rounded">

          <section class="resposta-cards__finance pt-3">
            <h3 class="h2 mb-3 fw-semi-bold">Financeiro</h3>

            <div class="row">
              @foreach($financial as $data)
                <div class="col-12 col-md-6 mb-3">
                  @include('partials.posts.policy.card', ['data' => $data])
                </div>
              @endforeach
            </div>
          </section>
        @endnotempty

        @notempty($general)
          <hr class="rounded">

          <section class="resposta-cards__documents pt-3">
            <h2 class="mb-3 fw-semi-bold">Documentos gerais</h2>

            <div class="row">
              @foreach($general as $data)
                <div class="col-12 col-md-6 mb-3">
                  @include('partials.posts.policy.card', ['data' => $data])
                </div>
              @endforeach
            </div>
          </section>
        @endnotempty

        <hr class="rounded">

        <div class="resposta-cards__change d-flex justify-content-end mb-3">
          <a class="d-block fs-4 d-flex align-items-center fw-semi-bold" href="#" data-bs-toggle="modal" data-bs-target="#alteracao-documento">
            Solicitar alteração de documento
            @include('icon::arrow-right', ['width' => 12, 'class' => 'ms-3'])
          </a>
        </div> {{-- Botão --}}
      </div>
    </div>
  </div>

  @include('components.modals.modal-solicitar-endosso')
@endsection
