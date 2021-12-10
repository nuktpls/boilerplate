<nav aria-label="breadcrumb" class="d-inline-block{{ isset($class) && !empty($class) ? ' ' . $class : '' }}">
  <ol class="breadcrumb d-inline-flex">
    <li class="breadcrumb-item d-flex align-items-center">
      <a class="lh-fix color-inherit" href="{{ get_home_url() }}">Início</a>
    </li>

    @if(is_page())
      @if(get_post()->post_parent)
        @foreach(array_reverse(get_post_ancestors(get_the_ID())) as $ancestor)
          <li class="breadcrumb-item d-flex align-items-center">
            <a class="lh-fix color-inherit" href="{{ get_permalink($ancestor) }}">{{ wp_strip_all_tags(get_the_title($ancestor)) }}</a>
          </li>
        @endforeach
      @endif

      <li class="breadcrumb-item d-flex align-items-center active" aria-current="page">
        <span class="lh-fix fw-bold">{!! wp_strip_all_tags(get_the_title()) !!}</span>
      </li>
    @elseif(is_singular('order'))
      @php
        $id = get_field('request_order_page', 'option')
      @endphp

      @notempty($id)
        <li class="breadcrumb-item d-flex align-items-center">
          <a class="lh-fix color-inherit" href="{{ get_permalink($id) }}">{{ wp_strip_all_tags(get_the_title($id)) }}</a>
        </li>
      @endnotempty

      <li class="breadcrumb-item d-flex align-items-center active" aria-current="page">
        <span class="lh-fix fw-bold">{!! wp_strip_all_tags(get_the_title()) !!}</span>
      </li>
    @elseif(is_404())
      <li class="breadcrumb-item d-flex align-items-center active" aria-current="page">
        <span class="lh-fix fw-bold">404</span>
      </li>
    @endif
  </ol>
</nav>
