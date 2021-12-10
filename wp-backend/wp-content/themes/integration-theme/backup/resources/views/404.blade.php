@extends('layouts.app')

@section('content')
  <div class="alert alert-warning">
    {{ __('Sorry, but the page you were trying to view does not exist.', 'sage') }}
  </div>
@endsection
