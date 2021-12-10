<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    {!! isset($class) && !empty($class) ? 'class="' . $class . '"' : '' !!}
    {!! isset($width) && !empty($width) ? 'width="' . $width . '"' : '' !!}
    {!! isset($height) && !empty($height) ? 'height="' . $height . '"' : '' !!}
>
    <rect fill="{{ isset($background_fill) && !empty($background_fill) ? $background_fill : constant('ICONS_COLOR') }}" width="32" height="32" rx="4" />
    <path fill="{{ isset($fill) && !empty($fill) ? $fill : '#FFFFFF' }}" d="M18.0801 11.5467H19.3334V9.42667C18.7266 9.36356 18.1168 9.33241 17.5067 9.33333C15.6934 9.33333 14.4534 10.44 14.4534 12.4667V14.2133H12.4067V16.5867H14.4534V22.6667H16.9067V16.5867H18.9467L19.2534 14.2133H16.9067V12.7C16.9067 12 17.0934 11.5467 18.0801 11.5467Z" />
</svg>
