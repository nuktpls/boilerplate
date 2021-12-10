<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')

  <body @bodyclass()>
    @php do_action('get_header') @endphp
    @includeWhen(is_user_logged_in(), 'partials.header')

    <main class="main">
      @if(is_user_logged_in())
        @yield('content')
      @else
        @includeIf('partials.template-login')
      @endif
    </main>

    @php do_action('get_footer') @endphp
    @includeWhen(is_user_logged_in(), 'partials.footer')
    @wpfoot()
  </body>
</html>
