/**
 * 【フォーム】最小価格・最大価格の制御
 * 最小価格を選択すると最大価格に最小以上の数字が入ります
 */

$(function () {
  const searchMinPrice = $("#js_minPrice");
  const searchMaxPrice = $("#js_maxPrice");
  const searchMemberCheckboxes = $("#js_search_memberStatus input[type='checkbox']");
  const searchDisplayCheckboxes = $("#js_search_displayStatus input[type='checkbox']");

  const initialMinPriceHtml = searchMinPrice.html();
  const initialMaxPriceHtml = searchMaxPrice.html();
  const initialMemberCheckboxStates = searchMemberCheckboxes
    .map(function () {
      return $(this).prop("checked");
    })
    .get();
  const initialDisplayCheckboxStates = searchDisplayCheckboxes
    .map(function () {
      return $(this).prop("checked");
    })
    .get();

  const searchMaxPriceNum = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 20000, 25000, 30000, 30001];
  const baseSelect = '<option value="" selected="">選択してください</option>';

  searchMinPrice.on("change", function () {
    searchMaxPrice.empty(); // 最大価格帯のoption全てリセット
    searchMaxPrice[0].insertAdjacentHTML("beforeend", baseSelect); // 選択してくださいを表示
    searchMaxPrice.prop("disabled", false); // disabledを解除

    // 最小値を空にした場合の制御
    if (searchMinPrice.val() === "") {
      searchMaxPrice.empty();
      searchMaxPrice[0].insertAdjacentHTML("beforeend", baseSelect);
      searchMaxPrice.prop("disabled", true);
    }

    // 現在選択している数値より大きい数字を表示
    const valueCal = elem => elem > currentNum;
    const currentNum = searchMinPrice.val().replace(/[^0-9]/g, ""); // 現在の最小値の取得と円を省略
    const applyNum = searchMaxPriceNum.filter(valueCal); // 大きい値を全て取得

    applyNum.forEach((item, index) => {
      const displayNamePrice = index === applyNum.length - 1 ? item.toLocaleString() + "円以上" : item.toLocaleString() + "円"; // 配列の最後のみ"円以上"
      const newSelectOption = `<option value="${displayNamePrice}">${displayNamePrice}</option>`;
      searchMaxPrice[0].insertAdjacentHTML("beforeend", newSelectOption); // 作成したoptionを代入
    });
  });

  /**
   * 【フォーム】リセットボタンを押したらフォームの状態を初期化する
   */
  $('input[type="reset"]').on("click", function () {
    searchMinPrice.html(initialMinPriceHtml);
    searchMaxPrice.html(initialMaxPriceHtml);

    const resetCheckboxes = (checkboxes, initialStates) => {
      checkboxes.each(function (index) {
        const isChecked = initialStates[index];
        $(this).prop("checked", isChecked);
        if (isChecked) {
          $(this).parent().addClass("is_current");
          $(this).parent().parent().addClass("is_current");
        } else {
          $(this).parent().removeClass("is_current");
          $(this).parent().parent().removeClass("is_current");
        }
      });
    };

    resetCheckboxes(searchMemberCheckboxes, initialMemberCheckboxStates);
    resetCheckboxes(searchDisplayCheckboxes, initialDisplayCheckboxStates);
    // チェックボックスのイベントリスナーを再初期化
    initCheckboxEvents();
  });
});
