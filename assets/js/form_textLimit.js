/**
 * 【フォーム】テキストエリアの文字制限
 */

$(function () {
  const limit50 = $(".js_textLimit50");
  const limit100 = $(".js_textLimit100");
  const limit1000 = $(".js_textLimit1000");

  const textareaError = function (elem, limitNUm) {
    const element = elem.currentTarget;
    element.previousElementSibling.querySelector(".js_textNum").textContent = limitNUm - element.value.length;

    // 10文字以内は色変更・太字
    if (Number(element.previousElementSibling.querySelector(".js_textNum").textContent) < 10) {
      element.previousElementSibling.querySelector(".js_textNum").style.color = "#e35768";
      element.previousElementSibling.querySelector(".js_textNum").style.fontWeight = "bold";
    } else {
      element.previousElementSibling.querySelector(".js_textNum").style.color = "#444444";
      element.previousElementSibling.querySelector(".js_textNum").style.fontWeight = "normal";
    }

    // 制限文字数に達したらエラーメッセージ
    if (element.value.length > limitNUm) {
      element.classList.add("is_error");
    } else {
      element.classList.remove("is_error");
    }
  };

  // 実行
  limit50.on("keydown keyup keypress paste change", e => textareaError(e, 50));
  limit100.on("keydown keyup keypress paste change", e => textareaError(e, 100));
  limit1000.on("keydown keyup keypress paste change", e => textareaError(e, 1000));
});
