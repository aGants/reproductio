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
    vertical: true,
    infinite: true,
    useTransform: false
  });

  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    useTransform: false,
    vertical: false
  });
};

