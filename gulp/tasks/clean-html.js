'use strict';

const gulp      = require('gulp');
const clean     = require('gulp-clean');
const config    = require('../config');

gulp.task('clean-html', function () {
  return gulp.src(config.paths.dist + '/*.html', {read: false})
    .pipe(clean());
});
