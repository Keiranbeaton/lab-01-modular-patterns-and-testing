const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var testFiles = ['test/**/*.js'];
var appFiles = ['lib/**/*.js', 'bin/cowsay'];
gulp.task('lint:app', () => {
  gulp.src(appFiles)
    .pipe(eslint({
      rules: {
        'indent': [2,2]
      },
      envs: [
        'node',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  gulp.src(testFiles)
    .pipe(eslint({
      rules: {
        'indent': [2,2]
      },
      envs: [
        'node',
        'es6',
        'mocha'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('test:app', () => {
  gulp.src(appFiles, {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['lint:app', 'lint:test']);
