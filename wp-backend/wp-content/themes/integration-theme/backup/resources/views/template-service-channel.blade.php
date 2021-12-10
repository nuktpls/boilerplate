{{--
  Template Name: Service Channel
--}}

@extends('layouts.app')

@section('content')
  @intro()

  <div class="container px-lg-5">
    <div class="px-0 px-lg-5">
      <div class="row">
        <section class="col-12 col-lg-4 mb-5">
          {!! get_the_content() !!}
        </section>

        @if(function_exists('gravity_form') && !empty($form = get_field('form')))
          <section class="col-12 col-lg-8 mb-5">
            {!! gravity_form($form) !!}
          </section>
        @endif
      </div>
    </div>
  </div>

@endsection
