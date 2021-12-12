{{--
  Template Name: Profile
--}}

@if ( is_user_logged_in() )
  @extends('layouts.app')
  @section('content')

    @introcontent
      <div class="logout-link-container row justify-content-end">
        <div class="col-auto">
          @logoutlink(['class' => 'text-white'])
        </div>
      </div>
    @endintrocontent

    <section class="profile container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <nav class="profile-nav-forms">
            <div class="nav nav-tabs flex-nowrap flex-md-wrap" id="nav-tab" role="tablist">
              <button class="profile-nav-forms__button nav-link active" id="data-form-tab" data-bs-toggle="tab" data-bs-target="#data-form" type="button" role="tab" aria-controls="data-form" aria-selected="true">Meus dados</button>

              <button class="profile-nav-forms__button nav-link" id="password-form-tab" data-bs-toggle="tab" data-bs-target="#password-form" type="button" role="tab" aria-controls="password-form" aria-selected="false">Alteração da senha</button>

              <button class="profile-nav-forms__button nav-link" id="bank-form-tab" data-bs-toggle="tab" data-bs-target="#bank-form" type="button" role="tab" aria-controls="bank-form" aria-selected="false">Dados bancários</button>
            </div>
          </nav>

          <div class="profile-forms tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="data-form" role="tabpanel" aria-labelledby="data-form-tab">
              @include( 'partials.profile.form-alert' )
              @include( 'partials.profile.form-data-company' )
              @include( 'partials.profile.form-data-contact' )
              @include( 'partials.profile.form-data-address' )
              @include( 'partials.profile.form-data-registration' )
              @include( 'partials.profile.form-data-submit' )
            </div> {{-- Form: meus dados --}}

            <div class="tab-pane fade" id="password-form" role="tabpanel" aria-labelledby="password-form-tab">
              @include( 'partials.profile.form-alert' )
              @include( 'partials.profile.form-password' ) 
            </div>  {{-- Form: alteração da senha --}}

            <div class="tab-pane fade" id="bank-form" role="tabpanel" aria-labelledby="bank-form-tab">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                @include( 'partials.profile.form-alert' )
                @include( 'partials.profile.form-bank' )  
              </div>
            </div> {{-- Form: dados bancários --}}
          </div> 
        </div>
      </div>
    </section> {{-- Formulários --}} 

  @endsection
@else
  <p class="text-dark pt-3 ps-3">Acesso restrito.</p>
@endif
