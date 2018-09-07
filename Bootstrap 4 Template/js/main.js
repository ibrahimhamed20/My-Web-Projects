/*global $, alert, console*/
$(function () {
  'use strict';

  //  Adjust Slider height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height( winH - ( upperH + navH ) );

    // Links add active class
    $('.navbar-nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Smoth Scroll To Website Section
    $('.navbar a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 20,
        }, 900);
    });

    // Featured work shuffle
    $('.work-list li').on('click', function(){
       $(this).addClass('active').siblings().removeClass('active');
        if ( $(this).data('class') === 'all' ) {
            $('.work').css('opacity' , '1');
        } else {
            $('.work').css('opacity' , '0.1');
            $($(this).data('class')).parent().css('opacity' , 1);
        }
    });

    // Loading Spinner
    $(window).load(function () {
        $(".loading .spinner").fadeOut(1000, function () {
            $(".loading").fadeOut(1000, function () {
                $(".loading").remove();
            });
        });
    });
});
