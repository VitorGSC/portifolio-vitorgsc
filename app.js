const myCarousel = document.querySelector('#carouselEx');

$(document).ready(function() {
    $('#btnHome').addClass('d-none');
    $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $('#btnHome').addClass('d-none');
        } else {
            $('#btnHome').removeClass('d-none');
        }
    });

    $('#btnHome').click(function() {
        $('html, body').animate({scrollTop: 0}, 100);
    });

    $('.nav-link').click(function() {
        var target = $(this).attr('href');
        var navbarHeight = $('.navbar').outerHeight(true);
        $('html, body').animate({scrollTop: $(target).offset().top - navbarHeight - 20}, 100); 
        console.log($(target).offset().top);
    });
});



if(window.matchMedia("(min-width: 768px)").matches) {
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: false
    });	

    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();
    var scrollPosition = 0;

    $('#carouselEx .carousel-control-prev').hide();

    $('#carouselEx .carousel-control-next').on('click', function() {
        if(scrollPosition < (carouselWidth - (cardWidth * 4))) {
            scrollPosition = scrollPosition + cardWidth;
            $('#carouselEx .carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
        if(scrollPosition > 0) {
            $('.carousel-control-prev').show();
        }
        if(scrollPosition > carouselWidth - cardWidth * 4) {
            $('.carousel-control-next').hide();
        }
    });

    $('#carouselEx .carousel-control-prev').on('click', function() {
        if(scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth;
            $('#carouselEx .carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
        if(scrollPosition <= 0) {
            $('#carouselEx .carousel-control-prev').hide();
        }
        if(scrollPosition < carouselWidth - cardWidth * 4) {
            $('.carousel-control-next').show();
        }
    });
} else {
    $(myCarousel).addClass('slide');
}