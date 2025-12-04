/**
 * 商品詳細
 * 「続きを見る」「閉じる」ボタンの挙動
 */

$(function () {
  function setAccordion(selector, heightLimit) {
    // 親要素ボックス
    const readMoreArea = $(selector);
    // 詳細説明ボックス
    const readMoreInner = $(`${selector} .readMore_inner`);
    // 「続きを見る」ボタン
    const readMoreBtn = $(`${selector} .readMore_btn`);
    // 詳細説明ボックス高さ
    const readMoreHeight = readMoreInner.height();

    // heightLimit以上の高さだった場合、親要素ボックスに.is_accordionを付ける。「続きを読む」「閉じる」の対応の為。
    if (readMoreHeight >= heightLimit) {
      readMoreArea.addClass("is_accordion");
    }

    // 詳細説明「続きを読む」「閉じる」の対応
    readMoreBtn.click(function () {
      // .is_activeを付け外し
      readMoreArea.toggleClass("is_active", 1000);
      if ($(this).hasClass("is_open")) {
        $(this).removeClass("is_open");
        $(this).text("続きを読む");
        $(`${selector}.is_accordion .readMore_inner`).css("max-height", "");
      } else {
        $(this).addClass("is_open");
        $(this).text("閉じる");
        $(`${selector}.is_active .readMore_inner`).css("max-height", readMoreHeight);
      }
    });
  }

  // 親セレクタのクラス名と希望のテキスト高さpxを設定（CSSも設定の必要あり）
  // 商品詳細（高さ360px以上の場合は.is_accordion表示)
  setAccordion(".product_description", 360);
});
