export default function initSliders() {
  const $ = require('jquery');
  require('slick-carousel');
  
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

  $('.main-slider').slick({
    slidesToShow: 3,
    centerMode: true
  });
};