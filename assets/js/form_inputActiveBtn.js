/**
 * 【フォーム】フォームに文字が入力されるとボタンのdisabledが外れる
 */

$(function () {
  const inputActiveText = $(".js_inputActiveText");
  const inputActiveTextBtn = $(".js_inputActiveTextBtn");

  // ボタンを最初に無効にする
  inputActiveTextBtn.prop("disabled", true);

  inputActiveText.on("keydown keyup keypress paste change", e => {
    // inputActiveTextの値が空かどうかを確認し、ボタンの無効化を切り替える
    if (inputActiveText.val().trim() === "") {
      inputActiveTextBtn.prop("disabled", true);
    } else {
      inputActiveTextBtn.prop("disabled", false);
    }
  });
});
