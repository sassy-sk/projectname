/**
 * 【フォーム】フォームに文字が入力されるとボタンのdisabledが外れる
 */

document.addEventListener('DOMContentLoaded', function () {
  const inputActiveText = document.querySelectorAll(".js_inputActiveText");
  const inputActiveTextBtn = document.querySelectorAll(".js_inputActiveTextBtn");

  // ボタンを最初に無効にする
  inputActiveTextBtn.forEach(function (btn) {
    btn.disabled = true;
  });

  // 各入力フィールドにイベントリスナーを設定
  inputActiveText.forEach(function (input, index) {
    const events = ['keydown', 'keyup', 'keypress', 'paste', 'change'];
    const btn = inputActiveTextBtn[index] || inputActiveTextBtn[0]; // 対応するボタンを取得（インデックスで対応、なければ最初のボタン）

    events.forEach(function (eventType) {
      input.addEventListener(eventType, function (e) {
        // inputActiveTextの値が空かどうかを確認し、ボタンの無効化を切り替える
        if (e.target.value.trim() === "") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      });
    });
  });
});
