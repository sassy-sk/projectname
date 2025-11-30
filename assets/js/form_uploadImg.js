/**
* 画像ファイル追加inputの制御
*/

$(function () {
  function fileLimit(maxFiles, inputType) {
    const elem = inputType;
    const selectedPicture = elem.parentNode.nextElementSibling;
    const fileSelectBtn = elem.parentNode;

    let filesNum = 0; // 新しく選択した画像の枚数
    let selectedNum = selectedPicture.children.length; // すでに選択済みで表示されている枚数

    for (let i = 0; i < maxFiles; i++) {
      let fileReader = new FileReader();

      // ファイルの読み込み
      fileReader.readAsDataURL(elem.files[i]);
      filesNum = elem.files.length;

      // ファイル枚数超過時の警告
      if (maxFiles < filesNum + selectedNum) {
        $("#imageNumberAlertModal").modal("show"); // Bootstrapモーダル表示
        filesNum = 0;
        fileSelectBtn.classList.remove("is_max");
        return;
      } else if (maxFiles === filesNum + selectedNum) {
        fileSelectBtn.classList.add("is_max");
      } else {
        fileSelectBtn.classList.remove("is_max");
      }

      // ファイルが指定容量以上だと警告とアイテム削除
      const imageSize = 10000000; // 10MB
      if (elem.files[i].size > imageSize) {
        $("#imageSizeAlertModal").modal("show"); // Bootstrapモーダル表示
        fileSelectBtn.classList.remove("is_max");
        return false;
      }

      fileReader.onload = function () {
        if (maxFiles >= filesNum) {
          //ファイル読み取りが完了後の処理
          let imgTag = `<li><img src='${fileReader.result}'><span class="file_removeBtn">削除</span></li>`;
          selectedPicture.insertAdjacentHTML("afterbegin", imgTag);

          // 削除ボタンで該当の写真削除
          const fileRemoveBtn = $(".file_removeBtn");
          fileRemoveBtn.on("click", function () {
            $(this).parent().remove();
            fileSelectBtn.classList.remove("is_max");
          });
        }
      };
    }
  }

  // 1枚制限の実行
  const fileSelectLimit1 = $(".file_limit_1");
  fileSelectLimit1.on("change", function (event) {
    fileLimit(1, event.currentTarget);
  });

  // 4枚制限の実行
  const fileSelectLimit4 = $(".file_limit_4");
  fileSelectLimit4.on("change", function (event) {
    fileLimit(4, event.currentTarget);
  });

  // 10枚制限の実行
  const fileSelectLimit10 = $(".file_limit_10");
  fileSelectLimit10.on("change", function (event) {
    fileLimit(10, event.currentTarget);
  });
});
