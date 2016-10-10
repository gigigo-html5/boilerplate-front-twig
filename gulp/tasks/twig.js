'use strict';

const gulp          = require('gulp');
const twig          = require('gulp-twig');
//const data          = require('gulp-data');
const ext_replace   = require('gulp-ext-replace');

const config = require('../config');

gulp.task('twig', ['clean-html'], function(done) {
    return gulp.src(config.paths.src + '/twigs/*.html.twig')
        // .pipe(data(function(file) {
        //     return require('./../../src/data/twigData.json');
        // }))
        .pipe(twig({
            data: config.paths.twigData
        }))
        .pipe(ext_replace('', '.html'))
        .pipe(gulp.dest(config.paths.src))
        .pipe(gulp.dest(config.paths.dist))
        .on('error', function(error) {
            console.log(error);
        });
})
