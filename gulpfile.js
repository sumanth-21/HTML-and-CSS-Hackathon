const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');
 
// Load plugins
 
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
 
// Clean assets
 
function clear() {
    return src('./dist/*', {
            read: false
        })
        .pipe(clean());
}
 
// JS function 
 
function js() {
    const source = './src/js/*.js';
 
    return src(source)
        // .pipe(changed(source))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('./dist/js/'))
        .pipe(browsersync.stream());
}
 
// CSS function 
 
function css() {
    const source = './src/scss/base.scss';
 
    return src(source)
        // .pipe(changed(source))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('styles.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('maps/'))
        .pipe(dest('./dist/css/'))
        .pipe(browsersync.stream());
}
 
// Optimize images
 
function img() {
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}

function fonts() {
    return src('./src/fonts/*')
        .pipe(dest('./dist/fonts'));
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}
// Watch files
 
function watchFiles() {
    watch('./**/*.html', browserSyncReload);
    watch('./src/scss/*', css);
    watch('./src/js/*', js);
    watch('./src/img/*', img);
}
 
// BrowserSync
 
function browserSync() {
    browsersync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
}
 
// Tasks to define the execution of the functions simultaneously or in series
exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(js, css, img, fonts));
