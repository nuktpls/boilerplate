<div class="footer__contact">
  @notempty($contact_footer['title'])
    <h6 class="footer__title fw-bolder text-uppercase">
      {!! $contact_footer['title'] !!}
    </h6>
  @endnotempty {{-- Titulo --}}

  @notempty($contact_footer['text_telephone_one'] || $contact_footer['text_telephone_two'] || $contact_footer['text_meet_online'] || $contact_footer['text_telephone_three'] || $contact_footer['text_email_contact_us'])
    <div class="footer__contact-contacts row">
      <ul class="col-xl-auto list-unstyled mb-2 mb-xl-0">
        @notempty($contact_footer['text_telephone_one'])
          <li class="d-flex align-items-center lh-22 fs-4">
            @include('icon::phone', ['width' => 15, 'class' => 'me-2'])

            <p class="m-0">{!! $contact_footer['text_telephone_one'] !!}</p>
          </li>
        @endnotempty

        @notempty($contact_footer['text_telephone_two'])
          <li class="d-flex align-items-center mt-2 lh-22 fs-4">
            @include('icon::phone', ['width' => 15, 'class' => 'me-2'])

            <p class="m-0">{!! $contact_footer['text_telephone_two'] !!}</p>
          </li>
        @endnotempty

        @notempty($contact_footer['text_meet_online'])
          <li class="d-flex align-items-start mt-2 lh-22 fs-4">
            @include('icon::chat', ['width' => 15, 'class' => 'me-2'])

            <p class="m-0">{!! $contact_footer['text_meet_online'] !!}</p>
          </li>
        @endnotempty
      </ul>

      <ul class="col-xl-auto list-unstyled mb-0">
        @notempty($contact_footer['text_telephone_three'])
          <li class="d-flex align-items-center lh-22 fs-4">
            @include('icon::whatsapp', ['width' => 15, 'class' => 'me-2'])

            <p class="m-0">{!! $contact_footer['text_telephone_three'] !!}</p>
          </li>
        @endnotempty

        @notempty($contact_footer['text_email_contact_us'])
          <li class="d-flex align-items-center mt-2 lh-22 fs-4">
            @include('icon::envelope', ['width' => 15, 'class' => 'me-2'])

            <p class="m-0">{!! $contact_footer['text_email_contact_us'] !!}</p>
          </li>
        @endnotempty
      </ul>
    </div>
  @endnotempty {{-- Formas de Contato --}}
</div>
