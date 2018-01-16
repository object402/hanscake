$(function() {
   //햄버거 버튼 클릭하면
   $('#allMenu>a').on('click', function() {

      $('#allMenu .j_mobile_mainMenu').toggleClass('onMainNav');

      //메인메뉴 클릭하면
      $('#allMenu .j_mobile_mainMenu>li').on('click', function() {
         //열려있는 서브 메뉴가 있다면 닫아주기
         $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300);
         //선택한 메인메뉴의 서브메뉴 열기
         $(this).find('.j_mobile_subnav').stop().slideToggle(300);
      })

      //열려있는 서브 메뉴가 있다면 닫아주기
      $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300);
   })
})
