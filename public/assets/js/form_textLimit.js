/**
 * 【フォーム】テキストエリアの文字制限
 */

document.addEventListener('DOMContentLoaded', function () {
  const limit50 = document.querySelectorAll(".js_textLimit50");
  const limit100 = document.querySelectorAll(".js_textLimit100");
  const limit1000 = document.querySelectorAll(".js_textLimit1000");

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

  // イベントリスナーを設定する関数
  const addTextLimitEvents = function (elements, limitNum) {
    const events = ['keydown', 'keyup', 'keypress', 'paste', 'change'];
    elements.forEach(function (element) {
      events.forEach(function (eventType) {
        element.addEventListener(eventType, function (e) {
          textareaError(e, limitNum);
        });
      });
    });
  };

  // 実行
  addTextLimitEvents(limit50, 50);
  addTextLimitEvents(limit100, 100);
  addTextLimitEvents(limit1000, 1000);
});
