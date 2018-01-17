$(document).ready(function() {

// list slide toggle

  $('.p_news_list').on('click',function(){
    $('.p_news_list_plus span').removeClass('on');
        $('.p_news_list .p_list_hidden').stop().slideUp(300);
    $(this).find($('.p_list_hidden')).stop().slideToggle(300);
    
    $(this).find($('.p_news_list_plus span')).toggleClass('on');
  });

 //  plus hide and show
//   $('.p_news_list').click(function(){
//     $('.p_news_list_plus span').removeClass('on');
//
//
// });

  //  pagination start

  $('.p_pagination li:first-child a').addClass('active');

  //  pagination

  $('.p_pagination li a').click(function() {

    $('.p_pagination li a').removeClass('active');

    $(this).addClass('active');

    return false;
  })


// prev
$('.p_select_left').on('click',function(){
  if($('.p_pagination li:first-child a').hasClass('active')){
    $(this).addClass('active');
  }else{
    $('.p_pagination').find('.active').removeClass('active').parent().prev().find('a').addClass('active');
  }
})

// next
$('.p_select_right').on('click',function(){

  if($('.p_pagination li:last-child a').hasClass('active')){
    $(this).addClass('active');
  }else{

  $('.p_pagination').find('.active').removeClass('active').parent().next().find('a').addClass('active');
}

})

});
