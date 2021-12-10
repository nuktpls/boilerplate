@notempty($segment['orders'])
  <div class="list-segment mb-3 pb-3">
    <div class="list-segment__header position-relative w-100 rounded-top overflow-hidden">
      @notempty($segment['thumbnail'])
        @attachmentimage([
          'id' => $segment['thumbnail'],
          'class' => 'position-absolute h-100 w-100 of-cover top-0',
        ])
      @endnotempty

      <div class="list-segment__header-content position-absolute top-0 start-0 w-100 h-100 p-4 d-flex align-items-end">
        <h3 class="list-segment__header-title m-0 text-primary lh-32 w-100 h2">{!! $segment['name'] !!}</h3>
      </div>
    </div>

    <div class="list-group">
      @foreach($segment['orders'] as $order)
        <a
          class="list-group-item list-group-item-action text-decoration-none d-flex justify-content-between align-items-center fw-semi-bold fs-4 transition-base border-start-0 border-end-0 border-top-0"
          href="{{ $order['permalink'] }}"
        >
          <span class="fs-4">{!! $order['name'] !!}</span>

          @include('icon::arrow-right', ['width' => 13, 'fill' => '#252525'])
        </a>
      @endforeach
    </div>

    @notempty($segment['more_orders'])
      <h4 class="list-segment__title border-bottom text-uppercase fw-bolder pt-4 pb-3 m-0 h5">Outras soluções</h4>

      <div class="list-group">
        @foreach($segment['more_orders'] as $order)
          <a
            class="list-group-item list-group-item-action text-decoration-none d-flex justify-content-between align-items-center fw-semi-bold fs-4 transition-base border-start-0 border-end-0 border-top-0"
            href="{{ $order['permalink'] }}"
          >
            <span class="fs-4">{!! $order['name'] !!}</span>

            @include('icon::arrow-right', ['width' => 13, 'fill' => '#252525'])
          </a>
        @endforeach
      </div>
    @endnotempty
  </div>
@endnotempty
