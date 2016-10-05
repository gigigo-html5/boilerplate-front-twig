const gulp      = require('gulp');
const config    = require('../config');

gulp.task('scripts', function() {
    return gulp.src(paths.src+'/assets/js/*.js')
    .pipe(gulp.dest(paths.dist+'/assets/js'));
});
