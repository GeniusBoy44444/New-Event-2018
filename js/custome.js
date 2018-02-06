/*globals $:false, window, document*/

// Start Loading Screen...

$(window).on('load', function () {
    "use strict";
            
    $(".loading-overlay .loading").fadeOut(1000, function () {
        $('body').css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
            
        // Start Animation To Header Content After Loading...
        $('.h1').delay(800).css({
            
            animation: "bounceIn 1s",
            opacity: 1
            
        });
            
        $('.h3').delay(800).css({
            
            animation: "bounceIn 1s",
            opacity: 1
            
        });
            
        $('.bt-learn').delay(1000).animate({ //3- animate : LEARN MORE
            opacity: 1,
            marginTop: 42
        }, 1000);
            
        $('.bt-reg').delay(1000).animate({ // animate : REGISTER NOW
            opacity: 1,
            marginTop: 42
        }, 1000);
    });
});
// End Loading Screen

// trigger mixitup
    
$(function () {
    "use strict";
    $("html").niceScroll({
        cursorcolor: "#f2545f",
        cursorborder: "1px solid #f2545f"
    });
});


// Start Main jQ...
$(window).ready(function () {
    "use strict";
    
    
    // Start myHeader resize with window in any Browser ! ....
    var myheader = $('.header');
    myheader.height($(window).height());
    $(window).resize(function () {
        myheader.height($(window).height());
    });
    
    
    // Start switching active class Between Links in nav-bar!...
    $('.nav-ul li').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    // hover on navbar when scrolling bottom !
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('.nav-bar').css({
                backgroundColor : "black",
                transition: "all 0.4s ease-in-out"
            });
        } else {
            $('.nav-bar').css({
                backgroundColor : "transparent",
                transition: "all 0.4s ease-in-out"
            });
        }
    });
    
    
    // hover on ( View-text ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('.view-text').animate({
                opacity: 1,
                marginTop: 0
            }, 500); // you can adjust (1000) to Control in your animation..
        }
    });
    
    
    // hover on ( View-image ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 300) {//you can adjust (300) to any number you want..
            $('.view-image').animate({
                opacity: 1,
                marginTop: 0
            }, 1000);
        }
    });
    
    
    // hover on ( over-1 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 850) {
            $('.over-1').animate({
                opacity: 1,
                position: "static",
                right: 0
            }, 500);
        }
    });
    
    
    
    // hover on ( over-2 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 850) {
            $('.over-2').animate({
                opacity: 1,
                position: "static",
                top: 0
            }, 1000);
        }
    });
    
    
    // hover on ( over-3 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 850) {
            $('.over-3').animate({
                opacity: 1,
                position: "static",
                left: 0
            }, 500);
        }
    });
    
    
    // hover on ( view-text-3 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 1400) {
            $('.view-text-3').animate({
                opacity: 1,
                position: "static",
                marginTop: 0
            }, 500);
        }
    });
    
    
    // hover on ( view-video ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 1400) {
            $('.view-video').animate({
                opacity: 1,
                position: "static",
                marginTop: 0
            }, 1000);
        }
    });
    
    
    // hover on ( speak-1 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 1800) {
            $('.speak-1').css({
                animation: "bounceIn 1s",
                opacity: 1
            });
        }
    });
    
    
    // hover on ( #owl-demo .imag-1 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2000) {
            $('#owl-demo .imag-1').animate({
                opacity: 1
            }, 800);
        }
    });
    
    
    // hover on ( #owl-demo .imag-2 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2000) {
            $('#owl-demo .imag-2').animate({
                opacity: 1
            }, 1000);
        }
    });
    
    
    // hover on ( #owl-demo .imag-3 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2000) {
            $('#owl-demo .imag-3').animate({
                opacity: 1
            }, 1200);
        }
    });
    
    
    // hover on ( #owl-demo .imag-4 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2000) {
            $('#owl-demo .imag-4').animate({
                opacity: 1
            }, 1400);
        }
    });
    
    
    // hover on ( #owl-demo .imag-5 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2000) {
            $('#owl-demo .imag-5').animate({
                opacity: 1
            }, 1600);
        }
    }); /**** End Hover On owl.carousel ****/
    
                          
    
    // Star hover on programs-ul- li to change class active & class special...
    $('.programs-navbar ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.programs-navbar ul li').click(function () {
        $(this).addClass('special').siblings().removeClass('special');
    }); // End hover on programs-ul- li to change class active & class special...
    
    
    
    // Start Click on(programrs) section....
    $('.firstday').click(function () {  //// On Click (firstday)
        $('.second-day, .third-day').addClass('visible')
            .siblings('.first-day').removeClass('visible');
    });
    $('.secondday').click(function () {  // On Click (secondday)
        $('.first-day, .third-day').addClass('visible')
            .siblings('.second-day').removeClass('visible');
    });
    $('.thirdday').click(function () {  // On Click (thirdday)
        $('.first-day, .second-day').addClass('visible')
            .siblings('.third-day').removeClass('visible');
    }); // End Click on(programrs) section....
    
    
    
    // hover on ( our-programs ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2400) {
            $('.our-programs').css({
                animation: "bounceIn 1s",
                opacity: 1
            });
        }
    });
    
    
    // hover on ( All-Programs ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 2500) {
            $('.All-Programs').animate({
                opacity: 1,
                marginTop: 0
            }, 1000);
        }
    });
    
    
    // hover on ( Register-Content ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 3600) {
            $('.register-content').animate({
                opacity: 1,
                marginTop: 0
            }, 500);
        }
    });
    
    
    // hover on ( Register-Form ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 3600) {
            $('.register-form').animate({
                opacity: 1,
                marginTop: 0
            }, 1000);
        }
    });
    
    // Start owlCarousel
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        polit: true,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
 
    });
    
    // hover on ( questions-headline ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 4200) {
            $('.questions-headline').css({
                animation: "bounceIn 1s",
                opacity: 1
            });
        }
    });
    
    
    // hover on ( questions ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 4250) {
            $('.questions').animate({
                opacity: 1,
                marginTop: 0
            }, 1000);
        }
    });
    
    
    // Start Accordion Section... 
    $(document).ready(function () {
        $(".contentss:first").css("display", "block");
        $('section h2').click(function () {
            $(this).next().slideToggle(500);
            $('.contentss').not($(this).next()).slideUp(500);
        });
    });

    
    // hover on ( questions ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 4500) {
            $('.venue-content').animate({
                opacity: 1,
                marginLeft: 0
            }, 1000);
        }
    });
    
    
    // hover on ( questions-headline ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5300) {
            $('.sponsors-headline').css({
                animation: "bounceIn 1s",
                opacity: 1
            });
        }
    });
    
    
    // hover on ( sponsors-content .sp-1 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5410) {
            $('.sponsors-content .sp-1').animate({
                opacity: 1,
                position: "static",
                right: 0
            }, 500);
        }
    });
    
    // hover on ( sponsors-content .sp-1 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5410) {
            $('.sponsors-content .sp-2').animate({
                opacity: 1,
                position: "static",
                top: 0
            }, 500);
        }
    });
    
    // hover on ( sponsors-content .sp-1 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5410) {
            $('.sponsors-content .sp-3').animate({
                opacity: 1,
                position: "static",
                top: 0
            }, 500);
        }
    });
    
    // hover on ( sponsors-content .sp-2 ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5410) {
            $('.sponsors-content .sp-4').animate({
                opacity: 1,
                position: "static",
                left: 0
            }, 500);
        }
    });
    
    
    // hover on ( contact-content ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5700) {
            $('.contact-content').animate({
                opacity: 1,
                marginTop: 0
            }, 1000);
        }
    });
    
    
    // hover on ( contact-form ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 5700) {
            $('.contact-form').animate({
                opacity: 1,
                marginTop: 0
            }, 1000);
        }
    });
    
    
    // hover on ( questions-headline ) section when you start scrolling bottom..
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 6300) {
            $('.footer').css({
                animation: "bounceIn 1s",
                opacity: 1
            });
        }
    });
    
    
    // main
});
