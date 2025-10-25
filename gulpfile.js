const gulp = require("gulp");
// const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const rename = require("gulp-rename");

// Kompilacja SCSS i minifikacja CSS
function styles() {
  return (
    gulp
      .src("src/css/*.css")
      // .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("dist/css"))
  );
}

// Minifikacja JavaScript
function scripts() {
  return gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"));
}

// Minifikacja HTML
function html() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("dist"));
}

// function html2() {
//   return gulp
//     .src("src/terms.html")
//     .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
//     .pipe(gulp.dest("dist"));
// }

// Watcher
function watchFiles() {
  gulp.watch("src/css/*.css", styles);
  gulp.watch("src/js/*.js", scripts);
  gulp.watch("src/*.html", html);
}

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.dev = gulp.series(styles, scripts, html, watchFiles);
exports.prod = gulp.series(styles, scripts, html);
