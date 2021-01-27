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
  });

// initialize AOS Animation
AOS.init();