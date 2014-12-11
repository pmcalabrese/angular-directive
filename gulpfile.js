var gulp = require('gulp');
var gutil = require('gulp-util');
var bump = require('gulp-bump');
var markdox = require('gulp-markdox');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');

gulp.task('bump', function(){
  gulp.src('./package.json')
	.pipe(bump())
	.pipe(gulp.dest('./'));
});

gulp.task("doc", function(){
  gulp.src("./src/*.js")
    .pipe(markdox())
	.pipe(addsrc('intro.md'))
    .pipe(concat("README.md"))
    .pipe(gulp.dest("./"));
});