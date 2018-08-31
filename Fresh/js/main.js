/*global $, document */
$(function () {
    'use strict';

    // Nice Scroll in my Template
    $('html').niceScroll({

        cursorcolor: 'green',

        cursorwidth: '10px',

        cursorborder: '1px solid green',

        cursorborderradius: '5px'

    });

    $('.navbar').affix({
        offset: {
            /* Affix the navbar after scroll below header */
            top: $(".first_header").outerHeight(true)
        }
    });
});

$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 5000
    });
});
