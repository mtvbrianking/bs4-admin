const mix = require('laravel-mix');

mix.sourceMaps();

mix.js('resources/js/app.js', 'assets/js');

mix.sass('resources/sass/app.scss', 'assets/css');

mix.copy('node_modules/boxicons/css/boxicons.min.css', 'assets/vendor/boxicons/css/boxicons.min.css');
mix.copyDirectory('node_modules/boxicons/fonts', 'assets/vendor/boxicons/fonts');
