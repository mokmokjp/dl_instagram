(function() {
  // プロフィール画像を取得
  var temp = document.getElementsByClassName('_9bt3u');
  if (temp.length > 0) {
    // 一覧ページの場合
    var elem = document.getElementsByClassName('_sxolz');
    var img = elem[0].getElementsByTagName('img');
  } else {
    // 詳細ページの場合
    var elem = document.getElementsByClassName('_4rbun');
    var img = elem[0].getElementsByTagName('img');
  }
  // ダウンロードしたいコンテンツ、MIMEType、ファイル名
  var imgpath  = img[0].src;
  var name     = img[0].src;
  var mimeType = 'image/jpeg';
  // BOMは文字化け対策
  var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
  var blob = new Blob([bom, imgpath], {type : mimeType});
  var a = document.createElement('a');
  a.download = name;
  a.target   = '_blank';
  a.href = name;
  a.click();
})();