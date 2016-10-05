'use strict';

const gulp          = require('gulp');
const watchify      = require('watchify');
const browserify    = require('browserify');
const babel         = require('babelify');
const sourcemaps    = require('gulp-sourcemaps');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const browserSync   = require('browser-sync').create();
const gulpif        = require('gulp-if');
const uglify        = require('gulp-uglify');

const config        = require('../config');
const error         = require('../error');


function compile(watch, compress) {
    var bundler = watchify(browserify(config.paths.src+'/assets/js/app.js', { debug: true }).transform(babel));

    function rebundle() {
        bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(gulpif(compress, uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.dist+'/assets/js'));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
            browserSync.reload();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('bundle', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
