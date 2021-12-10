<a
  class="logout-link fw-bolder text-uppercase d-inline-flex align-items-center color-inherit transition-base text-decoration-none{{ isset($class) && !empty($class) ? ' ' . $class : '' }}"
  href="{{ wp_logout_url(home_url()) }}"
>
  <span class="fs-5 lh-fix">Sair</span>
  @include('icon::signout', ['width' => 16, 'class' => 'ms-2'])
</a>
