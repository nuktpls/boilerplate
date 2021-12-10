@notempty($data)
  <div class="card bg-white p-4 rounded-2 shadow">
    @notempty($data['title'])
      <div class="row g-0">
        <div class="col-12">
          <h4 class="card-title fs-3 fw-semi-bold lh-22 mb-3{{ isset($class_title) && !empty($class_title) ? ' ' . $class_title : ' text-dark' }}">{!! $data['title'] !!}</h4>
        </div>
      </div>
    @endnotempty

    <div class="row g-0 align-items-center">
      @notempty($data['date'])
        <div class="col">
          <div class="card-body p-0">
            <p class="card-text fw-bolder mb-0 text-secondary text-uppercase">data de publicação</p>

            <p class="card-text fs-4 fw-bolder text-secondary text-uppercase">{{ $data['date'] }}</p>
          </div>
        </div>
      @endnotempty

      @notempty($data['file'])
        <div class="col-auto">
          <a role="button" href="{{ $data['file'] }}" download target="_blank" class="btn btn-primary text-dark d-flex align-items-center">
            @include('icon::download', ['width' => 20, 'fill' => '#252525', 'class' => 'me-2'])
            <span class="lh-fix">Download</span>
          </a>
        </div>
      @endnotempty
    </div>
  </div>
@endnotempty
