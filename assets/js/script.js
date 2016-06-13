$(document).ready(function () {

    //menu
   /* //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));
    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';
    $("#slide-nav").on("click", toggler, function (e) {
        var selected = $(this).hasClass('slide-active');
        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');
        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });
    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    $(window).on("resize", function () {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }
    });*/
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        $(".navbar-brand span").removeClass("transforme-down");
        if (scroll > 100) {
            $(".navbar-brand span").removeClass("transforme-up");
            $(".navbar-brand span").addClass("transforme-down");
        } else {
            $(".navbar-brand span").addClass("transforme-up");
        }
    });
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('#menu li a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('#menu li a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        /*$('li a').not('.back-to-top').addClass('active');*/

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
    //menu slideUp and slideDown
    $(window).resize(function() {
        menu();
    });
    menu();
    function menu() {
        var windowWidth =  window.innerWidth;
        if (windowWidth < 768) {
            $("#menu a").click(function () {
                $("#menu").slideUp();
                $(".navbar-toggle").trigger("click");
            });
            $(".navbar-toggle").click(function () {
                $("#menu").slideDown();
            });
        }
    }
    //scroll reveal
    var win = $(window).width();
    var fooReveal = {
        delay    : 500,
        distance : '150px',
        easing   : 'ease-in-out',
        rotate   : { z: 0 },
        scale    : 1.1,
        mobile   : !0,
        delay    : "always",
        viewFactor  : 1,
        origin      : 'left',
        opacity     : 0
    };
    if ( win > 768){
        window.sr = ScrollReveal();
        sr.reveal('.box', fooReveal, 100);
        sr.reveal('.socialLogo', { delay: 300, scale: 1, origin : 'top', opacity : 0, distance: '200px' });
        sr.reveal('#sectionZero h2, #sectionZero h1', { delay: 300, scale: 1, origin : 'left', opacity : 0, distance: '300px' });
        sr.reveal('#sectionThree .portfolio', { delay: 300, scale: 1.1, easing : 'ease-in-out', reset : !0, origin : 'right', opacity : 0, distance: '500px'}, 150);
    }
    $(".box").mouseenter(function() {
        $(this).addClass("hover"), $(this).css("z-index", "3000").velocity({
            scale: 1.13
        }, {
            duration: 150
        })
    }).mouseleave(function() {
        $(this).removeClass("hover"), $(this).css("z-index", "10").velocity("reverse")
    }), $(".box").mouseenter(function() {
        $(this).css("z-index", "3000")
    }).mouseleave(function() {
        $(this).css("z-index", "10")
    });

    //back to top button
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
    var amountScrolled = 300;
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });


});