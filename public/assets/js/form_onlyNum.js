/**
 * 【フォーム】半角数字でないとエラー
 */

$(function () {
  const onlyNumInput = $(".js_onlyNum");

  // 全角判定
  onlyNumInput.on("change", function (e) {
    const inputNum = e.target.value;
    // 全角判定
    if (inputNum.match(/^[^\x01-\x7E\uFF61-\uFF9F]+$/)) {
      e.target.parentNode.querySelector(".txt_error").classList.add("is_active"); // エラーテキスト表示
      e.target.value = ""; // 中身を空に
    } else {
      e.target.parentNode.querySelector(".txt_error").classList.remove("is_active");
    }
  });
});
