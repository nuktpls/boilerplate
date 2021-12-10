@notempty($id)
  <div class="card bg-white h-100 p-4 rounded-2 shadow">
    <div class="row g-0">
      <div class="col-auto text-center">
        @page_icon([
          'id'    => $id,
          'width' => 18,
        ])
      </div>

      <div class="col">
        <div class="card-body py-0">
          <h3 class="card-title fw-normal text-dark">
            <a class="text-dark text-decoration-none stretched-link" href="@permalink($id)">@title($id)</a>
          </h3>
          @notempty($excerpt = get_the_excerpt($id))
            <p class="card-text fs-4 text-secondary">{{ wp_strip_all_tags($excerpt) }}</p>
          @endnotempty
        </div>
      </div>

      <div class="col-auto text-end">
        @include('icon::arrow-right', ['width' => 12])
      </div>
    </div>
  </div>
@endnotempty
