@if ( has_nav_menu( 'mobile_navigation' ) )
  <nav class="header__navigation-mobile d-xl-none fixed-bottom bg-white">
    {!! wp_nav_menu([
      'theme_location'  => 'mobile_navigation',
      'menu_class'      => 'header__navigation-mobile-menu list-unstyled mb-0 d-flex',
      'container'       => ''
    ]) !!}
  </nav>
@endif {{-- Menu do Smartphone --}}
