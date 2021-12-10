<div class="footer__content">
  @notempty($content_footer['title'])
    <h6 class="footer__title fw-bolder text-uppercase">
      {!! $content_footer['title'] !!}
    </h6>
  @endnotempty {{-- Titulo --}}

  @notempty($content_footer['description'])
    <p class="footer__content-description lh-20">
      {!! $content_footer['description'] !!}
    </p>
  @endnotempty {{-- Descrição --}}

  @notempty($content_footer['link'] && $content_footer['link']['title'])
    <ul class="footer__content-link list-unstyled m-0">
      <li class="d-flex align-items-center">
        @include('icon::globe', ['width' => 15, 'class' => 'me-2'])

        <a
          class="fw-bold lh-fix text-dark"
          href="{{ $content_footer['link']['url'] }}"
          target="{{ !empty($content_footer['link']['target']) ? $content_footer['link']['target'] : '_self' }}"
          {!! !empty($content_footer['link']['target']) && $content_footer['link']['target'] == '_blank' ? 'rel="noopener noreferrer"' : '' !!}
        >
          {!! $content_footer['link']['title'] !!}
        </a>
      </li>
    </ul>
  @endnotempty {{-- Link --}}
</div>

