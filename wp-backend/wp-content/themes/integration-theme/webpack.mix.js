const mix = require('laravel-mix')
require('@tinypixelco/laravel-mix-wp-blocks')
require('laravel-mix-purgecss')
require('laravel-mix-copy-watched')

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
	proxy: 'wordpress',
	tunnel: true,
	open: false,
})

mix.webpackConfig({
	module: {
		rules: [
			{
				test: /.scss/,
				enforce: 'pre',
				loader: 'import-glob-loader',
			},
		],
	},
})

mix.sass('resources/assets/styles/main.scss', 'styles').purgeCss({
	extend: {
		whitelist: require('purgecss-with-wordpress').whitelist,
		whitelistPatterns: [
			...require('purgecss-with-wordpress').whitelistPatterns,
			/^template/,
		],
		whitelistPatternsChildren: [
			/^gfield/,
			/^gform/,
			/^ginput/,
			/^gform_title/,
			/^fieldset/,
		],
	},
})

mix
	.js('resources/assets/scripts/main.js', 'scripts')
	.js('resources/assets/scripts/customizer.js', 'scripts')

mix
	.copyWatched('resources/assets/images/**', 'dist/images')
	.copyWatched('resources/assets/fonts/**', 'dist/fonts')

mix.autoload({
	jquery: ['$', 'window.jQuery'],
})

mix.options({
	processCssUrls: false,
})

mix.sourceMaps(false, 'source-map').version()
