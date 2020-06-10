$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 700,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prew.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png"></button>',
        responsive: [
            {
                 breakpoint: 768,
                 settings: {
                    dots: true,
                    arrows: false
                 }
             }
         ]
    });
});