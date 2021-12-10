@notempty($intro)
  <section class="dashboard-intro container-fluid px-0 bg-dark">
    <div class="dashboard-intro__background position-relative w-100">
      @notempty($intro['background'])
        @attachmentimage([
          'id' => $intro['background'],
          'class' => 'img-fluid w-100 h-100',
        ])
      @endnotempty

      <div class="dashboard-intro__background-account position-absolute bottom-0 start-0 w-100 pb-5">
        <div class="container">
          <div class="row">
            @notempty($user->avatar)
              <div class="col-auto">
                @attachmentimage([
                  'id' => $user->avatar,
                  'class' => 'img-fluid rounded-circle',
                ])
              </div>
            @endnotempty

            <div class="col align-self-end">
              <h3 class="fw-normal text-white">
                @notempty($intro['prefix'])
                  {!! $intro['prefix'] !!}
                @endnotempty
                <span class="text-capitalize">{{ $user->display_name }}</span>
              </h3>

              @notempty($intro['title'])
                <h2 class="fw-bolder mb-0 text-primary">{!! $intro['title'] !!}</h2>
              @endnotempty
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> {{-- Introdução --}}
@endnotempty
