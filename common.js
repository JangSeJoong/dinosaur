$(function () {
  var swiper = new Swiper(".bannerCon", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".sec3_s", {
    direction: "vertical",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.ham').on('click', function () {
    $('.gnb').toggleClass('on')
  })
  $('.gnb>ul>li').on('click', function () {
    if ($(this).attr('class') != 'on') {
      $('.gnb>ul>li').children('.dep2').slideUp()
      $(this).children('.dep2').slideToggle()
      $('.gnb>ul>li').removeClass('on')
      $(this).addClass('on')
    } else {
      $(this).children('.dep2').slideToggle()
      $(this).removeClass('on')
    }
  })
})