/**
 * ページ離脱アラート
 * ページ離脱時の表示 *main or #wrapperタグに`.alertPage`を付与した場合のみ適用
 * 確認ページには、`.is_confirm`も同時に付与してください
 * →(確認ページは常にアラート、入力ページ1箇所以上入力(change)されたらアラート)
 * `.evasionBtn`を指定したaタグは対象外 = aタグのみ対象のため`button`タグはアラート設定していません
 */

$(function () {
  if (document.querySelector(".js_alertPage")) {
    // モーダル表示とリンク先の設定
    const alertModalShow = function (e) {
      targetLink = e.currentTarget.href; // 押されたリンクを取得
      e.preventDefault(); // デフォルト無効化
      $("#pageAlertModal").modal("show"); // Bootstrapモーダル表示
      $("#targetLink").attr("href", targetLink); // 取得したリンクへ書き換え
    };

    // 入力フォームが1箇所でも入力されたか判定
    let isFormInput = false;
    const formInputTrue = () => (isFormInput = true); // trueに変更

    // 入力ページの変更がある場合は正判定
    $("input").on("change", formInputTrue);
    $("textarea").on("change", formInputTrue);
    $("select").on("change", formInputTrue);

    // `.evasionBtn`以外のaタグを押した場合
    $("a")
      .not(".evasionBtn")
      .on("click", function (e) {
        // 確認ページ以外＆1箇所も入力されていない場合は通常通りの遷移
        if (!document.querySelector(".is_confirm") && !isFormInput) return;
        else {
          // 1箇所以上入力の場合は実行＆確認ページは常に実行
          alertModalShow(e);
        }
      });
  }
});
