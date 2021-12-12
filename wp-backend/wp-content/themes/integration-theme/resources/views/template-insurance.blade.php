
{{--
  Template Name: Insurance
--}}

@extends('layouts.app')

@section('content')
  @intro()

  <div class="container">
    <div class="row">
      <div class="col-12 text-dark">
        @content
      </div>
    </div>

    <div class="row">
      @foreach($segments as $segment)
        <div class="col-12 col-md-4">
          @includeIf('partials.insurance.list-segment', ['segment' => $segment])
        </div>
      @endforeach
    </div>
  </div>
@endsection
