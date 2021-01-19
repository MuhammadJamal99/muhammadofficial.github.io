$(function(){
    'use strict';
     $('.toggle').click(function(){
         $('.toggle').toggleClass('active');
         $('nav ul').toggleClass('active-menu');
     });
});
/**
 * $('.navbar li a').click(function(e){
        e.preventDefault();
        $('body').css('paddingTop', $('.navbar').innerHeight() + 11);

        $("html, body").animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });
    $('.navbar li a').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        //Anthor Way
        /*$('.navbar a').removeClass('active');
        $(this).addClass('active');
    });
    $(window).scroll(function(){
        $('.box').each(function(){
            if($(window).scrollTop()>$(this).offset().top) {
                let boxId = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="' + boxId + '"]').addClass('active');
            }
        });
    });*/