(function() {
  // ユーザー名を取得
  if (document.getElementsByTagName('h1')[0] !== undefined) {
    user_name = document.getElementsByTagName('h1')[0].title;
  } else if (document.getElementsByClassName('e1e1d')[0] !== undefined) {
    user_name = document.getElementsByClassName('e1e1d')[0].title;
  }

  // 画像要素を取得
  if (document.getElementsByClassName('_97aPb ').length > 0) {
    // 一覧ページでモーダルウィンドウ表示時の場合
    // 詳細ページの場合
    var wrap_elements = document.getElementsByClassName('_97aPb ');
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
      var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
      var mimeType = 'image/jpeg'; // MIMEType
      var img_path = img_elements[i].src; // ダウンロードしたい画像のパス
      var blob = new Blob([bom, img_path], {"type" : mimeType});
      var dl_link = document.createElement('a');
      wrap_elements[0].appendChild(dl_link);
      dl_link.target    = '_blank';
      dl_link.innerText = 'ダウンロードリンク';
      dl_link.download  = user_name + img_path;
      dl_link.href      = img_path;
      dl_link.click();
      // wrap_elements[0].removeChild(dl_link);
    }
  }

// TODO: 一括DLの時画像がトリミング状態になっている
// ダウンロードファイル名

})();
