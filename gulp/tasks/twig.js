'use strict';

const gulp          = require('gulp');
const twig          = require('gulp-twig');
//const data          = require('gulp-data');
const ext_replace   = require('gulp-ext-replace');

const config = require('../config');

// Documentation: https://www.npmjs.com/package/gulp-twig

gulp.task('twig', ['clean-html'], function(done) {
    return gulp.src(config.paths.src + '/twigs/*.html.twig')

        .pipe(twig({

            cache: false,
            data: config.paths.twigData,
            debug: false,
            errorLogToConsole: true,

            // Custom filters
            filters: [
                {
                    name: "customFilter",
                    func: function (arg) {
                        return "<a>" + arg + "</a>";
                    }
                }
            ],

            // Custom functions
            functions: [
                {
                    name: "customFunction",
                    func: function (arg) {
                        return arg + " the custom function";
                    }
                },

                {
                    name: "menu",
                    func: function () {
                        return "<ul><li><a>Home</a></li><li><a>Options</a></li><li><a>Contact</a></li></ul>"
                    }
                }
            ]
        }))

        .pipe(ext_replace('', '.html'))
        //.pipe(gulp.dest(config.paths.src))
        .pipe(gulp.dest(config.paths.dist))
        .on('error', function(error) {
            console.log(error);
        });
})
