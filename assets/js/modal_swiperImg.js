/**
 * 商品写真モーダル
 * 【画像モーダルテンプレ共通】
 * ・モーダル内はピンチズームON
 * ・サムネイルあり
 * ・スマホでは商品詳細でも写真をスワイプできるように
 * ・クリックした写真がモーダルの最初に来る
 */

$(function () {
  // モーダル設定（PC・スマホ共通）
  const modalSwiper = new Swiper(".swiperImgModal .swiperMain", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: new Swiper(".swiperImgModal .swiperThumbnail", {
        slidesPerView: 10
      })
    }
  });

  // PCのSwiper設定(769px以上で発動)
  if (window.matchMedia("(min-width: 769px)").matches) {
    // モーダルを開く処理
    $(".js_swiperImgModalOpen").click(function () {
      $(".swiperImgModal").fadeIn();
      $("body").css("overflow-y", "hidden");
      // モーダルウィンドウの中のSwiperの初期位置を設定
      // クリックされたli要素のインデックスを取得
      const index = $(this).index();
      // モーダルウィンドウのSwiperの初期位置を設定
      modalSwiper.slideToLoop(index);
    });

    // モーダルを閉じる処理
    $(".js_swiperImgModalClose, .swiperImgModal").click(function () {
      $(".swiperImgModal").fadeOut();
      $("body").css("overflow-y", "auto");
    });

    // イベントの伝搬を止める
    $(".js_swiperImgModalClickArea").on("click", function (e) {
      e.stopPropagation();
    });
  }

  // スマホ用Swiper設定(768px以下で発動)
  if (window.matchMedia("(max-width: 768px)").matches) {
    const productImg_thumbnail = new Swiper(".sub_img_sp", {
      // サムネイルの枚数
      slidesPerView: 10
    });

    const productImg_swiper = new Swiper(".main_img_sp", {
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: productImg_thumbnail
      }
    });

    // モーダルを開く処理
    $(".js_swiperImgModalOpen").click(function () {
      $(".swiperImgModal").fadeIn();
      $("body").css("overflow-y", "hidden");
      // モーダルウィンドウの中のSwiperの初期位置を設定
      // loopがtrueの場合、実際のインデックスを取得
      const activeIndex = productImg_swiper.realIndex;
      // モーダルウィンドウのSwiperの初期位置を設定
      modalSwiper.slideToLoop(activeIndex);
    });

    // モーダルを閉じる処理
    $(".js_swiperImgModalClose, .swiperImgModal").click(function () {
      $(".swiperImgModal").fadeOut();
      $("body").css("overflow-y", "auto");
    });

    // イベントの伝搬を止める
    $(".js_swiperImgModalClickArea").on("click", function (e) {
      e.stopPropagation();
    });
  }
});
