//Config
var config = {
    css: [
        'less/variables.less',
        'less/to_be_sorted.less',
        'less/_xtreme_captcha.less',
        'less/elements/*.less'
    ],
    css_admin: [
        'less/admin/variables.less',
        'less/admin/_*.less'
    ],
    js: [
        'js/jquery/jquery.js',
        'js/jquery/jquery-xtreme.js',
        'js/jquery/jquery-ui.js',
        'js/jquery/jquery-touch-punch.js',
        'js/third_party/bootstrap.min.js',
        'js/third_party/popper.min.js',
        'js/_ajax_forms.js',
        'js/_xtreme_captcha.js',
        'js/opening.js',
        'js/project.js'
    ],
    js_admin: [
        'js/jquery/jquery.js',
        'js/jquery/jquery-xtreme.js',
        'js/jquery/jquery-ui.js',
        'js/jquery/jquery-touch-punch.js',
        'js/_ajax_forms.js',
        'js/admin/init.js'
    ]
};

//
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('path');
var concat = require('gulp-concat');
//
var jshint = require('gulp-jshint');
var jsmin = require('gulp-jsmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var minifyhtml = require('gulp-minify-html');
//
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var base64 = require('gulp-base64');
//ALT
//var imagemin = require('gulp-imagemin');
//var imageminPngquant = require('imagemin-pngquant');
//var imageminZopfli = require('imagemin-zopfli');
//var imageminGiflossy = require('imagemin-giflossy');
//var imageminGuetzli = require('imagemin-guetzli');
//NEU
var imagemin = require('gulp-imagemin');
//
gulp.task('default', ['clean'], function () {
    gulp.start('default2');
});
gulp.task('default2', ['images'], function () {
    gulp.start('less');
    gulp.start('js');
    console.log('Assets built!');
});

//Gulp Tasks
gulp.task('images', function () {
    return gulp.src('./images/**/*')
            .pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 91, progressive: true}),
                imagemin.optipng({optimizationLevel: 5})
            ])).pipe(gulp.dest('./assets/images/'));
});
gulp.task('less', function () {
    //
    gulp.src('less/third_party/bootstrap.min.css').pipe(gulp.dest('./assets/css/'));
    //
    gulp.src(config.css)
            .pipe(concat('style.css'))
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(base64({
                baseDir: 'assets/images/',
                maxImageSize: 10 * 1024
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./assets/css/'));
    return gulp.src(config.css_admin)
            .pipe(concat('style_admin.css'))
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(base64({
                baseDir: 'assets/images/',
                maxImageSize: 10 * 1024
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./assets/css/'));
});
gulp.task('js', function () {
    gulp.src(config.js)
            .pipe(sourcemaps.init())
            .pipe(concat('script.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./assets/js/'));
    return gulp.src(config.js_admin)
            .pipe(sourcemaps.init())
            .pipe(concat('script_admin.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./assets/js/'));
});
//
gulp.task('css-min', function () {
    gulp.src('./assets/css/style.css')
            .pipe(concat('style.min.css'))
            .pipe(minifyCSS())
            .pipe(gulp.dest('./assets/css/'));
    return gulp.src('./assets/css/style_admin.css')
            .pipe(concat('style_admin.min.css'))
            .pipe(minifyCSS())
            .pipe(gulp.dest('./assets/css/'));
});
gulp.task('js-min', function () {
    gulp.src('./assets/js/script.js')
            .pipe(concat('script.min.js'))
            .pipe(jsmin())
            .pipe(uglify())
            .pipe(gulp.dest('./assets/js/'));
    return gulp.src('./assets/js/script_admin.js')
            .pipe(concat('script_admin.min.js'))
            .pipe(jsmin())
            .pipe(uglify())
            .pipe(gulp.dest('./assets/js/'));
});
gulp.task('clean', function () {
    return gulp.src('./assets/*', {read: false}).pipe(clean());
});
gulp.task('build', ['clean'], function () {
    gulp.start('build2');
});
gulp.task('build2', ['images'], function () {
    gulp.start('build3');
});
gulp.task('build3', ['less', 'js'], function () {
        gulp.start('css-min');
        gulp.start('js-min');
});
gulp.task('watch', ['watch-less', 'watch-js', 'watch-images'], function () {
    console.log('Watching LESS, JS, Images');
});
gulp.task('watch-less', function () {
    gulp.watch('./less/**/*.less', ['less']);
});
gulp.task('watch-js', function () {
    gulp.watch('./js/**/*.js', ['js']);
});
gulp.task('watch-images', function () {
    gulp.watch('./images/**/*', ['images']);
});