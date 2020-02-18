const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

    mix.webpackConfig({
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + '/resources/assets/js/admin'
          },
        },
    })

    mix.js('resources/assets/js/admin/main.js', 'public/js/admin')
    .sass('resources/assets/js/admin/assets/scss/style.scss', 'public/css/admin');