<div class="modal fade" id="termos-modal" tabindex="-1" aria-labelledby="termos-modal-label" aria-hidden="false">
  <div class="modal-dialog modal-dialog-centered modal-md modal-lg">
    <div class="modal-content">
      <div class="modal-header mb-md-4 pb-0">
        <h3 class="modal-title fw-bolder fs-2 mt-xl-3 text-start text-dark" id="termos-modal-label">
          @notempty($content_terms['title'])
            {!! $content_terms['title'] !!}
          @endnotempty {{-- Terms title --}}
        </h3>
        <button id="modal-btn-close" class="btn-close bg-light mb-2 rounded-circle" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body pt-0">
        <p style="max-height: 340px ; overflow-y: scroll;" class="bg-light fs-4 mb-0 p-3 p-xl-4 rounded-1 text-start text-dark">
          @notempty($content_terms['description'])
            {!! $content_terms['description'] !!}
          @endnotempty {{-- Terms text --}}
        </p>
      </div>
      <div class="modal-footer border-top justify-content-between align-items-center">
        <div class="form-check d-flex align-items-center m-0">
          <input class="form-check-input mt-0" type="checkbox" id="modal-terms">
          <label class="form-check-label fs-4 text-dark" for="modal-terms">
            Li e aceito os termos
          </label>
        </div>
        <button id="termos-modal__button" class="btn btn-primary border-0 rounded-1" type="submit" disabled="true" data-bs-toggle="modal" data-bs-target="#termos-modal">Aceitar</button>
      </div>
    </div>
  </div>
</div>
