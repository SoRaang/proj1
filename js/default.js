$(document).ready(() => { // jQuery Load
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $('#mnuQuick').fadeIn();
        } else {
            $('#mnuQuick').fadeOut(50);
        }
    });

    $('.btnBurger').click(function() {
        $('#mnuSitemap').animate({'right': '0'});
    });

    $('.sitemap_close').click(function() {
        $(this).parent('aside').animate({'right': '-100%'});
    });
}) // jQuery Closed