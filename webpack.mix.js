const mix = require('laravel-mix');

mix.sourceMaps();

mix.js('resources/js/app.js', 'public/assets/js');
mix.js('resources/js/layout.js', 'public/assets/js');

mix.sass('resources/sass/app.scss', 'public/assets/css');

mix.copy('node_modules/boxicons/css/boxicons.min.css', 'public/assets/vendor/boxicons/css/boxicons.min.css');
mix.copyDirectory('node_modules/boxicons/fonts', 'public/assets/vendor/boxicons/fonts');
