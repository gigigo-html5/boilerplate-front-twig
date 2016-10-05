'use strict';

const fs = require('fs');
const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);

fs.readdirSync('./gulp/tasks/').forEach((task) => {
    require('./tasks/' + task);
});

gulp.task('start-dev', ['build'], function(done) {
    gulp.start('server', done);
});

gulp.task('build', ['clean'], function(done) {
    runSequence(['images', 'sass', 'twig'], ['bundle'], done)
});
