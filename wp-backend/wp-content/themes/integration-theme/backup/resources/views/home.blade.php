@extends('layouts.app')

@section('content')
  @includeIf('partials.pages.dashboard.intro')

  <div class="container">
    @notempty($services['description'])
      <p class="text-dark mb-2 mb-md-3">{!! $services['description'] !!}</p>
    @endnotempty

    @notempty($services['services'])
      <section class="dashboard-cards row row-cols-1 row-cols-lg-3 g-4">
        @foreach ($services['services'] as $id)
          <div class="col">
            @includeIf('partials.pages.dashboard.card ', ['id' => $id])
          </div>
        @endforeach
      </section>
    @endnotempty
  </div>
@endsection
