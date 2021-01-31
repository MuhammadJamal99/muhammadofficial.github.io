$(function(){
  'use strict';
  /*fix fixed top*/ 
  $("body").css("padding-top", $(".navbar.fixed-top").height());
  /* start pop up */ 
  const popup = $('.popup');
  const closePopup = $('.popup-close');
  if(popup){
    closePopup.on('click',()=>{
      popup.addClass("hide-popup");
    });
    $(window).on('load',()=>{
      setTimeout(()=>{
        popup.removeClass("hide-popup");
      }, 500);
    });
  }
  /* end pop up */ 

  /* start sidebar */ 
  $('#sidebarCollapse').on('click', function () {
		$('#sidebar-menu').toggleClass('active');
	});
	$('#close-sidebar').on('click', function () {
		$('#sidebar-menu').toggleClass('active');
  });
  /* end sidebar */ 

  /* scroll to top button */ 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
  /* end scroll to top button */
});
/* initialize AOS Animation */
AOS.init();