@if ( ! function_exists( 'the_custom_logo' ) || ! has_custom_logo() )
  <a class="header__navigation-info col-xl-2 h2 my-3 my-xl-0 text-uppercase text-center text-xl-start" href="{{ home_url('/') }}" rel="home">
    {{ bloginfo( 'name' ) }}
  </a> {{-- Nome do Site --}}
@else
  <div class="header__navigation-logo col-xl-2 my-3 my-xl-0 pe-xl-0 text-center text-xl-start">
    {!! the_custom_logo() !!}
  </div> {{-- Logo Personalizado | Customizer --}}
@endif
