$(document).ready(function() {
  if ($('.k_contents_nav>ul>li>a').width() < 80) {
    // is mobile device
    var cakeWidthMobile = $('.k_showcakes>ul>li').width() - 20;
    var cakeHeightMobile = $('.k_showcakes>ul>li').height() - 20;
    console.log(cakeWidthMobile);
    $('.k_showcakes>ul>li>dl').css({
      'width': cakeWidthMobile
    });
    $('.k_showcakes>ul>li>dl').css({
      'height': cakeHeightMobile
    });
  }
  $(window).resize(function() {
    if ($('.k_contents_nav>ul>li>a').width() < 80) {
      // is mobile device
      var cakeWidthMobile = $('.k_showcakes>ul>li').width() - 20;
      var cakeHeightMobile = $('.k_showcakes>ul>li').height() - 20;
      console.log(cakeWidthMobile);
      $('.k_showcakes>ul>li>dl').css({
        'width': cakeWidthMobile
      });
      $('.k_showcakes>ul>li>dl').css({
        'height': cakeHeightMobile
      });
    }else {
      var cakeWidthMobile = $('.k_showcakes>ul>li').width() - 20;
      var cakeHeightMobile = $('.k_showcakes>ul>li').height() - 20;
      console.log(cakeWidthMobile);
      $('.k_showcakes>ul>li>dl').css({
        'width': cakeWidthMobile
      });
      $('.k_showcakes>ul>li>dl').css({
        'height': cakeHeightMobile
      });
    
    }
    var cakebox = $('.k_showcakes > ul > li');
    var headerW = $('#header_wrapper').width();
    var cakecnt = $('.k_showcakes > ul > li').length;
    for (var i = 0; i < cakecnt; i++) {
      $('.k_showcakes > ul > li').eq(i).hover(function() {
        $(this).children('dl').stop().fadeIn(400);
        $(this).children('dl').children('dt').stop().animate({
          'top': 45
        }, 'slow');
        $(this).children('dl').children('dd').stop().animate({
          'bottom': 0
        }, 'slow');
        if(headerW < 360){
          $(this).children('dl').children('dt').stop().animate({
            'top': 30
          });
          $(this).children('dl').children('dd').stop().animate({
            'bottom': 40
          });
        }
      }, function() {
        $(this).children('dl').css({
          'display': 'none'
        });
        $(this).children('dl').children('dt').stop().animate({
          'top': -50
        });
        $(this).children('dl').children('dd').stop().animate({
          'bottom': -150
        });
      })

    }
  })
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
    $('.seasonal').fadeIn(500);
    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })
  $('.premiumcake').click(function() {
    cakebox.fadeOut();
    $('.premium').fadeIn(500);
    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })
  $('.xmascake').click(function() {
    cakebox.fadeOut();
    $('.xmas').fadeIn(500);
    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })
  $('.hanssweet').click(function() {
    $('.drinkimg').css({
      'display': 'none'
    });
    $('.sweetimg').css({
      'display': 'block'
    });

    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })
  $('.hansdrinks').click(function() {
    $('.sweetimg').css({
      'display': 'none'
    });
    $('.drinkimg').css({
      'display': 'block'
    });
    $('.k_contents_nav > ul > li > a').removeClass('menuhover')
    $(this).addClass('menuhover')
  })

  var headerW = $('#header_wrapper').width();
  var cakecnt = $('.k_showcakes > ul > li').length;
  for (var i = 0; i < cakecnt; i++) {
    $('.k_showcakes > ul > li').eq(i).hover(function() {
      $(this).children('dl').stop().fadeIn(400);
      $(this).children('dl').children('dt').stop().animate({
        'top': 45
      }, 'slow');
      $(this).children('dl').children('dd').stop().animate({
        'bottom': 0
      }, 'slow');
      if(headerW < 360){
        $(this).children('dl').children('dt').stop().animate({
          'top': 30
        });
        $(this).children('dl').children('dd').stop().animate({
          'bottom': 40
        });
      }
    }, function() {
      $(this).children('dl').css({
        'display': 'none'
      });
      $(this).children('dl').children('dt').stop().animate({
        'top': -50
      });
      $(this).children('dl').children('dd').stop().animate({
        'bottom': -150
      });
    })

  }




})
