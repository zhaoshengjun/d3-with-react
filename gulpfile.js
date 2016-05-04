var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('server', function () {
  connect.server({
    livereload: true,
    port: 8000
  })
});

gulp.task('webpack', function () {
  gulp.src('src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('default', ['server', 'webpack']);