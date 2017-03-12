const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('gulp-browserify');
const gzip = require('gulp-gzip');
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const _ = require('lodash');
const XRegExp = require('xregexp');


//图片压缩
const imagemin = require('gulp-imagemin');
//gulp 通知
const notify = require('gulp-notify');
//错误处理
const plumber = require('gulp-plumber');
//浏览器监控
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

let data = {
    msg: "Hello Gulp!",
    juge: false
};

function getPath(str) {
    var pattern = /\\[^\\\\/:*?"<>|]+/g;
    var evens = [];
    XRegExp.forEach(str, pattern, function (match, i) {
        evens.push(match[0]);
    });
    evens = _.dropRight(evens);
    return 'D:' + evens.toString().replace(/,/g, '')
}

gulp.task('uglify', function () {
    gulp.src('js/AreaData_min.js')
    //      .pipe(concat('all.js'))
    //      .pipe(gulp.dest('./dist'))
    //      .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('babel', function () {
    gulp.src('./src/js/index.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(browserify({
            insertGlobals: true,
            // debug : !gulp.env.production
        })).on('prebundle', function (bundle) {
        bundle.external('./global.json');
    })
        .pipe(gulp.dest('./dist'))
});

gulp.task('g-zip', function () {
    gulp.src('src/js/*.js')
        .pipe(gzip())
        .pipe(gulp.dest('./dist'))
});

gulp.task('ejs', function () {
    gulp.src("./src/index.html")
        .pipe(ejs(data))
        .pipe(gulp.dest("./dist"))
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['scss']);
});

gulp.task('scss', function () {
    browserSync.init({
        server: "./"
    });
    return watch('./css/**/*.scss', function (e) {

        gulp.src(e.path)
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 4 versions', 'Android >= 4.0'],
                cascade: true, //是否美化属性值 默认：true 像这样：
                //-webkit-transform: rotate(45deg);
                //        transform: rotate(45deg);
                remove: true, //是否去掉不必要的前缀 默认：true//
                sourcemap: true 
            }))
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest(getPath(e.path)))
            .pipe(reload({stream: true}))
            .pipe(notify({message: '编译完成'}))
    })
});

gulp.task('images', function () {
    return gulp.src('img/**/*.png')
        .pipe(imagemin({optimizationLevel: 2, progressive: true, interlaced: true}))
        .pipe(gulp.dest('assets/img'))
        .pipe(notify({message: '图片压缩完成'}));
});


