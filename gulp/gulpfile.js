'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    del = require('del'),
    rigger = require('gulp-rigger'),
    babel = require('gulp-babel');

var path = {
  src : {
      html: 'src/*.html',
      sass: 'src/scss/**/*.scss',
      js: 'src/js/*.js',
      img: 'src/img/**/*.+(png|jpg|gif|svg)',
      fonts: 'src/fonts/**/*.*'
  },
  dist: {
      html: 'dist/',
      css: 'dist/css/',
      js: 'dist/js/',
      img: 'dist/img/',
      fonts: 'dist/fonts/'
  },
  watch: {
      html: 'src/**/*.html'
  },
  clean: './dist'
};


var serverConfig = {
    server: {
      baseDir: './dist',
      index: 'index.html'
    },
    host: 'localhost',
    port: 9000,
    logPrefix: 'NASA',
    notify: false
  };

  // html
  gulp.task('bundleHtml', function() {
      gulp.src(path.src.html)
      .pipe(rigger())
      .pipe(gulp.dest(path.dist.html))
      .pipe(browserSync.reload({stream: true}))    
  });

  // sass to css
  gulp.task('bundleCSS', function() {
      return gulp.src(path.src.sass)
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('styles.css'))
      .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: true
      }))
      //.pipe(cssnano())
      .pipe(gulp.dest(path.dist.css))
      .pipe(browserSync.reload({stream: true}));
  });

  //js

  gulp.task('bundleJs', function() {
      return gulp.src(path.src.js)
      .pipe(concat('scripts.min.js'))
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest(path.dist.js))
      .pipe(browserSync.reload({stream: true}));
  })

  // img 
  gulp.task('bundleImg', function() {
      return gulp.src(path.src.img)
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()],
        interlaced: true
      }))
      .pipe(gulp.dest(path.dist.img))
      .pipe(browserSync.reload({stream: true}));
  })

  // fonts
  gulp.task('bundleFont', function () {
      return gulp.src(path.src.fonts)
      .pipe(gulp.dest(path.dist.fonts))
  })

  // watch
  gulp.task('watch', function() {
      gulp.watch(path.watch.html, {cwd: './'}, ['bundleHtml']);
      gulp.watch(path.src.sass, {cwd: './'}, ['bundleCSS']);
      gulp.watch(path.src.js, {cwd: './'}, ['bundleJs']);
      gulp.watch(path.src.img, ['bundleImg']);
      gulp.watch(path.src.fonts, ['bundleFont']);
  });

  // BrowserSync server
  gulp.task('webServer', function() {
    browserSync(serverConfig);
  });

  // clean dist dir
  gulp.task('clean', function() {
      return del.sync(path.clean);
  });

  // Build task
  gulp.task('build', ['bundleHtml', 'bundleCSS', 'bundleJs', 'bundleImg', 'bundleFont']);

  // Default task
  gulp.task('default', ['clean', 'build', 'webServer', 'watch']);
