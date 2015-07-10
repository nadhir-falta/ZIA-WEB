/*****************************************************/
/* Amend function makes homepage position beautiful */
/****************************************************/
jQuery(window).load(function () {
    function amend() {
        "use strict";
        var height;
        height = jQuery(window).height();
        jQuery('#homepage').css('height', "100vh");

        $('.box').css('display', 'none');
        for (var i = 0;  i < 7; i++) {
            $('#my-selector-' + i).css('display', 'none');
        }

        /******** setting dynamic font sizs to titles ******************************/
        jQuery(".slogan").fitText(1.2, { minFontSize: '15px', maxFontSize: '60px' }); 
        jQuery(".site-name").fitText(1.2, { minFontSize: '15px', maxFontSize: '60px' });
        jQuery(".aboutMeTitle").fitText(1.2, { minFontSize: '15px', maxFontSize: '36px' });
        jQuery(".weDoBestTitle").fitText(1.2, { minFontSize: '15px', maxFontSize: '34px' });
    }

    amend();
// if user resizes the screen
    jQuery(window).resize(function () {
        amend();
    });

    function scrolling () {

        //animation to stick the header on scroll after passing the home page
        var ypos = window.pageYOffset;
        var $hpHeight = jQuery('#homepage').css("height");

        var p = $hpHeight.indexOf('p');
        $hpHeight = parseInt($hpHeight.substring(0, p));
        if (ypos > (ypos - 200 )) {
            $('header').removeClass("header");
            $('header').addClass("navbar-fixed-top");
        };
        if (ypos == 0) {
            $('header').removeClass("navbar-fixed-top");
            $('header').addClass("header");
        }

        //animation for about us
        if (ypos > ($hpHeight - 400 )) {
            $('.box').css('display', 'block');
            $('.box').addClass('animated fadeInDown');
        };

        //animation for What we do best
        var aboutHeight = jQuery('#tz-about-head').css("height");
        var px = aboutHeight.indexOf('p');
        aboutHeight = parseInt(aboutHeight.substring(0, px)) - 200;

        if (ypos > (aboutHeight + $hpHeight )) {
            
            for (var i = 0;  i < 7; i++) {
                $('#my-selector-' + i).css('display', 'inline-block');
            }

            $('#my-selector-1').addClass('animated fadeInLeft');
            $('#my-selector-2').addClass('animated fadeInLeft');
            $('#my-selector-3').addClass('animated fadeInUp');
            $('#my-selector-4').addClass('animated fadeInUp');
            $('#my-selector-5').addClass('animated fadeInRight');
            $('#my-selector-6').addClass('animated fadeInRight');
            
        };
    }
    window.addEventListener ("scroll", scrolling);
});


// main background carousel
jQuery(window).ready(function () {
    jQuery.backstretch([
        "assets/chicago.jpg"
        ,
        "assets/hoisting.jpg"
        ,
        "assets/software.jpg"
        ], {duration: 5000, fade: 'slow'});
});


jQuery(window).load(function () {

    jQuery("#loading").fadeOut("1500", function () {
        jQuery('#loading img').css("display", "none");
        jQuery('#loading').css("display", "none");
        jQuery('.loading').css("display", "none");
    });


    // function handler for what we do boxs click
    $("div").on('click', function () {
        var selector = this.id;
        if(selector.indexOf("my-selector") >= 0) {
            for (var i = 0;  i < 7; i++) {
                $('#formatted-'+i).css('display', 'none');
                $('#my-selector-' + i).removeClass('active');
                $('#formatted-'+i).removeClass('active');
            }
            setTimeout(function() {
                var selectorNum = selector.substr(selector.length - 1);
                $('#formatted-'+selectorNum).css('display', 'block');
                $('#formatted-'+selectorNum).addClass('active');
                $('#'+ selector).addClass('active');
            }, 0);  
        }
    });

    if (jQuery(window).width() > 767) {
        jQuery('.homepage-inner').addClass('animated fadeInUp');
        jQuery('#button-scroll').addClass('animated bounce');
        $('#formatted-1').css('display', 'block');
        $('#my-selector-1').addClass('active');
    }
    if (jQuery(window).width() < 767) {
        $('.skills').css('background', 'white');
    }

    //flex slider animation

    $('.nav_slide_button').click(function() {
        $('.pull').slideToggle();
    });


    $('#servicesSlider').flexslider({
        animation: "slide",
        touch: true,
        directionNav: false,
        pauseOnHover: false,
        slideshowSpeed: 6000, 
    });
});


$( window ).resize(function() {
    var width = jQuery('#homepage').width() - 30;

    if (jQuery(window).width() > 767) {
        $('#formatted-1').css('display', 'block');
        $('#my-selector-1').addClass('active');

        $('.skills').css('background', 'url(../assets/pic_skills.jpg) no-repeat center 10px');
    }
    else {
        $('#formatted-1').css('display', 'none');
        $('#my-selector-1').removeClass('active');

        $('.skills').css('background', 'white');
    }

        if (jQuery(window).width() > 767) {
            $('.skills').css('background', 'url(../assets/pic_skills.jpg) no-repeat center 10px');
        }
        else {
            $('.skills').css('background', 'white');
        }
});

///**********************/
///* Jquery NAV Plugin */
///********************/

jQuery(document).ready(function () {
    "use strict";
    var $nav;
    var $button_scroll;
    $nav = jQuery('#nav');
    $button_scroll = jQuery('#button-scroll');

    $nav.onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 2200,
        scrollOffset: 30,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'easeOutBack',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    $button_scroll.on('click', 'a', function (e) {
        "use strict";
        var currentPos;
        currentPos = jQuery(this).parent().length;

        $nav.find('li').eq(currentPos).children('a').trigger('click');
        e.preventDefault();
    });
});
//
////Add fixed position to NAV

jQuery(window).bind('scroll resize load', function () {
    jQuery('#tz-header-blog-wrapper').next().css('margin-top', jQuery('#tz-header-blog-wrapper').height() + 'px');
    if (jQuery(window).width() >= 767) {
        if (jQuery(document).scrollTop() >= 500) {
            jQuery('#tz-header-wrapper').addClass('fixed-top');
            jQuery('#tz-header-wrapper').addClass('nav-shadow');
        } else {
            jQuery('#tz-header-wrapper').removeClass('fixed-top');
            jQuery('#tz-header-wrapper').removeClass('nav-shadow');
        }
    }
});


