$(document).ready(function () {
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.header-nav'
  });
  $('.header-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.header-slider',
    centerMode: true,
    focusOnSelect: true,
    vertical: true
  });
});

$(document).ready(function () {
  $('.main-slider').slick({
    slidesToShow: 3,
    centerMode: true
  });
});