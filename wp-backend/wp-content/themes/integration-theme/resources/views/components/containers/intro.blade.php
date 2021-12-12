<section class="intro container-fluid px-0 position-relative bg-dark pt-3 pb-4 pb-lg-3">
  @attachmentimage([
    'id'    => get_post_thumbnail_id(),
    'class' => 'w-100 h-100 position-absolute of-cover top-0 start-0',
  ])

  <span class="intro__overlay w-100 h-100 position-absolute top-0 start-0"></span>

  <div class="container position-relative py-lg-3">
    @breadcrumb(['class' => 'intro__breadcrumb pb-3 mb-3 text-white'])

    <div class="row align-items-center mb-2">
      @hasfield('icon')
        <div class="col-auto pe-1">
          @page_icon([
            'width' => 24,
            'class' => 'intro__icon',
          ])
        </div>
      @endfield

      <div class="col">
        <h2 class="intro__title fw-bolder m-0 text-primary lh-fix">
          {{ wp_strip_all_tags(get_the_title()) }}
        </h2>
      </div>
    </div>

    @notempty($slot)
      {{ $slot }}
    @endnotempty
  </div>
</section>
