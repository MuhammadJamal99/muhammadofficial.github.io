$(function(){
  'use strict';

  $("body").css("padding-top", $(".navbar.fixed-top").height());

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
  /*side bar*/ 
  $('#sidebarCollapse').on('click', function () {
		$('#sidebar-menu').toggleClass('active');
	});
	
	$('#close-sidebar').on('click', function () {
		$('#sidebar-menu').toggleClass('active');
	});
});

// initialize AOS Animation
AOS.init();