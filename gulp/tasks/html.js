const gulp      = require('gulp');
const config    = require('../config');
const htmlmin       = require('gulp-htmlmin');

gulp.task('html', function(done) {
    return gulp.src([config.paths.src+'/*.html'])
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest(config.paths.dist+'/'));
});
