//윈도우창 시작됬을때
$(document).ready(function() {
   //윈도우 사이즈 구하기
  var fullWidth = $(window).outerWidth();
  //슬라이드 갯수 구하기
  var imgLength = $('#j_mainSlideFirst>ul>li').length;
  //전체슬라이드 ul width값 구하기
  var ulWidth = ((fullWidth*imgLength)+fullWidth*2);
  console.log('fullWidth: ' + fullWidth);
  console.log('imgLength:' + imgLength);

  //슬라이드 보여주는 크기 = 윈도우 사이즈
  $('#j_mainSlideFirst').css({width: fullWidth})
  //슬라이드 이미지 width값에 윈도우 사이즈 적용하기
  $('#j_mainSlideFirst>ul>li>a>img').css({
    width: fullWidth
  });
  //전체 슬라이드 ul width값 주기
  $('#j_mainSlideFirst>ul').css({width: ulWidth});

  //paging 초기화
  for(var i = 0; i < imgLength; i++){
     $('#j_paging').append('<li><a href="#">'+(i+1)+'</a></li>');
     if(i==0){
        $('#j_paging li a').addClass('j_pagingActive');
     }
  }

  var first = $('#j_mainSlideFirst li').eq(0).find('img').attr('src');
  var second = $('#j_mainSlideFirst li').eq(1).find('img').attr('src');
  var third = $('#j_mainSlideFirst li').eq(2).find('img').attr('src');
  console.log('firstSrc: ' + first);
  console.log('second: ' + second);
  console.log('third: ' + third);

//*********************
// //슬라이드 기능1
// function slider(){
//    $('#j_mainSlideFirst>ul>li:first-child').animate({marginLeft:-fullWidth},function(){
//       $(this).appendTo($(this).parent()).css({marginLeft:0});
//    });
// }
// var timer = setInterval(slider,2000);
//
// //마우스 호버시 정지
// $('#j_mainSlideFirst').hover(function(){
//    //mouse in, clearinterval to pause
//    clearInterval(timer);
// },function(){
//    //mouse out, setInterval to continue
//    timer = setInterval(slider,2000);
// })
//*********************

//*********************
//슬라이드 기능2
var play = setInterval(playMainSlide,3500);
function playMainSlide(){
   $('#j_mainSlideFirst>ul').animate({marginLeft: -fullWidth},800,function(){
      $(this).css({marginLeft:0}).find('li:last').after($(this).find('li:first'));
   })
   var attr = $('#j_mainSlideFirst>ul').find('li:first').find('img').attr('src');
   var slice = attr.slice(-5,-4);
   slice = Number(slice);
   if(slice==3){
      slice=0;
   }
   console.log('slice: ' + slice + ',type: ' + typeof(slice));

   //pagin active class주기
   //console.log('j: ' + j);
   $('#j_paging li a').removeClass('j_pagingActive');
   $('#j_paging li:eq('+slice+') a').addClass('j_pagingActive');
};

//슬라이드 기능3
//var j = 0;
// var playMainSlide = setInterval(function(){
//    j = ++j;
//    if(j==3){
//       j=0;
//    }
//    $('#j_mainSlideFirst>ul').animate({marginLeft: -fullWidth},800,function(){
//       $(this).css({marginLeft:0}).find('li:last').after($(this).find('li:first'));
//       //현재 첫번째 리스트의 이미지 소스 구하기
//       // var attr = $(this).find('li:first').find('img').attr('src');
//       // console.log('attr: ' + attr);
//    })
//
//    //pagin active class주기
//    //console.log('j: ' + j);
//    $('#j_paging li a').removeClass('j_pagingActive');
//    $('#j_paging li:eq('+j+') a').addClass('j_pagingActive');
//
//
// },3500);

//*********************

//****************
//페이징 버튼 테스트2
$('#j_paging a').eq(0).on('click',function(){
   clearInterval(play);

   //활성화 상태 초기화
   $('#j_paging li a').removeClass('j_pagingActive');

   $(this).addClass('j_pagingActive');

   var attr = $('#j_mainSlideFirst>ul').find('li:first').find('img').attr('src');
   console.log('attr: ' + attr);
   if(attr=='images/main/mainSlide01.png'){
      $('#j_mainSlideFirst>ul').animate({marginLeft:0},800)
   }else if(attr=='images/main/mainSlide03.png'){
      $('#j_mainSlideFirst>ul').animate({marginLeft:-fullWidth},800)
   }else{
      $('#j_mainSlideFirst>ul').animate({marginLeft:-(fullWidth*2)},800)
   }

   //안됨
   // $(attr).parent().parent().find('#j_mainSlideFirst>ul').css({marginLeft:0}).find('li:last').after($(this).find('li:first'));
   play = setInterval(playMainSlide,3500);
})
$('#j_paging a').eq(1).on('click',function(){
   clearInterval(play);

   //활성화 상태 초기화
   $('#j_paging li a').removeClass('j_pagingActive');

   $(this).addClass('j_pagingActive');

   var attr = $('#j_mainSlideFirst>ul').find('li:first').find('img').attr('src');
   console.log('attr: ' + attr);
   if(attr=='images/main/mainSlide02.png'){
      $('#j_mainSlideFirst>ul').animate({marginLeft:0},800)
   }else if(attr=='images/main/mainSlide03.png'){
      $('#j_mainSlideFirst>ul').animate({marginLeft:-(fullWidth*2)},800)
   }else{
      $('#j_mainSlideFirst>ul').animate({marginLeft:-fullWidth},800)
   }
play = setInterval(playMainSlide,3500);
})
$('#j_paging a').eq(2).on('click',function(){
   clearInterval(play);

   //활성화 상태 초기화
   $('#j_paging li a').removeClass('j_pagingActive');

   $(this).addClass('j_pagingActive');

   var attr = $('#j_mainSlideFirst>ul').find('li:first').find('img').attr('src');
   console.log('attr: ' + attr);
   if(attr=='images/main/mainSlide03.png'){
      $('#j_mainSlideFirst>ul').animate({marginLeft:0},800)
   }else if(attr=='images/main/mainSlide02.png'){
      $('#j_mainSlideFirst>ul').animate({marginLeft:-fullWidth},800)
   }else{
      $('#j_mainSlideFirst>ul').animate({marginLeft:-(fullWidth*2)},800)
   }
   play = setInterval(playMainSlide,3500);
})


//페이징 버튼 테스트1
// $('#j_paging').on('click','a',function(){
//    //자동 슬라이딩 정지
//    // clearInterval(playMainSlide);
//
//    // var attr = $('#j_mainSlideFirst>ul').find('li:first').find('img').attr('src');
//    // // console.log('attr: ' + attr);
//    // // $('#j_mainSlideFirst ul').find('li:first').before(first);
//    // if(attr=='images/main/mainSlide03.png'){
//    //    $('#j_mainSlideFirst>ul').find('li:last').after(this);
//    // }else if(attr=='images/main/mainSlide02.png'){
//    //    $('#j_mainSlideFirst>ul').find('li:first').before(this);
//    // }else{}
//
//
//    var index = $('#j_paging li a').index(this);
//     console.log(index);
//
//    //활성화 상태 초기화
//    $('#j_paging li a').removeClass('j_pagingActive');
//
//    $('#j_paging a').eq(index).addClass('j_pagingActive');
//
//    $('#j_mainSlideFirst>ul').animate({marginLeft:-(index*fullWidth)},800);
//    // console.log('index:' + index);
// });



//*********************
//윈도우창 크기 조절 되었을때
  $(window).resize(function() {
     //윈도우 사이즈 다시 구하기
    fullWidth = $(window).outerWidth();
    //전체슬라이드 ul width값 다시 구하기
    ulWidth = (fullWidth*imgLength);

    //슬라이드 보여주는 크기 = 변경된 윈도우 사이즈
    $('#j_mainSlideFirst').css({width: fullWidth})
    //슬라이드 이미지 width값에 변경된 윈도우 사이즈 적용하기
    $('#j_mainSlideFirst>ul>li>a>img').css({
      width: fullWidth
    });
    //전체 슬라이드 ul width값 주기
    $('#j_mainSlideFirst>ul').css({width: ulWidth});
  })
})
