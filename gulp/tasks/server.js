'use strict';

const gulp          = require('gulp');
const config        = require('../config');
const browserSync   = require('browser-sync').create();

// Static server
gulp.task('server', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: config.paths.dist,
            port: 8000
        }
    });

    gulp.watch(config.paths.src+'/assets/scss/*.scss', ['sass', 'images']).on('change', browserSync.reload);
    gulp.watch(config.paths.src+'/assets/img/*', ['copy-images']).on('change', browserSync.reload);
    gulp.watch(config.paths.src+'/assets/js/*.js', ['bundle']).on('change', browserSync.reload);
    gulp.watch(config.paths.src+'/twigs/*.twig', ['twig', 'html']).on('change', browserSync.reload);
    //gulp.watch(config.paths.src+'/data/*.json', ['build']).on('change', browserSync.reload);
    gulp.watch(config.paths.dist+'/*').on('change', browserSync.reload);
});
