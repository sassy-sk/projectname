/**
 * 質問コメント
 */

$(function () {
  // 読み込み時に吹き出しの高さを計測。4行以上の高さだったら.is_accordionを付ける。「続きを読む」「閉じる」の対応の為。
  $(".comment_box .commentText").each(function () {
    const height = $(this).height();
    const $comment = $(this).parents(".comment");
    if (height >= 120) {
      // 高さ120pxを4行とする
      $comment.addClass("is_accordion");
    }
  });

  // 吹き出しの「続きを読む」「閉じる」の対応
  $(".comment_box .comment .more, .comment_box .comment .close").on("click", function () {
    const $comment = $(this).closest(".is_accordion");
    const $commentText = $(this).siblings(".commentText");
    const commentTextheight = $commentText.get(0).scrollHeight;
    // is_activeを付け外し
    $comment.toggleClass("is_active");
    // 吹き出しが開くときのアニメーション用にmax-heightを付け外し
    if ($comment.hasClass("is_active")) {
      // is_activeが付いたときの吹き出しのpadding-bottomの値を取得
      const commentTextheightPaddingBottom = Number($commentText.css("paddingBottom").replace(/px/, ""));
      $commentText.css("maxHeight", commentTextheight + commentTextheightPaddingBottom);
    } else {
      $commentText.css("maxHeight", "");
    }
    // 「コメントをもっと見る」ボタンでコメントたちが全数表示になっている時、heightをautoで上書き。吹き出しが広がりきらない為。
    $(this).closest(".overComment.is_active").height("auto");
    // リンク先に飛ばないように止める
    return false;
  });

  // コメント数が多いときに「コメントをもっと見る」ボタンを出して制御
  const $commentListLi = $(".commentList li");
  const commentListLiShowLength = 3; //最初に表示しておくコメント数
  if ($commentListLi.length > commentListLiShowLength) {
    $(".commentShowAllBtn_box").show();
  }
  // 多いコメントをclassを付けて隠す
  $commentListLi.each(function (index) {
    if (index < commentListLiShowLength) {
      return true;
    }
    $(this).addClass("overComment");
  });
  // 「コメントをもっと見る」ボタンを押した対応
  $(".commentShowAllBtn_box button").on("click", function () {
    // 隠していたコメントを表示
    const $overComment = $(".commentList .overComment");
    $overComment.toggleClass("is_active");
    // コメントが開くときのアニメーション用にheightを付け外し
    $overComment.each(function () {
      if ($(this).hasClass("is_active")) {
        const overCommentheight = $(this).get(0).scrollHeight;
        $(this).height(overCommentheight);
      } else {
        $(this).height("");
      }
    });
    // 「コメントをもっと見る」ボタンを入れ替え
    $(".commentShowAllBtn_box").toggleClass("is_active");
  });
});
