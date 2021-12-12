@notempty($id)
  @php
    $file = wp_get_attachment_image_url($id, 'full');
  @endphp

  @notempty($file)
    @if(\Illuminate\Support\Str::endsWith($file, 'svg'))
      @php
        ob_start();
        include(get_attached_file($id, 'full'));

        $output = ob_get_clean();
        $output = preg_replace(
          array('/width="\d+"/i', '/height="\d+"/i'),
          '',
        $output);

        if(isset($width) && !empty($width))
          $output = str_replace('<svg', '<svg width="' . $width . '"', $output);
        if(isset($height) && !empty($height))
          $output = str_replace('<svg', '<svg height="' . $height . '"', $output);
        if(isset($class) && !empty($class))
          $output = str_replace('<svg', '<svg class="' . $class . '"', $output);
      @endphp

      {!! $output !!}
    @else
      <img
        src="{{ wp_get_attachment_image_url($id, 'full') }}"
        sizes="{{ wp_get_attachment_image_sizes($id, 'full') }}"
        {!! !empty($srcset = wp_get_attachment_image_srcset($id, 'full')) ? 'srcset="' . $srcset . '"' : '' !!}
        {!! isset($class) && !empty($class) ? 'class="' . $class . '"' : '' !!}
        {!! isset($width) && !empty($width) ? 'width="' . $width . '"' : '' !!}
        {!! isset($height) && !empty($height) ? 'height="' . $height . '"' : '' !!}
        alt="{{ !empty($alt = get_post_meta($id, '_wp_attachment_image_alt', true)) ? $alt : get_the_title($id) }}"
      />
    @endif
  @endnotempty
@endnotempty
