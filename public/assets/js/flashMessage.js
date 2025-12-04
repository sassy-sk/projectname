/**
 * フラッシュメッセージ
 */

document.addEventListener('DOMContentLoaded', function () {
  const flashMsg = document.querySelector(".js_flashMsg");
  
  if (!flashMsg) return;
  
  // クラスが付与されたら表示
  if (flashMsg.classList.contains("is_active")) {
    // 表示アニメーション（slideDown）
    flashMsg.style.display = "block";
    flashMsg.style.height = "0";
    flashMsg.style.overflow = "hidden";
    flashMsg.style.transition = "height 0.3s ease-out";
    
    // 高さを取得してアニメーション
    const height = flashMsg.scrollHeight;
    flashMsg.style.height = height + "px";
    
    // アニメーション完了後にheightをautoに
    setTimeout(function () {
      flashMsg.style.height = "auto";
    }, 300);

    // 4秒後に非表示に
    setTimeout(function () {
      // 非表示アニメーション（slideUp）
      flashMsg.style.height = flashMsg.scrollHeight + "px";
      flashMsg.style.transition = "height 0.3s ease-in";
      
      // リフローを強制
      flashMsg.offsetHeight;
      
      flashMsg.style.height = "0";
      
      // アニメーション完了後にdisplayをnoneにする
      setTimeout(function () {
        flashMsg.style.display = "none";
        flashMsg.style.height = "";
        flashMsg.style.transition = "";
      }, 300);
    }, 4000);
  }
});
