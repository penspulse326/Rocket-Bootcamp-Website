//  套件定義
//  在 package.json 內引用的套件

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

// 定義路徑

const paths = {
  script: {
    src: "src/scripts/*.js",
    dest: "build/",
  },
};

// 建構工作

const buildScript = async function (cb) {
  gulp
    .src(paths.script.src)
    .pipe(concat("all.js"))
    .pipe(gulp.dest(paths.script.dest))
    .pipe(rename("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.script.dest));
  cb();
};

// 監看工作

const watchFiles = async function () {
  gulp.watch(paths.script.src, buildScript);
};

// 輸出工作

exports.default = gulp.series(buildScript, watchFiles);
