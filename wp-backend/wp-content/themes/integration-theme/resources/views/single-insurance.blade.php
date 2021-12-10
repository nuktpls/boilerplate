@extends('layouts.app')

@section('content')
  @introcontent
    @notempty($subtitle || $description)
      <div class="row mt-4 mb-lg-3">
        <div class="col-12 col-lg-5 text-white">
          @notempty($subtitle)
            <h3 class="fw-bold">{!! $subtitle !!}</h3>
          @endnotempty

          @notempty($description)
            <span>{!! $description !!}</span>
          @endnotempty
        </div>
      </div>
    @endnotempty
  @endintrocontent

  <div class="container">
    <div class="row">
      <section class="single-insurance__content col-12 col-lg-5 d-flex flex-column">
        @content
      </section>

      @if(function_exists('gravity_form'))
        <section class="single-insurance__form-container align-self-start col-12 col-lg-6 offset-lg-1">
          <div class="single-insurance__form bg-white rounded shadow-lg">
            {!! gravity_form('Solicitar seguro') !!}
          </div>
        </section>
      @endif
    </div>
  </div>
@endsection
