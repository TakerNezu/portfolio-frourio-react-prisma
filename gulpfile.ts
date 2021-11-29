import gulp from 'gulp'
import alias from 'gulp-ts-alias'
import typescript from 'gulp-typescript'

gulp.task('default', (done) => {
  gulp.src('./server/json/index.ts', {base: './server'})
    .pipe(alias({
      config: {
        "paths": {
          "$/*": ["./*"]
        }
      }
    }))
    .pipe(typescript({
      resolveJsonModule: true,
    }))
    .js
    .pipe(gulp.dest('./server'));

  done()
})