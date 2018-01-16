$(document).ready(function() {
  $('.p_no').css({
    "opacity": "0"
  }).delay(300).animate({
    "opacity": "1"
  }, "slow");

  $('.p_delay').css({
    "opacity": "0"
  }).delay(800).animate({
    "opacity": "1"
  }, "slow");

})
