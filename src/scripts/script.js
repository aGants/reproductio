const $ = require('jquery');
import emailCheck  from './parts/email-check';
import initSliders from './parts/sliders';
import imgLoading  from './parts/img-loading';
import popUp       from './parts/popup';

$(document).ready(() => {
  emailCheck();
  initSliders();
  imgLoading();
  popUp();
});