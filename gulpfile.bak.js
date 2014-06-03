var devFolder = '_dev';
var srcFolder = 'thing';

var srcGlobs = {
  'img':          ['assets/img/**/*.{png,jpg,gif}'],
  'style':        ['sass/*.{sass,scss}'],
  'svg':          ['img/**/*.svg'],
  'templates':    ['jade/*.jade'],
  'fonts':        ['fonts/**/*'],
  'js':           ['components/jquery/dist/jquery.js',
                   'components/flexslider/jquery.flexslider.js',
                   'js/scripts.js']
};

for (globList in srcGlobs) {
  for (var i = 0; i < srcGlobs[globList].length; i++) {
    srcGlobs[globList][i] = srcFolder + '/' + srcGlobs[globList][i];
  }
}

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var log = gutil.log,
    colors = gutil.colors;

// Styles
gulp.task('styles', function() {
  return gulp.src(srcGlobs.style)
    .pipe(sass({
      style: 'expanded',
      require: ['sass-globbing'],
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(devFolder+'/assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(livereload(server))
    .pipe(gulp.dest(devFolder+'/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Jade
gulp.task('templates', function() {
  return gulp.src(srcGlobs.templates)
    .pipe(jade({client:false}))
    .pipe(gulp.dest(devFolder))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Templates task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(srcGlobs.js)
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(devFolder+'/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest(devFolder+'/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src(srcGlobs.img)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(livereload(server))
    .pipe(gulp.dest(devFolder+'/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

// SVG
gulp.task('svg', function() {
  return gulp.src(srcGlobs.svg)
    .pipe(svgmin())
    .pipe(livereload(server))
    .pipe(gulp.dest(devFolder+'/assets/img'))
    .pipe(notify({ message: 'SVG task complete' }));
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src(srcGlobs.fonts)
    .pipe(gulp.dest(devFolder+'/assets/fonts'))
    .pipe(notify({ message: 'Fonts task complete' }));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(devFolder, {read: false})
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'templates', 'fonts', 'svg');
});

// Watch
gulp.task('watch', ['default'], function() {

  console.log(srcGlobs.style);

  // Listen on port 35729 (LiveReload)
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    gulp.watch(srcGlobs.style, 'styles');               // Watch .sass files
    // gulp.watch(srcGlobs.js, 'scripts');              // Watch .js files
    // gulp.watch(srcGlobs.img, 'images');              // Watch image files
    // gulp.watch(srcGlobs.svg, 'svg');                 // Watch .svg files
    // gulp.watch(srcGlobs.fonts, 'fonts');             // Watch font files
    // gulp.watch(srcGlobs.templates, 'templates');     // Watch .jade files
  });
});
