//윈도우창 시작됬을때
$(document).ready(function() {
   //윈도우 사이즈 구하기
   var fullWidth = $(window).innerWidth();
   var secondSlideTop = 540;
   var secondSlideTop_origin = 600;
   if (fullWidth > 640 && fullWidth <= 1000) {
      fullWidth = 1000;
   } else if (fullWidth <= 640) {
      fullWidth = $(window).innerWidth();
      secondSlideTop = 334;
      secondSlideTop_origin = 365;
   }
   //슬라이드 갯수 구하기
   var imgLength = $('#j_mainSlideFirst>ul>li').length;
   //전체슬라이드 ul width값 구하기
   var ulWidth = ((fullWidth * imgLength) + fullWidth);
   console.log('fullWidth: ' + fullWidth);
   console.log('imgLength:' + imgLength);

   //슬라이드 보여주는 크기 = 윈도우 사이즈
   $('#j_mainSlideFirst').css({
      width: fullWidth
   })
   //슬라이드 이미지 width값에 윈도우 사이즈 적용하기
   $('#j_mainSlideFirst>ul>li>a>img').css({
      width: fullWidth
   });
   //전체 슬라이드 ul width값 주기
   $('#j_mainSlideFirst>ul').css({
      width: ulWidth
   });

   //paging 초기화
   for (var i = 0; i < imgLength; i++) {
      $('#j_paging').append('<li><a href="#">' + (i + 1) + '</a></li>');
      if (i == 0) {
         $('#j_paging li a').addClass('j_pagingActive');
      }
   }

   /******첫번째 슬라이드 시작********/
   var num = 0; //슬라이드 순서
   var show_num = 1; //보여지는 슬라이드 갯수
   var list = $('#j_mainSlideFirst ul'); //슬라이드 마진 기준

   //복제하는 변수 만들기
   var copyObj = $('#j_mainSlideFirst li:lt(' + show_num + ')').clone();
   list.append(copyObj);

   //첫번째 슬라이드 기능
   function playMainSlide() {
      if (num == imgLength) {
         num = 0;
         //마지막이면 마진 0으로해서 처음으로 돌아가기
         list.css({
            'margin-left': 0
         });
      }
      num++; //0부터 1씩 증가
      list.stop().animate({
         marginLeft: -fullWidth * num
      }, 500)

      //페이징 클래스 초기화
      $('#j_paging li a').removeClass('j_pagingActive');
      //현재슬라이드 맞는 페이징 활성화하기
      $('#j_paging li a').eq(num).addClass('j_pagingActive');

      //마지막 슬라이드면 다시 첫번째 페이징 활성화해주기
      if (num == imgLength) {
         $('#j_paging li a').eq(0).addClass('j_pagingActive');
      }
      return false;
   }

   //첫번째 슬라이드 실행
   var play = setInterval(playMainSlide, 5000);

   //첫번째 슬라이드 페이징 버튼
   $('#j_paging').on('click', 'a', function() {
      // //자동 슬라이딩 정지
      // clearInterval(playMainSlide);

      var pagingIndex = $('#j_paging li a').index(this);
      console.log(pagingIndex);

      //활성화 상태 초기화
      $('#j_paging li a').removeClass('j_pagingActive');

      $('#j_paging a').eq(pagingIndex).addClass('j_pagingActive');

      $('#j_mainSlideFirst>ul').css({
         'margin-left': -(pagingIndex * fullWidth)
      }, 500);
      num = pagingIndex;

      return false;
   });
   /******첫번째 슬라이드 끝********/

   /******두번째 슬라이드 시작********/
   var SecondImgLength = $('#j_mainSlideSecond .j_SecondSlideImage li').length;
   console.log('SecondImgLength:' + SecondImgLength);
   var SecondImgOrder = $('#j_mainSlideSecond .j_SecondSlideImage li');
   var num2 = 0;
   // var secondSlideTop = 540/334;
   //var secondSlideTop_origin = 600/365;

   SecondImgOrder.eq(num2).fadeIn(700);
   $('#j_mainSlideSecond .j_SecondSlideTxt li').stop().eq(0).animate({
      top: secondSlideTop,
      opacity: 1
   }, 700).css({
      'display': 'block'
   });


   //두번째 슬라이드
   function playSecondSlide() {
      num2++; //0부터 1씩 증가
      SecondImgOrder.css({
         'display': 'none'
      });
      SecondImgOrder.eq(num2).fadeIn(700);
      if (num2 == SecondImgLength) {
         num2 = 0;
         //마지막이면 순서 0째로 처음으로 돌아가기
         SecondImgOrder.css({
            'display': 'none'
         });
         SecondImgOrder.eq(num2).fadeIn(700);
      }

      //이미지 아래 텍스트 초기화 + 아래서 위로 올라오고, 오퍼시티 없애기
      $('#j_mainSlideSecond .j_SecondSlideTxt li').css({
         'opacity': '0',
         'top': 'secondSlideTop_origin',
         'display': 'none'
      });
      $('#j_mainSlideSecond .j_SecondSlideTxt li').stop().eq(num2).animate({
         top: secondSlideTop,
         opacity: 1
      }, 700).css({
         'display': 'block'
      });
      if (num2 == SecondImgLength) {
         $('#j_mainSlideSecond .j_SecondSlideTxt li').css({
            'opacity': '0',
            'top': 'secondSlideTop_origin',
            'display': 'none'
         });
         $('.j_SecondSlideTxt li').stop().eq(0).animate({
            top: secondSlideTop,
            opacity: 1
         }, 700).css({
            'display': 'block'
         });
      }

      return false;
   }

   //두번쩨 슬라이드 실행
   var playSecond = setInterval(playSecondSlide, 5000);

   //next 버튼 클릭 시
   $('#buttons a:last-child').on('click', function(e) {
      e.preventDefault();
      clearInterval(playSecond);
      num2 += 1;
      SecondImgOrder.css({
         'display': 'none'
      });
      SecondImgOrder.eq(num2).fadeIn(700);
      if (num2 == SecondImgLength) {
         num2 = 0;
         //마지막이면 순서 0째로 처음으로 돌아가기
         SecondImgOrder.css({
            'display': 'none'
         });
         SecondImgOrder.eq(num2).fadeIn(700);
      }

      if (num2 == SecondImgLength) {
         $('#j_mainSlideSecond .j_SecondSlideTxt li').css({
            'opacity': '0',
            'top': 'secondSlideTop_origin',
            'display': 'none'
         });
         $('.j_SecondSlideTxt li').stop().eq(0).animate({
            top: secondSlideTop,
            opacity: 1
         }, 700).css({
            'display': 'block'
         });
      }
      $('#j_mainSlideSecond .j_SecondSlideTxt li').css({
         'opacity': '0',
         'top': 'secondSlideTop_origin',
         'display': 'none'
      });
      $('#j_mainSlideSecond .j_SecondSlideTxt li').stop().eq(num2).animate({
         top: secondSlideTop,
         opacity: 1
      }, 700).css({
         'display': 'block'
      });
      playSecond = setInterval(playSecondSlide, 3500);
   })

   //prev 버튼 클릭 시
   $('#buttons a:first-child').on('click', function(e) {
      e.preventDefault();
      clearInterval(playSecond);
      num2 -= 1;
      SecondImgOrder.css({
         'display': 'none'
      });
      SecondImgOrder.eq(num2).fadeIn(700);
      if (num2 == -(SecondImgLength + 1)) {
         num2 = -1;
         //마지막이면 순서 0째로 처음으로 돌아가기
         SecondImgOrder.css({
            'display': 'none'
         });
         SecondImgOrder.eq(num2).fadeIn(700);
      }

      if (num2 == -(SecondImgLength + 1)) {
         $('#j_mainSlideSecond .j_SecondSlideTxt li').css({
            'opacity': '0',
            'top': 'secondSlideTop_origin',
            'display': 'none'
         });
         $('.j_SecondSlideTxt li').stop().eq(num2).animate({
            top: secondSlideTop,
            opacity: 1
         }, 700).css({
            'display': 'block'
         });
      }
      $('#j_mainSlideSecond .j_SecondSlideTxt li').css({
         'opacity': '0',
         'top': 'secondSlideTop_origin',
         'display': 'none'
      });
      $('#j_mainSlideSecond .j_SecondSlideTxt li').stop().eq(num2).animate({
         top: secondSlideTop,
         opacity: 1
      }, 700).css({
         'display': 'block'
      });
      playSecond = setInterval(playSecondSlide, 3500);

      console.log('prevNum2:' + num2);
   })

   //2번째 슬라이드 view 버튼 a 링크 디폴트 시키기
   $('#j_mainSlideSecond .j_SecondSlideTxt li a').click(function() {
      return false;
   })
   /******두번째 슬라이드 끝********/

   //마지막 컨텐츠들 a 링크 디폴트 시키기
   $('#j_mainContentsThird a').click(function() {
      return false;
   })


   //****************************
   //윈도우창 크기 조절 되었을때
   $(window).resize(function() {

      //윈도우 사이즈 다시 구하기
      fullWidth = $(window).innerWidth();

      if (fullWidth > 640 && fullWidth <= 1000) {
         fullWidth = 1000;
         secondSlideTop = 540;
      } else if (fullWidth <= 640) {
         fullWidth = $(window).innerWidth();
         secondSlideTop = 334;
         secondSlideTop_origin = 365;
      }


      //전체슬라이드 ul width값 다시 구하기
      ulWidth = ((fullWidth * imgLength) + fullWidth);

      list = $('#j_mainSlideFirst ul');

      //슬라이드 보여주는 크기 = 변경된 윈도우 사이즈
      $('#j_mainSlideFirst').css({
         width: fullWidth
      })
      //슬라이드 이미지 width값에 변경된 윈도우 사이즈 적용하기
      $('#j_mainSlideFirst>ul>li>a>img').css({
         width: fullWidth
      });
      //전체 슬라이드 ul width값 주기
      $('#j_mainSlideFirst>ul').css({
         width: ulWidth
      });
      console.log('LIST2: ' + list.width());

   })
   //**************************

})
