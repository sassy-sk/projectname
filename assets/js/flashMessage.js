/**
 * フラッシュメッセージ
 */

$(function () {
  // クラスが付与されたら表示
  if ($(".js_flashMsg").hasClass("is_active")) {
    $(".js_flashMsg").slideDown();

    // 4秒後に非表示に
    setTimeout(() => {
      $(".js_flashMsg").slideUp();
    }, 4000);
  }
});
