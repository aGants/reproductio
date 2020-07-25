function emailCheck(){
  const $ = require('jquery');
  let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  let mail = $('.footer-input__mail');

  $('.footer-input__send').on('click', function () {
    if (mail.val() != '') {
      if (mail.val().search(pattern) == 0) {
        Submit();
        mail.removeClass('error').addClass('ok');
        localStorage.setItem('person-mail', JSON.stringify('mail'));
      } else {
        Error();
      }
    } else Error();
});
function Error() {
  $('.footer-input__mail').css('border-color', 'red');
}
function Submit() {
  $(".footer-input").html(`<h1 сlass='.footer-input__title'>Отправлено</h1>
  <p сlass='.footer-input__subtitle'> Мы ответим вам на почту в течении нескольких дней </p>`);
}
}




export default function Email() {
  emailCheck();
}