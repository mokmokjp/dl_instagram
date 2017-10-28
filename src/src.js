(function() {
  // プロフィール画像を取得
  var temp = document.getElementsByClassName('_9bt3u');
  if (temp.length > 0) {
    // 一覧ページの場合
    var elem = document.getElementsByClassName('_sxolz');
    var img = elem[0].childNodes[0].childNodes[0].childNodes[0];
    if (!img.src) {
      var img = elem[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
    }
  } else {
    // 詳細ページの場合
    var elem = document.getElementsByClassName('_4rbun');
    var img = elem[0].childNodes[0];
  }
  // ダウンロードしたいコンテンツ、MIMEType、ファイル名
  var content  = img.src;
  var mimeType = 'image/jpeg';
  var name     = img.src;
  // BOMは文字化け対策
  var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
  var blob = new Blob([bom, content], {type : mimeType});
  var a = document.createElement('a');
  a.download = name;
  a.target   = '_blank';
  a.href = name;
  a.click();
})();