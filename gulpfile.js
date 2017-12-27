
// 読みこみ
var gulp       = require('gulp');
var replace    = require('gulp-replace');
var uglify     = require('gulp-uglify');
var pump       = require('pump');

// パスを定義
var paths = {
  'src'      : './src/',
  'src_js'   : './src/*.js',
  'dest'     : './dest/',
  'dest_js'  : './dest/*.js',
}

// jsビルドのタスクを登録
gulp.task('js', function (cb) {
  pump([
        gulp.src(paths.src_js),
        // 圧縮処理
        uglify(),
        // ファイルの先頭に「javascript:」を追記する
        replace(/^(.*)/, 'javascript:$1'),
        gulp.dest(paths.dest)
    ],
    cb
  );
});

// 自動監視タスクを登録
gulp.task('watch', function () {
  gulp.watch(paths.src_js, ['js']);
});

// デフォルトのタスクを登録
gulp.task('default', ['js', 'watch']);