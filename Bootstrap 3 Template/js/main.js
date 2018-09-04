/*global $, alert, console*/
$(function () {
    'use strict';
    
    // Nice Scroll in my Template
    $('html').niceScroll({
        cursorcolor: '#3489db',
        cursorwidth: '10px',
        cursorborder: '1px solid #3489db',
        cursorborderradius: '10px'
    });
    
    // Opacity for navbar
    $(window).scroll(function () {
        var navbar = $(".navbar");
        var cal = "scrolled";
        $(window).scrollTop() >= navbar.height() ? navbar.addClass(cal) : navbar.removeClass(cal);
    });
    
    // Deal With Tabs
    $('.tab-switch li').click(function () {
        // Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tabs-section .tabs-content > div').hide();
        // Show Div Connected With Thsi Link
        $('.' + $(this).data('class')).show();
    });
    
    // Loading Spinner 
    $(window).load(function () {
        $(".loading .spinner").fadeOut(1000, function () {
            $(".loading").fadeOut(1000, function () {
                $(".loading").remove();
            });
        });
    });
    
    // Smoth Scroll To Website Section
    $('.navbar a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 20,
        }, 900);
    });
});















