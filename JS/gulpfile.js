const gulp = require('gulp')
// 걸프 의존성을 작성한거
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

// 개발 과정의 반복 작업을 자동화하는 빌드 도구가 걸프래

gulp.task('default',async function(){
    // 걸프 작업을 여기 쓴데.
    gulp.src(["es6/**/*.js","public/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
    //es6디렉터리의 모든 .js파일들 **는 서브디렉터리를 포함해 모든 디렉터리를 파이프로 연결
    // 노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"))
    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"))

});