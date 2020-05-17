$(function () {
    // $("#menu").on("click", "a", function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({ scrollTop: top }, 1500);
    // });
    $('.menu__btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu__btn--active');
        $('.menu__list').slideToggle();
    });
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 2000,
        pauseOnHover: true,
        verticalSwiping: true,
        // draggable: false
    });
});