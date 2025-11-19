(function ($) {
    "use strict";
    // preloader
    var loader = function () {
        setTimeout(function () {
            if ($('.preloader').length > 0) {
                $('.preloader').removeClass('show');
            }
        }, 1000);
    };
    loader();
    // sticky
    var wind = $(window);
    wind.on('scroll', function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $('.navbar');
        if (bodyScroll > 300) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });
    // scroll spy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        rootMargin: '0px 0px -74%'
    });
    // smooth scrolling
    var scrollLink = $('nav ul li a, .hero-text .box-btn, .hero-text .line-btn');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 500);
    });
    // skill progress
    var wind = $(window);
    wind.on('scroll', function () {
        $('.bar-progress .barfiller').each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
    // data background
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')')
    });
    // parallax
    $('.counter').parallax('50%', 0.4)
    // counterUp
    $('.single-counter h1 span').counterUp({
        delay: 10,
        time: 1000
    });
    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    // isotope
    $('.filter span:first-child').addClass('active');
    var $grid = $('.gallery').imagesLoaded(function () {
        // init Isotope after all images have loaded
        $grid.isotope({
            // options...
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.grid-item'
            }
        });
    });
    // filter items on button click
    $('.filter').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).addClass('active').siblings().removeClass('active');
    });
    // owl carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // scroll up
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
}(jQuery));