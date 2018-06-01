const gulp = require('gulp');

const jshint = require('gulp-jshint');
const jsfiles = ['*.js', 'src/**/*.js'];
gulp.task('style', () => {
    return gulp.src(jsfiles)
        .pipe(jshint());
});

const wiredep = require('wiredep').stream;
gulp.task('inject', () => {
    const options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components',
        ignorePath: '../../bower_components'
    }
    const inject = require('gulp-inject');
    const injectSrc = gulp.src([
        './public/css/*.css',
        './public/js/*.js'
    ]);
    const injectOptions = {
        ignorePath: '/public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

const nodemon = require('gulp-nodemon');
gulp.task('serve', ['style', 'inject'], () => {
    const options = {
        script: 'app.js',
        delayTime: 1,
        watch: jsfiles
    };
    return nodemon(options)
        .on('restart', (event) => {
            console.log("Server Restarting..");
        })
});