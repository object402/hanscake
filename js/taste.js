$(document).ready(function() {

  //케이크정렬
  var cakebox = $('.k_showcakes > ul > li');

  $('.allcake').click(function() {
    cakebox.fadeOut();
    $('.all').fadeIn(500);
    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })

  $('.classiccake').click(function() {
    cakebox.fadeOut();
    $('.classic').fadeIn(500);
    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })

  $('.seasonalcake').click(function() {
    cakebox.fadeOut();
    $('.seasonal').fadeIn(500);  $('.k_contents_nav > ul > li > a').removeClass('menuhover')
      $(this).addClass('menuhover')
  })
  $('.premiumcake').click(function() {
    cakebox.fadeOut();
    $('.premium').fadeIn(500);  $('.k_contents_nav > ul > li > a').removeClass('menuhover')
      $(this).addClass('menuhover')
  })
  $('.xmascake').click(function() {
    cakebox.fadeOut();
    $('.xmas').fadeIn(500);  $('.k_contents_nav > ul > li > a').removeClass('menuhover')
      $(this).addClass('menuhover')
  })






})
