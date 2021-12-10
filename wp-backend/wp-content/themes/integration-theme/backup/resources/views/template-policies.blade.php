{{--
  Template Name: Policies
--}}

@extends('layouts.app')

@section('content')
  @intro()

  <div class="container mb-5 pb-5">
    <div class="row">
      <div class="col-12 text-dark">
        @content
      </div>
    </div>

    @notempty($policies)
      <section class="row documents-cards">
        @foreach($policies as $data)
          <div class="col-12 col-lg-4 mb-3">
            @include('partials.pages.policies.card')
          </div>
        @endforeach
      </section> {{-- Cards --}}
    @endnotempty
  </div>
@endsection
