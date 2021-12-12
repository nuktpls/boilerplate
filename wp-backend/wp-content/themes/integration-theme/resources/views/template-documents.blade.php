{{--
  Template Name: Documents
--}}

@extends('layouts.app')

@section('content')
  @intro()

  <section class="container">
    <p class="text-dark mb-3">
      Escolha a apólice abaixo e acesse os documentos:
    </p>
  </section> {{-- Aviso --}}

  @while(have_posts()) @php the_post() @endphp
    <section class="documents-cards container">
      <div class="row">
        <section class="col-12">
          @include( 'components.cards.content-cards' )
        </section>
      </div>
    </section> {{-- Cards --}}
  @endwhile
@endsection
