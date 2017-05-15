/**
 * Created by rongzhx on 2017/5/12 0012.
 */
var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('css', function () {
    return gulp.src('./*.css')
        .pipe(rev())
        .pipe(gulp.dest('./'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( './' ) );
});

gulp.task('scripts', function () {
    return gulp.src('./*.js')
        .pipe(rev())
        .pipe(gulp.dest('./'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( './' ) );
});

var revCollector = require('gulp-rev-collector');
var minifyHTML   = require('gulp-minify-html');

gulp.task('rev', function () {
    return gulp.src(['rev/**/*.json', './*.html'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                'css': '/dist/css/',
                'js/': '/dist/js/',
                'cdn/': function(manifest_value) {
                    return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
                }
            }
        }) )
        .pipe( minifyHTML({
            empty:true,
            spare:true
        }) )
        .pipe( gulp.dest('./') );
});