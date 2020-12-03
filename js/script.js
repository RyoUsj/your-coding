// よくある質問のアコーディオン
$(function(){
  $(".faq dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("js-active");//追加部分
  });
});

var swiper = new Swiper('.swiper-container', {
  loop: true,
      // loopedSlides: 8,
      centeredSlides: true,
			slidesPerView: 'auto',
      spaceBetween: 56,
  // loop: true, // ループ処理
  // slidesPerView: 'auto', // ※※※重要 無限ループ※※※ （''内をautoにすると1番目から始まる。）
  // centeredSlides : true,
  // breakpoints: {
  //   375: {
  //     slidesPerView: 1.2,
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     slidesPerView: 2.1,
  //     spaceBetween: 16,
  //   },
  //   992: {
  //     slidesPerView: 3.2,
  //     spaceBetween: 32,
  //   },
  //   1200: {
  //     slidesPerView: 3.8,
  //     spaceBetween: 56,/* カードの間隔 */
  //   },
  // },
  // slidesPerView: 3.8,
  // spaceBetween: 56,/* カードの間隔 */
  // initialSlide: 1,
  loop: true,
  autoplay: {
    delay: 5000,/* 動作時間 */
    disableOnInteraction: false
  },
  simulateTouch: true
});

new WOW().init();

// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = $(".header").innerHeight();
  let speed = 500;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = $(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  $("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

// $(function() {
//   $('.navbar_toggle').on('click', function () {
//     $(this).toggleClass('open');
//     $('.menu').toggleClass('open');
//   });
// });

$(document).ready(function() {
  $('.drawer').drawer();
});

// 必須を入力しないと送信ボタン押せないようにする記述
$(document).ready(function () {
  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="mail"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});// 必須を入力しないと送信ボタン押せないようにする記述
