export default function imgLoading() {
  const $ = require('jquery');
  
  $('img').each((index, el) => {
    const $image = $(el);
    const realSrc = $image.attr('data-src');

    $image.attr('src', realSrc);
    });
};
