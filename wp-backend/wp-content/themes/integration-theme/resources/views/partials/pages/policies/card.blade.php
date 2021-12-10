@notempty($data)
  <div class="card bg-white h-100 p-4 rounded-2 shadow">
    <div class="row">
      <div class="col">
        <div class="card-body p-0">
          @notempty($data['insurance'])
            <h3 class="card-title fs-4 lh-22 text-primary fw-bolder mb-2 pb-1">
              <a class="text-decoration-none stretched-link" href="{{ $data['permalink'] }}">{{ $data['insurance'] }}</a>
            </h3>
          @endnotempty

          @notempty($data['insurance'])
            <p class="card-text fw-bold mb-0 text-secondary text-uppercase fs-5 lh-20">sua apólice</p>

            <p class="card-text fs-3 fw-bold text-dark">{{ $data['policy_id'] }}</p>
          @endnotempty
        </div>
      </div>

      <div class="col-auto">
        @include('icon::arrow-right', ['width' => 12])
      </div>
    </div>
  </div>
@endnotempty
