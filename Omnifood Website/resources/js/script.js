$(document).ready(function () {
    $('.js--nav-wp').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })

    /*  animation on scroll */

    $('.js--wp-1').waypoint(function (direction) {

        $('.js--wp-1').addClass('animated fadeIn');

    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50 %'
    })

    $('.js--wp-4').waypoint(function (direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '50%'
        }

    )

});