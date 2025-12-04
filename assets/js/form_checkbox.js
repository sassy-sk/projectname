/**
 * 【フォーム】チェックボックスの制御
 */

document.addEventListener('DOMContentLoaded', function () {
  function initCheckboxEvents() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // 既存のイベントリスナーを削除するために、一度すべてのチェックボックスからイベントを削除
    // 新しいイベントリスナーを設定する前に、古いリスナーを削除する必要がある
    checkboxes.forEach(function (checkbox) {
      // 既存のイベントリスナーを削除するために、一度イベントを削除
      const newCheckbox = checkbox.cloneNode(true);
      checkbox.parentNode.replaceChild(newCheckbox, checkbox);
    });

    // 新しいイベントリスナーを設定
    const newCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    newCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function (e) {
        e.target.parentNode.classList.toggle("is_current");
        e.target.parentNode.parentNode.classList.toggle("is_current");
      });
    });
  }
  
  // イベントリスナーを初期化
  initCheckboxEvents();
});
