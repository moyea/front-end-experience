"use strict";
var gulp = require('gulp');
/**
 * 文件删除
 */
var del = require('del');
var notify = require('gulp-notify');

//sass
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

//babel
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');
// var through = require('through2');


//图片处理相关
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var spritesmith = require('gulp.spritesmith');
//babel 配置项
var babelOptions = {
    presets: ['es2015', 'react'],
    plugins: ['transform-es2015-modules-umd']
};

//ref:
//https://github.com/twolfson/gulp.spritesmith
var spriteOpts = {
    imgName: '',//sprite img file name
    cssName: '',
    imgPath: '',//img relative path
    cssTemplate: '',//样式模板
    groupBy: '',//分组的sprites
    algorithm: '',//<top-down|left-right|diagonal|alt-diagonal|binary-tree>
    padding: 1//number 相邻图片的间隔(px)
};


//browser-sync
var browserSync = require('browser-sync').create();


//work path
var paths = {
    sass: {
        src: ['./src/scss/*.scss'],
        lib: './src/css'
    },
    react: {
        src: [
            './src/js/react-demos/**/*.js',
            '!src/tests/*.js'
        ],
        lib: 'src/js/react-demos/build/modules'
    }
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src(paths.sass.src)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.sass.lib))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(paths.sass.lib))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});


gulp.task("react:build", function () {
    return gulp.src(paths.react.src)
        .pipe(babel(babelOptions))
        .on('error', notify.onError({
            message: "Error:<%= error.message %>"
        }))
        .pipe(flatten())
        .pipe(gulp.dest(paths.react.lib));
});


gulp.task("react:clean", function () {
    return del([paths.react.lib]);
});

gulp.task("react:watch", function () {
    gulp.watch(paths.react.src, ['react:clean', 'react:build']);
});

/* 浏览器自动刷新 */
gulp.task('browser-sync', function () {
    browserSync.init({
        /* files指定哪些文件发生变更时刷新浏览器 */
        files: ["./src/views/*.html", "./src/css/*.css", "./src/js/*.js"],
        server: {
            baseDir: "./src/views"
        }
    });
});

gulp.task('min-img', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./dest/images/'))
        .pipe(notify({message: 'img task ok'}));
});


//构建sprite图
gulp.task('sprite:build', function () {
    var spriteData = gulp.src(paths.sprite.source) // source path of the sprite images
        .pipe(spritesmith(
            paths.sprite.config
        ));
    spriteData.img.pipe(gulp.dest(paths.sprite.outputPath)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(paths.sprite.outputPath)); // output path for the CSS
});
