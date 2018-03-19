$(document).ready(function () {

    // $('.navbar-nav__link').click(function(){
    $('.navbar-nav__link').click(function(){
        $('.navigation').css({display: 'block'});
    });

    $('.exit').click(function(){
        $('.navigation').css({display: 'none'});
    });

    $('.nav').click(function(){
        $('.navigation').css({display: 'block'});
    });

    $(window).resize(function () {
        if ($(window).width() <= 649) {
            $('.nav').css({ display: 'block' });
        } 
    });

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll > $('.products').offset().top - ($(window).height() / 1.3)) {
            $('.products .product').each(function (picture) {
                setTimeout(function () {
                    $('.products .product').eq(picture).addClass('is-showing');
                }, 150 * (picture + 1));
            });
        }
    });

    var count = 0;
    $('.right').click(function () {
            count++;
            if(count > 0){
                $('.left').css({display: 'block'});
            }
            var currImg = $('.active');
            var nextImg = currImg.next()
            if(nextImg.length) {
               currImg.removeClass('active').css({display: 'none'});
               nextImg.addClass('active').css({display: 'block'});
            } 
            if(count === 4){
                $(this).css({display: 'none'});
            }
    });

    $('.left').click(function () {
        count--;
        if(count < 4){
            $('.right').css({display: 'block'});
        }
       
        var currImg = $('.active');
        var prevImg = currImg.prev();
        if(prevImg.length) {
           currImg.removeClass('active').css({display: 'none'});
           prevImg.addClass('active').css({display: 'block'});
        } 
        if(count === 0){
            $(this).css({display: 'none'});
        }
    });

    $(window).resize(function () {
        var slidesArr = $('.slide');
        if ($(window).width() <= 800) {
            $('.slide:nth-child(even)').css({display: 'none'});
            $('.right').css({display: 'none'});
            $('.left').css({display: 'none'});
        } 
    });




});