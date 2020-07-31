export default function popUp() {
  const $ = require('jquery');
  require('magnific-popup');
  $('.footer-sub__rools').magnificPopup({
    type: 'inline'
  });
}