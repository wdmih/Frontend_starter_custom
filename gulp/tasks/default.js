import gulp from 'gulp';
import runSequence from 'run-sequence';
import options from '../../options';

gulp.task('default', () => {
  runSequence(
    [
      'png-sprite',
      'svg-sprite',
      'fonts',
      'html',
      'scss',
      'scripts:compile',
      'images',
      'components',
      'static'
    ],
    'livereload',
    'watch'
  );
});
