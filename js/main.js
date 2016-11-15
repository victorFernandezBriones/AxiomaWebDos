$(document).ready(function () {
    'use strict';


    $(".button-collapse").sideNav();

//    $("#fh5co-concesiones").stellar();
//    $("#fh5co-construccion").stellar();
//    $("#parallaxEstudio").stellar();

    $('.modal-trigger').leanModal();

    $("#owl-clientes").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        pagination: false,
        navigationText: [
            "<a class='btn-floating btn-large waves-effect waves-light colorAxioma'><i class='material-icons'>fast_rewind</i></a>",
            "<a class='btn-floating btn-large waves-effect waves-light colorAxioma'><i class='material-icons'>fast_forward</i></a>"
        ]
    });


    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    Materialize.updateTextFields();
    // iPad and iPod detection	
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
                (navigator.platform.indexOf("iPhone") != -1) ||
                (navigator.platform.indexOf("iPod") != -1)
                );
    };

    var fullHeight = function () {
        if (!isiPad() || !isiPhone()) {
            $('.js-fullheight-home').css('height', $(window).height() - $('.fh5co-main-nav').height());
            $(window).resize(function () {
                $('.js-fullheight-home').css('height', $(window).height() - $('.fh5co-main-nav').height());
            })
        }
    };

    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };

    var fh5coTabs = function () {

        $('.fh5co-tabs li a').click(function (event) {
            event.preventDefault();
            var $this = $(this),
                    tab = $this.data('tab');
            $('.fh5co-tabs li').removeClass('active');
            $this.closest('li').addClass('active');
            $this.closest('.fh5co-tabs-container').find('.fh5co-tab-content').removeClass('active');
            $this.closest('.fh5co-tabs-container').find('.fh5co-tab-content[data-tab-content="' + tab + '"]').addClass('active');
        });
    }


    var gridAutoHeight = function () {
        if (!isiPhone() || !isiPad()) {
            $('.fh5co-grid-item').css('height', $('.fh5co-2col-inner').outerHeight() / 2);
        }
        $(window).resize(function () {
            if (!isiPhone() && !isiPad()) {
                $('.fh5co-grid-item').css('height', $('.fh5co-2col-inner').outerHeight() / 2);
            }
        });
    }

    var sliderSayings = function () {
        $('#fh5co-sayings .flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 5000,
            directionNav: false,
            controlNav: true,
            smoothHeight: true,
            reverse: true
        });
    }



    // Parallax
    var parallax = function () {

        // $(window).stellar();
        if (!isiPhone() || isiPad()) {
            $(window).stellar({horizontalScrolling: false});
        }

    };



    var scrolledWindow = function () {

        $(window).scroll(function () {

            var scrollPos = $(this).scrollTop();


            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

        });

        $(window).resize(function () {
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });

    };



    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };




    // Document on load.
    $(function () {

//        fullHeight();
        loaderPage();
        fh5coTabs();
        gridAutoHeight();
        // sliderMain();
        // sliderSayings();
//        offcanvasMenu();
        parallax();
//        scrolledWindow();
//        clickMenu();
//        navigationSection();
        goToTop();

    });
});
        