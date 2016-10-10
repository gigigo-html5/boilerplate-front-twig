const gulp      = require('gulp');
const config    = require('../config');

gulp.task('images', function(done) {
    return gulp.src([config.paths.src+'/assets/img/**/*'])
        .pipe(gulp.dest(config.paths.dist+'/assets/img'));
});
