$(document).ready(() => { // jQuery Load
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $('#mnuQuick').fadeIn();
        } else {
            $('#mnuQuick').fadeOut(50);
        }
    });

    $('.btnBurger').click(function() {
        $('#mnuSitemap').slideDown();
    });

    $('.sitemap_close').click(function() {
        $(this).parents('aside').slideUp();
    });
}) // jQuery Closed