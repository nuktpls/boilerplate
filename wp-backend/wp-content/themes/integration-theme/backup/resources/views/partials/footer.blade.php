@notempty($content_footer || $contact_footer || $social_footer)
  <footer class="footer border-top">
    <div class="container">
      <div class="row">
        @notempty($content_footer)
          <div class="col-xl-4">
            @includeIf('partials.footer.content')
          </div>
        @endnotempty

        @notempty($contact_footer)
          <div class="col-xl-auto">
            @includeIf('partials.footer.contact')
          </div>
        @endnotempty

        @notempty($social_footer)
          <div class="col-xl align-self-xl-end">
            @includeIf('partials.footer.social')
          </div>
        @endnotempty
      </div>
    </div>
  </footer>
@endnotempty
