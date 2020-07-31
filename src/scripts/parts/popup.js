function toPopUp () {
  const $ = require('jquery');
  require('magnific-popup');
    $('.footer-sub__rools').magnificPopup({
      type: 'inline'
    });

}

export default function popUp() {
  toPopUp();
}