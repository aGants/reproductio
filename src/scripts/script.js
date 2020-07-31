const $ = require('jquery');
import Email       from './parts/email-check';
import firstSlider from './parts/sliders';
import popUp       from './parts/popup';

$(document).ready(() => {
  Email();
  firstSlider();
  popUp();
});