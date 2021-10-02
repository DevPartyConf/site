// Sticky header
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.head').addClass("sticky");
        $('header').addClass("p-top");
    }
    else {
        $('.head').removeClass("sticky");
        $('header').removeClass("p-top");
    }
});
// Single nav function
$("nav ul").singlePageNav({
    "offset": 30,
    "updateHash": true,
    "filter": ":not(.external)"
});
// Pop-up form funciton
$('.form-box__close').click(function () {
    $(this).closest('.col-lg-12').find('.form-box_white').removeClass('active fadeInUp animated');
    $(this).closest('.col-lg-12').find('.review').removeClass('hidden')
});
$('.container .review').click(function () {
    $(this).closest('.col-lg-12').find('.review').addClass('hidden');
    $(this).closest('.col-lg-12').find('.form-box_white').addClass('active fadeInUp animated');
    return false;
});
// Toggle menu funciton 
$('.toggle-menu').click(function () {
    $('.toggle-menu__sandwitch').toggleClass('active');
    $('header').toggleClass('active');
});
// Speakers slider
var swiperHow,
    swiperPartner;
$(document).ready(function () {
    $('#responsive').lightSlider({
        item: 4,
        auto: false,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        verticalHeight: 900,
        controls: false,
        currentPagerPosition: 'middle',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

    swiperHow = new Swiper ('.swiper-how', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    $('.swiper-how').on('click', '.swiper-slide-next', function(){
        swiperHow.slideNext();
    });
    $('.swiper-how').on('click', '.swiper-slide-prev', function(){
        swiperHow.slidePrev();
    }); 
});
// Ask organisators
$('a.header__title_h2').click(function (e) {
    $(window).scrollTo('#contacts', 600, {
        offset: {
            top: -30
        }
    });
    e.preventDefault();
});
// Submit talk
$('.speak').click(function (e) {

    var review = $('.container .review');

    review.closest('.col-lg-12').find('.review').addClass('hidden');
    review.closest('.col-lg-12').find('.form-box_white').addClass('active');

    $.scrollTo('#speaker-form', 600, {
        offset: {
            top: -100
        }
    });

    e.preventDefault();
});
// Scroll top
$('.logo').click(function (e) {
    $.scrollTo('#index', 600);
    e.preventDefault();
});
// Adoptive schedule
$(function(){
    resizeProgram();
});

$(window).resize(resizeProgram);

function resizeProgram() {
    if ($(window).width() > 483) {
        var welcomeBlock = $('#sec-1 .block').first();
        var sec2firstBlockMargin = parseInt($(welcomeBlock).css('height')) + parseInt($(welcomeBlock).css('margin-top'))+1;
        $('.spec-space').css('margin-top', sec2firstBlockMargin + 'px');
        for (i = 0; i < 17; ++i) {
            var blockOfSec1 = $('#sec-1').children(".block")[i+1];
            var blockOfSec2 = $('#sec-2').children(".block")[i];
            var heightOfSec1BlockDesc = parseInt($(blockOfSec1).children(".desc").css('height'));
            var heightOfSec2BlockDesc = parseInt($(blockOfSec2).children(".desc").css('height'));
            if (heightOfSec1BlockDesc > heightOfSec2BlockDesc){
                $(blockOfSec2).css('height',$(blockOfSec1).css('height'));
                $(blockOfSec1).css('height', 'auto');
            }else{
                $(blockOfSec1).css('height',$(blockOfSec2).css('height'));
                $(blockOfSec2).css('height', 'auto');
            }
        }
        
        $('.partner__list').show();
        $('.swiper-partner').hide();
    } else {
        $('.spec-space').css('margin-top', '0px');
        $('#sec-1 .block').css('height','auto');
        $('#sec-2 .block').css('height','auto');
        
        if (swiperHow != undefined) {
            swiperHow.destroy();
            swiperHow = new Swiper ('.swiper-how', {
                loop: true,
                slidesPerView: 1,
                centeredSlides: true,
                nextButton: '.swiper-how .swiper-button-next',
                prevButton: '.swiper-how .swiper-button-prev',
                pagination: '.swiper-how .swiper-pagination',
                paginationClickable: true,
            }); 
        }
        $('.partner__list').hide();
        $('.swiper-partner').show();
        if(swiperPartner == undefined) {
            swiperPartner = new Swiper ('.swiper-partner', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 50,
                centeredSlides: true,
                nextButton: '.swiper-partner .swiper-button-next',
                prevButton: '.swiper-partner .swiper-button-prev',
                pagination: '.swiper-partner .swiper-pagination',
                paginationClickable: true,
            }); 
        }
    }
}