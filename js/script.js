$(document).ready(function () {
    $('#menu').click(function () {
        $('.mobile-menu').slideDown();
    })
    $('#close-button').click(function () {
        $('.mobile-menu').slideUp();
    })
    // Subjects
    $('#economic').click(function () {
        $('#economic').addClass("item-active");
        $('#social').removeClass("item-active");
        $('#political').removeClass("item-active");
        $('#sport').removeClass("item-active");
        $('.economic').show();
        $('.social').hide();
        $('.political').hide();
        $('.sport').hide();
    })
    $('#social').click(function () {
        $('#social').addClass("item-active");
        $('#economic').removeClass("item-active");
        $('#political').removeClass("item-active");
        $('#sport').removeClass("item-active");
        $('.social').show();
        $('.economic').hide();
        $('.political').hide();
        $('.sport').hide();
    })
    $('#political').click(function () {
        $('#political').addClass("item-active");
        $('#economic').removeClass("item-active");
        $('#social').removeClass("item-active");
        $('#sport').removeClass("item-active");
        $('.political').show();
        $('.social').hide();
        $('.economic').hide();
        $('.sport').hide();
    })
    $('#sport').click(function () {
        $('#sport').addClass("item-active");
        $('#economic').removeClass("item-active");
        $('#social').removeClass("item-active");
        $('#political').removeClass("item-active");
        $('.sport').show();
        $('.economic').hide();
        $('.political').hide();
        $('.social').hide();
    })
    // video-box 
    $('#videos').click(function () {
        $('#videos').addClass("box-active");
        $('#gallary').removeClass("box-active");
        $('.videos').show();
        $('.gallary').hide();
    })
    $('#gallary').click(function () {
        $('#gallary').addClass("box-active");
        $('#videos').removeClass("box-active");
        $('.gallary').show();
        $('.videos').hide();
    })
    // news-box
    $('.most-view-b').click(function () {
        $('.most-view-b').addClass("cat-active");
        $('.hot-news-b').removeClass("cat-active");
        $('.poupular-b').removeClass("cat-active");
        $('.most-view').show();
        $('.hot-news').hide();
        $('.poupular').hide();
    })
    $('.hot-news-b').click(function () {
        $('.hot-news-b').addClass("cat-active");
        $('.most-view-b').removeClass("cat-active");
        $('.poupular-b').removeClass("cat-active");
        $('.hot-news').show();
        $('.most-view').hide();
        $('.poupular').hide();
    })
    $('.poupular-b').click(function () {
        $('.poupular-b').addClass("cat-active");
        $('.most-view-b').removeClass("cat-active");
        $('.hot-news-b').removeClass("cat-active");
        $('.poupular').show();
        $('.hot-news').hide();
        $('.most-view').hide();
    })
    $(".owl-prev").html('<img src="image/angle-left-solid.svg">');
    $(".owl-next").html('<img src="image/angle-right-solid.svg">');
    // Subjects-m
    $('#economic-m').click(function () {
        $('#economic-m').addClass("item-active-m");
        $('#social-m').removeClass("item-active-m");
        $('#political-m').removeClass("item-active-m");
        $('#sport-m').removeClass("item-active-m");
        $('.economic-m').show();
        $('.social-m').hide();
        $('.political-m').hide();
        $('.sport-m').hide();
    })
    $('#social-m').click(function () {
        $('#social-m').addClass("item-active-m");
        $('#economic-m').removeClass("item-active-m");
        $('#political-m').removeClass("item-active-m");
        $('#sport-m').removeClass("item-active-m");
        $('.social-m').show();
        $('.economic-m').hide();
        $('.political-m').hide();
        $('.sport-m').hide();
    })
    $('#political-m').click(function () {
        $('#political-m').addClass("item-active-m");
        $('#economic-m').removeClass("item-active-m");
        $('#social-m').removeClass("item-active-m");
        $('#sport-m').removeClass("item-active-m");
        $('.political-m').show();
        $('.social-m').hide();
        $('.economic-m').hide();
        $('.sport-m').hide();
    })
    $('#sport-m').click(function () {
        $('#sport-m').addClass("item-active-m");
        $('#economic-m').removeClass("item-active-m");
        $('#social-m').removeClass("item-active-m");
        $('#political-m').removeClass("item-active-m");
        $('.sport-m').show();
        $('.economic-m').hide();
        $('.political-m').hide();
        $('.social-m').hide();
    })
    // video-box 
    $('#videos-m').click(function () {
        $('#videos-m').addClass("box-active");
        $('#gallary-m').removeClass("box-active");
        $('.videos-m').show();
        $('.gallary-m').hide();
    })
    $('#gallary-m').click(function () {
        $('#gallary-m').addClass("box-active");
        $('#videos-m').removeClass("box-active");
        $('.gallary-m').show();
        $('.videos-m').hide();
    })
})
$('.suggest-d').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
$('.suggest-m').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})
$('.subjects-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})