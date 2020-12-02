// よくある質問のアコーディオン
$(function(){
  $(".faq dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("js-active");//追加部分
  });
});


var swiper = new Swiper('.swiper-container', {
  // navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  // },
  centeredSlides:true,
  // slidesPerView: 3.8,
  breakpoints: {
    375: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3.8,
      spaceBetween: 56,/* カードの間隔 */
    },
  },
  initialSlide: 1,
  loop: true,
  autoplay: {
    delay: 5000,/* 動作時間 */
    disableOnInteraction: true
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