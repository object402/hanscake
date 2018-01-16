$(function() {
   //메인메뉴 안보이는 상태 = 0
   var mainMenu = 0;
   //서브메뉴 안보이는 상태 = 0
   var subMenu = 0;
console.log('submenu 클릭전 0: ' +subMenu);
   //햄버거 버튼 클릭하면
   $('#allMenu>a').on('click', function() {
      //메인메뉴가 안보이는 상태면
      if (mainMenu == 0) {
         //열려있는 서브 메뉴가 있다면 닫아주기
         $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').css({'display':'none'});
         //메인메뉴 보여주기
         $('#allMenu .j_mobile_mainMenu').css({
            'display': 'block'
         })
         // //메인메뉴 클릭하면
         // $('#allMenu .j_mobile_mainMenu>li').on('click', function() {
         //
         //    //열려있는 서브 메뉴가 있다면 닫아주기
         //    $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300);
         //    //선택한 메인메뉴의 서브메뉴 열기
         //    $(this).find('.j_mobile_subnav').stop().slideDown(300);
         //
         //
         //    // var clicked =$(this).on('click',function(){
         //    //    $(this).data('clicked',true);
         //    // })
         //    // if($(this).data('clicked')){
         //    //    $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300).css({'display':'none'});
         //    // }
         //
         //
         //    return false;
         // })

         mainMenu = 1;
         //메인메뉴가 보여지고 있는 상태면
      } else {
         $('#allMenu .j_mobile_mainMenu').css({
            'display': 'none'
         })
         //열려있는 서브 메뉴가 있다면 닫아주기
         // $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300);
         mainMenu = 0;
      }
      return false;
   })

   //메인메뉴 클릭하면
   $('#allMenu .j_mobile_mainMenu>li').on('click', function() {

      if(subMenu==0){
      //열려있는 서브 메뉴가 있다면 닫아주기
      $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300);
      //선택한 메인메뉴의 서브메뉴 열기
      $(this).find('.j_mobile_subnav').stop().slideDown(300);
      }

      $(this).on('click',function(){
         $(this).find('.j_mobile_subnav').slideUp(300);
      })

      // //1. 다 닫혀있는 경우 0
      // $('#allMenu .j_mobile_mainMenu>li .j_mobile_subnav').stop().slideUp(300);
      // //2. 선택한 메인메뉴의 서브메뉴 열려있는상태 1
      // $(this).find('.j_mobile_subnav').stop().slideDown(300);
      // //2-1. 선택한 메인메뉴를 다시 눌렀을 경우 0
      // $(this).find('.j_mobile_subnav').stop().slideUp(300);
      // //2-2. 다른 메인메뉴를 눌렀을 경우 1
      // $(this).find('.j_mobile_subnav').stop().slideDown(300);

      return false;
   })
})
