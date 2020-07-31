const $ = require('jquery');
import emailCheck       from './parts/email-check';
import firstSlider from './parts/sliders';
import popUp       from './parts/popup';

$(document).ready(() => {
  emailCheck();
  Slider();
  popUp();
});