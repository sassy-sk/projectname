// サイト全体に共通するJSの設定です。

/**
 * ヘッダー関連の動作
 */

$(function () {
  //通知リスト・マイページメニューを閉じる
  const notification = $("#notificationList");
  const mymenu = $("#mypageMenu");

  function reset_notification() {
    notification.collapse("hide");
  }
  function reset_mymenu() {
    mymenu.collapse("hide");
  }

  //通知リストを開いた時
  notification.on("shown.bs.collapse", function () {
    //メニュー本体以外をクリックしたらメニューを閉じる
    $(document).on("click touchend", function (e) {
      if (!$(e.target).closest("#notificationList").length) {
        reset_notification();
      }
    });
  });

  // 通知内商品名
  $("#notificationList .productName").each(function () {
    if ($(this).text().length > 21) {
      $(this).text($(this).text().substr(0, 20));
      $(this).append("…");
    }
  });

  //マイページメニューを開いた時
  mymenu.on("shown.bs.collapse", function () {
    $("body").css("overflow", "hidden");
    //メニュー本体以外をクリックしたらメニューを閉じる
    $(document).on("click touchend", function (e) {
      if (!$(e.target).closest("#mypageMenu").length) {
        reset_mymenu();
        $("body").css("overflow", "auto");
      }
    });
  });
});

// マイクロサービスごとの共通JSは下記に記載▼
