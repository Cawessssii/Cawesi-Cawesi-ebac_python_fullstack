const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const cssNano = require('gulp-cssnano');
const sourceMaps = require('gulp-sourcemaps');
const image_min = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function sass(cb){
    gulp.src('./source/main.scss')
        .pipe(sourceMaps.init())
        .pipe(gulpSass())
        .pipe(cssNano({
            autoprefixer: {
                browsers: ['>1%', 'last 2 version'],
                add: true
            }
        }))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./build'))
        cb()
}

function images(cb){
    gulp.src('./assets/image/*.*')
        .pipe(image_min())
        .pipe(gulp.dest('./assets/dist_image'))
        cb()
}

function jsCompress(cb){
    gulp.src('./js/script.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist_js'))
        cb()
}

exports.default = gulp.parallel(sass, images, jsCompress);