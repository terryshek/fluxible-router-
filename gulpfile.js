var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task("webpack", function() {
    return gulp.src()
        .pipe(webpack("./webpack.config.js"))
        .pipe();
});