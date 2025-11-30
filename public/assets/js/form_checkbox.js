/**
 * 【フォーム】チェックボックスの制御
 */

$(function () {
  function initCheckboxEvents() {
    const checkbox = $('input[type="checkbox"]');
    checkbox.off("change"); // イベントリスナーを解除
    checkbox.on("change", function (e) {
      e.target.parentNode.classList.toggle("is_current");
      e.target.parentNode.parentNode.classList.toggle("is_current");
    });
  }
  // イベントリスナーを初期化
  initCheckboxEvents();
});
