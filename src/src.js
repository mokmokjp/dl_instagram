(function() {
  // ユーザー名を取得
  if (document.getElementsByTagName('h1')[0] !== undefined) {
    var user_name = document.getElementsByTagName('h1')[0].title;
  } else if (document.getElementsByClassName('e1e1d')[0] !== undefined) {
    var user_name_a = document.getElementsByClassName('e1e1d')[0].getElementsByTagName('a');
    var user_name = user_name_a[0].innerText
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
      var img_path = img_elements[i].src; // ダウンロードしたい画像のパス
      // Ajaxで取得
      var xhr = new XMLHttpRequest();
      xhr.open('GET', img_path);
      xhr.responseType = 'blob';
      xhr.addEventListener('load', function(event){
        // console.log(event.target.response);
        var res_img = event.target.response;
        // blobオブジェクトを作る
        var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
        var mimeType = 'image/jpeg'; // MIMEType
        var blob = new Blob([bom, res_img], {"type" : mimeType});
        // a要素を作る
        var dl_link = document.createElement('a');
        var url = window.URL || window.webkitURL;
        var blobUrl = url.createObjectURL(blob);
        wrap_elements[0].appendChild(dl_link);
        dl_link.target    = '_blank';
        dl_link.innerText = 'ダウンロードリンク';
        var arrFilename = img_path.split( /\// );
        var filename_index = arrFilename.length - 1;
        dl_link.download  = user_name + '_' + arrFilename[filename_index];
        dl_link.href      = blobUrl;
        // ダウンロード処理
        dl_link.click();
        // a要素を取り除く
        wrap_elements[0].removeChild(dl_link);
      });
      xhr.send();
    }
  }
})();

// TODO: 一括DLの時画像がトリミング状態になっている

