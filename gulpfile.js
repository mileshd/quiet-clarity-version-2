var gulp = require('gulp');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function() {
    gulp.src('src/styles/**/*.scss')
    .pipe(compass({
        config_file: './config.rb',
        css: 'dist',
        sass: 'src/styles'
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
    gulp.src('src/scripts/**/*')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
    gulp.src('src/images/**/*')
    .pipe(imagemin({
      progressive: true   
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function() {
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch([
        'dist/**/*'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(connect.reload());
    });
    gulp.watch(['src/**/*.html'], ['copy']);
    gulp.watch(['src/styles/**/*.scss'], ['styles']);
    gulp.watch(['src/images/**/*'], ['images']);
    gulp.watch(['src/scripts/**/*'], ['scripts']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 7000,
        livereload: true
    });
});

gulp.task('default', ['styles', 'scripts', 'images', 'copy', 'connect', 'watch']);
