// よくある質問のアコーディオン
$(function(){
  $(".faq dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("js-active");//追加部分
  });
});

var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 56,
  simulateTouch: true,
  loop: true,
  autoplay: {
    delay: 5000,/* 動作時間 */
    disableOnInteraction: false
  },
});

new WOW().init();

// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = $("header").innerHeight();
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
