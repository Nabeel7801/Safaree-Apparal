var fixed_menu = true;
window.jQuery = window.$ = jQuery;


jQuery(document).ready(function() {
    jQuery("body").niceScroll({
        cursorcolor: "#333",
        cursorborder: "0px",
        cursorwidth: "8px",
        zindex: "9999"
    });
});


function calculateScroll() {
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 200;
    var rangeBottom = 500;
    $('.navmenu').find('.scroll_btn a').each(function() {
        contentTop.push($($(this).attr('href')).offset().top);
        contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
    })
    $.each(contentTop, function(i) {
        if (winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom) {
            $('.navmenu li.scroll_btn')
                .removeClass('active')
                .eq(i).addClass('active');
        }
    })
};

jQuery(document).ready(function() {
    //MobileMenu
    if ($(window).width() < 768) {
        jQuery('header .navmenu').hide();
        jQuery('header .menu_toggler').show();

        jQuery('.menu_toggler, .navmenu ul li a').click(function() {
            jQuery('header .navmenu').slideToggle(300);
        });

        jQuery('.menu_closed').click(function() {
            $('#mobile_menu').toggleClass('menu_opened');
        })

        jQuery('.menu_opened').click(function() {
            $('#mobile_menu').toggleClass('menu_closed');
        })

    } else {
        jQuery('header .menu_toggler').hide();
        jQuery('header .navmenu').show();
    }

});
$(window).resize(function() {
    if ($(window).width() < 768) {
        jQuery('header .navmenu').hide();
        jQuery('header .menu_toggler').show();
    } else {
        jQuery('header .menu_toggler').hide();
        jQuery('header .navmenu').show();
    }
})


/* Superfish */
jQuery(document).ready(function() {
    if ($(window).width() >= 768) {
        $('.navmenu ul').superfish();
    }
});