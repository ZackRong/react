/**
 * Created by rongzhx on 2017/5/12 0012.
 */
var gulp = require("gulp");
var rename = require("gulp-remane");
var pump = require("pump");

gulp.task("renameJS", function(){
    gulp.src("./!webpack.config.js")
})