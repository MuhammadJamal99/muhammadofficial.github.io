$(function () {
  "use strict";
  /* search bar */
  $("#search-bar, .fa-search").mouseenter(function () {
    console.log("jgspapoapsdapo");
    $(".logo").hide();
  });
  $("#search-bar, .fa-search").mouseleave(function () {
    console.log("jgspapoapsdapo");
    $(".logo").show();
  });

  /* sidebar */
  $(".fa-bars").click(function () {
    $(".navbar").toggle();
    $(this).toggleClass("fa-times");
  });
  $(".navbar, .navbar a").click(function () {
    $(".navbar").hide();
    $(".fa-bars").removeClass("fa-times");
  });

  /* fixed scroll navbar */
  $(window).on("scroll load", function () {
    if ($(window).scrollTop() > 20) {
      $("#header").css({
        background: "#eb4b4d",
        "box-shadow": "0 0.1rem 0.3rem #000",
      });
    } else {
      $("#header").css({
        background: "#333",
        "box-shadow": "none",
      });
    }
  });
  /* home slider */
  $(".home-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
  });

  /* products slider */
  $(".products-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    // autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      990: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  /* testmonials slider */
  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
  });
  
  /* testmonials slider */
  $('.brand-slider').owlCarousel({
    loop:true,
    items:4,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        550:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
  $('.size li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});
