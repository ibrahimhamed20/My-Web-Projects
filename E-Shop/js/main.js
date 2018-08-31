/*global $, alert, console*/
$(function () {
    'use strict';
    
    // Nice Scroll in my Template
    $('html').niceScroll({
        
        cursorcolor: '#930223',
        
        cursorwidth: '10px',
        
        cursorborder: '1px solid #930223',
        
        cursorborderradius: '10px'
        
    });
    
    // Opacity for navbar
    $(window).scroll(function () {
        var navbar = $(".navbar");
        var cal = "scrolled";
        $(window).scrollTop() >= navbar.height() ? navbar.addClass(cal) : navbar.removeClass(cal);
    });
});