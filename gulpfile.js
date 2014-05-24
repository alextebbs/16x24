var devFolder = '_dev';
var assetsFolder = 'src';

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
  return gulp.src(['assets/sass/*.{sass,scss}'])
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
  return gulp.src(['assets/jade/*.jade'])
    .pipe(jade({client:false}))
    .pipe(gulp.dest(devFolder))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Templates task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src([
      'assets/components/jquery/dist/jquery.js',
      'assets/components/flexslider/jquery.flexslider.js',
      'assets/js/scripts.js'
    ])
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
  return gulp.src(['assets/img/**/*.{png,jpg,gif}'])
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(livereload(server))
    .pipe(gulp.dest(devFolder+'/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

// SVG
gulp.task('svg', function() {
  return gulp.src(['assets/img/**/*.svg'])
    .pipe(svgmin())
    .pipe(livereload(server))
    .pipe(gulp.dest(devFolder+'/assets/img'))
    .pipe(notify({ message: 'SVG task complete' }));
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src(['assets/fonts/*/**'])
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

  // Listen on port 35729 (LiveReload)
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    // Watch .sass files
    gulp.watch(['assets/sass/**/*.{sass,scss}'], function(event) {
      gulp.run('styles');
    });

    // Watch .js files
    gulp.watch(['assets/js/**/*.js'], function(event) {
      gulp.run('scripts');
    });

    // Watch image files
    gulp.watch(['assets/img/**/*.{png,gif,jpg}'], function(event) {
      gulp.run('images');
    });

    // Watch .svg files
    gulp.watch(['assets/img/**/*.svg'], function(event) {
      gulp.run('svg');
    });

    // Watch .jade files
    gulp.watch(['assets/jade/**/*.jade'], 'templates');
  });
});
