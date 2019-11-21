import '../sass/index.scss';
import img_hexagon_open from '../assets/hexagon-open.svg';
import img_hexagon_closed from '../assets/hexagon-closed.svg';
import 'bootstrap';
import $ from 'jquery';

$(document).ready(function() {
  // Toggle Hexagon trifecta
  $('.js-hexagon').click(function() {
    const image = $('.js-hexagon').attr('src');
    if (image == img_hexagon_closed) {
      $('.js-hexagon').attr('src', img_hexagon_open);
    } else {
      $('.js-hexagon').attr('src', img_hexagon_closed);
    }
  });

  // Hide scroll down on scroll
  (function() {
    const scroll_delta = 50;
    let did_scroll_fade_out = false;
    $(window).scroll(function(event) {
      if (did_scroll_fade_out) return;
      if ($(window).scrollTop() > scroll_delta) {
        did_scroll_fade_out = true;
        $('.js-scroll-down').animate({ opacity: 0 });
      }
    });
  })();
});
