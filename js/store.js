$(document).ready(function() {

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
