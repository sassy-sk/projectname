/**
 * お気に入りボタン
 */

$(function () {
  const favBtn = $(".js_favBtn");

  // ツールチップの制御
  if ($(favBtn).hasClass("is_active")) {
    $(this).find(".tip").text("お気に入りから削除");
  } else {
    $(this).find(".tip").text("お気に入りに追加");
  }

  favBtn.on("click", function () {
    $(this).toggleClass("is_active");

    const countBox = $(this).children(".count");
    const count = countBox.text();
    const num = Number(count);

    if ($(this).hasClass("is_active")) {
      countBox.text(num + 1);
      $(this).find(".tip").text("お気に入りから削除");
    } else {
      $(this).find(".tip").text("お気に入りに追加");
      if (num - 1 < 0) {
        countBox.text(0);
      } else {
        countBox.text(num - 1);
      }
    }
  });
});
