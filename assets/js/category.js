/**
 * サブカテゴリメニューの開閉（大カテゴリをクリックしたら小カテゴリが開く）
 */

$(function () {
  $(".js_main_cat_item").click(function () {
    $(this).toggleClass("is_open");
    $(this).children(".sub_cat_inner").toggleClass("is_open");
  });
});
