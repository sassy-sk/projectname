// サイト全体に共通するJSの設定です。

/**
 * ヘッダー関連の動作
 */

document.addEventListener('DOMContentLoaded', function () {
  //通知リスト・マイページメニューを閉じる
  const notification = document.getElementById("notificationList");
  const mymenu = document.getElementById("mypageMenu");

  if (!notification || !mymenu) return;

  function reset_notification() {
    // Bootstrapのcollapse APIを使用（Bootstrapが読み込まれている場合）
    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
      const collapseInstance = bootstrap.Collapse.getInstance(notification);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    } else {
      // Bootstrapがない場合の手動実装
      notification.classList.remove("show");
      notification.classList.add("collapse");
    }
  }

  function reset_mymenu() {
    // Bootstrapのcollapse APIを使用（Bootstrapが読み込まれている場合）
    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
      const collapseInstance = bootstrap.Collapse.getInstance(mymenu);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    } else {
      // Bootstrapがない場合の手動実装
      mymenu.classList.remove("show");
      mymenu.classList.add("collapse");
    }
  }

  // 通知リストを開いた時
  notification.addEventListener("shown.bs.collapse", function () {
    //メニュー本体以外をクリックしたらメニューを閉じる
    function handleClick(e) {
      if (!e.target.closest("#notificationList")) {
        reset_notification();
        document.removeEventListener("click", handleClick);
        document.removeEventListener("touchend", handleClick);
      }
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("touchend", handleClick);
  });

  // 通知内商品名
  const productNames = notification.querySelectorAll(".productName");
  productNames.forEach(function (productName) {
    if (productName.textContent.length > 21) {
      productName.textContent = productName.textContent.substr(0, 20) + "…";
    }
  });

  //マイページメニューを開いた時
  mymenu.addEventListener("shown.bs.collapse", function () {
    document.body.style.overflow = "hidden";
    //メニュー本体以外をクリックしたらメニューを閉じる
    function handleClick(e) {
      if (!e.target.closest("#mypageMenu")) {
        reset_mymenu();
        document.body.style.overflow = "auto";
        document.removeEventListener("click", handleClick);
        document.removeEventListener("touchend", handleClick);
      }
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("touchend", handleClick);
  });
});
