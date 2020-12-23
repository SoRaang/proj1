$(document).ready(() => { // jQuery Load
    $('span.close').click(function() {
        $('#topBanner').slideUp();
    })

    $('.lazy').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true,
        arrows: true,
        dots: true,
        zIndex: 1
    });

    $('.slideCompare').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.comp_prev'),
        nextArrow: $('.comp_next'),
        dots: false,
        zIndex: 1
    });

    let i;
    i = setInterval(function() {
        $('#noticeIndex > ul > li:first-child').animate({'margin-top': '-1rem'}, function(){
            $(this).appendTo('#noticeIndex > ul');
            $(this).css({'margin-top': '0'});
        });
    }, 5000);
}) // jQuery Closed