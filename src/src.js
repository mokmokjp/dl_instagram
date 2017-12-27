(function() {
  // ユーザー名を取得
  if (document.getElementsByTagName('h1')[0] !== undefined) {
    user_name = document.getElementsByTagName('h1')[0].title;
  } else if (document.getElementsByClassName('_iadoq')[0] !== undefined) {
    user_name = document.getElementsByClassName('_iadoq')[0].title;
  }

  // 画像要素を取得
  if (document.getElementsByClassName('_sxolz').length > 0) {
    // 一覧ページでモーダルウィンドウ表示時の場合
    // 詳細ページの場合
    var wrap_elements = document.getElementsByClassName('_sxolz');
    var img_elements = wrap_elements[0].getElementsByTagName('img');
    var process = true;
  } else {
    // 一覧ページでモーダルウィンドウ非表示時の場合
    var img_elements = document.getElementsByClassName('_2di5p');
    if (confirm('ページ内に表示中の画像をすべてダウンロードします')) {
      var process = true;
    } else {
      var process = false;
    }
  }

  // 画像ダウンロード処理
  if (process) {
    for (var i = 0; i < img_elements.length; i++) {
        // var mimeType = 'image/jpeg'; // MIMEType
        // var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]); // BOMは文字化け対策
        // var blob = new Blob([bom, img_path], {type : mimeType});
      var img_path = img_elements[i].src; // ダウンロードしたい画像のパス
      var a = document.createElement('a');
      a.target   = '_blank';
      a.download = user_name + img_path;
      a.href = img_path;
      a.click();
    }
  }

// TODO: 一括DLの時画像がトリミング状態になっている
// ダウンロードファイル名

})();
