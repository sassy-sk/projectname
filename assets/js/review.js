/**
 * 商品レビュー「続きを読む」ボタン
 */

$(function () {
  // 対象テキスト
  const reviewText = $(".js_reviewText");
  // 続きを読むボタン
  const reviewMoreBtn = $(".js_reviewMoreBtn");
  // 設定高さ
  const baseHeight = 100;

  function updateReviewTextHeight() {
    reviewText.each(function () {
      // テキスト全文の高さ
      let reviewTextHeight = $(this).height();
      // 設定高さより少ないときはもっと見るボタン非表示
      if (reviewTextHeight <= baseHeight) {
        $(this).siblings(reviewMoreBtn).hide();
      } else {
        $(this).addClass("is_accordion");
      }
    });
  }

  // 初期状態で高さを更新
  updateReviewTextHeight();

  // ブラウザ幅が変更された際に高さを更新
  $(window).resize(function () {
    updateReviewTextHeight();
  });

  // 「続きを読む」「閉じる」の対応
  $(reviewMoreBtn).click(function () {
    let originalHeight = $(this)
      .siblings(reviewText)
      .css({
        height: ""
      })
      .innerHeight();

    let parentElement = $(this).parent();

    parentElement.toggleClass("is_active");
    if ($(this).hasClass("is_open")) {
      $(this).removeClass("is_open");
      $(this).text("続きを読む");
      parentElement.css({
        "max-height": baseHeight,
        overflow: "hidden"
      });
    } else {
      $(this).addClass("is_open");
      $(this).text("閉じる");
      parentElement.css({
        "max-height": originalHeight,
        overflow: "visible"
      });
    }
  });
});
