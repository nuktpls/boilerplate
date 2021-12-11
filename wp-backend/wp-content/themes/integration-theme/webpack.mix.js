const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./dist').browserSync({
	proxy: 'localhost',
	tunnel: true,
	open: false,
})

mix
	.js('resources/assets/scripts/main.js', 'scripts')
	.js('resources/assets/scripts/customizer.js', 'scripts')

mix.autoload({
	jquery: ['$', 'window.jQuery'],
})

mix.options({
	processCssUrls: false,
})

mix.sourceMaps(false, 'source-map').version()
