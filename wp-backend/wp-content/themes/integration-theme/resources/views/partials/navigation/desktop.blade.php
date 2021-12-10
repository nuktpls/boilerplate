@if ( has_nav_menu( 'desktop_navigation' ) )
  <nav class="header__navigation-desktop col-10 d-none d-xl-block ps-0 h-100">
    {!! wp_nav_menu([
      'theme_location'  => 'desktop_navigation',
      'menu_class'      => 'header__navigation-desktop-menu d-flex justify-content-end list-unstyled mb-0 h-100',
      'container'       => ''
    ]) !!}
  </nav>
@endif {{-- Menu do Desktop --}}
