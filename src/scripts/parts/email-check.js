function emailChecking() {
  const $        = require('jquery');
  let pattern    = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  let mail       = $('.footer-input__mail');
  let root       = document.querySelector(':root');
  let rootStyles = getComputedStyle(root);
  let errorBg    = rootStyles.getPropertyValue('--error-bg-color');
  let errurText  = rootStyles.getPropertyValue('--error-text-color');

  $('.footer-input__send').on('click', function () {
    $('.footer-error').css('visibility', 'hidden');
    if (mail.val() != '') {
      if (mail.val().search(pattern) == 0) {
        toSubmit();
        mail.removeClass('error').addClass('ok');
        localStorage.setItem('person-mail', JSON.stringify('mail'));
      } else showError();
    } else showError();
  });

  function showError() {
    $('.footer-input__mail').css('background-color', errorBg);
    $('.footer-input__mail').css('color', errurText);
    $('.footer-error').css('visibility', 'visible');
  }

  function toSubmit() {
    $(".footer-input").html(`<h1 class="footer-input__title">Отправлено</h1>
  <p class="footer-input__subtitle">Мы ответим вам на почту <br> в течении нескольких дней </p>`);
  }
}

export default function Email() {
  emailChecking();
}