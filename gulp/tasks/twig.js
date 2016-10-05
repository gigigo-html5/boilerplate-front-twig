'use strict';

const gulp          = require('gulp');
const twig          = require('gulp-twig');
const data          = require('gulp-data');
const ext_replace   = require('gulp-ext-replace');
const htmlmin       = require('gulp-htmlmin');

const config = require('../config');

gulp.task('twig', function() {
    return gulp.src(config.paths.src + '/twigs/*.html.twig')
        .pipe(data(function(file) {
            return require('./../../src/data/twigData.json');
        }))
        .pipe(twig())
        .pipe(ext_replace('', '.html'))
        .pipe(gulp.dest(config.paths.src))
        //.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest(config.paths.dist))
        .on('error', function(error) {
            console.log(error);
        });
})
