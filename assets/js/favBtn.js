/**
 * お気に入りボタン
 */

document.addEventListener('DOMContentLoaded', function () {
  const favBtns = document.querySelectorAll(".js_favBtn");

  // 各ボタンに対して初期化とイベントリスナーを設定
  favBtns.forEach(function (favBtn) {
    // ツールチップの制御（初期状態）
    const tip = favBtn.querySelector(".tip");
    if (tip) {
      if (favBtn.classList.contains("is_active")) {
        tip.textContent = "お気に入りから削除";
      } else {
        tip.textContent = "お気に入りに追加";
      }
    }

    // クリックイベント
    favBtn.addEventListener("click", function () {
      this.classList.toggle("is_active");

      const countBox = this.querySelector(".count");
      if (!countBox) return;
      
      const count = countBox.textContent;
      const num = Number(count);

      if (this.classList.contains("is_active")) {
        countBox.textContent = num + 1;
        const tip = this.querySelector(".tip");
        if (tip) {
          tip.textContent = "お気に入りから削除";
        }
      } else {
        const tip = this.querySelector(".tip");
        if (tip) {
          tip.textContent = "お気に入りに追加";
        }
        if (num - 1 < 0) {
          countBox.textContent = 0;
        } else {
          countBox.textContent = num - 1;
        }
      }
    });
  });
});
