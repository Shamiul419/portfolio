jQuery(document).ready(function ($) {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
       
        $('.navbar').addClass('sticky');
      } else {
      /*  $('.navbar').fadeOut('slow');*/
        $('.navbar').removeClass('sticky');
      }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");

    });

});