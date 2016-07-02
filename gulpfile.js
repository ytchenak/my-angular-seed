var gulp = require("gulp");
var ts = require("gulp-typescript");
var install = require("gulp-install");
var typings = require("gulp-typings");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", ['typescript', 'typings']);

gulp.task("typescript", [], function () {
    return tsProject.src()
        .pipe(ts(tsProject));
});

gulp.task("bower", function () {
    return gulp.src(['./bower.json'])
        .pipe(install())
});


gulp.task("typings",function(){
    return gulp.src("./typings.json")
        .pipe(typings());
});