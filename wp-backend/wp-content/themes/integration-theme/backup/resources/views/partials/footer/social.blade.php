<div class="footer__social">
  @notempty($social_footer['title'])
    <h6 class="footer__social-title fw-normal text-xl-end fs-4 lh-22">
      {!! $social_footer['title'] !!}
    </h6>
  @endnotempty {{-- Titulo --}}

  @notempty($social_footer['social_one'] || $social_footer['social_two'] || $social_footer['social_three'])
    <ul class="footer__social-socials d-flex justify-content-xl-end list-unstyled mb-0">
      @notempty($social_footer['social_one'])
        <li class="me-2 me-xl-0 ms-xl-2">
          <a href="{{ $social_footer['social_one'] }}" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            @include('icon::linkedin', ['width' => 32])<span class="d-none">LinkedIn</span>
          </a>
        </li>
      @endnotempty

      @notempty($social_footer['social_two'])
        <li class="me-2 me-xl-0 ms-xl-2">
          <a href="{{ $social_footer['social_two'] }}" target="_blank" rel="noopener noreferrer" title="Facebook">
            @include('icon::facebook', ['width' => 32])<span class="d-none">Facebook</span>
          </a>
        </li>
      @endnotempty

      @notempty($social_footer['social_three'])
        <li class="me-2 me-xl-0 ms-xl-2">
          <a href="{{ $social_footer['social_three'] }}" target="_blank" rel="noopener noreferrer" title="Instagram">
            @include('icon::instagram', ['width' => 32])<span class="d-none">Instagram</span>
          </a>
        </li>
      @endnotempty
    </ul>
  @endnotempty {{-- Redes Sociais --}}
</div>
